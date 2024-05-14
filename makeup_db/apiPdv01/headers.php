<?php
    //acesso de controle para uma api poder buscar as informações aqui
    header('Access-Control-Allow-Origin: *');
    // indicando que será utilizado json
    header('Content-Type: application/json');
    // indicação dos métodos que serão permitidos neste arquivo
    header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE');
    // compilado de informações que são obrigatórias no header
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

?>