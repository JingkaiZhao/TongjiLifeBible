<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
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
  <link rel="stylesheet" type="text/css" href="assets/bootstrap/js/google-code-prettify/prettify.css">
  <link rel="stylesheet" type="text/css" href="assets/css/custom.css">
  <link rel="stylesheet" type="text/css" href="assets/css/slider.css">
  <link rel="shortcut icon" href="assets/flat-ui/images/favicon.ico"></head>

<body>
  <div class="top-bar">
  </div>
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
  <!-- Use bootstrap js -->
  <script type="text/javascript" src="assets/bootstrap/js/bootstrap.js"></script>
  <script type="text/javascript" src="assets/bootstrap/js/jquery-1.8.2.min.js"></script>
  <script type="text/javascript" src="assets/bootstrap/js/google-code-prettify/prettify.js"></script>
  <script type="text/javascript" src="assets/bootstrap/js/bootstrap-transition.js"></script>
  <script type="text/javascript" src="assets/bootstrap/js/bootstrap-alert.js"></script>
  <script type="text/javascript" src="assets/bootstrap/js/bootstrap-modal.js"></script>
  <script type="text/javascript" src="assets/bootstrap/js/bootstrap-dropdown.js"></script>
  <script type="text/javascript" src="assets/bootstrap/js/bootstrap-scrollspy.js"></script>
  <script type="text/javascript" src="assets/bootstrap/js/bootstrap-tab.js"></script>
  <script type="text/javascript" src="assets/bootstrap/js/bootstrap-tooltip.js"></script>
  <script type="text/javascript" src="assets/bootstrap/js/bootstrap-popover.js"></script>
  <script type="text/javascript" src="assets/bootstrap/js/bootstrap-button.js"></script>
  <script type="text/javascript" src="assets/bootstrap/js/bootstrap-collapse.js"></script>
  <script type="text/javascript" src="assets/bootstrap/js/bootstrap-carousel.js"></script>
  <script type="text/javascript" src="assets/bootstrap/js/bootstrap-typeahead.js"></script>
  <script type="text/javascript" src="assets/bootstrap/js/holder.js"></script>
  <script type="text/javascript" src="assets/js/ui_application.js" charset="UTF-8"></script>
</body>
</html>