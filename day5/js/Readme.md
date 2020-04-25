# Simple unit test

## Download and include test.js
## Using:
## Result is single value:
    test.info('Q1', 'lab5.max');
    test.assert(lab5.max(2,3), 'The max of 2 and 3 is {0}', 3);
    test.assert(lab5.max(4,3), 'The max of 4 and 3 is {0}', 4);
## Result maybe an array:
    test.info('Q9 - printOddNumbersOnly', 'lab5.printOddNumbersOnly');
    test.assert(lab5.printOddNumbersOnly([1,2,3]),'with [1,2,3] result is {0}', [1,3])
## Result: output inline and console.log, see samle [here](https://ngonhan2k5.github.io/day5/)
