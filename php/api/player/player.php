<?php
require("../../database.php");
    if(isset($_POST))
    {
        if(isset($_POST['display_name']))
        {
            $db = new Database();
            if($_POST['action'] == "getplayerdata")
            {
                $result = $db->pull("SELECT id from users where usr_display_name=?", array($_POST['display_name']));
                header('Content-Type: application/json');
                echo json_encode(['result' => $result]);
            }
        }
    }
?>
