window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('darkToggler').onclick = () => {
    html = document.documentElement
    html.dataset.theme = html.dataset.theme == "dark" 
      ? "light"
      : "dark";
  }
});