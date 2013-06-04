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
	private String errorMessage;
	

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

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public String execute() {
		Register register = new Register();
		if (register.regist(registEmail, registPasswd) == null) {
			setErrorMessage("×¢²á³ö´í");
			return SUCCESS;
		} else {
			UserDAO.getUser(registEmail).setName(name);
			ActionContext.getContext().getSession()
			.put("userId",UserDAO.getUser(registEmail).getId());
			return SUCCESS;
		}
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}