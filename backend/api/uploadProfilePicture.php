<?php

require "../config/database.php";

$fileName = basename($_FILES["profilePicture"]["name"]);
$temp_name = $_FILES["profilePicture"]["tmp_name"];
$upload_dir = "../uploads/profilePics/";
$dbPath = "/uploads/profilePics/" . $fileName;
session_start();
$userId = $_SESSION["user_id"];


if (move_uploaded_file($temp_name, $upload_dir . $fileName)) {
    try {
        $stm = $pdo->prepare(
            "UPDATE users SET profile_picture = :profile_picture WHERE user_id = :id"
        );

        $stm->execute([
            ':profile_picture' => $dbPath,
            ':id' => $userId
        ]);

        echo json_encode([
            "success" => true,
            "message" => "Profile picture uploaded successfully.",
            "profilePicture" => $dbPath
        ]);

    } catch (PDOException $e) {
        echo json_encode([
            "success" => false,
            "message" => "Database error: " . $e->getMessage()
        ]);
        exit;
    }
} else {
    echo json_encode([
        "success" => false,
        "message" => "Failed to upload profile picture."
    ]);
}