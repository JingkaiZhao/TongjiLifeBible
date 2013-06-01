package edu.tongji.sp.sitp.action;

import java.util.List;

import org.apache.struts2.json.annotations.JSON;

import com.opensymphony.xwork2.ActionSupport;

import edu.tongji.sp.sitp.dao.CommentDAO;
import edu.tongji.sp.sitp.pojo.Comment;

public class CommentAction extends ActionSupport {

	private static final long serialVersionUID = 1L;
	private List<Comment> comments;
	private Integer messageId;

	public String execute() {
		comments = CommentDAO.getCommentList(messageId);
		return SUCCESS;
	}
	public Integer getMessageId() {
		return messageId;
	}

	public void setMessageId(Integer messageId) {
		this.messageId = messageId;
	}

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

}
