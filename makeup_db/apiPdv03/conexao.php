<?php 

//dados do banco no servidor local
$servidor = 'localhost';
$maquiagem = 'root';
$senha = '';
$banco = 'maquiagem';

try {
	$con = new mysqli($servidor,$maquiagem, $senha,$banco);
	
} catch (Exception $e) {
	echo 'Erro ao conectar com o banco!! '. $e;
}

 ?>