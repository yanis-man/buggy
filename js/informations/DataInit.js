//will be used to inialize data of a player
import Player from '../models/Player.js'
import Compagny from '../models/Compagny.js'

class DataManager
{
    constructor(document, name)
    {
        document = document;
        this.player_name = name
        this.compagny = null
    }
    initData()
    {
    //player ignition
    let player = new Player(this.player_name);
    let PlayerData = player.PlayerInfos();
    const prefixs = document.getElementsByClassName("prefix")
    //compagny ignition
    this.compagny = new Compagny(player.id)

    for (var i = 0; i < prefixs.length; i++) 
    {
        prefixs[i].innerHTML = this.player_name+"@"+this.compagny.name+":";
    }


    //Informations Tables ignitions
    document.getElementById("bugs").innerHTML = this.compagny.balance;
    document.getElementById("devs").innerHTML = this.compagny.devs;
    document.getElementById("hackers").innerHTML = this.compagny.hackers;
    document.getElementById("coeff-att").innerHTML = this.compagny.att_coeff;
    document.getElementById("coeff-def").innerHTML = this.compagny.def_coeff;
    this.compagny.check_n_set_restart();

    }
    return_compagny()
    {
        return this.compagny
    }
}

export {DataManager};