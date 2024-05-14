<?php 

//dados do banco no servidor local
$servidor = 'localhost';
$agenda = 'root';
$senha = '';
$banco = 'maquiagem';

try {
	$con = new mysqli($servidor,$agenda, $senha,$banco);
	
} catch (Exception $e) {
	echo 'Erro ao conectar com o banco!! '. $e;
}

 ?>