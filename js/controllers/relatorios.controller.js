app.controller('relatorios.controller', function ($rootScope, $location) {
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

    $('nav').removeAttr('style');

    $('#tabRelatorio').DataTable({
        language: {
            url: 'js/datatables/Portuguese-Brasil.json'
        }
    });

    //aplica validação
    appValidation.config.set();
});