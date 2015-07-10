define("Rotas", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Rotas = Rotas;
  Rotas.$inject = ["$stateProvider", "$urlRouterProvider"];

  function Rotas($stateProvider, $urlRouterProvider) {

    $stateProvider.state("menu", {
      url: "",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: "menuCtrl as vm"
    }).state("menu.calendario", {
      url: "/calendario",
      views: {
        content: {
          templateUrl: "templates/calendario.html",
          controller: "calendarioCtrl as vm"
        }
      }
    }).state("menu.fotos", {
      url: "/fotos",
      views: {
        content: {
          templateUrl: "templates/fotos.html",
          controller: "fotosCtrl as vm"
        }
      }
    }).state("menu.sobre", {
      url: "/sobre",
      views: {
        content: {
          templateUrl: "templates/sobre.html"
        }
      }
    });

    $urlRouterProvider.otherwise("/calendario");
  }
});
define("menu.controller", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.controller = controller;

  function controller() {}
});
define("fotos/fotos.controller", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.controller = controller;

  function controller() {}
});
define("fotos/modulo", ["exports", "./fotos.controller"], function (exports, _fotosController) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var modulo = "fotos";

  exports.modulo = modulo;
  angular.module(modulo, []).controller("fotosCtrl", _fotosController.controller);
});
define("calendario/calendario.controller", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.controller = controller;

  function controller(calendarioResource) {
    var vm = this;

    var p = calendarioResource.buscar().then(function (calendario) {
      return vm.calendario = calendario;
    });
  }
});
define("calendario/calendario.resource", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.resource = resource;

  function resource() {
    var calendario = [{
      nome: "agosto/2015",
      eventos: [{
        nome: "Startup Weekend",
        descricao: "Descrição superficial deste evento.",
        imagem: "img/fotoEvento.png",
        dias: "10"
      }, {
        nome: "Festa beneficiente",
        descricao: "Em algum lugar por ai.",
        imagem: "img/fotoEvento.png",
        dias: "11 - 13"
      }]
    }, {
      nome: "setemrbo/2015",
      eventos: [{
        nome: "Startup Weekend",
        descricao: "Descrição superficial deste evento.",
        imagem: "img/fotoEvento.png",
        dias: "10"
      }, {
        nome: "Festa beneficiente",
        descricao: "Em algum lugar por ai.",
        imagem: "img/fotoEvento.png",
        dias: "11 - 13"
      }]
    }];

    return {
      buscar: function buscar() {
        return new Promise(function (resolve) {
          return resolve(calendario);
        });
      }
    };
  }
});
define("calendario/modulo", ["exports", "calendario/calendario.controller", "calendario/calendario.resource"], function (exports, _calendarioCalendarioController, _calendarioCalendarioResource) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var modulo = "calendario";

  exports.modulo = modulo;
  angular.module(modulo, []).controller("calendarioCtrl", _calendarioCalendarioController.controller).factory("calendarioResource", _calendarioCalendarioResource.resource);
});
define("app", ["exports", "menu.controller", "calendario/modulo", "fotos/modulo", "Rotas"], function (exports, _menuController, _calendarioModulo, _fotosModulo, _Rotas) {
  "use strict";

  angular.module("IGroup", ["ionic", _calendarioModulo.modulo, _fotosModulo.modulo]).run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {

      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleLightContent();
      }
    });
  }).controller("menuCtrl", _menuController.controller).config(_Rotas.Rotas);
});
//# sourceMappingURL=all.js.map