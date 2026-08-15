(() => {
  "use strict";

  // The "free home delivery" number is a 10-digit mobile (matches the
  // same digits Sri Balaji Clinic lists as its main number), so it can
  // take WhatsApp — the clinic's own landline (080 4993 9125) can't.
  const WHATSAPP_NUMBER = "918722244765";

  function initContactForm() {
    const form = document.getElementById("contactForm");
    const success = document.getElementById("contactSuccess");
    if (!form || !success) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const phone = form.phone.value.trim();
      const message = form.message.value.trim();
      const text =
        `New enquiry from the Tornique Clinic website:\nName: ${name}\nPhone: ${phone}\nMessage: ${message || "(none)"}`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
      form.classList.add("hidden");
      success.classList.remove("hidden");
    });
  }

  initContactForm();
})();

