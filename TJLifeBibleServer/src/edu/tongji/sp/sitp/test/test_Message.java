package edu.tongji.sp.sitp.test;


import java.util.Date;

import edu.tongji.sp.sitp.dao.MessageDAO;
import edu.tongji.sp.sitp.pojo.Message;

public class test_Message {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Message message = new Message();
		Date date = new Date(System.currentTimeMillis());
		message.setCreateTime(date);
		MessageDAO.insertMessage(message);
		message = new Message();
		message.setCreateTime(date);
		MessageDAO.insertMessage(message);
	}

}
