$(this).scroll(function() { // ҳ�淢��scroll�¼�ʱ���� 
var bodyTop = 30; 
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
$("#qqonline").css("top", 30 + bodyTop) // ���ò��CSS��ʽ�е�top����, ע��Ҫ��Сд��Ҫ���ϡ���׼�� 
}); 

