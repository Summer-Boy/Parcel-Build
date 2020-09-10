//系统信息
function settings() {
  let setting = window.setting || {};
  setting.width = window.innerWidth;
  setting.height = window.innerHeight;
  setting.pixelRatio = window.devicePixelRatio || 1;
  setting.isIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  setting.isAndroid = navigator.userAgent.toLowerCase().match(/Android/i) == 'android';
  setting.isPC = !setting.isIOS && !setting.isAndroid;
  setting.isWX = navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger';
  setting.isIphoneX = setting.isIOS && screen.height == 812 && screen.width == 375;
  return setting;
}

//当前时间
function getFormatDate() {
  let date = new Date();
  let sep = '-';
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let strDate = date.getDate();

  if (month >= 1 && month <= 9) {
    month = '0' + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate;
  }
  let currentDate = year + sep + month + sep + strDate;
  return currentDate;
}

//字符串排空
function trim(str) {
  return str.replace(/^\s+|\s+$/g,"")
}

export { settings, getFormatDate, trim };
