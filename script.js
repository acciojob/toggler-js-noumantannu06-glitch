  // 🔥 MAX 2 CHECKBOXES LOGIC
        const toggles = document.querySelectorAll('.toggle');
        const selectedCountEl = document.getElementById('selectedCount');
        
        let selectedToggles = [];

        toggles.forEach(toggle => {
            toggle.addEventListener('change', function() {
                const isChecked = this.checked;
                const toggleId = this.id;
                
                if (isChecked) {
                    // If already 2 selected, uncheck the first one and check new one
                    if (selectedToggles.length >= 2) {
                        const firstSelected = selectedToggles.shift();
                        document.getElementById(firstSelected).checked = false;
                    }
                    
                    // Add current to selected
                    selectedToggles.push(toggleId);
                } else {
                    // Remove from selected if unchecked
                    selectedToggles = selectedToggles.filter(id => id !== toggleId);
                }
                
                updateSelectedCount();
            });
        });

        function updateSelectedCount() {
            const count = selectedToggles.length;
            selectedCountEl.textContent = count === 0 
                ? 'Select up to 2 options' 
                : `${count} option${count > 1 ? 's' : ''} selected`;
        }