package edu.tongji.sp.sitp.action;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import edu.tongji.sp.sitp.dao.UserDAO;
import edu.tongji.sp.sitp.pojo.User;
import edu.tongji.sp.sitp.utils.PasswordCrypter;

public class LogoutAction extends ActionSupport {

	private static final long serialVersionUID = 1L;
	private String result;
	private boolean isSuccess;
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
	public String execute() {
			ActionContext.getContext().getSession()
					.remove("userId");
			setSuccess(true);
			setResult("ÍË³ö³É¹¦");
			return SUCCESS;
	}


}