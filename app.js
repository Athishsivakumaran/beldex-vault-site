const journeyData = [
  {
    label: "Step 1",
    title: "Create secure vault access",
    text:
      "Users begin with their name, a 6-digit vault PIN, and optional fingerprint unlock when the device supports it.",
    bullets: [
      "Name and vault PIN are set first",
      "Inline validation keeps setup clear",
      "Keyboard-safe layout for compact phones",
    ],
    image: "./assets/screenshots/v2.2-emulator/pixel4a-emu-screenshot.png",
    alt: "Latest emulator vault access setup screen",
  },
  {
    label: "Step 2",
    title: "Protect BELDEX and transfer passwords",
    text:
      "Password protection is handled on a separate page so users understand that app unlock and password verification are different.",
    bullets: [
      "Shared verification method for both passwords",
      "Face, fingerprint, or 4-digit password PIN",
      "Clear messages for unavailable biometric paths",
    ],
    image: "./assets/screenshots/v2.2-emulator/pixel4a-step2-ready-finish.png",
    alt: "Latest emulator password protection screen",
  },
  {
    label: "Step 3",
    title: "Add structured account records",
    text:
      "The account form captures the details users need later without scattering credentials across notes or screenshots.",
    bullets: [
      "BELDEX account ID and password",
      "Transfer password, email, phone, and coin amount",
      "Secure notes and encrypted document attachments",
    ],
    image: "./assets/screenshots/v2.2-emulator/pixel4a-add-account-latest.png",
    alt: "Latest emulator add account screen",
  },
  {
    label: "Step 4",
    title: "Search, filter, and review quickly",
    text:
      "Home and Contacts keep saved records easy to find as the vault grows, including date and coin amount filtering.",
    bullets: [
      "Search by account details and coin amount",
      "Date and coin range filters in one sheet",
      "Completion and reminder status stay visible",
    ],
    image: "./assets/screenshots/v2.2-emulator/pixel4a-filter-sheet-latest.png",
    alt: "Latest emulator filter sheet with date and coin range",
  },
  {
    label: "Step 5",
    title: "Verify before Nexus access",
    text:
      "Nexus helper verifies the user first, copies a short credential payload, opens Nexus in-app, and offers Chrome fallback when needed.",
    bullets: [
      "No old copy-helper page",
      "Short clipboard format: A/c and Pwd",
      "Clipboard clears automatically when possible",
    ],
    image: "./assets/screenshots/v2.2-emulator/pixel4a-documents-form-latest.png",
    alt: "Latest emulator secure notes and documents screen",
  },
  {
    label: "Step 6",
    title: "Back up and restore safely",
    text:
      "Encrypted `.beldexvault` backup files help users move to a new phone without exposing raw vault data.",
    bullets: [
      "Stronger backup password rule",
      "Restore confirmation before replacing data",
      "Documents are included through encrypted backup content",
    ],
    image: "./assets/screenshots/v2.2-emulator/pixel4a-backup-restore-latest.png",
    alt: "Latest emulator backup and restore screen",
  },
];

const steps = Array.from(document.querySelectorAll(".journey-step"));
const journeyLabel = document.getElementById("journeyLabel");
const journeyTitle = document.getElementById("journeyTitle");
const journeyText = document.getElementById("journeyText");
const journeyBullets = document.getElementById("journeyBullets");
const journeyImage = document.getElementById("journeyImage");

function renderJourney(index) {
  const current = journeyData[index];
  journeyLabel.textContent = current.label;
  journeyTitle.textContent = current.title;
  journeyText.textContent = current.text;
  journeyImage.src = current.image;
  journeyImage.alt = current.alt;

  journeyBullets.innerHTML = "";
  current.bullets.forEach((bullet) => {
    const item = document.createElement("li");
    item.textContent = bullet;
    journeyBullets.appendChild(item);
  });

  steps.forEach((step, stepIndex) => {
    const active = stepIndex === index;
    step.classList.toggle("is-active", active);
    step.setAttribute("aria-selected", String(active));
  });
}

steps.forEach((step) => {
  step.setAttribute("role", "tab");
  step.addEventListener("click", () => {
    renderJourney(Number(step.dataset.step));
  });
});

renderJourney(0);

document.querySelectorAll(".reveal").forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 30, 220)}ms`;
  item.classList.add("is-visible");
});
