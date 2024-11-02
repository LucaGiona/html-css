document
  .getElementById("toggleButton")
  .addEventListener(
    "click",
    function () {
      const partnerLogos =
        document.querySelector(
          ".container-content.partner-logo"
        );
      const toggleButton =
        document.getElementById(
          "toggleButton"
        );
      const closeButton =
        document.getElementById(
          "closeButton"
        );

      if (
        partnerLogos.style.display ===
          "none" ||
        partnerLogos.style.display ===
          ""
      ) {
        partnerLogos.style.display =
          "flex";
        toggleButton.innerHTML =
          "Close";
      } else {
        partnerLogos.style.display =
          "none";
        toggleButton.innerHTML =
          "Open Partners";
        // Change the color of the close button when logos are hidden
        closeButton.style.backgroundColor =
          "#555"; // Change to the desired color
      }
    }
  );
