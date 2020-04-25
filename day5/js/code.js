"use strict";

const lab5 = {
    // Q1
    max: function(a, b){
        if (a > b)
            return a
        else
            return b
    },
    // Q2
    maxOfThree: function (a, b, c){
        return this.max(this.max(a,b), this.max(b,c))
    },
    // Q3
    isVowel: function (s){
        return "aiueo".indexOf(s) > -1
    },
    // Q4
    sum: function (arr){
        if (!arr)
            return 0;

        let _sum = 0;
        for(let i=0; i< arr.length; i++){
            _sum += arr[i];
        }
        return _sum;
    },
    multiply: function (arr){
        if (!arr)
            return 0;

        let _product = 1;
        for(let i=0; i< arr.length; i++){
            _product *= arr[i];
        }
        return _product;
    },
    // Q5
    reverse: function (s){
        return s.split("").reverse().join("");
    },
    // Q6
    findLongestWord: function(arr){
        if (!arr)
            return 0;

        let maxLen = 0;
        for(let i=0; i< arr.length; i++){
            if (arr[i] && maxLen < arr[i].length){
                maxLen = arr[i].length;
            };
        }
        return maxLen;
    },
    // Q7
    filterLongWords: function(arr, limit){
        if (!arr)
            return [];

        let ret = [];
        for(let i=0; i< arr.length; i++){
            if (arr[i] && arr[i].length> limit){
                ret.push(arr[i]);
            }
        }
        return ret;
    },
    // Q8
    computeSumOfSquares: function(arr){
        if (!arr)
            return 0;

        return arr.reduce((x, y) => x+ y*y, 0);
    },
    // Q9
    printOddNumbersOnly: function(arr){
        if (!arr)
            return [];
        
        return arr.filter(x => x%2==1);
    },
    // Q10
    computeSumOfSquaresOfEvensOnly: function(arr){
        if (!arr)
            return 0;

        return arr.filter(x => x%2==0).reduce((x,y)=> x+y*y, 0)
    },
    // Q11
    reduceSum: function(arr){
        if (!arr)
            return 0;

        return arr.reduce((x,y)=> x+y);
    },
    reduceMultiply: function(arr){
        if (!arr)
            return 0;

        return arr.reduce((x,y)=> x*y);
    },

    findSecondBiggest: function(arr){
        if (!arr)
            return null;

        let max = arr.reduce((x,y)=> x>y?x:y);
        return arr.filter(x=>x!=max).reduce((x,y)=> x>y?x:y);
    },

    printFibo: function(n, a, b){
        let i = 0;
        let ret =[a, b];
        while (ret.length <n){
            ret.push(ret[ret.length-1]+ ret[ret.length-2])
        }
        return ret.filter((v,i)=>i < n).join(", ");
    },
    
}
function testAll(){
    // Test
    // Q1
    test.info('Q1', 'lab5.max');
    test.assert(lab5.max(2,3), 'The max of 2 and 3 is {0}', 3);
    test.assert(lab5.max(4,3), 'The max of 4 and 3 is {0}', 4);
    // Q2
    test.info('Q2', 'lab5.maxOfThree');
    test.assert(lab5.maxOfThree(2,3,1), 'The max of 2, 3 and 1 is {0}', 3);
    test.assert(lab5.maxOfThree(4,3,1), 'The max of 4, 3 and 1 is {0}', 3);
    // Q3
    test.info('Q3', 'lab5.isVowel');
    test.assert(lab5.isVowel('a'), 'a is a vowel', true)
    test.assert(lab5.isVowel('f'), 'f is a vowel', true)
    // Q4
    test.info('Q4', 'lab5.sum+lab5.multiply');
    test.assert(lab5.sum([1,2,3,4,5]) , 'sum of [1,2,3,4,5] is {0}', 15);
    test.assert(lab5.sum([1,2,3,4]) , 'sum of [1,2,3,4] is {0}', 15);
    test.assert(lab5.multiply([1,2,3,4]) , 'multiply of [1,2,3,4] is {0}', 24);
    test.assert(lab5.multiply([1,2,3]) , 'multiply of [1,2,3] is {0}', 6);
    // Q5
    test.info('Q5', 'lab5.reverse');
    test.assert(lab5.reverse("ognel") , 'reverse of "ognel" is {0}', "lengo");
    test.assert(lab5.reverse("jag testar") , 'reverse of "jag testar" is {0}', "ratset gaj");
    // Q6
    test.info('Q6', 'lab5.findLongestWord');
    test.assert(lab5.findLongestWord(["one", "two", "three"]) , 'longest word in ["one", "two", "three"] is {0}', 5);
    // Q7
    test.info('Q7', 'lab5.filterLongWords');
    test.assert(lab5.filterLongWords(["one", "two", "three", "to", "teen"], 3),
        'the filter long word of ["one", "two", "three", "to", "teen"] is {0}',
        ["three", "teen"]
    );
    // Q8
    test.info('Q8 - computeSumOfSquares', 'lab5.computeSumOfSquares');
    test.assert(lab5.computeSumOfSquares([1,2,3]),'with [1,2,3] result is {0}', 14);
    test.assert(lab5.computeSumOfSquares([2,3,4]),'with [2,3,4] result is {0}', 29);
    
    test.info('Q9 - printOddNumbersOnly', 'lab5.printOddNumbersOnly');
    test.assert(lab5.printOddNumbersOnly([1,2,3]),'with [1,2,3] result is {0}', [1,3])
    
    test.info('Q10 - computeSumOfSquaresOfEvensOnly', 'lab5.computeSumOfSquaresOfEvensOnly');
    test.assert(lab5.computeSumOfSquaresOfEvensOnly([1,2,3,4,5]),'with [1,2,3,4,5] result is {0}', 20)
    
    test.info('Q11 - reduceSum and reduceMultiply', 'lab5.reduceSum+lab5.reduceMultiply');
    test.assert(lab5.reduceSum([1,2,3,4,5]) , 'sum of [1,2,3,4,5] is {0}', 15);
    test.assert(lab5.reduceSum([1,2,3,4]) , 'sum of [1,2,3,4] is {0}', 10);
    test.assert(lab5.reduceMultiply([1,2,3,4]) , 'multiply of [1,2,3,4] is {0}', 24);
    test.assert(lab5.reduceMultiply([1,2,3]) , 'multiply of [1,2,3] is {0}', 6);

    test.info('Q12 - findSecondBiggest', 'lab5.findSecondBiggest');
    test.assert(lab5.findSecondBiggest([1,2,3,4,5]) , 'findSecondBiggest of [1..5] is {0}', 4);
    test.assert(lab5.findSecondBiggest([19,9,11,0,12]) , 'findSecondBiggest of [19,9,11,0,12] is {0}', 12);

    test.info('Q13 - findSecondBiggest', 'lab5.findSecondBiggest');
    test.assert(lab5.printFibo(1,0,1) , 'printFibo(2,0,1) is {0}', "0");
    test.assert(lab5.printFibo(2,0,1) , 'printFibo(2,0,1) is {0}', "0, 1");
    test.assert(lab5.printFibo(3,0,1) , 'printFibo(2,0,1) is {0}', "0, 1, 1");
    test.assert(lab5.printFibo(6,0,1) , 'printFibo(2,0,1) is {0}', "0, 1, 1, 2, 3, 5");
    test.assert(lab5.printFibo(10,0,1) , 'printFibo(2,0,1) is {0}', "0, 1, 1, 2, 3, 5, 8, 13, 21, 34");
    
    
}

function renderClock(tag){
    let tick = function(){
        tag.innerHTML = timeString();
    }
    function timeString(){
        let today = new Date(),
            d = today.getDate(),
            M = today.getMonth(),
            y = today.getFullYear(),
            h = today.getHours(),
            m = today.getMinutes(),
            s = today.getSeconds();

        m = m<10?"0"+m:m;
        s = s<10?"0"+s:s;

        return `${y}-${M}-${d} ${h}:${m}:${s}`;

    }

    if (tag)
        setInterval(tick, 1000);

}

window.onload = function(){
    let tag = document.getElementById('clock');
    this.renderClock(tag);
}