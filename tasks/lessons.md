# Lessons

(Format : [date] | ce qui a mal tourné | règle pour l'éviter)

[2026-07-24] | Confettis déclenchés même sur mauvaise réponse (liés au déblocage de badge, pas au résultat) | Toujours lier une récompense visuelle au contexte émotionnel du joueur : une célébration ne doit jamais pouvoir apparaître juste après un échec. Tester les feedbacks de gamification dans le cas "réponse fausse" avant de push.

[2026-07-26] | Une fonction de rendu (`renderResults`) était appelée directement comme retour de navigation sans remettre `state.screen` → l'app affichait un écran mais se croyait sur un autre (bug visible au changement de langue) | Toute fonction qui peut servir de destination de navigation doit poser elle-même son `state.screen` en première ligne, jamais compter sur l'appelant. Sinon deux sources de vérité divergent.

[2026-07-26] | Dates calculées avec `toISOString().slice(0,10)` pour le streak quotidien → c'est la date UTC, pas celle de l'utilisateur ; en France une session après minuit comptait pour la veille | Pour tout ce qui est "jour calendaire vécu par l'utilisateur" (streak, quota du jour), utiliser getFullYear/getMonth/getDate en local. `toISOString` ne sert qu'aux échanges machine.

[2026-07-26] | Deux tests ont échoué sur ma propre erreur de test (je ne cochais qu'une réponse sur une question multi-réponses, et je comptais les AudioContext alors que l'app en met un seul en cache) — j'ai failli conclure à un bug de l'app | Avant de déclarer un bug depuis un test rouge, vérifier que le test reproduit fidèlement le comportement réel (multi-réponses, objets mis en cache, état partagé entre cas). Un test faux coûte plus cher qu'un test absent.

[2026-07-26] | En générant 200 questions d'affilée, j'ai placé la bonne réponse en position A dans 98 % des cas — l'app ne mélangeant pas les options, le quiz apprenait la position au lieu du contenu | Quand on génère du contenu à choix multiples en série, la position de la bonne réponse est un biais invisible qui ne se voit sur aucune question prise isolément. Mesurer la distribution par script, pas à l'œil, et la faire échouer automatiquement au-delà de 40 % sur une position. Corollaire : tout artefact généré en masse mérite un contrôle statistique global, pas seulement une vérification unitaire.

[2026-07-26] | Une nouvelle question (d3-039) reprenait le même scénario et la même réponse qu'une question existante (d3-011), invisible parce que la formulation différait | Contre la redondance, comparer les questions par similarité lexicale (Jaccard sur les mots > 3 lettres) et pas seulement par égalité stricte de texte. Un doublon reformulé passe tous les contrôles d'unicité naïfs.

[2026-07-26] | Le localStorage est modifiable par l'utilisateur : la reprise d'examen relisait `endsAt`, `idx`, `answers`, `flags` sans les valider (un `endsAt` en chaîne passait la comparaison `>`, un `idx` non entier plantait le rendu) | Traiter le localStorage comme une entrée non fiable, exactement comme un input réseau : valider type ET forme de chaque champ, et retomber sur des valeurs sûres par défaut. Ajouter des tests avec charge corrompue.
