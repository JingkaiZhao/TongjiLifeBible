package edu.tongji.sp.sitp.dao;

import java.util.List;

import edu.tongji.sp.sitp.pojo.Restaurant;
import edu.tongji.sp.sitp.utils.HibernateUtil;

public class RestaurantDAO {
	
	public static List<Restaurant> getRestaurantList(){
		List<Restaurant> list = HibernateUtil.executeQuery("from Restaurant", null);
		return list;
	}
	
	public static Restaurant getRestaurant(int id){
		Restaurant restaurant = new Restaurant();
		String[] params = {"" + id};
		restaurant = (Restaurant) HibernateUtil.uniqueQuery(
				"from Restaurant where id=?", params);
		return restaurant;
	}

	public static Restaurant insertRestaurant(Restaurant restaurant) {
		if (HibernateUtil.saveObject(restaurant)) {
			return restaurant;
		} else {
			return null;
		}
	}

	public static Restaurant updateRestaurant(Restaurant restaurant) {
		if (HibernateUtil.updateObject(restaurant)) {
			return restaurant;
		} else {
			return null;
		}
	}

}
