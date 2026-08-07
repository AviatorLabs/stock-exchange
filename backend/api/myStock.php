<?php
    require "../config/database.php";
    session_start();

if (!isset($_SESSION["user_id"])) {
    echo json_encode([
        "success" => false
    ]);
    exit;
}else {
    $id = $_SESSION["user_id"];
    $stm = $pdo->prepare("SELECT * FROM stocks WHERE seller_id = :id");
    $stm->execute([':id' => $id]);

    $stocks = $stm->fetchAll(PDO::FETCH_ASSOC);

    if($stocks){
           echo json_encode([
                "success" => true,
                "stocks" => $stocks
            ]); 
        }else {
            echo json_encode([
                "success" => false,
            ]);
        }
}