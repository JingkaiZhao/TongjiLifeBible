package edu.tongji.sp.sitp.dao;

import java.util.List;

import edu.tongji.sp.sitp.pojo.Comment;
import edu.tongji.sp.sitp.utils.HibernateUtil;


public class CommentDAO {

	
	public static List<Comment> getCommentList(int messageId){
		String[] params = {"" + messageId};
		List<Comment> list = HibernateUtil.executeQuery("from Comment where message.id=?", params);
		return list;
	}
	
	public static Comment getComment(int id){
		Comment comment = new Comment();
		String[] params = {"" + id};
		comment = (Comment) HibernateUtil.uniqueQuery(
				"from Comment where id=?", params);
		return comment;
	}

	public static Comment insertComment(Comment comment) {
		if (HibernateUtil.saveObject(comment)) {
			return comment;
		} else {
			return null;
		}
	}

	public static Comment updateComment(Comment comment) {
		if (HibernateUtil.updateObject(comment)) {
			return comment;
		} else {
			return null;
		}
	}
}
