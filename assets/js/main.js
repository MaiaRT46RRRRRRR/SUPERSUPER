function saludo (){
  var name = prompt("¿Quién es usted?");
}

// MONSTRANDO  SPRINTS
   //Por defecto sale  el Sprint 2 
var mostarOcultar = function(see) {
	var text1 = document.getElementById('sprint_1');
	var text2 = document.getElementById('sprint_2');
	var text3 = document.getElementById('sprint_3');
	
	if (see =='text1' ) {
		text1.style.display = "block";
		text2.style.display = "none";
		text3.style.display = "none";
	} else if(see =='text2'){
		text1.style.display = "none";
		text2.style.display = "block";
		text3.style.display = "none";
	} else if (see =='text3'){
		text1.style.display = "none";
		text2.style.display = "none";
		text3.style.display = "block";
	}
}


//PUNTAJE POR SPRINT 1
var Rquiz_1 = document.getElementById('Rquiz_1');
var RS1     = document.getElementById('RS1') ;
var quiz1   = document.getElementsByClassName('quiz1');

RS1.onclick = function(){

  vali(quiz1, Rquiz_1);

}

//PUNTAJE POR SPRINT 2
var Rquiz_2 = document.getElementById('Rquiz_2');
var RS2     = document.getElementById('RS2') ;
var quiz2   = document.getElementsByClassName('quiz2');

RS2.onclick = function(){

 vali(quiz2, Rquiz_2);

}


//Function para validar

function vali (elem1, elem2){
var question= 0 ;
    for(var i =0;i<9;i++){
		if(elem1[i].checked==true){
			question++
		}
    }
  
    if(question==3){
		var correct = 0;
		if(elem1[1].checked){
			correct++
		}
		else if(elem1[3].checked){
			correct++
		}
		else if(elem1[7].checked){
			correct++
		}
		elem2.innerHTML ="<p class='resultado-quiz'> Tienes " + correct + " correctas";
	}
	else{
		alert("Todas las preguntas son obligatorias");
	}
}
 /*
var x = 10;
var y = 8;
 
if (x>y)
  document.write("El mayor de los dos números es " + x);
else
  document.write("El mayor de los dos números es " + y);

mayor = (x>y)?x:y;
document.write("El mayor de los dos números es " + mayor);

*/