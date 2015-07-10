import {controller as fotosCtrl} from "./fotos.controller";

export var modulo = "fotos";

angular.module(modulo, [])
  .controller("fotosCtrl", fotosCtrl);