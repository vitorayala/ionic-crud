<?php
  header("Content-Type: application/json");
  // header('Access-Control-Allow-Origin: *');
  // header('Access-Control-Allow-Headers: Content-Type');
  
  //Criando e pegando valores do arquivo 
  $nome = "contador.txt";
  $arquivo = fopen($nome, "r");
  $contador = fgets($arquivo, 25);
  fclose($arquivo);
  $contador++;

  // Alterando valores do arquivo
  $arquivo = fopen($nome, "w+");
  fwrite($arquivo, $contador, 25);
  fclose($arquivo);
  http_response_code(200);

  // Exibindo na Tela
  $retorno = array("quantidade" => $contador);
  echo json_encode($retorno);
?>