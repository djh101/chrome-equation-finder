//SEARCH FOR EQUATION AND AUTOFILL
function eqnsearch(text){
	var ajax = new XMLHttpRequest();
	ajax.overrideMimeType("application/json");
	ajax.open('GET','equations.json',true);
	ajax.onreadystatechange = function(){
		if(ajax.readyState === 4 && ajax.status === 200){
			var eqin,eqname;
			var eqns = JSON.parse(ajax.responseText);
			for(var i in eqns){
				eqin = eqns[i].name.substring(0,text.length).toLowerCase().replace("-"," ");
				eqname = text.toLowerCase().replace("-"," ");
				if(eqin === eqname){
					var searchbox = document.getElementById('search');
					searchbox.value = eqns[i].name;
					searchbox.setSelectionRange(text.length,eqns[i].name.length);
					break;
				}
			}
		}
	};
	ajax.send(null);
	
	return false;
}

//DISPLAY EQUATION
function display(name){
	var ajax = new XMLHttpRequest();
	ajax.overrideMimeType("application/json");
	ajax.open('GET','equations.json',true);
	ajax.onreadystatechange = function(){
		if(ajax.readyState === 4 && ajax.status === 200){
			eqns = JSON.parse(ajax.responseText);
			for(var i in eqns){
				if(eqns[i].name.toLowerCase() === name.toLowerCase()){
					document.getElementById('name').innerHTML = name;
					document.getElementById('latex').innerHTML = "$$"+eqns[i].latex.join("$$ $$")+"$$";
					
					document.getElementById('input').className = "hidden";
					document.getElementById('output').className = "visible";
					document.getElementById('latex').className = "invisible";
					
					MathJax.Hub.Queue(["Typeset",MathJax.Hub,"latex"]);
					MathJax.Hub.Queue(function(){
						document.getElementById('latex').className = "visible";
					});
					
					break;
				}
			}
		}
	};
	ajax.send(null);
	
	return false;
}

//SEARCH EQUATION AND UPDATE SEARCH BOX
document.getElementById('search').addEventListener('input',function(e){
	var snew = document.getElementById('search');
	var sold = document.getElementById('search0');
	var lcheck =snew.value.length > sold.value.length; 
	
	sold.value = document.getElementById('search').value;
	
	if(lcheck){ //BACKSPACE/DELETE FIX (NEW INPUT MUST BE LONGER THAN OLD INPUT)
		eqnsearch(snew.value);
	}
});

//SUBMIT SEARCH INPUT AND DISPLAY EQUATION
document.getElementById('searchform').addEventListener('submit',function(e){
	display(document.getElementById('search').value);
	document.getElementById('display').value = "true";
	e.preventDefault();
});

//RETURN TO INPUT FORM ON ESCAPE
document.addEventListener('keypress',function(e){
	if(document.getElementById('display').value === "true"){
		document.getElementById('display').value = "false";
		document.getElementById('search').value = "";
		document.getElementById('search0').value = "";
		document.getElementById('input').className = "visible";
		document.getElementById('output').className = "hidden";
		document.getElementById('latex').className = "invisible";
		document.getElementById('search').focus();
	}
});
