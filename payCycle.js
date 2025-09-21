function getNextSoFiDate() {
  const today = new Date();
  const next = new Date(today);
  next.setDate(today.getDate() + ((3 - today.getDay() + 7) % 7)); // Wednesday
  if (next <= today) next.setDate(next.getDate() + 7);
  return next;
}

function getNextBoADate() {
  const today = new Date();
  const next = new Date(today);
  next.setDate(today.getDate() + ((5 - today.getDay() + 7) % 7)); // Friday
  if (next <= today) next.setDate(next.getDate() + 7);
  return next;
}

function getNextTanciDate() {
  const today = new Date();
  let next = new Date(today.getFullYear(), today.getMonth(), 15);

  if (today > next) {
    next = new Date(today.getFullYear(), today.getMonth(), 30);
  }
  if (today > next) {
    next = new Date(today.getFullYear(), today.getMonth() + 1, 15);
  }

  // Weekend adjustment
  if (next.getDay() === 6) next.setDate(next.getDate() - 1); // Saturday → Friday
  if (next.getDay() === 0) next.setDate(next.getDate() - 2); // Sunday → Friday

  return next;
}

function daysUntil(date) {
  const today = new Date();
  const diff = date - today;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

document.addEventListener("DOMContentLoaded", () => {
  const sofiDate = getNextSoFiDate();
  const boaDate = getNextBoADate();
  const tanciDate = getNextTanciDate();

  document.getElementById("sofi-date").textContent = sofiDate.toDateString();
  document.getElementById("boa-date").textContent = boaDate.toDateString();
  document.getElementById("tanci-date").textContent = tanciDate.toDateString();

  document.getElementById("steve-countdown").textContent = Math.min(
    daysUntil(sofiDate),
    daysUntil(boaDate)
  );
  document.getElementById("tanci-countdown").textContent = daysUntil(tanciDate);
});
