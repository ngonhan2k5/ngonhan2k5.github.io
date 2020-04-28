/*jshint esversion: 6 */
window.onload = function(){
    "use strict";
    const doc = (function(d, w){
        return {
            // get element by Id
            byId: function(id) {
                return d.getElementById(id);
            },
            // add class to element className
            addCls: function(el, cls) {
                if (el == null) return;

                let clss = el.className;
                clss = clss.split(' ').map(e => e.trim());
                
                if (!clss.includes(cls)){
                    clss.push(cls);
                    
                    el.className = clss.filter(e=>e!='').join(' ');
                }
            },
            // remove class from element className
            remCls: function(el, cls) {
                if (el == null) return;

                let clss = el.className;
                clss = clss.split(' ').map(e => e.trim());
                
                if (clss.includes(cls)){
                    el.className = clss.filter(e=>e != cls && e!= '').join(' ');
                }
            },
        };
    })(document, window);

    let msgElement = doc.byId('message');
    let intervalHandle = null;
    // put all of your code here
    let alertHello = function(type){

        let incFontSize = function(){
            let fontSize = msgElement.style.fontSize;
            fontSize = (fontSize==""?12:parseInt(fontSize,10)) + 2 + 'pt';
            msgElement.style.fontSize = fontSize;
        };

        clearInterval(intervalHandle);
        
        switch (type){
            case 'fixed':
                // msg.style.fontSize = "24pt";
                // Unobstrustive
                doc.addCls(msgElement, 'big');
                break;
            case "inc":
                // Increasement bigger
                incFontSize();
                break;
            case "timer":
                intervalHandle = setInterval(incFontSize, 500);
                break;
            default:
                alert('Hello');
        }
    };

    let setBold = function(e){
        console.log(111, e.target.checked);
        // msg.style.fontWeight = (e.target.checked)?'bold':'initial';
        // Unobstrustive
        return (e.target.checked)?doc.addCls(msgElement, 'bold'):doc.remCls(msgElement, 'bold');
    };

    doc.byId('bigger').onclick = function(){
        let type = doc.byId('type').value;
        alertHello(type);
    };
    doc.byId('bling').onchange = setBold;

    doc.byId('igpay_atinlay').onclick = function(){
        let text = msgElement.value;
        // line by line
        text = text.split('\n')
        .map(line=>{
            // word by word
            return line.split(' ')
                // process each word
                .map(word=>{
                        // by pass empty ones
                        // if (/ +/.test(word)||word==""||word=="\n") 
                        if (word.trim()!=word || word == "")
                            return word;

                        // find consonant
                        let i = 0;
                        while('aeiuoAEIUO'.indexOf(word[i]) > 0)
                            i++;
                        // move consonats to backward
                        return word.substring(i) + word.substring(0,i) + '-ay';
                    }
            ).join(' ');
        })
        .join('\n');
        msgElement.value = text;
    };
    doc.byId('malkovitch').onclick = function(){
        let text = msgElement.value;
        // process word using split then map
        text = text.split(' ')
                .map(word=>word.length>=5?'Malkovich':word)
                .join(' ');

        msgElement.value = text;
    };
    
};