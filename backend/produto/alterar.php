<?php

  include("../conexao.php");
  // header('Content-Type: application/json');
  // header('Access-Control-Allow-Origin: *');
  // header('Access-Control-Allow-Headers: Content-Type');

  if ($_SERVER["REQUEST_METHOD"] == "PUT") {
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $codigo = $request->id;
    $desc = $request->descricao;
    $preco = $request->preco;
    $validade = $request->validade;
    $sql = "update produto set pro_descricao = '$desc', pro_preco = $preco, pro_validade = '$validade' where pro_id = '$codigo'";
    $status = mysqli_query($conexao, $sql);
    if ($status) {
      http_response_code(200);
      $data = ["mensagem" => "$desc alterado com sucesso"];
      echo json_encode($data);
    } else {
      http_response_code(202);
      $data = ["status" => "Erro", "msg" => "Erro ao Alterar" . mysqli_error($conexao)];
      echo json_encode($data);
    }
  }

?>