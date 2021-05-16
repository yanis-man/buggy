import * as Refresh from './informations/DataManager.js'
import {DataManager} from './informations/DataInit.js'
import {ApiURL} from './CONFIG.js'


$(document).ready(function(){
    let data = [["Bugs", "Dévs", "Hackers", "Coeff Att", "Coeff Déf"], [0, 0, 0, 0, 0], ["bugs", "devs", "hackers", "coeff-att", "coeff-def"]]
    for(let i=0; i <= data[0].length-1;i++)
    {
        $(".infos").append("<table class=\"info-table\"><tbody><tr><th>"+ data[0][i] +"</th></tr><tr><td id=\""+ data[2][i] +"\">"+ data[1][i] +"</td></tr></tbody></table>")
    }


    let dm = new DataManager(document, "yaxitoo")
    dm.initData()
    document.compagny = dm.return_compagny()


    addEventListener('beforeunload', function(event){
        Refresh.saveData(document)
    })

    //MAIN LOOP
    setInterval(function()
    {
        Refresh.saveData(document)
        Refresh.refresh(document);
    }, 1000);
  });