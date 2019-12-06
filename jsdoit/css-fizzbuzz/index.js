// forked from ginpei's "FizzBuzz問題をJavaScriptで" http://jsdo.it/ginpei/mljv

// 出力はjsで
var li = [];
for(var i = 0; i < 100; i++){
    li.push("<li></li>");
}
document.getElementById("fuzzbizz-list").innerHTML = li.join("");
