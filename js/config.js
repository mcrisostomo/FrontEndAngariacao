// JavaScript source code
'use strict';

var URL_HOMOL = 'http://homologacao.datamotion.com.br/PrevisulAngariacao/WebApi/'
var URL_LOCAL = 'http://localhost/AppAngariacao/webapi/'
var URL_PROD = ''

//var APIURL = URL_LOCAL;
var APIURL = URL_HOMOL;

angular.module('appConfig',[]).constant('config',{ 'apiURL': APIURL });