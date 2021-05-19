import {ApiURL} from '../CONFIG.js'
import {getURL} from '../utils.js'

class Compagny
{
    constructor(ceo_id)
    {
        let info = getURL(ApiURL.COMP_URL, "ceo_id="+ceo_id+"&action=getcompagnydata")['result'][0]

        this.id = info['id'];
        this.name = info['comp_display_name'];
        this.balance = Number(info['comp_balance']);
        this.ceo = info['comp_ceo'];
        this.att_coeff = parseFloat(info['comp_att_coef'])
        this.def_coeff = parseFloat(info['comp_def_coef']);
        this.hackers = Number(info['comp_hackers']);
        this.level = Number(info['comp_level']);
        this.devs = Number(info['comp_devs']);
        this.reward = Number(info['comp_reward'])
        this.vault = info['comp_vault'];
        this.creation = info['comp_creation'];
        this.do_restart = Number(info['comp_do_restart']);

    }
    update(balance, att_coeff, def_coeff, hackers, level, devs, vault, do_restart, reward)
    {
        let params = "balance="+balance+"&att_coef="+att_coeff+"&def_coef="+def_coeff+"&hackers="+hackers+"&level="+level+"&devs="+devs+"&vault="+vault+"&restart="+do_restart+"&ceo_id="+this.ceo+"&reward="+ reward +"&action=updatecompagnydata"
        getURL(ApiURL.COMP_URL, params)

        this.balance = balance;
        this.att_coeff = att_coeff
        this.def_coeff = def_coeff;
        this.hackers = hackers;
        this.level = level;
        this.devs = devs;
        this.vault = vault;
        this.do_restart = vault;
        this.dev_price = this.compute_dev_price()
    }
    update_display()
    {
        document.getElementById('bugs').innerHTML = this.balance
        document.getElementById('coeff-def').innerHTML = this.att_coeff
        document.getElementById('coeff-att').innerHTML = this.def_coeff
        document.getElementById('hackers').innerHTML = this.hackers
        document.getElementById('devs').innerHTML = this.devs
        document.getElementById('bug-prod').innerHTML = this.reward
        document.getElementById('dev-price').innerHTML = this.compute_dev_price()

        this.check_n_set_restart();

    }
    check_n_set_restart()
    {
        if(this.do_restart == 0)
        {
            document.getElementById("do-restart").innerHTML = "Non redémarrées";
            document.getElementById("do-restart").classList.add("orange");
        }
        else
        {
            document.getElementById("do-restart").innerHTML = "Redémarrées";
            document.getElementById("do-restart").classList.add("green");
        }
    }
    hire_devs(quantity)
    {
        let actual_devs = Number(this.devs)
        let price = Math.ceil( (15*Math.sqrt((actual_devs+2)))*quantity )
        console.log(price)
        if(!this.check_balance(price))
        {
            return false
        }
        else
        {
            console.log("apres if")
        let actual_dev = this.devs;
        this.devs = Number(actual_dev) + Number(quantity);
        let actual_b = this.balance;
        this.balance = actual_b - price;

        this.compute_new_reward()
        this.update(this.balance, this.att_coeff, this.def_coeff, this.hackers, this.level, this.devs, this.vault, this.do_restart, this.reward)
        this.update_display()
        
        return true
        }
    }
    compute_new_reward()
    {
        let new_reward = (this.devs*0.5+2)
        this.reward = Math.floor(new_reward);
    }
    compute_dev_price()
    {
        let devs = Number(this.devs)
        return Math.ceil( (15*Math.sqrt((devs+2))))
    }
    check_balance(cost)
    {
        if(this.balance - cost < 0)
        {
            return false
        }
        else
        {
            return true
        }
    }
}

export default Compagny