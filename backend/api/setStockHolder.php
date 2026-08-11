<?php

require "../config/database.php";



$data = json_decode(file_get_contents("php://input"), true);

session_start();
$buyer_id = $_SESSION["user_id"];
$stock_id = $data["stockId"];
$boughtByPrice = $data["boughtByPrice"];
$quantityShare = $data["quantityShare"];
$availableAmount = $data["availableAmount"];
$updatedAmount = $availableAmount - $quantityShare;

try{
    $stm = $pdo->prepare(
        "INSERT INTO stockholders(stock_id, user_id, cost, share_quantity)
        VALUES(:stock_id, :user_id, :cost, :share_quantity)"
    );

    $stm->execute([
        ":stock_id" => $stock_id,
        ":user_id" => $buyer_id,
        ":cost" => $boughtByPrice,
        ":share_quantity" => $quantityShare
    ]);

    $stm = $pdo->prepare(
        "UPDATE stocks SET quantity = :updated WHERE stock_id = :stock_id"
    );

    $stm->execute([
        ":stock_id" => $stock_id,
        ":updated" => $updatedAmount
    ]);

    if(!$stm){
        echo json_encode([
        "success" => false,
        "message" => "Error: "
    ]);
    };

    echo json_encode([
        "success" => true,
        "message" => "Stock Holder set",
        "stockHolder" => [
            "stock_id" => $stock_id,
            "cost" => $boughtByPrice,
            "shareQuantity" => $quantityShare
        ]
    ]);

}catch (PDOException $e) {
    echo json_encode([
        "success" => false,
        "message" => "Error: " . $e->getMessage()
    ]);
}
