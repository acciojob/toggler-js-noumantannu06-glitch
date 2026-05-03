 const checkboxes = document.querySelectorAll(".toggle");

    function updateToggles() {
      const selected = Array.from(checkboxes).filter(cb => cb.checked);

      if (selected.length > 2) {
        const lastClicked = selected[2];
        lastClicked.checked = false;

        const parent = lastClicked.closest(".g1, .g2, .g3");
        if (parent) {
          parent.classList.remove("selected");
        }
      }
    }

    checkboxes.forEach(cb => {
      cb.addEventListener("change", () => {
        const parent = cb.closest(".g1, .g2, .g3");
        if (!parent) return;

        if (cb.checked) {
          parent.classList.add("selected");
        } else {
          parent.classList.remove("selected");
        }

        updateToggles();
      });
    });