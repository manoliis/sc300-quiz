# Tests

Deux scripts Node, sans aucune dépendance à installer. Lance-les depuis la racine du projet.

## `node tests/validate-data.js`
Contrôle les questions : IDs uniques et séquentiels, traduction EN/FR complète (question,
options, explication), indices `correct` valides, 2 à 6 options (limite des lettres ABCDEF),
pas de question dupliquée, champ `domain` cohérent avec l'ID.
**À relancer après chaque ajout de questions.**

## `node tests/smoke.js`
Rejoue les parcours utilisateur de `index.html` sans navigateur : il simule un DOM et un
localStorage minimaux, évalue le vrai `<script>` de la page, puis pilote l'app.
Couvre : cohérence des textes EN/FR, existence de tous les handlers `onclick`, streak en date
locale, sauvegarde et reprise d'un examen, alerte avant de soumettre un examen incomplet,
état de l'écran résultats/revue, confirmations avant de quitter, seuil de confettis à 70 %,
« revoir mes erreurs », bouton muet, et rejet d'un localStorage corrompu sans plantage.

Les deux sortent en code 1 si quelque chose casse.
