package edu.tongji.sp.sitp.dao;

import java.util.List;

import edu.tongji.sp.sitp.pojo.Leisure;
import edu.tongji.sp.sitp.utils.HibernateUtil;

public class LeisureDAO {
	
	public static List<Leisure> getLeisureList(){
		List<Leisure> list = HibernateUtil.executeQuery("from Leisure", null);
		return list;
	}
	
	public static Leisure getLeisure(int id){
		Leisure leisure = new Leisure();
		String[] params = {"" + id};
		leisure = (Leisure) HibernateUtil.uniqueQuery(
				"from Leisure where id=?", params);
		return leisure;
	}

	public static Leisure insertLeisure(Leisure leisure) {
		if (HibernateUtil.saveObject(leisure)) {
			return leisure;
		} else {
			return null;
		}
	}

	public static Leisure updateLeisure(Leisure leisure) {
		if (HibernateUtil.updateObject(leisure)) {
			return leisure;
		} else {
			return null;
		}
	}

}
