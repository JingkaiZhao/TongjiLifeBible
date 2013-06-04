<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML>
<html>
<head>
  <base href="<%=basePath%>">
  <title>同济校园地图生活宝典</title>

  <meta http-equiv="pragma" content="no-cache">
  <meta http-equiv="cache-control" content="no-cache">
  <meta http-equiv="expires" content="0">
  <meta http-equiv="keywords" content="">
  <meta http-equiv="description" content="">

  <link rel="stylesheet" type="text/css" href="assets/bootstrap/css/bootstrap.css">
  <link rel="stylesheet" type="text/css" href="assets/bootstrap/css/messenger.css">
  <link rel="stylesheet" type="text/css" href="assets/bootstrap/css/messenger-theme-future.css">
  <link rel="stylesheet" type="text/css" href="assets/css/custom.css">
  <link rel="stylesheet" type="text/css" href="assets/css/slider.css">
  <link rel="shortcut icon" href="assets/flat-ui/images/favicon.ico"></head>
  
<body>
  <div class="bottom-bar">
    <div class="btn-toolbar">
      <div class="btn-group" id="bottom-bar-btn" data-toggle="buttons-radio">
        <button class="btn btn-large btn-inverse active" id="btn-view">
          <i class="icon-hand-up"></i>
          浏览
        </button>
        <button class="btn btn-large btn-inverse" id="btn-path"> 
          <i class="icon-search"></i>
          路线
        </button>
        <button class="btn btn-large btn-inverse" id="1"> 
          <i class="icon-flag"></i>
          地点
        </button>
        <button class="btn btn-large btn-inverse" id="btn-message">
          <i class="icon-volume-up"></i>
          消息
        </button>
	  </div>
	  <div class="btn-group dropup btn-signin">
  		<button class="btn btn-inverse disabled" id="btn-usr">用户</button>
  		<button class="btn btn-inverse dropdown-toggle" data-toggle="dropdown">
    		<span class="caret"></span>
  		</button>
  		<ul class="dropdown-menu" id="dp-usr">
  			<li><a href="#signinModal" data-toggle="modal">登录</a></li>
  			<li><a href="#registModal" data-toggle="modal">注册</a></li>
  		</ul>
	  </div>
    </div>
  </div>
  <div class="left-bar">
    <div class="bar-body" id="bar-inner">
    </div>
  </div>

  <div id="rp_list" class="rp_list">
    <ul>
      <li>
        <div>
          <img src="assets/images/1.jpg" alt=""/>  
          <span class="rp_title"><strong>交通信息</strong></span>
          <span class="rp_links">
            <input type="checkbox" id="checkbox-transit" checked> 显示
          </span>
        </div>
      </li>
      <li>
        <div>
          <img src="assets/images/2.jpg" alt=""/>  
          <span class="rp_title"><strong>周边信息</strong></span>
          <span class="rp_links">
            <input type="checkbox" id="checkbox-leisure" checked> 显示
          </span>
        </div>
      </li>
      <li>
        <div>
          <img src="assets/images/3.jpg" alt=""/>  
          <span class="rp_title"><strong>旅游景点</strong></span>
          <span class="rp_links">
            <input type="checkbox" id="checkbox-tInterest" checked> 显示
          </span>
        </div>
      </li>
      <li>
        <div>
          <img src="assets/images/3.jpg" alt=""/>  
          <span class="rp_title"><strong>旅游景点</strong></span>
          <span class="rp_links">
            <input type="checkbox" id="checkbox-tInterest" checked> 显示
          </span>
        </div>
      </li>
    </ul>
  </div>

  <iframe class="map-frame" name="mapFrame" frameborder="0" src="webpage/map.jsp">
  </iframe>
  <iframe name="pushletFrame" src="webpage/pushlet.jsp" style="display: none;">
  </iframe>

  <div class="modal hide fade s-modal" id="signinModal" style="display: none;">
	<div class="modal-header">
		<a class="close" data-dismiss="modal">×</a>
		<h4>登录</h4>
	</div>
	<div class="modal-body">
		<form class="form-horizontal">
			<input type="text" class="input" id="s-email" placeholder="邮箱"> 
			<input type="password" class="input" id="s-pwd" placeholder="密码"> 
			<div class="s-btns">
				<button type="submit" id="btn-signin" class="btn btn-inverse">登录</button>
				<a href="#registModal" data-toggle="modal">没有账号？点此处注册</a>
			</div>
		</form>
	</div>
  </div>
  <div class="modal hide fade r-modal" id="registModal" style="display: none;">
	<div class="modal-header">
		<a class="close" data-dismiss="modal">×</a>
		<h4>注册</h4>
	</div>
	<div class="modal-body">
		<form class="form-horizontal">
			<input type="text" class="input" id="r-email" placeholder="邮箱">
			<span class="label label-info">
				<small>请输入您的邮箱作为账号</small>
			</span> 
			<input type="text" class="input" id="r-name" placeholder="名字">
			<span class="label label-info">
				<small>请输入名字作为您在本站的名字</small>
			</span>
			<input type="password" class="input" id="r-pwd" placeholder="密码">
			<span class="label label-info">
				<small>请输入您的密码</small>
			</span>
			<input type="password" class="input" placeholder="确认密码">
			<span class="label label-info">
				<small>请确认您的密码</small>
			</span>
			<div class="r-btns">
				<button type="button" id="btn-regist" class="btn btn-inverse">注册</button>
			</div>
		</form>
	</div>
  </div>


  <!-- scripts -->
  <script type="text/javascript" src="assets/bootstrap/js/bootstrap.js"></script>
  <script type="text/javascript" src="assets/bootstrap/js/jquery-1.8.2.min.js"></script>
  <script type="text/javascript" src="assets/bootstrap/js/messenger.min.js"></script>
  <script type="text/javascript" src="assets/bootstrap/js/bootstrap-button.js"></script>
  <script type="text/javascript" src="assets/bootstrap/js/bootstrap-dropdown.js"></script>
  <script type="text/javascript" src="assets/bootstrap/js/bootstrap-modal.js"></script>
  <script type="text/javascript" src="assets/bootstrap/js/bootstrap-transition.js"></script>
  <script type="text/javascript" src="assets/js/ui_application.js" charset="UTF-8"></script>
</body>
</html>