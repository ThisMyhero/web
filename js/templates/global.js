
let winHref=window.location.pathname

let myMenu='<div class="dropdown_button">\n' +
    '<a href="/" title="Features" id="Home">'+_mx('Home')+'</a>\n' +
    '    <a id="navSoftware" title="'+_mx('Product')+'">'+_mx('Product')+'</a>\n' +
    '    <div id="software_menu">\n' +
    '        <div class="arrow"></div>\n' +
    '        <a class="element" href="/site-os-site" title="'+_mx('Standalone version')+'">\n' +
    '            <div class="icon_small msos"></div>\n' +
    '            <div class="text">\n' +
    '                <b>'+_mx('Standalone version')+'</b>\n' +
    '                <p>'+_mx('Graphical mining software for windows NVIDIA and AMD GPU platforms. It is suitable for mines, only can manage one workers.')+'</p>\n' +
    '            </div>\n' +
    '        </a>\n' +
    '        <a class="element" href="/site-os" title="Windows mining monitoring">\n' +
    '            <div class="icon_small windows" style="background-position: 0 -72px;"></div>\n' +
    '            <div class="text">\n' +
    '                <b>'+_mx('Place-server version')+'</b>\n' +
    '                <p>'+_mx('Graphical mining software for windows NVIDIA and AMD GPU platforms. It is suitable for mines, can manage multiple mining machines in multiple mines at the same time, and supports mixed management of different platforms.')+'</p>\n' +
    '            </div>\n' +
    '        </a>\n' +
    '        <a class="element" href="/site-os-client" title="Windows mining monitoring">\n' +
    '            <div class="icon_small windows"></div>\n' +
    '            <div class="text">\n' +
    '                <b>'+_mx('Place-client version')+'</b>\n' +
    '                <p>'+_mx('Graphical mining software for windows NVIDIA and AMD GPU platforms. It is suitable for mines, can manage multiple mining machines in multiple mines at the same time, and supports mixed management of different platforms.')+'</p>\n' +
    '            </div>\n' +
    '        </a>\n' +
    '        <div class="divider"></div>\n' +
    '        <a class="link" href="/software" title="Software">'+_mx('All software')+'</a>\n' +
    '    </div>\n' +
    '</div>\n' +
    // '<a href="/features" title="Features">Features</a>\n' +
    '<a href="/FAQ" id="FAQ" title="'+_mx('FAQ')+'">'+_mx('FAQ')+'</a>'+
    '<a href="/help" id="HELP" title="'+_mx('Help')+'">'+_mx('Help')+'</a>'+
    '<a href="/Contact" id="CUs" title="'+_mx('Contact Us')+'">'+_mx('Contact Us')+'</a>'
// '<a href="/help" title="'+_mx('Help')+'">'+_mx('FAQ')+'</a>'

let myFolat='<footer>\n' +
    '    <div class="frame">\n' +
    '        <div class="col">\n' +
    '            <div class="foo_title">友情链接</div>\n' +
    '        </div>\n' +
    '        <div class="col"><a style="margin-right: 10px;text-decoration:none;color: #a0abbb" href="https://www.binance.com/zh-CN">币安网</a></div>\n' +
    '        <div class="col"><a style="margin-right: 10px;text-decoration:none;color: #a0abbb"  href="https://www.zb.com/cn/">中币网</a></div>\n' +
    '        <div class="col"><a style="margin-right: 10px;text-decoration:none;color: #a0abbb" href="https://www.coinw.com/">币赢网</a></div>\n' +
    '        <div class="col"><a style="margin-right: 10px;text-decoration:none;color: #a0abbb" href="http://www.btccgl.com/">C2CBTCC</a></div>\n' +
    '        <div class="col"><a style="margin-right: 10px;text-decoration:none;color: #a0abbb" href="https://www.huobi.bo/">火币交易所</a></div>\n' +
    '        <div class="col"><a  style="margin-right: 10px;text-decoration:none;color: #a0abbb" href="https://www.aofex.ltd/">A网(AOFEX)交易所</a></div>\n' +
    '    </div>\n' +
    '    <div class="footer_info">\n' +
    '        <div class="frame">\n' +
    '            <div class="info">\n' +
    '                <div class="logo">minerstat</div>\n' +
    '                <div class="text">\n' +
    '                    © 2016-2021 AMining OÜ. All Rights Reserved.\n' +
    '                    <small>AMining® is a registered trademark of AMining OÜ.</small>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="socials">\n' +
    '                <a  href="/Contact" style="margin-right: 10px;text-decoration:none;color: #a0abbb">联系我们</a>\n' +
    '                <a href="/help" style="margin-right: 10px;text-decoration:none;color: #a0abbb">帮助中心</a>\n' +
    // '                <a style="margin-right: 10px">变更日志</a>\n' +
    '             </div>\n' +
    '        </div>\n' +
    '        <div class="cookie_message_height"></div>\n' +
    '    </div>\n' +
    '</footer>'
$('#menu').html(myMenu)
$('body').append(myFolat)
slideTo(window.location.hash);
window.addEventListener('hashchange', function () {
    slideTo(window.location.hash);
});
$(function () {
    $("#hamburger").click(function () {
        $("#menu").toggleClass("display");
    });
    $("#navSoftware").click(function () {
        $("#login_menu").removeClass("display");
        $("#software_menu").toggleClass("display");
    });
    $("#navLogin").click(function () {
        $("#software_menu").removeClass("display");
        $("#login_menu").toggleClass("display");
    });
    $("#closeBanner").click(function () {
        $(this).parent().fadeOut();
        var d = new Date();
        d.setTime(d.getTime() + 3600 * 1000 * 24 * 7);
        var expires = "expires=" + d.toUTCString();
        document.cookie = "msbx=1;" + expires + ";path=/";
    });
    $(".registration_banner span:not('.close')").click(function () {
        var d = new Date();
        d.setTime(d.getTime() + 3600 * 1000 * 24 * 7);
        var expires = "expires=" + d.toUTCString();
        document.cookie = "msbx=1;" + expires + ";path=/";
        if (typeof bannerAddOn == 'undefined') {
            window.location = '/my.minerstat.com/register';
        } else {
            window.location = '/my.minerstat.com/register' + bannerAddOn;
        }
    });
    $(".report_button").click(function () {
        $('.report_popup').toggleClass('display');
    });
    $(".close_report").click(function () {
        $('.report_popup').removeClass('display');
    });
});

function closeCookie() {
    $('.cookie_message').hide();
    var d = new Date();
    d.setTime(d.getTime() + 3600 * 1000 * 24 * 365);
    var expires = "expires=" + d.toUTCString();
    document.cookie = "mscookies=1;" + expires + ";path=/";
}

function slideTo(identifier) {
    if (identifier.indexOf('#') >= 0) {
        var offsetVal = $(identifier).offset();
        if (typeof offsetVal != 'undefined') {
            var scrollTo = offsetVal.top - 170;
            window.scrollTo(0, 0);
            setTimeout(function () {
                $('html, body').animate({scrollTop: scrollTo}, 800);
            }, 200);
        }
    }
}

$(document).mouseup(function (e) {
    var software_menu = $("#software_menu");
    var software_menuParent = $("#navSoftware");
    if (!software_menu.is(e.target) && software_menu.has(e.target).length === 0 && !software_menuParent.is(e.target)) {
        software_menu.removeClass("display");
    }
});
$(document).mouseup(function (e) {
    if (!$(".report_popup").is(e.target) && !$(e.target).parent().is(".report_popup") && !$(".report_button").is(e.target)) {
        $('.report_popup').removeClass('display');
    }
});

function sendReport() {
    var url = document.location.href;
    var reportText = $('#reportText').val();
    $('.report_popup .red2, .report_popup .red1, .report_popup .green').hide();
    if (reportText.trim() == '') {
        $('.report_popup .red2').show();
        return false;
    }
    $.post('/send-report', {"reportText": url + '\n\n' + reportText}, function (data) {
        if (data == '1') {
            $('.report_popup .green').show();
        } else {
            $('.report_popup .red1').show();
        }
    });
}
setLinkClass()
function setLinkClass(){
  if(winHref=='/'||winHref=='/index'){
      $('#Home').addClass('selected')
  }else if(winHref=='/site-os'||winHref=='/dj-os'||winHref=='/software'||winHref=='/download'){
      $('#navSoftware').addClass('selected')
  }else if(winHref=='/FAQ'){
      $('#FAQ').addClass('selected')
  }else if(winHref=='/help'){
      $('#HELP').addClass('selected')
  }else if(winHref=='/Contact'){
      $('#CUs').addClass('selected')
  }
}

function downZip(type) {
    if(type==1){
        window.open('https://dx.dxdx.me/r/client.zip')
    }else {
        window.open('https://dx.dxdx.me/r/NBCLaunch.exe')
    }
}
getHtmlLang()