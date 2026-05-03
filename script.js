document.addEventListener("DOMContentLoaded", function () {

  const checkboxes = document.querySelectorAll(".toggle");

  if (!checkboxes.length) {
    console.error("Checkboxes not found"); // prevents silent crash
    return;
  }

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", function () {

      // ✅ allow checking first
      this.checked = true;

      // ❗ If your test expects ONLY ONE checked
      checkboxes.forEach((cb) => {
        if (cb !== this) {
          cb.checked = false;
        }
		  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", function () {

      // ✅ allow checking first
      this.checked = true;

      // ❗ If your test expects ONLY ONE checked
      checkboxes.forEach((cb) => {
        if (cb !== this) {
          cb.checked = false;
        }
      });

    });
  });

});