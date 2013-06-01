package edu.tongji.sp.sitp.test;

import com.opensymphony.xwork2.ActionSupport;

import edu.tongji.sp.sitp.dao.Leisure_sortDAO;
import edu.tongji.sp.sitp.pojo.Leisure_sort;

public class test_ChineseAction extends ActionSupport {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String name;
	
	public String execute(){
		Leisure_sort leisure_sort= new Leisure_sort();
		leisure_sort.setName(name);
		Leisure_sortDAO.insertLeisureSort(leisure_sort);
		return SUCCESS;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
