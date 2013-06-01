package edu.tongji.sp.sitp.action;

import java.util.List;

import com.opensymphony.xwork2.ActionSupport;

import edu.tongji.sp.sitp.dao.MessageDAO;
import edu.tongji.sp.sitp.pojo.Message;

public class MessageAction extends ActionSupport {

	private static final long serialVersionUID = 1L;
	private List<Message> messages;
	
	public String execute(){
		setMessages(MessageDAO.getMessageList());
		return SUCCESS;
	}

	public List<Message> getMessages() {
		return messages;
	}

	public void setMessages(List<Message> messages) {
		this.messages = messages;
	}

}
