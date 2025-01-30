const acc = document.querySelectorAll(".accordion");
acc.forEach((button) => {
  button.addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});

window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  if (window.scrollY > 50) {
      header.style.backgroundColor = 'white';
  } else {
      header.style.backgroundColor = 'transparent';
  }
});

    const citologiaBtn = document.getElementById('citologiaBtn');
    const citologiaPopup = document.getElementById('citologiaPopup');
    const closeBtn = document.querySelector('.close');

    citologiaBtn.onclick = function() {
        citologiaPopup.style.display = 'block';
    }

    closeBtn.onclick = function() {
        citologiaPopup.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target === citologiaPopup) {
            citologiaPopup.style.display = 'none';
        }
    }
