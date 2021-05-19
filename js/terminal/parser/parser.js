/*
    Commands are added by creation a function into the class Parser, the related function is the name of the command
    Each function will require an argument such as "text", and will need to parse them in order to achieve the command's needs

*/
import { ApiURL } from '../../CONFIG.js';
import * as Commands from '../commands/commands.js'

export default class Parser
{
    //Main functions which calls right function depending on the submitted command
    cmd_parser(brut_txt)
    {
    let splited = brut_txt.split(" ");
    let cmd = splited[0];
    let args = splited.slice(1).join(" ");
    var call = this[cmd](args);
    return call;
    }

    man(args)
    {
        const ManCmd = new Commands.ManCommand();
        return ManCmd.man(args);
    }

    // an example of an available command
    echo(text)
    {
        const EchoCmd = new Commands.EchoCommand();
        return EchoCmd.echo(text)
    }

    reboot(args)
    {
        const RebootCmd = new Commands.RebootCommand();
        return RebootCmd.reboot(args);
    }
    hire(args)
    {
        let splitArgs = args.split(' ')
        if(splitArgs[0] == 'dev' && splitArgs[1] > 0 )
        {
            const HireCmd = new Commands.HireCommand();
            return HireCmd.hire_devs(splitArgs[1])
        }
        else
        {
            return "Y'a un soucis d'arguments"
        }
    }
    apt(args)
    {
        const AptCmd = new Commands.AptCommand();
        return AptCmd.apt(args);
    }


}