
import {ApiURL} from '../CONFIG.js'
import {getURL} from '../utils.js'

class Player
{
    constructor(name)
    {
        var info = getURL(ApiURL.PLAYER_URL, "display_name="+name+"&action=getplayerdata")['result'][0];
        this.id = info['id']
    }
    PlayerInfos()
    {
        let PlayerEP = ApiURL.PLAYER_URL;
        var params = "display_name="+this.name+"&action=getplayerdata";
        return getURL(PlayerEP, params)
    }
}
export default Player;