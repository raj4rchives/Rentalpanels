const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e){
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const remember = document.getElementById("remember").checked;

  if(!email || !password) return;

  localStorage.setItem("cartywebLoggedIn", "true");

  if(remember){
    localStorage.setItem("cartywebRemember", "true");
  }else{
    localStorage.removeItem("cartywebRemember");
  }

  // Connect this to your real authentication later.
  window.location.href = "dashboard.html";
});
