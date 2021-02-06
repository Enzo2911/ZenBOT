<?php

function verif_get() {
    if(isset($_GET['error'])) {
        $err = $_GET['error'];
        if($err==1) {
            echo "<center> <p style='color:red'>User Vide</p> </center>";
        }
    }
    if(isset($_GET['succes'])) {
        $succes = $_GET['succes'];
        if($succes==1)
            echo "<center <p style='color:green'>Enregistré dans la DB</p> </center>";
    }
}

?>