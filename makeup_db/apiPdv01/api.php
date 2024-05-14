<?php
require_once 'headers.php';
    
require_once 'conexao.php';

date_default_timezone_set('America/Sao_Paulo');
@session_start();

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['idAcesso'])) {
    $idAcesso = $con->real_escape_string($_GET['idAcesso']);
    $sql = $con->query("SELECT * FROM usuarios WHERE idAcesso = '$idAcesso'");
    $data = array();
    
    while ($d = $sql->fetch_assoc()) {
        $data[] = $d;
    }
    
    exit(json_encode($data));
}


if($_SERVER['REQUEST_METHOD'] === 'GET'){
    if(isset($_GET['idUsuario'])){
        $idUsuario = $con->real_escape_string($_GET['idUsuario']);
        $sql = $con->query("select * from usuarios where idUsuario = '$idUsuario'");
        $data = $sql->fetch_assoc();

    }else if(isset($_GET['senhaUsuario'])){
        $emailUsuario = $con->real_escape_string($_GET['emailUsuario']);
        $senhaUsuario = $con->real_escape_string($_GET['senhaUsuario']);
        // selecionando somente a senhaUsuario para o emailUsuario informado
        $sql = $con->query("select * from usuarios where emailUsuario = '$emailUsuario' and senhaUsuario='$senhaUsuario'");
        $data = $sql->fetch_assoc();

        if (!$data) {$data = 'Email ou senha inválidos';}
        
    } else {
        $data = array();
        $sql = $con->query("select * from usuarios");
        while($d = $sql->fetch_assoc()){
            $data[] = $d;
        }
   
    }
    exit(json_encode($data));//json_encode( $arr, JSON_NUMERIC_CHECK );
}
if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $data  = json_decode(file_get_contents("php://input"));
    //------ acrescimo para criptografia ------
    //$senhaUsuario = password_hash($data->senhaUsuario,PASSWORD_DEFAULT);
    //----- mudança no código sql ao passar agora o campo referente a senhaUsuario
    $sql = $con->query("insert into usuarios (nomeUsuario, telefoneUsuario, emailUsuario, senhaUsuario, cpfUsuario, idAcesso) values ('".$data->nomeUsuario."','".$data->telefoneUsuario."','".$data->emailUsuario."','".$data->senhaUsuario."','".$data->cpfUsuario."','".$data->idAcesso."')");   
    // ----- término da alteração para o código de inserção -----
    if($sql){
        exit(json_encode($data));

    }else{
        exit(json_decode(array('status' => 'Deu ruim')));
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    if (isset($_GET['idUsuario'])) {
        $idUsuario = $con->real_escape_string($_GET['idUsuario']);
        $data = json_decode(file_get_contents("php://input"));

        // Criptografar a senha do usuário
        $senhaUsuario =$data->senhaUsuario;

        // Atribuir valor da variável $cpfUsuario
        $cpfUsuario = $data->cpfUsuario;

        $sql = $con->query("UPDATE usuarios SET nomeUsuario = '".$data->nomeUsuario."', telefoneUsuario = '".$data->telefoneUsuario."', emailUsuario = '".$data->emailUsuario."', senhaUsuario = '".$senhaUsuario."', cpfUsuario = '".$cpfUsuario."' WHERE idUsuario = '$idUsuario'");

        if ($sql) {
            exit(json_encode(array('status'=> 'successo')));
        } else {
            exit(json_encode(array('status'=> 'Deu ruim')));
        }
    }
}

if($_SERVER['REQUEST_METHOD'] === 'DELETE'){
    if(isset($_GET['idUsuario'])){
        $idUsuario = $con->real_escape_string($_GET['idUsuario']);
        $sql = $con->query("delete from usuarios where idUsuario = '$idUsuario'");
    
        if($sql){
            exit(json_encode(array('status' => 'successo')));
        }else{
            exit(json_encode(array('status' => 'Deu ruim')));
        }
    }
}

// Acrescentando a busca da senhaUsuario
if($_SERVER['REQUEST_METHOD'] === 'PURGE'){
    if(isset($_GET['emailUsuario'])){
        $emailUsuario = $con->real_escape_string($_GET['emailUsuario']);
        $sql = $con->query("select * from usuarios where emailUsuario = '$emailUsuario'");
        $data = $sql->fetch_assoc();
    
        if($sql){
            $data->idUsuario = $con->insert_idUsuario;
            exit(json_encode($data));

        }else{
            exit(json_decode(array('status' => 'Deu ruim')));
        }

    /*    
    }else{
        $data = array();
        
        $sql = $con->query("select * from funcionarios");
        while($d = $sql->fetch_assoc()){
            $data[] = $d;
        }
   */
    }
    //exit(json_encode($data));//json_encode( $arr, JSON_NUMERIC_CHECK );
}
?>