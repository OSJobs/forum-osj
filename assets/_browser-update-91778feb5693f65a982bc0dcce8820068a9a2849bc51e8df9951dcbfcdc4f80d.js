//browser-update.org notification script, <browser-update.org>
//Copyright (c) 2007-2009, MIT Style License <browser-update.org/LICENSE.txt>

(function() {

var $buo = function() {
  // Sometimes we have to resort to parsing the user agent string. :(
  if (navigator && navigator.userAgent) {
    var ua = navigator.userAgent;

    // we don't ask Googlebot to update their browser
    if (ua.indexOf('Googlebot') >= 0 || ua.indexOf('Mediapartners') >= 0 || ua.indexOf('AdsBot') >= 0) {
      return;
    }
  }

  if (!window.unsupportedBrowser) {
    return;
  }

  var mainElement = document.getElementById("main");
  var noscriptElements = document.getElementsByTagName("noscript");
  // noscriptElements[0].innerHTML contains encoded HTML
  var innerHTML = noscriptElements[0].childNodes[0].nodeValue;
  mainElement.innerHTML = innerHTML;

  // retrieve localized browser upgrade text
  var t = 'Unfortunately, <a href="https://www.discourse.org/faq/#browser">your browser is too old to work on this site</a>. Please <a href="https://browsehappy.com">upgrade your browser</a>.';

  // create the notification div HTML
  var div = document.createElement("div");
  div.className = "buorg";
  div.innerHTML = "<div>" + t + "</div>";

  // create the notification div stylesheet
  var sheet = document.createElement("style");
  var style = ".buorg {position:absolute; z-index:111111; width:100%; top:0px; left:0px; background:#FDF2AB; text-align:left; font-family: sans-serif; color:#000; font-size: 14px;} .buorg div {padding: 8px;} .buorg a, .buorg a:visited {color:#E25600; text-decoration: underline;}";

  // insert the div and stylesheet into the DOM
  document.body.appendChild(div); // put it last in the DOM so Googlebot doesn't include it in search excerpts
  document.getElementsByTagName("head")[0].appendChild(sheet);
  try {
    sheet.innerText = style;
    sheet.innerHTML = style;
  }
  catch(e) {
    try {
      sheet.styleSheet.cssText = style;
    }
    catch(ex) {
      return;
    }
  }

  // shift the body down to make room for our notification div
  document.body.style.marginTop = (div.clientHeight) + "px";

};

$bu=$buo();

})(this);