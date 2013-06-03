package edu.tongji.sp.sitp.action;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.Date;

import org.apache.struts2.json.annotations.JSON;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import edu.tongji.sp.sitp.dao.MessageDAO;
import edu.tongji.sp.sitp.dao.UserDAO;
import edu.tongji.sp.sitp.eventsource.MessageEventSource;
import edu.tongji.sp.sitp.pojo.Message;

public class PostMessageAction extends ActionSupport {
	
	private String content;
	private String lat;
	private String lng;
	
	public String execute(){
		Message message = new Message();
		try {
            content = URLDecoder.decode(content, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
		message.setContent(content);
		message.setCreater(UserDAO.getCurrentUser());
		message.setCreateTime(new Date(System.currentTimeMillis()));
		message.setLat(lat);
		message.setLng(lng);
		message = MessageDAO.insertMessage(message);
		MessageEventSource.pullMessageEvent(message);
		return SUCCESS;
	}
	 @JSON(serialize=false)
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	 @JSON(serialize=false)
	public String getLat() {
		return lat;
	}
	public void setLat(String lat) {
		this.lat = lat;
	}
	 @JSON(serialize=false)
	public String getLng() {
		return lng;
	}
	public void setLng(String lng) {
		this.lng = lng;
	}

}
