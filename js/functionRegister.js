
//Register Button
//let ButtonRegister =  document.querySelector('.registrar-btn');

//Form Register
let formRegister = document.querySelector('#register');

//event click and form submit login
    formRegister.addEventListener('submit',()=>{
        register_user();
    })

//function register user browser local storage. 
function register_user(){

    let input_Name_User = document.querySelector('.register-name').value;
    let input_Email_User = document.querySelector('.register-email').value;
    let input_Password_User = document.querySelector('.register-password').value;

//Object User login

    let UserOjectName = {
        "name":input_Name_User
    }
    let UserOjectEmail = {
        "email":input_Email_User
    }
    let UserOjectPassword = {
        "password":input_Password_User
    }
    
//browser local storage => OBJECT - Name,Email,Password
    localStorage.setItem("userLoginName",JSON.stringify(UserOjectName));
    
    localStorage.setItem("userLoginEmail",JSON.stringify(UserOjectEmail));

    localStorage.setItem("userLoginPassword",JSON.stringify(UserOjectPassword));
    
    localStorage.removeItem('recentImage');

//function js/function.js
//    window.login();

    function activePopupRegisterSuccess(){

        let popupSuccess = document.querySelector('.popup-success');
                popupSuccess.style.display = 'flex';

            //Disable  Popup
            let ButtonExitPopupSuccess = document.querySelector('.exit_popup_success');

            ButtonExitPopupSuccess.addEventListener('click',()=>{
                    popupSuccess.style.display = 'none';
                })

    }
    activePopupRegisterSuccess();
}