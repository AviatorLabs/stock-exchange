<?php

require "../config/database.php";

$fileName = basename($_FILES["stockImage"]["name"]);
$temp_name = $_FILES["stockImage"]["tmp_name"];
$upload_dir = $_SERVER['DOCUMENT_ROOT'] . "/uploads/stockImgs/";
$dbPath = "/uploads/stockImgs/" . $fileName;

session_start();
$userId = $_SESSION["user_id"];
$stockName = $_POST["stockName"];
$quantityPer = $_POST["quantityPer"];
$quantity = $_POST["quantity"];
$price = $_POST["price"];
$description = $_POST["description"];

if (!is_dir($upload_dir)) {
    mkdir($upload_dir, 0755, true);
}

if (move_uploaded_file($temp_name, $upload_dir . $fileName)) {
    try {
        $stm = $pdo->prepare(
            "INSERT INTO Stocks(seller_id, stock_name, quantity_inPer, quantity, price, description, image)
            VALUES(:seller_id, :stock_name, :quantity_inPer, :quantity, :price, :description, :image)"
        );

        $stm->execute([
            ':seller_id' => $userId,
            ':stock_name' => $stockName,
            ':quantity_inPer' => $quantityPer,
            ':quantity' => $quantity,
            ':price' => $price,
            ':description' => $description,
            ':image' => $dbPath,
        ]);

        $stm = $pdo->prepare(
            "SELECT * FROM stocks WHERE seller_id = :seller_id"
        );

        $stm->execute([
            ':seller_id' =>$userId
        ]);

        $stocks = $stm->fetchAll(PDO::FETCH_ASSOC);

        if ($stocks) {
           echo json_encode([
                "success" => true,
                "message" => "Stock Uploaded!",
                "stocks" => $stocks
            ]); 
        } else {
            echo json_encode([
                "success" => false,
                "message" => "Could not Fetch Data",
            ]);
        }
        
    } catch (PDOException $e) {
        echo json_encode([
            "success" => false,
            "message" => "Error: " . $e->getMessage()
        ]);
    }
}
