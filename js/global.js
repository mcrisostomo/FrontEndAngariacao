// JavaScript source code

// Corrige um problema de POST no IE8
$.support.cors = true;

// Limpa o cache do Ajax no IE8
$.ajaxSetup({ cache: false });