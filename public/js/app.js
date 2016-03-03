
var socket = io();
$('form').submit(function(){
    socket.emit('chat message', {
        name: $('#n').val(),
        message: $('#m').val(),
    });
    $('#m').val('');
    return false;
});

socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(`${msg.name}: ${msg.message}`));
});

socket.on('someone disconnected', (txt) => {
    $('#messages').append($('<li>').text(txt));
});
