// Complete Medical Database
const medicalDatabase = {
    // 1. Blood Pressure
    "high bp": {
        hindi: "हाई बीपी",
        advice: "दवा समय पर लें। नमक कम खाएं। रोज 30 मिनट टहलें।",
        avoid: "तला हुआ खाना, अधिक नमक, तनाव से बचें",
        emergency: "सीने में दर्द/सांस लेने में तकलीफ हो तो तुरंत डॉक्टर को दिखाएं"
    },
    "low bp": {
        hindi: "लो बीपी",
        advice: "नमकीन बिस्कुट खाएं। पानी अधिक पिएं। छोटे-छोटे अंतराल पर खाएं।",
        avoid: "एकदम से न उठें, देर तक खड़े न रहें",
        emergency: "बेहोशी आए तो तुरंत लेट जाएं और पैर ऊपर उठाएं"
    },

    // 2. Cholesterol
    "high cholesterol": {
        hindi: "हाई कोलेस्ट्रॉल",
        advice: "ओट्स, नट्स, हरी सब्जियां खाएं। रोज 45 मिनट वॉक करें।",
        avoid: "तला खाना, रेड मीट, फास्ट फूड",
        emergency: "सीने में दर्द हो तो तुरंत जांच करवाएं"
    },
    "low cholesterol": {
        hindi: "लो कोलेस्ट्रॉल",
        advice: "अंडे की जर्दी, घी संतुलित मात्रा में लें। डॉक्टर से विटामिन चेक करवाएं।",
        avoid: "फैट पूरी तरह न छोड़ें",
        emergency: "बहुत कम होने पर ही आपातकाल"
    },

    // 3. Heart & Chest
    "heart attack": {
        hindi: "हार्ट अटैक",
        advice: "एस्पिरिन की गोली चबाएं। शांत बैठें।",
        avoid: "हिलें-डुलें नहीं, खुद गाड़ी न चलाएं",
        emergency: "तुरंत एम्बुलेंस बुलाएं (102 डायल करें)"
    },
    "chest pain": {
        hindi: "सीने में दर्द",
        advice: "गहरी सांस लें। अगर अस्थमा है तो इनहेलर यूज करें।",
        avoid: "धूम्रपान, भारी एक्सरसाइज",
        emergency: "15 मिनट से ज्यादा दर्द हो तो तुरंत अस्पताल जाएं"
    },
     // Diabetes (New Addition)
    "diabetes": {
        hindi: "मधुमेह",
        advice: "नियमित ब्लड शुगर चेक करें। दवा/इंसुलिन समय पर लें। हरी सब्जियां खाएं।",
        avoid: "चीनी, मिठाई, सफेद चावल, प्रोसेस्ड फूड",
        emergency: "चक्कर आए या बेहोशी हो तो तुरंत ग्लूकोज लें"
    },
    // 4. Pain Related
    "back pain": {
        hindi: "कमर दर्द",
        advice: "गर्म पानी की बोतल से सिकाई करें। सीधे लेटें।",
        avoid: "भारी सामान न उठाएं, झुककर न बैठें",
        emergency: "पैरों में कमजोरी या सुन्नपन हो तो MRI करवाएं"
    },
    "muscle pain": {
        hindi: "मांसपेशियों में दर्द",
        advice: "हल्की मालिश करें। मैग्नीशियम युक्त खाना खाएं।",
        avoid: "भारी वर्कआउट, ठंडी हवा के संपर्क में आना",
        emergency: "दर्द 1 हफ्ते से ज्यादा रहे तो डॉक्टर को दिखाएं"
    },

    // 5. Stomach Issues
    "stomach pain": {
        hindi: "पेट दर्द",
        advice: "गर्म पानी की बोतल से सिकाई करें। हींग-अजवाइन का पानी पिएं।",
        avoid: "तेल-मसालेदार खाना, ठंडा पानी",
        emergency: "दर्द बहुत तेज हो या 24 घंटे से ज्यादा रहे तो डॉक्टर को दिखाएं"
    },
    "indigestion": {
        hindi: "अपच",
        advice: "अदरक की चाय पिएं। छाछ या सौंफ का पानी लें।",
        avoid: "भारी खाना, सोने से ठीक पहले खाना",
        emergency: "उल्टी/दस्त बंद न हो तो अस्पताल जाएं"
    },

    // 6. Fever/Cold
    "fever": {
        hindi: "बुखार",
        advice: "पेरासिटामोल लें। ठंडे पानी की पट्टी रखें। भरपूर आराम करें।",
        avoid: "ठंडा पानी, एसी के सामने बैठना",
        emergency: "103°F से ज्यादा बुखार या 3 दिन से ज्यादा रहे तो डॉक्टर को दिखाएं"
    },
    "cold": {
        hindi: "सर्दी-जुकाम",
        advice: "गर्म पानी से भाप लें। अदरक-शहद की चाय पिएं।",
        avoid: "आइसक्रीम, ठंडी चीजें",
        emergency: "सांस लेने में तकलीफ हो तो अस्पताल जाएं"
    },

    // 7. Thyroid
    "thyroid": {
        hindi: "थायराइड",
        advice: "नियमित दवा लें। डॉक्टर के निर्देशानुसार जांच करवाएं।",
        avoid: "सोया प्रोडक्ट्स (अगर हाइपोथायरॉइडिज्म है)",
        emergency: "वजन तेजी से घटे/बढ़े तो जांच करवाएं"
    },

    // 8. Fainting
    "faint": {
        hindi: "बेहोशी",
        advice: "लेट जाएं। पैर ऊपर उठाएं। होश में आने पर ORS या नींबू पानी पिएं।",
        avoid: "एकदम से खड़े न हों, धूप में ज्यादा न रहें",
        emergency: "5 मिनट से ज्यादा बेहोश रहें तो अस्पताल ले जाएं"
    }
};

function processInput() {
    const input = document.getElementById("userInput").value.toLowerCase();
    const chatbox = document.getElementById("chatbox");
    
    // Show user message
    chatbox.innerHTML += `<div class="user-msg">You: ${input}</div>`;
    
    // Find matching condition
    let found = false;
    for (const [engKey, data] of Object.entries(medicalDatabase)) {
        if (input.includes(engKey) || input.includes(data.hindi)) {
            chatbox.innerHTML += `
                <div class="ai-msg">
                    <strong>${data.hindi} (${engKey})</strong><br>
                    ✅ <u>क्या करें:</u> ${data.advice}<br>
                    ❌ <u>क्या न करें:</u> ${data.avoid}<br>
                    🚨 <u>आपातकाल:</u> ${data.emergency}
                </div>
            `;
            found = true;
            break;
        }
    }
    
    if (!found) {
        chatbox.innerHTML += `<div class="ai-msg">कृपया स्पष्ट लक्षण बताएं (जैसे: "बुखार है", "पेट में दर्द")</div>`;
    }
    
    // Clear input
    document.getElementById("userInput").value = "";
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Emergency function
function callAmbulance() {
    if(confirm("क्या आप एम्बुलेंस बुलाना चाहते हैं?")) {
        window.open("tel:102");
    }
}