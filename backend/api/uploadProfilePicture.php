<?php

require "../config/database.php";

$fileName = basename($_FILES["profilePicture"]["name"]);
$temp_name = $_FILES["profilePicture"]["tmp_name"];
// Use DOCUMENT_ROOT to save to stock-exchange-api directory
$upload_dir = $_SERVER['DOCUMENT_ROOT'] . "/stock-exchange-api/uploads/profilePics/";
$dbPath = "/uploads/profilePics/" . $fileName;
session_start();
$userId = $_SESSION["user_id"];

// Create directory if it doesn't exist
if (!is_dir($upload_dir)) {
    mkdir($upload_dir, 0755, true);
}

$fullPath = $upload_dir . $fileName;

if (move_uploaded_file($temp_name, $fullPath)) {
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
    $error = "Failed to upload profile picture.";
    if (!file_exists($upload_dir)) {
        $error .= " Directory does not exist: " . $upload_dir;
    }
    if (!is_writable($upload_dir)) {
        $error .= " Directory is not writable: " . $upload_dir;
    }
    error_log("Upload failed: temp=$temp_name, dest=$fullPath, dir_exists=" . (file_exists($upload_dir) ? 'yes' : 'no') . ", is_writable=" . (is_writable($upload_dir) ? 'yes' : 'no'));
    
    echo json_encode([
        "success" => false,
        "message" => $error
    ]);
}