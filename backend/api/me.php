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
    $stm = $pdo->prepare("SELECT * FROM users WHERE user_id = :id");
    $stm->execute([':id' => $id]);
    $user = $stm->fetch(PDO::FETCH_ASSOC);

    if ($user) {
        $stm = $pdo->prepare("SELECT * FROM addresses WHERE user_id = :id");
        $stm->execute([':id' => $id]);
        $address = $stm->fetch(PDO::FETCH_ASSOC);

        echo json_encode([
            "success" => true,
            "user" => [
                "id" => $user["user_id"],
                "name" => $user["name"],
                "email" => $user["email"],
                "role" => $user["role"],
                "profilePicture" => $user["profile_picture"],
                "address" => $address
            ]
        ]);
    } else {
        echo json_encode([
            "success" => false
        ]);
    }
}