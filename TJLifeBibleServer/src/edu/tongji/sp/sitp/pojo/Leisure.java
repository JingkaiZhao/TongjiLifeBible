package edu.tongji.sp.sitp.pojo;

public class Leisure {
	private Integer id;
	private String name;
	private String content;
	private String lat;
	private String lng;
	
	public String getLat() {
		return lat;
	}

	public void setLat(String lat) {
		this.lat = lat;
	}

	public String getLng() {
		return lng;
	}

	public void setLng(String lng) {
		this.lng = lng;
	}

	private Leisure_sort sort;

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

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}


	public Leisure_sort getSort() {
		return sort;
	}

	public void setSort(Leisure_sort sort) {
		this.sort = sort;
	}

}
