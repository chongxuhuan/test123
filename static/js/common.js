/**
 * 
 */

var json = {'suggest':['first','second','third','fouth','fifthss']};

function searchsuggest() {
	
	document.onclick = function() {
		onblurhidden();
	}
	
	
	var div = document.getElementById("suggest");
	div.style.display = 'block';
	//改变的时候去掉以前的内容
	var divul = document.getElementById("divul");
	if(divul != null) {
		div.removeChild(divul);
	}
	/*填充数据开始ʼ*/
	var ul = document.createElement("ul");
	ul.id = "divul";
	var height = 0;
	var items = json.suggest;//得到json数组
	for(var key in items) {
		var li = document.createElement("li");
		li.innerHTML = items[key];
		li.className = "sss";
		li.onmouseover = onMouseOver;
		li.onclick = myOnClick;
		ul.appendChild(li);
		height += 27;
	}
	div.style.height = height + "px";
	/*数据填充结束*/
	
	div.appendChild(ul);
}

function onblurhidden() {
	var div = document.getElementById("suggest");
	div.style.display = 'none';
}

function hiddendiv() {
	var div = document.getElementById("suggest");
	var ul = document.getElementById("divul");
	div.style.display = 'none';
	div.removeChild(ul);
}


function onMouseOver() {
	var lis = document.getElementsByTagName("li");
	for(var i = 0; i < lis.length; i++){
		var li = lis[i];
		if(li.className=="sss"){
			li.style.background = "#ffffff";
		}
	}
	this.style.cursor = 'default';
	this.style.background = "#ccc";
}

function myOnClick() {
	var suggestinput = document.getElementById("suggestinput");
	suggestinput.value = this.innerHTML;
	var div = document.getElementById("suggest");
	div.style.display = 'none';
}

function goCart(o) {
	window.event.srcElement.style.cursor = "hand";
	window.location.href = "mycart.html";
}

function mouseOver(o) {
	window.event.srcElement.style.cursor = "pointer";
	window.event.srcElement.style.textDecoration = "underline";
}

function mouseOut() {
	window.event.srcElement.style.textDecoration = "none";
}

function goFavorite() {	
	window.location.href = "favorite.html";
}

function cancel1() {
	if(confirm("真的要取消吗？")) {
		var status1 = document.getElementById("status1");
		var operator1 = document.getElementById("operator1");
		status1.innerHTML = "Canceled";
		operator1.innerHTML = "<a href='mycart.html'>Shopping</a>";
	}
}

function cancel2() {
	if(confirm("真的要取消吗？")) {
		var status1 = document.getElementById("status2");
		var operator1 = document.getElementById("operator2");
		status1.innerHTML = "Canceled";
		operator1.innerHTML = "<a href='mycart.html'>Shopping</a>";
	}
}



