<div>
  Años faltantes para cumplir 100
  <input type='text' id='ageInput'/>
  <input type='button' id='ageButton' value='calcular'/>
  <div id='ageOutput'></div>
</div>

window.addEventListener('load', function(){
	var button = document.getElementById('ageButton');
	button.addEventListener('click', function(){
		var ageInputElement = document.getElementById('ageInput');
		var ageOutputElement = document.getElementById('ageOutput');
		var age = parseInt(ageInputElement.value,10);
		var resultado = '';
		if(isNaN(age)){
		  resultado = 'Por favor, introduce un número';
		}else{
		  resultado = ((100 - age) + 'años antes de cumplir 100');
		}
		ageInputElement.value = '';
		ageOutputElement.innerHTML = resultado;
	}, false);
}, false);