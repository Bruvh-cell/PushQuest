const playerData = loadPlayerData();
// daily.js

// List of daily challenges
const challenges = [
  { level: "Level 1", task: "3 sets of 10 push-ups", bonus: "Try 1 diamond push-up per set" },
  { level: "Level 2", task: "3 sets of 8 incline push-ups", bonus: "Try holding a plank for 30 seconds" },
  { level: "Level 3", task: "3 sets of 5 archer push-ups", bonus: "Add a 10-second hollow body hold after each set" },
  { level: "Level 4", task: "3 sets of 3 pseudo planche push-ups", bonus: "Try 1 wall handstand hold for 20 seconds" },
  { level: "Level 5", task: "5 sets of 5 diamond push-ups", bonus: "Try 1 assisted one-arm push-up per set" }
];

// List of motivational tips
const tips = [
  "Keep your core tight to protect your lower back during push-ups.",
  "Focus on quality over quantity — perfect form matters most.",
  "Consistency beats intensity. Build habits step by step.",
  "Remember to breathe steadily during every rep.",
  "Rest is part of growth — give muscles time to recover."
];

// Get the current date and calculate an index based on the day of the year
const now = new Date();
const start = new Date(now.getFullYear(), 0, 0);
const diff = now - start;
const oneDay = 1000 * 60 * 60 * 24;
const dayOfYear = Math.floor(diff / oneDay);

// Pick the challenge and tip for today using modulo to loop through the arrays
const challenge = challenges[dayOfYear % challenges.length];
const tip = tips[dayOfYear % tips.length];

// Update the page content dynamically
document.querySelector(".challenge-box").innerHTML = `
  <p><strong>${challenge.level}:</strong> ${challenge.task}</p>
  <p><strong>Optional Bonus:</strong> ${challenge.bonus}</p>
  <button class="complete-btn">Mark as Complete</button>
`;

document.querySelector(".motivation-tip").textContent = `💡 Tip: ${tip}`;

document.querySelector(".complete-btn").addEventListener("click", () => {
  // Award EXP
  playerData.exp += 10;

  // Level up if over 100 EXP
  if (playerData.exp >= 100) {
    playerData.level += 1;
    playerData.exp = playerData.exp - 100; // Keep overflow EXP
    alert(`Level up! You're now level ${playerData.level}!`);
  } else {
    alert("Great job! Challenge marked as complete.");
  }

  // Save progress
  savePlayerData(playerData);
});

