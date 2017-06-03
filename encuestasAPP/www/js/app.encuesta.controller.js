angular.module("encuestasApp")
	.controller("EncuestaController", function($scope, $state, $stateParams, $ionicLoading, encuestasSvc)
{
	$scope.titulo = "Encuesta";
	//Cargar la encuesta
	if ($stateParams.id) {
		showIonicLoading()
		.then(obtenerEncuesta)
		.then(inicializarOpciones)
		.then(function(_encuesta) {
			$scope.encuesta = _encuesta;
			$scope.titulo = _encuesta.nombre;
		})
		.then($ionicLoading.hide)
		.catch($ionicLoading.hide);
	}
	$scope.submitEncuesta = function() {
	//obtiene la lista de respuestas seleccionadas por el usuario
		return encuestasSvc.responder($scope.encuesta.id, calcularRespuestas())
		.then(function mostrarResultados() {
		$state.go('app.resultados', { id: $scope.encuesta.id });
		});
	};
	//...
});