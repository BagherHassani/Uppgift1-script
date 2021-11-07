const firstName= document.getElementById("firstName");
const lastName= document.getElementById("lastName");
const password= document.getElementById("password");
const confirmPassword= document.getElementById("confirmPassword");
const email= document.getElementById("email");
const myForm= document.getElementById("myForm");
const age= document.getElementById("age");
const adressInfo= document.getElementById("adressInfo");
const postnummer= document.getElementById("postnummer");
const errorfirstName = document.getElementById("error-firstName");
const errorconfirmPassword = document.getElementById("error-confirmPassword");

myForm.addEventListener( 'submit', (e) => {
    e.preventDefault()
   

    
})



    function validateform (event, name,minLength = 2){
    const error = document.getElementById(`error-${event.target.id}`)

        if( event.target.value === "")
        error.innerText = `Du måste ange ett namn ${name}`
        else{
            if (event.target.value.length < minLength)
            error.innerText = `${name}et måste vara minst ${minLength} tecken`
            else
            error.innerText =""
        }
    }  
    function compareValeu (password,confirmPassword){
        const error = document.getElementById(`error-${confirmPassword.target.id}`)
        if (password !== confirmPassword.target.value)
        error.innerText = 'Lösenordet måste matchas'
        else
        error.innerText = ""
    }


    firstName.addEventListener("keyup", function (event){
        const namee = "Förnamn"
        validateform(event,namee)
    })
    lastName.addEventListener("keyup", function (event){
        const name = "Efternamn"
        validateform(event,name)
    })

    password.addEventListener("keyup", function (event){
        const name = "Lösenord"
        validateform(event,name, 8)
    })

    confirmPassword.addEventListener("keyup", function (event){
        const password = document.getElementById("password").value
        compareValeu(password,event)
        
    })
    adressInfo.addEventListener("keyup", function (event){
        const adressinfo = "AdressInfo"
        validateform(event,adressinfo, 8)
    })

    postnummer.addEventListener("keyup", function (event){
        const postnumber = "postnummer"
        validateform(event,postnumber, 5)
    })


    function ValidateEmail(input) {
        const error = document.getElementById("error-email")

        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
        if (input.value.match(validRegex)) {
    
        error.innerText =""
    
        return true;
    
        } else {
    
        error.innerText = "Ange ett giltigt mailadress!"
      
        return false;
    
        }
    
    }
    email.addEventListener("keyup", function (event){
    
        ValidateEmail(email,event)
    })


    function ValidateDOB() {
        minAge= document.getElementById("error-age");
 
        //Get the date from the TextBox.
        var dateString = document.getElementById("age").value;
        var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
 
        //Check whether valid dd/MM/yyyy Date Format.
        if (regex.test(dateString)) {
           
            minAge.innerText = "";
            return true;
        } else 
        {  minAge.innerText = "Ange föddelsedatum i denna ordning dd/MM/yyyy."
            return false;
        }
            
           
        
    }
    age.addEventListener("keyup", function (event){
    
        ValidateDOB(age,event)
    })