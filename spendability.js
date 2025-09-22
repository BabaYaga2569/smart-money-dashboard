(function(){
  const SM = window.SM;
  function sumAccounts(){ return SM.accounts.reduce((t,a)=>t+a.balance,0); }
  function sumPendingBillsUntil(date){
    const cutoff = new Date(date);
    return SM.bills
      .filter(b=> new Date(b.due) <= cutoff && b.status!=='Paid')
      .reduce((t,b)=>t+b.amount,0);
  }
  window.checkSpend = function(amount){
    const d=new Date(); const add=(5-d.getDay()+7)%7||7; d.setDate(d.getDate()+add); // next Fri
    const avail = sumAccounts() - sumPendingBillsUntil(d);
    const ok = amount <= avail;
    return { ok, avail, nextPay: d };
  };
  window.renderSpendability = function(outEl, amount){
    const res = checkSpend(amount);
    outEl.innerHTML = res.ok
      ? `<span class="badge ok">SAFE</span> You can spend ${SM.currency(amount)}. Est. available now: <b>${SM.currency(res.avail)}</b> until ${res.nextPay.toLocaleDateString()}.`
      : `<span class="badge danger">NOT SAFE</span> ${SM.currency(amount)} would overrun. Est. available: <b>${SM.currency(res.avail)}</b> until ${res.nextPay.toLocaleDateString()}.`;
  };
})();
