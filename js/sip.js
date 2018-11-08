var socket = new JsSIP.WebSocketInterface('wss://dev-sip-jitsi.synzi.com');
var configuration = {
  sockets  : [ socket ],
  uri      : 'sip:jikamailio@dev-sip-jitsi.synzi.com',
  password : 'f0CN.Dj230cnIHbbal20IjIl'
};

(function() {
    var ua = new JsSIP.UA(configuration);
    console.log("ua starting");
    ua.start();

    // Register callbacks to desired call events
    var eventHandlers = {
    'progress': function(e) {
        console.log('call is in progress');
    },
    'failed': function(e) {
        console.log('call failed with cause: '+ e.data.cause);
    },
    'ended': function(e) {
        console.log('call ended with cause: '+ e.data.cause);
    },
    'confirmed': function(e) {
        console.log('call confirmed');
    }
    };

    var optionstest = {
    'eventHandlers'    : eventHandlers,
    'mediaConstraints' : { 'audio': true, 'video': true }
    };
    console.log("makeing call");
    var session = ua.call('sip:mcgowan', optionstest);
})();
