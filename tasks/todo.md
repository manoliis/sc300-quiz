# SC-300 Prep Kit — Plan

## Objectif
App quiz HTML interactive + théorie complète pour préparer la certification SC-300
(Microsoft Identity and Access Administrator), version du 27 avril 2026.

## Décisions utilisateur
- Format : app HTML interactive (un fichier index.html + fichiers data)
- Langue : anglais (comme l'examen) + bouton traduction FR, termes techniques en EN
- Volume : objectif 400 questions (100 par domaine), générées par lots

## Structure du projet
- index.html          → l'app (quiz + théorie + examen blanc)
- data/theory.js      → théorie bilingue des 4 domaines
- data/questions-d1.js → Domaine 1 : User identities (20-25%)
- data/questions-d2.js → Domaine 2 : Authentication & access management (25-30%)
- data/questions-d3.js → Domaine 3 : Workload identities (20-25%)
- data/questions-d4.js → Domaine 4 : Identity governance (20-25%)

## Tâches
- [x] 1. Créer la structure + index.html (app complète : modes étude/examen, toggle EN/FR, localStorage)
- [x] 2. Théorie Domaine 1 (tenant, users, groups, external identities, hybrid)
- [x] 3. Théorie Domaine 2 (auth methods, MFA, SSPR, Conditional Access, ID Protection, GSA)
- [x] 4. Théorie Domaine 3 (managed identities, enterprise apps, app registrations, MDCA)
- [x] 5. Théorie Domaine 4 (entitlement mgmt, access reviews, PIM, monitoring)
- [x] 6. Questions D1 — 30/100 (lot 1 fait)
- [x] 7. Questions D2 — 30/100 (lot 1 fait)
- [x] 8. Questions D3 — 20/100 (lot 1 fait)
- [x] 9. Questions D4 — 20/100 (lot 1 fait)
- [x] 10. Validation : syntaxe JS OK + structure des 100 questions OK (node --check + script de validation)
- [x] 11. Lots suivants de questions — **objectif 400 atteint le 2026-07-26** (100 par domaine)

## Audit du 2026-07-26 — corrections & améliorations validées par Manolis
- [x] 12. Bug : `renderResults()` ne remet pas `state.screen="results"` → écran figé sur la revue après changement de langue
- [x] 13. Bug : streak calculé en UTC (`toISOString`) au lieu de la date locale → streak faussé après minuit
- [x] 14. Bug : « ← Quitter » sans confirmation → perte d'un examen en cours par mégarde
- [x] 15. Examen : navigateur de questions (grille cliquable) + marquage « à revoir » + alerte questions sans réponse avant validation
- [x] 16. Examen : reprise après rechargement de page (sauvegarde localStorage `sc300_examSave`, chrono absolu, validation stricte des données relues)
- [x] 17. Fin de quiz : bouton « revoir seulement mes erreurs de cette session »
- [x] 18. Bouton muet 🔊/🔇 pour le son de bonne réponse (persisté, clé `sc300_muted`)
- [x] 19. Confettis de fin de session d'étude uniquement à partir de 70 % (respecte la leçon du 24/07)
- [x] 20. Nouveau lot : +25 questions par domaine (100 de plus → 200 au total), vérifiées vs Microsoft Learn

## Vérification (2026-07-26)
Harnais de test headless (stub DOM + localStorage, évalue le vrai `<script>` d'index.html) :
`scratchpad/smoke.js` → **48 tests passés / 0 échec** (i18n complet, handlers onclick définis, streak local,
sauvegarde+reprise d'examen, alerte questions blanches, état d'écran résultats/revue, confirmations de sortie,
seuil de confettis, revoir ses erreurs, mute, localStorage corrompu rejeté sans crash).
Données : 200 questions, 0 doublon d'ID, 0 doublon de texte, bilingue complet, indices `correct` tous valides.

## Lot final (2026-07-26) — 400 questions
- [x] 21. +200 questions (D1 +45, D2 +45, D3 +55, D4 +55), sujets tous distincts des existants
- [x] 22. Correction d'un biais majeur : la bonne réponse était en position A dans 98 % des questions.
      Permutation des options des 365 questions concernées, avec remappage des lettres dans les
      explications EN et FR et réordonnancement alphabétique des lignes. Répartition désormais
      A=25% B=25% C=25% D=25%, vérifiée par 800 contrôles explication↔données (0 écart).
- [x] 23. Suppression d'un doublon reformulé (d3-039 reprenait d3-011) → remplacé par « Single sign-out ».
- [x] 24. Garde-fous ajoutés à `tests/validate-data.js` : échec si une position dépasse 40 %, et
      vérification que chaque explication couvre toutes les options et marque les bonnes réponses.

## État : 400 questions validées (100 par domaine), app fonctionnelle. Ouvrir index.html dans le navigateur.
## Reste à faire : rien de bloquant. Étoffer la théorie D3/D4 (2 sections chacune, contre 4 pour D1) serait le prochain gain.
