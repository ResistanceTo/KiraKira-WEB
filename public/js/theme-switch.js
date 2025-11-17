document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("theme-switch");
  if (!btn) return;

  const media = window.matchMedia("(prefers-color-scheme: dark)");
  let stored = null;
  try {
    stored = localStorage.getItem("theme");
  } catch {}
  let dark = stored === "dark" ? true : stored === "light" ? false : media.matches;
  let hasStoredPref = stored === "dark" || stored === "light";

  function update() {
    if (dark) {
      document.documentElement.classList.add("dark");
      btn.classList.remove("bg-gray-100");
      btn.classList.add("bg-white");
      btn.querySelector(".icon-sun")?.classList.add("hidden");
      btn.querySelector(".icon-moon")?.classList.remove("hidden");
    } else {
      document.documentElement.classList.remove("dark");
      btn.classList.remove("bg-white");
      btn.classList.add("bg-gray-100");
      btn.querySelector(".icon-moon")?.classList.add("hidden");
      btn.querySelector(".icon-sun")?.classList.remove("hidden");
    }
  }

  update();

  const onChange = (e) => {
    if (!hasStoredPref) {
      dark = e.matches;
      update();
    }
  };

  if (media.addEventListener) {
    media.addEventListener("change", onChange);
  } else {
    media.addListener(onChange);
  }

  btn.addEventListener("click", () => {
    dark = !dark;
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
      hasStoredPref = true;
    } catch {}
    update();
  });
});