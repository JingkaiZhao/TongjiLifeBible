var modeFlag = 1;
var isDetailPanel = false;

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
    })

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
    })

});

function showDetails(data) {
    if (!isDetailPanel) {
        $('#bar-inner').empty().append(data);
        $('.left-bar').animate({left: '0px'}, 200);
        isDetailPanel = true;
    } else {
        $('.left-bar').animate({left: '-260px'}, 200);
        $('#bar-inner').empty().append(data).stop();
        $('.left-bar').animate({left: '0px'}, 200);
        isDetailPanel = true;
    }
   
}

