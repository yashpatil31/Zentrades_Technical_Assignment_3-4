window.addEventListener("load", () => {
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", loginFormSubmit);

  function loginFormSubmit(event) {
    event.preventDefault();

    let loginFlag = true;

    const username = loginForm.username;
    const password = loginForm.password;

    const emailRegex = /^[a-zA-Z0-9+.]+@[a-zA-Z0-9.]+$/;
    if (!emailRegex.test(username.value)) {
      username.classList.add("border-danger");
      username.value = "";
      username.placeholder = "Please Enter Valid Username";
      loginFlag = false;
    } else {
      username.classList.remove("border-danger");
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]+$/;
    if (!passwordRegex.test(password.value)) {
      password.classList.add("border-danger");
      password.value = "";
      password.placeholder = "Please Enter Valid Password";
      loginFlag = false;
    } else {
      password.classList.remove("border-danger");

      const givenPassword = "SmartServTest@123";
      if (givenPassword !== password.value) {
        password.classList.add("border-danger");
        password.value = "";
        password.placeholder = "Please Enter Valid Password";
        loginFlag = false;
      }
    }

    if (loginFlag) {
      loginForm.submit();
    }
  }
});
