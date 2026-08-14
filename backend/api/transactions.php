<?php

require "../config/database.php";

session_start();

if (!isset($_SESSION["user_id"])) {
    http_response_code(401);
    echo json_encode([
        "success" => false,
        "message" => "Unauthorized"
    ]);
    exit;
}

$userId = $_SESSION["user_id"];

try {
    $columnStmt = $pdo->query("SHOW COLUMNS FROM transactions");
    $columns = array_column($columnStmt->fetchAll(PDO::FETCH_ASSOC), "Field");

    $selectColumns = [
        "transaction_no",
        "stock_name",
        "quantity",
        "price"
    ];

    if (in_array("created_at", $columns, true)) {
        $selectColumns[] = "created_at";
    }

    $orderColumns = [];

    if (in_array("created_at", $columns, true)) {
        $orderColumns[] = "created_at DESC";
    }

    foreach (["transaction_id", "id"] as $idColumn) {
        if (in_array($idColumn, $columns, true)) {
            $orderColumns[] = "$idColumn DESC";
            break;
        }
    }

    if (in_array("transaction_no", $columns, true)) {
        $orderColumns[] = "transaction_no DESC";
    }

    $orderClause = $orderColumns ? " ORDER BY " . implode(", ", $orderColumns) : "";

    $stm = $pdo->prepare(
        "SELECT " . implode(", ", $selectColumns) . "
        FROM transactions
        WHERE buyer_id = :user_id
        OR seller_id = :user_id" . $orderClause
    );

    $stm->execute([
        ":user_id" => $userId
    ]);

    echo json_encode([
        "success" => true,
        "transactions" => $stm->fetchAll(PDO::FETCH_ASSOC)
    ]);
} catch (PDOException $e) {
    echo json_encode([
        "success" => false,
        "message" => "Unable to load transaction history."
    ]);
}
