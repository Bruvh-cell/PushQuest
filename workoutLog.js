// workoutLog.js

// Load workouts from localStorage or initialize empty array
function loadWorkouts() {
  const data = localStorage.getItem("workoutLog");
  return data ? JSON.parse(data) : [];
}

// Save workouts array to localStorage
function saveWorkouts(workouts) {
  localStorage.setItem("workoutLog", JSON.stringify(workouts));
}

// Format date nicely (e.g. "Jun 16, 2025 18:34")
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

// Render the workout list in the UI
function renderWorkouts() {
  const workouts = loadWorkouts();
  const listEl = document.getElementById("workout-list");
  listEl.innerHTML = "";

  if (workouts.length === 0) {
    listEl.innerHTML = `<li>No workouts logged yet.</li>`;
    return;
  }

  workouts.forEach(entry => {
    const li = document.createElement("li");
    li.textContent = `${formatDate(entry.date)} — ${entry.text}`;
    listEl.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("workout-input");
  const submitBtn = document.getElementById("submit-workout");

  // Render on page load
  renderWorkouts();

  // Handle submit button click
  submitBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (text === "") {
      alert("Please write your workout before submitting.");
      return;
    }

    const workouts = loadWorkouts();
    const playerData = loadPlayerData();

    // Add new workout with current timestamp
    workouts.unshift({
      date: new Date().toISOString(),
      text: text,
    });

    // Keep only the latest 40 logs
    if (workouts.length > 40) {
      workouts.length = 40;  // truncate the array to 40 items
    }
    playerData.exp += 5;

    // Level up check
    if (playerData.exp >= 100) {
      playerData.level += 1;
      playerData.exp -= 100;
      alert(`Level up! You're now level ${playerData.level}!`);
    }
    saveWorkouts(workouts);
    savePlayerData(playerData);

    // Clear textarea
    input.value = "";

    // Re-render list
    renderWorkouts();

    // Optionally disable button briefly to prevent spam
    submitBtn.disabled = true;
    setTimeout(() => submitBtn.disabled = false, 800);
  });
});
//Weekly Planner logic
document.querySelectorAll(".day").forEach(dayBox => {
  const day = dayBox.dataset.day;
  const nameInput = dayBox.querySelector(".workout-name");
  const detailsInput = dayBox.querySelector(".workout-details");
  const lockBtn = dayBox.querySelector(".lock-btn");
  const completeBtn = dayBox.querySelector(".complete-btn");

  // Load saved data
  let saved = JSON.parse(localStorage.getItem("planner-" + day));

  // --- Weekly Reset Logic ---
  const today = new Date();
  const isMonday = today.getDay() === 1; // 1 = Monday
  const lastReset = localStorage.getItem("lastReset");

  if (isMonday && lastReset !== today.toDateString()) {
    // Clear completed status but keep workout data
    if (saved) saved.completed = false;
    localStorage.setItem("lastReset", today.toDateString());
  }

  // Populate inputs
  if (saved) {
    nameInput.value = saved.name;
    detailsInput.value = saved.details;

    if (saved.locked) {
      lockInputs(true);
      lockBtn.textContent = "Unlock";
    }

    if (saved.completed) {
      dayBox.classList.add("completed");
    }
  }

  // Helper: lock/unlock inputs
  function lockInputs(state) {
    nameInput.readOnly = state;
    detailsInput.readOnly = state;
  }

  // Lock/Unlock button
  lockBtn.addEventListener("click", () => {
    const isLocked = lockBtn.textContent === "Unlock";

    if (isLocked) {
      // Unlock mode
      lockInputs(false);
      lockBtn.textContent = "Lock";
      saveData(false);
    } else {
      // Lock mode
      lockInputs(true);
      lockBtn.textContent = "Unlock";
      saveData(true);
    }
  });

  // Complete button
  // Complete button
completeBtn.addEventListener("click", () => {
  // Prevent double completion
  if (dayBox.classList.contains("completed")) {
    alert(day + " is already completed!");
    return;
  }

  // Mark completed in UI
  dayBox.classList.add("completed");

  // Load player data
  const playerData = loadPlayerData();

  // Give EXP
  playerData.exp += 20;

  // Level up check
  if (playerData.exp >= 100) {
    playerData.level += 1;
    playerData.exp -= 100;
    alert(`Level up! You're now level ${playerData.level}!`);
  } else {
    alert(`Great job! ${day} workout completed. +20 EXP`);
  }

  // Save player data + workout state
  savePlayerData(playerData);
  saveData(lockBtn.textContent === "Unlock", true);

  // Disable button + update text
  completeBtn.disabled = true;
  completeBtn.textContent = "Completed!";
});


  // Save data helper
  function saveData(locked = false, completed = dayBox.classList.contains("completed")) {
    localStorage.setItem("planner-" + day, JSON.stringify({
      name: nameInput.value,
      details: detailsInput.value,
      locked,
      completed
    }));
  }
});
