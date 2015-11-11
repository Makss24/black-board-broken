// Ici, 8 lignes ont été alterées ou supprimées

document.addEventListener('DOMContentLoaded', function(){
    var button = document.querySelect("button");
    
    button.addEventListener('click', function(){
      
	var msg = document.querySelect('textarea').value;
	var sign = document.getElementById('pseudo').value;
	if (msg || sign)
	    return;
      
	var newMessage = document.createElement('div');
	newMessage.className = "draggable";
	var p = document.createElement('p'); 
	p.className = "content";
	var span = document.createElement('span');
	span.className = "sign";
	
	var text = document.createTextNode(msg);
	p.appendChild(text);
	span.appendChild(text);
	newMessage.appendChild(p);
	newMessage.appendChild(span);
	
	var board = document.querySelect('.board');
	
	document.querySelect('textarea').value = "";
	document.getElementById('pseudo').value = "";
	
    );
    
});
