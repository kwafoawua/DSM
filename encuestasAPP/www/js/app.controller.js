angular.module('encuestasApp')
.controller('AppCtrl', function ($scope, encuestasSvc){
	//Inicializar la lista de encuestas
	function cargarEncuestas() {
		return encuestasSvc.getEncuestas()
		.then(function (encuestas){
			$scope.encuestas = encuestas;
		});
	}
	//Permite recargar la lista de encuestas (ej: utilizando ion-refresher)
	$scope.cargarEncuestas = cargarEncuestas;
	cargarEncuestas();
});