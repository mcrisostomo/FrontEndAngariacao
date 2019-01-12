app.controller('home.controller', function ($rootScope, $location) {
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

    // DatePicker
    $('#txtDataInicio').datepicker({
        format: "dd/mm/yyyy",
        language: "pt-BR"
    });

    $('#txtDataFim').datepicker({
        format: "dd/mm/yyyy",
        language: "pt-BR"
    });

    // Chart
    Highcharts.chart('container', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Consultas Crivo X Vendas X Emitidas'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['06/06', '07/06', '08/06', '09/06', '10/06', '11/06', '12/06'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '',
                align: ''
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ''
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 40,
            y: 40,
            floating: true,
            borderWidth: 0,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Crivo',
            data: [0, 0, 0, 0, 0, 0, 0]
        }, {
            name: 'Vendas Confirmadas',
            data: [0, 0, 0, 0, 0, 0, 0]
        }, {
            name: 'Emitidas',
            data: [0, 0, 0, 0, 0, 0, 0]
        }]
    });

    //aplica validação
    appValidation.config.set();
});