export function controller(calendarioResource) {
  var vm = this;

  var p = calendarioResource.buscar()
    .then(calendario => vm.calendario = calendario);

}