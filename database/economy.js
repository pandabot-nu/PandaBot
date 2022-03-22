const { Results } = require('slot-machine')
const profileModel = require('./models/profileSchema')

const coinsCache = {} // { 'guildId-userId': coins }

module.exports = (client) => { }

module.exports.addCoins = async (guildId, userId, coins) => {
  try {
    console.log('Running findOneAndUpdate()')

    const result = await profileModel.findOneAndUpdate(
      {
        guildId,
        userId
        
      },
      {
        guildId,
        userId,
        
        $inc: {
          coins,
        },
      },
      {
        upsert: true,
        new: true,
      }
    )

    coinsCache[`${guildId}-${userId}`] = result.coins

    return result.coins
  } catch (err) {
    console.log(err);
  }
}


module.exports.getCoins = async (guildId, userId) => {
  const cachedValue = coinsCache[`${guildId}-${userId}`]
  if (cachedValue) {
    return cachedValue
  }

  try {
    console.log('Running findOne()')

    const result = await profileModel.findOne({
      guildId,
      userId
    })

    let coins = 0
    if (result) {
      coins = result.coins
    } else {
      console.log('Inserting a document')
      await new profileModel({
        guildId,
        userId,
        coins,
      }).save()
    }

    coinsCache[`${guildId}-${userId}`] = coins

    return coins
  } catch (err) {
    console.log(err);
  }
}

module.exports.rmvCoins = async (guildId, userId, coins) => {
  try {
    console.log('Running findOneAndUpdate()')

    const result = await profileModel.findOneAndUpdate(
      {
        guildId,
        userId
      },
      {
        guildId,
        userId,
        $inc: {
          coins: -coins,
        },
      },
      {
        upsert: true,
        new: true,
      }
    )

    coinsCache[`${guildId}-${userId}`] = result.coins

    return result.coins
  } catch (err) {
    console.log(err);
  }
}

module.exports.fetchLeaderboard = async (guildId, limit) => {
  try {
    console.log('Running find()')

    const result = await profileModel.find({}).sort([['coins', 'descending']]).exec();
    
    return result.slice(0, limit)
    } catch (err) {
    console.log(err)
  }
}

module.exports.efetch = async (guildId, userId, fetchPosition = false) => {

  const user = await  profileModel.findOne({
    userId,
    guildId
  });
  if (!user) return false;

  if (fetchPosition === true) {
    const leaderboard = await  profileModel.find({
      guildId
    }).sort([['xp', 'descending']]).exec();

    user.position = leaderboard.findIndex(i => i.userId === userId) + 1;
  }

}

module.exports.computeLeaderboard = async (client, leaderboard, fetchUsers = false) => {
  const computedArray = [];

    if (fetchUsers) {
      for (const key of leaderboard) {
        const user = await client.users.fetch(key.userId) || { username: "Unknown", discriminator: "0000" };
        computedArray.push({
          guildId: key.guildId,
          userId: key.userId,
          coins: key.coins,
          position: (leaderboard.findIndex(i => i.guildId === key.guildId && i.userId === key.userId) + 1),
          username: user.username,
          discriminator: user.discriminator
        });
      }
    } else {
      leaderboard.map(key => computedArray.push({
        guildId: key.guildId,
        userId: key.userId,
        coins: key.coins,
        position: (leaderboard.findIndex(i => i.guildId === key.guildId && i.userId === key.userId) + 1),
        username: client.users.cache.get(key.userId) ? client.users.cache.get(key.userId).username : "Unknown",
        discriminator: client.users.cache.get(key.userId) ? client.users.cache.get(key.userId).discriminator : "0000"
      }));
    }

    return computedArray;
  }
