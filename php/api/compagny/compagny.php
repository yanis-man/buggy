<?php
require("../../database.php");
    if(isset($_POST))
    {
        if(isset($_POST['ceo_id']))
        {
            $db = new Database();
            if($_POST['action'] == "getcompagnydata")
            {
                $result = $db->pull("SELECT * from compagny where comp_ceo=?", array($_POST['ceo_id']));
                header('Content-Type: application/json');
                echo json_encode(['result' => $result]);
            }
            if($_POST['action'] == "updatecompagnydata")
            {
                $db->push("UPDATE compagny SET comp_balance=?, comp_att_coef=?, comp_def_coef=?, comp_hackers=?, comp_level=?, comp_devs=?, comp_vault=?, comp_do_restart=? WHERE comp_ceo=?", array($_POST['balance'], $_POST['att_coef'], $_POST['def_coef'], $_POST['hackers'], $_POST['level'], $_POST['devs'], $_POST['vault'], $_POST['restart'], $_POST['ceo_id']));
                header('Content-Type: application/json');
                echo json_encode(['result' => "ok"]);
            }
        }
    }
?>