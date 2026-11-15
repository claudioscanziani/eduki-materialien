(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector("#site-nav");

  if (toggle && nav) {
    toggle.hidden = false;
    document.documentElement.classList.add("js");

    function setOpen(open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Schließen" : "Menü";
      nav.classList.toggle("is-open", open);
    }

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  document.querySelectorAll("a[data-shop-placeholder]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var noteId = link.getAttribute("aria-describedby");
      var note = noteId ? document.getElementById(noteId) : null;
      if (!note) return;
      note.classList.add("is-active");
      if (!note.hasAttribute("tabindex")) note.setAttribute("tabindex", "-1");
      note.focus();
    });
  });
})();
