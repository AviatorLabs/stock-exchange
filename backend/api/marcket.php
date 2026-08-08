<?php
    require "../config/database.php";

    $stm = $pdo->prepare(
        "SELECT * from stocks"
    );

    $stm->execute([]);

    $stocks = $stm->fetchAll(PDO::FETCH_ASSOC);

    if ($stocks) {
        echo json_encode([
            "success" => true,
            "message" => "Fetch sucsessfull!",
            "stocks" => $stocks
        ]);
    } else {
        echo json_encode([
            "success" => true,
            "message" => "Unable To Fetch Stocks!"
        ]);
    }
