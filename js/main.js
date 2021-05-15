import * as Refresh from './informations/refresh_data.js'

$(document).ready(function(){
    Refresh.launch()
    let data = [["Bugs", "Dévs", "Hackers", "Coeff Att", "Coeff Déf"], [100, 100888, 133444, 134444, 129454], ["bugs", "devs", "hackers", "coeff-att", "coeff-def"]]
    for(let i=0; i <= data[0].length-1;i++)
    {
        $(".infos").append("<table class=\"info-table\"><tbody><tr><th>"+ data[0][i] +"</th></tr><tr><td id=\""+ data[2][i] +"\">"+ data[1][i] +"</td></tr></tbody></table>")
    }
  });