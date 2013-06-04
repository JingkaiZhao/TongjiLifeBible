package edu.tongji.sp.sitp.action;


import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import edu.tongji.sp.sitp.dao.UserDAO;
import edu.tongji.sp.sitp.service.Register;

public class RegisterAction extends ActionSupport {

	/**
     * 
     */
    private static final long serialVersionUID = 1L;
    private String registEmail;
	private String registPasswd;
	private String name;
	private boolean isSuccess;
	private String result;
	

	public String getRegistEmail() {
        return registEmail;
    }

    public void setRegistEmail(String registEmail) {
        this.registEmail = registEmail;
    }

    public String getRegistPasswd() {
        return registPasswd;
    }

    public void setRegistPasswd(String registPasswd) {
        this.registPasswd = registPasswd;
    }

    public String execute() {
		Register register = new Register();
		if (register.regist(registEmail, registPasswd) == null) {
			setSuccess(false);
			setResult("×¢²á³ö´í");
			return SUCCESS;
		} else {
			UserDAO.getUser(registEmail).setName(name);
			ActionContext.getContext().getSession()
			.put("userId",UserDAO.getUser(registEmail).getId());
			setResult("×¢²á³É¹¦£¡ÒÑµÇÂ¼");
			setSuccess(true);
			return SUCCESS;
		}
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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
}