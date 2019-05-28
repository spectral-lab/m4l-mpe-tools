// @ts-nocheck

var console = {
	log: function () {
		for(var i=0,len=arguments.length; i<len; i++) {
			var message = arguments[i];
			if(message && message.toString) {
				var s = message.toString();
				if(s.indexOf("[object ") >= 0) {
					s = JSON.stringify(message);
				}
				post(s);
			}
			else if(message === null) {
				post("<null>");
			}
			else {
				post(message);
			}
		}
		post("\n");
	}
}

function get_track_id(){
	var thisTrack = new LiveAPI('this_device canonical_parent');
	console.log("current track id:", thisTrack.id);
	outlet(0, 'track_id', thisTrack.id);
}

