package edu.tongji.sp.sitp.action;

import com.opensymphony.xwork2.ActionSupport;

import edu.tongji.sp.sitp.eventsource.MessageEventSource;
import edu.tongji.sp.sitp.pojo.Message;

public class testPushlet extends ActionSupport {
	public String execute(){
		Message msg = new Message();
		msg.setContent("hello");
		msg.setId(1);
		msg.setLat("123");
		msg.setLng("321");
		MessageEventSource.pullMessageEvent(msg);
		return SUCCESS;
	}
}
