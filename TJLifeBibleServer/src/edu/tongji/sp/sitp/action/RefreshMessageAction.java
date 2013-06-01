package edu.tongji.sp.sitp.action;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import edu.tongji.sp.sitp.dao.MessageDAO;
import edu.tongji.sp.sitp.pojo.Message;

public class RefreshMessageAction extends ActionSupport {

	private static final long serialVersionUID = 1L;
	private String date;
	private List<Message> messages;

	public String execute() {
		Date d = null;
		try {
			date = URLDecoder.decode(date, "UTF-8");
		} catch (UnsupportedEncodingException e1) {
			e1.printStackTrace();
		}
		String[] partDate = date.split(" ");
		String date2 = partDate[0] + " " + partDate[1] + " " + partDate[2]
				+ " " + partDate[3] + " " + partDate[4] + " GMT+08:00";
		SimpleDateFormat sf = new SimpleDateFormat(
				"EEE MMM dd yyyy HH:mm:ss z", Locale.ENGLISH);
		try {
			d = sf.parse(date2);
			SimpleDateFormat formatter = new SimpleDateFormat(
					"yyyy-MM-dd HH:mm:ss");
			date = formatter.format(d);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		System.out.println(date);
		messages = MessageDAO.getMessageList(date);
		return SUCCESS;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public List<Message> getMessages() {
		return messages;
	}

	public void setMessages(List<Message> messages) {
		this.messages = messages;
	}

}
