document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const links = document.querySelectorAll("[data-link]");

  // Load default page (dashboard)
  loadPage("partials/dashboard.html");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const url = link.getAttribute("href");
      loadPage(url);
    });
  });

  function loadPage(url) {
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("Page not found: " + url);
        return res.text();
      })
      .then(html => {
        content.innerHTML = html;
      })
      .catch(err => {
        content.innerHTML = `<div class="error">⚠️ ${err.message}</div>`;
      });
  }
});
