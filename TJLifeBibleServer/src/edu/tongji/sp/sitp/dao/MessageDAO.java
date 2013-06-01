package edu.tongji.sp.sitp.dao;

import java.sql.Timestamp;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import edu.tongji.sp.sitp.pojo.Message;
import edu.tongji.sp.sitp.utils.HibernateUtil;

public class MessageDAO {

	public static List<Message> getMessageList(){
		Date endDate = new Date();
		Calendar cl = Calendar.getInstance();
		cl.setTime(endDate);
		cl.add(Calendar.HOUR, -1);
		Date startDate = cl.getTime();

		String start = new Timestamp(startDate.getTime()).toString();
		String end = new Timestamp(endDate.getTime()).toString();
		String[] params = {start,end};

		List<Message> list = HibernateUtil.executeQuery("from Message where createTime between ? and ?" , params);
		return list;
	}
	
	public static List<Message> getMessageList(String date){
		Date endDate = new Date(System.currentTimeMillis());
		String end = new Timestamp(endDate.getTime()).toString();
		String[] params = {date,end};

		List<Message> list = HibernateUtil.executeQuery("from Message where createTime between ? and ?" , params);
		return list;
	}

	public static Message getMessage(int id) {
		Message message = new Message();
		String[] params = { "" + id};
		message = (Message) HibernateUtil.uniqueQuery(
				"from Message where id=?", params);
		return message;
	}

	public static Message insertMessage(Message message) {
		if (HibernateUtil.saveObject(message)) {
			return message;
		} else {
			return null;
		}
	}

	public static Message updateMessage(Message message) {
		if (HibernateUtil.updateObject(message)) {
			return message;
		} else {
			return null;
		}
	}
}
