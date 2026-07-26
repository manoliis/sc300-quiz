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
- [ ] 11. Lots suivants de questions (objectif 400 total) — ajouter par lots de ~25/domaine sur demande

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

## État : 200 questions validées (D1=55 D2=55 D3=45 D4=45), app fonctionnelle. Ouvrir index.html dans le navigateur.
## Reste à faire : lots suivants vers l'objectif 400 (+50/domaine).
