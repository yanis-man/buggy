import {MAN_DATA} from './man.js'

class EchoCommand
{
    echo(txt)
    {
        return txt;
    }
}
class ManCommand
{
    man(args)
    {
        return MAN_DATA[args];
    }

}

class RebootCommand
{
    reboot(args)
    {
        let text = "J'ai reboot batard"
        return text
    }
}

class HireCommand
{
    hire_devs(args)
    {
        let q = Number(args)
        if(!document.compagny.hire_devs(q))
        {
            let text = "Recrutement impossible"
            return text
        }
        let text = "Recrutement de: "+q+" devs";
        return text
    }
}

export {EchoCommand, ManCommand, RebootCommand, HireCommand}