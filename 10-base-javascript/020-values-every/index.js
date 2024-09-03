(function () {
  /*
    const form = document.getElementById("myForm");
    const labels = form.querySelectorAll("label");
    */
  var form = document.getElementById("myForm");
  var labels =
    form === null || form === void 0 ? void 0 : form.querySelectorAll("label");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var newLabel = document.createElement("label");
    newLabel.textContent = "Новый label";
    form.appendChild(newLabel);
  });
})();
