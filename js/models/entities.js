'use strict';
/**************************************************************************************************/
/**************************************************************************************************/
/*   TIPOS/ENUMS   */
var tipoData = {
	ano: {name: 'year', value:'y'},
	mes: {name: 'month', value: 'm'},
	dia: {name: 'day', value: 'd'},
	hora: {name: 'hour', value:'h'},
	minuto:{name: 'minute', value: 'n'},
	segundo: {name: 'second', value:'s'},
};

var httpStatus = {
	ok : {code: 200, status:"200"},
	created: {code: 201, status:"201"},
	noContent: {code: 204, status:"204"},
	badRequest: {code: 400, status:"400"},
	unauthorized: {code: 401, status:"401"},
	notFound: {code: 404, status:"404"},
	internalServerError: {code: 500, status:"500"},
	badGateway: {code: 502, status:"502"},
};

var userTypeModel = { 	
	admin: {value:1, name: "admin"}, 	
    corretor: {value:2, name: "corretor"},    
};

var beneficiarioTypeModel = [{name: 'Filho(a)', value:'Filho(a)'}, {name: 'Esposo(a)', value: 'Esposo(a)'},{name: 'Pai', value: 'Pai'},{name: 'Mãe', value: 'Mãe'}];



var simnaoModel = [{name: 'Sim', value:'1'}, {name: 'Não', value: '0'}];

var sexoTipo = [{name: 'Masculino', value:'M'}, {name: 'Feminino', value: 'F'}];

var mesesModel = [{value:'1', text: 'Janeiro'},{value:'2', text: 'Fevereiro'},{value:'3', text: 'Março'},{value:'4', text: 'Abril'},{value:'5', text: 'Maio'},{value:'6', text: 'Junho'},{value:'7', text: 'Julho'},{value:'8', text: 'Agosto'},{value:'9', text: 'Setembro'},{value:'10', text: 'Outubro'},{value:'11', text: 'Novembro'},{value: '12', text:'Dezembro'}];

var meses2Model = [{value:'01', text:'01'},{value:'02', text:'02'},{value:'03', text:'03'},{value:'04', text:'04'},{value:'05', text:'05'},{value:'06', text:'06'},{value:'07', text:'07'},{value:'08', text:'08'},{value:'09', text:'09'},{value:'10', text: '10'},{value:'11', text: '11'},{value: '12', text:'12'}];

var anoModel = [{name: '2017', value:'2017'}, {name: '2018', value: '2019'}, {name: '2020', value: '2020'}, {name: '2021', value: '2021'}];

var estadosModel = [{value: 'AC'},{value: 'AL'},{value: 'AM'},{value: 'AP'},{value: 'BA'},{value: 'CE'},{value: 'DF'},{value: 'ES'},{value: 'GO'},{value: 'MA'},{value: 'MT'},{value: 'MS'},{value: 'MG'},{value: 'PA'},{value: 'PB'},{value: 'PR'},{value: 'PE'},{value: 'PI'},{value: 'RJ'},{value: 'RN'},{value: 'RO'},{value: 'RS'},{value: 'RR'},{value: 'SC'},{value: 'SE'},{value: 'SP'},{value: 'TO'} ];

/**************************************************************************************************/
/**************************************************************************************************/

var beneficiarioModel = {nome:"",tipo:"",porcentagem:0}   

/*  ENTITIES */
var vendaModel = {
        id:0,
        certificado:0,
        certificadoTreated:"",
        idProduto:0,
        idPlano:0,                
        proposta:"",
        dataVenda:null,
        dataVigenciaInicio:null,
        dataVigenciaFim:null,        
        diaDebito:0,
        agencia:"",
        conta:"",
        status:0,
        dataCriacao:null,
        idUsuarioCriador:0,        
        cpf:"",
        nome:"",
        rg:"",
        sexo:"",
        dataNascimento:null,
        email:"",
        telefone1:"",
        telefone2:"",
        cep:"",
        logradouro:"",
        complemento:"",
        bairro:"",
        cidade:"",
        estado:"",      
        pessoaPoliticamenteExposta: 0,  
        dataCriacao:null,
        beneficiarios:[beneficiarioModel],          
        ccmm: "",
        ccaa: "",
        tipopagamento: 0,
        dataUltimaAlteracao:null,
        ativo:false,             
};
   


var produtoModel =   {
        id:0,
        nome:"",
        codigo:"",
		planos: [],
};
    
var planoProdutoModel =  {
        id:0,
        idProduto:0,
        idPlano:0,
        nome:"",
        codigo:"",        
};
    
var usuarioModel =  {
        id:0,
        idTipoUsuario:0,
        dataCriacao:null,
        dataUltimoAcesso:null,
        login:"",
        senha:"",
        nome:"",
        ativo:false,
        email:"",
};

var userTypeModel = {
    id:0,
    descricao:"",
};