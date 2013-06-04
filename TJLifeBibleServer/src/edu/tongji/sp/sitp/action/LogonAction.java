package edu.tongji.sp.sitp.action;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import edu.tongji.sp.sitp.dao.UserDAO;
import edu.tongji.sp.sitp.pojo.User;
import edu.tongji.sp.sitp.utils.PasswordCrypter;

public class LogonAction extends ActionSupport {

	/**
     * 
     */
	private static final long serialVersionUID = 1L;

	private String userName;
	private String password;
	private String errorMessage;

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getErrorMessage() {
		return errorMessage;
	}

	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}

	public String execute() {
		if (checkUser()) {
			ActionContext.getContext().getSession()
					.put("userId", UserDAO.getUser(userName).getId());
			return SUCCESS;
		} else {
			setErrorMessage("用户名或密码错误");
			return SUCCESS;
		}
	}

	private boolean checkUser() {
		User user = UserDAO.getUser(userName);
		if (user == null
				|| !user.getPasswd().equals(
						PasswordCrypter.string_encrypt(password))) {
			return false;
		} else {
			return true;
		}
	}

}