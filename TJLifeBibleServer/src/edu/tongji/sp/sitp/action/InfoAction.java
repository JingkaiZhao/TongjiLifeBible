package edu.tongji.sp.sitp.action;

import java.util.List;

import com.opensymphony.xwork2.ActionSupport;

import edu.tongji.sp.sitp.dao.LeisureDAO;
import edu.tongji.sp.sitp.dao.Public_transitDAO;
import edu.tongji.sp.sitp.dao.Tourist_interestDAO;
import edu.tongji.sp.sitp.pojo.Leisure;
import edu.tongji.sp.sitp.pojo.Public_transit;
import edu.tongji.sp.sitp.pojo.Tourist_interest;

public class InfoAction extends ActionSupport {
	
	private static final long serialVersionUID = 1L;
	private List<Public_transit> transit;
	private List<Leisure> leisure;
	private List<Tourist_interest> tInterest;
	
	public String execute(){
		transit = Public_transitDAO.getTransitList();
		leisure = LeisureDAO.getLeisureList();
		tInterest = Tourist_interestDAO.getTInterestList();
		return SUCCESS;
	}

	public List<Leisure> getLeisure() {
		return leisure;
	}

	public void setLeisure(List<Leisure> leisure) {
		this.leisure = leisure;
	}

	public List<Tourist_interest> gettInterest() {
		return tInterest;
	}

	public void settInterest(List<Tourist_interest> tInterest) {
		this.tInterest = tInterest;
	}

	public List<Public_transit> getTransit() {
		return transit;
	}

	public void setTransit(List<Public_transit> transit) {
		this.transit = transit;
	}

}
