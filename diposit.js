document.getElementById('diposit').addEventListener('click' , function(){
    // text fild get value
    const dipositTextfild = document.getElementById('user-diposit');
    const newDipositstring = dipositTextfild.value;
    const newDiposit = parseFloat(newDipositstring);
      dipositTextfild.value = "";
      if(isNaN(newDiposit)){
        alert('please enter a number')
        return;
      }

    // set diposit valu
    const total_dp = document.getElementById('diposit-total');
    const total_dpstring = total_dp.innerText;
    const newtotal_Diposit = parseFloat(total_dpstring);
    const addDiposit = newtotal_Diposit + newDiposit ;
    total_dp.innerText = addDiposit;

    // set total money

    const totalmoney = document.getElementById('money-total');
    const totalmoneystring = totalmoney.innerText;
    const newmoney = parseFloat(totalmoneystring);
    const addmoney = newmoney + newDiposit;
    totalmoney.innerText = addmoney;

})


//  Withdraw start 

document.getElementById('Withdraw').addEventListener('click' , function(){
    const withdrawTextfild = document.getElementById('user-withdraw');
    const newWithdrawstring = withdrawTextfild.value;
    const newWithdraw = parseFloat(newWithdrawstring);
      withdrawTextfild.value = "";
      if(isNaN(newWithdraw)){
        alert('please enter a number')
        return;
      }

    // set withdraw valu
    const total_wd = document.getElementById('withdraw-total');
    const total_wdstring = total_wd.innerText;
    const newtotal_withdraw = parseFloat(total_wdstring);

    // (-) total balence 
    const totalmoney = document.getElementById('money-total');
    const totalmoneystring = totalmoney.innerText;
    const newmoney = parseFloat(totalmoneystring);

    // condition  ................
    if(newWithdraw > newmoney){
        alert('Tor bank e ettoh taka nai ja vag')
        return;
    }

 // set withdraw valu
    const addWithdraw = newtotal_withdraw + newWithdraw ;
    total_wd.innerText = addWithdraw;

 // (-) total balence 
    const addmoney = newmoney - newWithdraw;
    totalmoney.innerText = addmoney;

})