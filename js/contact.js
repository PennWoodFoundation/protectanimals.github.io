function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

function contactButtonClicked(e) {
    e.preventDefault();

    window.location.href = 'Meassage.html';
}

function domReady() {
    var contactButton = document.getElementById('contactSubmit');
    contactButton.addEventListener('click', contactButtonClicked);
}

ready(domReady);