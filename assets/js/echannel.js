var REX_EMAIL = new RegExp(/^[_\.0-9a-z-]+@([0-9a-z][0-9a-z-]+\.)+[a-z]{2,6}$/);
var REX_URL = new RegExp("^(https?|ftp|file)://.+$");
var INVITE_LIMIT = 3;
$(function () {
  $("[rel='tooltip']").tooltip();
});
function show_error_message(a) {
  $("html, body").animate({ scrollTop: 0 }, 600);
  $("#notifyMsg")
    .html(
      '<div class="alert alert-block alert-danger"><i class="icon-remove"></i></button><strong>&nbsp;' +
        a +
        "</strong></div>"
    )
    .show()
    .delay(10000)
    .fadeOut(400);
}
function show_popup_error(a) {
  $("html, body").animate({ scrollTop: 0 }, 600);
  $(".notifyPPMsg")
    .html(
      '<div class="alert alert-block alert-danger"><i class="icon-remove"></i></button><strong>&nbsp;' +
        a +
        "</strong></div>"
    )
    .show()
    .delay(10000)
    .fadeOut(400);
}
function show_success_message(a) {
  $("html, body").animate({ scrollTop: 0 }, 600);
  $("#notifyMsg")
    .html(
      '<div class="alert alert-block alert-success"><i class="icon-ok green"></i></button><strong>&nbsp;' +
        a +
        "</strong></div>"
    )
    .show()
    .delay(10000)
    .fadeOut(400);
}
(function (d, g) {
  var f = d.jQuery || d.Cowboy || (d.Cowboy = {}),
    e;
  f.throttle = e = function (m, l, a, b) {
    var c,
      n = 0;
    if (typeof l !== "boolean") {
      b = a;
      a = l;
      l = g;
    }
    function k() {
      var p = this,
        h = +new Date() - n,
        q = arguments;
      function i() {
        n = +new Date();
        a.apply(p, q);
      }
      function j() {
        c = g;
      }
      if (b && !c) {
        i();
      }
      c && clearTimeout(c);
      if (b === g && h > m) {
        i();
      } else {
        if (l !== true) {
          c = setTimeout(b ? j : i, b === g ? m - h : m);
        }
      }
    }
    if (f.guid) {
      k.guid = a.guid = a.guid || f.guid++;
    }
    return k;
  };
  f.debounce = function (c, b, a) {
    return a === g ? e(c, b, false) : e(c, a, b !== false);
  };
})(this);

function redirectTo(to) {
  window.location.href = to;
}
function openNewWin(url) {
  window.open(url, "_blank");
}
