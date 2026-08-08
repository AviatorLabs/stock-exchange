<?php

require "../config/database.php";

session_start();

$seller_id = $_SESSION["user_id"];

$stm = $pdo->prepare(
    "SELECT * From stocks WHERE seller_id = :seller_id"
);

$stm = $pdo->prepare(
    "SELECT
        s.stock_id,
        s.stock_name,
        s.quantity_inPer,
        s.quantity,
        s.price,
        s.description,
        s.image,

        u.name AS holder_name,
        u.email AS holder_email,
        sh.share_quantity

    FROM stocks s

    LEFT JOIN stockholders sh
        ON s.stock_id = sh.stock_id

    LEFT JOIN users u
        ON sh.user_id = u.user_id

    WHERE s.seller_id = :seller_id

    ORDER BY s.stock_id"
);

$stm->execute([
    ":seller_id" => $seller_id
]);

$rows = $stm->fetchAll(PDO::FETCH_ASSOC);

$stocks = [];

foreach ($rows as $row) {

    $stockId = $row["stock_id"];

    if (!isset($stocks[$stockId])) {

        $stocks[$stockId] = [
            "stock_name" => $row["stock_name"],
            "quantity_inPer" => $row["quantity_inPer"],
            "quantity" => $row["quantity"],
            "price" => $row["price"],
            "description" => $row["description"],
            "front" => $row["image"],
            "stockHolders" => []
        ];
    }

    if ($row["holder_name"] !== null) {

        $stocks[$stockId]["stockHolders"][] = [
            "name" => $row["holder_name"],
            "email" => $row["holder_email"],
            "shareQuantity" => $row["share_quantity"]
        ];
    }
}

$stocks = array_values($stocks);

if ($stocks) {
    echo json_encode([
        "success" => true,
        "stocks" => $stocks
    ]);
}else {
    echo json_encode([
        "success" => false,
        "message" => "Failed to Fetch Data"
    ]);
}

