<?php

require "../config/database.php";

session_start();

$userId = $_SESSION["user_id"];

try {
   $stm = $pdo->prepare(
      "SELECT
         s.stock_id,
         s.stock_name,
         s.quantity_inPer,
         s.quantity,
         s.price,
         s.description,
         s.image,
         sh.share_quantity
      FROM stockholders sh
      INNER JOIN stocks s
         ON sh.stock_id = s.stock_id
      WHERE sh.user_id = :user_id"
   );

   $stm->execute([
                 ':user_id' => $userId
   ]);

   $stocks = $stm->fetchAll(PDO::FETCH_ASSOC);

   $result = [];

   foreach ($stocks as $stock) {
      $result[] = [
         "stock_name" => $stock["stock_name"],
         "quantity_inPer" => $stock["quantity_inPer"],
         "quantity" => $stock["quantity"],
         "price" => $stock["price"],
         "description" => $stock["description"],
         "image" => $stock["image"],
         "shareQuantity" => $stock["share_quantity"]
      ];
   }

   if ($result) {
      echo json_encode([
          "success" => true,
          "stocks" => $result
      ]);
   } else {
      echo json_encode([
          "success" => false,
          "message" => "Feld to Fetch Data"
       ]);
   } 
} catch (PDOException $e) {
   echo json_encode([
       "success" => false,
       "message" => "Error: " . $e->getMessage()
   ]);
}
