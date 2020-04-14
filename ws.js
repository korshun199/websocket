$(document).ready(function() {
    var socket = new WebSocket("ws://localhost:1234");
    console.log(socket)

    socket.onopen = function() {
        $('#status').html("cоединение установлено<br>");
    };



    // Цикл с задержкой b gf


    socket.onmessage = function(event) {

        $('#status').html("OK<br>");
        console.log('OK');

    }

    function f() {

        //socket.onopen;
        setTimeout(f, 3000);

    }
    f();


    socket.onclose = function(event) {
        if (event.wasClean) {
            status.innerHTML = 'cоединение закрыто';
        } else {
            status.innerHTML = 'соединения как-то закрыто';
        }
        status.innerHTML += '<br>код: ' + event.code + ' причина: ' + event.reason;
    };

    socket.onerror = function(event) {

        $('#status').html(event.onmessage);
    };

    socket.onclose = function(event) {
        if (event.wasClean) {
            //$('#status').html('cоединение закрыто');
        } else {
            $('#status').html('соединения как-то закрыто');
        }
    };

    $('#send').click(function(e) {
        //e.preventDefault();
        socket.send('Welcom!');

    });
});