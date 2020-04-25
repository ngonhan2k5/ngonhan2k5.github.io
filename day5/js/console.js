// define a new console
const test=(function(oldCons){
    return {
        log: function(text){
            oldCons.log.apply(null, arguments);
            document.write("<span>" + text + "</span> -> <span style='color:green; font-weight:bold'>Passed</span><br>");
        },
        info: function (text) {
            oldCons.info.apply(null, arguments);
            document.write("<hr><h4>" + text + "</h4>");
        },
        warn: function (text) {
            oldCons.warn.apply(null, arguments);
            // Your code
        },
        error: function (text) {
            oldCons.error.apply(null, arguments);
            document.write("<span>" + text + "</span> -> <span style='color:red; font-weight:bold'>Failed</span><br>");
            
        },
        assert: function(expression, okMsg, expected){
            let args = Array.prototype.slice.call(arguments, 2);

            if (expression instanceof Array){
                expression = JSON.stringify(expression);
                expected = JSON.stringify(expected);
                console.info(111,expression, expected)
            }
            
            if (expression == expected){
                this.log(okMsg.format(args));
            }else{
                this.error((okMsg).format(args)+ " (actually " + expression + ")");
            }
            
        }
        
    };
}(window.console));

// string format
if (!String.prototype.format) {
    String.prototype.format = function() {
      var args = arguments;
      return this.replace(/{(\d+)}/g, function(match, number) { 
        return typeof args[number] != 'undefined'
          ? args[number] instanceof Array ? JSON.stringify(args[number][0]) : args[number][0]
          : match ;
        ;
      });
    };
  }

//Then redefine the old console
window.console = console;

// document.body.style.fontSize = '2em'

