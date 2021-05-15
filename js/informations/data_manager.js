import {compagny} from './data_init.js'
let deb = 0
function refresh(document)
{
    deb += 1;
    document.getElementById("bugs").innerHTML = deb;
}
function saveData(document)
{
    let b = document.getElementById('bugs').innerHTML
    let cd = document.getElementById('coeff-def').innerHTML
    let ca = document.getElementById('coeff-att').innerHTML
    let h = document.getElementById('hackers').innerHTML
    let l = compagny.level
    let d = document.getElementById('devs').innerHTML
    let v = compagny.vault //document.getElementById('bugs').val()
    let dr = null
    if(document.getElementById("do-restart").classList.contains('green'))
    {
        dr = 1
    }
    else
    {
        dr = 0
    }

    compagny.update(b,cd,ca,h,l,d,v,dr)
}
export {refresh, saveData};
