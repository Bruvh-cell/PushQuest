// --- Default Player Data ---
const defaultPlayerData = {
  level: 1,
  exp: 0,
  unlockedSkills: ["Knee Push-Ups", "Push-Ups", "Sit-ups", "Plank"],
  completedDailies: []
};

// --- Load Player Data ---
function loadPlayerData() {
  const data = localStorage.getItem("playerData");
  if (data) {
    return JSON.parse(data);
  } else {
    localStorage.setItem("playerData", JSON.stringify(defaultPlayerData));
    return defaultPlayerData;
  }
}

// --- Save Player Data ---
function savePlayerData(data) {
  localStorage.setItem("playerData", JSON.stringify(data));
}

// --- Skill Unlocks ---
const skillUnlocks = {
  2: ["Wide Push-Ups", "V-sit ups"],
  3: ["Diamond Push-Ups", "Side Plank"],
  4: ["Decline Push-Ups", "Tuck Dragon Flag", "Frog Stand", "Tuck Sit", "L-sit"],
  5: ["Side to side Push-Ups", "Single Leg Dragon Flag", "Crow Pose", "Wall Assisted Handstand", "Tuck Planche", "Straddle L-sit"],
  6: ["Archer Push-Ups", "Straddle Dragon Flag", "Handstand"],
  7: ["One Arm Push-Ups", "Dragon Flag", "Handstand Push-up", "Advanced Tuck Planche", "V-sit"],
  8: ["90 Degree Hold", "Single Leg Planche"],
  9: ["Straddle Planche"],
  10: ["90 Degree Handstand Push-up"],
  11: ["Half Lay Planche"],
  12: ["Full Planche", "Manna"],
};
