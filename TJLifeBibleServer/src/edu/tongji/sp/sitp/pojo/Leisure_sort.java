package edu.tongji.sp.sitp.pojo;

import java.util.Set;

public class Leisure_sort {
	private Integer id;
	private String name;
	
	private Set<Leisure> leisure;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Set<Leisure> getLeisure() {
		return leisure;
	}
	public void setLeisure(Set<Leisure> leisure) {
		this.leisure = leisure;
	}

}
