var appValidation = {};
 
appValidation.config = {
	set: function(){	
        appValidation.config.SetMaskVal();
        appValidation.config.SetValidatorVal();
        //appValidation.config.SetMenuactiveVal();
	},
    SetMaskVal: function () {
        $(document).ready(function () {

            //mascaras para os campos
            jQuery(function ($) {
                //CEP
                if (document.querySelector(".txtcep") != null) {
                    $(".txtcep").mask("99999-999");
                     $(".txtcep").attr("placeholder", "Digite o CEP");
                }

                //Telefone
                var MaskTel9and8 = function (val) {
                    return val.replace(/\D/g, '').length === 9 ? '(00)00000-0000' : '(00)0000-00009';
                },
                    spOptions = {
                        onKeyPress: function (val, e, field, options) {
                            field.mask(MaskTel9and8.apply({}, arguments), options);
                        }
                    };

                if (document.querySelector(".txttel") != null) {
                    $('.txttel').mask(MaskTel9and8, spOptions);
                }
                
                if (document.querySelector(".txttelddd") != null) {
                    $(".txttelddd").mask("99");
                }
                if (document.querySelector(".txttel9") != null) {
                    $(".txttel9").mask("99999-9999");
                }
                if (document.querySelector(".txttel8") != null) {
                    $(".txttel8").mask("(99)9999-9999");
                    $(".txttel8").attr("placeholder", "Digite o Telefone com o DDD. Ex: (11) 5555-6666");
                }

                if (document.querySelector(".txttelcelular") != null) {
                    $(".txttelcelular").mask("(99)99999-9999");
                    $(".txttelcelular").attr("placeholder", "Digite o Celular com o DDD. Ex: (11) 99999-8888");
                }

                //Documento
                var MaskDocCNPJCPF = function (val) {
                    return val.replace(/\D/g, '').length === 14 ? '00.000.000/0000-00' : '000.000.000-00999';
                },
                   spOptions = {
                       onKeyPress: function (val, e, field, options) {
                           field.mask(MaskDocCNPJCPF.apply({}, arguments), options);
                       }
                   };
                if (document.querySelector(".txtcnpjcpf") != null) {
                    $('.txtcnpjcpf').mask(MaskDocCNPJCPF, spOptions);
                }
                if (document.querySelector(".txtcpf") != null) {
                    $(".txtcpf").mask("999.999.999-99");
                    $(".txtcpf").attr("placeholder", "Digite o CPF");
                }
                if (document.querySelector(".txtcnpj") != null) {
                    $(".txtcnpj").mask("99.999.999/9999-99");
                }
                //Data
                if (document.querySelector(".txtdata") != null) {
                    $(".txtdata").mask("00/00/0000", { placeholder: "Clique para preencher a Data" });                    
                }
                if (document.querySelector(".txtdatade") != null) {
                    $(".txtdatade").mask("00/00/0000", { placeholder: "Clique para preencher a Data Inicial" });
                }
                if (document.querySelector(".txtdataate") != null) {
                    $(".txtdataate").mask("00/00/0000", { placeholder: "Clique para preencher a Data Final" });
                }

                if (document.querySelector(".txtdatanasc") != null) {
                    $(".txtdatanasc").mask("00/00/0000", { placeholder: "Clique para preencher a Data de Nascimento" });                    
                }

                //Hora
                if (document.querySelector(".txttime") != null) {                    
                     $('.txttime').mask('00:00', { placeholder: "  :  " });
                }
             
            });
        });
    },
    check_cpf: function (field) {
        var i;
        s = field.value;
        if (s == '' || s == '___.___.___-__') return;
        s = s.replace(".", "").replace(".", "").replace("-", "")

        var regexseq = /^(\d)\1+$/;
        if (regexseq.test(s)) {            
            alert("CPF Inválido.");
            return false;
        }

        var c = s.substr(0, 9);
        var dv = s.substr(9, 2);
        var d1 = 0;
        for (i = 0; i < 9; i++) {
            d1 += c.charAt(i) * (10 - i);
        }

        if (d1 == 0) {            
            alert("CPF Inválido.");
            return false;
        }

        d1 = 11 - (d1 % 11);

        if (d1 > 9)
            d1 = 0;

        if (dv.charAt(0) != d1) {
            alert("CPF Inválido");
            return false;
        }

        d1 *= 2;

        for (i = 0; i < 9; i++) {
            d1 += c.charAt(i) * (11 - i);
        }

        d1 = 11 - (d1 % 11);

        if (d1 > 9)
            d1 = 0;

        if (dv.charAt(1) != d1) {
            alert("CPF Inválido");
            return false;
        }
        return true;
    },
    check_cnpj: function (field) {
        var numeros, digitos, soma, i, resultado, pos, tamanho, digitos_iguais;
        digitos_iguais = 1;
        var cnpj = field.value;
        if (cnpj == '' || cnpj == '__.___.___/____-__') return;

        cnpj = cnpj.replace("/", "").replace(".", "").replace(".", "").replace("-", "")

         var regexseq = /^(\d)\1+$/;
        if (regexseq.test(cnpj)) {            
             alert('CNPJ Inválido')
            return false;
        }

        if (cnpj.length < 14 && cnpj.length < 15) {
            alert('CNPJ Inválido')
            return false;
        }
        for (i = 0; i < cnpj.length - 1; i++)
            if (cnpj.charAt(i) != cnpj.charAt(i + 1)) {
                digitos_iguais = 0;
                break;
            }
        if (!digitos_iguais) {
            tamanho = cnpj.length - 2
            numeros = cnpj.substring(0, tamanho);
            digitos = cnpj.substring(tamanho);
            soma = 0;
            pos = tamanho - 7;
            for (i = tamanho; i >= 1; i--) {
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2)
                    pos = 9;
            }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(0)) {
                alert('CNPJ Inválido')
                return false;
            }
            tamanho = tamanho + 1;
            numeros = cnpj.substring(0, tamanho);
            soma = 0;
            pos = tamanho - 7;
            for (i = tamanho; i >= 1; i--) {
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2)
                    pos = 9;
            }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(1)) {
                alert('CNPJ Inválido')
                return false;
            }
            return true;
        } else {
            alert('CNPJ Inválido')
            return false;
        }
    },
    check_cnpj_and_cpf: function (field) {

        if (field.value.length <= 14) {
            //cpf
            var i;
            s = field.value;
            if (s == '' || s == '___.___.___-__') return;
            s = s.replace(".", "").replace(".", "").replace("-", "")

            var regexseq = /^(\d)\1+$/;
            if (regexseq.test(s)) {                
                alert("CPF Inválido");
                return false;
            }

            var c = s.substr(0, 9);
            var dv = s.substr(9, 2);
            var d1 = 0;
            for (i = 0; i < 9; i++) {
                d1 += c.charAt(i) * (10 - i);
            }

            if (d1 == 0) {
                alert("CPF Inválido");                
                return false;
            }

            d1 = 11 - (d1 % 11);

            if (d1 > 9)
                d1 = 0;

            if (dv.charAt(0) != d1) {
                alert("CPF Inválido");
                return false;
            }

            d1 *= 2;

            for (i = 0; i < 9; i++) {
                d1 += c.charAt(i) * (11 - i);
            }

            d1 = 11 - (d1 % 11);

            if (d1 > 9)
                d1 = 0;

            if (dv.charAt(1) != d1) {
                alert("CPF Inválido");
                return false;
            }
            return true;
        }
        else {
            //cnpj
            var numeros, digitos, soma, i, resultado, pos, tamanho, digitos_iguais;
            digitos_iguais = 1;
            var cnpj = field.value;
            if (cnpj == '' || cnpj == '__.___.___/____-__') return;

            cnpj = cnpj.replace("/", "").replace(".", "").replace(".", "").replace("-", "")


            var regexseq = /^(\d)\1+$/;
            if (regexseq.test(cnpj)) {                
               alert('CNPJ Inválido')
                return false;
            }


            if (cnpj.length < 14 && cnpj.length < 15) {
                alert('CNPJ Inválido')
                return false;
            }
            for (i = 0; i < cnpj.length - 1; i++)
                if (cnpj.charAt(i) != cnpj.charAt(i + 1)) {
                    digitos_iguais = 0;
                    break;
                }
            if (!digitos_iguais) {
                tamanho = cnpj.length - 2
                numeros = cnpj.substring(0, tamanho);
                digitos = cnpj.substring(tamanho);
                soma = 0;
                pos = tamanho - 7;
                for (i = tamanho; i >= 1; i--) {
                    soma += numeros.charAt(tamanho - i) * pos--;
                    if (pos < 2)
                        pos = 9;
                }
                resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
                if (resultado != digitos.charAt(0)) {
                    alert('CNPJ Inválido')
                    return false;
                }
                tamanho = tamanho + 1;
                numeros = cnpj.substring(0, tamanho);
                soma = 0;
                pos = tamanho - 7;
                for (i = tamanho; i >= 1; i--) {
                    soma += numeros.charAt(tamanho - i) * pos--;
                    if (pos < 2)
                        pos = 9;
                }
                resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
                if (resultado != digitos.charAt(1)) {
                    alert('CNPJ Inválido')
                    return false;
                }
                return true;
            } else {
                alert('CNPJ Inválido')
                return false;
            }
        }
    },
    check_datenasc: function (field) {
        var checkstr = "0123456789";
        var DateField = field;
        var Datevalue = "";
        var DateTemp = "";
        var seperator = "/";
        var day;
        var month;
        var year;
        var leap = 0;
        var err = 0;
        var i;
        err = 0;
        if (DateField.value == '' || DateField.value == '__/__/____') return;
        DateValue = DateField.value;
        /* Delete all chars except 0..9 */
        for (i = 0; i < DateValue.length; i++) {
            if (checkstr.indexOf(DateValue.substr(i, 1)) >= 0) {
                DateTemp = DateTemp + DateValue.substr(i, 1);
            }
        }
        DateValue = DateTemp;
        /* Always change date to 8 digits - string */
        /* if year is entered as 2-digit / always assume 20xx */
        if (DateValue.length == 6) {
            DateValue = DateValue.substr(0, 4) + '20' + DateValue.substr(4, 2);
        }
        if (DateValue.length != 8) {
            err = 19;
        }
        /* year is wrong if year = 0000 */
        year = DateValue.substr(4, 4);
        if (year == 0) {
            err = 20;
        }
        /* Validation of month */
        month = DateValue.substr(2, 2);
        if ((month < 1) || (month > 12)) {
            err = 21;
        }
        /* Validation of day */
        day = DateValue.substr(0, 2);
        if (day < 1) {
            err = 22;
        }
        /* Validation leap-year / february / day */
        if ((year % 4 == 0) || (year % 100 == 0) || (year % 400 == 0)) {
            leap = 1;
        }
        if ((month == 2) && (leap == 1) && (day > 29)) {
            err = 23;
        }
        if ((month == 2) && (leap != 1) && (day > 28)) {
            err = 24;
        }
        /* Validation of other months */
        if ((day > 31)
                && ((month == "01") || (month == "03") || (month == "05")
                        || (month == "07") || (month == "08") || (month == "10") || (month == "12"))) {
            err = 25;
        }
        if ((day > 30)
                && ((month == "04") || (month == "06") || (month == "09") || (month == "11"))) {
            err = 26;
        }
        /* if 00 ist entered, no error, deleting the entry */
        if ((day == 0) && (month == 0) && (year == 00)) {
            err = 0;
            day = "";
            month = "";
            year = "";
            seperator = "";
        }
        /* if no error, write the completed date to Input-Field (e.g. 13.12.2001) */
        if (err == 0) {
            DateField.value = day + seperator + month + seperator + year;
        }
            /* Error-message if err != 0 */
        else {
            alert("Data inválida");
            DateField.select();
            DateField.focus();
            return;
        }

        birthday = new Date(year, month - 1, day);
        age = new Date().getFullYear() - year;
        if (new Date().getMonth() < (month - 1)) age--;
        if ((month - 1) == new Date().getMonth() && new Date().getDate() < day) age--;

        if (age < 18) {
            alert('Não é permitido assegurar para menores de 18 anos');
            DateField.select();
            DateField.focus();
            return;
        }
        // if (age > 70) {
        //     alert('Não é permitido assegurar para maiores de 70 anos');
        //     DateField.select();
        //     DateField.focus();
        //     return;
        // }
        return true;
    },
    check_date: function (field) {
        var checkstr = "0123456789";
        var DateField = field;
        var Datevalue = "";
        var DateTemp = "";
        var seperator = "/";
        var day;
        var month;
        var year;
        var leap = 0;
        var err = 0;
        var i;
        err = 0;
        if (DateField.value == '' || DateField.value == '__/__/____') return;
        DateValue = DateField.value;
        /* Delete all chars except 0..9 */
        for (i = 0; i < DateValue.length; i++) {
            if (checkstr.indexOf(DateValue.substr(i, 1)) >= 0) {
                DateTemp = DateTemp + DateValue.substr(i, 1);
            }
        }
        DateValue = DateTemp;
        /* Always change date to 8 digits - string */
        /* if year is entered as 2-digit / always assume 20xx */
        if (DateValue.length == 6) {
            DateValue = DateValue.substr(0, 4) + '20' + DateValue.substr(4, 2);
        }
        if (DateValue.length != 8) {
            err = 19;
        }
        /* year is wrong if year = 0000 */
        year = DateValue.substr(4, 4);
        if (year == 0) {
            err = 20;
        }
        /* Validation of month */
        month = DateValue.substr(2, 2);
        if ((month < 1) || (month > 12)) {
            err = 21;
        }
        /* Validation of day */
        day = DateValue.substr(0, 2);
        if (day < 1) {
            err = 22;
        }
        /* Validation leap-year / february / day */
        if ((year % 4 == 0) || (year % 100 == 0) || (year % 400 == 0)) {
            leap = 1;
        }
        if ((month == 2) && (leap == 1) && (day > 29)) {
            err = 23;
        }
        if ((month == 2) && (leap != 1) && (day > 28)) {
            err = 24;
        }
        /* Validation of other months */
        if ((day > 31)
                && ((month == "01") || (month == "03") || (month == "05")
                        || (month == "07") || (month == "08") || (month == "10") || (month == "12"))) {
            err = 25;
        }
        if ((day > 30)
                && ((month == "04") || (month == "06") || (month == "09") || (month == "11"))) {
            err = 26;
        }
        /* if 00 ist entered, no error, deleting the entry */
        if ((day == 0) && (month == 0) && (year == 00)) {
            err = 0;
            day = "";
            month = "";
            year = "";
            seperator = "";
        }
        /* if no error, write the completed date to Input-Field (e.g. 13.12.2001) */
        if (err == 0) {
            DateField.value = day + seperator + month + seperator + year;
        }
            /* Error-message if err != 0 */
        else {
            alert("Data inválida");
            DateField.select();
            DateField.focus();
            return;
        }
        
        return true;
    },
    check_email: function (field) {
        // er = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2,3}/; 
		// if(!er.exec(field) )
		// {	
        //    alert("Email inválido");            
        //    return false;			
		// }	
        return true;
    },
    autocalcdiff: function (field){
        console.log(field);
        //appUtilities.AutoCalcDateDiff(null,null)
    },
    autocalcdiff2: function (field,event){
        console.log(field.value);
        console.log(event);
        //return true;
        //appUtilities.AutoCalcDateDiff(null,null)
    },
    check_telefonemobile: function(field) {
        
        var value = field.value;
        
        value = value.replace("(", "");
        value = value.replace(")", "");
        value = value.replace("-", "");
        value = value.replace(" ", "").trim();

        if (value == '') {
            alert("Telefone Celular Inválido");
            return false;            
        }

        if (value == '00000000000' || value == '11111111111' || value == '22222222222' || value == '33333333333' || value == '44444444444' || value == '55555555555' ||value == '66666666666' ||value == '77777777777' ||value == '88888888888' ||value == '99999999999') {
            alert("Telefone Celular Inválido");
            return false;
        }

        if (["00", "01", "02", "03", , "04", , "05", , "06", , "07", , "08", "09", "10"].indexOf(value.substring(0, 2)) != -1) {
            alert("Telefone Celular Inválido");
            return false;
        }

        if (value.length < 10 || value.length > 11) {
            alert("Telefone Celular Inválido");
            return false;
        }

        if (["6", "7", "8", "9"].indexOf(value.substring(2, 3)) == -1) {
            alert("Telefone Celular Inválido");
            return false;
        }        
        return true;
    },
    SetValidatorVal: function () {
        //Documento

        if (document.querySelector(".txtcnpjcpf") != null) {
            var field = document.querySelector(".txtcnpjcpf");
            field.onblur = function () { if (!appValidation.config.check_cnpj_and_cpf(this)) { this.value = ''; } };
        }

        if (document.querySelector(".txtcpf") != null) {
            var field = document.querySelector(".txtcpf");
            field.onblur = function () { if (!appValidation.config.check_cpf(this)) { this.value = ''; } };
        }

        if (document.querySelector(".txtcnpj") != null) {
            var field = document.querySelector(".txtcnpj");
            field.onblur = function () { if (!appValidation.config.check_cnpj(this)) { this.value = ''; } };
        }

        //Datanascimento
        if (document.querySelector(".txtdatanasc") != null) {
            var field = document.querySelector(".txtdatanasc");
            field.onblur = function () { if (!appValidation.config.check_datenasc(this)) { this.value = ''; } };
        }

        //Data
        if (document.querySelector(".txtdata") != null) {
            var field = document.querySelector(".txtdata");
            field.onblur = function () { if (!appValidation.config.check_date(this)) { this.value = ''; } };
        }

        if (document.querySelector(".txtdatade") != null) {
            var field = document.querySelector(".txtdatade");
            field.onblur = function () { if (!appValidation.config.check_date(this)) { this.value = ''; } };
        }

        if (document.querySelector(".txtdataate") != null) {
            var field = document.querySelector(".txtdataate");
            field.onblur = function () { if (!appValidation.config.check_date(this)) { this.value = ''; } };
        }

        if (document.querySelector(".txtemail") != null) {
            var field = document.querySelector(".txtemail");
            field.onblur = function () { if (!appValidation.config.check_email(this)) { this.value = ''; } };
        }

       if (document.querySelector("#txtDataVolta") != null) {
            var field = document.querySelector("#txtDataVolta");
            field.onblur = function () { if (!appValidation.config.autocalcdiff(this)) {  } };
            field.onkeypress = function (event) { if (!appValidation.config.autocalcdiff2(this,event)) {  } };
        }

         //celular
        if (document.querySelector(".txttelcelular") != null) {
            var field = document.querySelector(".txttelcelular");
            field.onblur = function () { if (!appValidation.check_telefonemobile(this)) { this.value = ''; } };
        }
    },
    SetMenuactiveVal: function () {
        $(".nav li").on("click", function () {
            $(".nav li").removeClass("active");
            $(this).addClass("active");
        });
        $('.nav-tabs a').click(function (e) {
            e.preventDefault();
            $(this).tab('show');
        });
    },
    SetCurrentMenuactive: function (limenu) {
        $(".nav li").removeClass("active");
        $(limenu).addClass("active");
    }
};


