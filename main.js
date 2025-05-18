// Mobile Menu Toggle
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });

      // Close mobile menu if open
      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }
    }
  });
});

// ScrollReveal Animations
const sr = ScrollReveal({
  origin: "bottom",
  distance: "30px",
  duration: 1000,
  delay: 200,
  easing: "ease-in-out",
});

sr.reveal(".reveal-top", {
  origin: "top",
});

sr.reveal(".reveal-left", {
  origin: "left",
});

sr.reveal(".reveal-right", {
  origin: "right",
});

sr.reveal(".reveal-item", {
  interval: 100,
});

// Chatbot Functionality
const chatbotToggle = document.querySelector(".chatbot-toggle");
const chatbotContainer = document.querySelector(".chatbot-container");
const chatbotClose = document.querySelector(".chatbot-close");
const chatbotInput = document.querySelector(".chatbot-input-field");
const chatbotSend = document.querySelector(".chatbot-send");
const chatbotMessages = document.querySelector(".chatbot-messages");

// Toggle chatbot visibility
chatbotToggle.addEventListener("click", () => {
  chatbotContainer.classList.toggle("chatbot-hidden");
});

// Close chatbot
chatbotClose.addEventListener("click", () => {
  chatbotContainer.classList.add("chatbot-hidden");
});

// Send message function
function sendMessage() {
  const message = chatbotInput.value.trim();

  if (message !== "") {
    // Add user message
    addMessage(message, "user");

    // Clear input
    chatbotInput.value = "";

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse = getBotResponse(message);
      addMessage(botResponse, "bot");
    }, 800);
  }
}

// Add message to chat
function addMessage(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message");
  messageElement.classList.add(
    sender === "user" ? "user-message" : "bot-message"
  );
  messageElement.textContent = message;

  chatbotMessages.appendChild(messageElement);

  // Scroll to bottom
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Get bot response based on user input
function getBotResponse(message) {
  message = message.toLowerCase();

  if (
    message.includes("halo") ||
    message.includes("hai") ||
    message.includes("hi")
  ) {
    return "Halo! Ada yang bisa saya bantu tentang SIMS?";
  } else if (message.includes("fitur") || message.includes("layanan")) {
    return "SIMS menyediakan berbagai fitur seperti manajemen siswa, manajemen guru, kurikulum digital, analitik & laporan, manajemen keuangan, dan komunikasi terintegrasi. Fitur mana yang ingin Anda ketahui lebih lanjut?";
  } else if (
    message.includes("harga") ||
    message.includes("biaya") ||
    message.includes("berlangganan")
  ) {
    return "Kami menawarkan beberapa paket berlangganan yang dapat disesuaikan dengan kebutuhan sekolah Anda. Silakan hubungi tim sales kami di nomor 0878-4118-5404 untuk informasi lebih lanjut.";
  } else if (message.includes("kontak") || message.includes("hubungi")) {
    return "Anda dapat menghubungi kami melalui email di bintangawan0418@gmail.com atau telepon di 0878-4118-5404. Tim kami siap membantu Anda.";
  } else if (message.includes("demo") || message.includes("coba")) {
    return 'Anda dapat mencoba demo SIMS secara gratis selama 14 hari. Silakan klik tombol "Lihat Demo" di halaman utama atau hubungi tim kami untuk mendapatkan akses.';
  } else if (
    message.includes("terima kasih") ||
    message.includes("makasih")
  ) {
    return "Sama-sama! Senang bisa membantu Anda. Ada hal lain yang ingin Anda tanyakan?";
  } else {
    return "Maaf, saya belum memahami pertanyaan Anda. Silakan tanyakan tentang fitur SIMS, harga berlangganan, atau hubungi tim kami untuk informasi lebih lanjut.";
  }
}

// Send message on button click
chatbotSend.addEventListener("click", sendMessage);

// Send message on Enter key press
chatbotInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});

// Typing animation for initial bot message
const initialBotMessage = document.querySelector(".bot-message");
initialBotMessage.style.opacity = "0";

let text = initialBotMessage.textContent;
initialBotMessage.textContent = "";

let i = 0;
function typeWriter() {
  if (i < text.length) {
    initialBotMessage.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 30);
  }
}

// Start typing animation after page load
window.addEventListener("load", () => {
  initialBotMessage.style.opacity = "1";
  setTimeout(typeWriter, 1000);
});

// Add scroll animations to elements when they come into view
const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    ".feature-card, .stat-card, .testimonial-card"
  );

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (elementPosition < screenPosition) {
      element.classList.add("animate__animated", "animate__fadeInUp");
    }
  });
};

window.addEventListener("scroll", animateOnScroll);