<?php
require_once 'headers.php';
require_once 'conexao.php';

date_default_timezone_set('America/Sao_Paulo');
@session_start();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['idUsuario'])) {
        $idUsuario = $con->real_escape_string($_GET['idUsuario']);
        $sql = $con->query("SELECT * FROM agenda WHERE idUsuario = '$idUsuario'");
        $data = array();
        while ($d = $sql->fetch_assoc()) {
            $data[] = $d;
        }
    } else {
        $data = array();
        $sql = $con->query("SELECT * FROM agenda");
        while ($d = $sql->fetch_assoc()) {
            $data[] = $d;
        }
    }
    exit(json_encode($data));
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $sql = $con->query("INSERT INTO agenda (idUsuario, funcionario, dataAgenda, horario, maquiagem, pagamento, situacao, valor) VALUES ('" . $data->idUsuario . "','" . $data->funcionario . "','" . $data->dataAgenda . "','" . $data->horario . "','" . $data->maquiagem . "','" . $data->pagamento . "','Pendente','" . $data->valor . "')");

    if ($sql) {
        $data->idAgenda = $con->insert_id;
        exit(json_encode($data));
    } else {
        exit(json_encode(array('status' => 'Deu ruim')));
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    if (isset($_GET['idAgenda'])) {
        $idAgenda = $con->real_escape_string($_GET['idAgenda']);
        $data = json_decode(file_get_contents("php://input"));
        $sql = $con->query("UPDATE agenda SET idUsuario = '" . $data->idUsuario . "', funcionario = '" . $data->funcionario . "', dataAgenda = '" . $data->dataAgenda . "', horario = '" . $data->horario . "', maquiagem = '" . $data->maquiagem . "', pagamento = '" . $data->pagamento . "', situacao = '" . $data->situacao . "', valor = '" . $data->valor . "' WHERE idAgenda = '$idAgenda'");

        if ($sql) {
            exit(json_encode(array('status' => 'successo')));
        } else {
            exit(json_encode(array('status' => 'Deu ruim')));
        }
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    if (isset($_GET['idAgenda'])) {
        $idAgenda = $con->real_escape_string($_GET['idAgenda']);
        $sql = $con->query("DELETE FROM agenda WHERE idAgenda = '$idAgenda'");
    
        if ($sql) {
            exit(json_encode(array('status' => 'successo')));
        } else {
            exit(json_encode(array('status' => 'Deu ruim')));
        }
    }
}
?>
