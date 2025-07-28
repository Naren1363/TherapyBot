const chat = document.getElementById("chat");
const textInput = document.getElementById("textInput");
const sendBtn = document.getElementById("sendBtn");
const emotionDisplay = document.getElementById("emotion").querySelector("span");

// Add message to chat
function addMessage(sender, text) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerText = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

// Dummy bot reply for now
function botReply(userMessage) {
  let reply = "I'm here for you. Tell me more.";
  addMessage("bot", reply);
}

// Send text message
sendBtn.addEventListener("click", () => {
  const text = textInput.value.trim();
  if (text) {
    addMessage("user", text);
    botReply(text);
    textInput.value = "";
  }
});

// Placeholder: Voice recording will go here
document.getElementById("recordBtn").addEventListener("click", () => {
  alert("🎙️ Voice recording feature coming next!");
});
