const moodEntries = [
  { date: "2025-11-08", mood: "😊 Happy", note: "Walked with Pix. Felt calm and energized." },
  { date: "2025-11-07", mood: "😴 Tired", note: "Long class, learned UI animation." },
  { date: "2025-11-06", mood: "😕 Anxious", note: "Deadlines coming, made some progress." },
  { date: "2025-11-05", mood: "😌 Relaxed", note: "Cooked and watched a show." },
  { date: "2025-11-04", mood: "🤩 Excited", note: "Sketched new Emotion Diary UI ideas." }
];

function renderEntries() {
  const list = document.getElementById("entries");
  if (!list) return;
  list.innerHTML = "";
  moodEntries.forEach((item) => {
    const card = document.createElement("article");
    card.className = "entry";
    const h3 = document.createElement("h3");
    h3.textContent = item.mood;
    const meta = document.createElement("p");
    meta.className = "meta";
    meta.textContent = item.date;
    const p = document.createElement("p");
    p.textContent = item.note;
    card.appendChild(h3);
    card.appendChild(meta);
    card.appendChild(p);
    list.appendChild(card);
  });
}

function setupNewEntryForm() {
  const textarea = document.getElementById("new-note");
  const select = document.getElementById("new-mood");
  const saveBtn = document.getElementById("save-entry");
  if (!textarea || !select || !saveBtn) return;
  saveBtn.addEventListener("click", () => {
    const note = textarea.value.trim();
    const mood = select.value;
    if (!note) return;
    const today = new Date().toISOString().slice(0, 10);
    moodEntries.unshift({ date: today, mood, note });
    textarea.value = "";
    renderEntries();
    if (typeof showSection === "function") showSection("past-entries");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderEntries();
  setupNewEntryForm();
});