const playerData = loadPlayerData();
const main = document.querySelector("main");

if (playerData.completedDailies.length === 0) {
  main.innerHTML += `<p>You haven't completed any daily challenges yet!</p>`;
} else {
  const list = document.createElement("ul");

  playerData.completedDailies.forEach(day => {
    const li = document.createElement("li");
    const date = new Date(new Date().getFullYear(), 0, day); // Convert dayOfYear to Date
    li.textContent = `✅ Completed on ${date.toDateString()}`;
    list.appendChild(li);
  });

  main.appendChild(list);
}
