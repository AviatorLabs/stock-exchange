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
$stock_name = $data["stockName"];
$transaction_no = $data["transactionNo"];

$pdo->beginTransaction();
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

    $stm = $pdo->prepare(
        "SELECT
        s.seller_id,
        seller.email AS seller_email,
        buyer.email AS buyer_email
    FROM stockholders sh
    JOIN stocks s
        ON sh.stock_id = s.stock_id
    JOIN users seller
        ON s.seller_id = seller.user_id
    JOIN users buyer
        ON sh.user_id = buyer.user_id
    WHERE sh.user_id = :buyer_id
      AND sh.stock_id = :stock_id"
      );

    $stm->execute([
        ':buyer_id' => $buyer_id,
        ':stock_id' => $stock_id
    ]);

    $result = $stm->fetch(PDO::FETCH_ASSOC);

    $stm = $pdo->prepare(
        "INSERT INTO transactions(seller_id, seller_email, buyer_id, buyer_email, stock_id, stock_name, quantity, price, transaction_no)
        VALUES(:seller_id, :seller_email, :buyer_id, :buyer_email, :stock_id, :stock_name, :quantity, :price, :transaction_no)"
    );

    $stm->execute([
        ':seller_id' => $result["seller_id"],
        ':seller_email' => $result["seller_email"],
        ':buyer_id' => $buyer_id,
        ':buyer_email' => $result["buyer_email"],
        ':stock_id' => $stock_id,
        ':stock_name' => $stock_name,
        ':quantity' => $quantityShare,
        ':price' => $boughtByPrice,
        ':transaction_no' => $transaction_no
    ]);

    $pdo->commit();

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
    $pdo->rollBack();
    echo json_encode([
        "success" => false,
        "message" => "Error: " . $e->getMessage()
    ]);
}
