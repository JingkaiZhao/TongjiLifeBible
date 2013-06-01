package edu.tongji.sp.sitp.test;

import edu.tongji.sp.sitp.dao.MessageDAO;
import edu.tongji.sp.sitp.pojo.Message;

public class test_Chinese {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Message message = new Message();
		message.setContent("ÄãºÃ");
		MessageDAO.insertMessage(message);
	}

}
