
var date_obj = new Date();

// 日付
var d_element = document.getElementById("day");
var data_text = document.createElement("h1");
var year = date_obj.getFullYear();
var month = date_obj.getMonth() + 1;
var date = date_obj.getDate();
var day = date_obj.getDay();
day = ConversionDay(day);
data_text.textContent = day + ' ' + month + '/' + date + '/' + year + '';
d_element.appendChild(data_text);

// 時間
var t_element = document.getElementById("time");
var time_text = document.createElement("h1");
var hours = date_obj.getHours();
var min = date_obj.getMinutes();
if (min < 10) { min = '0' + min; }
var second = date_obj.getSeconds();
if (second < 10) { second = '0' + second; }
time_text.textContent = hours + ':' + min + ':' + second + '';
t_element.appendChild(time_text);

setInterval(function () {
  date_obj = new Date();
  var hours = date_obj.getHours();
  var min = date_obj.getMinutes();
  if (min < 10) { min = '0' + min; }
  var second = date_obj.getSeconds();
  if (second < 10) { second = '0' + second; }
  time_text.textContent = hours + ':' + min + ':' + second + '';
  t_element.appendChild(time_text);
}, 1000);

// 数値を曜日に変換する
function ConversionDay(day) {
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  day = days[day];
  return day;
}