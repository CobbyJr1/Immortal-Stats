// Bundesliga from OpenLigaDB (Live)
const bundesligaURL = "https://www.openligadb.de/api/getmatchdata/bl1";

async function loadBundesliga() {
  try {
    const res = await fetch(bundesligaURL);
    const data = await res.json();
    const container = document.getElementById("bundesliga");
    container.innerHTML = "";

    data.slice(0, 5).forEach(match => {
      const home = match.Team1.TeamName;
      const away = match.Team2.TeamName;
      const score1 = match.MatchResults[0]?.PointsTeam1 ?? "-";
      const score2 = match.MatchResults[0]?.PointsTeam2 ?? "-";
      const div = document.createElement("div");
      div.className = "match";
      div.textContent = `${home} ${score1} : ${score2} ${away}`;
      container.appendChild(div);
    });
  } catch (error) {
    document.getElementById("bundesliga").textContent = "Failed to load live data.";
  }
}

// Simulated leagues
const fakeData = {
  epl: [
    { home: "Man City", away: "Arsenal", score: "2 : 1" },
    { home: "Liverpool", away: "Chelsea", score: "3 : 2" }
  ],
  laliga: [
    { home: "Real Madrid", away: "Barcelona", score: "1 : 1" },
    { home: "Atletico", away: "Sevilla", score: "0 : 0" }
  ],
  seriea: [
    { home: "Juventus", away: "Napoli", score: "1 : 0" },
    { home: "AC Milan", away: "Roma", score: "2 : 2" }
  ],
  ligue1: [
    { home: "PSG", away: "Lyon", score: "4 : 1" },
    { home: "Marseille", away: "Nice", score: "1 : 3" }
  ]
};

function renderFakeLeague(id, matches) {
  const div = document.getElementById(id);
  matches.forEach(match => {
    const m = document.createElement("div");
    m.className = "match";
    m.textContent = `${match.home} ${match.score} ${match.away}`;
    div.appendChild(m);
  });
}

loadBundesliga();
renderFakeLeague("epl", fakeData.epl);
renderFakeLeague("laliga", fakeData.laliga);
renderFakeLeague("seriea", fakeData.seriea);
renderFakeLeague("ligue1", fakeData.ligue1);
