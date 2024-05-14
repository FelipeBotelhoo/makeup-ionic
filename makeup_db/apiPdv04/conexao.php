<?php 

//dados do banco no servidor local
$servidor = 'localhost';
$senha = '';
$banco = 'maquiagem';
$agenda = 'root';

try {
	$con = new mysqli($servidor, $agenda, $senha,$banco);
	
} catch (Exception $e) {
	echo 'Erro ao conectar com o banco!! '. $e;
}

 ?>