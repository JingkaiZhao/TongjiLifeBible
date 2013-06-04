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
	private String name;
	private boolean isSuccess;
	private String result;
	private User user = null;

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


	public String execute() {
		if (checkUser()) {
			ActionContext.getContext().getSession()
					.put("userId", user.getId());
			setName(user.getName());
			setResult("登录成功");
			setSuccess(true);
			return SUCCESS;
		} else {
			setResult("用户名或密码错误");
			setSuccess(false);
			return SUCCESS;
		}
	}

	private boolean checkUser() {
		user = UserDAO.getUser(userName);
		if (user == null
				|| !user.getPasswd().equals(
						PasswordCrypter.string_encrypt(password))) {
			return false;
		} else {
			return true;
		}
	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public boolean isSuccess() {
		return isSuccess;
	}

	public void setSuccess(boolean isSuccess) {
		this.isSuccess = isSuccess;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}