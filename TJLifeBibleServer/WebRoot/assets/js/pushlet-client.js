PL._init();
PL.joinListen('/message');
function onData(event) {
	if (event != null) {
		console.log('not null');
	} else {
		console.log('null');
	}
}