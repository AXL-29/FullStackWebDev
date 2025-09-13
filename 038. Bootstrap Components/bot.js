document.addEventListener("DOMContentLoaded", () => {
  const widget = document.getElementById("chat-widget");
  const header = document.getElementById("chat-header");
  const messages = document.getElementById("chat-messages");
  const input = document.getElementById("chat-input");

  // Toggle open/close chat
  header.addEventListener("click", () => {
    widget.classList.toggle("open");
  });

  // Handle user input
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && input.value.trim() !== "") {
      const userMsg = input.value.trim();
      addMessage("user", userMsg);
      input.value = "";
      setTimeout(() => botReply(userMsg), 500);
    }
  });

  function addMessage(sender, text) {
    const msg = document.createElement("div");
    msg.className = sender;
    msg.textContent = text;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

  function botReply(userMsg) {
    let reply = "I'm not sure I understand 🤔";
    if (userMsg.toLowerCase().includes("hello")) reply = "Hi there! 👋";
    else if (userMsg.toLowerCase().includes("quote"))
      reply = "You can get a quote by clicking 'Get a Quote' above ⬆️";
    else if (userMsg.toLowerCase().includes("services"))
      reply = "We offer moving, packing, and storage services 📦🚚";
    else if (userMsg.toLowerCase().includes("bye")) reply = "Goodbye! 👋";

    addMessage("bot", reply);
  }
});
