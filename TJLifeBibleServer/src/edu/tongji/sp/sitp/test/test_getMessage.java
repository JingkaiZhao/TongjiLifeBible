package edu.tongji.sp.sitp.test;

import java.util.List;

import edu.tongji.sp.sitp.dao.MessageDAO;
import edu.tongji.sp.sitp.pojo.Message;

public class test_getMessage {
	
	public static void main(String[] args){
		List<Message> list = MessageDAO.getMessageList();
		System.out.println(list.size());
	}

}
