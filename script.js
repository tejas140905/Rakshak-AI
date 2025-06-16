// Complete Medical Database with Medicine Suggestions
const medicalDatabase = {
    "high bp": {
        hindi: "हाई बीपी",
        advice: "दवा समय पर लें। नमक कम खाएं। रोज 30 मिनट टहलें।",
        avoid: "तला हुआ खाना, अधिक नमक, तनाव से बचें",
        emergency: "सीने में दर्द/सांस लेने में तकलीफ हो तो तुरंत डॉक्टर को दिखाएं",
        medicine: "Telmisartan, Amlodipine (डॉक्टर की सलाह लें)"
    },
    "low bp": {
        hindi: "लो बीपी",
        advice: "नमकीन बिस्कुट खाएं। पानी अधिक पिएं। छोटे-छोटे अंतराल पर खाएं।",
        avoid: "एकदम से न उठें, देर तक खड़े न रहें",
        emergency: "बेहोशी आए तो तुरंत लेट जाएं और पैर ऊपर उठाएं",
        medicine: "ORS, Electral Powder, Coffee"
    },
    "arthritis": {
        hindi: "गठिया",
        advice: "हल्की एक्सरसाइज करें, वजन कंट्रोल में रखें, गर्म पानी से सिकाई करें।",
        avoid: "ज्यादा वजन उठाना, ठंडी जगह में देर तक रहना",
        emergency: "सूजन या बहुत तेज दर्द हो तो तुरंत डॉक्टर से संपर्क करें",
        medicine: "Aceclofenac, Naproxen, Ayurvedic oil (जैसे: Rumalaya gel)"
    },
    "joint pain": {
        hindi: "जोड़ों का दर्द",
        advice: "हल्की स्ट्रेचिंग करें, गर्म तेल से मालिश करें, आराम करें।",
        avoid: "बार-बार सीढ़ियाँ चढ़ना, ठंडी सतह पर बैठना",
        emergency: "अगर दर्द हिलने में बाधा दे रहा हो तो जांच कराएं",
        medicine: "Volini Spray, Moov Gel, Paracetamol"
    },
    "fever": {
        hindi: "बुखार",
        advice: "पेरासिटामोल लें। ठंडे पानी की पट्टी रखें। भरपूर आराम करें।",
        avoid: "ठंडा पानी, एसी के सामने बैठना",
        emergency: "103°F से ज्यादा बुखार या 3 दिन से ज्यादा रहे तो डॉक्टर को दिखाएं",
        medicine: "Paracetamol (Crocin, Calpol)"
    },
    "cold": {
        hindi: "सर्दी-जुकाम",
        advice: "गर्म पानी से भाप लें। अदरक-शहद की चाय पिएं।",
        avoid: "आइसक्रीम, ठंडी चीजें",
        emergency: "सांस लेने में तकलीफ हो तो अस्पताल जाएं",
        medicine: "Cetirizine, Steam Inhalation"
    },
    "stomach pain": {
        hindi: "पेट दर्द",
        advice: "गर्म पानी की बोतल से सिकाई करें। हींग-अजवाइन का पानी पिएं।",
        avoid: "तेल-मसालेदार खाना, ठंडा पानी",
        emergency: "दर्द बहुत तेज हो या 24 घंटे से ज्यादा रहे तो डॉक्टर को दिखाएं",
        medicine: "Cyclopam, Meftal-Spas"
    },
    "diabetes": {
        hindi: "मधुमेह",
        advice: "नियमित ब्लड शुगर चेक करें। दवा/इंसुलिन समय पर लें। हरी सब्जियां खाएं।",
        avoid: "चीनी, मिठाई, सफेद चावल, प्रोसेस्ड फूड",
        emergency: "चक्कर आए या बेहोशी हो तो तुरंत ग्लूकोज लें",
        medicine: "Metformin, Insulin (डॉक्टर की सलाह जरूरी)"
    },
    "chest pain": {
        hindi: "सीने में दर्द",
        advice: "गहरी सांस लें। अगर अस्थमा है तो इनहेलर यूज करें।",
        avoid: "धूम्रपान, भारी एक्सरसाइज",
        emergency: "15 मिनट से ज्यादा दर्द हो तो तुरंत अस्पताल जाएं",
        medicine: "Sorbitrate (डॉक्टर से पूछें)"
    },
    "indigestion": {
        hindi: "अपच",
        advice: "अदरक की चाय पिएं। छाछ या सौंफ का पानी लें।",
        avoid: "भारी खाना, सोने से ठीक पहले खाना",
        emergency: "उल्टी/दस्त बंद न हो तो अस्पताल जाएं",
        medicine: "Digene, Gelusil"
    },
    "back pain": {
        hindi: "कमर दर्द",
        advice: "गर्म पानी की बोतल से सिकाई करें। सीधे लेटें।",
        avoid: "भारी सामान न उठाएं, झुककर न बैठें",
        emergency: "पैरों में कमजोरी या सुन्नपन हो तो MRI करवाएं",
        medicine: "Brufen, Flexon"
    },
    "muscle pain": {
        hindi: "मांसपेशियों में दर्द",
        advice: "हल्की मालिश करें। मैग्नीशियम युक्त खाना खाएं।",
        avoid: "भारी वर्कआउट, ठंडी हवा के संपर्क में आना",
        emergency: "दर्द 1 हफ्ते से ज्यादा रहे तो डॉक्टर को दिखाएं",
        medicine: "Volini Gel, Moov Spray"
    },
    "thyroid": {
        hindi: "थायराइड",
        advice: "नियमित दवा लें। डॉक्टर के निर्देशानुसार जांच करवाएं।",
        avoid: "सोया प्रोडक्ट्स (अगर हाइपोथायरॉइडिज्म है)",
        emergency: "वजन तेजी से घटे/बढ़े तो जांच करवाएं",
        medicine: "Thyronorm (डॉक्टर के अनुसार मात्रा लें)"
    },
    "faint": {
        hindi: "बेहोशी",
        advice: "लेट जाएं। पैर ऊपर उठाएं। होश में आने पर ORS या नींबू पानी पिएं।",
        avoid: "एकदम से खड़े न हों, धूप में ज्यादा न रहें",
        emergency: "5 मिनट से ज्यादा बेहोश रहें तो अस्पताल ले जाएं",
        medicine: "ORS, Glucon-D"
    }
};

// Process multiple symptoms with medicine suggestions
function processInput() {
    const input = document.getElementById("userInput").value.toLowerCase();
    const chatbox = document.getElementById("chatbox");

    chatbox.innerHTML += `<div class="user-msg">You: ${input}</div>`;

    let foundConditions = [];

    for (const [engKey, data] of Object.entries(medicalDatabase)) {
        if (input.includes(engKey) || input.includes(data.hindi)) {
            foundConditions.push(
                `<div class="ai-msg">
                    <strong>${data.hindi} (${engKey})</strong><br>
                    ✅ <u>क्या करें:</u> ${data.advice}<br>
                    ❌ <u>क्या न करें:</u> ${data.avoid}<br>
                    💊 <u>दवा सुझाव:</u> ${data.medicine}<br>
                    🚨 <u>आपातकाल:</u> ${data.emergency}
                </div>`
            );
        }
    }

    if (foundConditions.length > 0) {
        chatbox.innerHTML += foundConditions.join("<hr>");
    } else {
        chatbox.innerHTML += `<div class="ai-msg">कृपया स्पष्ट लक्षण बताएं (जैसे: "बुखार है", "पेट में दर्द")</div>`;
    }

    document.getElementById("userInput").value = "";
    chatbox.scrollTop = chatbox.scrollHeight;
}

