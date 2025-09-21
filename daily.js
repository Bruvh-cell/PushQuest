const playerData = loadPlayerData(); // Load player data

if (!Array.isArray(playerData.completedDailies)) {
  playerData.completedDailies = [];
}

const challenges = [
  // Level 1
  { level: "Level 1", task: "3 sets of 5 push-ups", bonus: "Try 1 diamond push-up per set" },
  { level: "Level 1", task: "3 sets of 12 knee push-ups", bonus: "Hold a 10 second plank after each set" },
  { level: "Level 1", task: "2 sets of 12 incline push-ups", bonus: "Add 5 slow push-ups at the end" },
  { level: "Level 1", task: "3 sets of 8 wide push-ups", bonus: "Squeeze shoulder blades together at top" },

  // Level 2
  { level: "Level 2", task: "3 sets of 8 incline push-ups", bonus: "Hold a plank for 30 seconds after each set" },
  { level: "Level 2", task: "3 sets of 6 diamond push-ups", bonus: "Try 5 slow negatives per set" },
  { level: "Level 2", task: "3 sets of 10 knee push-ups", bonus: "Add a 10 second hollow body hold after each set" },
  { level: "Level 2", task: "2 sets of 10 push-ups with shoulder taps", bonus: "Focus on slow controlled reps" },

  // Level 3
  { level: "Level 3", task: "3 sets of 3 archer push-ups", bonus: "Add a 15 second hollow body hold" },
  { level: "Level 3", task: "3 sets of 3 pseudo push-ups", bonus: "Try 3 tuck planche attempts" },
  { level: "Level 3", task: "4 sets of 8 incline push-ups", bonus: "Hold a 20 second plank after each set" },
  { level: "Level 3", task: "3 sets of 5 side-to-side push-ups", bonus: "Add 5 slow reps at the end" },

  // Level 4
  { level: "Level 4", task: "3 sets of 4 pseudo push-ups", bonus: "Do 2 frog stand attempts" },
  { level: "Level 4", task: "3 sets of 10 diamond push-ups", bonus: "Hold a 20 second hollow body after each set" },
  { level: "Level 4", task: "3 sets of 8 incline push-ups", bonus: "Try 1 planche lean attempt per set" },
  { level: "Level 4", task: "2 sets of 3 archer push-ups", bonus: "Do 3 frog stand attempts" },

  // Level 5
  { level: "Level 5", task: "4 sets of 11 diamond push-ups", bonus: "Do 3 wall assisted handstand kick-ups" },
  { level: "Level 5", task: "3 sets of 4 pseudo push-ups", bonus: "Hold a 2 second tuck planche" },
  { level: "Level 5", task: "3 sets of 12 archer push-ups", bonus: "Try 2 crow pose holds per set" },
  { level: "Level 5", task: "4 sets of 23 incline push-ups", bonus: "Add 1 planche lean attempt per set" },

  // Level 6
  { level: "Level 6", task: "3 sets of 9 decline push-ups", bonus: "Try one 10 second L-sit or tuck sit" },
  { level: "Level 6", task: "3 sets of 10 side-to-side push-ups", bonus: "Hold a 15 second crow pose after each set" },
  { level: "Level 6", task: "3 sets of 5 pseudo push-ups", bonus: "Add 1 frog stand attempt per set" },
  { level: "Level 6", task: "4 sets of 25 incline push-ups", bonus: "Focus on slow controlled reps" },

  // Level 7
  { level: "Level 7", task: "4 sets of 7 side-to-side push-ups", bonus: "Add a 15 second crow pose hold" },
  { level: "Level 7", task: "3 sets of 6 archer push-ups", bonus: "Do 1 planche lean per set" },
  { level: "Level 7", task: "3 sets of 15 diamond push-ups", bonus: "Try 5 slow negatives" },
  { level: "Level 7", task: "4 sets of 6 pseudo push-ups", bonus: "Hold a 20 second tuck planche" },

  // Level 8
  { level: "Level 8", task: "3 sets of 8 archer push-ups", bonus: "Do 2 wall handstands" },
  { level: "Level 8", task: "4 sets of 15 diamond push-ups", bonus: "Add 2 planche lean attempts per set" },
  { level: "Level 8", task: "3 sets of 10 pseudo push-ups", bonus: "Hold a 8 second tuck planche" },
  { level: "Level 8", task: "3 sets of 15 side-to-side push-ups", bonus: "Hold a 5 second crow pose " },

  // Level 9
  { level: "Level 9", task: "3 sets of tuck planche attempts", bonus: "Hold a 20 second hollow body after each set" },
  { level: "Level 9", task: "3 sets of 15 pseudo push-ups", bonus: "Try 2 planche lean attempts" },
  { level: "Level 9", task: "4 sets of 15 diamond push-ups", bonus: "Add 1 frog stand attempt per set" },
  { level: "Level 9", task: "3 sets of 10 archer push-ups", bonus: "Hold a 15-second crow pose after each set" },

  // Level 10
  { level: "Level 10", task: "3 sets of 3 handstand push-ups (or negatives)", bonus: "Try a 10 second L-sit" },
  { level: "Level 10", task: "3 sets of 16 pseudo push-ups", bonus: "Do 2 tuck planche attempts per set" },
  { level: "Level 10", task: "3 sets of 17 pseudo push-ups", bonus: "Hold a 25 second hollow body" },
  { level: "Level 10", task: "3 sets of tuck planche attempts", bonus: "Try 1 wall handstand per set" },

  // Level 11
  { level: "Level 11", task: "4 sets of 16 pseudo push-ups", bonus: "Try a 15 second tuck planche hold" },
  { level: "Level 11", task: "3 sets of 23 diamond push-ups", bonus: "Hold a 20 second hollow body" },
  { level: "Level 11", task: "3 sets of 12 archer push-ups", bonus: "Try a 15 second crow pose hold" },
  { level: "Level 11", task: "3 sets of 3 tuck planche push ups", bonus: "Try 1 wall handstand per set" },

  // Level 12
  { level: "Level 12", task: "3 sets of 16 pseudo push-ups", bonus: "Add a 30 second crow pose hold" },
  { level: "Level 12", task: "3 sets of 12 archer push-ups", bonus: "Hold a 20-second tuck planche" },
  { level: "Level 12", task: "4 sets of 24 diamond push-ups", bonus: "Do 3 frog stand attempts" },
  { level: "Level 12", task: "3 sets of 4 tuck planche push ups", bonus: "Try 2 planche lean attempts" },

  // Level 13
  { level: "Level 13", task: "3 sets of 15 pike push-ups", bonus: "Try a 20 second L-sit" },
  { level: "Level 13", task: "4 sets of 50 incline push-ups", bonus: "Add 1 tuck planche attempt per set" },
  { level: "Level 13", task: "3 sets of 20 pseudo planche push-ups", bonus: "Hold a 25-second hollow body" },
  { level: "Level 13", task: "3 sets of 15 archer push-ups", bonus: "Do 2 crow pose holds per set" },

  // Level 14
  { level: "Level 14", task: "4 sets of 25 diamond push-ups", bonus: "Do 3 frog stand attempts" },
  { level: "Level 14", task: "3 sets of 20 pseudo push-ups", bonus: "Hold a 30-second tuck planche" },
  { level: "Level 14", task: "3 sets of 25 archer push-ups", bonus: "Try 2 planche lean attempts" },
  { level: "Level 14", task: "3 sets of 5 tuck planche push upss", bonus: "Hold a 20-second hollow body" },

  // Level 15
  { level: "Level 15", task: "5 sets of 30 archer push-ups", bonus: "Hold a 30 second hollow body" },
  { level: "Level 15", task: "3 sets of 25 pseudo push-ups", bonus: "Do 3 frog stand attempts" },
  { level: "Level 15", task: "4 sets of 7 tuck planche push-ups", bonus: "Try 2 advanced tuck planche attempts" },
  { level: "Level 15", task: "3 sets of 3 handstand push-ups (or negatives)", bonus: "Hold a 20 second straddle hold or L-sit" },
];


const tips = [
  "Keep your core tight to protect your lower back during push-ups.",
  "Focus on quality over quantity — perfect form matters most.",
  "Consistency beats intensity. Build habits step by step.",
  "Remember to breathe steadily during every rep.",
  "Rest is part of growth — give muscles time to recover."
];

const now = new Date();
const start = new Date(now.getFullYear(), 0, 0);
const diff = now - start;
const oneDay = 1000 * 60 * 60 * 24;
const dayOfYear = Math.floor(diff / oneDay);

// Initialize daily completed array if missing
if (!playerData.completedDailies[dayOfYear]) playerData.completedDailies[dayOfYear] = [];

// --- Function to pick random challenges ---
function getDailyChallenges(level, count = 4) {
  // Get all challenges at or below current player level
  const available = challenges.filter(ch => parseInt(ch.level.split(" ")[1]) <= level);

  const picked = [];
  const usedIndices = new Set();

  while (picked.length < count && usedIndices.size < available.length) {
    const index = Math.floor(Math.random() * available.length);
    if (!usedIndices.has(index)) {
      picked.push(available[index]);
      usedIndices.add(index);
    }
  }

  return picked;
}

// --- Pick 4 challenges ---
const dailyChallenges = getDailyChallenges(playerData.level);
const tip = tips[dayOfYear % tips.length];

// --- Display challenges ---
dailyChallenges.forEach((challenge, i) => {
  const id = `challenge${i + 1}`;
  const completed = playerData.completedDailies[dayOfYear].includes(i);

  const box = document.getElementById(id);
  box.innerHTML = `
    <p><strong>${challenge.level}:</strong> ${challenge.task}</p>
    <p><strong>Optional Bonus:</strong> ${challenge.bonus}</p>
    <button class="complete-btn" ${completed ? "disabled" : ""}>
      ${completed ? "Completed!" : "Mark as Complete"}
    </button>
  `;

  // --- Complete button ---
  box.querySelector(".complete-btn").addEventListener("click", () => {
    if (completed) return;

    playerData.completedDailies[dayOfYear].push(i);
    playerData.exp += 10;

    if (playerData.exp >= 100) {
      playerData.level += 1;
      playerData.exp -= 100;
      alert(`Level up! You're now level ${playerData.level}!`);
    } else {
      alert("Great job! Challenge marked as complete.");
    }

    savePlayerData(playerData);

    const btn = box.querySelector(".complete-btn");
    btn.disabled = true;
    btn.textContent = "Completed!";
  });
});

// --- Motivation tip ---
document.querySelector(".motivation-tip").textContent = `💡 Tip: ${tip}`;

