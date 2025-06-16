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
    playerData.exp += 10;

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
