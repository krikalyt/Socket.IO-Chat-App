var socket = io();
socket.on('connect',()=>{
    console.log("connected to the server");
})
socket.on("disconnect",()=>{
    console.log("disconnected");
})

socket.on("newEmail",(email)=>{
    console.log(email);
});


socket.emit("fuck",{
    data:"i really want to fuck you...",
});

socket.on("getMessage",(message)=>{
    console.log(message.from);
    console.log(message.text);
})