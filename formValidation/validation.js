function validate(){
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('error_name');
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('error_email');
    const message = document.getElementById('message').value;
    const messageError = document.getElementById('error_message');

    console.log(name);
    const patternName = /[\w\s\][,][0-9]/gi;

    if(name.length<=3){
        nameError.innerHTML = "Name Must be 3 or more character longer"
        return false;
    }else{
        nameError.innerHTML="";
    }

    if(patternName.test(name)){
        nameError.innerHTML = "Name Cannot contain any Numbers and special charcters";    
        return false;
    }else{
        nameError.innerHTML = "";
    }

    if(email==""||email==null){
        emailError.innerHTML = "email Must be Filled"
        return false;
    }else{
        emailError.innerHTML = "";
    }
    
    if(email.includes("@"&&".com")){
        emailError.innerHTML="";
    }else{
        emailError.innerHTML = "email Must contain @ and .com"
        return false;
    }
    if(message==""||message==null){
        messageError.innerHTML = "message Must be Filled" 
        return false;
    }else{
        messageError.innerHTML = "";
    }

    if(message.length <= 4){
       
        messageError.innerHTML = "message Must greater than 4 character Long" 
        return false;
    }else{
        messageError.innerHTML = ""; 
    }

    SendMail();

    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('subject').value='';
    
    console.log("done")

  return true;
}