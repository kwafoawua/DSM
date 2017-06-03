angular.module('encuestasApp')
.service('encuestasSvc', function ($q) {
	var mockData = [
      {
        id: "123456789",
        nombre: "Encuesta 1",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum convallis diam, vitae facilisis nisi sollicitudin scelerisque. In convallis laoreet felis, at hendrerit massa pellentesque gravida.",
        preguntas: [
          {
            id: "pregunta001_001",
            tipo: "respuesta_multiple",
            descripcion: "Suspendisse eros augue, ullamcorper in iaculis vitae, eleifend elementum leo.",
            opciones: [ "Opción 1", "Opción 2", "Opción 3", "Opción 4", "Opción 5" ],
            resultados: [
              { "Opción 1" : 3 }, { "Opción 2": 6 }, { "Opción 3" : 2 },  { "Opción 4" : 11 }, { "Opción 5": 3 }
            ]
          }, {
            id: "pregunta001_002",
            tipo: "respuesta_simple",
            descripcion: "Nunc nibh elit, ultricies dictum tristique sed, auctor et tellus.",
            opciones: [ "Opción A", "Opción B", "Opción C"],
            resultados: [
              {  "Opción A" : 12 }, { "Opción B": 4 }, { "Opción C" : 7 }
            ]
          }
        ]
      }, {
          id: "123456790",
          nombre: "Encuesta 2",
          descripcion: "Mauris at ullamcorper risus, sed blandit eros. Morbi a nisl congue velit molestie condimentum vitae sed ex. Aliquam tristique, est et posuere fermentum, justo ligula rutrum sapien, tincidunt vehicula arcu purus quis ante.",
          preguntas: [
            {
              id: "pregunta001_001",
              tipo: "respuesta_simple",
              descripcion: "Cras congue massa a lorem rutrum efficitur.",
              opciones: [ "Opción 1", "Opción 2", "Opción 3", "Opción 4", "Opción 5" ],
              resultados: [
                {  "Opción 1" : 3 }, { "Opción 2": 6 }, { "Opción 3" : 2 },  { "Opción 4" : 11 }, { "Opción 5": 3 }
              ]
            }
          ]
      }
    ];

    this.getEncuesta = function(id) {
      var encuesta = mockData.find(function (encuesta) {
        return encuesta.id == id;
      });

      return $q.resolve(_.cloneDeep(encuesta));
    };

    this.responder = function (id, respuestas) {
      return $q.resolve();
    };
    this.getEncuestas = function() {
    	return $q.resolve(_.cloneDeep(mockData));
    };
});