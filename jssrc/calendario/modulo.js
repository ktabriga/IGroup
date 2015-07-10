import {controller as calendarioCtrl} from "calendario/calendario.controller";
import {resource as calendarioResource} from "calendario/calendario.resource";

export var modulo = "calendario";

angular.module(modulo, [])
  .controller("calendarioCtrl", calendarioCtrl)
  .factory("calendarioResource", calendarioResource);