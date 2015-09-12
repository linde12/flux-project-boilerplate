import Peer from 'peerjs';

let peer = new Peer({key: 'tv3jrgxh5aeb3xr'});
peer.on('open', function (id) {
  console.log(id);
});
peer.on('connection', function(conn) {
  conn.on('data', function(data){
    // Will print 'hi!'
    console.log(data);
  });
});

document.body.addEventListener('click', function () {
  let conn = peer.connect(window.peerId);
  conn.on('open', function (){
    conn.send('hi!');
  });
});
