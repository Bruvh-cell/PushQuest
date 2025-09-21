const playerData = loadPlayerData(); // Load player data

// Initialize completedDailies if missing
if (!Array.isArray(playerData.completedDailies)) {
  playerData.completedDailies = [];
}

// List of daily challenges
const challenges = [
  { level: "Level 1", task: "3 sets of 10 push-ups", bonus: "Try 1 diamond push-up per set" },
  { level: "Level 2", task: "3 sets of 8 incline push-ups", bonus: "Hold a plank for 30 seconds after each set" },
  { level: "Level 3", task: "3 sets of 6 archer push-ups", bonus: "Add a 15-second hollow body hold" },
  { level: "Level 4", task: "3 sets of 5 pseudo planche push-ups", bonus: "Do 2 frog stand attempts" },
  { level: "Level 5", task: "4 sets of 5 diamond push-ups", bonus: "Do 3 wall-assisted handstand kick-ups" },
  { level: "Level 6", task: "3 sets of 5 decline push-ups", bonus: "Try one 10-second L-sit or tuck sit" },
  { level: "Level 7", task: "4 sets of 5 side-to-side push-ups", bonus: "Add a 15-second crow pose hold" },
  { level: "Level 8", task: "3 sets of 4 archer push-ups + 2 V-sit attempts", bonus: "Do 2 wall handstands" },
  { level: "Level 9", task: "3 sets of 3 advanced tuck planche attempts", bonus: "Hold a 20-second hollow body after each set" },
  { level: "Level 10", task: "3 sets of 3 handstand push-ups (or negatives)", bonus: "Try a 10-second straddle hold or L-sit" },
  { level: "Level 11", task: "4 sets of 4 planche lean push-ups", bonus: "Try a 15-second tuck planche hold" },
  { level: "Level 12", task: "3 sets of 6 pseudo planche push-ups", bonus: "Add a 30-second crow pose hold" },
  { level: "Level 13", task: "3 sets of 8 pike push-ups", bonus: "Try a 20-second L-sit" },
  { level: "Level 14", task: "4 sets of 6 diamond push-ups", bonus: "Do 3 frog stand attempts" },
  { level: "Level 15", task: "5 sets of 5 archer push-ups", bonus: "Hold a 30-second hollow body" },
];


// List of motivational tips
const tips = [
  "Keep your core tight to protect your lower back during push-ups.",
  "Focus on quality over quantity — perfect form matters most.",
  "Consistency beats intensity. Build habits step by step.",
  "Remember to breathe steadily during every rep.",
  "Rest is part of growth — give muscles time to recover."
];

// Get today's date as day-of-year
const now = new Date();
const start = new Date(now.getFullYear(), 0, 0);
const diff = now - start;
const oneDay = 1000 * 60 * 60 * 24;
const dayOfYear = Math.floor(diff / oneDay);

// Check if today is completed (using completedDailies array)
const alreadyCompleted = playerData.completedDailies.includes(dayOfYear);

// Function to get a random challenge up to current level
function getDailyChallenge(level) {
  let maxLevel = level >= 10 ? 15 : level; // if level 10 or more, allow up to challenge 15
  maxLevel = Math.min(maxLevel, challenges.length); // prevent exceeding array length
  const unlocked = challenges.slice(0, maxLevel);
  const randomIndex = Math.floor(Math.random() * unlocked.length);
  return unlocked[randomIndex];
}

// Pick today's challenge and tip
const challenge = getDailyChallenge(playerData.level);
const tip = tips[dayOfYear % tips.length];


// Update HTML content
document.querySelector(".challenge-box").innerHTML = `
  <p><strong>${challenge.level}:</strong> ${challenge.task}</p>
  <p><strong>Optional Bonus:</strong> ${challenge.bonus}</p>
  <button class="complete-btn" ${alreadyCompleted ? "disabled" : ""}>
    ${alreadyCompleted ? "Completed!" : "Mark as Complete"}
  </button>
`;

document.querySelector(".motivation-tip").textContent = `💡 Tip: ${tip}`;

// Add button event listener
document.querySelector(".complete-btn").addEventListener("click", () => {
  if (alreadyCompleted) return;

  // Add this day to completed dailies
  playerData.completedDailies.push(dayOfYear);

  // Add exp
  playerData.exp += 10;

  // Level up check
  if (playerData.exp >= 100) {
    playerData.level += 1;
    playerData.exp -= 100;
    alert(`Level up! You're now level ${playerData.level}!`);
  } else {
    alert("Great job! Challenge marked as complete.");
  }

  // Save data
  savePlayerData(playerData);

  // Disable button and update text
  const btn = document.querySelector(".complete-btn");
  btn.disabled = true;
  btn.textContent = "Completed!";
});
