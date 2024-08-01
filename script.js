function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

document.querySelector('button').addEventListener('click',() => {
    let data=document.querySelector('input').value;
    console.log(data)
    if(validateEmail(data)){
        document.querySelector('h2').innerHTML="valid email"
    }
    else{
        document.querySelector('h2').innerHTML="Invalid email"
    }
})