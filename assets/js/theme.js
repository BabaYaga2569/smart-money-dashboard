// =======================
// Theme + NFL Logos System
// =======================

// Map of NFL team -> colors + logo
const teamThemes = {
  "Arizona Cardinals": {
    theme: "#97233F",
    accent: "#000000",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/cardinals.svg"
  },
  "Atlanta Falcons": {
    theme: "#A71930",
    accent: "#000000",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/falcons.svg"
  },
  "Baltimore Ravens": {
    theme: "#241773",
    accent: "#9E7C0C",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/ravens.svg"
  },
  "Buffalo Bills": {
    theme: "#00338D",
    accent: "#C60C30",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/bills.svg"
  },
  "Carolina Panthers": {
    theme: "#0085CA",
    accent: "#101820",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/panthers.svg"
  },
  "Chicago Bears": {
    theme: "#0B162A",
    accent: "#C83803",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/bears.svg"
  },
  "Cincinnati Bengals": {
    theme: "#FB4F14",
    accent: "#000000",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/bengals.svg"
  },
  "Cleveland Browns": {
    theme: "#311D00",
    accent: "#FF3C00",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/browns.svg"
  },
  "Dallas Cowboys": {
    theme: "#041E42",
    accent: "#869397",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/cowboys.svg"
  },
  "Denver Broncos": {
    theme: "#FB4F14",
    accent: "#002244",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/broncos.svg"
  },
  "Detroit Lions": {
    theme: "#0076B6",
    accent: "#B0B7BC",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/lions.svg"
  },
  "Green Bay Packers": {
    theme: "#203731",
    accent: "#FFB612",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/packers.svg"
  },
  "Houston Texans": {
    theme: "#03202F",
    accent: "#A71930",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/texans.svg"
  },
  "Indianapolis Colts": {
    theme: "#002C5F",
    accent: "#A5ACAF",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/colts.svg"
  },
  "Jacksonville Jaguars": {
    theme: "#006778",
    accent: "#9F792C",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/jaguars.svg"
  },
  "Kansas City Chiefs": {
    theme: "#E31837",
    accent: "#FFB612",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/chiefs.svg"
  },
  "Las Vegas Raiders": {
    theme: "#000000",
    accent: "#A5ACAF",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/raiders.svg"
  },
  "Los Angeles Chargers": {
    theme: "#0080C6",
    accent: "#FFC20E",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/chargers.svg"
  },
  "Los Angeles Rams": {
    theme: "#003594",
    accent: "#FFD100",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/rams.svg"
  },
  "Miami Dolphins": {
    theme: "#008E97",
    accent: "#FC4C02",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/dolphins.svg"
  },
  "Minnesota Vikings": {
    theme: "#4F2683",
    accent: "#FFC62F",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/vikings.svg"
  },
  "New England Patriots": {
    theme: "#002244",
    accent: "#C60C30",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/patriots.svg"
  },
  "New Orleans Saints": {
    theme: "#D3BC8D",
    accent: "#101820",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/saints.svg"
  },
  "New York Giants": {
    theme: "#0B2265",
    accent: "#A71930",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/giants.svg"
  },
  "New York Jets": {
    theme: "#125740",
    accent: "#000000",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/jets.svg"
  },
  "Philadelphia Eagles": {
    theme: "#004C54",
    accent: "#A5ACAF",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/eagles.svg"
  },
  "Pittsburgh Steelers": {
    theme: "#101820",
    accent: "#FFB612",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/steelers.svg"
  },
  "San Francisco 49ers": {
    theme: "#AA0000",
    accent: "#B3995D",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/49ers.svg"
  },
  "Seattle Seahawks": {
    theme: "#002244",
    accent: "#69BE28",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/seahawks.svg"
  },
  "Tampa Bay Buccaneers": {
    theme: "#D50A0A",
    accent: "#FF7900",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/buccaneers.svg"
  },
  "Tennessee Titans": {
    theme: "#0C2340",
    accent: "#4B92DB",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/titans.svg"
  },
  "Washington Commanders": {
    theme: "#5A1414",
    accent: "#FFB612",
    background: "#0B0B0B",
    text: "#FFFFFF",
    logo: "assets/logos/nfl/commanders.svg"
  }
};

// Save selected theme in localStorage
function applyTeamTheme(teamName) {
  const team = teamThemes[teamName];
  if (!team) return;

  localStorage.setItem("theme", JSON.stringify(team));
  applyTheme(team);
}

// Apply theme to page
function applyTheme(theme) {
  document.documentElement.style.setProperty("--theme-color", theme.theme);
  document.documentElement.style.setProperty("--accent-color", theme.accent);
  document.documentElement.style.setProperty("--background-color", theme.background);
  document.documentElement.style.setProperty("--text-color", theme.text);

  // Update logo
  const logoEls = document.querySelectorAll(".team-logo");
  logoEls.forEach(el => {
    el.src = theme.logo;
    el.alt = "Team Logo";
  });
}

// Load saved theme on startup
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme");
  if (saved) {
    applyTheme(JSON.parse(saved));
  }
});

