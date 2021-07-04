const profileModel = require('./models/profileSchema')

const coinsCache = {} // { 'guildId-userId': coins }

module.exports = (client) => {}

module.exports.addCoins = async (guildId, userId, coins) => {
      try {
      console.log('Running findOneAndUpdate()')

      const result = await profileModel.findOneAndUpdate(
        {
          guildId,
          userId,
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

      console.log('RESULT:', result)

      coinsCache[`${guildId}-${userId}`] = result.coins

      return result.coins
    } catch (err) {
        console.log(err);
    }}


module.exports.getCoins = async (guildId, userId) => {
  const cachedValue = coinsCache[`${guildId}-${userId}`]
  if (cachedValue) {
    return cachedValue
  }

    try {
      console.log('Running findOne()')

      const result = await profileModel.findOne({
        guildId,
        userId,
      })

      console.log('RESULT:', result)

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
          userId,
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

      console.log('RESULT:', result)

      coinsCache[`${guildId}-${userId}`] = result.coins

      return result.coins
    } catch (err) {
        console.log(err);
    }}

