document.getElementById("login_form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche la soumission du formulaire par défaut

    // Récupérer les valeurs saisies par l'utilisateur
    var username = document.getElementById("username").value;
    var password = document.getElementById("pass").value;

    // Vérifier les identifiants
    if (username === "lp" && password === "cht") {
        // Rediriger l'utilisateur vers la page de bienvenue
        window.location.href = "../index.html";
    } else {
        // Afficher un message d'erreur
        var errorMessage = document.getElementById("errorMessage");
        errorMessage.style.display = "block"; // Afficher le message d'erreur
    }
});