$(document).ready(function(){
    let data = [["Bugs", "Dévs", "Hackers", "Coeff Att", "Coeff Déf"], [100, 100888, 133444, 134444, 129454]]
    for(let i=0; i <= data[0].length-1;i++)
    {
        $(".infos").append("<table class=\"info-table\"><tbody><tr><th>"+ data[0][i] +"</th></tr><tr><td>"+ data[1][i] +"</td></tr></tbody></table>")
    }
  });