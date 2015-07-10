import {controller as menuCtrl} from "menu.controller";
import {modulo as calendario} from "calendario/modulo";
import {modulo as fotos} from "fotos/modulo";
import {Rotas} from "Rotas";

angular.module('IGroup', ['ionic', calendario, fotos])
  .run($ionicPlatform => {
    $ionicPlatform.ready(function() {
     
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleLightContent();
      }
    });

  })
  .controller("menuCtrl", menuCtrl)
  .config(Rotas);
