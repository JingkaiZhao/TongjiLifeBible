var modeFlag = 1;
var isDetailPanel = false;

var currentUsr = null;
var dpBeforeSigninHtml = '<li><a href="#signinModal" data-toggle="modal">登录</a></li>' +
  				 		 '<li><a href="#registModal" data-toggle="modal">注册</a></li>';
var dpAfterSigninHtml = '<li><a href="#" id="a-logout">登出</a></li>';

$(document).ready(function() {

    /**
     * right slider
     *
     */

    var $list = $('#rp_list ul');

    /**
     * show the first set of posts.
     * 200 is the initial left margin for the list elements
     */
    load(200);

    function load(initial) {
        $list.find('li').hide().andSelf().find('div').css('margin-left', -initial + 'px');
        var loaded = 0;

        while (loaded < 4) {
            var $elem = $list.find('li:nth-child(' + (loaded + 1) + ')');
            if ($elem.is(':visible')) continue;
            else $elem.show();
            ++loaded;
        }
        //animate them
        var d = 200;
        $list.find('li:visible div').each(function() {
            $(this).stop().animate({
                'marginLeft': '-50px'
            }, d += 100);
        });
    }

    /**
     * hovering over the list elements makes them slide out
     */
    $list.find('li:visible').live('mouseenter', function() {
        $(this).find('div').stop().animate({
            'marginLeft': '-220px'
        }, 200);
    }).live('mouseleave', function() {
        $(this).find('div').stop().animate({
            'marginLeft': '-50px'
        }, 200);
    });

    /**
     * written by jingkaizhao
     * 
     */
    $("#bottom-bar-btn").button();
    $("#signinModal").modal({
    	keyboard: true, 
    	show: false
    });
    $("#registModal").modal({
    	keyboard: true, 
    	show: false
    });
    $(".btn-group a").click(function() {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });

    $("a[href='#']").click(function() {
        return false
    });

    $('#sidebar-switch').toggle(function(){
        $('.left-bar').animate({left: '0px'}, 200);
    },function(){
        $('.left-bar').animate({left: '-260px'}, 200);
    });

    $('#checkbox-transit').change(function() {
        if($(this).attr("checked") == "checked") {
            window.frames["mapFrame"].window.showOverlays("transit");
        } else {
            window.frames["mapFrame"].window.clearOverlays("transit");
        }
    });

    $('#checkbox-leisure').change(function() {
        if($(this).attr("checked") == "checked") {
            window.frames["mapFrame"].window.showOverlays("leisure");
        } else {
            window.frames["mapFrame"].window.clearOverlays("leisure");
        }
    });


    $('#checkbox-tInterest').change(function() {
        if($(this).attr("checked") == "checked") {
            window.frames["mapFrame"].window.showOverlays("tInterest");
        } else {
            window.frames["mapFrame"].window.clearOverlays("tInterest");
        }
    });

    $('#btn-view').click(function() {
        switch (modeFlag) {
            case 2:
                {
                    window.frames["mapFrame"].window.pathRemoveListener();
                    window.frames["mapFrame"].window.pathClear();
                    break;
                }
            case 4:
                {
                    window.frames["mapFrame"].window.messageClear();
                    break;
                }
        }
        modeFlag = 1;
    });

    $('#btn-path').click(function() {
        switch (modeFlag) {
            case 1:
                {
                    window.frames["mapFrame"].window.pathAddListener();
                    break;
                }
            case 4:
                {
                    window.frames["mapFrame"].window.messageClear();
                    window.frames["mapFrame"].window.pathAddListener();
                    break;
                }
        }
        modeFlag = 2;
    });

    $('#btn-message').click(function() {
        switch (modeFlag) {
            case 1:
                {
                    window.frames["mapFrame"].window.messageAddListener();
                    break;
                }
            case 2:
                {
                    window.frames["mapFrame"].window.pathRemoveListener();
                    window.frames["mapFrame"].window.pathClear();
                    window.frames["mapFrame"].window.messageAddListener();
                    break;
                }
        }
        modeFlag = 4;
    });
    
    $('#close-details').live('mouseover', function() {
    	$(this).find('i').removeClass('icon-white');
    });
    
    $('#close-details').live('mouseout', function() {
    	$(this).find('i').addClass('icon-white');
    });
    
    $('#close-details').live('click', function () {
    	$(this).parent().parent().parent().animate({left: '-260px'}, 200);
    	return false;
    });
    
    $('#btn-regist').live('click', function() {
    	var name = $('#r-name').val();
    	$.post('register', {
    		registEmail: $('#r-email').val(), 
    		registPasswd: $('#r-pwd').val(),
    		name: name
    	}, function(data, status) {
    		if(status == 'success') {
    			if (data.success) {
    				$('#registModal').modal('hide');
            		$.globalMessenger().post({
            			message: data.result,
            			type: 'success', 
            			showCloseButton: true
            		});
	    			$('#btn-usr').text(name);
	    			$('#dp-usr').empty().append(dpAfterSigninHtml);
	    			currentUsr = name;
    			} else {
    				$.globalMessenger().post({
            			message: data.result,
            			type: 'error', 
            			showCloseButton: true
            		});
    			}	
    		} else {
    			alert('Opps, something goes into error, please press F5 to refresh.');
    		}
    	});
    	return false;
    });
    
    $('#btn-signin').live('click', function() {
    	$.post('logon', {
    		userName: $('#s-email').val(), 
    		password: $('#s-pwd').val()
    	}, function(data, status) {
    		if (status == 'success') {
    			if(data.success) {
    				$('#signinModal').modal('hide');
	    			$.globalMessenger().post({
	    				message: data.result,
	    				type: 'success',
	    				showCloseButton: true
	    			});
	    			$('#btn-usr').text(data.name);
	    			$('#dp-usr').empty().append(dpAfterSigninHtml);
	    			currentUsr = data.name;
    			} else {
    				$.globalMessenger().post({
    					message: data.result, 
    					type: 'error', 
    					showCloseButton: true
    				});
    			}
    		} else {
    			alert('Opps, something goes into error, please press F5 to refresh.');
    		}
    	});
    	return false;
    });
    
    $('#a-logout').live('click', function() {
    	$.get('logout', function(data, status) {
    		if (status == 'success') {
    			$('#btn-usr').text('用户');
    			$('#dp-usr').empty().append(dpBeforeSigninHtml);
    			$.globalMessenger().post({
    				message: data.result,
    				type: 'success',
    				showCloseButton: true
    			});
    			currentUsr = null;
    		} else {
    			alert('Opps, something goes into error, please press F5 to refresh.');
    		}
    	});
    	return false;
    });
});

function showLeisureDetails(data) {
	var detailHtml = '<div class="bar-top">' +
				      	'<a id="close-details" href="#"><i class="pull-right icon-remove icon-white"></i></a>' +
				      '</div>' +
				      '<div class="bar-wrapper">' +
				      	'<ul>' +
				      		'<li class="barli-first">' +
				      			'<h1>' + data.name + '</h1>' +
				      			'<h1 id="split">|</h1>' +
				      			'<b>' + data.sort + '</b>' +
				      		'</li>' +
				      		'<li class="li-img">' +
				      		'</li>' +
				      		'<li class="li-info">' +
				      			'<b>地址: </b>' + data.address +
				      		'</li>' +
				      		'<li class="li-info">' +
				      			'<b>电话: </b>' + data.tel +
				      		'</li>' +
				      		'<li class="li-info">' + 
				      			'<b>人均: </b>￥ ' + data.pcc +
				      		'</li>' +
				      	'</ul>' +
				      	'<div class="s-intro">' +
				      		'<h4>店铺介绍: </h4>' +
				      	'</div>' +
				      '</div>';
    if (!isDetailPanel) {
        $('#bar-inner').empty().append(detailHtml);
        $('.left-bar').animate({left: '0px'}, 200);
        isDetailPanel = true;
    } else {
        $('.left-bar').animate({left: '-260px'}, 200);
        $('#bar-inner').empty().append(detailHtml).stop();
        $('.left-bar').animate({left: '0px'}, 200);
        isDetailPanel = true;
    }
}

function showtInterestDetails(data) {
	var detailHtml = '<div class="bar-top">' +
					  	'<a id="close-details" href="#"><i class="pull-right icon-remove icon-white"></i></a>' +
					  '</div>' +
					  '<div class="bar-wrapper">' +
					  	'<ul>' +
					  		'<li class="barli-first">' +
					  			'<h1>' + data.name + '</h1>' +
					  			'<h1 id="split">|</h1>' +
					  			'<b>' + data.sort + '</b>' +
					  		'</li>' +
					  		'<li class="li-img">' +
					  		'</li>' +
					  		'<li class="li-info">' +
					  			'<b>地址: </b>' + data.address +
					  		'</li>' +
					  		'<li class="li-info">' +
					  			'<b>网站: </b>' + data.website +
					  		'</li>' +
					  		'<li class="li-info">' + 
					  			'<b>票价: </b>￥ ' + data.ticketPrice +
					  		'</li>' +
					  		'<li class="li-info">' + 
					  			'<b>开放时间: </b>' + data.openingTime +
					  		'</li>' +
					  	'</ul>' +
					  	'<div class="s-intro">' +
					  		'<h4>景点介绍: </h4>' +
					  	'</div>' +
					  '</div>';
	if (!isDetailPanel) {
		$('#bar-inner').empty().append(detailHtml);
		$('.left-bar').animate({left: '0px'}, 200);
		isDetailPanel = true;
	} else {
		$('.left-bar').animate({left: '-260px'}, 200);
		$('#bar-inner').empty().append(detailHtml).stop();
		$('.left-bar').animate({left: '0px'}, 200);
		isDetailPanel = true;
	}
}

function showTransitDetails(data) {
	var detailHtml = '<div class="bar-top">' +
					  	'<a id="close-details" href="#"><i class="pull-right icon-remove icon-white"></i></a>' +
					  '</div>' +
					  '<div class="bar-wrapper">' +
					  	'<ul>' +
					  		'<li class="barli-first">' +
					  			'<h1>' + data.name + '</h1>' +
					  			'<h1 id="split">|</h1>' +
					  			'<b>' + data.sort + '</b>' +
					  		'</li>' +
					  		'<li class="li-img">' +
					  		'</li>' +
					  		'<li class="li-info">' +
					  			'<b>地址: </b>' + data.address +
					  		'</li>' +
					  		'<li class="li-info">' +
					  			'<b>电话: </b>' + data.tel +
					  		'</li>' +
					  		'<li class="li-info">' + 
					  			'<b>人均: </b>￥ ' + data.pcc +
					  		'</li>' +
					  	'</ul>' +
					  	'<div class="s-intro">' +
					  		'<h4>详细信息: </h4>' +
					  	'</div>' +
					  '</div>';
	if (!isDetailPanel) {
		$('#bar-inner').empty().append(detailHtml);
		$('.left-bar').animate({left: '0px'}, 200);
		isDetailPanel = true;
	} else {
		$('.left-bar').animate({left: '-260px'}, 200);
		$('#bar-inner').empty().append(detailHtml).stop();
		$('.left-bar').animate({left: '0px'}, 200);
		isDetailPanel = true;
	}
}

function showSigninModal() {
	$('#signinModal').modal('show');
}

