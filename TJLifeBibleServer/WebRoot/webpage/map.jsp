<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">

	<link rel="stylesheet" type="text/css" href="assets/css/custom.css">
  	<link rel="shortcut icon" href="assets/flat-ui/images/favicon.ico">
  </head>
  
  <body onload="initialize()">
    <div id="map-canvas" style="width:100%; height:100%">
    </div>

    <!-- Use Google Map apis -->
    <script type="text/javascript"
      src="http://maps.googleapis.com/maps/api/js?key=AIzaSyCvOc89r2JpzbCcbWAOGHTTBc_ydmVWAu4&sensor=true">
    </script>
    <script type="text/javascript" src="assets/bootstrap/js/jquery-1.8.2.min.js"></script>
    <script type="text/javascript" src="assets/js/map.js" charset="UTF-8"></script>
    <script type="text/javascript" src="assets/js/infobubble.js" charset="UTF-8"></script>
  </body>
</html>
