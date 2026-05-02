//your JS code here. If required.
 const toggles = document.querySelectorAll(".toggle");

    toggles.forEach((toggle) => {
      toggle.addEventListener("change", function () {
        const checkedToggles = [...toggles].filter((t) => t.checked);

        if (checkedToggles.length > 2) {
          if (this.id === "good") {
            document.getElementById("cheap").checked = false;
          } else if (this.id === "cheap") {
            document.getElementById("fast").checked = false;
          } else if (this.id === "fast") {
            document.getElementById("good").checked = false;
          }
        }
      });
    });
