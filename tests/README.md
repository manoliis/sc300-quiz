# Tests

Deux scripts Node, sans aucune dépendance à installer. Lance-les depuis la racine du projet.

## `node tests/validate-data.js`
Contrôle les questions : IDs uniques et séquentiels, traduction EN/FR complète (question,
options, explication), indices `correct` valides, 2 à 6 options (limite des lettres ABCDEF),
pas de question dupliquée, champ `domain` cohérent avec l'ID.

Il vérifie aussi deux choses faciles à rater à l'œil :
- **La répartition des bonnes réponses** entre les positions A/B/C/D. L'app ne mélange pas
  l'ordre des options (les explications citent les lettres), donc si une position dépassait
  40 % on pourrait réussir le quiz en apprenant la position. Le validateur échoue au-delà.
- **La cohérence explication ↔ données** : dans les deux langues, chaque ligne d'explication
  doit commencer par un verdict de lettre, couvrir chaque option exactement une fois, et
  marquer « correct » exactement les bonnes réponses déclarées dans `correct`.

**À relancer après chaque ajout de questions.**

## `node tests/smoke.js`
Rejoue les parcours utilisateur de `index.html` sans navigateur : il simule un DOM et un
localStorage minimaux, évalue le vrai `<script>` de la page, puis pilote l'app.
Couvre : cohérence des textes EN/FR, existence de tous les handlers `onclick`, streak en date
locale, sauvegarde et reprise d'un examen, alerte avant de soumettre un examen incomplet,
état de l'écran résultats/revue, confirmations avant de quitter, seuil de confettis à 70 %,
« revoir mes erreurs », bouton muet, et rejet d'un localStorage corrompu sans plantage.

Les deux sortent en code 1 si quelque chose casse.
