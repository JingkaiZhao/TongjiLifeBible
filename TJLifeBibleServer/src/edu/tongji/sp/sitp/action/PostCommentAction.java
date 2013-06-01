package edu.tongji.sp.sitp.action;

import java.util.Date;

import org.apache.struts2.json.annotations.JSON;

import com.opensymphony.xwork2.ActionSupport;

import edu.tongji.sp.sitp.dao.CommentDAO;
import edu.tongji.sp.sitp.dao.MessageDAO;
import edu.tongji.sp.sitp.dao.UserDAO;
import edu.tongji.sp.sitp.pojo.Comment;

public class PostCommentAction extends ActionSupport {
	private Integer messageId;
	private String content;

	@JSON(serialize = false)
	public Integer getMessageId() {
		return messageId;
	}

	public void setMessageId(Integer messageId) {
		this.messageId = messageId;
	}

	@JSON(serialize = false)
	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String execute() {
		Comment comment = new Comment();
		comment.setContent(content);
		comment.setCreater(UserDAO.getCurrentUser());
		comment.setMessage(MessageDAO.getMessage(messageId));
		comment.setCreateTime(new Date(System.currentTimeMillis()));
		CommentDAO.insertComment(comment);
		return SUCCESS;

	}

}
