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

## État : 100 questions validées, app fonctionnelle. Ouvrir index.html dans le navigateur.
