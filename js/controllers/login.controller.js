app.controller('login.controller', function ($rootScope, $location, $http, httpService) {
    $rootScope.usuario = usuarioModel;
    $rootScope.img_portal = 'images/logoPrevisul.png';
    $rootScope.class_body = 'login';
    $rootScope.text_align = 'col-sm-12 text-center';
    $rootScope.barra_topo = false;
    $rootScope.header_login = 'show';
    $rootScope.nav_internas = 'hide';
    $rootScope.view_internas = 'col-sm-12';

    $('nav').attr('style', 'display: none');
    $('.loading').attr('style', 'display: none');


    $rootScope.submit = function () {

        console.log($rootScope.usuario.login);
        var valid = true;

        if ($rootScope.usuario.login == '') {
            swal('Atenção', 'O campo e-mail está vazio!"', 'error');
            valid = false;
            $rootScope.focusElement = "txtLogin";
        }

        if ($rootScope.usuario.senha == '') {
            swal('Atenção', 'O campo senha está vazio!"', 'error');
            valid = false;
            $rootScope.focusElement = "txtSenha";
        }

        if (valid) {
            $location.path('/previsul/home');
        }
    }

    $rootScope.esqueciSenha = function () {
        if ($('#txtLogin').val() == '') {
            swal(
                'Atenção',
                'Por favor informe o seu Login e clique novamente em "Esqueceu sua senha ..."',
                'error'
            );
        } else {
            swal(
                'Ok',
                'Foi enviada uma mensagem ao e-mail " a...@aaa.com.br " com os dados para acesso ao Portal!' +
                '<br />' +
                '*Omitimos parte do endereço de e-mail por segurança!',
                'success'
            );
        }
    }

    //aplica validação
    appValidation.config.set();
});