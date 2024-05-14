<?php
require_once 'headers.php';
require_once 'conexao.php';

date_default_timezone_set('America/Sao_Paulo');
@session_start();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['idMaquiagem'])) {
        $idMaquiagem = $con->real_escape_string($_GET['idMaquiagem']);
        $sql = $con->query("SELECT * FROM maquiagem WHERE idMaquiagem = '$idMaquiagem'");
        $data = array();
        while ($d = $sql->fetch_assoc()) {
            $data[] = $d;
        }
    } else {
        $data = array();
        $sql = $con->query("SELECT * FROM maquiagem");
        while ($d = $sql->fetch_assoc()) {
            $data[] = $d;
        }
    }
    exit(json_encode($data));
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $sql = $con->query("INSERT INTO maquiagem (nomeMaquiagem, valor) VALUES ('" . $data->nomeMaquiagem . "','" . $data->valor . "')");

    if ($sql) {
        $data->idMaquiagem = $con->insert_id;
        exit(json_encode($data));
    } else {
        exit(json_encode(array('status' => 'Deu ruim')));
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    if (isset($_GET['idMaquiagem'])) {
        $idMaquiagem = $con->real_escape_string($_GET['idMaquiagem']);
        $data = json_decode(file_get_contents("php://input"));
        $sql = $con->query("UPDATE maquiagem SET nomeMaquiagem = '" . $data->nomeMaquiagem . "', valor = '" . $data->valor . "' WHERE idMaquiagem = '$idMaquiagem'");

        if ($sql) {
            exit(json_encode(array('status' => 'successo')));
        } else {
            exit(json_encode(array('status' => 'Deu ruim')));
        }
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    if (isset($_GET['idMaquiagem'])) {
        $idMaquiagem = $con->real_escape_string($_GET['idMaquiagem']);
        $sql = $con->query("DELETE FROM maquiagem WHERE idMaquiagem = '$idMaquiagem'");
    
        if ($sql) {
            exit(json_encode(array('status' => 'successo')));
        } else {
            exit(json_encode(array('status' => 'Deu ruim')));
        }
    }
}
?>
