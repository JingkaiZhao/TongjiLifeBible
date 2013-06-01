package edu.tongji.sp.sitp.service;

import java.util.List;

import edu.tongji.sp.sitp.dao.UserDAO;
import edu.tongji.sp.sitp.pojo.User;
import edu.tongji.sp.sitp.utils.PasswordCrypter;
import edu.tongji.sp.sitp.utils.Validator;


public class Register {
	public static User regist(String email,String passwd){
		if(!Validator.isEmail(email) || !checkPasswd(passwd)){
			return null;
		}
		String encryptedEmail = PasswordCrypter.string_encrypt(email);
		String encryptedPasswd = PasswordCrypter.string_encrypt(passwd);
		List<User> list = UserDAO.getUsers(encryptedEmail);
		if(list == null || list.size() == 0){
			User newUser = (User) UserDAO.insertUser(encryptedEmail, encryptedPasswd);
			if(newUser == null){
				return null;
			}else{
				return newUser;
			}
		}else{
			return null;
		}
	}

	private static boolean checkPasswd(String passwd){
		if(passwd.length() <6 || passwd.length() > 12){
			return false;
		}else{
			return true;
		}
	}
}
