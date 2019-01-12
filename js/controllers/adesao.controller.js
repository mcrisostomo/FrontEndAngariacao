app.controller('adesao.controller', function ($rootScope, $location) {
    $rootScope.activetab = $location.path();   
    $rootScope.venda = vendaModel;
    $rootScope.SN =  {dados: simnaoModel};
    $rootScope.beneficiarioType =  {dados: beneficiarioTypeModel};    
    $rootScope.mescard =  {dados: meses2Model};   
    $rootScope.anocard =  {dados: anoModel};   
    $rootScope.IsPagDebito = false;
    $rootScope.IsPagCredito = false;

    $rootScope.activetab = $location.path();
    $rootScope.img_portal = 'images/logoSegurado.png';
    $rootScope.class_body = 'internas';
    $rootScope.text_align = 'col-sm-2 text-left logo-internas';
    $rootScope.barra_topo = true;
    $rootScope.header_login = 'show';
    $rootScope.nav_internas = 'col-sm-2 show';
    $rootScope.view_internas = 'col-sm-10';

    $rootScope.img_perfil = 'images/unknow-user.png';
    $rootScope.nome_usuario = 'Nome do Usuário Logado no Sistema';

    $('.loading').attr('style', 'display: none');


    // Datepicker
    $('#txtDataNasc').datepicker({
        format: "dd/mm/yyyy",
        language: "pt-BR"
    });

    // Tipo de Cobrança
    $rootScope.tipo_cobranca = function (tp) {

        if(!tp || tp == 0) {
            $rootScope.IsPagDebito = false;
            $rootScope.IsPagCredito = false;
        }
        else if(tp == 1) {
            $rootScope.IsPagDebito = true;
            $rootScope.IsPagCredito = false;
        }
        else if(tp == 2) {
            $rootScope.IsPagDebito = false;
            $rootScope.IsPagCredito = true;
        }
    }
    
    $rootScope.AddBeneficiario = function()
    {
        var valid = true;
        var qtd = $rootScope.venda.beneficiarios.length ;
        if(qtd >= 5)
        {
            valid = false;
        }

        if(valid)
        {
            var newbene = beneficiarioModel;
            $rootScope.venda.beneficiarios.push(newbene);
        }        
    }

    //aplica validação
    appValidation.config.set();
});