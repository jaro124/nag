const KEY = "theme";

export function applyTheme(theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function toggleTheme() {
  const next = document.documentElement.classList.contains("dark")
    ? "light"
    : "dark";

  try {
    localStorage.setItem(KEY, next);
  } catch {
    // brak dostępu do localStorage: motyw zadziała tylko do końca sesji
  }

  applyTheme(next);
  return next;
}
