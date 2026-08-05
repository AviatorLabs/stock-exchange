<?php

require "../config/database.php";

$data = json_decode(file_get_contents("php://input"), true);

$name = $data["name"];
$email = $data["email"];
$password = password_hash($data["password"], PASSWORD_DEFAULT);

try {
    $stm = $pdo->prepare(
        "Insert INTO users(name, email, password_hash)
        VALUE (:name, :email, :password_hash)"
    );


    $stm->execute([
        ':name' => $name,
        ':email' => $email,
        ':password_hash' => "$password"
    ]);

    $stm = $pdo->prepare(
        "SELECT user_id FROM users WHERE email = :email"
    );

    $stm->execute([
        ':email' => $email
    ]);

    $user_id = $stm->fetch(PDO::FETCH_ASSOC);

    echo json_encode([
        "success" => true,
        "message" => "Account created.",
        "user" => [
                "id" => $user_id["user_id"],
                "name" => $name,
                "email" => $email
            ]
    ]);
} catch (PDOException $e) {
    echo json_encode([
        "success" => false,
        "message" => "Error: " . $e->getMessage()
    ]);
}