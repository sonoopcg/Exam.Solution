// Store data in localStorage
const users = JSON.parse(localStorage.getItem('users')) || [];

// Toggle between Aspirant and Mentor form
function toggleForm() {
  const userType = document.getElementById("user-type").value;
  document.getElementById("aspirant-details").style.display = userType === "aspirant" ? "block" : "none";
  document.getElementById("mentor-details").style.display = userType === "mentor" ? "block" : "none";
}

// Register user
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

  const details = userType === "aspirant"
    ? {
        studyDetails: document.getElementById("study-details").value,
        universityDetails: document.getElementById("university-details").value
      }
    : {
        companyDetails: document.getElementById("company-details").value,
        position: document.getElementById("position").value,
        experience: document.getElementById("experience").value
      };

  users.push({ userType, fullName, username, email, mobile, password, details });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration successful!");
  showLoginPage();
}

// Show login page
function showLoginPage() {
  document.getElementById("register-page").style.display = "none";
  document.getElementById("login-page").style.display = "block";
}

// Show register page
function showRegisterPage() {
  document.getElementById("register-page").style.display = "block";
  document.getElementById("login-page").style.display = "none";
}

// Login user
function loginUser() {
  const usernameOrEmail = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  const user = users.find(
    (u) =>
      (u.username === usernameOrEmail || u.email === usernameOrEmail) &&
      u.password === password
  );

  if (!user) {
    alert("Invalid credentials!");
    return;
  }

  showProfilePage(user);
}

// Show profile page
function showProfilePage(user) {
  document.getElementById("login-page").style.display = "none";
  document.getElementById("profile-page").style.display = "block";
  document.getElementById("welcome-name").innerText = user.fullName;

  const profiles = users.filter((u) => u.userType !== user.userType);
  const profileList = document.getElementById("profile-list");
  profileList.innerHTML = "";

  profiles.forEach((profile) => {
    const li = document.createElement("li");
    li.innerText = profile.fullName + " - " + JSON.stringify(profile.details);
    profileList.appendChild(li);
  });
}

// Logout
function logout() {
  document.getElementById("profile-page").style.display = "none";
  showLoginPage();
}
