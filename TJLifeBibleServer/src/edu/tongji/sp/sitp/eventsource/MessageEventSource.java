package edu.tongji.sp.sitp.eventsource;

import java.io.Serializable;

import edu.tongji.sp.sitp.pojo.Message;

import nl.justobjects.pushlet.core.Dispatcher;
import nl.justobjects.pushlet.core.Event;
import nl.justobjects.pushlet.core.EventPullSource;

public class MessageEventSource {

	public static void pullMessageEvent(Message msg) {
		// TODO Auto-generated method stub
        Event event = Event.createDataEvent("/message");
        event.setField("content", msg.getContent());
        event.setField("lat", msg.getLat());
        event.setField("lng", msg.getLng());
        event.setField("id", msg.getId());
        Dispatcher.getInstance().multicast(event);
        System.out.println("pull success");
	}
}
