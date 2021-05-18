
function refresh(document)
{
    let current_balance = document.compagny.balance
    document.getElementById('bugs').innerHTML = Number(current_balance) + document.compagny.reward;
    saveData(document)
    document.compagny.update_display(document)
}
function saveData(document)
{
    let b = document.getElementById('bugs').innerHTML
    let cd = document.getElementById('coeff-def').innerHTML
    let ca = document.getElementById('coeff-att').innerHTML
    let h = document.getElementById('hackers').innerHTML
    let l = document.compagny.level
    let d = document.getElementById('devs').innerHTML
    let v = document.compagny.vault //document.getElementById('bugs').val()
    let dr = null
    if(document.getElementById("do-restart").classList.contains('green'))
    {
        dr = 1
    }
    else
    {
        dr = 0
    }

    document.compagny.update(b,cd,ca,h,l,d,v,dr, document.compagny.reward)
}
export {refresh, saveData};
