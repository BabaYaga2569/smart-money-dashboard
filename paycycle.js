(function(){
  function nextFriday(from=new Date()) {
    const d = new Date(from);
    const day = d.getDay(); // 0 Sun ... 6 Sat
    const add = (5 - day + 7) % 7 || 7; // next Friday
    d.setDate(d.getDate() + add);
    return d;
  }
  function twoDaysBefore(d){ const x=new Date(d); x.setDate(x.getDate()-2); return x; }
  function biMonthlyDate(day){
    let today = new Date();
    let d = new Date(today.getFullYear(), today.getMonth(), day);
    if (d.getDay()===0) d.setDate(d.getDate()-2);
    if (d.getDay()===6) d.setDate(d.getDate()-1);
    if (d <= today) {
      d = new Date(today.getFullYear(), today.getMonth()+1, day);
      if (d.getDay()===0) d.setDate(d.getDate()-2);
      if (d.getDay()===6) d.setDate(d.getDate()-1);
    }
    return d;
  }
  window.renderPaycycle = function(el){
    const nextFri = nextFriday();
    const sofiDate = twoDaysBefore(nextFri);
    const tanciNext = (new Date().getDate() <= 15) ? biMonthlyDate(15) : biMonthlyDate(30);
    el.innerHTML = `
      <div class="card">
        <h3>Steve</h3>
        <div class="value">$400 → SoFi on ${sofiDate.toLocaleDateString()}<br>$1,483.81 → BoA on ${nextFri.toLocaleDateString()}</div>
        <div class="footer-note">Biweekly Friday; SoFi two days early</div>
      </div>
      <div class="card">
        <h3>Tanci</h3>
        <div class="value">$1,851.04 on ${tanciNext.toLocaleDateString()} (15th/30th)</div>
      </div>
    `;
  }
})();
