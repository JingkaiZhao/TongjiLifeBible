package edu.tongji.sp.sitp.test;

import edu.tongji.sp.sitp.dao.Leisure_sortDAO;
import edu.tongji.sp.sitp.pojo.Leisure_sort;

public class test_Leisure_sort {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Leisure_sort leisureSort;
		leisureSort = new Leisure_sort();
		leisureSort.setName("π∫ŒÔ");
		Leisure_sortDAO.insertLeisureSort(leisureSort);
		
		leisureSort = new Leisure_sort();
		leisureSort.setName("‘À∂Ø");
		Leisure_sortDAO.insertLeisureSort(leisureSort);
	}

}
