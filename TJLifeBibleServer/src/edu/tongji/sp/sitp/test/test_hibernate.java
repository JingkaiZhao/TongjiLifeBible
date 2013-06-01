package edu.tongji.sp.sitp.test;

import edu.tongji.sp.sitp.pojo.Leisure_sort;
import edu.tongji.sp.sitp.utils.HibernateUtil;

public class test_hibernate {
	
	public static void main(String args[]){
		Leisure_sort sort = new Leisure_sort();
		sort.setName("restaurant");
		HibernateUtil.saveObject(sort);
	}

}
