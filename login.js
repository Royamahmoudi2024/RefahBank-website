const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if(username && password){
      alert("ورود موفق!"); // فقط نمونه
  } else {
      alert("لطفا نام کاربری و رمز عبور را وارد کنید");
  }
});