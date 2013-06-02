package edu.tongji.sp.sitp.eventsource;

import java.io.Serializable;

import nl.justobjects.pushlet.core.Event;
import nl.justobjects.pushlet.core.EventPullSource;

public class MessageEventPullSource extends EventPullSource implements Serializable{

	@Override
	protected long getSleepTime() {
		// TODO Auto-generated method stub
		return 1000;
	}

	@Override
	protected Event pullEvent() {
		// TODO Auto-generated method stub
		
		return null;
	}
}
