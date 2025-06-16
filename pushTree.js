const playerData = loadPlayerData();

// Unlock new skills based on level
for (let level = 1; level <= playerData.level; level++) {
  const newSkills = skillUnlocks[level];
  if (newSkills) {
    newSkills.forEach(skill => {
      if (!playerData.unlockedSkills.includes(skill)) {
        playerData.unlockedSkills.push(skill);
      }
    });
  }
}
savePlayerData(playerData); // Save any new unlocks
  
// Update unlocked skills visually
document.querySelectorAll(".card").forEach(card => {
  const skillName = card.textContent.trim();
  if (playerData.unlockedSkills.includes(skillName)) {
    card.classList.remove("locked");
    card.classList.add("unlocked");
  } else {
    card.classList.remove("unlocked");
    card.classList.add("locked");
  }
});

// Optionally update EXP bar
const expFill = document.querySelector(".exp-fill");
const expLabel = document.querySelector(".exp-label");
if (expFill && expLabel) {
  const percent = (playerData.exp / 100) * 100;
  expFill.style.width = `${percent}%`;
  expLabel.textContent = `EXP: ${playerData.exp} / 100`;
}
// Skill detail
document.querySelectorAll(".card.unlocked").forEach(card => {
  card.addEventListener("click", () => {
    const skillName = encodeURIComponent(card.textContent.trim());
    window.location.href = `skillPage.html?name=${skillName}`;
  });
});
