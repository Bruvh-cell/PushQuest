const playerData = loadPlayerData();

// Get the skill list container element
const skillList = document.getElementById("skill-list");

// Clear existing list items (if any)
skillList.innerHTML = "";

// Loop through unlocked skills and add them as <li>
playerData.unlockedSkills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillList.appendChild(li);
});

// Also update level and exp dynamically if you want
document.getElementById("user-level").textContent = playerData.level;
document.getElementById("user-exp").textContent = playerData.exp;

