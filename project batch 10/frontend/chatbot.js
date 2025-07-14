function sendMessage() {
    const inputBox = document.getElementById("user-input");
    const message = inputBox.value.trim();
    if (!message) return;
  
    displayMessage(message, "user");
    inputBox.value = "";
  
    fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: message })
    })
      .then(res => res.json())
      .then(data => {
        displayMessage(data.reply, "bot");
      })
      .catch(err => {
        displayMessage("Error: Could not connect to server.", "bot");
      });
  }
  
  function displayMessage(text, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.innerText = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  