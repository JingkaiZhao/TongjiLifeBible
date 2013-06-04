PL._init();
PL.joinListen('/message');
function onData(event) {
	if (event != null) {
		var messageJson = {
				'comments': event.get('comments'), 
				'content': event.get('content'), 
				'createTime': event.get('createTime'),
				'creater': event.get('creater'), 
				'id': event.get('id'),
				'lat': event.get('lat'), 
				'lng': event.get('lng')
		};
		top.frames["mapFrame"].window.messagePush(messageJson);
		console.log(messageJson);
	} else {
		console.log('error');
	}
}