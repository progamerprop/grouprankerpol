const discord = require('discord.js');
const noblox = require('noblox.js');

const client = new discord.Client()




async function run() {
    await noblox.setCookie("_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_F3084EC89C2C96DD4DF16288E3F5EC6E6195A2FF86BCEE1451E522CF43A69BE8C1A6847735EBED3AE1633403DEB52966581C2F1377721C40F8CBA04C76A549F8281460B8F9DF634811FA08098DD64F75FAFE41181A4DB64E5066D48E4208FC2D86970CDF6CA55ED6CCDB85D329C4FC18F7972F70BDBC7BCFD75778C81BF986852CE33BB97B5AB22F168C239544F78FDB501B9AF0133F7E7D4DBB3091C03BE11A45E8DDC21F7D6E1C25193F8EAA9E8AE379153D75DAAA88E987188633C82693470889FEB490F3877BED1C24CBE4B44A59AF3845FAB42DB97ACEE8723CED65DB01E2284163556052E3EB0C26D414EC7615EB184E7A20A3DB216633394E8C6DDAF20CD8F333745532E36F29D0A736786ADD0F5472F8645C46CE08C34C5AC23D831C73F03E0221E1E1062A19B6C41EE016807F6BA79C");
    console.log('Ík heb de token laten lezen')
  }
  
  run();



client.login(process.env.token);

//Vars

var prefix = "-"
var groupId = 7017974
var minrank = 14


function login() {
    return noblox.cookieLogin("_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_F3084EC89C2C96DD4DF16288E3F5EC6E6195A2FF86BCEE1451E522CF43A69BE8C1A6847735EBED3AE1633403DEB52966581C2F1377721C40F8CBA04C76A549F8281460B8F9DF634811FA08098DD64F75FAFE41181A4DB64E5066D48E4208FC2D86970CDF6CA55ED6CCDB85D329C4FC18F7972F70BDBC7BCFD75778C81BF986852CE33BB97B5AB22F168C239544F78FDB501B9AF0133F7E7D4DBB3091C03BE11A45E8DDC21F7D6E1C25193F8EAA9E8AE379153D75DAAA88E987188633C82693470889FEB490F3877BED1C24CBE4B44A59AF3845FAB42DB97ACEE8723CED65DB01E2284163556052E3EB0C26D414EC7615EB184E7A20A3DB216633394E8C6DDAF20CD8F333745532E36F29D0A736786ADD0F5472F8645C46CE08C34C5AC23D831C73F03E0221E1E1062A19B6C41EE016807F6BA79C");
}
 
login()
    .then(function() {
        console.log('Ik ben ingelogt!');
})
    .catch(function(error) {
      console.log(`Error! 404: ${error}`);
});

function isCommand(command, message){
    var command = command.toLowerCase();
    var content = message.content.toLowerCase();
    return content.startsWith(prefix + command);
}
 
client.on('message', (message) => {
    if (message.author.bot) return;
    var args = message.content.split(/[ ]+/)
  if(isCommand('extile', message)){
    var username = args[1]
        if(username){
             message.channel.send(`Serching for ${username}`)
             noblox.getIdFromUsername(username)
             .then(function(id){
                 noblox.getRankInGroup(groupId, id)
                    message.channel.send(`Userid: ${id}, Is kickable`)
                         noblox.exile(groupId, id)
                         .then(function(){
                             message.channel.send(`Kicked ${id}!`)
                         }).catch(function(err){
                             message.channel.send("Critcal Error Logged to the console\n" + err)
                             console.log(err)
                         });
                        }).catch(function(err){
                            message.channel.send("Fail To Kick!" + err) 
                    }).catch(function(err){
                        message.channel.send("Player is not in the group!")
                }).catch(function(err){
                    message.channel.send("That player is not in the group!")
                });
            } else {
                message.channel.send("That username does not on roblox!")
        }
   return;
  }
})

client.on('message', (message) => {
    if (message.author.bot) return;
    var args = message.content.split(/[ ]+/)
if(isCommand('rank', message)){
    const nbx = require('noblox.js')
    var args2 = message.content.split(/[ ]+/)
    var userid = args[1]
    var rankid = args[2]
    
    noblox.getIdFromUsername(userid).then(function(id2){
        noblox.getRankInGroup(groupId, id2)
                    message.channel.send(`Userid: ${id2}, kun je ranken`)
                    nbx.setRank({ group: groupId, target: id2, rank: rankid })


    })     

      

    
  

}})

client.on('message', (message) => {
    if (message.author.bot) return;
    var args = message.content.split(/[ ]+/)
if(isCommand('promote', message)){
    const nbx = require('noblox.js')
    var args = message.content.split(/[ ]+/)
    var userid3  = args[1]
    var rankid3 = args[2]
    noblox.getIdFromUsername(userid3).then(function(id3){
        noblox.getRankInGroup(groupId, id3)
                    message.channel.send(`Userid: ${id3}, kun je ranken`)
                    nbx.promote(groupId, id3)
                    message.channel.send(`Dhr, ${userid3} is geranked in `)

    

    

    })}})
   
    
    client.on('message', (message) => {
        if (message.author.bot) return;
        var args = message.content.split(/[ ]+/)
    if(isCommand('demote', message)){
        const nbx = require('noblox.js')
        var args = message.content.split(/[ ]+/)
        var userid3  = args[1]
        var rankid3 = args[2]
        noblox.getIdFromUsername(userid3).then(function(id3){
            noblox.getRankInGroup(groupId, id3)
                        message.channel.send(`Userid: ${id3}, kun je ranken`)
                        nbx.demote(groupId, id3)
                        message.channel.send(`Dhr, ${userid3} is geranked in `)
    
        
    
        
    
        })}})

      

        client.on('message', (message) => {
            if (message.author.bot) return;
            var args = message.content.split(/[ ]+/)
        if(isCommand('friend', message)){
            const nbx = require('noblox.js')
           nbx.declineAllFriendRequests()
           message.channel.send("De bot heeft zojuist alle friendrequest afgewezen.")
        }})

        const nbx = require('noblox.js')


nbx.handleJoinRequest(4591072, 857710783, false)
client.on('message', (message) => {
    if (message.author.bot) return;
    var args = message.content.split(/[ ]+/)
if(isCommand('accept', message)){
    const nbx = require('noblox.js')
    var userid3  = args[1]

    
    
    noblox.getIdFromUsername(userid3).then(function(id3){



nbx.handleJoinRequest(groupId, id3, true)
message.channel.send(`Dhr, ${userid3} is zojuist geaccepteerd in deze groep`)
})}})
client.on('message', (message) => {
    if (message.author.bot) return;
    var args = message.content.split(/[ ]+/)
if(isCommand('rol', message)){
    const nbx = require('noblox.js')

    var userid3  = args[1]
    noblox.getIdFromUsername(userid3).then(function(id3){
nbx.getRankNameInGroup(groupId, id3).then(function(pika){
    message.channel.send(`Dhr/Mrv, ${userid3} zijn rank is: ${pika}`)
},


)})}})
