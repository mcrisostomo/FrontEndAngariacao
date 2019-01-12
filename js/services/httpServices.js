angular.module('appServices', ['appConfig'])
.factory('httpService',['$http', '$location', 'config', function ($http, $location, config){

  return {
    getWebServiceData : function(apiController){ return getWebServiceData(apiController)},
    postAuthWebServiceData : function(apiController, objectModel, authHeaderValue){return  postAuthWebServiceData(apiController, objectModel, authHeaderValue)},
    postNewPwWebServiceData : function(apiController, objectModel, authHeaderValue){return  postAuthWebServiceData(apiController, objectModel, authHeaderValue)},
    postWebServiceData : function(apiController, objectModel, authHeaderValue){return  postWebServiceData(apiController, objectModel)},
    postFileWebServiceData : function(apiController, file, authHeaderValue){return  postFileWebServiceData(apiController, file, authHeaderValue)},
    deleteWebServiceData : function(apiController, id, objectModel, queryString) {return deleteWebServiceData(apiController, id,objectModel,queryString)},
    updateWebServiceData : function(apiController, id, objectModel) { return updateWebServiceData(apiController, id, objectModel)}
  }

	function getWebServiceData(apiController, authHeaderValue) {
     appUtilities.showLoading();
	    var fullURL = config.apiURL  + apiController;
      var headers = {};

      var token = sessionStorage.getItem('token');
      headers = {'Content-Type' : 'application/json', 'Token': token};
       
	    return $http({
	        method: 'GET',
	        url: fullURL,
          headers: headers,
	    }).
        success(function(data, status, headers, config){
          appUtilities.hideLoading();
          //console.log(data);
          return data;
        }).
        error(function(data, status, headers, config){
          appUtilities.hideLoading();
         
          //sessão expirou
          if(status == 401){
                alert('sua sessão expirou.');
                $location.path("/");
                return;
            }
        });
    }

    function postAuthWebServiceData(apiController, objectModel, authHeaderValue) {
      appUtilities.showLoading();
      var fullURL = config.apiURL  + apiController;
      var headers = {};

      headers = {'Content-Type' : 'application/json', 'Authorization': 'Basic ' + authHeaderValue};

      return $http({
        method: 'POST',
        headers: headers,
        data: objectModel,
        url: fullURL
      }).
        success(function(data, status, headers, config){
          appUtilities.hideLoading();  
          return data;
        }).
        error(function(data, status, headers, config){
          appUtilities.hideLoading();        
        });      
    }

    function postNewPwWebServiceData(apiController, objectModel, authHeaderValue) {
      appUtilities.showLoading();
      var fullURL = config.apiURL  + apiController;
      var headers = {};

      headers = {'Content-Type' : 'application/json'};

      return $http({
        method: 'POST',
        headers: headers,
        data: objectModel,
        url: fullURL
      }).
        success(function(data, status, headers, config){
          appUtilities.hideLoading();  
          return data;
        }).
        error(function(data, status, headers, config){
          appUtilities.hideLoading();        
        });      
    }

     function postFileWebServiceData(apiController, file, authHeaderValue) {
      appUtilities.showLoading();
      var fullURL = config.apiURL  + apiController;
      var headers = {};

    var token = sessionStorage.getItem('token');
      headers = {'Content-Type' : undefined, 'Token': token};
      
      var fd = new FormData(); 
      fd.append('file', file);

      return $http({
        method: 'POST',
        headers: headers,
        data: fd,
        url: fullURL
      }).
        success(function(data, status, headers, config){
          appUtilities.hideLoading();
          //console.log(data);
          return data;
        }).
        error(function(data, status, headers, config){
          appUtilities.hideLoading();

          //sessão expirou
          if(status == 401){
                alert('sua sessão expirou.');
                $location.path("/");
                return;
            }
        });
      
    }
      
    function postWebServiceData(apiController, objectModel, authHeaderValue) {
      appUtilities.showLoading();
      var fullURL = config.apiURL  + apiController;
      var headers = {};
      
      var token = sessionStorage.getItem('token');
      headers = {'Content-Type' : 'application/json', 'Token': token};

      return $http({
        method: 'POST',
        headers: headers,
        data: objectModel,
        url: fullURL
      }).
        success(function(data, status, headers, config){
          appUtilities.hideLoading();
          //console.log(data);
          return data;
        }).
        error(function(data, status, headers, config){
          appUtilities.hideLoading();

          //sessão expirou
          if(status == 401){
               alert('sua sessão expirou.');
                $location.path("/");
                return;
            }
        });
      
    }

    function deleteWebServiceData(apiController, id, objectModel,queryString) {
      appUtilities.showLoading();      
    
      var fullURL = config.apiURL + apiController + '/' + id;

       if(queryString && queryString != ""){
         fullURL += queryString;
       }

      var headers = {};

      var token = sessionStorage.getItem('token');
      headers = {'Content-Type' : 'application/json', 'Token': token};

      return $http({
        method: 'DELETE',
        headers: headers,	        
        url: fullURL
      }).
        success(function(data, status, headers, config){
          appUtilities.hideLoading();
          //console.log(data);
          return data;
        }).
        error(function(data, status, headers, config){
          appUtilities.hideLoading();

          //sessão expirou
          if(status == 401){
                alert('sua sessão expirou.');
                $location.path("/");
                return;
            }
        });
    }

    function updateWebServiceData(apiController, id, objectModel) {
      appUtilities.showLoading();
      var fullURL = config.apiURL + apiController + '/' + id;    
      var headers = {};

      var token = sessionStorage.getItem('token');
      headers = {'Content-Type' : 'application/json', 'Token': token};

      return $http({
        method: 'PUT',
        headers: headers,	  
        data: objectModel,      
        url: fullURL
      }).
        success(function(data, status, headers, config){
          appUtilities.hideLoading();
          //console.log(data);
          return data;
        }).
        error(function(data, status, headers, config){
          appUtilities.hideLoading();

         //sessão expirou
          if(status == 401){
                alert('sua sessão expirou.');
                $location.path("/");
                return;
            }
        });
    }
}])
// .factory('shareDataService', function(){
//   var user = userModel;
//   return user;
// });