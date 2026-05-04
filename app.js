const journeyData = [
  {
    label: "Step 1",
    title: "Create secure access",
    text:
      "Users begin with their name, a 6-digit vault PIN, and an optional fingerprint-unlock path when the device supports it.",
    bullets: [
      "Name and vault PIN are set first",
      "Clear confirmation before proceeding",
      "Fingerprint messaging adapts to the device",
    ],
    image: "./assets/screenshots/access-setup-latest.png",
    alt: "Vault access setup screen",
  },
  {
    label: "Step 2",
    title: "Protect BELDEX and transfer passwords",
    text:
      "The second page keeps password protection separate from app access so BELDEX and transfer passwords stay deliberate and easier to understand.",
    bullets: [
      "Shared verification method for both passwords",
      "Face, fingerprint, or 4-digit PIN",
      "Finish setup only after the protection choice is complete",
    ],
    image: "./assets/screenshots/password-protection-latest.png",
    alt: "Password protection screen",
  },
  {
    label: "Step 3",
    title: "Arrive on Home",
    text:
      "After setup, users land on Home where the account ring, live market area, search, and quick actions are ready for daily use.",
    bullets: [
      "Account count is visible immediately",
      "Market refresh stays close to the hero panel",
      "Search and date filters remain one tap away",
    ],
    image: "./assets/screenshots/live-prices-latest.png",
    alt: "Home screen with live prices",
  },
  {
    label: "Step 4",
    title: "Add your first account",
    text:
      "The add-account form captures BELDEX credentials, transfer password, email, phone number, and amount in one structured entry flow.",
    bullets: [
      "Single form for the first saved record",
      "Protected password fields are built in",
      "Structured inputs replace scattered notes",
    ],
    image: "./assets/screenshots/add-account-latest.png",
    alt: "Add account screen",
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
    const li = document.createElement("li");
    li.textContent = bullet;
    journeyBullets.appendChild(li);
  });

  steps.forEach((step, stepIndex) => {
    step.classList.toggle("is-active", stepIndex === index);
  });
}

steps.forEach((step) => {
  step.addEventListener("click", () => {
    renderJourney(Number(step.dataset.step));
  });
});

renderJourney(0);

document.querySelectorAll(".reveal").forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 35, 240)}ms`;
  item.classList.add("is-visible");
});
