// define a new console
const test=(function(oldCons, document){
    return {
        log: function(text){
            oldCons.log.apply(null, arguments);
            document.write("<span style='color:cyan; font-weight:bold'>" + text + "</span> -> <span style='color:green; font-weight:bold'>Passed</span><br>");
        },
        info: function (text, fname) {
            oldCons.info.apply(null, arguments);
            document.write("<hr><h4 style='color:yellow; font-weight:bold'>" + text + "&nbsp;&nbsp;&nbsp; \
                <button data='"+fname+"' onclick='test.showCode(this)'>Show code</button></h4>");
        },
        warn: function (text) {
            oldCons.warn.apply(null, arguments);
            // Your code
        },
        error: function (text) {
            oldCons.error.apply(null, arguments);
            document.write("<span style='color:cyan; font-weight:bold'>" + text + "</span> -> <span style='color:red; font-weight:bold'>Failed</span><br>");
            
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
            
        },
        showCode: function(that){
            let code = ''
            console.log(that.getAttribute('data'))
            let lst = that.getAttribute('data').split("+")
            for(let i=0; i< lst.length; i++){
                let item = lst[i];
                code += eval(item).toString().replace("function", "function "+ item.split('.')[1])+'\r\n';
            }
            
            alert(code.toString());
            
        }
        
    };
}(window.console, document));

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

