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