let deb = 1;

function refresh()
{
    deb += 1;
    document.getElementById("bugs").innerHTML = deb;
}
function launch()
{
setInterval(refresh, 100);
}

export {launch};
