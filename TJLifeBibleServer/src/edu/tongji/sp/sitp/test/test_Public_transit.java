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
			transit.setName("115路");
			transit.setContent("115路汽车站");
			Public_transitDAO.insertTransit(transit);
			
			transit = new Public_transit();
			transit.setLat("31.281366");
			transit.setLng("121.505946");
			transit.setName("同济大学站");
			transit.setContent("同济大学大学10号地铁站");
			Public_transitDAO.insertTransit(transit);
			
	}

}
