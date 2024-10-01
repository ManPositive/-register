
        function validateForm() {
            var firstName = document.getElementById("first-name").value;
            var lastName = document.getElementById("last-name").value;
            var email = document.getElementById("email").value;
            var gender = document.querySelector('input[name="gender"]:checked');
            var phone = document.getElementById("phone").value;
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            var confirmPassword = document.getElementById("confirm-password").value;
            var bio = document.getElementById("bio").value;
            var yearsOfExp = document.getElementById("years-of-exp").value;
            var category = document.querySelector('input[name="category"]:checked');

            if (firstName === "") {
                alert("Please enter your first name.");
                return false;
            }

            if (lastName === "") {
                alert("Please enter your last name.");
                return false;
            }

            if (email === "") {
                alert("Please enter your email.");
                return false;
            }

            if (!gender) {
                alert("Please select your gender.");
                return false;
            }

            if (phone === "") {
                alert("Please enter your phone number.");
                return false;
            }

            if (username === "") {
                alert("Please enter a preferred username.");
                return false;
            }

            if (password === "") {
                alert("Please enter a password.");
                return false;
            }

            if (confirmPassword === "") {
                alert("Please confirm your password.");
                return false;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return false;
            }

            if (bio === "") {
                alert("Please enter your bio.");
                return false;
            }

            if (yearsOfExp === "") {
                alert("Please enter your years of experience.");
                return false;
            }

            if (!category) {
                alert("Please select a category.");
                return false;
            }

            return true;
        }
  document.getElementById('passwordField').addEventListener('input', function() {
    var password = this.value;
    if (password.length > 20) {
      this.value = password.slice(0, 20);
    }
    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
      // Display an error message or take appropriate action
    }
  });

