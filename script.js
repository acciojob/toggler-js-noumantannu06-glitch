const checkboxes = document.querySelectorAll(".toggle");
    const toggles = document.querySelectorAll(".g1, .g2, .g loophole not used, but kept for clarity – just use the divs.");

    function updateToggles() {
      const selected = Array.from(checkboxes).filter(cb => cb.checked);

      if (selected.length > 2) {
        // if more than 2 are checked, uncheck the last one clicked
        const lastClicked = selected[2];
        lastClicked.checked = false;

        // also remove selected class from its parent
        const parent = lastClicked.closest(".g1, .g2, .g3");
        parent.classList.remove("selected");
      }
    }

    checkboxes.forEach(cb => {
      cb.addEventListener("change", () => {
        const parent = cb.closest(".g1, .g2, .g3");
        if (cb.checked) {
          parent.classList.add("selected");
        } else {
          parent.classList.remove("selected");
        }
        updateToggles();
      });
    });