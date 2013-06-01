package edu.tongji.sp.sitp.dao;

import java.util.List;

import edu.tongji.sp.sitp.pojo.Leisure_sort;
import edu.tongji.sp.sitp.utils.HibernateUtil;

public class Leisure_sortDAO {
	
	public static List<Leisure_sort> getLeisureSortList(){
		List<Leisure_sort> list = HibernateUtil.executeQuery("from Leisure_sort", null);
		return list;
	}
	
	public static Leisure_sort getLeisureSort(int id){
		Leisure_sort leisureSort = new Leisure_sort();
		String[] params = {"" + id};
		leisureSort = (Leisure_sort) HibernateUtil.uniqueQuery(
				"from Leisure_sort where id=?", params);
		return leisureSort;
	}

	public static Leisure_sort insertLeisureSort(Leisure_sort leisureSort) {
		if (HibernateUtil.saveObject(leisureSort)) {
			return leisureSort;
		} else {
			return null;
		}
	}

	public static Leisure_sort updateLeisureSort(Leisure_sort leisureSort) {
		if (HibernateUtil.updateObject(leisureSort)) {
			return leisureSort;
		} else {
			return null;
		}
	}

}
