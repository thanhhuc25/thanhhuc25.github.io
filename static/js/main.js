$(document).ready(function() {
    detectDevice();
});

$(window).on('resize', function(event) {
    event.preventDefault();
});

$(window).on('load', function() {
    

});

function detectDevice(){
    var md = new MobileDetect(window.navigator.userAgent);
        if (md.mobile()) {
            $('body').addClass('mobile-device');
        }else {
            $('body').removeClass('mobile-device');
        }
}
function IsSafari() {
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    var isPhone = ua.indexOf("iphone") > -1; //&& ua.indexOf("mobile");
    if (navigator.appVersion.indexOf("Mac") != -1) {
        $('body').addClass('fixMac');
        /*if (ua.indexOf('chrome') > -1) {
             
        } else {
           
        }*/
        if (ua.indexOf('safari') != -1) {
            if (ua.indexOf('chrome') > -1) {
                //$('body').addClass('fixsafari');
            } else {
                $('body').addClass('fixsafari');
            }
        }
    }
    if (isAndroid || isPhone) {
        $('body').removeClass('fixMac');
    }

}