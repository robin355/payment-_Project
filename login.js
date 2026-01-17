document.getElementById('login-btn').addEventListener('click',(event)=>{
    event.preventDefault();
    const accountNumber=document.getElementById("account-number").value;
    const pinNumber=document.getElementById("pin-number").value;
    const pinIntiger=parseInt(pinNumber);
    if(accountNumber.length===11)
    {
        if(pinIntiger==1234)
        {
            window.location.href="./main.html";
        }
        else
        {
            alert('Your Pin Number is not Valid')
        }

    }
    else{
        alert("Your Account Number is not valid");
    }
})