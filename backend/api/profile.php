<?php

require "../config/database.php";

$data = json_decode(file_get_contents("php://input"), true);

$id = $data["id"];
$region = $data["region"];
$city = $data["city"];
$subcity = $data["subcity"];
$woreda = $data['woreda'];
$kebele = $data["kebele"];

try{
    // $stm = $pdp->prepare(
    //     "Insert INTO addresses(region, city, subcity, woreda, kebele)
    //     VALUE (:region, :city, :subcity, :woreda, :kebele)"
    // ); 
    $stm = $pdo->prepare(
        "SELECT * FROM addresses WHERE user_id = :id"
    );

    $stm->execute([
        ':id' => $id
    ]);

    $address = $stm->fetch(PDO::FETCH_ASSOC);

    if(!$address){
        $stm = $pdo->prepare(
            "INSERT INTO addresses(user_id, region, city, subcity, woreda, kebele)
             VALUES (:id, :region, :city, :subcity, :woreda, :kebele)"
        );

        $stm->execute([
            ':id' => $id,
            ':region' => $region,
            ':city' => $city,
            ':subcity' => $subcity,
            ':woreda' => $woreda,
            ':kebele' => $kebele
        ]);

        echo json_encode([
            "success" => true,
            "message" => "Address set",
            "address" => [
                    "region" => $region,
                    "city" => $city,
                    "subcity" => $subcity,
                    "woreda" => $woreda,
                    "kebele" => $kebele
                ]
            ]);
    }else{
        $stm = $pdo->prepare(
                "UPDATE addresses
                SET region = :region,
                city = :city,
                subcity = :subcity,
                woreda = :woreda,
                kebele = :kebele
                WHERE user_id = :id"
            );

        $stm->execute([
            ':id' => $id,
            ':region' => $region,
            ':city' => $city,
            ':subcity' => $subcity,
            ':woreda' => $woreda,
            ':kebele' => $kebele
        ]);
        echo json_encode([
            "success" => true,
            "message" => "Address Updated Successfully!",
            "address" => [
                    "region" => $region,
                    "city" => $city,
                    "subcity" => $subcity,
                    "woreda" => $woreda,
                    "kebele" => $kebele
                ]
        ]);
    }

}catch (PDOException $e) {
    echo json_encode([
        "success" => false,
        "message" => "Error: " . $e->getMessage()
    ]);
}