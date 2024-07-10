// button click 

document.getElementById('login-button').addEventListener('click' , function(){
    // user mail
    const usermail = document.getElementById('user-email');
    const newmail = usermail.value;
// user pass
    const userpass = document.getElementById('user-pass');
    const newpass = userpass.value;
    console.log(newpass)
// condition
    if(newmail === 'mostafizur@gmail.com' && newpass === 'badhon'){
        window.location.href= 'inside.html';
    }else{
        alert('Bokaxxhoda please check valid emali & password')
    }
})