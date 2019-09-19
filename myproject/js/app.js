// replace these values with those generated in your TokBox Account
var apiKey = "46424752";
var sessionId = "1_MX40NjQyNDc1Mn5-MTU2ODkyMDM0MzE1MX43RXd3WVBMNVprU2hHMkVXYlpuMFZmNHl-fg";
var token = "T1==cGFydG5lcl9pZD00NjQyNDc1MiZzaWc9ZGIzN2FmMmU2MWFkMjgzNmFkOWJhMzU2MWM4NDgwM2IzMThjNGZjNzpzZXNzaW9uX2lkPTFfTVg0ME5qUXlORGMxTW41LU1UVTJPRGt5TURNME16RTFNWDQzUlhkM1dWQk1OVnByVTJoSE1rVlhZbHB1TUZabU5IbC1mZyZjcmVhdGVfdGltZT0xNTY4OTIwMzc5Jm5vbmNlPTAuMDE0MzM1MDU2MTg0NzM5OTU4JnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE1Njg5MjM5NzcmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=";

// (optional) add server code here
initializeSession();

// Handling all of our errors here by alerting them
function handleError(error) {
    if (error) {
        alert(error.message);
    }
}

function initializeSession() {
    var session = OT.initSession(apiKey, sessionId);

    // Subscribe to a newly created stream

    // Create a publisher
    var publisher = OT.initPublisher('publisher', {
        insertMode: 'append',
        width: '100%',
        height: '100%'
    }, handleError);

    // Connect to the session
    session.connect(token, function (error) {
        // If the connection is successful, publish to the session
        if (error) {
            handleError(error);
        } else {
            session.publish(publisher, handleError);
        }
    });
    session.on('streamCreated', function (event) {
        session.subscribe(event.stream, 'subscriber', {
            insertMode: 'append',
            width: '100%',
            height: '100%'
        }, handleError);
    });
}

