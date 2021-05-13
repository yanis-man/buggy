export default class Parser
{
    cmd_parser(brut_txt)
    {
    let splited = brut_txt.split(" ");
    let cmd = splited[0];
    let args = splited[1];
    var call = this[cmd](args);
    return call;
    }

    echo(text)
    {
        return text;
    }
}