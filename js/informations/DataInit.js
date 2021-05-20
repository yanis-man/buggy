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
    this.compagny.update_display()

    }
    return_compagny()
    {
        return this.compagny
    }
}

export {DataManager};