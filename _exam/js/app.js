/* jshint esversion: 6 */
$(function(){
    "use strict";
    $("#pform").submit(
        function(event) {
            event.preventDefault();
            
            var values = [];
            var $inputs = $('#pform input:not(:radio)');
            $inputs.each(function() {
                values.push($(this).val());

            });
            // get select depart
            values.push($('#pform option:selected').val());
            // get check radio
            values.push($('#pform input:checked').first().val());
            console.log(values);

            console.log('<tr><td>' + values.join('</td><td>') + '</td></tr>');
            $("#tbodyCitizensList").append('<tr><td>' + values.join('</td><td>') + '</td></tr>');

            $("#pform")[0].reset();
        }
    );

    // Show Out-Patients only
    $('#outchk').on('change', function(){
        if(this.checked) {
            $("#tbodyCitizensList tr").each(function(){
                let item = $(this).find('td').last();
                console.log(item.html(),999)
                if (item.html()=='Yes'){
                    $(this).hide();
                }
            });
        }else{
            $("#tbodyCitizensList tr").each(function(){
                $(this).show();
            });
        }
    });
});

// Part 2 Object and inheritant
const Account = {
    accountNumber: null,
    balance: 0.0,
    accountType: null,
    toString: function (){
        return `{ AccountNumber: ${this.accountNumber}, balance: ${this.balance}, AccountType: ${this.accountType} }`;
    }
};

const savingsAccount = Object.create(Account);
savingsAccount.accountNumber = '10001';
savingsAccount.balance = 125000.00;
savingsAccount.accountType = 'Saving';

const checkingAccount = Object.create(Account);
checkingAccount.accountNumber = '10002';
checkingAccount.balance = 75090.50;
checkingAccount.accountType = 'Checking';

// add interest
savingsAccount.addInterest = function (interestRate) {
    this.balance = this.balance * (1+interestRate/100);
};

// deductMaintenanceFee 
checkingAccount.deductMaintenanceFee = function(maintenanceFeeRate) {
    this.balance = this.balance * (1-maintenanceFeeRate/100);
};

// invoke savingsAccount.addInterest 
savingsAccount.addInterest(1.5);

// invoke checkingAccount.addInterest 
checkingAccount.deductMaintenanceFee(10);


// invoke savingsAccount.toString
let result = savingsAccount.toString();
console.log(result);

// invoke savingsAccount.toString
result = checkingAccount.toString();
console.log(result);