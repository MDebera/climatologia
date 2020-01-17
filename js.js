<script>
	var clima = document.querySelector('#despliegue');
	function funcionTraedora() {
			fetch('http://api.openweathermap.org/data/2.5/weather?q=Barcelona&APPID=8235b38f0294ec7d0552cf248ab26e15')
			.then( data => data.text() ) // pasa lo retrieved a texto legibe por JScript
			.then(despliegue.innerHTML = `${data}`)
		}
</script>