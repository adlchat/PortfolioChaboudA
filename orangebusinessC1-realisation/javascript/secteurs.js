function activateTab(evt, tabName) {
    var i, contenu, tab;
  
    contenu = document.getElementsByClassName("contenu");
    for (i = 0; i < contenu.length; i++) {
      contenu[i].style.display = "none";
    }
  
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
      tab[i].className = tab[i].className.replace(" active", "");
    }
  
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}


document.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.substring(1); 
  if (hash) {
      const button = document.querySelector(`.tab[onclick*="${hash}"]`);
      if (button) {
          history.replaceState(null, null, ' '); // supprimer le hashtag de l'url
          button.click(); // cliquer pour la tabulation
          setTimeout(function() {
            window.scrollTo(0, 0);
        }, 0); // scroller en haut de la page après un délai pour laisser le temps de charger
      }
  } else {
      const defaultTab = document.getElementById('defaut');
      if (defaultTab) {
          defaultTab.click(); // Activer tabulation par défaut
          setTimeout(function() {
            window.scrollTo(0, 0);
        }, 0); // scroller en haut de la page après un délai pour laisser le temps de charger
      }
  }
});


