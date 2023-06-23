document.getElementById("card").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Fetch user input values
  var email = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Perform login validation
  if (email === "example1@gmail.com" && password === "password") {
    window.location.href =
      "https://script.google.com/macros/s/AKfycbwyoLDsUrK8SjPW-4_oF-jIjs71mTUU5U_l8DEOzoIJt5BLDB148hj3btz-a1Y0hZ0D/exec"; // Redirect to the provided link
  } else if (email === "example2@gmail.com" && password === "password") {
    window.location.href =
      "https://script.google.com/macros/s/AKfycbwyoLDsUrK8SjPW-4_oF-jIjs71mTUU5U_l8DEOzoIJt5BLDB148hj3btz-a1Y0hZ0D/exec"; // Redirect to the provided link
  } else {
    document.getElementById("errorMessage").innerHTML = "Invalid Username or Password. Please try again.";
    // alert("Invalid email or password. Please try again.");
    var errorMessageElement = document.getElementById("errorMessage");
errorMessageElement.innerHTML = "Invalid Username or Password. Please try again.";
errorMessageElement.style.color = "red";
errorMessageElement.style.fontWeight = "bold";
errorMessageElement.style.fontSize = "16px";
errorMessageElement.style.marginTop = "10px";
  }
});