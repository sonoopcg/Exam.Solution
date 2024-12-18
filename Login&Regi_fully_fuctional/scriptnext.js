const users = JSON.parse(localStorage.getItem("users")) || [];

// Toggle between Aspirant and Mentor forms
function toggleForm() {
  const userType = document.getElementById("user-type").value;
  document.getElementById("study-detail").style.display = userType === "aspirant" ? "block" : "none";
  document.getElementById("mentor-details").style.display = userType === "mentor" ? "block" : "none";
}

// Register a new user
function registerUser() {
  const userType = document.getElementById("user-type").value;
  const fullName = document.getElementById("full-name").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  const userDetails = userType === "aspirant"
    ? {
        courseName: document.getElementById("course-name").value,
        studyYear: document.getElementById("current-study-year").value,
      }
    : {
        company: document.getElementById("company-details").value,
        position: document.getElementById("position").value,
        experience: document.getElementById("experience").value,
        courseName: document.getElementById("course-name").value,
        studyYear: document.getElementById("current-study-year").value,
      };

  const user = { userType, fullName, username, email, mobile, password, userDetails };
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration successful!");
  showLoginPage();
}

// Show Login Page
function showLoginPage() {
  document.getElementById("register-page").style.display = "none";
  document.getElementById("login-page").style.display = "block";
}

// Show Register Page
function showRegisterPage() {
  document.getElementById("login-page").style.display = "none";
  document.getElementById("register-page").style.display = "block";
}

// Login User
function loginUser() {
  const usernameOrEmail = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  const user = users.find(
    (u) =>
      (u.username === usernameOrEmail || u.email === usernameOrEmail) &&
      u.password === password
  );

  if (user) {
    showProfilePage(user);
  } else {
    alert("Invalid credentials!");
  }
}

// Show Profile Page
function showProfilePage(user) {
  document.getElementById("login-page").style.display = "none";
  document.getElementById("profile-page").style.display = "block";
  document.getElementById("welcome-name").textContent = user.fullName;
}

// Logout
function logout() {
  document.getElementById("profile-page").style.display = "none";
  showLoginPage();
}
