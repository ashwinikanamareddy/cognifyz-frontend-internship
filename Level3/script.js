document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("successMsg").textContent = "";

    let valid = true;

    if (name === "") {
        document.getElementById("nameError").textContent = "Name cannot be empty";
        valid = false;
    }

    if (email === "") {
        document.getElementById("emailError").textContent = "Email required";
        valid = false;
    } else if (!email.includes("@")) {
        document.getElementById("emailError").textContent = "Invalid email format";
        valid = false;
    }

    if (password.length < 6) {
        document.getElementById("passwordError").textContent =
            "Password must be at least 6 characters";
        valid = false;
    }

    if (valid) {
        document.getElementById("successMsg").textContent =
            "🎉 Account created successfully!";
    }
});
