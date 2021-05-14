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
export {EchoCommand, ManCommand}