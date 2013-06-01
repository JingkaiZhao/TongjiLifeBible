package edu.tongji.sp.sitp.dao;

import java.util.List;

import edu.tongji.sp.sitp.pojo.Public_transit;
import edu.tongji.sp.sitp.utils.HibernateUtil;


public class Public_transitDAO {
	
	public static List<Public_transit> getTransitList(){
		List<Public_transit> list = HibernateUtil.executeQuery("from Public_transit", null);
		return list;
	}
	
	public static Public_transit getTransit(int id){
		Public_transit transit = new Public_transit();
		String[] params = {"" + id};
		transit = (Public_transit) HibernateUtil.uniqueQuery(
				"from Public_transit where id=?", params);
		return transit;
	}

	public static Public_transit insertTransit(Public_transit transit) {
		if (HibernateUtil.saveObject(transit)) {
			return transit;
		} else {
			return null;
		}
	}

	public static Public_transit updateTransit(Public_transit transit) {
		if (HibernateUtil.updateObject(transit)) {
			return transit;
		} else {
			return null;
		}
	}

}
