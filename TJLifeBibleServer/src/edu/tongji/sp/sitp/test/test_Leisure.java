package edu.tongji.sp.sitp.test;

import edu.tongji.sp.sitp.dao.LeisureDAO;
import edu.tongji.sp.sitp.dao.Leisure_sortDAO;
import edu.tongji.sp.sitp.pojo.Leisure;
import edu.tongji.sp.sitp.pojo.Leisure_sort;

public class test_Leisure {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Leisure leisure;
			leisure = new Leisure();
			leisure.setLat("31.283053");
			leisure.setLng("121.500662");
			leisure.setName("����");
			leisure.setContent("ͬ�ô�ѧ����");
			leisure.setSort(Leisure_sortDAO.getLeisureSort(2));
			LeisureDAO.insertLeisure(leisure);
			
			leisure = new Leisure();
			leisure.setLat("31.282558");
			leisure.setLng("121.497481");
			leisure.setName("��������");
			leisure.setContent("ͬ�ô�ѧ��������");
			leisure.setSort(Leisure_sortDAO.getLeisureSort(1));
			LeisureDAO.insertLeisure(leisure);
	}

}
