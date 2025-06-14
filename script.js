async function sendMessage() {
    const input = document.getElementById("userInput").value.toLowerCase();
    const chatbox = document.getElementById("chatbox");
    chatbox.innerHTML += `<p><strong>आप:</strong> ${input}</p>`;

    const response = await fetch("conditions.json");
    const data = await response.json();

    let found = false;

    for (let condition of data) {
        for (let keyword of condition.keywords) {
            if (input.includes(keyword.toLowerCase())) {
                chatbox.innerHTML += `<p><strong>Rakshak AI:</strong> ${condition.response}</p>`;
                found = true;
                break;
            }
        }
        if (found) break;
    }

    if (!found) {
        chatbox.innerHTML += `<p><strong>Rakshak AI:</strong> कृपया अपनी हालत स्पष्ट रूप से बताएं।</p>`;
    }

    document.getElementById("userInput").value = "";
}
