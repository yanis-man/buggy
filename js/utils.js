function getURL(url, params)
{
    let result = ""
    var xhr = new XMLHttpRequest();
        xhr.open('POST' , url, false);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

        xhr.onload = function() {
            if(this.status ==200) {
           result = JSON.parse(this.responseText);
            }
        }
        xhr.send(params);
    return result
}
export {getURL};