function getJSON(url,callback){
	var xhr = new XMLHttpRequest();
		xhr.open('get',url);
		xhr.send();
	xhr.onreadystatechange=function(){
		if(xhr.readyState ==4 && xhr.status ==200){
			var data = xhr.responseText;
			data = JSON.parse(data);
			callback(data);
		}
	}
}