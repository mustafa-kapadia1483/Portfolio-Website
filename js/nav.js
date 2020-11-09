let current_url = document.location;
      document.querySelectorAll(".single-link").forEach(function (e) {
        if (e.href == current_url) {
          e.classList += " current";
        }
      });