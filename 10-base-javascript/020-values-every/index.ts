(() => {
  const form = document.getElementById("myForm");
  const labels = form?.querySelectorAll("label");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newLabel = document.createElement("label");
    newLabel.textContent = "Новый label";
    form.appendChild(newLabel);
  });
})();
