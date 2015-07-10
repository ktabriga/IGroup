Rotas.$inject = ["$stateProvider", "$urlRouterProvider"];

export function Rotas($stateProvider, $urlRouterProvider) {

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

  $urlRouterProvider.otherwise('/calendario');

}