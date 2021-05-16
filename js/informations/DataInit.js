//will be used to inialize data of a player
import Player from '../models/Player.js'
import Compagny from '../models/Compagny.js'

class DataManager
{
    constructor(document, name)
    {
        this.document = document;
        this.player_name = name
        this.compagny = null
    }
    initData()
    {
    //player ignition
    let player = new Player(this.player_name);
    let PlayerData = player.PlayerInfos();
    const prefixs = this.document.getElementsByClassName("prefix")
    //compagny ignition
    this.compagny = new Compagny(player.id)

    for (var i = 0; i < prefixs.length; i++) 
    {
        prefixs[i].innerHTML = this.player_name+"@"+this.compagny.name+":";
    }


    //Informations Tables ignitions
    this.document.getElementById("bugs").innerHTML = this.compagny.balance;
    this.document.getElementById("devs").innerHTML = this.compagny.devs;
    this.document.getElementById("hackers").innerHTML = this.compagny.hackers;
    this.document.getElementById("coeff-att").innerHTML = this.compagny.att_coeff;
    this.document.getElementById("coeff-def").innerHTML = this.compagny.def_coeff;
    this.compagny.check_n_set_restart(this.document);

    }
    return_compagny()
    {
        return this.compagny
    }
}

export {DataManager};