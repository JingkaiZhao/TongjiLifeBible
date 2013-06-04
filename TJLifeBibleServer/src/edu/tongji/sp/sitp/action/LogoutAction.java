package edu.tongji.sp.sitp.action;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import edu.tongji.sp.sitp.dao.UserDAO;
import edu.tongji.sp.sitp.pojo.User;
import edu.tongji.sp.sitp.utils.PasswordCrypter;

public class LogoutAction extends ActionSupport {

	/**
     * 
     */
	private static final long serialVersionUID = 1L;
	public String execute() {
			ActionContext.getContext().getSession()
					.remove("userId");
			return SUCCESS;
	}


}