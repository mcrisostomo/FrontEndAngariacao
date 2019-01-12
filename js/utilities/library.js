var LIBAPP = {};

LIBAPP.views = {
	modal:{
		element: null,
		create: function(parent){
			this.element = document.createElement('div');
			this.element.className = 'modalCSS';
			parent.appendChild(this.element);
			return this.element;
		},
		show:function(value){
			this.element.style.visibility = value ? 'visible' : 'hidden';
		}
	},
	loader:{
		add: function(container){
			container.classList.add('loader');
		}

	}
};

LIBAPP.functions = {
	arrayObjectIndexOf: function(myArray, searchTerm, property){
		for(var i = 0, len = myArray.length; i < len; i++) {
        	if (myArray[i][property] === searchTerm) return i;	
	    }
	    return -1;
	},
	isAdmin: function(idTipoUsuario){		
		console.log(idTipoUsuario)
		if(idTipoUsuario == 1){
			return true;		
		}
		else {
			return false;		
		}
	},
	isUsuario: function(idTipoUsuario){		
		console.log(idTipoUsuario)
		if(idTipoUsuario == 2){
			return true;		
		}
		else {
			return false;		
		}
	},
	setReadOnly: function(object){
               object.setAttribute('readonly',true);
               object.setAttribute('disabled',true);
    },
    removeReadOnly: function(object){
               object.removeAttribute('readonly');
               object.removeAttribute('disabled');
    },
    clearCPFCNPJ: function(cpfcnpj){
    	return cpfcnpj.replace(/\./g,'').replace(/\-/g,'');
    },
    dateDiff: function(tipoData, dataFrom, dataTo){
    	var datepart = tipoData.toLowerCase();	
		var diff = dataTo - dataFrom;	
		var divideBy = { w:604800000, 
		               d:86400000, 
		               h:3600000, 
		               n:60000, 
		               s:1000 };	

		return Math.floor( diff/divideBy[datepart]);
    }
};


