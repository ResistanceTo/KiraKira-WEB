try {
  const t = localStorage.getItem("theme");
  if (t === "dark") {
    document.documentElement.classList.add("dark");
  } else if (t === "light") {
    document.documentElement.classList.remove("dark");
  }
} catch {}