const cart = document.querySelector('.cart');
const loginPopup = document.getElementById('loginPopup');
const loginText = document.querySelector(".title-text .login");
         const loginForm = document.querySelector("form.login");
         const loginBtn = document.querySelector("label.login");
         const signupBtn = document.querySelector("label.signup");
         const signupLink = document.querySelector("form .signup-link a");
         signupBtn.onclick = (()=>{
           loginForm.style.marginLeft = "-50%";
           loginText.style.marginLeft = "-50%";
         });
         loginBtn.onclick = (()=>{
           loginForm.style.marginLeft = "0%";
           loginText.style.marginLeft = "0%";
         });
         signupLink.onclick = (()=>{
           signupBtn.click();
           return false;
         });

cart.addEventListener('animationiteration', showLoginPopup);

function showLoginPopup() {
  cart.style.animationPlayState = 'paused';
  loginPopup.style.display = 'block';  
}

function login() {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  // Perform your login validation here (e.g., check if username and password are correct)
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Sample validation (replace it with your own logic)
  if (username === 'admin' && password === 'password') {
    cart.style.animation = 'moveCartRight 4s forwards';
    loginPopup.style.display = 'none';
    setTimeout(function(){
      window.location='second.html';
    },4000);
   
  } else {
    alert('Invalid username or password');
  }
}
