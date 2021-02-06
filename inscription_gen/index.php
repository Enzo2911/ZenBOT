<html>
<head>
<link rel="stylesheet" type="text/css" href="./css/index.css"/>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js"> </script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"> </script>
</head>
<?php
include_once('./src/verif.php');
?>
<body>
<div class="container">
    <div class="row">
        <div class="col-md-7">
                <form action="./src/loginverif.php" method="POST" class="box">
                    <h1>Login</h1>
                    <p class="text-muted"> Please enter what you want to add in dbb login and password and capture !</p> 
                    <input type="text" name="user" placeholder="Username" required pattern="^[A-Za-z0-9-_ '-]+$" maxlenght="15"> 
                    <input type="password" name="password" placeholder="Password" required pattern="^\b(?!<).*$(?!>)\b">
                    <input type="text" name="capture" placeholder="Capture" required pattern="^[A-Za-z0-9-_ '-]+$">
                    <select id="choix" name="choix">
                        <option value="molov">Molotov</option>
                        <option value="superu">SuperU</option>
                        <option value="auchan">Auchan</option>
                        <option value="king365">King365</option>
                        <option value="frichti">Frichti</option>
                        <option value="kfc">KFC</option>
                        <option value="delarte">Del Arte</option>
                        <option value="mycanal">MyCanal</option>
                    </select>
                    <input type="submit" name="" value="Login">
                    <?php
                        verif_get();
                    ?>
                </form>
        </div>
    </div>
</div>
</body>
</html>