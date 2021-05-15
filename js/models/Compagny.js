import {ApiURL} from '../CONFIG.js'
import { compagny } from '../informations/data_init.js';
import {getURL} from '../utils.js'

class Compagny
{
    constructor(ceo_id)
    {
        let info = getURL(ApiURL.COMP_URL, "ceo_id="+ceo_id+"&action=getcompagnydata")['result'][0]

        this.id = info[0];
        this.name = info[1];
        this.balance = info[2];
        this.ceo = info[3];
        this.att_coeff = info[4]
        this.def_coeff = info[5];
        this.hackers = info[6];
        this.level = info[7];
        this.devs = info[8];
        this.vault = info[9];
        this.creation = info[10];
        this.do_restart = info[11];
    }
    update(balance, att_coeff, def_coeff, hackers, level, devs, vault, do_restart)
    {
        let params = "balance="+balance+"&att_coef="+att_coeff+"&def_coef="+def_coeff+"&hackers="+hackers+"&level="+level+"&devs="+devs+"&vault="+vault+"&restart="+do_restart+"&ceo_id="+this.ceo+"&action=updatecompagnydata"
        getURL(ApiURL.COMP_URL, params)
    }
}

export default Compagny