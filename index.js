const discord = require('discord.js');
const noblox = require('noblox.js');

const client = new discord.Client()



client.login(process.env.token);

//Vars
var cookie = "76B765457F26D7E52E35A3AF5B00A155730B3E3D51906B7F282D9AB59982FC3F001A7B6678BF52CCA2B0B4314EC0D9699F30EAB27D5256048DA5F309E7280058D6593B177819C47AF71CC0E4819B98D2CA12E819434E3BC907AB9CBEB43B42BBC67E5DFF812BBF70908BC7B478088F6DC449919C7A1C4773D6D113B384FB008E3CFCAFAB00AA4CAC0D1DFA321C8876B01672AEC3D778499551CBB193648E9D0060CCC7C0EE91065BCC86EFB3D7BF818F73467AA991EFBA85B4299391FC2D8BF57D32C3B44731CD705D781EDDE962175AB9CF16936E544CA9E6CFEC138808CC6CB692B65E28381C6D630341F18E97BE9976DB06E550472424B1F38D18EC27A503CB82D7B2DA49EA77C3FF52AEFD01C0B892FB203A8444E3F511B4F11CEF58727AA2647D58A2BFB86B99FF481BB244D5F5D49CA555"
var prefix = "-"
var groupId = 7017974
var minrank = 14


function login() {
    return noblox.cookieLogin(process.env.cookie);
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