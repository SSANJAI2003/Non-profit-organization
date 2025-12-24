document.addEventListener('DOMContentLoaded', function () {
    // Find all select elements with class 'form-select'
    const selects = document.querySelectorAll('.form-select');

    selects.forEach(select => {
        // Create custom select wrapper
        const wrapper = document.createElement('div');
        wrapper.classList.add('custom-select-wrapper');
        wrapper.classList.add('custom-select');

        // Create custom select trigger (the box you click)
        const trigger = document.createElement('div');
        trigger.classList.add('custom-select-trigger');
        trigger.innerHTML = '<span>' + (select.options[select.selectedIndex].text || 'Select Option') + '</span>';

        // Create custom options container
        const options = document.createElement('div');
        options.classList.add('custom-options');

        // Loop through original options and create custom ones
        Array.from(select.options).forEach(option => {
            if (option.disabled) return; // Skip disabled options (like placeholders)

            const customOption = document.createElement('div');
            customOption.classList.add('custom-option');
            customOption.dataset.value = option.value;
            customOption.textContent = option.text;

            // Handle click on option
            customOption.addEventListener('click', function () {
                // Update trigger text
                trigger.querySelector('span').textContent = this.textContent;

                // Update original select value
                select.value = this.dataset.value;

                // Trigger change event on original select (for validation/listeners)
                select.dispatchEvent(new Event('change'));

                // Update visual selection state
                options.querySelectorAll('.custom-option').forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');

                // Close dropdown
                wrapper.classList.remove('open');
            });

            options.appendChild(customOption);
        });

        // Assemble the custom dropdown
        wrapper.appendChild(trigger);
        wrapper.appendChild(options);

        // Insert after original select
        select.parentNode.insertBefore(wrapper, select.nextSibling);

        // Toggle dropdown on trigger click
        trigger.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevent document click from closing immediately

            // Close all other dropdowns
            document.querySelectorAll('.custom-select').forEach(other => {
                if (other !== wrapper) other.classList.remove('open');
            });

            wrapper.classList.toggle('open');
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.custom-select')) {
            document.querySelectorAll('.custom-select').forEach(select => {
                select.classList.remove('open');
            });
        }
    });
});
