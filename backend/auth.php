<?php
  require("../conexao.php");
  header('Content-Type: application/json');

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    $usuario = $request->usuario;
    $senha = $request->senha;

    $query = `SELECT usuario, senha FROM users WHERE usuario = '$usuario' AND senha='$senha'`;

    $status = mysqli_query($conexao, $query);
    if ($status) {
      http_response_code(201);
      $data = ["mensagem" => "Perfeito", "id" => $conexao->insert_id];
      echo json_encode($data);
    } else {
      header("HTTP/1.1 500 Erro no SQL");
      echo json_encode(["erro" => "Erro ao Logar " . $conexao->error]);
    }

  }
?>