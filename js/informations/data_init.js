//will be used to inialize data of a player
import Player from '../models/Player.js'
import Compagny from '../models/Compagny.js'

let compagny = null

function initData(document, name)
{
    //player ignition
    let player = new Player(name);
    let PlayerData = player.PlayerInfos();
    const prefixs = document.getElementsByClassName("prefix")
    //compagny ignition
    compagny = new Compagny(player.id)
    for (var i = 0; i < prefixs.length; i++) 
    {
        prefixs[i].innerHTML = name+"@"+compagny.name+":";
    }


    //Informations Tables ignitions
    document.getElementById("devs").innerHTML = compagny.devs;
    document.getElementById("hackers").innerHTML = compagny.hackers;
    document.getElementById("coeff-att").innerHTML = compagny.att_coeff;
    document.getElementById("coeff-def").innerHTML = compagny.def_coeff;
    if(compagny.do_restart == 1)
    {
        document.getElementById("do-restart").innerHTML = "Redémarrées";
    }
    else
    {
        document.getElementById("do-restart").innerHTML = "Non redémarrées";
        document.getElementById("do-restart").classList.add("orange");
    }

}

export {initData, compagny};