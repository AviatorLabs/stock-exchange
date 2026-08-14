<?php

require "../config/database.php";
session_start();

$data = json_decode(file_get_contents("php://input"), true);

$email = $data["email"];
$password = $data["password"];
$role = $data["role"] ?? null;

try {
    $stm = $pdo->prepare(
        "SELECT * FROM users WHERE email = :email"
    );

    $stm->execute([
        ':email' => $email
    ]);

    $user = $stm->fetch(PDO::FETCH_ASSOC);

    if (!$user || !password_verify($password, $user['password_hash'])) {
        echo json_encode([
            "success" => false,
            "message" => "Invalid email or password."
        ]);
        exit;
    }

    if ($role && $user['role'] !== $role) {
        echo json_encode([
            "success" => false,
            "message" => "Invalid account type for this user."
        ]);
        exit;
    }

    $stm = $pdo->prepare(
        "SELECT * FROM addresses WHERE user_id = :id"
    );

    $stm->execute([
        ':id' => $user["user_id"]
    ]);

    $address = $stm->fetch(PDO::FETCH_ASSOC);

    session_regenerate_id(true);
    $_SESSION["user_id"] = $user["user_id"];

    if ($address) {
        echo json_encode([
            "success" => true,
            "message" => "Login successful.",
            "user" => [
                "id" => $user["user_id"],
                "role" => $user["role"],
                "name" => $user["name"],
                "email" => $user["email"],
                "profilePicture" => $user["profile_picture"],
                "address" => $address
            ]
        ]);
    } else {
        echo json_encode([
            "success" => true,
            "message" => "Login successful.",
            "user" => [
                "id" => $user["user_id"],
                "name" => $user["name"],
                "role" => $user["role"],
                "email" => $user["email"],
                "profilePicture" => $user["profile_picture"]
            ]
        ]);
    }
} catch (PDOException $e) {
    echo json_encode([
        "success" => false,
        "message" => "Error: " . $e->getMessage()
    ]);
}