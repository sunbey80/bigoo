$(this).scroll(function() { // 页面发生scroll事件时触发 
var bodyTop = 220; 
if (typeof window.pageYOffset != 'undefined') { 
bodyTop = window.pageYOffset; 
} 
else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') 
{ 
bodyTop = document.documentElement.scrollTop; 
} 
else if (typeof document.body != 'undefined') { 
bodyTop = document.body.scrollTop; 
} 
$("#qqonline").css("top", 220 + bodyTop) // 设置层的CSS样式中的top属性, 注意要是小写，要符合“标准” 
}); 

