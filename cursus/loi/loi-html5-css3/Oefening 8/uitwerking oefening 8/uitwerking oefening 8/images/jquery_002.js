function BuildMegaMenus() {

    var links = $(".navigation").find("li.nav-item");
    var menus = $(".mega-menu");

	// makes overlay and megamnu dissappear on an ipad
	if (isTablet()) {
		$(document).scroll(function () {
			$(".overlay").css("display", "none");
			$("#header .logo-container .logo a").css("background-position", "top");
			$("#breadcrumbs").css("display", "block");
			$(menus).css("display", "none");
		});
	}
	
	// hide overlay if url containing an anchor is clicked
	$("li.nav-item div.mega-menu a").each(function(index, element) {
		if ($(this).attr("href").lastIndexOf("#") > 0 ){
			$(this).click(function(){
				$(".overlay").hide();
			});
		}
	});

    var _hideOverlay = true;
    var config = {
        sensitivity: 6, // number = sensitivity threshold (must be 1 or higher)
        interval: 150, // number = milliseconds for onMouseOver polling interval
        over: function () {
            $(menus).css("display", "none");
            if ($(this).find(".mega-menu").length) {

                if (!isTablet()) {
                    $(this).find(".mega-menu").fadeIn(0, function () {                        
                        $("#breadcrumbs .breadcrumbs").css("display", "none");
                    });
                }
                else
                    $(this).find(".mega-menu").css("display", "block");

                $(".overlay").css("display", "block");
                $("#header .logo-container .logo a").css("background-position", "bottom");

                var height = $(document).height();
                $(".overlay").css("height", height + "px");

                _hideOverlay = false;
            }
        }, // function = onMouseOver callback (REQUIRED)
        timeout: 400, // number = milliseconds delay before onMouseOut
        out: function () {
            if ($(this).find(".mega-menu").length) {
                $(this).find(".mega-menu").css("display", "none");
                _hideOverlay = true;
                $(menus).each(function (index, obj) {
                    if ($(this).css("display") == "block") {
                        _hideOverlay = false;
                    }
                });

                if (_hideOverlay) { // only hide the over if no other mega menu is visible
                    $(".overlay").hide();
                    $("#header .logo-container .logo a").css("background-position", "top");
                    $("#breadcrumbs").css("display", "block");
                }

            }
        } // function = onMouseOut callback (REQUIRED)
    };

    $(links).hoverIntent(config);
}

/**
* hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne brian(at)cherne(dot)net
*/
(function ($) { $.fn.hoverIntent = function (f, g) { var cfg = { sensitivity: 7, interval: 500, timeout: 500 }; cfg = $.extend(cfg, g ? { over: f, out: g} : f); var cX, cY, pX, pY; var track = function (ev) { cX = ev.pageX; cY = ev.pageY }; var compare = function (ev, ob) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); if ((Math.abs(pX - cX) + Math.abs(pY - cY)) < cfg.sensitivity) { $(ob).unbind("mousemove", track); ob.hoverIntent_s = 1; return cfg.over.apply(ob, [ev]) } else { pX = cX; pY = cY; ob.hoverIntent_t = setTimeout(function () { compare(ev, ob) }, cfg.interval) } }; var delay = function (ev, ob) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); ob.hoverIntent_s = 0; return cfg.out.apply(ob, [ev]) }; var handleHover = function (e) { var ev = jQuery.extend({}, e); var ob = this; if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t) } if (e.type == "mouseenter") { pX = ev.pageX; pY = ev.pageY; $(ob).bind("mousemove", track); if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout(function () { compare(ev, ob) }, cfg.interval) } } else { $(ob).unbind("mousemove", track); if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout(function () { delay(ev, ob) }, cfg.timeout) } } }; return this.bind('mouseenter', handleHover).bind('mouseleave', handleHover) } })(jQuery);