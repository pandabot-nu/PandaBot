const { MessageAttachment } = require('discord.js');
const fs = require('fs');
var csv = require('jquery-csv');
const Canvas = require('canvas');
const answers = require('./acWordleWords.json')

function GetAnswer()
{
    //randomly select answer from list of 600 words
    var j = Math.floor(Math.random() * answers.length);
    return answers[j].toUpperCase();
}

const ValidGuess = (guess) => 
{
    if(guess=== undefined){return false;}
    else if (guess.length!=5){return false;}
    //else if (!answers.includes(guess.toUpperCase())){return false;}
    else{return true;}
};

const PlayedToday = (dateData) =>
{
    if(GetTodaysDate()==dateData){return true;}
    else{return false;}
};
const GetTodaysDate = () =>
{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    return mm + '/' + dd + '/' + yyyy;
};
const AddSpace = (data) =>
{
    if(data.length==0){return "";}
    else{return " ";}
};
const GetImage = (guessLetter,answerLetter, i) => 
{
    //letter is in word at same spot
    if(guessLetter === undefined){return 0;}
    //letter is in word at same spot
    else if(guessLetter.charAt(i)==answerLetter.charAt(i)){return 1;}
    //letter is in word at different spot
    else if(answerLetter.includes(guessLetter.charAt(i))){return 2;}
    //letter is not in word
    else{return 3;}
};
function writeToCSVFile(newData)
{
    const filename = 'acdata.csv';
    let csvContent = "data:text/csv;charset=utf-8," 
        + newData.map(e => e.join(",")).join("\n");

    fs.writeFile(filename, csvContent, err => 
    {
        if (err) {
            console.log('Error writing to csv file', err);
        } else {
            console.log(`saved as ${filename}`);
        }
    });
}
async function LoadGame(message, guesses, answer)
{
    const canvas = Canvas.createCanvas(330, 397);
    const context = canvas.getContext('2d');

    const background = await Canvas.loadImage('./images/BlankImage.png');
    context.drawImage(background, 0, 0, canvas.width, canvas.height);

    context.font = '42px Clear Sans, Helvetica Neue, Arial, sans-serif';
    context.textAlign = 'center'
    context.fillStyle = '#d7dadc';

    const absentSquare = await Canvas.loadImage('./images/ColorAbsent.png');
    const emptySquare = await Canvas.loadImage('./images/EmptySquare.png');
    const greenSquare = await Canvas.loadImage('./images/GreenSquare.png');
    const yellowSquare = await Canvas.loadImage('./images/YellowSquare.png');
    let square = absentSquare;

    let squareSize = 62;
    let rowOffset = 0;
    let buffer = 0;

    for (let j = 0; j < 6; j++)
    {
        for (let i = 0; i < 5; i++)
        {
            const imageNumber = GetImage(guesses[j],answer,i);

            if(imageNumber==0){square = emptySquare;}
            else if(imageNumber==1){square = greenSquare;}
            else if(imageNumber==2){square = yellowSquare;}
            else if(imageNumber==3){square = absentSquare;}

            context.drawImage(square, i*squareSize+buffer, rowOffset, squareSize, squareSize);
            if(guesses[j] != undefined)
            {
                context.fillText(guesses[j].charAt(i), (squareSize/2)+buffer+squareSize*i, rowOffset+42);
            }

            buffer+=5;
        }
        buffer=0;
        rowOffset+=squareSize+5;
    }

    const attachment = new MessageAttachment(canvas.toBuffer(), 'wordle.png');

    message.reply("use +guess to guess the word", {files: [attachment] });

}
async function Guess(message,guesses,newGuess, answer)
{
    const canvas = Canvas.createCanvas(330, 397);
    const context = canvas.getContext('2d');

    const background = await Canvas.loadImage('./images/BlankImage.png');
    context.drawImage(background, 0, 0, canvas.width, canvas.height);

    context.font = '42px Clear Sans, Helvetica Neue, Arial, sans-serif';
    context.textAlign = 'center'
    context.fillStyle = '#d7dadc';
    
    //for debuging purposes
    console.log("Answer " + answer);
    console.log("newGuess " + newGuess);

    const absentSquare = await Canvas.loadImage('./images/ColorAbsent.png');
    const emptySquare = await Canvas.loadImage('./images/EmptySquare.png');
    const greenSquare = await Canvas.loadImage('./images/GreenSquare.png');
    const yellowSquare = await Canvas.loadImage('./images/YellowSquare.png');
    let square = absentSquare;

    let squareSize = 62;
    let rowOffset = 0;
    let buffer = 0;

    if(guesses=="")
    {
        guesses[0] = newGuess;
    }
    else
    {
        guesses.push(newGuess);
    }

    for (let j = 0; j < 6; j++)
    {
        for (let i = 0; i < 5; i++)
        {
            const imageNumber = GetImage(guesses[j],answer,i);

            if(imageNumber==0){square = emptySquare;}
            else if(imageNumber==1){square = greenSquare;}
            else if(imageNumber==2){square = yellowSquare;}
            else if(imageNumber==3){square = absentSquare;}

            context.drawImage(square, i*squareSize+buffer, rowOffset, squareSize, squareSize);
            if(guesses[j] != undefined)
            {
                context.fillText(guesses[j].charAt(i), (squareSize/2)+buffer+squareSize*i, rowOffset+45);
            }

            buffer+=5;
        }

        buffer=0;
        rowOffset+=squareSize+5;
    }

    const attachment = new MessageAttachment(canvas.toBuffer(), 'wordle.png');

    message.reply("use +guess to make your guess.", attachment);
}
function LoadNewWordle(message)
{
    fs.readFile('acdata.csv', 'UTF-8', (err, fileContent) => 
    {
        if (err) { console.log(err) }
        csv.toArrays(fileContent, {}, (err, data) => 
        {
            if (err) { console.log(err) }
            console.log(data.length);
            if(data.length==0)
            {
                console.log("no data");
                data[0]=[
                    'data:text/csv;charset=utf-8',
                    'data:text/csv;charset=utf-8',
                    'data:text/csv;charset=utf-8',
                    'data:text/csv;charset=utf-8',
                    'data:text/csv;charset=utf-8',
                    'data:text/csv;charset=utf-8',
                    'data:text/csv;charset=utf-8',
                    'data:text/csv;charset=utf-8',
                    'data:text/csv;charset=utf-8',
                    'data:text/csv;charset=utf-8',
                    'data:text/csv;charset=utf-8',
                    'data:text/csv;charset=utf-8',
                    'data:text/csv;charset=utf-8',
                    'data:text/csv;charset=utf-8',
                    'user',
                    'wordOfTheDay',
                    'canGuess',
                    'lastGuessDate',
                    'guesses',
                    'wins',
                    'games',
                    'hasCompletedToday'
                  ];
            }
            console.log(data.length);

            for (let i = 1, len = data.length; i < len; i++) 
            {
                console.log(data[i]);
                if(data[i][0]==message.author.id)
                {
                    if(PlayedToday(data[i][3]))
                    {
                        if(!message.content.includes("ISAIDSTARTANEWGAME"))
                        {
                            message.reply("You have already played a game, please come back tomorrow");
                            return;
                        }
                    }
                    
                    //GetNewAnswer
                    data[i][1] = GetAnswer();
                    //update date
                    data[i][3] = GetTodaysDate();
                    //clear guesses
                    data[i][4] = "";
                    //remove game completion status
                    data[i][8] = false;

                    //update csv file
                    writeToCSVFile(data);
                    LoadGame(message,data[i][4],data[i][1]);
                    return;
                }
            }
            
            //create new entry
            data.push([message.author.id,GetAnswer(),'false',GetTodaysDate(),,0,0,0,false]);
            writeToCSVFile(data);
            LoadGame(message,"","");
    })})
}
function PlayWordle(message)
{
    fs.readFile('acdata.csv', 'UTF-8', (err, fileContent) => 
    {
        if (err) { console.log(err) }
        csv.toArrays(fileContent, {}, (err, data) => 
        {
            if (err) { console.log(err) }
            if(data.length==0)
            {
                data[0]=[
                    'data:text/csv;charset=utf-8',
                    'data:text/csv;charset=utf-8',
                    'data:text/csv;charset=utf-8',
                    'data:text/csv;charset=utf-8',
                    'data:text/csv;charset=utf-8',
                    'data:text/csv;charset=utf-8',
                    'data:text/csv;charset=utf-8',
                    'data:text/csv;charset=utf-8',
                    'data:text/csv;charset=utf-8',
                    'data:text/csv;charset=utf-8',
                    'data:text/csv;charset=utf-8',
                    'data:text/csv;charset=utf-8',
                    'data:text/csv;charset=utf-8',
                    'data:text/csv;charset=utf-8',
                    'user',
                    'wordOfTheDay',
                    'canGuess',
                    'lastGuessDate',
                    'guesses',
                    'wins',
                    'games',
                    'hasCompletedToday'
                  ];
            }
            for (let i = 1, len = data.length; i < len; i++) 
            {

                if(data[i][0]==message.author.id)
                {
                    if(data[i][8]=="true")
                    {
                        message.reply("You have already completed a game today, Come back tomorrow");
                        return;
                    }

                    var guess = message.content.split(" ")[1];
                    
                    //Guess checks
                    if(!ValidGuess(guess))
                    {
                        message.reply("Guesses must be a valid 5 letter word ");
                        return;
                    }

                    //clean data and update file
                    var guesses = data[i][4].split(" ");
                    guess = guess.toUpperCase();
                    data[i][4] = data[i][4] +AddSpace(data[i][4])+ guess;
                    writeToCSVFile(data);

                    Guess(message,guesses, guess, data[i][1]);

                    //check to see if guess and answer match
                    for (var c=0; c<guess.length; c++) {
                        if (guess.charCodeAt(c) != data[i][1].charCodeAt(c)) {
                            if(guesses.length===5)
                            {
                                data[i][8]=true;
                                data[i][7]+=1;
                                writeToCSVFile(data);
                                message.reply(`Game over. The word was `+data[i][1]+`. Better luck tomorrow...`);
                            }
                            return;
                        }
                    }

                    data[i][8]=true;
                    data[i][6]+=1;
                    data[i][7]+=1;
                    writeToCSVFile(data);
                    message.reply("Congratulations! You guessed the word "+data[i][1]+" in "+(guesses.length+1)+ " tries!")
                
                    return;
                }
            }
            message.reply("You have not started a game yet today")
        })})
}
function ShowWordleStats(message)
{
    fs.readFile('acdata.csv', 'UTF-8', (err, fileContent) => 
    {
        if (err) { console.log(err) }
        csv.toArrays(fileContent, {}, (err, data) => 
        {
            if (err) { console.log(err) }
            for (let i = 1, len = data.length; i < len; i++) 
            {
                if(data[i][0]==message.author.id)
                {
                    var wins = data[i][6];
                    var games = data[i][7];
                    var result = Math.round((wins / games) * 100);

                    message.reply("Stats: \nPlayed : "+games+"\nWin % : "+result);
                
                    return;
                }
            }

            data[data.length] = [message.author.id,'','false','','','0','0']
            message.reply("Stats: \nPlayed : "+0+"\nWin % : "+0);
            writeToCSVFile(data);
        })})
}

module.exports = { LoadNewWordle, PlayWordle, ShowWordleStats};
