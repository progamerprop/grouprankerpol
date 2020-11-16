const discord = require('discord.js');
const noblox = require('noblox.js');

const client = new discord.Client()



client.login(process.env.token);

//Vars
var cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI2NjM2Y2VmOC0xNjZlLTQ3YzctODZjNi1kY2FkZjk4NDIyMmQiLCJzdWIiOjc3NzUxOTE3OH0.uevdvCiabQk4vyBa2HTPsSzG7beLnb0W3ga3mylL9e8"
var prefix = "-"
var groupId = 7017974
var minrank = 14


function login() {
    return noblox.cookieLogin(cookie);
}
 
login()
    .then(function() {
        console.log('Logged in.');
})
    .catch(function(error) {
      console.log(`Login error: ${error}`);
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