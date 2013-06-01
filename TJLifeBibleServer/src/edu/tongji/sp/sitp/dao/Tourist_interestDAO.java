package edu.tongji.sp.sitp.dao;

import java.util.List;

import edu.tongji.sp.sitp.pojo.Tourist_interest;
import edu.tongji.sp.sitp.utils.HibernateUtil;

public class Tourist_interestDAO {
	public static List<Tourist_interest> getTInterestList(){
		List<Tourist_interest> list = HibernateUtil.executeQuery("from Tourist_interest", null);
		return list;
	}
	
	public static Tourist_interest getTInterest(int id){
		Tourist_interest TInterest = new Tourist_interest();
		String[] params = {"" + id};
		TInterest = (Tourist_interest) HibernateUtil.uniqueQuery(
				"from Tourist_interest where id=?", params);
		return TInterest;
	}

	public static Tourist_interest insertTInterest(Tourist_interest TInterest) {
		if (HibernateUtil.saveObject(TInterest)) {
			return TInterest;
		} else {
			return null;
		}
	}

	public static Tourist_interest updateTInterest(Tourist_interest TInterest) {
		if (HibernateUtil.updateObject(TInterest)) {
			return TInterest;
		} else {
			return null;
		}
	}

}
