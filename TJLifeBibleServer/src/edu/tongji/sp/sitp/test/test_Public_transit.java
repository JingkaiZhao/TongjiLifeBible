package edu.tongji.sp.sitp.test;

import edu.tongji.sp.sitp.dao.Public_transitDAO;
import edu.tongji.sp.sitp.pojo.Public_transit;

public class test_Public_transit {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
			Public_transit transit;
			transit = new Public_transit();
			transit.setLat("31.281714");
			transit.setLng("121.497148");
			transit.setName("115·");
			transit.setContent("115·����վ");
			Public_transitDAO.insertTransit(transit);
			
			transit = new Public_transit();
			transit.setLat("31.281366");
			transit.setLng("121.505946");
			transit.setName("ͬ�ô�ѧվ");
			transit.setContent("ͬ�ô�ѧ��ѧ10�ŵ���վ");
			Public_transitDAO.insertTransit(transit);
			
	}

}
