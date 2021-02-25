<?php
$file = '../../settings/configPHP.json"'; 
$data = file_get_contents($file); 
$config = json_decode($data); 

$host=$config[0]->host;
$bd=$config[0]->db;
$login=$config[0]->user;
$password=$config[0]->pass;

try {
     $pdo = new PDO('mysql:host='.$host.';dbname=zenzenbot', "zenbot", "rYQHzkoj0R5oIZU6");
     $pdo = new PDO('mysql:host='.$host.';dbname='.$bd, $login, $password);
     $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
     $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
}

catch (Exception $e) {
     die ($e -> getMessage());
}

global $pdo;

?>
