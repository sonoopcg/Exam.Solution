// Toggle Dropdown Menu
function toggleMenu() {
  const menu = document.getElementById('dropdown-menu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Search Bar Functionality
function search() {
  const query = document.getElementById('search-bar').value.trim();
  if (query) {
      alert(`Searching for: ${query}`);
  } else {
      alert('Please enter a search term.');
  }
}

function profile_setting() {
  alert('Profile Settings');
}

function exam_dashboard() {
  alert('Exam Dashboard');
}

function mock_test_details() {
  alert('Mock Test Details');
}

function progress_report() {
  alert('Progress Report');
}

  
  // Add Exam Functionality
  function addExam() {
    const exam = document.getElementById('exam-list').value;
    alert(`Exam "${exam}" has been added to your list.`);
  }
  
  // Show All Mentor Profiles
  function showAllProfiles() {
    alert('Redirecting to all mentor profiles...');
  }
  
  // Start Mock Test Functionality
  function startMockTest() {
    alert('Starting All India Mock Test...');
  }
  
  // Add New Portfolio
  function addNewPortfolio() {
    alert('Adding a new exam portfolio...');
  }
  
  // Update Profile
  function updateProfile() {
    alert('Profile updated successfully!');
  }
  
  // Chatbot Functionality
  function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatWindow = document.getElementById('chat-window');
    const userMessage = chatInput.value.trim();
  
    if (userMessage) {
      // Append user's message
      const userMessageElement = document.createElement('p');
      userMessageElement.textContent = `You: ${userMessage}`;
      userMessageElement.style.color = "blue";
      chatWindow.appendChild(userMessageElement);
  
      // Append bot's response
      const botMessageElement = document.createElement('p');
      botMessageElement.textContent = "Bot: I'm here to help! Please ask your question.";
      botMessageElement.style.color = "green";
      chatWindow.appendChild(botMessageElement);
  
      // Scroll chat to the bottom
      chatWindow.scrollTop = chatWindow.scrollHeight;
  
      // Clear input
      chatInput.value = '';
    } else {
      alert('Please type a message before sending.');
    }
  }
  