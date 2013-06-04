package edu.tongji.sp.sitp.eventsource;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import com.mysql.jdbc.exceptions.DeadlockTimeoutRollbackMarker;

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
        event.setField("createrName", msg.getCreater().getName());
        event.setField("createTime", msg.getCreateTime().toString());
        Dispatcher.getInstance().multicast(event);
        System.out.println("pull success");
	}
	
	private static String dateString(Date date){
		Calendar createTime = Calendar.getInstance();
		Calendar currentTime = Calendar.getInstance();
		createTime.setTime(date);
		int minutes = (currentTime.get(Calendar.MILLISECOND) - createTime.get(Calendar.MILLISECOND))/60000;
		return minutes + "∑÷÷”«∞";
	}
}
