"use strict";
/* Domain 4 — Plan and automate identity governance (20-25%) */
window.SC300_QUESTIONS_D4 = [
{
id:"d4-001", domain:4, topic:"PIM",
q:{en:"Admins currently hold the Exchange Administrator role permanently. Security requires they only get the role when needed, for max 4 hours, with MFA and justification. What do you configure?",
   fr:"Les admins détiennent en permanence le rôle Exchange Administrator. La sécurité exige qu'ils n'obtiennent le rôle qu'en cas de besoin, pour 4 heures max, avec MFA et justification. Que configures-tu ?"},
options:[
 {en:"Convert them to ELIGIBLE assignments in PIM and set role settings: max activation 4h, require MFA and justification", fr:"Les convertir en assignations ELIGIBLE dans PIM et régler le rôle : activation max 4h, MFA et justification requis"},
 {en:"Create ACTIVE assignments with an end date", fr:"Créer des assignations ACTIVE avec une date de fin"},
 {en:"Create a Conditional Access policy requiring MFA for Exchange admins", fr:"Créer une politique Conditional Access exigeant le MFA pour les admins Exchange"},
 {en:"Remove the role and share one admin account", fr:"Retirer le rôle et partager un seul compte admin"}],
correct:[0],
explanation:{en:"A is correct: PIM eligible assignments = just-in-time access. The user activates when needed; role settings enforce max duration (4h), MFA (or authentication context), justification, and optionally approval.\nB is wrong: active time-bound assignments still keep the role continuously on until the end date — not just-in-time.\nC is wrong: CA secures the SIGN-IN but doesn't remove standing privileged access.\nD is wrong: shared accounts destroy accountability — a severe anti-pattern.",
fr:"A est correct : les assignations eligible de PIM = accès just-in-time. L'utilisateur active quand nécessaire ; les réglages du rôle imposent la durée max (4h), le MFA (ou authentication context), la justification et éventuellement l'approbation.\nB est faux : les assignations active bornées gardent le rôle actif en continu jusqu'à la date de fin — pas de just-in-time.\nC est faux : CA sécurise la CONNEXION mais ne supprime pas l'accès privilégié permanent.\nD est faux : les comptes partagés détruisent la traçabilité — grave anti-pattern."}
},
{
id:"d4-002", domain:4, topic:"PIM approval",
q:{en:"Activation of the Global Administrator role must require approval by two designated security officers. Where do you configure this?",
   fr:"L'activation du rôle Global Administrator doit exiger l'approbation de deux responsables sécurité désignés. Où configures-tu ça ?"},
options:[
 {en:"PIM > Microsoft Entra roles > Global Administrator > Role settings > Require approval to activate, and add the approvers", fr:"PIM > Microsoft Entra roles > Global Administrator > Role settings > Require approval to activate, et ajouter les approbateurs"},
 {en:"Conditional Access > Grant > Require approval", fr:"Conditional Access > Grant > Require approval"},
 {en:"Entitlement management access package policy", fr:"Une policy d'access package d'entitlement management"},
 {en:"An access review on the role", fr:"Une access review sur le rôle"}],
correct:[0],
explanation:{en:"A is correct: each PIM role has role settings including \"Require approval to activate\" with selected approvers; requests then wait in the PIM approval queue.\nB is wrong: CA has no approval grant control.\nC is wrong: access packages govern requesting ACCESS (resources/roles bundles), but per-activation approval of an Entra role is a PIM role setting.\nD is wrong: access reviews periodically recertify existing assignments; they don't gate activations.",
fr:"A est correct : chaque rôle PIM a des role settings dont « Require approval to activate » avec des approbateurs choisis ; les demandes attendent ensuite dans la file d'approbation PIM.\nB est faux : CA n'a pas de contrôle d'approbation.\nC est faux : les access packages gouvernent la DEMANDE d'accès (lots de ressources/rôles), mais l'approbation par activation d'un rôle Entra est un réglage PIM.\nD est faux : les access reviews recertifient périodiquement les assignations existantes ; elles ne contrôlent pas les activations."}
},
{
id:"d4-003", domain:4, topic:"Access packages",
q:{en:"New project members (internal and from partner org Fabrikam) need a bundle: membership of 2 groups, access to 1 SharePoint site and 1 app — self-requestable with manager approval, expiring after 90 days. What do you build?",
   fr:"Les nouveaux membres d'un projet (internes et du partenaire Fabrikam) ont besoin d'un lot : appartenance à 2 groupes, accès à 1 site SharePoint et 1 app — demandable en self-service avec approbation du manager, expirant après 90 jours. Que construis-tu ?"},
options:[
 {en:"An access package in a catalog containing those resources, with policies for internal users and the Fabrikam connected organization, approval + 90-day lifecycle", fr:"Un access package dans un catalog contenant ces ressources, avec des policies pour les internes et la connected organization Fabrikam, approbation + cycle de vie 90 jours"},
 {en:"Four separate PIM for Groups configurations", fr:"Quatre configurations PIM for Groups séparées"},
 {en:"A dynamic group with a 90-day rule", fr:"Un groupe dynamique avec une règle de 90 jours"},
 {en:"Manual assignment by the helpdesk with a calendar reminder", fr:"Une assignation manuelle par le helpdesk avec un rappel calendrier"}],
correct:[0],
explanation:{en:"A is correct: this is the textbook entitlement management scenario — an access package bundles the group memberships, site and app; separate policies handle internal users vs the Fabrikam connected organization (guests auto-created); approval and expiration handle governance automatically.\nB is wrong: PIM for Groups covers JIT elevation into groups, not multi-resource request/approval/expiry bundles for externals.\nC is wrong: dynamic rules can't express \"90 days after approval\".\nD is wrong: manual + reminders is exactly the ungoverned process entitlement management replaces.",
fr:"A est correct : c'est le scénario type d'entitlement management — un access package regroupe les appartenances aux groupes, le site et l'app ; des policies distinctes gèrent les internes et la connected organization Fabrikam (guests créés automatiquement) ; approbation et expiration gèrent la gouvernance automatiquement.\nB est faux : PIM for Groups couvre l'élévation JIT dans des groupes, pas des lots multi-ressources avec demande/approbation/expiration pour des externes.\nC est faux : les règles dynamiques ne savent pas exprimer « 90 jours après approbation ».\nD est faux : manuel + rappels est exactement le processus non gouverné qu'entitlement management remplace."}
},
{
id:"d4-004", domain:4, topic:"Access reviews",
q:{en:"Compliance requires quarterly recertification of the \"VPN-Users\" group. If reviewers don't respond, the users' access must be removed automatically. How do you configure the access review?",
   fr:"La conformité exige une recertification trimestrielle du groupe « VPN-Users ». Si les reviewers ne répondent pas, l'accès des utilisateurs doit être retiré automatiquement. Comment configures-tu l'access review ?"},
options:[
 {en:"Quarterly recurrence, auto-apply results ON, and \"If reviewers don't respond\" = Remove access", fr:"Récurrence trimestrielle, application automatique des résultats ON, et « If reviewers don't respond » = Remove access"},
 {en:"One-time review with manual result application", fr:"Review unique avec application manuelle des résultats"},
 {en:"Quarterly review with \"If reviewers don't respond\" = No change", fr:"Review trimestrielle avec « If reviewers don't respond » = No change"},
 {en:"A PIM eligible assignment on the group", fr:"Une assignation eligible PIM sur le groupe"}],
correct:[0],
explanation:{en:"A is correct: recurrence = quarterly; \"Auto apply results to resource\" enabled; upon completion, non-reviewed users are removed thanks to \"If reviewers don't respond = Remove access\". This is the fail-secure configuration.\nB is wrong: one-time + manual doesn't meet quarterly automatic requirements.\nC is wrong: \"No change\" leaves unreviewed access in place — fails the requirement.\nD is wrong: PIM eligibility is JIT activation, not periodic recertification.",
fr:"A est correct : récurrence trimestrielle ; « Auto apply results to resource » activé ; à la fin, les utilisateurs non revus sont retirés grâce à « If reviewers don't respond = Remove access ». C'est la configuration fail-secure.\nB est faux : unique + manuel ne répond pas à l'exigence trimestrielle automatique.\nC est faux : « No change » laisse en place les accès non revus — échec de l'exigence.\nD est faux : l'éligibilité PIM est de l'activation JIT, pas de la recertification périodique."}
},
{
id:"d4-005", domain:4, topic:"Guest cleanup",
q:{en:"Your tenant has hundreds of stale guest accounts. You must periodically make guests confirm they still need access, and block+delete those who don't respond or are denied. What do you use?",
   fr:"Ton tenant a des centaines de comptes guests obsolètes. Tu dois périodiquement faire confirmer aux guests qu'ils ont encore besoin d'accès, et bloquer+supprimer ceux qui ne répondent pas ou sont refusés. Qu'utilises-tu ?"},
options:[
 {en:"An access review of guest users (e.g. on groups/teams) with self-review, and actions to block sign-in then delete denied guests", fr:"Une access review des guests (ex : sur groupes/teams) avec self-review, et les actions bloquer la connexion puis supprimer les guests refusés"},
 {en:"A PowerShell script deleting guests older than 90 days", fr:"Un script PowerShell supprimant les guests de plus de 90 jours"},
 {en:"Conditional Access blocking all guests", fr:"Un Conditional Access bloquant tous les guests"},
 {en:"Cross-tenant access settings", fr:"Les cross-tenant access settings"}],
correct:[0],
explanation:{en:"A is correct: access reviews support guest-focused reviews with self-attestation; for denied/non-responding guests the review can block sign-in and delete the account after 30 days — the governed lifecycle approach.\nB is wrong: age is not usage; you'd delete active partners and keep stale ones, with no attestation trail.\nC is wrong: blocking ALL guests breaks legitimate collaboration.\nD is wrong: those settings control WHICH tenants can collaborate, not stale-account cleanup.",
fr:"A est correct : les access reviews supportent des reviews dédiées aux guests avec auto-attestation ; pour les refusés/sans réponse, la review peut bloquer la connexion puis supprimer le compte après 30 jours — l'approche gouvernée du cycle de vie.\nB est faux : l'ancienneté n'est pas l'usage ; tu supprimerais des partenaires actifs en gardant des obsolètes, sans trace d'attestation.\nC est faux : bloquer TOUS les guests casse la collaboration légitime.\nD est faux : ces paramètres contrôlent QUELS tenants peuvent collaborer, pas le nettoyage des comptes."}
},
{
id:"d4-006", domain:4, topic:"PIM for Groups",
q:{en:"A third-party SaaS app grants admin rights based on membership of the group \"SaaS-Admins\". You need just-in-time membership with approval. What do you configure?",
   fr:"Une app SaaS tierce accorde des droits admin selon l'appartenance au groupe « SaaS-Admins ». Tu as besoin d'une appartenance just-in-time avec approbation. Que configures-tu ?"},
options:[
 {en:"PIM for Groups: make users ELIGIBLE for membership of SaaS-Admins with approval required on activation", fr:"PIM for Groups : rendre les utilisateurs ELIGIBLE à l'appartenance de SaaS-Admins avec approbation à l'activation"},
 {en:"PIM for Entra roles", fr:"PIM pour les rôles Entra"},
 {en:"An access review on the group", fr:"Une access review sur le groupe"},
 {en:"A dynamic group", fr:"Un groupe dynamique"}],
correct:[0],
explanation:{en:"A is correct: PIM for Groups brings eligibility/activation/approval/expiration to group MEMBERSHIP (and ownership) — the way to do JIT for anything driven by groups: third-party apps, license bundles, or several roles at once.\nB is wrong: the SaaS admin rights come from group membership, not an Entra directory role.\nC is wrong: reviews recertify, they don't provide on-demand activation.\nD is wrong: dynamic rules are attribute-based and permanent while matched — no JIT, no approval.",
fr:"A est correct : PIM for Groups apporte éligibilité/activation/approbation/expiration à l'APPARTENANCE (et la propriété) d'un groupe — la méthode JIT pour tout ce qui dépend des groupes : apps tierces, lots de licences, ou plusieurs rôles d'un coup.\nB est faux : les droits admin du SaaS viennent de l'appartenance au groupe, pas d'un rôle d'annuaire Entra.\nC est faux : les reviews recertifient, elles n'offrent pas d'activation à la demande.\nD est faux : les règles dynamiques sont basées attributs et permanentes tant que ça matche — ni JIT ni approbation."}
},
{
id:"d4-007", domain:4, topic:"Log retention",
q:{en:"Auditors require sign-in logs to be retained for 2 years and queryable with KQL. Default Entra retention is 30 days. What do you configure?",
   fr:"Les auditeurs exigent que les sign-in logs soient conservés 2 ans et requêtables en KQL. La rétention Entra par défaut est de 30 jours. Que configures-tu ?"},
options:[
 {en:"Diagnostic settings exporting SigninLogs to a Log Analytics workspace with retention/archive configured for 2 years", fr:"Des diagnostic settings exportant SigninLogs vers un workspace Log Analytics avec rétention/archive configurée sur 2 ans"},
 {en:"Increase the retention slider in Entra ID to 730 days", fr:"Augmenter le curseur de rétention dans Entra ID à 730 jours"},
 {en:"Download the logs as CSV monthly", fr:"Télécharger les logs en CSV chaque mois"},
 {en:"Export to Event Hubs only", fr:"Exporter uniquement vers Event Hubs"}],
correct:[0],
explanation:{en:"A is correct: diagnostic settings stream Entra logs to Log Analytics, where you set data retention/archive up to years and query with KQL (SigninLogs, AuditLogs tables). A storage account is a cheaper option for pure archive, but it isn't KQL-queryable.\nB is wrong: no such slider exists — 30 days (P1/P2) is fixed in Entra.\nC is wrong: manual, error-prone, and CSVs aren't a KQL-queryable store.\nD is wrong: Event Hubs is a streaming pipe to SIEMs; it stores data only briefly.",
fr:"A est correct : les diagnostic settings envoient les logs Entra vers Log Analytics, où tu configures rétention/archive jusqu'à plusieurs années et requêtes en KQL (tables SigninLogs, AuditLogs). Un storage account est moins cher pour l'archive pure, mais pas requêtable en KQL.\nB est faux : ce curseur n'existe pas — 30 jours (P1/P2) est fixe dans Entra.\nC est faux : manuel, source d'erreurs, et les CSV ne sont pas un store requêtable en KQL.\nD est faux : Event Hubs est un tuyau de streaming vers des SIEM ; il ne conserve les données que brièvement."}
},
{
id:"d4-008", domain:4, topic:"KQL",
q:{en:"In Log Analytics, which query returns the number of failed sign-ins (error 50126) per user over the last 7 days?",
   fr:"Dans Log Analytics, quelle requête retourne le nombre de connexions échouées (erreur 50126) par utilisateur sur les 7 derniers jours ?"},
options:[
 {en:"SigninLogs | where TimeGenerated > ago(7d) | where ResultType == \"50126\" | summarize count() by UserPrincipalName", fr:"SigninLogs | where TimeGenerated > ago(7d) | where ResultType == \"50126\" | summarize count() by UserPrincipalName"},
 {en:"SELECT * FROM SigninLogs WHERE ResultType = 50126", fr:"SELECT * FROM SigninLogs WHERE ResultType = 50126"},
 {en:"AuditLogs | where OperationName == \"50126\" | count", fr:"AuditLogs | where OperationName == \"50126\" | count"},
 {en:"SigninLogs | take 50126", fr:"SigninLogs | take 50126"}],
correct:[0],
explanation:{en:"A is correct: KQL pipes the SigninLogs table through time and result filters, then aggregates with summarize count() by UserPrincipalName. ResultType 50126 = invalid username/password.\nB is wrong: that's SQL, not KQL.\nC is wrong: failed sign-ins live in SigninLogs, not AuditLogs, and OperationName isn't an error code.\nD is wrong: take just samples N rows.",
fr:"A est correct : le KQL enchaîne la table SigninLogs avec des filtres de temps et de résultat, puis agrège avec summarize count() by UserPrincipalName. ResultType 50126 = identifiant/mot de passe invalide.\nB est faux : c'est du SQL, pas du KQL.\nC est faux : les connexions échouées sont dans SigninLogs, pas AuditLogs, et OperationName n'est pas un code d'erreur.\nD est faux : take échantillonne juste N lignes."}
},
{
id:"d4-009", domain:4, topic:"Break-glass monitoring",
q:{en:"You created two break-glass Global Admin accounts. Security requires an alert whenever either account signs in. What is the recommended implementation?",
   fr:"Tu as créé deux comptes break-glass Global Admin. La sécurité exige une alerte à chaque connexion de l'un d'eux. Quelle est l'implémentation recommandée ?"},
options:[
 {en:"Send sign-in logs to Log Analytics and create an Azure Monitor alert rule on a KQL query matching those account IDs", fr:"Envoyer les sign-in logs vers Log Analytics et créer une règle d'alerte Azure Monitor sur une requête KQL ciblant les IDs de ces comptes"},
 {en:"Check the sign-in logs manually every morning", fr:"Vérifier les sign-in logs manuellement chaque matin"},
 {en:"Enable Identity Protection notifications", fr:"Activer les notifications d'Identity Protection"},
 {en:"Configure SSPR notifications", fr:"Configurer les notifications SSPR"}],
correct:[0],
explanation:{en:"A is correct: this is Microsoft's documented pattern — diagnostic settings to Log Analytics + an alert rule (KQL: SigninLogs | where UserId in (...)) with an action group (email/SMS/Teams) to fire within minutes of any break-glass sign-in.\nB is wrong: too slow — an unnoticed use of emergency credentials is a serious incident.\nC is wrong: Identity Protection alerts on RISK, and these accounts sign in rarely from unusual contexts — you need EVERY sign-in flagged.\nD is wrong: SSPR notifications relate to password resets, not sign-ins.",
fr:"A est correct : c'est le schéma documenté par Microsoft — diagnostic settings vers Log Analytics + règle d'alerte (KQL : SigninLogs | where UserId in (...)) avec un action group (email/SMS/Teams) qui se déclenche en minutes à toute connexion break-glass.\nB est faux : trop lent — un usage inaperçu des credentials d'urgence est un incident grave.\nC est faux : Identity Protection alerte sur le RISQUE ; ici il faut signaler CHAQUE connexion.\nD est faux : les notifications SSPR concernent les réinitialisations, pas les connexions."}
},
{
id:"d4-010", domain:4, topic:"Terms of use",
q:{en:"Before accessing the HR application, all users must accept the company's data-handling agreement, and acceptance must be logged for auditors. What do you configure?",
   fr:"Avant d'accéder à l'application RH, tous les utilisateurs doivent accepter l'accord de traitement des données, et l'acceptation doit être tracée pour les auditeurs. Que configures-tu ?"},
options:[
 {en:"A Terms of use (PDF) enforced by a Conditional Access policy targeting the HR app", fr:"Des Terms of use (PDF) imposés par une politique Conditional Access ciblant l'app RH"},
 {en:"An email asking users to reply \"I accept\"", fr:"Un email demandant de répondre « J'accepte »"},
 {en:"A SharePoint page with the policy text", fr:"Une page SharePoint avec le texte de la politique"},
 {en:"An access review", fr:"Une access review"}],
correct:[0],
explanation:{en:"A is correct: upload the agreement as a ToU (PDF), then a CA policy on the HR app with grant control \"Require terms of use\" blocks access until acceptance; Entra logs who accepted, when, and which version — audit-ready. ToU can also require per-device acceptance or periodic re-acceptance.\nB and C are wrong: no enforcement and no reliable audit trail.\nD is wrong: access reviews certify access, they don't collect agreement acceptance.",
fr:"A est correct : charge l'accord comme ToU (PDF), puis une politique CA sur l'app RH avec le contrôle « Require terms of use » bloque l'accès jusqu'à acceptation ; Entra journalise qui a accepté, quand, et quelle version — prêt pour l'audit. Les ToU peuvent aussi exiger une acceptation par appareil ou périodique.\nB et C sont faux : aucune contrainte et pas de piste d'audit fiable.\nD est faux : les access reviews certifient l'accès, elles ne collectent pas d'acceptation d'accord."}
},
{
id:"d4-011", domain:4, topic:"PIM audit",
q:{en:"An auditor asks: \"Who activated the Security Administrator role last month, when, and why?\" Where do you find this fastest?",
   fr:"Un auditeur demande : « Qui a activé le rôle Security Administrator le mois dernier, quand et pourquoi ? » Où trouves-tu ça le plus vite ?"},
options:[
 {en:"PIM > Microsoft Entra roles > Resource audit (PIM audit history)", fr:"PIM > Microsoft Entra roles > Resource audit (historique d'audit PIM)"},
 {en:"Sign-in logs", fr:"Les sign-in logs"},
 {en:"Identity Secure Score", fr:"L'Identity Secure Score"},
 {en:"Provisioning logs", fr:"Les provisioning logs"}],
correct:[0],
explanation:{en:"A is correct: PIM's audit history records all activations, assignments, approvals — including the justification text and timestamps. (These events also appear in the Entra audit logs, but PIM's resource audit view is the direct answer.)\nB is wrong: sign-in logs show authentications, not role activations.\nC is wrong: Secure Score is posture guidance.\nD is wrong: provisioning logs track SCIM/HR provisioning.",
fr:"A est correct : l'historique d'audit PIM enregistre toutes les activations, assignations, approbations — y compris la justification et les horodatages. (Ces événements sont aussi dans les audit logs Entra, mais la vue Resource audit de PIM est la réponse directe.)\nB est faux : les sign-in logs montrent les authentifications, pas les activations de rôles.\nC est faux : le Secure Score est un guide de posture.\nD est faux : les provisioning logs tracent le provisioning SCIM/RH."}
},
{
id:"d4-012", domain:4, topic:"Entitlement delegation",
q:{en:"The IT team is overloaded creating access packages for every department. You must delegate to department leads the ability to manage access packages for THEIR OWN resources only. What do you do?",
   fr:"L'équipe IT est débordée par la création d'access packages pour chaque département. Tu dois déléguer aux responsables de département la gestion des access packages pour LEURS ressources uniquement. Que fais-tu ?"},
options:[
 {en:"Create a catalog per department and assign the department leads as catalog owners", fr:"Créer un catalog par département et assigner les responsables comme catalog owners"},
 {en:"Give them the Identity Governance Administrator role", fr:"Leur donner le rôle Identity Governance Administrator"},
 {en:"Give them Global Administrator", fr:"Leur donner Global Administrator"},
 {en:"Let them email IT for each package", fr:"Les laisser envoyer un email à l'IT pour chaque package"}],
correct:[0],
explanation:{en:"A is correct: catalogs are the delegation boundary of entitlement management — a catalog owner manages resources and access packages inside their catalog only. Delegation model: admin creates catalogs, adds owners, owners run their packages.\nB is wrong: Identity Governance Administrator is tenant-wide — too broad.\nC is wrong: absurdly over-privileged.\nD is wrong: keeps the bottleneck the delegation was meant to remove.",
fr:"A est correct : les catalogs sont la frontière de délégation d'entitlement management — un catalog owner gère les ressources et access packages de son catalog uniquement. Modèle : l'admin crée les catalogs, ajoute les owners, les owners gèrent leurs packages.\nB est faux : Identity Governance Administrator est tenant-wide — trop large.\nC est faux : sur-privilégié à l'absurde.\nD est faux : conserve le goulot d'étranglement que la délégation devait supprimer."}
},
{
id:"d4-013", domain:4, topic:"Secure Score",
q:{en:"What does Identity Secure Score provide?",
   fr:"Qu'apporte l'Identity Secure Score ?"},
options:[
 {en:"A percentage-based measurement of your identity security posture with prioritized improvement actions (e.g. require MFA for admins, block legacy auth)", fr:"Une mesure en pourcentage de ta posture de sécurité identitaire avec des actions d'amélioration priorisées (ex : MFA pour les admins, bloquer la legacy auth)"},
 {en:"A per-user risk score from Identity Protection", fr:"Un score de risque par utilisateur issu d'Identity Protection"},
 {en:"The exam score needed to pass SC-300", fr:"Le score d'examen requis pour réussir le SC-300"},
 {en:"A billing optimization report", fr:"Un rapport d'optimisation de facturation"}],
correct:[0],
explanation:{en:"A is correct: Identity Secure Score (surfaced in Entra and within Microsoft Secure Score) compares your configuration against Microsoft best practices and lists weighted improvement actions to raise your posture.\nB is wrong: user/sign-in risk levels come from Identity Protection — different feature.\nC is wrong: nice try — that's 700/1000!\nD is wrong: unrelated to billing.",
fr:"A est correct : l'Identity Secure Score (visible dans Entra et au sein du Microsoft Secure Score) compare ta configuration aux bonnes pratiques Microsoft et liste des actions d'amélioration pondérées pour élever ta posture.\nB est faux : les niveaux de risque utilisateur/connexion viennent d'Identity Protection — autre fonctionnalité.\nC est faux : bien tenté — ça c'est 700/1000 !\nD est faux : rien à voir avec la facturation."}
},
{
id:"d4-014", domain:4, topic:"Access review of roles",
q:{en:"Security policy requires that all PRIVILEGED role assignments (Entra admin roles) are recertified monthly by the security team, with automatic removal of denied assignments. What feature do you use?",
   fr:"La politique de sécurité exige que toutes les assignations de rôles PRIVILÉGIÉS (rôles admin Entra) soient recertifiées chaque mois par l'équipe sécurité, avec retrait automatique des refus. Quelle fonctionnalité utilises-tu ?"},
options:[
 {en:"Access reviews of Microsoft Entra roles (created from PIM), monthly recurrence, auto-apply", fr:"Des access reviews des rôles Microsoft Entra (créées depuis PIM), récurrence mensuelle, auto-application"},
 {en:"A monthly PowerShell export of role members", fr:"Un export PowerShell mensuel des membres des rôles"},
 {en:"Role settings requiring justification", fr:"Des role settings exigeant une justification"},
 {en:"An entitlement management access package", fr:"Un access package d'entitlement management"}],
correct:[0],
explanation:{en:"A is correct: PIM includes access reviews for privileged Entra roles (and Azure resource roles): monthly recurrence, security team as reviewers, auto-apply removes denied/unreviewed assignments per your settings.\nB is wrong: an export is reporting, not a decision + removal workflow.\nC is wrong: justification applies at ACTIVATION, not periodic recertification of who holds assignments.\nD is wrong: packages govern requesting bundles of resources, not recurring recertification of existing role assignments.",
fr:"A est correct : PIM inclut des access reviews pour les rôles Entra privilégiés (et rôles de ressources Azure) : récurrence mensuelle, équipe sécurité en reviewers, auto-application retirant les assignations refusées/non revues selon tes réglages.\nB est faux : un export est du reporting, pas un workflow de décision + retrait.\nC est faux : la justification s'applique à l'ACTIVATION, pas à la recertification périodique des détenteurs.\nD est faux : les packages gouvernent la demande de lots de ressources, pas la recertification récurrente d'assignations de rôles existantes."}
},
{
id:"d4-015", domain:4, topic:"Workbooks",
q:{en:"You want a visual dashboard analyzing Conditional Access policy impact (users affected, report-only results) over time. Sign-in logs are already sent to Log Analytics. What do you use?",
   fr:"Tu veux un tableau de bord visuel analysant l'impact des politiques Conditional Access (utilisateurs affectés, résultats report-only) dans le temps. Les sign-in logs vont déjà dans Log Analytics. Qu'utilises-tu ?"},
options:[
 {en:"The built-in \"Conditional Access Insights and Reporting\" workbook in Entra", fr:"Le workbook intégré « Conditional Access Insights and Reporting » dans Entra"},
 {en:"The What If tool", fr:"L'outil What If"},
 {en:"Identity Secure Score", fr:"L'Identity Secure Score"},
 {en:"The provisioning logs", fr:"Les provisioning logs"}],
correct:[0],
explanation:{en:"A is correct: Entra workbooks (built on Azure Monitor workbooks, requiring the Log Analytics integration) include Conditional Access Insights and Reporting — visualizing policy outcomes including report-only impact over time.\nB is wrong: What If simulates ONE hypothetical sign-in, not aggregate trends.\nC is wrong: Secure Score is posture recommendations, not CA analytics.\nD is wrong: provisioning logs concern SCIM provisioning.",
fr:"A est correct : les workbooks Entra (basés sur les workbooks Azure Monitor, nécessitant l'intégration Log Analytics) incluent Conditional Access Insights and Reporting — visualisant les résultats des politiques, y compris l'impact report-only dans le temps.\nB est faux : What If simule UNE connexion hypothétique, pas des tendances agrégées.\nC est faux : le Secure Score donne des recommandations de posture, pas d'analytique CA.\nD est faux : les provisioning logs concernent le provisioning SCIM."}
},
{
id:"d4-016", domain:4, topic:"PIM assignment types",
q:{en:"In PIM, what is the difference between an \"eligible\" and an \"active\" assignment?",
   fr:"Dans PIM, quelle est la différence entre une assignation « eligible » et « active » ?"},
options:[
 {en:"Eligible requires the user to activate the role (JIT) before using it; active grants the privileges immediately without activation", fr:"Eligible exige que l'utilisateur active le rôle (JIT) avant de l'utiliser ; active accorde les privilèges immédiatement sans activation"},
 {en:"Eligible is permanent, active is temporary", fr:"Eligible est permanent, active est temporaire"},
 {en:"Eligible roles have fewer permissions", fr:"Les rôles eligible ont moins de permissions"},
 {en:"Active assignments require approval at each use", fr:"Les assignations active exigent une approbation à chaque usage"}],
correct:[0],
explanation:{en:"A is correct: eligible = the user CAN activate (with MFA/justification/approval as configured) for a limited window; active = privileges are standing. Both types can independently be permanent or time-bound.\nB is wrong: permanence vs time-bound is a separate axis from eligible vs active.\nC is wrong: the role's permissions are identical; only WHEN you hold them differs.\nD is wrong: approval applies to ACTIVATION of eligible assignments.",
fr:"A est correct : eligible = l'utilisateur PEUT activer (avec MFA/justification/approbation selon la config) pour une fenêtre limitée ; active = privilèges permanents en cours. Les deux types peuvent indépendamment être permanents ou bornés.\nB est faux : permanent vs borné est un axe séparé d'eligible vs active.\nC est faux : les permissions du rôle sont identiques ; seul le QUAND change.\nD est faux : l'approbation s'applique à l'ACTIVATION des assignations eligible."}
},
{
id:"d4-017", domain:4, topic:"Connected organizations",
q:{en:"You want users from partner company Litware (which has its own Entra tenant) to be able to REQUEST your \"Project X\" access package themselves. What must you configure in entitlement management?",
   fr:"Tu veux que les utilisateurs du partenaire Litware (qui a son propre tenant Entra) puissent DEMANDER eux-mêmes ton access package « Project X ». Que dois-tu configurer dans entitlement management ?"},
options:[
 {en:"Add Litware as a connected organization and create a policy \"For users not in your directory\" allowing that connected organization", fr:"Ajouter Litware comme connected organization et créer une policy « For users not in your directory » autorisant cette connected organization"},
 {en:"Invite every Litware user as a guest first", fr:"Inviter d'abord chaque utilisateur Litware comme guest"},
 {en:"Enable cross-tenant synchronization with Litware", fr:"Activer la cross-tenant synchronization avec Litware"},
 {en:"Make the package visible to \"All users\" including anonymous", fr:"Rendre le package visible à « Tous les utilisateurs » y compris anonymes"}],
correct:[0],
explanation:{en:"A is correct: connected organizations (identified by their tenant/domain) let external users request packages; upon approval a guest account is created automatically, and its lifecycle (removal at expiry) is governed.\nB is wrong: pre-inviting defeats the self-service purpose — entitlement management creates the guests on demand.\nC is wrong: cross-tenant sync is for same-organization multi-tenant setups, not partner self-service requests.\nD is wrong: there's no anonymous access; scoping to specific connected orgs is the controlled approach.",
fr:"A est correct : les connected organizations (identifiées par leur tenant/domaine) permettent aux externes de demander des packages ; à l'approbation, un compte guest est créé automatiquement et son cycle de vie (suppression à l'expiration) est gouverné.\nB est faux : pré-inviter annule l'intérêt du self-service — entitlement management crée les guests à la demande.\nC est faux : la cross-tenant sync sert aux organisations multi-tenants internes, pas aux demandes self-service de partenaires.\nD est faux : pas d'accès anonyme ; cibler des connected orgs précises est l'approche contrôlée."}
},
{
id:"d4-018", domain:4, topic:"Lifecycle workflows",
q:{en:"HR wants new hires to automatically receive a welcome email, a Temporary Access Pass, and group memberships on their start date — and leavers to be disabled and removed from groups on their last day. Which Entra feature automates this?",
   fr:"Les RH veulent que les nouveaux embauchés reçoivent automatiquement un email de bienvenue, un Temporary Access Pass et des appartenances de groupes à leur date d'arrivée — et que les partants soient désactivés et retirés des groupes à leur dernier jour. Quelle fonctionnalité Entra automatise ça ?"},
options:[
 {en:"Lifecycle workflows (joiner/mover/leaver) in Identity Governance", fr:"Les lifecycle workflows (joiner/mover/leaver) d'Identity Governance"},
 {en:"Dynamic groups", fr:"Les groupes dynamiques"},
 {en:"Access reviews", fr:"Les access reviews"},
 {en:"PIM for Groups", fr:"PIM for Groups"}],
correct:[0],
explanation:{en:"A is correct: lifecycle workflows (Entra ID Governance license) trigger on attributes like employeeHireDate/employeeLeaveDateTime and run task templates: send welcome email, issue TAP, add/remove groups, disable account, etc.\nB is wrong: dynamic groups handle membership by attributes but can't send TAPs/emails or orchestrate multi-step joiner/leaver tasks.\nC is wrong: reviews recertify existing access.\nD is wrong: PIM for Groups is JIT elevation, not onboarding automation.",
fr:"A est correct : les lifecycle workflows (licence Entra ID Governance) se déclenchent sur des attributs comme employeeHireDate/employeeLeaveDateTime et exécutent des tâches : email de bienvenue, émission de TAP, ajout/retrait de groupes, désactivation du compte, etc.\nB est faux : les groupes dynamiques gèrent l'appartenance par attributs mais ne savent pas envoyer TAP/emails ni orchestrer des tâches multi-étapes joiner/leaver.\nC est faux : les reviews recertifient l'existant.\nD est faux : PIM for Groups est de l'élévation JIT, pas de l'automatisation d'onboarding."}
},
{
id:"d4-019", domain:4, topic:"Azure resource PIM",
q:{en:"A developer needs the Contributor role on a production Azure subscription, but only occasionally and never for more than 8 hours, with approval. How do you set this up?",
   fr:"Un développeur a besoin du rôle Contributor sur un abonnement Azure de production, mais seulement occasionnellement, jamais plus de 8 heures, avec approbation. Comment configures-tu ça ?"},
options:[
 {en:"In PIM > Azure resources, onboard the subscription and create an ELIGIBLE Contributor assignment with approval and 8h max activation", fr:"Dans PIM > Azure resources, intégrer l'abonnement et créer une assignation Contributor ELIGIBLE avec approbation et activation max 8h"},
 {en:"Assign Contributor permanently via Azure RBAC", fr:"Assigner Contributor en permanence via Azure RBAC"},
 {en:"Give him Owner so he can manage his own access", fr:"Lui donner Owner pour qu'il gère lui-même son accès"},
 {en:"Create a break-glass account for him", fr:"Créer un compte break-glass pour lui"}],
correct:[0],
explanation:{en:"A is correct: PIM manages Azure RESOURCE roles too (Owner, Contributor, etc. on management groups/subscriptions/resource groups) — eligible assignment + role settings (approval, max 8h, MFA) = JIT access to production.\nB is wrong: standing Contributor on production violates least privilege/JIT requirements.\nC is wrong: Owner is a privilege escalation, the opposite of the goal.\nD is wrong: break-glass accounts are for tenant emergencies only, never personal use.",
fr:"A est correct : PIM gère aussi les rôles de RESSOURCES Azure (Owner, Contributor, etc. sur management groups/abonnements/resource groups) — assignation eligible + réglages (approbation, max 8h, MFA) = accès JIT à la production.\nB est faux : un Contributor permanent en production viole le moindre privilège/JIT.\nC est faux : Owner est une escalade de privilèges, l'opposé de l'objectif.\nD est faux : les comptes break-glass servent aux urgences du tenant, jamais à un usage personnel."}
},
{
id:"d4-020", domain:4, topic:"Provisioning logs",
q:{en:"After configuring SCIM provisioning to a SaaS app, some users were skipped and not created in the app. Where do you look FIRST to find out why?",
   fr:"Après avoir configuré le provisioning SCIM vers une app SaaS, certains utilisateurs ont été ignorés et pas créés dans l'app. Où regardes-tu EN PREMIER pour comprendre pourquoi ?"},
options:[
 {en:"The provisioning logs in Microsoft Entra ID", fr:"Les provisioning logs dans Microsoft Entra ID"},
 {en:"The sign-in logs", fr:"Les sign-in logs"},
 {en:"The audit logs of the SaaS app only", fr:"Uniquement les audit logs de l'app SaaS"},
 {en:"Identity Protection risk detections", fr:"Les détections de risque d'Identity Protection"}],
correct:[0],
explanation:{en:"A is correct: provisioning logs show each user's provisioning outcome — Success, Skipped (with the exact scoping-filter or out-of-scope reason), or Failure (with the error from the target app).\nB is wrong: sign-in logs cover authentication, not provisioning cycles.\nC is wrong: the SaaS side may help later, but the Entra provisioning logs give the skip reason directly.\nD is wrong: risk detections are about compromised identities.",
fr:"A est correct : les provisioning logs montrent le résultat de chaque utilisateur — Success, Skipped (avec la raison exacte : scoping filter, hors périmètre) ou Failure (avec l'erreur renvoyée par l'app cible).\nB est faux : les sign-in logs couvrent l'authentification, pas les cycles de provisioning.\nC est faux : le côté SaaS peut aider ensuite, mais les provisioning logs Entra donnent directement la raison du skip.\nD est faux : les détections de risque concernent les identités compromises."}
}
];
