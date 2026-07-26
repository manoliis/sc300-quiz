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
},
{
id:"d4-021", domain:4, topic:"PIM role settings",
q:{en:"Security requires that activating the User Administrator role always demands MFA, a business justification and a ServiceNow ticket number, and that activation lasts at most 4 hours. Where do you configure all of this?",
   fr:"La sécurité exige que l'activation du rôle User Administrator demande toujours le MFA, une justification métier et un numéro de ticket ServiceNow, et que l'activation dure au maximum 4 heures. Où configures-tu tout cela ?"},
options:[
 {en:"In the PIM role settings for that specific role", fr:"Dans les role settings PIM de ce rôle précis"},
 {en:"In a Conditional Access policy only", fr:"Dans une stratégie d'accès conditionnel uniquement"},
 {en:"In the Authentication methods policy", fr:"Dans l'Authentication methods policy"},
 {en:"In an access review of the role", fr:"Dans une access review du rôle"}],
correct:[0],
explanation:{en:"A is correct: PIM role settings are per role and include maximum activation duration, require MFA (or a Conditional Access authentication context), require justification, require ticket information, require approval, and notification rules.\nB is wrong: Conditional Access can enforce the authentication strength for activation via an authentication context, but justification, ticket number and activation duration only exist in PIM.\nC is wrong: that policy defines which methods exist tenant-wide, not activation requirements.\nD is wrong: access reviews periodically recertify who holds the role; they do not gate activation.",
fr:"A est correct : les role settings PIM sont propres à chaque rôle et incluent la durée maximale d'activation, l'exigence de MFA (ou d'un authentication context d'accès conditionnel), l'exigence de justification, l'exigence d'informations de ticket, l'exigence d'approbation et les règles de notification.\nB est faux : l'accès conditionnel peut imposer la force d'authentification à l'activation via un authentication context, mais justification, numéro de ticket et durée d'activation n'existent que dans PIM.\nC est faux : cette stratégie définit les méthodes disponibles dans le tenant, pas les exigences d'activation.\nD est faux : les access reviews recertifient périodiquement les détenteurs du rôle, elles ne conditionnent pas l'activation."}
},
{
id:"d4-022", domain:4, topic:"PIM assignment states",
q:{en:"Which assignment gives an administrator standing permissions that PIM does NOT require them to activate?",
   fr:"Quelle attribution donne à un administrateur des permissions permanentes que PIM ne lui demande PAS d'activer ?"},
options:[
 {en:"An active assignment", fr:"Une attribution active"},
 {en:"An eligible assignment", fr:"Une attribution éligible"},
 {en:"An eligible time-bound assignment", fr:"Une attribution éligible limitée dans le temps"},
 {en:"An approved activation request", fr:"Une demande d'activation approuvée"}],
correct:[0],
explanation:{en:"A is correct: an active assignment means the role is in effect without activation — it may still be time-bound (expiring) but while it lasts the permissions are standing. Minimise active assignments; keep only break-glass accounts permanently active.\nB and C are wrong: eligible means the user must activate, which is the whole point of just-in-time access; time-bound only limits how long eligibility lasts.\nD is wrong: an approved activation produces a temporary active state, but the assignment itself remains eligible.",
fr:"A est correct : une attribution active signifie que le rôle s'applique sans activation — elle peut être limitée dans le temps, mais tant qu'elle dure les permissions sont permanentes. Il faut minimiser les attributions actives ; seuls les comptes break-glass restent actifs en permanence.\nB et C sont faux : éligible signifie que l'utilisateur doit activer, c'est tout l'intérêt de l'accès juste-à-temps ; « limité dans le temps » ne borne que la durée de l'éligibilité.\nD est faux : une activation approuvée produit un état actif temporaire, mais l'attribution elle-même reste éligible."}
},
{
id:"d4-023", domain:4, topic:"PIM alerts",
q:{en:"PIM raises the alert \"There are too many global administrators\". What is the appropriate governance response?",
   fr:"PIM déclenche l'alerte « Il y a trop d'administrateurs généraux ». Quelle est la réponse de gouvernance appropriée ?"},
options:[
 {en:"Review each Global Administrator, move those who genuinely need it to eligible assignments in PIM, and reassign the rest to least-privileged roles", fr:"Passer en revue chaque Global Administrator, basculer ceux qui en ont réellement besoin en attributions éligibles dans PIM, et réaffecter les autres à des rôles de moindre privilège"},
 {en:"Dismiss the alert and raise the alert threshold", fr:"Rejeter l'alerte et augmenter son seuil"},
 {en:"Delete the extra administrator accounts immediately", fr:"Supprimer immédiatement les comptes administrateurs en trop"},
 {en:"Enable Security defaults", fr:"Activer les Security defaults"}],
correct:[0],
explanation:{en:"A is correct: the alert is a prompt to reduce standing privilege — convert necessary access to just-in-time eligibility and replace Global Administrator with a scoped role (for example User Administrator or Authentication Administrator) wherever the task allows.\nB is wrong: raising the threshold hides the risk instead of reducing it; tuning is only reasonable after remediation.\nC is wrong: deleting accounts without review breaks people's access and possibly services.\nD is wrong: Security defaults do not reduce the number of privileged role holders.",
fr:"A est correct : l'alerte invite à réduire le privilège permanent — convertir l'accès nécessaire en éligibilité juste-à-temps et remplacer Global Administrator par un rôle plus ciblé (par ex. User Administrator ou Authentication Administrator) partout où la tâche le permet.\nB est faux : augmenter le seuil masque le risque au lieu de le réduire ; l'ajustement n'est raisonnable qu'après remédiation.\nC est faux : supprimer des comptes sans revue casse des accès et potentiellement des services.\nD est faux : les Security defaults ne réduisent pas le nombre de détenteurs de rôles privilégiés."}
},
{
id:"d4-024", domain:4, topic:"Elevate access",
q:{en:"A Global Administrator must temporarily gain the ability to manage role assignments on every Azure subscription in the tenant, including orphaned ones. What is the documented approach?",
   fr:"Un Global Administrator doit obtenir temporairement la capacité de gérer les attributions de rôles sur tous les abonnements Azure du tenant, y compris orphelins. Quelle est l'approche documentée ?"},
options:[
 {en:"Turn on \"Access management for Azure resources\", which grants User Access Administrator at root scope, do the work, then turn it off", fr:"Activer « Gestion des accès pour les ressources Azure », ce qui accorde User Access Administrator à la racine, faire le travail, puis désactiver"},
 {en:"Assign Owner on each subscription manually", fr:"Assigner Owner sur chaque abonnement manuellement"},
 {en:"Add the Global Administrator role to the subscription's RBAC assignments", fr:"Ajouter le rôle Global Administrator aux attributions RBAC de l'abonnement"},
 {en:"Use PIM to activate the Global Administrator role, which includes Azure RBAC", fr:"Utiliser PIM pour activer le rôle Global Administrator, qui inclut Azure RBAC"}],
correct:[0],
explanation:{en:"A is correct: elevating access assigns User Access Administrator at the root (/) scope so the Global Admin can reach every management group and subscription — including ones with no owner — and Microsoft explicitly says to disable it once the task is done. The action is recorded in the directory audit log.\nB is wrong: you cannot assign Owner on a subscription you cannot see, which is the orphaned-subscription problem.\nC is wrong: Entra directory roles are not Azure RBAC roles and cannot be assigned there.\nD is wrong: activating Global Administrator grants no Azure resource permissions by itself.",
fr:"A est correct : l'élévation d'accès attribue User Access Administrator à la racine (/) pour que le Global Admin atteigne chaque groupe d'administration et abonnement — y compris ceux sans propriétaire — et Microsoft indique explicitement de la désactiver une fois la tâche terminée. L'action est enregistrée dans le journal d'audit de l'annuaire.\nB est faux : on ne peut pas assigner Owner sur un abonnement qu'on ne voit pas, c'est justement le problème des abonnements orphelins.\nC est faux : les rôles d'annuaire Entra ne sont pas des rôles Azure RBAC et ne peuvent pas y être attribués.\nD est faux : activer Global Administrator n'accorde en soi aucune permission sur les ressources Azure."}
},
{
id:"d4-025", domain:4, topic:"Privileged role separation",
q:{en:"A helpdesk lead must be able to reset the credentials of other administrators, but must NOT be able to change anyone's role assignments. Which role fits?",
   fr:"Un responsable helpdesk doit pouvoir réinitialiser les identifiants d'autres administrateurs, mais ne doit PAS pouvoir modifier les attributions de rôles. Quel rôle convient ?"},
options:[
 {en:"Privileged Authentication Administrator", fr:"Privileged Authentication Administrator"},
 {en:"Privileged Role Administrator", fr:"Privileged Role Administrator"},
 {en:"Authentication Administrator", fr:"Authentication Administrator"},
 {en:"Global Administrator", fr:"Global Administrator"}],
correct:[0],
explanation:{en:"A is correct: Privileged Authentication Administrator can reset credentials and manage authentication methods for ANY user, including administrators, but grants no role-management rights.\nB is wrong: Privileged Role Administrator manages role assignments and PIM settings — exactly what must be excluded.\nC is wrong: Authentication Administrator can only act on non-administrator users, so it cannot reset another admin's credentials.\nD is wrong: Global Administrator grants everything, violating least privilege.",
fr:"A est correct : Privileged Authentication Administrator peut réinitialiser les identifiants et gérer les méthodes d'authentification de N'IMPORTE QUEL utilisateur, y compris les administrateurs, mais n'accorde aucun droit de gestion des rôles.\nB est faux : Privileged Role Administrator gère les attributions de rôles et les réglages PIM — précisément ce qu'il faut exclure.\nC est faux : Authentication Administrator n'agit que sur les utilisateurs non administrateurs, il ne peut donc pas réinitialiser les identifiants d'un autre admin.\nD est faux : Global Administrator accorde tout, en violation du moindre privilège."}
},
{
id:"d4-026", domain:4, topic:"Access package catalogs",
q:{en:"A project needs a single request that grants membership of two groups, access to one enterprise application and a SharePoint site role. What must you build?",
   fr:"Un projet nécessite une demande unique accordant l'appartenance à deux groupes, l'accès à une application d'entreprise et un rôle sur un site SharePoint. Que dois-tu construire ?"},
options:[
 {en:"A catalog containing those resources, then an access package bundling the required resource roles, with a policy defining who can request", fr:"Un catalogue contenant ces ressources, puis un access package regroupant les rôles de ressources requis, avec une stratégie définissant qui peut demander"},
 {en:"Four separate access reviews", fr:"Quatre access reviews distinctes"},
 {en:"A dynamic group with a rule covering all four resources", fr:"Un groupe dynamique avec une règle couvrant les quatre ressources"},
 {en:"A PIM eligible assignment for each resource", fr:"Une attribution éligible PIM pour chaque ressource"}],
correct:[0],
explanation:{en:"A is correct: in entitlement management, a catalog is the container of resources, an access package bundles specific resource ROLES from that catalog, and policies define who may request, who approves, and when access expires — one request, all four grants.\nB is wrong: access reviews recertify existing access; they grant nothing.\nC is wrong: a dynamic group assigns membership by attribute, cannot include an app role or a SharePoint role, and is not requestable.\nD is wrong: PIM covers Entra and Azure roles and PIM for Groups, not SharePoint site roles as a bundle.",
fr:"A est correct : dans l'entitlement management, un catalogue est le conteneur de ressources, un access package regroupe des RÔLES de ressources précis issus de ce catalogue, et les stratégies définissent qui peut demander, qui approuve et quand l'accès expire — une seule demande, les quatre octrois.\nB est faux : les access reviews recertifient un accès existant, elles n'accordent rien.\nC est faux : un groupe dynamique attribue l'appartenance par attribut, ne peut pas inclure un app role ni un rôle SharePoint, et n'est pas demandable.\nD est faux : PIM couvre les rôles Entra et Azure et PIM for Groups, pas un lot incluant des rôles de site SharePoint."}
},
{
id:"d4-027", domain:4, topic:"Access packages for externals",
q:{en:"Partners from three companies must request project access themselves. They have no accounts in your tenant, and their manager at their own company must approve. What do you configure?",
   fr:"Des partenaires de trois entreprises doivent demander eux-mêmes l'accès au projet. Ils n'ont aucun compte dans ton tenant, et leur responsable dans leur propre entreprise doit approuver. Que configures-tu ?"},
options:[
 {en:"Connected organizations for the three companies, and an access package policy for \"users not in your directory\" with an external sponsor as approver", fr:"Des connected organizations pour les trois entreprises, et une stratégie d'access package pour « utilisateurs hors de ton annuaire » avec un sponsor externe comme approbateur"},
 {en:"Invite each partner as a guest first, then create an internal-only policy", fr:"Inviter d'abord chaque partenaire comme guest, puis créer une stratégie pour internes uniquement"},
 {en:"Cross-tenant synchronization from each partner tenant", fr:"Une cross-tenant synchronization depuis chaque tenant partenaire"},
 {en:"A self-service sign-up user flow with no approval", fr:"Un user flow d'inscription self-service sans approbation"}],
correct:[0],
explanation:{en:"A is correct: a connected organization registers a partner tenant or domain, and a policy for users not yet in your directory lets them request through the My Access portal — the guest account is created automatically on approval, and the approver can be the external sponsor from the connected organization.\nB is wrong: pre-inviting everyone defeats self-service and creates guests who may never need access.\nC is wrong: cross-tenant sync provisions users automatically, which is not a request-and-approve model.\nD is wrong: self-service sign-up has no approval workflow and no resource bundling.",
fr:"A est correct : une connected organization enregistre un tenant ou domaine partenaire, et une stratégie pour les utilisateurs pas encore dans ton annuaire leur permet de demander via le portail Mon accès — le compte guest est créé automatiquement à l'approbation, et l'approbateur peut être le sponsor externe de la connected organization.\nB est faux : préinviter tout le monde annule le self-service et crée des guests qui n'auront peut-être jamais besoin d'accès.\nC est faux : la cross-tenant sync provisionne automatiquement, ce n'est pas un modèle demande-approbation.\nD est faux : l'inscription self-service n'a pas de workflow d'approbation ni de regroupement de ressources."}
},
{
id:"d4-028", domain:4, topic:"Auto-assignment policies",
q:{en:"Every employee whose department is Finance must receive a standard bundle of access automatically, with no request, and lose it if they change department. What do you configure?",
   fr:"Chaque employé dont le département est Finance doit recevoir automatiquement un lot d'accès standard, sans demande, et le perdre s'il change de département. Que configures-tu ?"},
options:[
 {en:"An automatic assignment policy on the access package, with a membership rule such as user.department -eq \"Finance\"", fr:"Une stratégie d'assignation automatique sur l'access package, avec une règle comme user.department -eq « Finance »"},
 {en:"A policy allowing all members to request the package", fr:"Une stratégie autorisant tous les membres à demander le package"},
 {en:"A PIM eligible assignment scoped to Finance", fr:"Une attribution éligible PIM ciblée sur Finance"},
 {en:"An access review that adds Finance users automatically", fr:"Une access review qui ajoute automatiquement les utilisateurs Finance"}],
correct:[0],
explanation:{en:"A is correct: an automatic assignment policy uses an attribute rule to assign the access package without any request, and when a user stops matching the rule the assignment is removed — attribute-driven joiner/mover/leaver behaviour.\nB is wrong: that still requires each person to request.\nC is wrong: PIM eligibility requires activation and covers roles, not resource bundles.\nD is wrong: reviews remove or keep existing access; they never grant new access.",
fr:"A est correct : une stratégie d'assignation automatique utilise une règle d'attribut pour attribuer l'access package sans aucune demande, et quand un utilisateur ne correspond plus à la règle l'assignation est retirée — un comportement joiner/mover/leaver piloté par attribut.\nB est faux : cela oblige encore chacun à faire une demande.\nC est faux : l'éligibilité PIM exige une activation et concerne des rôles, pas des lots de ressources.\nD est faux : les revues retirent ou conservent un accès existant, elles n'en accordent jamais de nouveau."}
},
{
id:"d4-029", domain:4, topic:"Separation of duties",
q:{en:"Auditors require that nobody can hold both the \"Accounts Payable\" and the \"Vendor Management\" access packages. How do you enforce this at request time?",
   fr:"Les auditeurs exigent que personne ne puisse détenir à la fois les access packages « Accounts Payable » et « Vendor Management ». Comment l'imposer au moment de la demande ?"},
options:[
 {en:"Configure separation of duties on the access package: mark the other access package (or a group) as incompatible", fr:"Configurer la separation of duties sur l'access package : marquer l'autre access package (ou un groupe) comme incompatible"},
 {en:"Add an approver who is told to check manually", fr:"Ajouter un approbateur à qui l'on demande de vérifier manuellement"},
 {en:"Create a quarterly access review", fr:"Créer une access review trimestrielle"},
 {en:"Use a Conditional Access policy", fr:"Utiliser une stratégie d'accès conditionnel"}],
correct:[0],
explanation:{en:"A is correct: entitlement management supports incompatible access packages and incompatible groups — a user who already has the conflicting access cannot even submit the request, and you can also report on existing users who would violate the rule.\nB is wrong: manual checking is error-prone and not an enforced control.\nC is wrong: a review detects the conflict months later instead of preventing it.\nD is wrong: Conditional Access evaluates sign-ins, not entitlement combinations.",
fr:"A est correct : l'entitlement management supporte les access packages et groupes incompatibles — un utilisateur détenant déjà l'accès conflictuel ne peut même pas soumettre la demande, et tu peux aussi lister les utilisateurs existants qui violeraient la règle.\nB est faux : une vérification manuelle est sujette à erreur et n'est pas un contrôle imposé.\nC est faux : une revue détecte le conflit des mois plus tard au lieu de l'empêcher.\nD est faux : l'accès conditionnel évalue les connexions, pas les combinaisons de droits."}
},
{
id:"d4-030", domain:4, topic:"Entitlement delegation",
q:{en:"Business units must create and manage their own access packages without any Entra administrator role, and without seeing each other's resources. What do you do?",
   fr:"Les directions métier doivent créer et gérer leurs propres access packages sans aucun rôle d'administrateur Entra, et sans voir les ressources des autres. Que fais-tu ?"},
options:[
 {en:"Give each business unit its own catalog and assign catalog owner / access package manager roles on that catalog", fr:"Donner à chaque direction son propre catalogue et attribuer les rôles catalog owner / access package manager sur ce catalogue"},
 {en:"Assign each business unit lead the Identity Governance Administrator role", fr:"Assigner à chaque responsable le rôle Identity Governance Administrator"},
 {en:"Assign the User Administrator role scoped to an administrative unit", fr:"Assigner le rôle User Administrator scopé sur une administrative unit"},
 {en:"Ask them to email requests to the IT team", fr:"Leur demander d'envoyer leurs demandes par email à l'équipe IT"}],
correct:[0],
explanation:{en:"A is correct: entitlement management has its own delegation model — catalog creators, catalog owners, access package managers and assignment managers — scoped to a catalog, so a business unit manages its own packages and sees only its own resources, with no directory role.\nB is wrong: Identity Governance Administrator is tenant-wide and lets each lead see and change everything.\nC is wrong: administrative units scope user and device management, not catalogs.\nD is wrong: that recreates the IT bottleneck the feature is meant to remove.",
fr:"A est correct : l'entitlement management a son propre modèle de délégation — catalog creators, catalog owners, access package managers et assignment managers — limité à un catalogue, donc une direction gère ses propres packages et ne voit que ses ressources, sans rôle d'annuaire.\nB est faux : Identity Governance Administrator est à l'échelle du tenant et permettrait à chaque responsable de tout voir et modifier.\nC est faux : les administrative units limitent la gestion des utilisateurs et appareils, pas des catalogues.\nD est faux : cela recrée le goulot d'étranglement IT que la fonctionnalité vise à supprimer."}
},
{
id:"d4-031", domain:4, topic:"Access review reviewers",
q:{en:"You create an access review of a group with 4,000 members from 60 departments. Who should review, to keep it accurate and scalable?",
   fr:"Tu crées une access review sur un groupe de 4 000 membres issus de 60 départements. Qui doit relire, pour rester juste et à l'échelle ?"},
options:[
 {en:"Managers of the members, with a fallback reviewer for users who have no manager", fr:"Les managers des membres, avec un relecteur de repli pour les utilisateurs sans manager"},
 {en:"A single Global Administrator", fr:"Un seul Global Administrator"},
 {en:"The members themselves only, with no fallback", fr:"Les membres eux-mêmes uniquement, sans repli"},
 {en:"Nobody — enable auto-apply and let the system decide", fr:"Personne — activer l'application automatique et laisser le système décider"}],
correct:[0],
explanation:{en:"A is correct: manager-based review distributes the work to the people with real context, and the fallback reviewer catches users whose manager attribute is empty — otherwise those reviews would have no decision maker.\nB is wrong: one admin cannot judge 4,000 memberships and will rubber-stamp.\nC is wrong: self-review is valid for some scenarios (guests, self-attested need) but everyone approves themselves, and with no fallback it is fragile.\nD is wrong: auto-apply only applies the decisions made (or the configured default when reviewers do not respond); it is not a substitute for reviewers.",
fr:"A est correct : la revue par manager répartit le travail vers les personnes qui ont le contexte réel, et le relecteur de repli couvre les utilisateurs dont l'attribut manager est vide — sinon ces revues n'auraient aucun décideur.\nB est faux : un seul admin ne peut pas juger 4 000 appartenances et validera machinalement.\nC est faux : l'auto-revue est valable dans certains cas (guests, besoin auto-déclaré) mais chacun s'approuve lui-même, et sans repli c'est fragile.\nD est faux : l'application automatique applique les décisions prises (ou le comportement par défaut configuré si les relecteurs ne répondent pas) ; ce n'est pas un substitut aux relecteurs."}
},
{
id:"d4-032", domain:4, topic:"Access review non-response",
q:{en:"In an access review, half the reviewers never respond before the deadline. You must ensure unreviewed access is removed automatically, following a deny-by-default posture. What do you configure?",
   fr:"Dans une access review, la moitié des relecteurs ne répondent jamais avant l'échéance. Tu dois garantir que l'accès non relu est retiré automatiquement, dans une posture de refus par défaut. Que configures-tu ?"},
options:[
 {en:"Auto-apply results, with the \"If reviewers don't respond\" action set to Remove access", fr:"L'application automatique des résultats, avec l'action « Si les relecteurs ne répondent pas » réglée sur Retirer l'accès"},
 {en:"Auto-apply results, with the action set to No change", fr:"L'application automatique des résultats, avec l'action réglée sur Aucun changement"},
 {en:"Manual apply, and chase reviewers by email", fr:"L'application manuelle, en relançant les relecteurs par email"},
 {en:"Extend the review indefinitely", fr:"Prolonger indéfiniment la revue"}],
correct:[0],
explanation:{en:"A is correct: the non-response behaviour can be No change, Remove access, Approve access or Take recommendations. Remove access combined with auto-apply implements fail-secure governance — silence removes access rather than granting it forever.\nB is wrong: No change is the permissive default that lets stale access survive.\nC is wrong: chasing is not an enforced control and does not scale.\nD is wrong: an endless review never produces a decision, which is the worst outcome.",
fr:"A est correct : le comportement en cas de non-réponse peut être Aucun changement, Retirer l'accès, Approuver l'accès ou Suivre les recommandations. Retirer l'accès combiné à l'application automatique met en œuvre une gouvernance fail-secure — le silence retire l'accès au lieu de l'accorder indéfiniment.\nB est faux : Aucun changement est le défaut permissif qui laisse survivre les accès obsolètes.\nC est faux : la relance n'est pas un contrôle imposé et ne passe pas à l'échelle.\nD est faux : une revue sans fin ne produit jamais de décision, c'est le pire résultat."}
},
{
id:"d4-033", domain:4, topic:"Access review recommendations",
q:{en:"Reviewers complain they do not know whether a user still needs access. Which access review feature helps them decide objectively?",
   fr:"Les relecteurs se plaignent de ne pas savoir si un utilisateur a encore besoin de l'accès. Quelle fonctionnalité des access reviews les aide à décider objectivement ?"},
options:[
 {en:"Decision helpers based on sign-in activity, which recommend denying users with no interactive sign-in in the last 30 days", fr:"Les aides à la décision basées sur l'activité de connexion, qui recommandent de refuser les utilisateurs sans connexion interactive depuis 30 jours"},
 {en:"Enabling MFA for the reviewers", fr:"Activer le MFA pour les relecteurs"},
 {en:"Shortening the review to one day", fr:"Raccourcir la revue à un jour"},
 {en:"Assigning the review to the Global Administrator", fr:"Assigner la revue au Global Administrator"}],
correct:[0],
explanation:{en:"A is correct: reviews can show recommendations derived from inactivity (and, for group reviews, from group-to-user affiliation), and you can also configure the review to take the recommendations automatically when reviewers do not act.\nB is wrong: MFA authenticates the reviewer, it gives no decision context.\nC is wrong: less time makes reviews worse, not better informed.\nD is wrong: escalating to an admin removes the context rather than adding it.",
fr:"A est correct : les revues peuvent afficher des recommandations dérivées de l'inactivité (et, pour les revues de groupes, de l'affiliation groupe-utilisateur), et tu peux aussi configurer la revue pour suivre automatiquement ces recommandations si les relecteurs n'agissent pas.\nB est faux : le MFA authentifie le relecteur, il n'apporte aucun contexte de décision.\nC est faux : moins de temps dégrade la revue, elle n'en est pas mieux informée.\nD est faux : escalader vers un admin retire le contexte au lieu de l'ajouter."}
},
{
id:"d4-034", domain:4, topic:"Access review of applications",
q:{en:"You must recertify quarterly who is assigned to a critical enterprise application, including which app role each person holds. What do you create?",
   fr:"Tu dois recertifier chaque trimestre qui est assigné à une application d'entreprise critique, y compris le rôle applicatif détenu par chacun. Que crées-tu ?"},
options:[
 {en:"A recurring access review with the application as the resource, reviewing user assignments per app role", fr:"Une access review récurrente avec l'application comme ressource, relisant les assignations par app role"},
 {en:"A PIM access review of Entra directory roles", fr:"Une access review PIM des rôles d'annuaire Entra"},
 {en:"An access review of the group used for licensing", fr:"Une access review du groupe utilisé pour les licences"},
 {en:"A provisioning log export", fr:"Un export des journaux de provisioning"}],
correct:[0],
explanation:{en:"A is correct: access reviews can target an application directly, listing assigned users grouped by app role, and can recur quarterly with auto-apply.\nB is wrong: PIM reviews cover Entra and Azure roles, not application assignments.\nC is wrong: a licensing group review certifies the wrong object.\nD is wrong: a log export documents changes but performs no recertification.",
fr:"A est correct : les access reviews peuvent cibler directement une application, en listant les utilisateurs assignés regroupés par app role, et peuvent être récurrentes trimestriellement avec application automatique.\nB est faux : les revues PIM couvrent les rôles Entra et Azure, pas les assignations d'applications.\nC est faux : relire un groupe de licences certifie le mauvais objet.\nD est faux : un export de journaux documente les changements mais n'effectue aucune recertification."}
},
{
id:"d4-035", domain:4, topic:"Lifecycle workflows - leaver",
q:{en:"On an employee's last day, their account must be disabled, all licenses removed, and they must be taken out of every group — automatically, on the date in their employeeLeaveDateTime attribute. What do you configure?",
   fr:"Le dernier jour d'un employé, son compte doit être désactivé, toutes ses licences retirées, et il doit être sorti de tous les groupes — automatiquement, à la date de son attribut employeeLeaveDateTime. Que configures-tu ?"},
options:[
 {en:"A leaver lifecycle workflow triggered on employeeLeaveDateTime, with the built-in tasks Disable user account, Remove all licenses and Remove user from all groups", fr:"Un lifecycle workflow de type leaver déclenché sur employeeLeaveDateTime, avec les tâches intégrées Désactiver le compte, Retirer toutes les licences et Retirer l'utilisateur de tous les groupes"},
 {en:"An access review with auto-apply", fr:"Une access review avec application automatique"},
 {en:"A dynamic group excluding leavers", fr:"Un groupe dynamique excluant les partants"},
 {en:"A scheduled PowerShell script", fr:"Un script PowerShell planifié"}],
correct:[0],
explanation:{en:"A is correct: lifecycle workflows are the joiner/mover/leaver engine in Entra ID Governance — they trigger relative to attributes such as employeeHireDate or employeeLeaveDateTime and run built-in tasks in order, with run history you can audit.\nB is wrong: reviews are periodic recertification, not date-triggered offboarding.\nC is wrong: a dynamic group changes membership of one group only, and does not disable an account or strip licenses.\nD is wrong: a script would work but is unmanaged, unaudited custom code where a supported, auditable feature exists.",
fr:"A est correct : les lifecycle workflows sont le moteur joiner/mover/leaver d'Entra ID Governance — ils se déclenchent par rapport à des attributs comme employeeHireDate ou employeeLeaveDateTime et exécutent des tâches intégrées dans l'ordre, avec un historique auditable.\nB est faux : les revues sont une recertification périodique, pas un offboarding déclenché par date.\nC est faux : un groupe dynamique ne change l'appartenance que d'un groupe, et ne désactive pas un compte ni ne retire de licences.\nD est faux : un script fonctionnerait mais c'est du code sur mesure non géré et non audité là où une fonctionnalité supportée et auditable existe."}
},
{
id:"d4-036", domain:4, topic:"Lifecycle custom extensions",
q:{en:"A joiner workflow must also create a ticket in your ITSM tool and post to a Teams channel. How do you extend the workflow?",
   fr:"Un workflow de type joiner doit aussi créer un ticket dans ton outil ITSM et publier dans un canal Teams. Comment étendre le workflow ?"},
options:[
 {en:"Add a custom task extension that calls an Azure Logic App", fr:"Ajouter une custom task extension qui appelle une Azure Logic App"},
 {en:"Write the integration inside a Conditional Access policy", fr:"Écrire l'intégration dans une stratégie d'accès conditionnel"},
 {en:"Use an access package custom question", fr:"Utiliser une question personnalisée d'access package"},
 {en:"It is impossible; lifecycle workflows only run built-in tasks", fr:"C'est impossible ; les lifecycle workflows n'exécutent que des tâches intégrées"}],
correct:[0],
explanation:{en:"A is correct: custom task extensions let a workflow call an Azure Logic App, which can then talk to any external system — ITSM, Teams, HR — either fire-and-forget or waiting for a callback response.\nB is wrong: Conditional Access makes access decisions; it runs no automation.\nC is wrong: a custom question collects text on a request form.\nD is wrong: extensibility via Logic Apps is a documented feature.",
fr:"A est correct : les custom task extensions permettent à un workflow d'appeler une Azure Logic App, qui peut ensuite dialoguer avec n'importe quel système externe — ITSM, Teams, RH — soit en mode « lancer et oublier », soit en attendant une réponse de rappel.\nB est faux : l'accès conditionnel prend des décisions d'accès, il n'exécute aucune automatisation.\nC est faux : une question personnalisée collecte du texte sur un formulaire de demande.\nD est faux : l'extensibilité via Logic Apps est une fonctionnalité documentée."}
},
{
id:"d4-037", domain:4, topic:"Diagnostic settings destinations",
q:{en:"You must keep Entra ID sign-in logs for 2 years at the lowest cost, AND be able to run interactive KQL queries on the last 90 days, AND stream events to a third-party SIEM. Which destinations do you configure?",
   fr:"Tu dois conserver les journaux de connexion Entra ID 2 ans au coût le plus bas, ET pouvoir exécuter des requêtes KQL interactives sur les 90 derniers jours, ET diffuser les événements vers un SIEM tiers. Quelles destinations configures-tu ?"},
options:[
 {en:"Archive to a storage account, send to a Log Analytics workspace, and stream to an event hub", fr:"Archiver vers un compte de stockage, envoyer vers un espace de travail Log Analytics, et diffuser vers un event hub"},
 {en:"Log Analytics only, with a 2-year retention", fr:"Log Analytics uniquement, avec une rétention de 2 ans"},
 {en:"A storage account only", fr:"Un compte de stockage uniquement"},
 {en:"Increase the Entra ID log retention to 2 years in the portal", fr:"Augmenter la rétention des journaux Entra ID à 2 ans dans le portail"}],
correct:[0],
explanation:{en:"A is correct: diagnostic settings can send the same log categories to several destinations at once — storage for cheap long-term archive, Log Analytics for KQL and alerting, event hub for streaming to a SIEM.\nB is wrong: Log Analytics can hold 2 years but is the expensive option for pure archive.\nC is wrong: you cannot run KQL or alert on a storage account.\nD is wrong: native Entra retention is fixed (30 days on P1/P2, 7 days for audit logs on Free) and is not configurable to 2 years.",
fr:"A est correct : les diagnostic settings peuvent envoyer les mêmes catégories de journaux vers plusieurs destinations à la fois — le stockage pour un archivage long terme économique, Log Analytics pour KQL et les alertes, l'event hub pour la diffusion vers un SIEM.\nB est faux : Log Analytics peut conserver 2 ans mais c'est l'option coûteuse pour du pur archivage.\nC est faux : on ne peut pas exécuter de KQL ni créer d'alertes sur un compte de stockage.\nD est faux : la rétention native d'Entra est fixe (30 jours en P1/P2, 7 jours pour les journaux d'audit en Free) et n'est pas configurable à 2 ans."}
},
{
id:"d4-038", domain:4, topic:"Choosing the right log",
q:{en:"A user was unexpectedly added to a privileged group. Which log identifies WHO made the change?",
   fr:"Un utilisateur a été ajouté de façon inattendue à un groupe privilégié. Quel journal identifie QUI a effectué la modification ?"},
options:[
 {en:"The audit logs, which record directory changes with the initiating actor and target", fr:"Les journaux d'audit, qui enregistrent les changements d'annuaire avec l'acteur initiateur et la cible"},
 {en:"The sign-in logs", fr:"Les journaux de connexion"},
 {en:"The provisioning logs", fr:"Les journaux de provisioning"},
 {en:"Identity Protection risk detections", fr:"Les détections de risque d'Identity Protection"}],
correct:[0],
explanation:{en:"A is correct: audit logs answer who did what to which object and when — including \"Add member to group\" with the initiated-by actor.\nB is wrong: sign-in logs show authentication events, not directory modifications.\nC is wrong: provisioning logs cover automated provisioning to and from applications, so they would only show it if the change came from a provisioning job.\nD is wrong: risk detections flag suspicious authentication, not administrative actions.",
fr:"A est correct : les journaux d'audit répondent à qui a fait quoi sur quel objet et quand — y compris « Ajouter un membre à un groupe » avec l'acteur initiateur.\nB est faux : les journaux de connexion montrent des événements d'authentification, pas des modifications d'annuaire.\nC est faux : les journaux de provisioning couvrent le provisioning automatisé vers et depuis les applications, ils ne le montreraient que si le changement venait d'un job de provisioning.\nD est faux : les détections de risque signalent des authentifications suspectes, pas des actions administratives."}
},
{
id:"d4-039", domain:4, topic:"KQL for sign-ins",
q:{en:"Which KQL query returns failed sign-ins from the last 24 hours, grouped by user, from Entra logs in Log Analytics?",
   fr:"Quelle requête KQL renvoie les connexions échouées des dernières 24 heures, regroupées par utilisateur, depuis les journaux Entra dans Log Analytics ?"},
options:[
 {en:"SigninLogs | where TimeGenerated > ago(24h) | where ResultType != 0 | summarize count() by UserPrincipalName", fr:"SigninLogs | where TimeGenerated > ago(24h) | where ResultType != 0 | summarize count() by UserPrincipalName"},
 {en:"AuditLogs | where TimeGenerated > ago(24h) | summarize count() by UserPrincipalName", fr:"AuditLogs | where TimeGenerated > ago(24h) | summarize count() by UserPrincipalName"},
 {en:"SigninLogs | where ResultType == 0 | count", fr:"SigninLogs | where ResultType == 0 | count"},
 {en:"SELECT UserPrincipalName, COUNT(*) FROM SigninLogs WHERE Result = 'Failure'", fr:"SELECT UserPrincipalName, COUNT(*) FROM SigninLogs WHERE Result = 'Failure'"}],
correct:[0],
explanation:{en:"A is correct: SigninLogs is the table, ResultType 0 means success so != 0 isolates failures, ago(24h) scopes the window, and summarize count() by groups per user.\nB is wrong: AuditLogs contains directory changes, not sign-in outcomes.\nC is wrong: ResultType == 0 selects SUCCESSFUL sign-ins and there is no grouping or time filter.\nD is wrong: Log Analytics uses KQL, not SQL.",
fr:"A est correct : SigninLogs est la table, ResultType 0 signifie succès donc != 0 isole les échecs, ago(24h) borne la fenêtre, et summarize count() by regroupe par utilisateur.\nB est faux : AuditLogs contient les changements d'annuaire, pas les résultats de connexion.\nC est faux : ResultType == 0 sélectionne les connexions RÉUSSIES et il n'y a ni regroupement ni filtre temporel.\nD est faux : Log Analytics utilise KQL, pas SQL."}
},
{
id:"d4-040", domain:4, topic:"Alerting on privileged activity",
q:{en:"You must be notified by email within minutes whenever anyone activates the Global Administrator role. Entra logs are already sent to Log Analytics. What do you create?",
   fr:"Tu dois être notifié par email en quelques minutes dès que quelqu'un active le rôle Global Administrator. Les journaux Entra sont déjà envoyés vers Log Analytics. Que crées-tu ?"},
options:[
 {en:"An Azure Monitor log search alert rule on the AuditLogs table with an action group that sends email", fr:"Une règle d'alerte de recherche de journaux Azure Monitor sur la table AuditLogs, avec un action group qui envoie un email"},
 {en:"A PIM access review", fr:"Une access review PIM"},
 {en:"A weekly workbook", fr:"Un workbook hebdomadaire"},
 {en:"A Conditional Access policy in report-only mode", fr:"Une stratégie d'accès conditionnel en mode report-only"}],
correct:[0],
explanation:{en:"A is correct: a log search alert rule runs your KQL on a schedule and fires an action group (email, SMS, webhook, Logic App) — the standard way to alert on audit events. PIM's own notification settings are a complementary built-in option.\nB is wrong: a review is periodic recertification, not real-time alerting.\nC is wrong: a workbook visualises data but does not notify anyone.\nD is wrong: report-only logs policy evaluation and sends no alerts.",
fr:"A est correct : une règle d'alerte de recherche de journaux exécute ta requête KQL selon une planification et déclenche un action group (email, SMS, webhook, Logic App) — la façon standard d'alerter sur des événements d'audit. Les notifications intégrées de PIM sont une option complémentaire.\nB est faux : une revue est une recertification périodique, pas une alerte en temps réel.\nC est faux : un workbook visualise des données mais ne notifie personne.\nD est faux : le mode report-only journalise l'évaluation de la stratégie et n'envoie aucune alerte."}
},
{
id:"d4-041", domain:4, topic:"Log retention by licence",
q:{en:"Your tenant has Entra ID Free. An investigation needs sign-in data from 6 months ago. What is the situation?",
   fr:"Ton tenant est en Entra ID Free. Une investigation a besoin de données de connexion vieilles de 6 mois. Quelle est la situation ?"},
options:[
 {en:"The data is gone — Free retains sign-in logs for 7 days; you must export logs to Log Analytics or storage going forward", fr:"Les données sont perdues — l'édition Free conserve les journaux de connexion 7 jours ; il faut désormais exporter vers Log Analytics ou un compte de stockage"},
 {en:"The data is available for 90 days in the portal", fr:"Les données sont disponibles 90 jours dans le portail"},
 {en:"Microsoft Support can restore logs on request", fr:"Le support Microsoft peut restaurer les journaux sur demande"},
 {en:"Upgrading to P1 now retroactively restores 6 months of logs", fr:"Passer en P1 maintenant restaure rétroactivement 6 mois de journaux"}],
correct:[0],
explanation:{en:"A is correct: native retention is 7 days for sign-in logs on the Free tier and 30 days with P1 or P2 — longer retention only exists if you exported the data through diagnostic settings before the fact.\nB is wrong: 90 days is not an Entra retention tier for these logs.\nC is wrong: expired log data is not recoverable through Support.\nD is wrong: a licence upgrade changes future retention, never the past.",
fr:"A est correct : la rétention native est de 7 jours pour les journaux de connexion en édition Free et de 30 jours avec P1 ou P2 — une conservation plus longue n'existe que si tu as exporté les données via les diagnostic settings au préalable.\nB est faux : 90 jours n'est pas un palier de rétention Entra pour ces journaux.\nC est faux : des données de journaux expirées ne sont pas récupérables via le support.\nD est faux : une montée de licence change la rétention future, jamais le passé."}
},
{
id:"d4-042", domain:4, topic:"PIM for Groups",
q:{en:"A group grants standing access to a SaaS application that does not support app roles. You want that access to be just-in-time with approval, without changing the application. What do you configure?",
   fr:"Un groupe accorde un accès permanent à une application SaaS qui ne supporte pas les app roles. Tu veux que cet accès soit juste-à-temps avec approbation, sans modifier l'application. Que configures-tu ?"},
options:[
 {en:"PIM for Groups: make users eligible for group membership, with activation settings requiring approval", fr:"PIM for Groups : rendre les utilisateurs éligibles à l'appartenance au groupe, avec des réglages d'activation exigeant une approbation"},
 {en:"A dynamic membership rule on the group", fr:"Une règle d'appartenance dynamique sur le groupe"},
 {en:"An access review every month", fr:"Une access review chaque mois"},
 {en:"A Conditional Access policy requiring MFA", fr:"Une stratégie d'accès conditionnel exigeant le MFA"}],
correct:[0],
explanation:{en:"A is correct: PIM for Groups makes membership (or ownership) of a role-assignable group eligible rather than permanent, with its own activation settings — MFA, justification, approval, maximum duration — so any access granted through that group becomes just-in-time, whatever the application supports.\nB is wrong: dynamic membership is automatic and permanent, the opposite of just-in-time.\nC is wrong: a monthly review leaves standing access for up to a month.\nD is wrong: MFA strengthens authentication but the access remains permanent.",
fr:"A est correct : PIM for Groups rend l'appartenance (ou la propriété) d'un groupe role-assignable éligible au lieu de permanente, avec ses propres réglages d'activation — MFA, justification, approbation, durée maximale — donc tout accès accordé via ce groupe devient juste-à-temps, quelles que soient les capacités de l'application.\nB est faux : l'appartenance dynamique est automatique et permanente, l'inverse du juste-à-temps.\nC est faux : une revue mensuelle laisse un accès permanent jusqu'à un mois.\nD est faux : le MFA renforce l'authentification mais l'accès reste permanent."}
},
{
id:"d4-043", domain:4, topic:"PIM discovery and insights",
q:{en:"You inherit a tenant with dozens of Azure subscriptions and no idea who holds Owner rights. Which PIM capability helps you find and remediate this?",
   fr:"Tu héritent d'un tenant avec des dizaines d'abonnements Azure et aucune idée de qui détient les droits Owner. Quelle capacité PIM t'aide à découvrir et corriger cela ?"},
options:[
 {en:"PIM Discovery and insights for Azure resources, which lists Owner and User Access Administrator assignments and lets you convert them to eligible", fr:"PIM Discovery and insights pour les ressources Azure, qui liste les attributions Owner et User Access Administrator et permet de les convertir en éligibles"},
 {en:"Identity Secure Score", fr:"L'Identity Secure Score"},
 {en:"The provisioning logs", fr:"Les journaux de provisioning"},
 {en:"Entra Connect Health", fr:"Entra Connect Health"}],
correct:[0],
explanation:{en:"A is correct: discovery and insights surfaces the privileged Azure resource role assignments across subscriptions, highlights permanent ones, and offers to bring them under PIM management as eligible assignments.\nB is wrong: Secure Score gives tenant-wide identity recommendations but does not enumerate Azure resource role holders for remediation.\nC is wrong: provisioning logs cover application provisioning.\nD is wrong: Connect Health monitors hybrid sync infrastructure.",
fr:"A est correct : Discovery and insights fait remonter les attributions de rôles privilégiés sur les ressources Azure à travers les abonnements, met en évidence les attributions permanentes et propose de les placer sous gestion PIM en tant qu'éligibles.\nB est faux : le Secure Score donne des recommandations d'identité à l'échelle du tenant mais n'énumère pas les détenteurs de rôles de ressources Azure pour remédiation.\nC est faux : les journaux de provisioning couvrent le provisioning applicatif.\nD est faux : Connect Health surveille l'infrastructure de sync hybride."}
},
{
id:"d4-044", domain:4, topic:"Guest access reviews",
q:{en:"You must remove guests who have not signed in for 90 days across all Microsoft 365 groups, with owners deciding and the outcome applied automatically. What do you create?",
   fr:"Tu dois retirer les guests qui ne se sont pas connectés depuis 90 jours dans tous les groupes Microsoft 365, avec décision des propriétaires et application automatique du résultat. Que crées-tu ?"},
options:[
 {en:"A recurring access review scoped to guest users across all Microsoft 365 groups, reviewed by group owners with a fallback, auto-apply on, and inactivity-based recommendations", fr:"Une access review récurrente ciblant les guests dans tous les groupes Microsoft 365, relue par les propriétaires de groupes avec un repli, application automatique activée, et recommandations basées sur l'inactivité"},
 {en:"A lifecycle workflow triggered on employeeLeaveDateTime", fr:"Un lifecycle workflow déclenché sur employeeLeaveDateTime"},
 {en:"A Conditional Access policy blocking guests after 90 days", fr:"Une stratégie d'accès conditionnel bloquant les guests après 90 jours"},
 {en:"Deleting all guest accounts and re-inviting the active ones", fr:"Supprimer tous les comptes guests et réinviter les actifs"}],
correct:[0],
explanation:{en:"A is correct: access reviews support a guests-only scope across all Microsoft 365 groups in one review, delegate decisions to group owners with a fallback reviewer, apply results automatically and surface sign-in inactivity as a recommendation.\nB is wrong: lifecycle workflows key off employment attributes that external guests do not have.\nC is wrong: Conditional Access has no inactivity condition and blocking is not cleanup.\nD is wrong: mass deletion breaks active collaboration and loses history.",
fr:"A est correct : les access reviews supportent une portée limitée aux guests sur tous les groupes Microsoft 365 en une seule revue, délèguent la décision aux propriétaires de groupes avec un relecteur de repli, appliquent les résultats automatiquement et affichent l'inactivité de connexion comme recommandation.\nB est faux : les lifecycle workflows s'appuient sur des attributs d'emploi que les guests externes n'ont pas.\nC est faux : l'accès conditionnel n'a pas de condition d'inactivité et bloquer n'est pas nettoyer.\nD est faux : une suppression de masse casse les collaborations actives et perd l'historique."}
},
{
id:"d4-045", domain:4, topic:"Governance licensing",
q:{en:"Which set of features requires Microsoft Entra ID Governance (or Entra Suite) licensing rather than being covered by Entra ID P2 alone?",
   fr:"Quel ensemble de fonctionnalités nécessite une licence Microsoft Entra ID Governance (ou Entra Suite) plutôt que d'être couvert par Entra ID P2 seul ?"},
options:[
 {en:"Lifecycle workflows and custom task extensions", fr:"Les lifecycle workflows et les custom task extensions"},
 {en:"PIM for Entra roles and access reviews of roles", fr:"PIM pour les rôles Entra et les access reviews de rôles"},
 {en:"Conditional Access and named locations", fr:"L'accès conditionnel et les named locations"},
 {en:"SSPR with password writeback", fr:"Le SSPR avec password writeback"}],
correct:[0],
explanation:{en:"A is correct: lifecycle workflows (joiner/mover/leaver automation) and their Logic App custom extensions are Entra ID Governance features, sold as an add-on to P1/P2 or within Entra Suite.\nB is wrong: PIM and access reviews are core Entra ID P2 capabilities.\nC is wrong: Conditional Access is P1.\nD is wrong: SSPR with writeback is P1.",
fr:"A est correct : les lifecycle workflows (automatisation joiner/mover/leaver) et leurs extensions personnalisées Logic App sont des fonctionnalités Entra ID Governance, vendues en complément de P1/P2 ou dans Entra Suite.\nB est faux : PIM et les access reviews sont des capacités de base d'Entra ID P2.\nC est faux : l'accès conditionnel est en P1.\nD est faux : le SSPR avec writeback est en P1."}
}
];
