const checkboxes = document.querySelectorAll('.toggle');

    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        const checked = document.querySelectorAll('.toggle:checked');

        if (checked.length > 2) {
          // Uncheck the *first* checked one so the latest one stays checked
          checked[0].checked = false;
        }
      });
    });
