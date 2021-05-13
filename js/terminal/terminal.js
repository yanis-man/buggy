import Parser from './parser/commands.js'
$(document).ready(function(){
    $('.cmd-input').keypress(function(event){
        let PARSER = new Parser();
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            let cmd_out = PARSER.cmd_parser($(this).val());
           $(".terminal-out").append("<div class=\"sub-cmd\"><div class=\"submited-cmd row\"><div class=\"prefix\"> yanis@buggy:</div>~$ "+ $(this).val() +"</div><div class=\"cmd-return\">"+ cmd_out +"</div></div>");
           $(this).val('');
        }
    });
  });