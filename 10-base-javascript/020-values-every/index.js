(function () {
    var form = document.getElementById("myForm");
    var labels =
        form === null || form === void 0 ? void 0
            : form.querySelectorAll("label");
    labels.forEach(function (element, index) {
        console.log(`Index ${index}: ${element.innerText}`);
    })
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var newLabel = document.createElement("label");
        newLabel.textContent = "Новый label";
        form.appendChild(newLabel);
    });
})();
