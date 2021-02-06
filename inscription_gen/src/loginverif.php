<?php

include_once('./connexion.php');
include_once('./verif.php');

$user = valid_donnees($_POST["user"]);
$pass = valid_donnees($_POST["password"]);
$capture = valid_donnees($_POST["capture"]);
$choix = $_POST["choix"];
$choix1 = "gen$choix";
echo $choix;
function valid_donnees($donnees){
    $donnees = trim($donnees);
    $donnees = htmlentities($donnees);
    $donnees = htmlspecialchars($donnees);
return $donnees;
}

if (empty($user)) {
    header('Location: ../index.php');
} else {
    try {
        global $pdo;
        $stmt = $pdo -> prepare("INSERT INTO $choix1 (user, pass, capture) VALUES (:user, :pass, :capture)");
        $stmt -> bindParam(':user', $user);
        $stmt -> bindParam(':capture', $capture);
        $stmt -> bindParam(':pass', $pass);
        $stmt -> execute();
        header('Location: ../index.php?succes=1');       
    } catch(PDOException $e){
       echo $e;
    }
} 
?>