// Effet de texte animé
const text = "Développeur de bots Discord sur mesure.";
let i = 0;
const speed = 50;

function typeEffect() {
  if (i < text.length) {
    document.querySelector(".typing-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, speed);
  }
}
window.onload = typeEffect;

// Générateur de devis
let devisDetails = "";

function calculerDevis() {
  const botTypeSelect = document.getElementById("botType");
  const botType = parseFloat(botTypeSelect.value);
  const botLabel = botTypeSelect.options[botTypeSelect.selectedIndex].text;

  const features = parseInt(document.getElementById("features").value);
  const urgencySelect = document.getElementById("urgency");
  const urgency = parseFloat(urgencySelect.value);
  const urgencyLabel = urgencySelect.options[urgencySelect.selectedIndex].text;

  if (isNaN(botType) || isNaN(features)) {
    alert("Remplis tous les champs !");
    return;
  }

  const prixBase = botType;
  const prixFonctionnalités = features * 10;
  const total = Math.round((prixBase + prixFonctionnalités) * urgency);

  devisDetails = `Projet de bot Discord :
- Type : ${botLabel}
- Fonctionnalités : ${features}
- Urgence : ${urgencyLabel}
- Prix estimé : ${total} €`;

  document.getElementById("devis-result").innerText = `💰 Prix estimé : ${total} €`;
  document.getElementById("btnContact").style.display = "inline-block";
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnContact");
  if (btn) {
    btn.addEventListener("click", () => {
      const messageField = document.querySelector('textarea[name="message"]');
      if (messageField && devisDetails) {
        messageField.value = `${devisDetails}\n\nMon message : `;
      }
    });
  }
});
