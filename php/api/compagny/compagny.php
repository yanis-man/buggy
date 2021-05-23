<?php
require("../../database.php");

    if(isset($_POST))
    {
        $db = new Database();
        if(isset($_POST['ceo_id']))
        {
            if($_POST['action'] == "getcompagnydata")
            {
                $result = $db->pull("SELECT * from compagny where comp_ceo=?", array($_POST['ceo_id']));
                header('Content-Type: application/json');
                echo json_encode(['result' => $result]);
            }
            if($_POST['action'] == "updatecompagnydata")
            {
                $db->push("UPDATE compagny SET comp_balance=?, comp_reward=?, comp_att_coef=?, comp_def_coef=?, comp_hackers=?, comp_level=?, comp_devs=?, comp_vault=?, comp_do_restart=? WHERE comp_ceo=?", array($_POST['balance'], $_POST['reward'], $_POST['att_coef'], $_POST['def_coef'], $_POST['hackers'], $_POST['level'], $_POST['devs'], $_POST['vault'], $_POST['restart'], $_POST['ceo_id']));
                header('Content-Type: application/json');
                echo json_encode(['result' => "ok"]);
            }
        }
        if($_POST['action'] == "getitem")
        {
            if(isset($_POST['item_id']))
            {
                $result = $db->pull("SELECT * FROM items WHERE id=?", array($_POST['item_id'])); 
                header('Content-Type: application/json');
                echo json_encode(['result' => $result]);
            }
            else
            {
                $result = $db->pull("SELECT * FROM items", array()); 
                header('Content-Type: application/json');
                echo json_encode(['result' => $result]);
            }
        }
        if($_POST['action'] == "updatevault")
        {
            $result = $db->pull("SELECT comp_vault FROM compagny WHERE id=?", array($_POST['comp_id']));
            $actual_vault = $result[0][0];
            $purchased_items = explode(",", $actual_vault);
            
            $isDoubledItem = false;

            foreach($purchased_items as $item)
            {
                if($item == $_POST['new_item'])
                {
                    $isDoubledItem = true;
                    header('Content-Type: application/json');
                    echo json_encode(['result' => 'already', 'vault' => $actual_vault]);
                    break;
                }
            }
            if(!$isDoubledItem)
            {
                $new_vault = $result[0][0]."".$_POST['new_item'].",";
                $db->push("UPDATE compagny SET comp_vault = ?, comp_modifier=?", array($new_vault, $_POST['new_modifier']));

                header('Content-Type: application/json');
                echo json_encode(['result' => $new_vault]);
            }


        }
    }
?>