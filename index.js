const discord = require('discord.js');
const noblox = require('noblox.js');

const client = new discord.Client()



client.login(process.env.token);

//Vars
var cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_723E59FCC9C77E90F2D1E0A6D010BC5E89812D674F289318D7C474418C9AD37F6FC012AB2D0F97A8B0622068EA843A1E17FF905CD12C93F5CF0377CCA7EA620D863AF6BBFAEEAF7DE34766C8621DDBEB5795C54A25A9B23E8DF6F0953EB454599A276FC7CD199F6AE03E90333C69C7BA08D18A767CD2315AE03ADA43141EB51C5F6F361876A71ED76CE06E89F9EE337475E4010456E12E44A5570345EEA8122C7CF6139CB3D045878AE1399D657122E4C492F1C04B509AE0B0A13EA690A36CC005383C42A77FD2E64EB13564E310E346E6F76D51091D20A5C458C2FCC9877F3F5A859F587066591FBAB9624070EFF15A871A66DFD3E9AC8FB5B78656601ABA9438459C53C01D41916FBD318AB1BFDB1C39229533A8A77076BB217F3121E8149277588647F92E6A6874C837AD4D62BCCD3BDC6569"
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