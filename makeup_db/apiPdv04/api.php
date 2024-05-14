<?php

$accessToken = 'SEU_ACCESS_TOKEN'; // Substitua pelo seu token de acesso do Mercado Pago

// Rota para criar uma preferência de pagamento
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Obtém os dados enviados pelo Ionic
  $postData = file_get_contents('php://input');
  $preferenceData = json_decode($postData, true);

  // Cria a preferência de pagamento usando a API do Mercado Pago
  $ch = curl_init('https://api.mercadopago.com/checkout/preferences');
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_POST, true);
  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($preferenceData));
  curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $accessToken,
  ]);

  $response = curl_exec($ch);
  $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

  // Verifica se a chamada foi bem-sucedida
  if ($httpCode === 201) {
    echo $response;
  } else {
    http_response_code($httpCode);
    echo $response;
  }

  curl_close($ch);
}
