package edu.tongji.sp.sitp.test;

import edu.tongji.sp.sitp.dao.Tourist_interestDAO;
import edu.tongji.sp.sitp.pojo.Tourist_interest;

public class test_TInterest {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Tourist_interest tInterest;
		tInterest = new Tourist_interest();
		tInterest.setLat("31.284566");
		tInterest.setLng("121.500056");
		tInterest.setName("������");
		tInterest.setContent("ͬ�ô�ѧ������");
		Tourist_interestDAO.insertTInterest(tInterest);
		
		tInterest = new Tourist_interest();
		tInterest.setLat("31.28447");
		tInterest.setLng("121.500351");
		tInterest.setName("������");
		tInterest.setContent("ͬ�ô�ѧ������");
		Tourist_interestDAO.insertTInterest(tInterest);
	}
}
