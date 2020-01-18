/* TEMPERATURA DE HOY EN K*/
	var fechaHoy = new Date();
	var clima = document.querySelector('#despliegue');
	function funcionTraedora() {
		fetch("http://api.openweathermap.org/data/2.5/weather?q=Barcelona&APPID=8235b38f0294ec7d0552cf248ab26e15")

		.then( res => res.json())
		.then( data => { console.log(data.main['temp_min']) // la temp del dia viene en un value temp_min del objeto MAIN del JSOn, en KELVIN, pasar a C...
			celcius = parseInt((data.main['temp_min'])-273) 
			clima.innerHTML = `Hoy ${fechaHoy.toLocaleDateString('es-AR', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})} hace como ${celcius} grados.`
			} // toLocaleDateString formatea la fecha devuelta definiendo parte a parte (weekday, year...) tal el lenguaje predefinido (es-Ar)
				)

				}

//	VERSION 1 no esta mal pero delvlia un text, no un objeto. utli si el contenido fetcheado no está codificado a lo JSON, si no como HTML o algo.
//		<script>
//			var clima = document.querySelector('#despliegue');
//			function funcionTraedora() {
//					fetch("http://api.openweathermap.org/data/2.5/weather?q=Barcelona&APPID=8235b38f0294ec7d0552cf248ab26e15")
//					.then( data => data.text())
//						//asi, devuelve no un obj de subValores accesibles is no un STRING
//					.then( data => {clima.innerHTML = `Hoy tenemo ${data.substr(8,20)}`} )
//					//(32 °F − 32) × 5/9 = 0 °C
//				}
//		</script>



//TEMPERATURA DE MAÑANA EN K REQUIERE DEVELOPER ACCOUNT*/

//	var climaNext = document.querySelector('#despliegueNext');
//	function funcionTraedora() {
//		fetch("http://api.openweathermap.org/data/2.5/weather?q=Barcelona&APPID=8235b38f0294ec7d0552cf248ab26e15") */
//
//		.then( res => res.json()) 
//		.then( data => { console.log(data.main['temp_min']) // la temp del dia viene en un value temp_min del objeto MAIN del JSOn, en KELVIN, pasar a C...
//			celcius = parseInt((data.main['temp_min'])-273) 
//			clima.innerHTML = `Hoy ${fechaHoy.toLocaleDateString('es-AR', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})} hace como ${celcius} grados.`
//			} // toLocaleDateString formatea la fecha devuelta definiendo parte a parte (weekday, year...) tal el lenguaje predefinido (es-Ar)
