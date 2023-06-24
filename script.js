var lists = []
 
function addList(){
	var list = document.getElementById('list');
	var val = list.value;
	if(val == ""){
		alert("Please enter something first!");
	}else{
		lists.push(val.trim());
		list.value = '';
		displayList();
	}
 
}
 
function displayList(){
	var data = '';
	if(lists.length > 0){
		for(var i=0; i < lists.length; i++){
			data += "<li class='list-group-item'>"+lists[i]+"<button class='pull-right' onclick='removeList("+i+")'><span class='icon'>🗑️</span></button></li>";
		}
	}
 
	document.getElementById('result').innerHTML = data;
}
 
 
 
 
function removeList(list){
	lists.splice(list, 1);
	displayList();
}