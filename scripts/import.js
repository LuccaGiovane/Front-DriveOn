function importHTML(file, elementId) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      const container = document.getElementById(elementId);
      if (container) {
        container.innerHTML = data;
      } else {
        console.error(`Element with id "${elementId}" not found.`);
      }
    })
    .catch(error => console.error(`Error loading file ${file}:`, error));
}