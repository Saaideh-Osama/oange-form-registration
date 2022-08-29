function validate() {
  let validMail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
  var emailinput= document.getElementById("emails").value;
  if (emailinput.match(validMail) ){
      document.getElementById("emailmessage").textContent="valid email"
  }
  else { document.getElementById("emailmessage").textContent="email not valid "}
    var number =document.getElementById("phonenum").value
    if (number.length == 10) {
      document.getElementById("phonemessage").textContent =
        "The mobile number is accepted";
    } else if (number.length != 10) {
      document.getElementById("phonemessage").textContent =
        "The mobile must be 10 characters.";
    }
    else if(number.value.length=10){
      document.getElementById("phonemessage").textContent="phone number is valid"
    }
    var password = document.getElementById("pass").value;
    if (password.length < 6 && password.length > 18) {
      document.getElementById("passwordmessage").textContent =
        "The Password should be between 6-18 characters.";
      }
      else if (password.length > 6 && password.length < 18){
          document.getElementById("passwordmessage").textContent = "password is valid"
      }
      
    // signup
      if (emailinput.match(validMail) && number.length==10 && password.length > 6 && password.length < 18){
        let formData = JSON.parse(localStorage.getItem('formData')) || [];
        formData.push({mail:emailinput , pass:password, phone:number});
        localStorage.setItem('formData', JSON.stringify(formData));
        console.log("you're now signed up");
        
      }
    }
    // sign in page 
   
  //  for the password show
  const togglePassword = document.querySelector("#togglePassword");
            const password = document.querySelector("#pass");
  
            togglePassword.addEventListener("click", function () {
                const type = password.getAttribute("type") === "password" ? "text" : "password";
                password.setAttribute("type", type);
  
                this.classList.toggle("bi-eye");
            });

           