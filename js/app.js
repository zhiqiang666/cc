$(document).ready(function () {
  //加入时钟数字元素
  var list =
    "<li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>";
  var ool = "<ol>" + list + "</ol>";
  $(".spot").after(ool);
  //显示日期
  var date = "<div class='date'></div>";
  $(".spot").before(date);
  //显示星期
  var week = "<div class='week'></div>";
  $(".date").before(week);
  //显示年度
  var year = "<div class='year'></div>";
  $(".date").before(year);
  //显示时间
  var times = "<div class='times'></div>";
  $(".date").before(times);

  //春节倒计时
  var starttime = new Date("2020/1/24");
  function getTimes() {
    // 获取当前时间
    const now = new Date();

    // 设置目标时间
    const targetTime17 = new Date(now);
    targetTime17.setHours(17, 0, 0, 0); // 设置为今天的17点

    const targetTime22 = new Date(now);
    targetTime22.setHours(22, 0, 0, 0); // 设置为今天的22点

    if (now >= targetTime22) {
      return "小崔崔今日已下班，别忘记打卡呦";
    } else if (now >= targetTime17) {
      // 如果当前时间超过17点但还未到22点
      const timeDiff = targetTime22 - now;
      const hours = Math.floor(timeDiff / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDiff / 1000) % 60);
      return `<p>距离下班还有</p><p style="font-size:40px"> ${hours} 小时 ${minutes} 分钟 ${seconds} 秒</p>`;
    } else {
      // 如果当前时间还未到17点
      const timeDiff = targetTime17 - now;
      const hours = Math.floor(timeDiff / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDiff / 1000) % 60);
      return `<p>距离17点还有</p><p style="font-size:40px"> ${hours} 小时 ${minutes} 分钟 ${seconds} 秒</p>`;
    }
  }
  setInterval(function () {
    $(".time").eq(0).html(`<p>崔崔的下班倒计时</p>`);
    $(".sydate").eq(0).html(getTimes());
  }, 200);

  // 时钟走字方法
  function Todayss() {
    var day = new Date(); //日期
    var Y = day.getFullYear(); //年
    var M = day.getMonth() + 1; //月
    var D = day.getDate(); //日
    var U = day.getUTCDay(); //周
    var H = day.getHours(); //时
    var MIN = day.getMinutes(); //分
    var S = day.getSeconds(); //秒
    var MSs = day.getMilliseconds();
    var MS = MSs.toString().substring(0, 2);
    // 计算指针度数
    var sss = S * 6,
      mmm = MIN * 6 + sss * 0.01,
      hhh = H * 30 + MIN * 0.5;
    var rotss = "rotate(" + sss + "deg)";
    var rotmm = "rotate(" + mmm + "deg)";
    var rothh = "rotate(" + hhh + "deg)";
    $(".HH").css({ transform: rothh });
    $(".MM").css({ transform: rotmm });
    $(".SS").css({ transform: rotss });
    // 小于两位数,保持两位
    if (M < 10) {
      M = "0" + M;
    }
    if (D < 10) {
      D = "0" + D;
    }
    if (H < 10) {
      H = "0" + H;
    }
    if (MIN < 10) {
      MIN = "0" + MIN;
    }
    if (S < 10) {
      S = "0" + S;
    }

    switch (U) {
      case 0:
        U = "星期日";
        break;
      case 1:
        U = "星期一";
        break;
      case 2:
        U = "星期二";
        break;
      case 3:
        U = "星期三";
        break;
      case 4:
        U = "星期四";
        break;
      case 5:
        U = "星期五";
        break;
      case 6:
        U = "星期六";
        break;
    }

    //星期赋值
    var week = U;
    $(".week").html(week);

    //年份赋值
    var year = Y;
    $(".year").html(year);

    //日期赋值
    var date =
      "<span>" + M + "</span>" + "月" + "<span>" + D + "</span>" + "日";
    $(".date").html(date);

    //时间赋值
    var times =
      "<span>" +
      H +
      "</span>" +
      ":" +
      "" +
      "<span>" +
      MIN +
      "</span>" +
      ":" +
      "" +
      "<span>" +
      S +
      "</span>" +
      ":" +
      "" +
      "<span>" +
      MS +
      "</span>";
    $(".times").html(times);
  }
  // Todayss();
  setInterval(Todayss, 10);

  // 发送弹幕
  $(".message").click(function () {
    $(".key").addClass("keys");
    $(".key").removeClass("remove");
  });

  function Closs() {
    $(".key").removeClass("keys");
    $(".key").addClass("remove");
    setTimeout(function () {
      $(".key").removeClass("remove");
    }, 1000);
  }

  $(".iocnBox").click(function () {
    Closs();
  });
  $(".today").click(function () {
    var ksyss = $(".key").hasClass("keys");
    if (ksyss == true) {
      Closs();
    }
  });

  var mess =
    "<span>欢迎小崔崔进来！！查看下班时间</span><span class='B-span2'>祝你快乐每一天呦</span><span>爱你的强哥</span>";
  $(".Barrage").append(mess);

  $(".buts").click(function () {
    var mes = $(".van-field__control").val();
    if (!mes) {
      // alert("你还没输入内容呢!")
      var Tipss = "<div class='Tipss'>主子，您还没输入内容呢</div>";
      $("body").append(Tipss);
      setTimeout(function () {
        $(".Tipss").remove();
      }, 1500);
    } else {
      //生成随机数: x上限，y下限
      var x = 10;
      var y = 0;

      var col = [
        "#3fd316",
        "#0dd2ef",
        "#ff0000",
        "#3fd316",
        "#0dd2ef",
        "#ffffff",
        "#3fd316",
        "#0dd2ef",
        "#ff0000",
        "#3fd316"
      ];
      // 随机颜色
      var colors = parseInt(Math.random() * (x - y + 1) + y);
      // 随机高度
      var rand = parseInt(Math.random() * (x - y + 1) + y) * 15;
      // 随机速度
      var sudu = parseInt(Math.random() * (x - y + 1) + y) * 3;
      // 设置最低速度，禁止为0
      if (sudu < 1) {
        sudu = 10;
      }
      var dasdass = " animation: Barrag " + sudu + "s linear infinite;";
      var dasdass2 =
        " -webkit-animation: Barrag " + sudu + "s linear infinite;";
      var colorss = "color:" + col[colors] + ";";
      var spans =
        "<span" +
        " style='top:" +
        rand +
        "px;" +
        colorss +
        dasdass +
        dasdass2 +
        "'>" +
        mes +
        "</span>";

      $(".Barrage").append(spans);

      var Tips = "<div class='Tips'>发送成功</div>";
      $("body").append(Tips);
      setTimeout(function () {
        $(".Tips").remove();
      }, 1500);
    }
  });
  $(".empty").click(function () {
    $(".van-field__control").val("");
    $(".empty").css("opacity", "0");
  });
  $(".van-field__control").bind("input propertychange", function () {
    var vals = $(".van-field__control").val();
    if (vals == "") {
      $(".empty").css("opacity", "0");
    } else {
      $(".empty").css("opacity", "1");
    }
  });

  //微信朋友圈分享
  var this_url = window.location.href;
  $.get(
    "https://testzhst.shuhaisc.com/saasowp/weChat/signature",
    {
      url: this_url
    },
    function (data, status) {
      if (data != null && data.success) {
        var result = data.data;

        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: result.appid, // 必填，公众号的唯一标识
          timestamp: result.timestamp, // 必填，生成签名的时间戳
          nonceStr: result.nonceStr, // 必填，生成签名的随机串
          signature: result.signature, // 必填，签名
          jsApiList: ["updateAppMessageShareData", "updateTimelineShareData"] // 必填，需要使用的JS接口列表
        });

        wx.ready(function () {
          //需在用户可能点击分享按钮前就先调用

          wx.updateAppMessageShareData({
            title: "Hello, 2020 happy new year", // 分享标题
            desc: "你好, 2020, 新年快乐！ 除夕倒计时, 一大波弹幕正在来袭！！", // 分享描述
            link: "https://www.shuhaisc.com/Clock/", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: "https://www.shuhaisc.com/Clock/images/time.jpg", // 分享图标
            success: function () {
              // alert("分享成功!");
            }
          });

          wx.updateTimelineShareData({
            title: "Hello, 2020 happy new year", // 分享标题
            link: "https://www.shuhaisc.com/Clock/", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: "https://www.shuhaisc.com/Clock/images/time.jpg", // 分享图标
            success: function () {
              // alert("分享成功!");
            }
          });

          // 移动端强制自动播放

          $("#video")[0].play();
        });
      }
    }
  );
});
