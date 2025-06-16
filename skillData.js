// skillData.js

export const skillPrerequisites = {
  "Diamond Push-Ups": ["Wide Push-Ups"],
  "Side Plank": ["Plank"],
  "Decline Push-Ups": ["Diamond Push-Ups"],
  "Tuck Dragon Flag": ["V-sit Ups"],
  "Frog Pose": [],
  "Tuck sit": [],
  "Straddle sit": ["Tuck sit"],
  "Side to side Push-Ups": ["Decline Push-Ups"],
  "Single Leg Dragon Flag": ["Tuck Dragon Flag"],
  "Crow Pose": ["Frog Pose"],
  "Wall Assisted Handstand": ["Crow Pose"],
  "Tuck Planche": ["Crow Pose"],
  "L-sit": ["Tuck sit"],
  "Archer Push-Ups": ["Side to side Push-Ups"],
  "Straddle Dragon Flag": ["Single Leg Dragon Flag"],
  "Handstand": ["Wall Assisted Handstand"],
  "One Arm Push-Ups": ["Archer Push-Ups"],
  "Dragon Flag": ["Straddle Dragon Flag"],
  "Handstand Push-up": ["Handstand"],
  "Advanced Tuck Planche": ["Tuck Planche"],
  "V-sit": ["L-sit"],
  "90 Degree Hold": ["Advanced Tuck Planche"],
  "Straddle Half Lay Planche": ["Advanced Tuck Planche"],
  "Straddle Planche": ["Straddle Half Lay Planche"],
  "90 Degree Handstand Push-up": ["Handstand Push-up"],
  "Half Lay Planche": ["Straddle Planche"],
  "90 sit": ["V-sit"],
  "Full Planche": ["Half Lay Planche"],
  "Manna": ["90 sit"]
};

export function canUnlockSkill(skill, unlockedSkills) {
  const prereqs = skillPrerequisites[skill] || [];
  return prereqs.every(prereq => unlockedSkills.includes(prereq));
}
