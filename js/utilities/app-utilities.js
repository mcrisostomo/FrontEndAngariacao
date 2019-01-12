var appUtilities = {};

appUtilities = {
	showLoading: function (){
            // var loading = document.querySelector('#loading');				
            // loading.style.display = "block";		
            $('.loading').attr('style', 'display: block');
	},
	hideLoading: function ()	{
            // var loading = document.querySelector('#loading');				
            // loading.style.display = "none";
             $('.loading').attr('style', 'display: none');
	},
      parseDate : function(indata){    
                  if(indata)  
                  {
                        var parts = indata.split("/");
                        var dt = new Date(parseInt(parts[2], 10),
                                          parseInt(parts[1], 10) - 1,
                                          parseInt(parts[0], 10));
                  
                        return dt;
                  }         
                  return null;   
                  
      },
      parseDateAPI : function(indata){    
                  if(indata)  
                  {
                        var parts = indata.split("/");
                        var dt = new Date(parseInt(parts[2], 10),
                                          parseInt(parts[1], 10) - 1,
                                          parseInt(parts[0], 10));
                                          
                        var dd = dt.getDate();
                        var mm = dt.getMonth()+1; //January is 0!
                        var yyyy = dt.getFullYear();
                        return yyyy+'-'+mm+'-'+dd;
                        
                  }         
                  return null;   
                  
      },
       getMonthnumber : function(monthname){    
                  if(monthname != null && monthname != "")  
                  {
                        switch (monthname)
                        {
                              case "janeiro":
                                    return 1;
                                    break;
                              case "fevereiro":
                                    return 2;
                                    break;
                              case "março":
                                    return 3;
                                    break;
                              case "abril":
                                    return 4;
                                    break;
                              case "maio":
                                    return 5;
                                    break;
                              case "junho":
                                    return 6;
                                    break;
                              case "julho":
                                    return 8;
                                    break;
                              case "agosto":
                                    return 8;
                                    break;
                              case "setembro":
                                    return 9;
                                    break;
                              case "outubro":
                                    return 10;
                                    break;
                              case "novembro":
                                    return 11;
                                    break;
                              case "dezembro":
                                    return 12;
                                    break;
                        }
                        
                  }         
                  return null;   
                  
      },
      showStatus: function (response, status, typeobject){
            var httpStatus = {
                  ok : {code: 200, status:"200", msg: "Com Sucesso", class:"alert alert-success col-md-12"},
                  created: {code: 201, status:"201" , msg: "Criado Com Sucesso", class:"alert alert-success col-md-12"},
                  noContent: {code: 204, status:"204" , msg: "Não encontrado", class:"alert alert-danger col-md-12"},
                  badRequest: {code: 400, status:"400" , msg: "Erro", class:"alert alert-danger col-md-12"},
                  unauthorized: {code: 401, status:"401" , msg: "Inválido", class:"alert alert-danger col-md-12"},
                  notFound: {code: 404, status:"404" , msg: "Não Encontrado", class:"alert alert-danger col-md-12"},
                  internalServerError: {code: 500, status:"500" , msg: "Erro", class:"alert alert-danger col-md-12"},
                  badGateway: {code: 502, status:"502" , msg: "Erro", class:"alert alert-danger col-md-12"},
                  get: function(code) {
                       var objstatus = null;
                       switch(code) {
                        case 200:
                              objstatus = httpStatus.ok;
                              break;
                        case 201:
                              objstatus = httpStatus.created;
                              break;
                        case 204:
                              objstatus = httpStatus.noContent;
                              break;
                        case 400:
                              objstatus = httpStatus.badRequest;
                              break;
                        case 401:
                              objstatus = httpStatus.unauthorized;
                              break;
                        case 404:
                              objstatus = httpStatus.notFound;
                              break;
                        case 500:
                              objstatus = httpStatus.internalServerError;
                              break;
                        case 502:
                              objstatus = httpStatus.badGateway;
                              break;
                        }         
                        //console.log(code);
                        return objstatus;
                  },
            }

            var result =  httpStatus.get(response.status);
            
            if(result != null){
                   var lblstatus = document.querySelector('#lblstatus');	
                  lblstatus.innerText = response.status == 400 ?  "* " + response.data.Message :  "* " + typeobject + result.msg;
		      lblstatus.className = result.class;
                  // lblstatus.focus();
            }
            else{
                  console.log(response.data);
            }

            //vai para topo da pagina.
		$("html, body").animate({ scrollTop: 0 }, "slow");
	},
      showStatus2: function (response, status, typeobject){
              var lblstatus = document.querySelector('#lblstatus');	
              lblstatus.innerText = "* " + typeobject;
		  lblstatus.className = "alert alert-warning col-md-12";
              //lblstatus.focus();

              //vai para topo da pagina.
		$("html, body").animate({ scrollTop: 0 }, "slow");
      },
      showStatusClean: function (){
              var lblstatus = document.querySelector('#lblstatus');	
              lblstatus.innerText = "" ;
		  lblstatus.className = "";
      },
      showStatusSuccess: function (msg){
              var lblstatus = document.querySelector('#lblstatus');
              lblstatus.className = "alert alert-success col-md-12";
              lblstatus.innerText = msg ;	

              //vai para topo da pagina.
		  $("html, body").animate({ scrollTop: 0 }, "slow");	  
      },
     
       ExporTxt : function(filename, rows) {
             var processRow = function (row) {
                  var finalVal = '';
                  for (var j = 0; j < row.length; j++) {
                  var innerValue = row[j] === null ? '' : row[j].toString();
                  if (row[j] instanceof Date) {
                        innerValue = row[j].toLocaleString();
                  };
                  var result = innerValue.replace(/"/g, '""');
                  if (result.search(/("|,|\n)/g) >= 0)
                        result = '"' + result + '"';
                  if (j > 0)
                        finalVal += ',';
                  finalVal += result;
                  }
                  return finalVal + '\n';
            };

            var txtFile = '';
            for (var i = 0; i < rows.length; i++) {
                  txtFile += processRow(rows[i]);
            }

            var blob = new Blob([txtFile], { type: 'text/txt;charset=utf-8;' });
            if (navigator.msSaveBlob) { // IE 10+
                  navigator.msSaveBlob(blob, filename);
            } else {
                  var link = document.createElement("a");
                  if (link.download !== undefined) { // feature detection
                  // Browsers that support HTML5 download attribute
                  var url = URL.createObjectURL(blob);
                  link.setAttribute("href", url);
                  link.setAttribute("download", filename);
                  link.style.visibility = 'hidden';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  }
            }
       },
       ExporExcel : function(base64) {
  
            if (navigator.msSaveBlob) { // IE 10+
                  navigator.msSaveBlob(base64, filename);
            } else {
                  var link = document.createElement("a");
                  if (link.download !== undefined) { // feature detection
                  // Browsers that support HTML5 download attribute
                  var url = URL.createObjectURL("data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,",base64);
                  link.setAttribute("href", url);
                  link.setAttribute("download", filename);
                  link.style.visibility = 'hidden';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  }
            }
       },
       PadLeft : function(str, length) {  
            const resto = length - String(str).length;
            return '0'.repeat(resto > 0 ? resto : '0') + str;
       },

};

// var response = {status: "401"};
// var status = "";
// appUtilities.showStatus(response, status, "Usuário ");

