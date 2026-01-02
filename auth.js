function register() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
  
    if (user === "" || pass === "") {
      alert("Username & Password required");
      return;
    }
  
    localStorage.setItem("regUser", user);
    localStorage.setItem("regPass", pass);
  
    alert("Register successful");
    window.location.href = "login.html";
  }
  
  function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;
  
    let savedUser = localStorage.getItem("regUser");
    let savedPass = localStorage.getItem("regPass");
  
    if (user === savedUser && pass === savedPass) {
      localStorage.setItem("loggedUser", user);
      window.location.href = "dashboard.html";
    } else {
      alert("Username or Password invalid");
    }
  }
  