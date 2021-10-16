<?php
    include("../conexao.php");
    header('Content-Type: application/json');
    // header('Access-Control-Allow-Origin: *');
    // header('Access-Control-Allow-Methods: GET,POST,OPTIONS,DELETE,PUT');
    // header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
    // header('Access-Control-Allow-Credentials: true');

    if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
        $codigo = $_GET["id"];
        $sql = "delete from produto where pro_id = " . $codigo;
        $status = mysqli_query($conexao, $sql);

        if ($status) {
            http_response_code(202);
            $data = ["mensagem" => "Deletado com Sucesso"];
            echo json_encode($data);

        } else {
            header("HTTP/1.1 500 Erro no SQL");
            echo json_encode(["erro" => "Erro ao Inserir " . $conexao->error]);
        }

        } 
        // else {
        //     header("HTTP/1.1 501 Método Inválido");
        //     echo json_encode(["erro" => " Método Inválido"]);
        // }
?>