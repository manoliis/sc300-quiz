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
 {en:"Entitlement management access package policy", fr:"Une policy d'access package d'entitlement management"},
 {en:"PIM > Microsoft Entra roles > Global Administrator > Role settings > Require approval to activate, and add the approvers", fr:"PIM > Microsoft Entra roles > Global Administrator > Role settings > Require approval to activate, et ajouter les approbateurs"},
 {en:"An access review on the role", fr:"Une access review sur le rôle"},
 {en:"Conditional Access > Grant > Require approval", fr:"Conditional Access > Grant > Require approval"}],
correct:[1],
explanation:{en:"A is wrong: access packages govern requesting ACCESS (resources/roles bundles), but per-activation approval of an Entra role is a PIM role setting.\nB is correct: each PIM role has role settings including \"Require approval to activate\" with selected approvers; requests then wait in the PIM approval queue.\nC is wrong: access reviews periodically recertify existing assignments; they don't gate activations.\nD is wrong: CA has no approval grant control.",
fr:"A est faux : les access packages gouvernent la DEMANDE d'accès (lots de ressources/rôles), mais l'approbation par activation d'un rôle Entra est un réglage PIM.\nB est correct : chaque rôle PIM a des role settings dont « Require approval to activate » avec des approbateurs choisis ; les demandes attendent ensuite dans la file d'approbation PIM.\nC est faux : les access reviews recertifient périodiquement les assignations existantes ; elles ne contrôlent pas les activations.\nD est faux : CA n'a pas de contrôle d'approbation."}
},
{
id:"d4-003", domain:4, topic:"Access packages",
q:{en:"New project members (internal and from partner org Fabrikam) need a bundle: membership of 2 groups, access to 1 SharePoint site and 1 app — self-requestable with manager approval, expiring after 90 days. What do you build?",
   fr:"Les nouveaux membres d'un projet (internes et du partenaire Fabrikam) ont besoin d'un lot : appartenance à 2 groupes, accès à 1 site SharePoint et 1 app — demandable en self-service avec approbation du manager, expirant après 90 jours. Que construis-tu ?"},
options:[
 {en:"Manual assignment by the helpdesk with a calendar reminder", fr:"Une assignation manuelle par le helpdesk avec un rappel calendrier"},
 {en:"Four separate PIM for Groups configurations", fr:"Quatre configurations PIM for Groups séparées"},
 {en:"An access package in a catalog containing those resources, with policies for internal users and the Fabrikam connected organization, approval + 90-day lifecycle", fr:"Un access package dans un catalog contenant ces ressources, avec des policies pour les internes et la connected organization Fabrikam, approbation + cycle de vie 90 jours"},
 {en:"A dynamic group with a 90-day rule", fr:"Un groupe dynamique avec une règle de 90 jours"}],
correct:[2],
explanation:{en:"A is wrong: manual + reminders is exactly the ungoverned process entitlement management replaces.\nB is wrong: PIM for Groups covers JIT elevation into groups, not multi-resource request/approval/expiry bundles for externals.\nC is correct: this is the textbook entitlement management scenario — an access package bundles the group memberships, site and app; separate policies handle internal users vs the Fabrikam connected organization (guests auto-created); approval and expiration handle governance automatically.\nD is wrong: dynamic rules can't express \"90 days after approval\".",
fr:"A est faux : manuel + rappels est exactement le processus non gouverné qu'entitlement management remplace.\nB est faux : PIM for Groups couvre l'élévation JIT dans des groupes, pas des lots multi-ressources avec demande/approbation/expiration pour des externes.\nC est correct : c'est le scénario type d'entitlement management — un access package regroupe les appartenances aux groupes, le site et l'app ; des policies distinctes gèrent les internes et la connected organization Fabrikam (guests créés automatiquement) ; approbation et expiration gèrent la gouvernance automatiquement.\nD est faux : les règles dynamiques ne savent pas exprimer « 90 jours après approbation »."}
},
{
id:"d4-004", domain:4, topic:"Access reviews",
q:{en:"Compliance requires quarterly recertification of the \"VPN-Users\" group. If reviewers don't respond, the users' access must be removed automatically. How do you configure the access review?",
   fr:"La conformité exige une recertification trimestrielle du groupe « VPN-Users ». Si les reviewers ne répondent pas, l'accès des utilisateurs doit être retiré automatiquement. Comment configures-tu l'access review ?"},
options:[
 {en:"One-time review with manual result application", fr:"Review unique avec application manuelle des résultats"},
 {en:"Quarterly review with \"If reviewers don't respond\" = No change", fr:"Review trimestrielle avec « If reviewers don't respond » = No change"},
 {en:"A PIM eligible assignment on the group", fr:"Une assignation eligible PIM sur le groupe"},
 {en:"Quarterly recurrence, auto-apply results ON, and \"If reviewers don't respond\" = Remove access", fr:"Récurrence trimestrielle, application automatique des résultats ON, et « If reviewers don't respond » = Remove access"}],
correct:[3],
explanation:{en:"A is wrong: one-time + manual doesn't meet quarterly automatic requirements.\nB is wrong: \"No change\" leaves unreviewed access in place — fails the requirement.\nC is wrong: PIM eligibility is JIT activation, not periodic recertification.\nD is correct: recurrence = quarterly; \"Auto apply results to resource\" enabled; upon completion, non-reviewed users are removed thanks to \"If reviewers don't respond = Remove access\". This is the fail-secure configuration.",
fr:"A est faux : unique + manuel ne répond pas à l'exigence trimestrielle automatique.\nB est faux : « No change » laisse en place les accès non revus — échec de l'exigence.\nC est faux : l'éligibilité PIM est de l'activation JIT, pas de la recertification périodique.\nD est correct : récurrence trimestrielle ; « Auto apply results to resource » activé ; à la fin, les utilisateurs non revus sont retirés grâce à « If reviewers don't respond = Remove access ». C'est la configuration fail-secure."}
},
{
id:"d4-005", domain:4, topic:"Guest cleanup",
q:{en:"Your tenant has hundreds of stale guest accounts. You must periodically make guests confirm they still need access, and block+delete those who don't respond or are denied. What do you use?",
   fr:"Ton tenant a des centaines de comptes guests obsolètes. Tu dois périodiquement faire confirmer aux guests qu'ils ont encore besoin d'accès, et bloquer+supprimer ceux qui ne répondent pas ou sont refusés. Qu'utilises-tu ?"},
options:[
 {en:"An access review of guest users (e.g. on groups/teams) with self-review, and actions to block sign-in then delete denied guests", fr:"Une access review des guests (ex : sur groupes/teams) avec self-review, et les actions bloquer la connexion puis supprimer les guests refusés"},
 {en:"Conditional Access blocking all guests", fr:"Un Conditional Access bloquant tous les guests"},
 {en:"Cross-tenant access settings", fr:"Les cross-tenant access settings"},
 {en:"A PowerShell script deleting guests older than 90 days", fr:"Un script PowerShell supprimant les guests de plus de 90 jours"}],
correct:[0],
explanation:{en:"A is correct: access reviews support guest-focused reviews with self-attestation; for denied/non-responding guests the review can block sign-in and delete the account after 30 days — the governed lifecycle approach.\nB is wrong: blocking ALL guests breaks legitimate collaboration.\nC is wrong: those settings control WHICH tenants can collaborate, not stale-account cleanup.\nD is wrong: age is not usage; you'd delete active partners and keep stale ones, with no attestation trail.",
fr:"A est correct : les access reviews supportent des reviews dédiées aux guests avec auto-attestation ; pour les refusés/sans réponse, la review peut bloquer la connexion puis supprimer le compte après 30 jours — l'approche gouvernée du cycle de vie.\nB est faux : bloquer TOUS les guests casse la collaboration légitime.\nC est faux : ces paramètres contrôlent QUELS tenants peuvent collaborer, pas le nettoyage des comptes.\nD est faux : l'ancienneté n'est pas l'usage ; tu supprimerais des partenaires actifs en gardant des obsolètes, sans trace d'attestation."}
},
{
id:"d4-006", domain:4, topic:"PIM for Groups",
q:{en:"A third-party SaaS app grants admin rights based on membership of the group \"SaaS-Admins\". You need just-in-time membership with approval. What do you configure?",
   fr:"Une app SaaS tierce accorde des droits admin selon l'appartenance au groupe « SaaS-Admins ». Tu as besoin d'une appartenance just-in-time avec approbation. Que configures-tu ?"},
options:[
 {en:"A dynamic group", fr:"Un groupe dynamique"},
 {en:"PIM for Groups: make users ELIGIBLE for membership of SaaS-Admins with approval required on activation", fr:"PIM for Groups : rendre les utilisateurs ELIGIBLE à l'appartenance de SaaS-Admins avec approbation à l'activation"},
 {en:"PIM for Entra roles", fr:"PIM pour les rôles Entra"},
 {en:"An access review on the group", fr:"Une access review sur le groupe"}],
correct:[1],
explanation:{en:"A is wrong: dynamic rules are attribute-based and permanent while matched — no JIT, no approval.\nB is correct: PIM for Groups brings eligibility/activation/approval/expiration to group MEMBERSHIP (and ownership) — the way to do JIT for anything driven by groups: third-party apps, license bundles, or several roles at once.\nC is wrong: the SaaS admin rights come from group membership, not an Entra directory role.\nD is wrong: reviews recertify, they don't provide on-demand activation.",
fr:"A est faux : les règles dynamiques sont basées attributs et permanentes tant que ça matche — ni JIT ni approbation.\nB est correct : PIM for Groups apporte éligibilité/activation/approbation/expiration à l'APPARTENANCE (et la propriété) d'un groupe — la méthode JIT pour tout ce qui dépend des groupes : apps tierces, lots de licences, ou plusieurs rôles d'un coup.\nC est faux : les droits admin du SaaS viennent de l'appartenance au groupe, pas d'un rôle d'annuaire Entra.\nD est faux : les reviews recertifient, elles n'offrent pas d'activation à la demande."}
},
{
id:"d4-007", domain:4, topic:"Log retention",
q:{en:"Auditors require sign-in logs to be retained for 2 years and queryable with KQL. Default Entra retention is 30 days. What do you configure?",
   fr:"Les auditeurs exigent que les sign-in logs soient conservés 2 ans et requêtables en KQL. La rétention Entra par défaut est de 30 jours. Que configures-tu ?"},
options:[
 {en:"Increase the retention slider in Entra ID to 730 days", fr:"Augmenter le curseur de rétention dans Entra ID à 730 jours"},
 {en:"Download the logs as CSV monthly", fr:"Télécharger les logs en CSV chaque mois"},
 {en:"Diagnostic settings exporting SigninLogs to a Log Analytics workspace with retention/archive configured for 2 years", fr:"Des diagnostic settings exportant SigninLogs vers un workspace Log Analytics avec rétention/archive configurée sur 2 ans"},
 {en:"Export to Event Hubs only", fr:"Exporter uniquement vers Event Hubs"}],
correct:[2],
explanation:{en:"A is wrong: no such slider exists — 30 days (P1/P2) is fixed in Entra.\nB is wrong: manual, error-prone, and CSVs aren't a KQL-queryable store.\nC is correct: diagnostic settings stream Entra logs to Log Analytics, where you set data retention/archive up to years and query with KQL (SigninLogs, AuditLogs tables). A storage account is a cheaper option for pure archive, but it isn't KQL-queryable.\nD is wrong: Event Hubs is a streaming pipe to SIEMs; it stores data only briefly.",
fr:"A est faux : ce curseur n'existe pas — 30 jours (P1/P2) est fixe dans Entra.\nB est faux : manuel, source d'erreurs, et les CSV ne sont pas un store requêtable en KQL.\nC est correct : les diagnostic settings envoient les logs Entra vers Log Analytics, où tu configures rétention/archive jusqu'à plusieurs années et requêtes en KQL (tables SigninLogs, AuditLogs). Un storage account est moins cher pour l'archive pure, mais pas requêtable en KQL.\nD est faux : Event Hubs est un tuyau de streaming vers des SIEM ; il ne conserve les données que brièvement."}
},
{
id:"d4-008", domain:4, topic:"KQL",
q:{en:"In Log Analytics, which query returns the number of failed sign-ins (error 50126) per user over the last 7 days?",
   fr:"Dans Log Analytics, quelle requête retourne le nombre de connexions échouées (erreur 50126) par utilisateur sur les 7 derniers jours ?"},
options:[
 {en:"AuditLogs | where OperationName == \"50126\" | count", fr:"AuditLogs | where OperationName == \"50126\" | count"},
 {en:"SigninLogs | take 50126", fr:"SigninLogs | take 50126"},
 {en:"SELECT * FROM SigninLogs WHERE ResultType = 50126", fr:"SELECT * FROM SigninLogs WHERE ResultType = 50126"},
 {en:"SigninLogs | where TimeGenerated > ago(7d) | where ResultType == \"50126\" | summarize count() by UserPrincipalName", fr:"SigninLogs | where TimeGenerated > ago(7d) | where ResultType == \"50126\" | summarize count() by UserPrincipalName"}],
correct:[3],
explanation:{en:"A is wrong: failed sign-ins live in SigninLogs, not AuditLogs, and OperationName isn't an error code.\nB is wrong: take just samples N rows.\nC is wrong: that's SQL, not KQL.\nD is correct: KQL pipes the SigninLogs table through time and result filters, then aggregates with summarize count() by UserPrincipalName. ResultType 50126 = invalid username/password.",
fr:"A est faux : les connexions échouées sont dans SigninLogs, pas AuditLogs, et OperationName n'est pas un code d'erreur.\nB est faux : take échantillonne juste N lignes.\nC est faux : c'est du SQL, pas du KQL.\nD est correct : le KQL enchaîne la table SigninLogs avec des filtres de temps et de résultat, puis agrège avec summarize count() by UserPrincipalName. ResultType 50126 = identifiant/mot de passe invalide."}
},
{
id:"d4-009", domain:4, topic:"Break-glass monitoring",
q:{en:"You created two break-glass Global Admin accounts. Security requires an alert whenever either account signs in. What is the recommended implementation?",
   fr:"Tu as créé deux comptes break-glass Global Admin. La sécurité exige une alerte à chaque connexion de l'un d'eux. Quelle est l'implémentation recommandée ?"},
options:[
 {en:"Send sign-in logs to Log Analytics and create an Azure Monitor alert rule on a KQL query matching those account IDs", fr:"Envoyer les sign-in logs vers Log Analytics et créer une règle d'alerte Azure Monitor sur une requête KQL ciblant les IDs de ces comptes"},
 {en:"Configure SSPR notifications", fr:"Configurer les notifications SSPR"},
 {en:"Check the sign-in logs manually every morning", fr:"Vérifier les sign-in logs manuellement chaque matin"},
 {en:"Enable Identity Protection notifications", fr:"Activer les notifications d'Identity Protection"}],
correct:[0],
explanation:{en:"A is correct: this is Microsoft's documented pattern — diagnostic settings to Log Analytics + an alert rule (KQL: SigninLogs | where UserId in (...)) with an action group (email/SMS/Teams) to fire within minutes of any break-glass sign-in.\nB is wrong: SSPR notifications relate to password resets, not sign-ins.\nC is wrong: too slow — an unnoticed use of emergency credentials is a serious incident.\nD is wrong: Identity Protection alerts on RISK, and these accounts sign in rarely from unusual contexts — you need EVERY sign-in flagged.",
fr:"A est correct : c'est le schéma documenté par Microsoft — diagnostic settings vers Log Analytics + règle d'alerte (KQL : SigninLogs | where UserId in (...)) avec un action group (email/SMS/Teams) qui se déclenche en minutes à toute connexion break-glass.\nB est faux : les notifications SSPR concernent les réinitialisations, pas les connexions.\nC est faux : trop lent — un usage inaperçu des credentials d'urgence est un incident grave.\nD est faux : Identity Protection alerte sur le RISQUE ; ici il faut signaler CHAQUE connexion."}
},
{
id:"d4-010", domain:4, topic:"Terms of use",
q:{en:"Before accessing the HR application, all users must accept the company's data-handling agreement, and acceptance must be logged for auditors. What do you configure?",
   fr:"Avant d'accéder à l'application RH, tous les utilisateurs doivent accepter l'accord de traitement des données, et l'acceptation doit être tracée pour les auditeurs. Que configures-tu ?"},
options:[
 {en:"An email asking users to reply \"I accept\"", fr:"Un email demandant de répondre « J'accepte »"},
 {en:"A Terms of use (PDF) enforced by a Conditional Access policy targeting the HR app", fr:"Des Terms of use (PDF) imposés par une politique Conditional Access ciblant l'app RH"},
 {en:"A SharePoint page with the policy text", fr:"Une page SharePoint avec le texte de la politique"},
 {en:"An access review", fr:"Une access review"}],
correct:[1],
explanation:{en:"A and C are wrong: no enforcement and no reliable audit trail.\nB is correct: upload the agreement as a ToU (PDF), then a CA policy on the HR app with grant control \"Require terms of use\" blocks access until acceptance; Entra logs who accepted, when, and which version — audit-ready. ToU can also require per-device acceptance or periodic re-acceptance.\nD is wrong: access reviews certify access, they don't collect agreement acceptance.",
fr:"A et C sont faux : aucune contrainte et pas de piste d'audit fiable.\nB est correct : charge l'accord comme ToU (PDF), puis une politique CA sur l'app RH avec le contrôle « Require terms of use » bloque l'accès jusqu'à acceptation ; Entra journalise qui a accepté, quand, et quelle version — prêt pour l'audit. Les ToU peuvent aussi exiger une acceptation par appareil ou périodique.\nD est faux : les access reviews certifient l'accès, elles ne collectent pas d'acceptation d'accord."}
},
{
id:"d4-011", domain:4, topic:"PIM audit",
q:{en:"An auditor asks: \"Who activated the Security Administrator role last month, when, and why?\" Where do you find this fastest?",
   fr:"Un auditeur demande : « Qui a activé le rôle Security Administrator le mois dernier, quand et pourquoi ? » Où trouves-tu ça le plus vite ?"},
options:[
 {en:"Identity Secure Score", fr:"L'Identity Secure Score"},
 {en:"Provisioning logs", fr:"Les provisioning logs"},
 {en:"PIM > Microsoft Entra roles > Resource audit (PIM audit history)", fr:"PIM > Microsoft Entra roles > Resource audit (historique d'audit PIM)"},
 {en:"Sign-in logs", fr:"Les sign-in logs"}],
correct:[2],
explanation:{en:"A is wrong: Secure Score is posture guidance.\nB is wrong: provisioning logs track SCIM/HR provisioning.\nC is correct: PIM's audit history records all activations, assignments, approvals — including the justification text and timestamps. (These events also appear in the Entra audit logs, but PIM's resource audit view is the direct answer.)\nD is wrong: sign-in logs show authentications, not role activations.",
fr:"A est faux : le Secure Score est un guide de posture.\nB est faux : les provisioning logs tracent le provisioning SCIM/RH.\nC est correct : l'historique d'audit PIM enregistre toutes les activations, assignations, approbations — y compris la justification et les horodatages. (Ces événements sont aussi dans les audit logs Entra, mais la vue Resource audit de PIM est la réponse directe.)\nD est faux : les sign-in logs montrent les authentifications, pas les activations de rôles."}
},
{
id:"d4-012", domain:4, topic:"Entitlement delegation",
q:{en:"The IT team is overloaded creating access packages for every department. You must delegate to department leads the ability to manage access packages for THEIR OWN resources only. What do you do?",
   fr:"L'équipe IT est débordée par la création d'access packages pour chaque département. Tu dois déléguer aux responsables de département la gestion des access packages pour LEURS ressources uniquement. Que fais-tu ?"},
options:[
 {en:"Let them email IT for each package", fr:"Les laisser envoyer un email à l'IT pour chaque package"},
 {en:"Give them the Identity Governance Administrator role", fr:"Leur donner le rôle Identity Governance Administrator"},
 {en:"Give them Global Administrator", fr:"Leur donner Global Administrator"},
 {en:"Create a catalog per department and assign the department leads as catalog owners", fr:"Créer un catalog par département et assigner les responsables comme catalog owners"}],
correct:[3],
explanation:{en:"A is wrong: keeps the bottleneck the delegation was meant to remove.\nB is wrong: Identity Governance Administrator is tenant-wide — too broad.\nC is wrong: absurdly over-privileged.\nD is correct: catalogs are the delegation boundary of entitlement management — a catalog owner manages resources and access packages inside their catalog only. Delegation model: admin creates catalogs, adds owners, owners run their packages.",
fr:"A est faux : conserve le goulot d'étranglement que la délégation devait supprimer.\nB est faux : Identity Governance Administrator est tenant-wide — trop large.\nC est faux : sur-privilégié à l'absurde.\nD est correct : les catalogs sont la frontière de délégation d'entitlement management — un catalog owner gère les ressources et access packages de son catalog uniquement. Modèle : l'admin crée les catalogs, ajoute les owners, les owners gèrent leurs packages."}
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
 {en:"Role settings requiring justification", fr:"Des role settings exigeant une justification"},
 {en:"Access reviews of Microsoft Entra roles (created from PIM), monthly recurrence, auto-apply", fr:"Des access reviews des rôles Microsoft Entra (créées depuis PIM), récurrence mensuelle, auto-application"},
 {en:"An entitlement management access package", fr:"Un access package d'entitlement management"},
 {en:"A monthly PowerShell export of role members", fr:"Un export PowerShell mensuel des membres des rôles"}],
correct:[1],
explanation:{en:"A is wrong: justification applies at ACTIVATION, not periodic recertification of who holds assignments.\nB is correct: PIM includes access reviews for privileged Entra roles (and Azure resource roles): monthly recurrence, security team as reviewers, auto-apply removes denied/unreviewed assignments per your settings.\nC is wrong: packages govern requesting bundles of resources, not recurring recertification of existing role assignments.\nD is wrong: an export is reporting, not a decision + removal workflow.",
fr:"A est faux : la justification s'applique à l'ACTIVATION, pas à la recertification périodique des détenteurs.\nB est correct : PIM inclut des access reviews pour les rôles Entra privilégiés (et rôles de ressources Azure) : récurrence mensuelle, équipe sécurité en reviewers, auto-application retirant les assignations refusées/non revues selon tes réglages.\nC est faux : les packages gouvernent la demande de lots de ressources, pas la recertification récurrente d'assignations de rôles existantes.\nD est faux : un export est du reporting, pas un workflow de décision + retrait."}
},
{
id:"d4-015", domain:4, topic:"Workbooks",
q:{en:"You want a visual dashboard analyzing Conditional Access policy impact (users affected, report-only results) over time. Sign-in logs are already sent to Log Analytics. What do you use?",
   fr:"Tu veux un tableau de bord visuel analysant l'impact des politiques Conditional Access (utilisateurs affectés, résultats report-only) dans le temps. Les sign-in logs vont déjà dans Log Analytics. Qu'utilises-tu ?"},
options:[
 {en:"The provisioning logs", fr:"Les provisioning logs"},
 {en:"The What If tool", fr:"L'outil What If"},
 {en:"The built-in \"Conditional Access Insights and Reporting\" workbook in Entra", fr:"Le workbook intégré « Conditional Access Insights and Reporting » dans Entra"},
 {en:"Identity Secure Score", fr:"L'Identity Secure Score"}],
correct:[2],
explanation:{en:"A is wrong: provisioning logs concern SCIM provisioning.\nB is wrong: What If simulates ONE hypothetical sign-in, not aggregate trends.\nC is correct: Entra workbooks (built on Azure Monitor workbooks, requiring the Log Analytics integration) include Conditional Access Insights and Reporting — visualizing policy outcomes including report-only impact over time.\nD is wrong: Secure Score is posture recommendations, not CA analytics.",
fr:"A est faux : les provisioning logs concernent le provisioning SCIM.\nB est faux : What If simule UNE connexion hypothétique, pas des tendances agrégées.\nC est correct : les workbooks Entra (basés sur les workbooks Azure Monitor, nécessitant l'intégration Log Analytics) incluent Conditional Access Insights and Reporting — visualisant les résultats des politiques, y compris l'impact report-only dans le temps.\nD est faux : le Secure Score donne des recommandations de posture, pas d'analytique CA."}
},
{
id:"d4-016", domain:4, topic:"PIM assignment types",
q:{en:"In PIM, what is the difference between an \"eligible\" and an \"active\" assignment?",
   fr:"Dans PIM, quelle est la différence entre une assignation « eligible » et « active » ?"},
options:[
 {en:"Eligible is permanent, active is temporary", fr:"Eligible est permanent, active est temporaire"},
 {en:"Eligible roles have fewer permissions", fr:"Les rôles eligible ont moins de permissions"},
 {en:"Active assignments require approval at each use", fr:"Les assignations active exigent une approbation à chaque usage"},
 {en:"Eligible requires the user to activate the role (JIT) before using it; active grants the privileges immediately without activation", fr:"Eligible exige que l'utilisateur active le rôle (JIT) avant de l'utiliser ; active accorde les privilèges immédiatement sans activation"}],
correct:[3],
explanation:{en:"A is wrong: permanence vs time-bound is a separate axis from eligible vs active.\nB is wrong: the role's permissions are identical; only WHEN you hold them differs.\nC is wrong: approval applies to ACTIVATION of eligible assignments.\nD is correct: eligible = the user CAN activate (with MFA/justification/approval as configured) for a limited window; active = privileges are standing. Both types can independently be permanent or time-bound.",
fr:"A est faux : permanent vs borné est un axe séparé d'eligible vs active.\nB est faux : les permissions du rôle sont identiques ; seul le QUAND change.\nC est faux : l'approbation s'applique à l'ACTIVATION des assignations eligible.\nD est correct : eligible = l'utilisateur PEUT activer (avec MFA/justification/approbation selon la config) pour une fenêtre limitée ; active = privilèges permanents en cours. Les deux types peuvent indépendamment être permanents ou bornés."}
},
{
id:"d4-017", domain:4, topic:"Connected organizations",
q:{en:"You want users from partner company Litware (which has its own Entra tenant) to be able to REQUEST your \"Project X\" access package themselves. What must you configure in entitlement management?",
   fr:"Tu veux que les utilisateurs du partenaire Litware (qui a son propre tenant Entra) puissent DEMANDER eux-mêmes ton access package « Project X ». Que dois-tu configurer dans entitlement management ?"},
options:[
 {en:"Add Litware as a connected organization and create a policy \"For users not in your directory\" allowing that connected organization", fr:"Ajouter Litware comme connected organization et créer une policy « For users not in your directory » autorisant cette connected organization"},
 {en:"Enable cross-tenant synchronization with Litware", fr:"Activer la cross-tenant synchronization avec Litware"},
 {en:"Make the package visible to \"All users\" including anonymous", fr:"Rendre le package visible à « Tous les utilisateurs » y compris anonymes"},
 {en:"Invite every Litware user as a guest first", fr:"Inviter d'abord chaque utilisateur Litware comme guest"}],
correct:[0],
explanation:{en:"A is correct: connected organizations (identified by their tenant/domain) let external users request packages; upon approval a guest account is created automatically, and its lifecycle (removal at expiry) is governed.\nB is wrong: cross-tenant sync is for same-organization multi-tenant setups, not partner self-service requests.\nC is wrong: there's no anonymous access; scoping to specific connected orgs is the controlled approach.\nD is wrong: pre-inviting defeats the self-service purpose — entitlement management creates the guests on demand.",
fr:"A est correct : les connected organizations (identifiées par leur tenant/domaine) permettent aux externes de demander des packages ; à l'approbation, un compte guest est créé automatiquement et son cycle de vie (suppression à l'expiration) est gouverné.\nB est faux : la cross-tenant sync sert aux organisations multi-tenants internes, pas aux demandes self-service de partenaires.\nC est faux : pas d'accès anonyme ; cibler des connected orgs précises est l'approche contrôlée.\nD est faux : pré-inviter annule l'intérêt du self-service — entitlement management crée les guests à la demande."}
},
{
id:"d4-018", domain:4, topic:"Lifecycle workflows",
q:{en:"HR wants new hires to automatically receive a welcome email, a Temporary Access Pass, and group memberships on their start date — and leavers to be disabled and removed from groups on their last day. Which Entra feature automates this?",
   fr:"Les RH veulent que les nouveaux embauchés reçoivent automatiquement un email de bienvenue, un Temporary Access Pass et des appartenances de groupes à leur date d'arrivée — et que les partants soient désactivés et retirés des groupes à leur dernier jour. Quelle fonctionnalité Entra automatise ça ?"},
options:[
 {en:"PIM for Groups", fr:"PIM for Groups"},
 {en:"Lifecycle workflows (joiner/mover/leaver) in Identity Governance", fr:"Les lifecycle workflows (joiner/mover/leaver) d'Identity Governance"},
 {en:"Dynamic groups", fr:"Les groupes dynamiques"},
 {en:"Access reviews", fr:"Les access reviews"}],
correct:[1],
explanation:{en:"A is wrong: PIM for Groups is JIT elevation, not onboarding automation.\nB is correct: lifecycle workflows (Entra ID Governance license) trigger on attributes like employeeHireDate/employeeLeaveDateTime and run task templates: send welcome email, issue TAP, add/remove groups, disable account, etc.\nC is wrong: dynamic groups handle membership by attributes but can't send TAPs/emails or orchestrate multi-step joiner/leaver tasks.\nD is wrong: reviews recertify existing access.",
fr:"A est faux : PIM for Groups est de l'élévation JIT, pas de l'automatisation d'onboarding.\nB est correct : les lifecycle workflows (licence Entra ID Governance) se déclenchent sur des attributs comme employeeHireDate/employeeLeaveDateTime et exécutent des tâches : email de bienvenue, émission de TAP, ajout/retrait de groupes, désactivation du compte, etc.\nC est faux : les groupes dynamiques gèrent l'appartenance par attributs mais ne savent pas envoyer TAP/emails ni orchestrer des tâches multi-étapes joiner/leaver.\nD est faux : les reviews recertifient l'existant."}
},
{
id:"d4-019", domain:4, topic:"Azure resource PIM",
q:{en:"A developer needs the Contributor role on a production Azure subscription, but only occasionally and never for more than 8 hours, with approval. How do you set this up?",
   fr:"Un développeur a besoin du rôle Contributor sur un abonnement Azure de production, mais seulement occasionnellement, jamais plus de 8 heures, avec approbation. Comment configures-tu ça ?"},
options:[
 {en:"Assign Contributor permanently via Azure RBAC", fr:"Assigner Contributor en permanence via Azure RBAC"},
 {en:"Give him Owner so he can manage his own access", fr:"Lui donner Owner pour qu'il gère lui-même son accès"},
 {en:"In PIM > Azure resources, onboard the subscription and create an ELIGIBLE Contributor assignment with approval and 8h max activation", fr:"Dans PIM > Azure resources, intégrer l'abonnement et créer une assignation Contributor ELIGIBLE avec approbation et activation max 8h"},
 {en:"Create a break-glass account for him", fr:"Créer un compte break-glass pour lui"}],
correct:[2],
explanation:{en:"A is wrong: standing Contributor on production violates least privilege/JIT requirements.\nB is wrong: Owner is a privilege escalation, the opposite of the goal.\nC is correct: PIM manages Azure RESOURCE roles too (Owner, Contributor, etc. on management groups/subscriptions/resource groups) — eligible assignment + role settings (approval, max 8h, MFA) = JIT access to production.\nD is wrong: break-glass accounts are for tenant emergencies only, never personal use.",
fr:"A est faux : un Contributor permanent en production viole le moindre privilège/JIT.\nB est faux : Owner est une escalade de privilèges, l'opposé de l'objectif.\nC est correct : PIM gère aussi les rôles de RESSOURCES Azure (Owner, Contributor, etc. sur management groups/abonnements/resource groups) — assignation eligible + réglages (approbation, max 8h, MFA) = accès JIT à la production.\nD est faux : les comptes break-glass servent aux urgences du tenant, jamais à un usage personnel."}
},
{
id:"d4-020", domain:4, topic:"Provisioning logs",
q:{en:"After configuring SCIM provisioning to a SaaS app, some users were skipped and not created in the app. Where do you look FIRST to find out why?",
   fr:"Après avoir configuré le provisioning SCIM vers une app SaaS, certains utilisateurs ont été ignorés et pas créés dans l'app. Où regardes-tu EN PREMIER pour comprendre pourquoi ?"},
options:[
 {en:"The audit logs of the SaaS app only", fr:"Uniquement les audit logs de l'app SaaS"},
 {en:"Identity Protection risk detections", fr:"Les détections de risque d'Identity Protection"},
 {en:"The sign-in logs", fr:"Les sign-in logs"},
 {en:"The provisioning logs in Microsoft Entra ID", fr:"Les provisioning logs dans Microsoft Entra ID"}],
correct:[3],
explanation:{en:"A is wrong: the SaaS side may help later, but the Entra provisioning logs give the skip reason directly.\nB is wrong: risk detections are about compromised identities.\nC is wrong: sign-in logs cover authentication, not provisioning cycles.\nD is correct: provisioning logs show each user's provisioning outcome — Success, Skipped (with the exact scoping-filter or out-of-scope reason), or Failure (with the error from the target app).",
fr:"A est faux : le côté SaaS peut aider ensuite, mais les provisioning logs Entra donnent directement la raison du skip.\nB est faux : les détections de risque concernent les identités compromises.\nC est faux : les sign-in logs couvrent l'authentification, pas les cycles de provisioning.\nD est correct : les provisioning logs montrent le résultat de chaque utilisateur — Success, Skipped (avec la raison exacte : scoping filter, hors périmètre) ou Failure (avec l'erreur renvoyée par l'app cible)."}
},
{
id:"d4-021", domain:4, topic:"PIM role settings",
q:{en:"Security requires that activating the User Administrator role always demands MFA, a business justification and a ServiceNow ticket number, and that activation lasts at most 4 hours. Where do you configure all of this?",
   fr:"La sécurité exige que l'activation du rôle User Administrator demande toujours le MFA, une justification métier et un numéro de ticket ServiceNow, et que l'activation dure au maximum 4 heures. Où configures-tu tout cela ?"},
options:[
 {en:"In the PIM role settings for that specific role", fr:"Dans les role settings PIM de ce rôle précis"},
 {en:"In an access review of the role", fr:"Dans une access review du rôle"},
 {en:"In a Conditional Access policy only", fr:"Dans une stratégie d'accès conditionnel uniquement"},
 {en:"In the Authentication methods policy", fr:"Dans l'Authentication methods policy"}],
correct:[0],
explanation:{en:"A is correct: PIM role settings are per role and include maximum activation duration, require MFA (or a Conditional Access authentication context), require justification, require ticket information, require approval, and notification rules.\nB is wrong: access reviews periodically recertify who holds the role; they do not gate activation.\nC is wrong: Conditional Access can enforce the authentication strength for activation via an authentication context, but justification, ticket number and activation duration only exist in PIM.\nD is wrong: that policy defines which methods exist tenant-wide, not activation requirements.",
fr:"A est correct : les role settings PIM sont propres à chaque rôle et incluent la durée maximale d'activation, l'exigence de MFA (ou d'un authentication context d'accès conditionnel), l'exigence de justification, l'exigence d'informations de ticket, l'exigence d'approbation et les règles de notification.\nB est faux : les access reviews recertifient périodiquement les détenteurs du rôle, elles ne conditionnent pas l'activation.\nC est faux : l'accès conditionnel peut imposer la force d'authentification à l'activation via un authentication context, mais justification, numéro de ticket et durée d'activation n'existent que dans PIM.\nD est faux : cette stratégie définit les méthodes disponibles dans le tenant, pas les exigences d'activation."}
},
{
id:"d4-022", domain:4, topic:"PIM assignment states",
q:{en:"Which assignment gives an administrator standing permissions that PIM does NOT require them to activate?",
   fr:"Quelle attribution donne à un administrateur des permissions permanentes que PIM ne lui demande PAS d'activer ?"},
options:[
 {en:"An eligible assignment", fr:"Une attribution éligible"},
 {en:"An active assignment", fr:"Une attribution active"},
 {en:"An eligible time-bound assignment", fr:"Une attribution éligible limitée dans le temps"},
 {en:"An approved activation request", fr:"Une demande d'activation approuvée"}],
correct:[1],
explanation:{en:"A and C are wrong: eligible means the user must activate, which is the whole point of just-in-time access; time-bound only limits how long eligibility lasts.\nB is correct: an active assignment means the role is in effect without activation — it may still be time-bound (expiring) but while it lasts the permissions are standing. Minimise active assignments; keep only break-glass accounts permanently active.\nD is wrong: an approved activation produces a temporary active state, but the assignment itself remains eligible.",
fr:"A et C sont faux : éligible signifie que l'utilisateur doit activer, c'est tout l'intérêt de l'accès juste-à-temps ; « limité dans le temps » ne borne que la durée de l'éligibilité.\nB est correct : une attribution active signifie que le rôle s'applique sans activation — elle peut être limitée dans le temps, mais tant qu'elle dure les permissions sont permanentes. Il faut minimiser les attributions actives ; seuls les comptes break-glass restent actifs en permanence.\nD est faux : une activation approuvée produit un état actif temporaire, mais l'attribution elle-même reste éligible."}
},
{
id:"d4-023", domain:4, topic:"PIM alerts",
q:{en:"PIM raises the alert \"There are too many global administrators\". What is the appropriate governance response?",
   fr:"PIM déclenche l'alerte « Il y a trop d'administrateurs généraux ». Quelle est la réponse de gouvernance appropriée ?"},
options:[
 {en:"Delete the extra administrator accounts immediately", fr:"Supprimer immédiatement les comptes administrateurs en trop"},
 {en:"Enable Security defaults", fr:"Activer les Security defaults"},
 {en:"Review each Global Administrator, move those who genuinely need it to eligible assignments in PIM, and reassign the rest to least-privileged roles", fr:"Passer en revue chaque Global Administrator, basculer ceux qui en ont réellement besoin en attributions éligibles dans PIM, et réaffecter les autres à des rôles de moindre privilège"},
 {en:"Dismiss the alert and raise the alert threshold", fr:"Rejeter l'alerte et augmenter son seuil"}],
correct:[2],
explanation:{en:"A is wrong: deleting accounts without review breaks people's access and possibly services.\nB is wrong: Security defaults do not reduce the number of privileged role holders.\nC is correct: the alert is a prompt to reduce standing privilege — convert necessary access to just-in-time eligibility and replace Global Administrator with a scoped role (for example User Administrator or Authentication Administrator) wherever the task allows.\nD is wrong: raising the threshold hides the risk instead of reducing it; tuning is only reasonable after remediation.",
fr:"A est faux : supprimer des comptes sans revue casse des accès et potentiellement des services.\nB est faux : les Security defaults ne réduisent pas le nombre de détenteurs de rôles privilégiés.\nC est correct : l'alerte invite à réduire le privilège permanent — convertir l'accès nécessaire en éligibilité juste-à-temps et remplacer Global Administrator par un rôle plus ciblé (par ex. User Administrator ou Authentication Administrator) partout où la tâche le permet.\nD est faux : augmenter le seuil masque le risque au lieu de le réduire ; l'ajustement n'est raisonnable qu'après remédiation."}
},
{
id:"d4-024", domain:4, topic:"Elevate access",
q:{en:"A Global Administrator must temporarily gain the ability to manage role assignments on every Azure subscription in the tenant, including orphaned ones. What is the documented approach?",
   fr:"Un Global Administrator doit obtenir temporairement la capacité de gérer les attributions de rôles sur tous les abonnements Azure du tenant, y compris orphelins. Quelle est l'approche documentée ?"},
options:[
 {en:"Use PIM to activate the Global Administrator role, which includes Azure RBAC", fr:"Utiliser PIM pour activer le rôle Global Administrator, qui inclut Azure RBAC"},
 {en:"Assign Owner on each subscription manually", fr:"Assigner Owner sur chaque abonnement manuellement"},
 {en:"Add the Global Administrator role to the subscription's RBAC assignments", fr:"Ajouter le rôle Global Administrator aux attributions RBAC de l'abonnement"},
 {en:"Turn on \"Access management for Azure resources\", which grants User Access Administrator at root scope, do the work, then turn it off", fr:"Activer « Gestion des accès pour les ressources Azure », ce qui accorde User Access Administrator à la racine, faire le travail, puis désactiver"}],
correct:[3],
explanation:{en:"A is wrong: activating Global Administrator grants no Azure resource permissions by itself.\nB is wrong: you cannot assign Owner on a subscription you cannot see, which is the orphaned-subscription problem.\nC is wrong: Entra directory roles are not Azure RBAC roles and cannot be assigned there.\nD is correct: elevating access assigns User Access Administrator at the root (/) scope so the Global Admin can reach every management group and subscription — including ones with no owner — and Microsoft explicitly says to disable it once the task is done. The action is recorded in the directory audit log.",
fr:"A est faux : activer Global Administrator n'accorde en soi aucune permission sur les ressources Azure.\nB est faux : on ne peut pas assigner Owner sur un abonnement qu'on ne voit pas, c'est justement le problème des abonnements orphelins.\nC est faux : les rôles d'annuaire Entra ne sont pas des rôles Azure RBAC et ne peuvent pas y être attribués.\nD est correct : l'élévation d'accès attribue User Access Administrator à la racine (/) pour que le Global Admin atteigne chaque groupe d'administration et abonnement — y compris ceux sans propriétaire — et Microsoft indique explicitement de la désactiver une fois la tâche terminée. L'action est enregistrée dans le journal d'audit de l'annuaire."}
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
 {en:"A dynamic group with a rule covering all four resources", fr:"Un groupe dynamique avec une règle couvrant les quatre ressources"},
 {en:"A catalog containing those resources, then an access package bundling the required resource roles, with a policy defining who can request", fr:"Un catalogue contenant ces ressources, puis un access package regroupant les rôles de ressources requis, avec une stratégie définissant qui peut demander"},
 {en:"A PIM eligible assignment for each resource", fr:"Une attribution éligible PIM pour chaque ressource"},
 {en:"Four separate access reviews", fr:"Quatre access reviews distinctes"}],
correct:[1],
explanation:{en:"A is wrong: a dynamic group assigns membership by attribute, cannot include an app role or a SharePoint role, and is not requestable.\nB is correct: in entitlement management, a catalog is the container of resources, an access package bundles specific resource ROLES from that catalog, and policies define who may request, who approves, and when access expires — one request, all four grants.\nC is wrong: PIM covers Entra and Azure roles and PIM for Groups, not SharePoint site roles as a bundle.\nD is wrong: access reviews recertify existing access; they grant nothing.",
fr:"A est faux : un groupe dynamique attribue l'appartenance par attribut, ne peut pas inclure un app role ni un rôle SharePoint, et n'est pas demandable.\nB est correct : dans l'entitlement management, un catalogue est le conteneur de ressources, un access package regroupe des RÔLES de ressources précis issus de ce catalogue, et les stratégies définissent qui peut demander, qui approuve et quand l'accès expire — une seule demande, les quatre octrois.\nC est faux : PIM couvre les rôles Entra et Azure et PIM for Groups, pas un lot incluant des rôles de site SharePoint.\nD est faux : les access reviews recertifient un accès existant, elles n'accordent rien."}
},
{
id:"d4-027", domain:4, topic:"Access packages for externals",
q:{en:"Partners from three companies must request project access themselves. They have no accounts in your tenant, and their manager at their own company must approve. What do you configure?",
   fr:"Des partenaires de trois entreprises doivent demander eux-mêmes l'accès au projet. Ils n'ont aucun compte dans ton tenant, et leur responsable dans leur propre entreprise doit approuver. Que configures-tu ?"},
options:[
 {en:"A self-service sign-up user flow with no approval", fr:"Un user flow d'inscription self-service sans approbation"},
 {en:"Invite each partner as a guest first, then create an internal-only policy", fr:"Inviter d'abord chaque partenaire comme guest, puis créer une stratégie pour internes uniquement"},
 {en:"Connected organizations for the three companies, and an access package policy for \"users not in your directory\" with an external sponsor as approver", fr:"Des connected organizations pour les trois entreprises, et une stratégie d'access package pour « utilisateurs hors de ton annuaire » avec un sponsor externe comme approbateur"},
 {en:"Cross-tenant synchronization from each partner tenant", fr:"Une cross-tenant synchronization depuis chaque tenant partenaire"}],
correct:[2],
explanation:{en:"A is wrong: self-service sign-up has no approval workflow and no resource bundling.\nB is wrong: pre-inviting everyone defeats self-service and creates guests who may never need access.\nC is correct: a connected organization registers a partner tenant or domain, and a policy for users not yet in your directory lets them request through the My Access portal — the guest account is created automatically on approval, and the approver can be the external sponsor from the connected organization.\nD is wrong: cross-tenant sync provisions users automatically, which is not a request-and-approve model.",
fr:"A est faux : l'inscription self-service n'a pas de workflow d'approbation ni de regroupement de ressources.\nB est faux : préinviter tout le monde annule le self-service et crée des guests qui n'auront peut-être jamais besoin d'accès.\nC est correct : une connected organization enregistre un tenant ou domaine partenaire, et une stratégie pour les utilisateurs pas encore dans ton annuaire leur permet de demander via le portail Mon accès — le compte guest est créé automatiquement à l'approbation, et l'approbateur peut être le sponsor externe de la connected organization.\nD est faux : la cross-tenant sync provisionne automatiquement, ce n'est pas un modèle demande-approbation."}
},
{
id:"d4-028", domain:4, topic:"Auto-assignment policies",
q:{en:"Every employee whose department is Finance must receive a standard bundle of access automatically, with no request, and lose it if they change department. What do you configure?",
   fr:"Chaque employé dont le département est Finance doit recevoir automatiquement un lot d'accès standard, sans demande, et le perdre s'il change de département. Que configures-tu ?"},
options:[
 {en:"A policy allowing all members to request the package", fr:"Une stratégie autorisant tous les membres à demander le package"},
 {en:"A PIM eligible assignment scoped to Finance", fr:"Une attribution éligible PIM ciblée sur Finance"},
 {en:"An access review that adds Finance users automatically", fr:"Une access review qui ajoute automatiquement les utilisateurs Finance"},
 {en:"An automatic assignment policy on the access package, with a membership rule such as user.department -eq \"Finance\"", fr:"Une stratégie d'assignation automatique sur l'access package, avec une règle comme user.department -eq « Finance »"}],
correct:[3],
explanation:{en:"A is wrong: that still requires each person to request.\nB is wrong: PIM eligibility requires activation and covers roles, not resource bundles.\nC is wrong: reviews remove or keep existing access; they never grant new access.\nD is correct: an automatic assignment policy uses an attribute rule to assign the access package without any request, and when a user stops matching the rule the assignment is removed — attribute-driven joiner/mover/leaver behaviour.",
fr:"A est faux : cela oblige encore chacun à faire une demande.\nB est faux : l'éligibilité PIM exige une activation et concerne des rôles, pas des lots de ressources.\nC est faux : les revues retirent ou conservent un accès existant, elles n'en accordent jamais de nouveau.\nD est correct : une stratégie d'assignation automatique utilise une règle d'attribut pour attribuer l'access package sans aucune demande, et quand un utilisateur ne correspond plus à la règle l'assignation est retirée — un comportement joiner/mover/leaver piloté par attribut."}
},
{
id:"d4-029", domain:4, topic:"Separation of duties",
q:{en:"Auditors require that nobody can hold both the \"Accounts Payable\" and the \"Vendor Management\" access packages. How do you enforce this at request time?",
   fr:"Les auditeurs exigent que personne ne puisse détenir à la fois les access packages « Accounts Payable » et « Vendor Management ». Comment l'imposer au moment de la demande ?"},
options:[
 {en:"Configure separation of duties on the access package: mark the other access package (or a group) as incompatible", fr:"Configurer la separation of duties sur l'access package : marquer l'autre access package (ou un groupe) comme incompatible"},
 {en:"Create a quarterly access review", fr:"Créer une access review trimestrielle"},
 {en:"Use a Conditional Access policy", fr:"Utiliser une stratégie d'accès conditionnel"},
 {en:"Add an approver who is told to check manually", fr:"Ajouter un approbateur à qui l'on demande de vérifier manuellement"}],
correct:[0],
explanation:{en:"A is correct: entitlement management supports incompatible access packages and incompatible groups — a user who already has the conflicting access cannot even submit the request, and you can also report on existing users who would violate the rule.\nB is wrong: a review detects the conflict months later instead of preventing it.\nC is wrong: Conditional Access evaluates sign-ins, not entitlement combinations.\nD is wrong: manual checking is error-prone and not an enforced control.",
fr:"A est correct : l'entitlement management supporte les access packages et groupes incompatibles — un utilisateur détenant déjà l'accès conflictuel ne peut même pas soumettre la demande, et tu peux aussi lister les utilisateurs existants qui violeraient la règle.\nB est faux : une revue détecte le conflit des mois plus tard au lieu de l'empêcher.\nC est faux : l'accès conditionnel évalue les connexions, pas les combinaisons de droits.\nD est faux : une vérification manuelle est sujette à erreur et n'est pas un contrôle imposé."}
},
{
id:"d4-030", domain:4, topic:"Entitlement delegation",
q:{en:"Business units must create and manage their own access packages without any Entra administrator role, and without seeing each other's resources. What do you do?",
   fr:"Les directions métier doivent créer et gérer leurs propres access packages sans aucun rôle d'administrateur Entra, et sans voir les ressources des autres. Que fais-tu ?"},
options:[
 {en:"Ask them to email requests to the IT team", fr:"Leur demander d'envoyer leurs demandes par email à l'équipe IT"},
 {en:"Give each business unit its own catalog and assign catalog owner / access package manager roles on that catalog", fr:"Donner à chaque direction son propre catalogue et attribuer les rôles catalog owner / access package manager sur ce catalogue"},
 {en:"Assign each business unit lead the Identity Governance Administrator role", fr:"Assigner à chaque responsable le rôle Identity Governance Administrator"},
 {en:"Assign the User Administrator role scoped to an administrative unit", fr:"Assigner le rôle User Administrator scopé sur une administrative unit"}],
correct:[1],
explanation:{en:"A is wrong: that recreates the IT bottleneck the feature is meant to remove.\nB is correct: entitlement management has its own delegation model — catalog creators, catalog owners, access package managers and assignment managers — scoped to a catalog, so a business unit manages its own packages and sees only its own resources, with no directory role.\nC is wrong: Identity Governance Administrator is tenant-wide and lets each lead see and change everything.\nD is wrong: administrative units scope user and device management, not catalogs.",
fr:"A est faux : cela recrée le goulot d'étranglement IT que la fonctionnalité vise à supprimer.\nB est correct : l'entitlement management a son propre modèle de délégation — catalog creators, catalog owners, access package managers et assignment managers — limité à un catalogue, donc une direction gère ses propres packages et ne voit que ses ressources, sans rôle d'annuaire.\nC est faux : Identity Governance Administrator est à l'échelle du tenant et permettrait à chaque responsable de tout voir et modifier.\nD est faux : les administrative units limitent la gestion des utilisateurs et appareils, pas des catalogues."}
},
{
id:"d4-031", domain:4, topic:"Access review reviewers",
q:{en:"You create an access review of a group with 4,000 members from 60 departments. Who should review, to keep it accurate and scalable?",
   fr:"Tu crées une access review sur un groupe de 4 000 membres issus de 60 départements. Qui doit relire, pour rester juste et à l'échelle ?"},
options:[
 {en:"A single Global Administrator", fr:"Un seul Global Administrator"},
 {en:"The members themselves only, with no fallback", fr:"Les membres eux-mêmes uniquement, sans repli"},
 {en:"Managers of the members, with a fallback reviewer for users who have no manager", fr:"Les managers des membres, avec un relecteur de repli pour les utilisateurs sans manager"},
 {en:"Nobody — enable auto-apply and let the system decide", fr:"Personne — activer l'application automatique et laisser le système décider"}],
correct:[2],
explanation:{en:"A is wrong: one admin cannot judge 4,000 memberships and will rubber-stamp.\nB is wrong: self-review is valid for some scenarios (guests, self-attested need) but everyone approves themselves, and with no fallback it is fragile.\nC is correct: manager-based review distributes the work to the people with real context, and the fallback reviewer catches users whose manager attribute is empty — otherwise those reviews would have no decision maker.\nD is wrong: auto-apply only applies the decisions made (or the configured default when reviewers do not respond); it is not a substitute for reviewers.",
fr:"A est faux : un seul admin ne peut pas juger 4 000 appartenances et validera machinalement.\nB est faux : l'auto-revue est valable dans certains cas (guests, besoin auto-déclaré) mais chacun s'approuve lui-même, et sans repli c'est fragile.\nC est correct : la revue par manager répartit le travail vers les personnes qui ont le contexte réel, et le relecteur de repli couvre les utilisateurs dont l'attribut manager est vide — sinon ces revues n'auraient aucun décideur.\nD est faux : l'application automatique applique les décisions prises (ou le comportement par défaut configuré si les relecteurs ne répondent pas) ; ce n'est pas un substitut aux relecteurs."}
},
{
id:"d4-032", domain:4, topic:"Access review non-response",
q:{en:"In an access review, half the reviewers never respond before the deadline. You must ensure unreviewed access is removed automatically, following a deny-by-default posture. What do you configure?",
   fr:"Dans une access review, la moitié des relecteurs ne répondent jamais avant l'échéance. Tu dois garantir que l'accès non relu est retiré automatiquement, dans une posture de refus par défaut. Que configures-tu ?"},
options:[
 {en:"Manual apply, and chase reviewers by email", fr:"L'application manuelle, en relançant les relecteurs par email"},
 {en:"Extend the review indefinitely", fr:"Prolonger indéfiniment la revue"},
 {en:"Auto-apply results, with the action set to No change", fr:"L'application automatique des résultats, avec l'action réglée sur Aucun changement"},
 {en:"Auto-apply results, with the \"If reviewers don't respond\" action set to Remove access", fr:"L'application automatique des résultats, avec l'action « Si les relecteurs ne répondent pas » réglée sur Retirer l'accès"}],
correct:[3],
explanation:{en:"A is wrong: chasing is not an enforced control and does not scale.\nB is wrong: an endless review never produces a decision, which is the worst outcome.\nC is wrong: No change is the permissive default that lets stale access survive.\nD is correct: the non-response behaviour can be No change, Remove access, Approve access or Take recommendations. Remove access combined with auto-apply implements fail-secure governance — silence removes access rather than granting it forever.",
fr:"A est faux : la relance n'est pas un contrôle imposé et ne passe pas à l'échelle.\nB est faux : une revue sans fin ne produit jamais de décision, c'est le pire résultat.\nC est faux : Aucun changement est le défaut permissif qui laisse survivre les accès obsolètes.\nD est correct : le comportement en cas de non-réponse peut être Aucun changement, Retirer l'accès, Approuver l'accès ou Suivre les recommandations. Retirer l'accès combiné à l'application automatique met en œuvre une gouvernance fail-secure — le silence retire l'accès au lieu de l'accorder indéfiniment."}
},
{
id:"d4-033", domain:4, topic:"Access review recommendations",
q:{en:"Reviewers complain they do not know whether a user still needs access. Which access review feature helps them decide objectively?",
   fr:"Les relecteurs se plaignent de ne pas savoir si un utilisateur a encore besoin de l'accès. Quelle fonctionnalité des access reviews les aide à décider objectivement ?"},
options:[
 {en:"Decision helpers based on sign-in activity, which recommend denying users with no interactive sign-in in the last 30 days", fr:"Les aides à la décision basées sur l'activité de connexion, qui recommandent de refuser les utilisateurs sans connexion interactive depuis 30 jours"},
 {en:"Assigning the review to the Global Administrator", fr:"Assigner la revue au Global Administrator"},
 {en:"Enabling MFA for the reviewers", fr:"Activer le MFA pour les relecteurs"},
 {en:"Shortening the review to one day", fr:"Raccourcir la revue à un jour"}],
correct:[0],
explanation:{en:"A is correct: reviews can show recommendations derived from inactivity (and, for group reviews, from group-to-user affiliation), and you can also configure the review to take the recommendations automatically when reviewers do not act.\nB is wrong: escalating to an admin removes the context rather than adding it.\nC is wrong: MFA authenticates the reviewer, it gives no decision context.\nD is wrong: less time makes reviews worse, not better informed.",
fr:"A est correct : les revues peuvent afficher des recommandations dérivées de l'inactivité (et, pour les revues de groupes, de l'affiliation groupe-utilisateur), et tu peux aussi configurer la revue pour suivre automatiquement ces recommandations si les relecteurs n'agissent pas.\nB est faux : escalader vers un admin retire le contexte au lieu de l'ajouter.\nC est faux : le MFA authentifie le relecteur, il n'apporte aucun contexte de décision.\nD est faux : moins de temps dégrade la revue, elle n'en est pas mieux informée."}
},
{
id:"d4-034", domain:4, topic:"Access review of applications",
q:{en:"You must recertify quarterly who is assigned to a critical enterprise application, including which app role each person holds. What do you create?",
   fr:"Tu dois recertifier chaque trimestre qui est assigné à une application d'entreprise critique, y compris le rôle applicatif détenu par chacun. Que crées-tu ?"},
options:[
 {en:"A PIM access review of Entra directory roles", fr:"Une access review PIM des rôles d'annuaire Entra"},
 {en:"A recurring access review with the application as the resource, reviewing user assignments per app role", fr:"Une access review récurrente avec l'application comme ressource, relisant les assignations par app role"},
 {en:"An access review of the group used for licensing", fr:"Une access review du groupe utilisé pour les licences"},
 {en:"A provisioning log export", fr:"Un export des journaux de provisioning"}],
correct:[1],
explanation:{en:"A is wrong: PIM reviews cover Entra and Azure roles, not application assignments.\nB is correct: access reviews can target an application directly, listing assigned users grouped by app role, and can recur quarterly with auto-apply.\nC is wrong: a licensing group review certifies the wrong object.\nD is wrong: a log export documents changes but performs no recertification.",
fr:"A est faux : les revues PIM couvrent les rôles Entra et Azure, pas les assignations d'applications.\nB est correct : les access reviews peuvent cibler directement une application, en listant les utilisateurs assignés regroupés par app role, et peuvent être récurrentes trimestriellement avec application automatique.\nC est faux : relire un groupe de licences certifie le mauvais objet.\nD est faux : un export de journaux documente les changements mais n'effectue aucune recertification."}
},
{
id:"d4-035", domain:4, topic:"Lifecycle workflows - leaver",
q:{en:"On an employee's last day, their account must be disabled, all licenses removed, and they must be taken out of every group — automatically, on the date in their employeeLeaveDateTime attribute. What do you configure?",
   fr:"Le dernier jour d'un employé, son compte doit être désactivé, toutes ses licences retirées, et il doit être sorti de tous les groupes — automatiquement, à la date de son attribut employeeLeaveDateTime. Que configures-tu ?"},
options:[
 {en:"A dynamic group excluding leavers", fr:"Un groupe dynamique excluant les partants"},
 {en:"A scheduled PowerShell script", fr:"Un script PowerShell planifié"},
 {en:"A leaver lifecycle workflow triggered on employeeLeaveDateTime, with the built-in tasks Disable user account, Remove all licenses and Remove user from all groups", fr:"Un lifecycle workflow de type leaver déclenché sur employeeLeaveDateTime, avec les tâches intégrées Désactiver le compte, Retirer toutes les licences et Retirer l'utilisateur de tous les groupes"},
 {en:"An access review with auto-apply", fr:"Une access review avec application automatique"}],
correct:[2],
explanation:{en:"A is wrong: a dynamic group changes membership of one group only, and does not disable an account or strip licenses.\nB is wrong: a script would work but is unmanaged, unaudited custom code where a supported, auditable feature exists.\nC is correct: lifecycle workflows are the joiner/mover/leaver engine in Entra ID Governance — they trigger relative to attributes such as employeeHireDate or employeeLeaveDateTime and run built-in tasks in order, with run history you can audit.\nD is wrong: reviews are periodic recertification, not date-triggered offboarding.",
fr:"A est faux : un groupe dynamique ne change l'appartenance que d'un groupe, et ne désactive pas un compte ni ne retire de licences.\nB est faux : un script fonctionnerait mais c'est du code sur mesure non géré et non audité là où une fonctionnalité supportée et auditable existe.\nC est correct : les lifecycle workflows sont le moteur joiner/mover/leaver d'Entra ID Governance — ils se déclenchent par rapport à des attributs comme employeeHireDate ou employeeLeaveDateTime et exécutent des tâches intégrées dans l'ordre, avec un historique auditable.\nD est faux : les revues sont une recertification périodique, pas un offboarding déclenché par date."}
},
{
id:"d4-036", domain:4, topic:"Lifecycle custom extensions",
q:{en:"A joiner workflow must also create a ticket in your ITSM tool and post to a Teams channel. How do you extend the workflow?",
   fr:"Un workflow de type joiner doit aussi créer un ticket dans ton outil ITSM et publier dans un canal Teams. Comment étendre le workflow ?"},
options:[
 {en:"It is impossible; lifecycle workflows only run built-in tasks", fr:"C'est impossible ; les lifecycle workflows n'exécutent que des tâches intégrées"},
 {en:"Write the integration inside a Conditional Access policy", fr:"Écrire l'intégration dans une stratégie d'accès conditionnel"},
 {en:"Use an access package custom question", fr:"Utiliser une question personnalisée d'access package"},
 {en:"Add a custom task extension that calls an Azure Logic App", fr:"Ajouter une custom task extension qui appelle une Azure Logic App"}],
correct:[3],
explanation:{en:"A is wrong: extensibility via Logic Apps is a documented feature.\nB is wrong: Conditional Access makes access decisions; it runs no automation.\nC is wrong: a custom question collects text on a request form.\nD is correct: custom task extensions let a workflow call an Azure Logic App, which can then talk to any external system — ITSM, Teams, HR — either fire-and-forget or waiting for a callback response.",
fr:"A est faux : l'extensibilité via Logic Apps est une fonctionnalité documentée.\nB est faux : l'accès conditionnel prend des décisions d'accès, il n'exécute aucune automatisation.\nC est faux : une question personnalisée collecte du texte sur un formulaire de demande.\nD est correct : les custom task extensions permettent à un workflow d'appeler une Azure Logic App, qui peut ensuite dialoguer avec n'importe quel système externe — ITSM, Teams, RH — soit en mode « lancer et oublier », soit en attendant une réponse de rappel."}
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
 {en:"The provisioning logs", fr:"Les journaux de provisioning"},
 {en:"The audit logs, which record directory changes with the initiating actor and target", fr:"Les journaux d'audit, qui enregistrent les changements d'annuaire avec l'acteur initiateur et la cible"},
 {en:"Identity Protection risk detections", fr:"Les détections de risque d'Identity Protection"},
 {en:"The sign-in logs", fr:"Les journaux de connexion"}],
correct:[1],
explanation:{en:"A is wrong: provisioning logs cover automated provisioning to and from applications, so they would only show it if the change came from a provisioning job.\nB is correct: audit logs answer who did what to which object and when — including \"Add member to group\" with the initiated-by actor.\nC is wrong: risk detections flag suspicious authentication, not administrative actions.\nD is wrong: sign-in logs show authentication events, not directory modifications.",
fr:"A est faux : les journaux de provisioning couvrent le provisioning automatisé vers et depuis les applications, ils ne le montreraient que si le changement venait d'un job de provisioning.\nB est correct : les journaux d'audit répondent à qui a fait quoi sur quel objet et quand — y compris « Ajouter un membre à un groupe » avec l'acteur initiateur.\nC est faux : les détections de risque signalent des authentifications suspectes, pas des actions administratives.\nD est faux : les journaux de connexion montrent des événements d'authentification, pas des modifications d'annuaire."}
},
{
id:"d4-039", domain:4, topic:"KQL for sign-ins",
q:{en:"Which KQL query returns failed sign-ins from the last 24 hours, grouped by user, from Entra logs in Log Analytics?",
   fr:"Quelle requête KQL renvoie les connexions échouées des dernières 24 heures, regroupées par utilisateur, depuis les journaux Entra dans Log Analytics ?"},
options:[
 {en:"SELECT UserPrincipalName, COUNT(*) FROM SigninLogs WHERE Result = 'Failure'", fr:"SELECT UserPrincipalName, COUNT(*) FROM SigninLogs WHERE Result = 'Failure'"},
 {en:"AuditLogs | where TimeGenerated > ago(24h) | summarize count() by UserPrincipalName", fr:"AuditLogs | where TimeGenerated > ago(24h) | summarize count() by UserPrincipalName"},
 {en:"SigninLogs | where TimeGenerated > ago(24h) | where ResultType != 0 | summarize count() by UserPrincipalName", fr:"SigninLogs | where TimeGenerated > ago(24h) | where ResultType != 0 | summarize count() by UserPrincipalName"},
 {en:"SigninLogs | where ResultType == 0 | count", fr:"SigninLogs | where ResultType == 0 | count"}],
correct:[2],
explanation:{en:"A is wrong: Log Analytics uses KQL, not SQL.\nB is wrong: AuditLogs contains directory changes, not sign-in outcomes.\nC is correct: SigninLogs is the table, ResultType 0 means success so != 0 isolates failures, ago(24h) scopes the window, and summarize count() by groups per user.\nD is wrong: ResultType == 0 selects SUCCESSFUL sign-ins and there is no grouping or time filter.",
fr:"A est faux : Log Analytics utilise KQL, pas SQL.\nB est faux : AuditLogs contient les changements d'annuaire, pas les résultats de connexion.\nC est correct : SigninLogs est la table, ResultType 0 signifie succès donc != 0 isole les échecs, ago(24h) borne la fenêtre, et summarize count() by regroupe par utilisateur.\nD est faux : ResultType == 0 sélectionne les connexions RÉUSSIES et il n'y a ni regroupement ni filtre temporel."}
},
{
id:"d4-040", domain:4, topic:"Alerting on privileged activity",
q:{en:"You must be notified by email within minutes whenever anyone activates the Global Administrator role. Entra logs are already sent to Log Analytics. What do you create?",
   fr:"Tu dois être notifié par email en quelques minutes dès que quelqu'un active le rôle Global Administrator. Les journaux Entra sont déjà envoyés vers Log Analytics. Que crées-tu ?"},
options:[
 {en:"A PIM access review", fr:"Une access review PIM"},
 {en:"A weekly workbook", fr:"Un workbook hebdomadaire"},
 {en:"A Conditional Access policy in report-only mode", fr:"Une stratégie d'accès conditionnel en mode report-only"},
 {en:"An Azure Monitor log search alert rule on the AuditLogs table with an action group that sends email", fr:"Une règle d'alerte de recherche de journaux Azure Monitor sur la table AuditLogs, avec un action group qui envoie un email"}],
correct:[3],
explanation:{en:"A is wrong: a review is periodic recertification, not real-time alerting.\nB is wrong: a workbook visualises data but does not notify anyone.\nC is wrong: report-only logs policy evaluation and sends no alerts.\nD is correct: a log search alert rule runs your KQL on a schedule and fires an action group (email, SMS, webhook, Logic App) — the standard way to alert on audit events. PIM's own notification settings are a complementary built-in option.",
fr:"A est faux : une revue est une recertification périodique, pas une alerte en temps réel.\nB est faux : un workbook visualise des données mais ne notifie personne.\nC est faux : le mode report-only journalise l'évaluation de la stratégie et n'envoie aucune alerte.\nD est correct : une règle d'alerte de recherche de journaux exécute ta requête KQL selon une planification et déclenche un action group (email, SMS, webhook, Logic App) — la façon standard d'alerter sur des événements d'audit. Les notifications intégrées de PIM sont une option complémentaire."}
},
{
id:"d4-041", domain:4, topic:"Log retention by licence",
q:{en:"Your tenant has Entra ID Free. An investigation needs sign-in data from 6 months ago. What is the situation?",
   fr:"Ton tenant est en Entra ID Free. Une investigation a besoin de données de connexion vieilles de 6 mois. Quelle est la situation ?"},
options:[
 {en:"The data is gone — Free retains sign-in logs for 7 days; you must export logs to Log Analytics or storage going forward", fr:"Les données sont perdues — l'édition Free conserve les journaux de connexion 7 jours ; il faut désormais exporter vers Log Analytics ou un compte de stockage"},
 {en:"Microsoft Support can restore logs on request", fr:"Le support Microsoft peut restaurer les journaux sur demande"},
 {en:"Upgrading to P1 now retroactively restores 6 months of logs", fr:"Passer en P1 maintenant restaure rétroactivement 6 mois de journaux"},
 {en:"The data is available for 90 days in the portal", fr:"Les données sont disponibles 90 jours dans le portail"}],
correct:[0],
explanation:{en:"A is correct: native retention is 7 days for sign-in logs on the Free tier and 30 days with P1 or P2 — longer retention only exists if you exported the data through diagnostic settings before the fact.\nB is wrong: expired log data is not recoverable through Support.\nC is wrong: a licence upgrade changes future retention, never the past.\nD is wrong: 90 days is not an Entra retention tier for these logs.",
fr:"A est correct : la rétention native est de 7 jours pour les journaux de connexion en édition Free et de 30 jours avec P1 ou P2 — une conservation plus longue n'existe que si tu as exporté les données via les diagnostic settings au préalable.\nB est faux : des données de journaux expirées ne sont pas récupérables via le support.\nC est faux : une montée de licence change la rétention future, jamais le passé.\nD est faux : 90 jours n'est pas un palier de rétention Entra pour ces journaux."}
},
{
id:"d4-042", domain:4, topic:"PIM for Groups",
q:{en:"A group grants standing access to a SaaS application that does not support app roles. You want that access to be just-in-time with approval, without changing the application. What do you configure?",
   fr:"Un groupe accorde un accès permanent à une application SaaS qui ne supporte pas les app roles. Tu veux que cet accès soit juste-à-temps avec approbation, sans modifier l'application. Que configures-tu ?"},
options:[
 {en:"A Conditional Access policy requiring MFA", fr:"Une stratégie d'accès conditionnel exigeant le MFA"},
 {en:"PIM for Groups: make users eligible for group membership, with activation settings requiring approval", fr:"PIM for Groups : rendre les utilisateurs éligibles à l'appartenance au groupe, avec des réglages d'activation exigeant une approbation"},
 {en:"A dynamic membership rule on the group", fr:"Une règle d'appartenance dynamique sur le groupe"},
 {en:"An access review every month", fr:"Une access review chaque mois"}],
correct:[1],
explanation:{en:"A is wrong: MFA strengthens authentication but the access remains permanent.\nB is correct: PIM for Groups makes membership (or ownership) of a role-assignable group eligible rather than permanent, with its own activation settings — MFA, justification, approval, maximum duration — so any access granted through that group becomes just-in-time, whatever the application supports.\nC is wrong: dynamic membership is automatic and permanent, the opposite of just-in-time.\nD is wrong: a monthly review leaves standing access for up to a month.",
fr:"A est faux : le MFA renforce l'authentification mais l'accès reste permanent.\nB est correct : PIM for Groups rend l'appartenance (ou la propriété) d'un groupe role-assignable éligible au lieu de permanente, avec ses propres réglages d'activation — MFA, justification, approbation, durée maximale — donc tout accès accordé via ce groupe devient juste-à-temps, quelles que soient les capacités de l'application.\nC est faux : l'appartenance dynamique est automatique et permanente, l'inverse du juste-à-temps.\nD est faux : une revue mensuelle laisse un accès permanent jusqu'à un mois."}
},
{
id:"d4-043", domain:4, topic:"PIM discovery and insights",
q:{en:"You inherit a tenant with dozens of Azure subscriptions and no idea who holds Owner rights. Which PIM capability helps you find and remediate this?",
   fr:"Tu héritent d'un tenant avec des dizaines d'abonnements Azure et aucune idée de qui détient les droits Owner. Quelle capacité PIM t'aide à découvrir et corriger cela ?"},
options:[
 {en:"Identity Secure Score", fr:"L'Identity Secure Score"},
 {en:"The provisioning logs", fr:"Les journaux de provisioning"},
 {en:"PIM Discovery and insights for Azure resources, which lists Owner and User Access Administrator assignments and lets you convert them to eligible", fr:"PIM Discovery and insights pour les ressources Azure, qui liste les attributions Owner et User Access Administrator et permet de les convertir en éligibles"},
 {en:"Entra Connect Health", fr:"Entra Connect Health"}],
correct:[2],
explanation:{en:"A is wrong: Secure Score gives tenant-wide identity recommendations but does not enumerate Azure resource role holders for remediation.\nB is wrong: provisioning logs cover application provisioning.\nC is correct: discovery and insights surfaces the privileged Azure resource role assignments across subscriptions, highlights permanent ones, and offers to bring them under PIM management as eligible assignments.\nD is wrong: Connect Health monitors hybrid sync infrastructure.",
fr:"A est faux : le Secure Score donne des recommandations d'identité à l'échelle du tenant mais n'énumère pas les détenteurs de rôles de ressources Azure pour remédiation.\nB est faux : les journaux de provisioning couvrent le provisioning applicatif.\nC est correct : Discovery and insights fait remonter les attributions de rôles privilégiés sur les ressources Azure à travers les abonnements, met en évidence les attributions permanentes et propose de les placer sous gestion PIM en tant qu'éligibles.\nD est faux : Connect Health surveille l'infrastructure de sync hybride."}
},
{
id:"d4-044", domain:4, topic:"Guest access reviews",
q:{en:"You must remove guests who have not signed in for 90 days across all Microsoft 365 groups, with owners deciding and the outcome applied automatically. What do you create?",
   fr:"Tu dois retirer les guests qui ne se sont pas connectés depuis 90 jours dans tous les groupes Microsoft 365, avec décision des propriétaires et application automatique du résultat. Que crées-tu ?"},
options:[
 {en:"A Conditional Access policy blocking guests after 90 days", fr:"Une stratégie d'accès conditionnel bloquant les guests après 90 jours"},
 {en:"Deleting all guest accounts and re-inviting the active ones", fr:"Supprimer tous les comptes guests et réinviter les actifs"},
 {en:"A lifecycle workflow triggered on employeeLeaveDateTime", fr:"Un lifecycle workflow déclenché sur employeeLeaveDateTime"},
 {en:"A recurring access review scoped to guest users across all Microsoft 365 groups, reviewed by group owners with a fallback, auto-apply on, and inactivity-based recommendations", fr:"Une access review récurrente ciblant les guests dans tous les groupes Microsoft 365, relue par les propriétaires de groupes avec un repli, application automatique activée, et recommandations basées sur l'inactivité"}],
correct:[3],
explanation:{en:"A is wrong: Conditional Access has no inactivity condition and blocking is not cleanup.\nB is wrong: mass deletion breaks active collaboration and loses history.\nC is wrong: lifecycle workflows key off employment attributes that external guests do not have.\nD is correct: access reviews support a guests-only scope across all Microsoft 365 groups in one review, delegate decisions to group owners with a fallback reviewer, apply results automatically and surface sign-in inactivity as a recommendation.",
fr:"A est faux : l'accès conditionnel n'a pas de condition d'inactivité et bloquer n'est pas nettoyer.\nB est faux : une suppression de masse casse les collaborations actives et perd l'historique.\nC est faux : les lifecycle workflows s'appuient sur des attributs d'emploi que les guests externes n'ont pas.\nD est correct : les access reviews supportent une portée limitée aux guests sur tous les groupes Microsoft 365 en une seule revue, délèguent la décision aux propriétaires de groupes avec un relecteur de repli, appliquent les résultats automatiquement et affichent l'inactivité de connexion comme recommandation."}
},
{
id:"d4-045", domain:4, topic:"Governance licensing",
q:{en:"Which set of features requires Microsoft Entra ID Governance (or Entra Suite) licensing rather than being covered by Entra ID P2 alone?",
   fr:"Quel ensemble de fonctionnalités nécessite une licence Microsoft Entra ID Governance (ou Entra Suite) plutôt que d'être couvert par Entra ID P2 seul ?"},
options:[
 {en:"Lifecycle workflows and custom task extensions", fr:"Les lifecycle workflows et les custom task extensions"},
 {en:"SSPR with password writeback", fr:"Le SSPR avec password writeback"},
 {en:"PIM for Entra roles and access reviews of roles", fr:"PIM pour les rôles Entra et les access reviews de rôles"},
 {en:"Conditional Access and named locations", fr:"L'accès conditionnel et les named locations"}],
correct:[0],
explanation:{en:"A is correct: lifecycle workflows (joiner/mover/leaver automation) and their Logic App custom extensions are Entra ID Governance features, sold as an add-on to P1/P2 or within Entra Suite.\nB is wrong: SSPR with writeback is P1.\nC is wrong: PIM and access reviews are core Entra ID P2 capabilities.\nD is wrong: Conditional Access is P1.",
fr:"A est correct : les lifecycle workflows (automatisation joiner/mover/leaver) et leurs extensions personnalisées Logic App sont des fonctionnalités Entra ID Governance, vendues en complément de P1/P2 ou dans Entra Suite.\nB est faux : le SSPR avec writeback est en P1.\nC est faux : PIM et les access reviews sont des capacités de base d'Entra ID P2.\nD est faux : l'accès conditionnel est en P1."}
},
{
id:"d4-046", domain:4, topic:"PIM activation experience",
q:{en:"A user with an eligible User Administrator assignment activates the role, but the portal shows the request as pending. What is happening?",
   fr:"Un utilisateur avec une attribution éligible User Administrator active le rôle, mais le portail affiche la demande comme en attente. Que se passe-t-il ?"},
options:[
 {en:"Activation always takes 24 hours", fr:"L'activation prend toujours 24 heures"},
 {en:"The role's PIM settings require approval — the role is not active until a designated approver approves the request", fr:"Les réglages PIM du rôle exigent une approbation — le rôle n'est pas actif tant qu'un approbateur désigné n'a pas approuvé la demande"},
 {en:"The user is missing an Entra ID P1 licence", fr:"Il manque une licence Entra ID P1 à l'utilisateur"},
 {en:"Eligible assignments cannot be activated by the user", fr:"Les attributions éligibles ne peuvent pas être activées par l'utilisateur"}],
correct:[1],
explanation:{en:"A is wrong: without approval, activation is effectively immediate.\nB is correct: when Require approval to activate is enabled on the role settings, activation creates a request routed to the approvers, who are notified and whose decision is audited.\nC is wrong: PIM requires Entra ID P2, and a licence problem would prevent eligibility, not produce a pending state.\nD is wrong: activating is exactly what an eligible assignment is for.",
fr:"A est faux : sans approbation, l'activation est quasi immédiate.\nB est correct : quand « Exiger une approbation pour activer » est activé dans les réglages du rôle, l'activation crée une demande acheminée vers les approbateurs, qui sont notifiés et dont la décision est auditée.\nC est faux : PIM nécessite Entra ID P2, et un problème de licence empêcherait l'éligibilité au lieu de produire un état en attente.\nD est faux : activer est précisément la raison d'être d'une attribution éligible."}
},
{
id:"d4-047", domain:4, topic:"PIM Azure vs Entra roles",
q:{en:"Which statement correctly distinguishes PIM for Entra roles from PIM for Azure resources?",
   fr:"Quelle affirmation distingue correctement PIM pour les rôles Entra de PIM pour les ressources Azure ?"},
options:[
 {en:"PIM for Azure resources can also manage Entra directory roles", fr:"PIM pour les ressources Azure peut aussi gérer les rôles d'annuaire Entra"},
 {en:"Only Entra roles support just-in-time activation", fr:"Seuls les rôles Entra supportent l'activation juste-à-temps"},
 {en:"PIM for Entra roles governs directory roles such as Global Administrator; PIM for Azure resources governs Azure RBAC roles at management group, subscription, resource group or resource scope", fr:"PIM pour les rôles Entra gouverne les rôles d'annuaire comme Global Administrator ; PIM pour les ressources Azure gouverne les rôles Azure RBAC au niveau groupe d'administration, abonnement, groupe de ressources ou ressource"},
 {en:"They are the same feature with two names", fr:"Ce sont la même fonctionnalité sous deux noms"}],
correct:[2],
explanation:{en:"A is wrong: directory roles are governed by PIM for Entra roles.\nB is wrong: both support eligible assignments and just-in-time activation.\nC is correct: the two systems are separate, matching the separation between the directory and Azure resource management, and each has its own role settings, approvers and audit trail — Azure resource roles additionally have a scope hierarchy.\nD is wrong: they cover different permission systems.",
fr:"A est faux : les rôles d'annuaire sont gouvernés par PIM pour les rôles Entra.\nB est faux : les deux supportent les attributions éligibles et l'activation juste-à-temps.\nC est correct : les deux systèmes sont distincts, à l'image de la séparation entre l'annuaire et la gestion des ressources Azure, et chacun a ses propres réglages de rôle, approbateurs et piste d'audit — les rôles de ressources Azure ayant en plus une hiérarchie de portée.\nD est faux : ils couvrent des systèmes de permissions différents."}
},
{
id:"d4-048", domain:4, topic:"PIM scope for Azure resources",
q:{en:"A DBA team must be eligible for Contributor on one resource group only, not on the whole subscription. How do you configure this in PIM?",
   fr:"Une équipe DBA doit être éligible au rôle Contributor sur un seul groupe de ressources, pas sur tout l'abonnement. Comment le configurer dans PIM ?"},
options:[
 {en:"Assign the Entra role Contributor scoped to the resource group", fr:"Assigner le rôle Entra Contributor scopé sur le groupe de ressources"},
 {en:"Create the eligible assignment at subscription scope and add a deny assignment", fr:"Créer l'attribution éligible à la portée de l'abonnement et ajouter une deny assignment"},
 {en:"Use an administrative unit containing the resource group", fr:"Utiliser une administrative unit contenant le groupe de ressources"},
 {en:"Onboard the resource group in PIM for Azure resources and create the eligible assignment at that resource group's scope", fr:"Intégrer le groupe de ressources dans PIM pour les ressources Azure et créer l'attribution éligible à la portée de ce groupe de ressources"}],
correct:[3],
explanation:{en:"A is wrong: Contributor is an Azure RBAC role, not an Entra directory role.\nB is wrong: assigning broadly then subtracting is the opposite of least privilege and deny assignments are a specialised construct.\nC is wrong: administrative units scope directory objects, not Azure resources.\nD is correct: Azure resource roles in PIM inherit the RBAC scope hierarchy, so you assign eligibility precisely at the resource group and it does not extend upward.",
fr:"A est faux : Contributor est un rôle Azure RBAC, pas un rôle d'annuaire Entra.\nB est faux : attribuer largement puis soustraire est l'inverse du moindre privilège, et les deny assignments sont une construction spécialisée.\nC est faux : les administrative units ciblent des objets d'annuaire, pas des ressources Azure.\nD est correct : les rôles de ressources Azure dans PIM héritent de la hiérarchie de portée RBAC, tu attribues donc l'éligibilité précisément au groupe de ressources et elle ne remonte pas."}
},
{
id:"d4-049", domain:4, topic:"PIM expiration settings",
q:{en:"Your policy states that no eligible role assignment may last more than 12 months without renewal. Where do you enforce it?",
   fr:"Ta politique impose qu'aucune attribution de rôle éligible ne dure plus de 12 mois sans renouvellement. Où l'imposes-tu ?"},
options:[
 {en:"In the role's PIM settings, by disallowing permanent eligible assignments and setting the maximum eligible assignment duration", fr:"Dans les réglages PIM du rôle, en interdisant les attributions éligibles permanentes et en définissant la durée maximale d'attribution éligible"},
 {en:"In the maximum activation duration setting", fr:"Dans le réglage de durée maximale d'activation"},
 {en:"In a Conditional Access policy", fr:"Dans une stratégie d'accès conditionnel"},
 {en:"In the tenant's group expiration policy", fr:"Dans la stratégie d'expiration des groupes du tenant"}],
correct:[0],
explanation:{en:"A is correct: PIM role settings separately control whether permanent eligible and permanent active assignments are allowed, and the maximum duration of each — turning off permanence is what forces periodic renewal.\nB is wrong: activation duration is how long a single activation lasts (hours), not how long eligibility lasts.\nC is wrong: Conditional Access governs sign-in conditions.\nD is wrong: group expiration applies to Microsoft 365 groups.",
fr:"A est correct : les réglages de rôle PIM contrôlent séparément si les attributions éligibles et actives permanentes sont autorisées, ainsi que la durée maximale de chacune — désactiver la permanence est ce qui force un renouvellement périodique.\nB est faux : la durée d'activation correspond à la durée d'une activation unique (en heures), pas à la durée de l'éligibilité.\nC est faux : l'accès conditionnel gouverne les conditions de connexion.\nD est faux : l'expiration des groupes concerne les groupes Microsoft 365."}
},
{
id:"d4-050", domain:4, topic:"PIM notifications",
q:{en:"The security team must be emailed whenever the Global Administrator role is activated, without granting them access to PIM configuration. What do you configure?",
   fr:"L'équipe sécurité doit recevoir un email dès que le rôle Global Administrator est activé, sans lui donner accès à la configuration de PIM. Que configures-tu ?"},
options:[
 {en:"A Conditional Access policy with a notification control", fr:"Une stratégie d'accès conditionnel avec un contrôle de notification"},
 {en:"The role's PIM notification settings, adding the security team's address as an additional recipient for role activation events", fr:"Les réglages de notification PIM du rôle, en ajoutant l'adresse de l'équipe sécurité comme destinataire supplémentaire des événements d'activation"},
 {en:"Nothing — PIM activations cannot be notified", fr:"Rien — les activations PIM ne peuvent pas être notifiées"},
 {en:"Give the security team the Privileged Role Administrator role", fr:"Donner à l'équipe sécurité le rôle Privileged Role Administrator"}],
correct:[1],
explanation:{en:"A is wrong: Conditional Access has no notification control.\nB is correct: each role's settings include notification rules for eligible assignment, activation and approval events, with configurable recipients — no privileged access required. A Log Analytics alert on the audit logs is a complementary approach.\nC is wrong: notifications are built in.\nD is wrong: that grants the ability to change role assignments, a serious over-grant for a notification need.",
fr:"A est faux : l'accès conditionnel n'a pas de contrôle de notification.\nB est correct : les réglages de chaque rôle incluent des règles de notification pour les événements d'attribution éligible, d'activation et d'approbation, avec des destinataires configurables — sans accès privilégié. Une alerte Log Analytics sur les journaux d'audit est une approche complémentaire.\nC est faux : les notifications sont intégrées.\nD est faux : cela accorde la capacité de modifier les attributions de rôles, un privilège excessif pour un besoin de notification."}
},
{
id:"d4-051", domain:4, topic:"PIM alert - assignments outside PIM",
q:{en:"PIM raises the alert \"Roles are being assigned outside of Privileged Identity Management\". Why does this matter?",
   fr:"PIM déclenche l'alerte « Des rôles sont attribués en dehors de Privileged Identity Management ». Pourquoi est-ce important ?"},
options:[
 {en:"It indicates a PIM licensing problem", fr:"Cela indique un problème de licence PIM"},
 {en:"It only means the audit log is incomplete", fr:"Cela signifie seulement que le journal d'audit est incomplet"},
 {en:"Those assignments are permanently active and bypass activation requirements, approvals and time limits — investigate who did it and bring the assignments under PIM", fr:"Ces attributions sont actives en permanence et contournent les exigences d'activation, les approbations et les limites de durée — enquêter sur l'auteur et ramener ces attributions sous PIM"},
 {en:"It is informational and requires no action", fr:"C'est purement informatif et n'exige aucune action"}],
correct:[2],
explanation:{en:"A is wrong: licensing issues surface differently.\nB is wrong: the audit log does record it — that is how PIM knows.\nC is correct: a role assigned directly through the roles blade or Graph is standing privilege that escapes your just-in-time controls, so the alert points to both a governance gap and a possible unauthorized action worth investigating in the audit log.\nD is wrong: standing privileged access is exactly what PIM exists to eliminate.",
fr:"A est faux : les problèmes de licence se manifestent autrement.\nB est faux : le journal d'audit l'enregistre bien — c'est ainsi que PIM le sait.\nC est correct : un rôle attribué directement via le panneau des rôles ou Graph constitue un privilège permanent qui échappe à tes contrôles juste-à-temps, donc l'alerte signale à la fois une faille de gouvernance et une action possiblement non autorisée à investiguer dans le journal d'audit.\nD est faux : l'accès privilégié permanent est précisément ce que PIM vise à éliminer."}
},
{
id:"d4-052", domain:4, topic:"Access package approval stages",
q:{en:"Access to a production access package must be approved first by the requester's manager and then by the application owner, in that order. How do you configure it?",
   fr:"L'accès à un access package de production doit être approuvé d'abord par le manager du demandeur, puis par le propriétaire de l'application, dans cet ordre. Comment le configurer ?"},
options:[
 {en:"Two separate access packages requested one after the other", fr:"Deux access packages distincts demandés l'un après l'autre"},
 {en:"One approval stage with both approvers, where either can approve", fr:"Une seule étape d'approbation avec les deux approbateurs, où l'un ou l'autre peut approuver"},
 {en:"An access review with two reviewers", fr:"Une access review avec deux relecteurs"},
 {en:"A request policy with two approval stages: stage one the manager, stage two the application owner, each with its own timeout and escalation", fr:"Une stratégie de demande avec deux étapes d'approbation : étape un le manager, étape deux le propriétaire de l'application, chacune avec son propre délai et son escalade"}],
correct:[3],
explanation:{en:"A is wrong: two packages create two grants and no ordering guarantee.\nB is wrong: a single stage with multiple approvers means any one of them can decide, losing the required sequence.\nC is wrong: reviews recertify existing access rather than approving a new request.\nD is correct: entitlement management supports multi-stage approval where each stage has its own approvers, duration and escalation, and the request only advances when the earlier stage approves.",
fr:"A est faux : deux packages créent deux octrois et aucune garantie d'ordre.\nB est faux : une étape unique avec plusieurs approbateurs signifie que n'importe lequel décide, ce qui perd la séquence exigée.\nC est faux : les revues recertifient un accès existant au lieu d'approuver une nouvelle demande.\nD est correct : l'entitlement management supporte une approbation multi-étapes où chaque étape a ses approbateurs, sa durée et son escalade, et la demande n'avance que si l'étape précédente approuve."}
},
{
id:"d4-053", domain:4, topic:"Access package questions",
q:{en:"Approvers complain they cannot judge requests because they do not know why access is needed. What do you add to the access package?",
   fr:"Les approbateurs se plaignent de ne pas pouvoir juger les demandes faute de connaître le motif. Qu'ajoutes-tu à l'access package ?"},
options:[
 {en:"Requestor information questions on the request policy, whose answers are shown to the approvers", fr:"Des questions d'informations du demandeur dans la stratégie de demande, dont les réponses sont présentées aux approbateurs"},
 {en:"A separation of duties rule", fr:"Une règle de separation of duties"},
 {en:"A longer approval timeout", fr:"Un délai d'approbation plus long"},
 {en:"A terms of use document", fr:"Un document de terms of use"}],
correct:[0],
explanation:{en:"A is correct: request policies can collect answers to custom questions (free text or multiple choice, localizable), and those answers appear in the approval and in the audit record.\nB is wrong: separation of duties prevents conflicting combinations; it provides no context.\nC is wrong: more time to make an uninformed decision does not improve the decision.\nD is wrong: terms of use collect acceptance, not justification.",
fr:"A est correct : les stratégies de demande peuvent collecter des réponses à des questions personnalisées (texte libre ou choix multiple, localisables), et ces réponses apparaissent dans l'approbation et dans l'enregistrement d'audit.\nB est faux : la separation of duties empêche des combinaisons conflictuelles, elle n'apporte aucun contexte.\nC est faux : plus de temps pour une décision non informée n'améliore pas la décision.\nD est faux : les terms of use recueillent une acceptation, pas une justification."}
},
{
id:"d4-054", domain:4, topic:"Access package expiration",
q:{en:"Contractors must lose access to a project access package automatically after 90 days, but must be able to request an extension before it lapses. What do you configure?",
   fr:"Les prestataires doivent perdre automatiquement l'accès à un access package projet au bout de 90 jours, tout en pouvant demander une prolongation avant l'échéance. Que configures-tu ?"},
options:[
 {en:"Manual removal by the helpdesk", fr:"Un retrait manuel par le helpdesk"},
 {en:"Lifecycle settings on the request policy: expire assignments after 90 days and allow users to extend access, with extension requiring approval", fr:"Les réglages de cycle de vie de la stratégie de demande : expiration des attributions après 90 jours et autorisation de prolonger, la prolongation étant soumise à approbation"},
 {en:"An access review every 90 days with auto-apply", fr:"Une access review tous les 90 jours avec application automatique"},
 {en:"A dynamic group with a date-based rule", fr:"Un groupe dynamique avec une règle basée sur une date"}],
correct:[1],
explanation:{en:"A is wrong: manual removal is exactly what fails in practice.\nB is correct: the lifecycle section of a policy sets the assignment duration and whether users may request an extension, so expiry is automatic and renewal is an explicit, approved decision.\nC is wrong: a review is a good complement but relies on reviewers acting, whereas expiry is deterministic.\nD is wrong: dynamic rules cannot express \"90 days after this individual was granted access\".",
fr:"A est faux : le retrait manuel est précisément ce qui échoue en pratique.\nB est correct : la section cycle de vie d'une stratégie définit la durée de l'attribution et la possibilité pour les utilisateurs de demander une prolongation, donc l'expiration est automatique et le renouvellement une décision explicite et approuvée.\nC est faux : une revue est un bon complément mais dépend de l'action des relecteurs, alors que l'expiration est déterministe.\nD est faux : une règle dynamique ne sait pas exprimer « 90 jours après l'octroi à cette personne »."}
},
{
id:"d4-055", domain:4, topic:"Multiple access package policies",
q:{en:"One access package must be requestable by employees with manager approval, and by partner users with sponsor approval and a shorter expiry. How do you model this?",
   fr:"Un même access package doit être demandable par les salariés avec approbation du manager, et par des partenaires avec approbation du sponsor et une expiration plus courte. Comment le modéliser ?"},
options:[
 {en:"Two identical access packages in two catalogs", fr:"Deux access packages identiques dans deux catalogues"},
 {en:"One policy with both approver types listed", fr:"Une stratégie unique listant les deux types d'approbateurs"},
 {en:"Two request policies on the same access package, each targeting a different audience with its own approval and lifecycle settings", fr:"Deux stratégies de demande sur le même access package, chacune ciblant un public différent avec ses propres réglages d'approbation et de cycle de vie"},
 {en:"A Conditional Access policy distinguishing the two populations", fr:"Une stratégie d'accès conditionnel distinguant les deux populations"}],
correct:[2],
explanation:{en:"A is wrong: duplicating packages duplicates maintenance and lets the two drift apart.\nB is wrong: a single policy applies one approval flow and one lifetime to everyone it covers.\nC is correct: an access package can carry several policies, each defining who can request, the approval flow and the assignment lifecycle — one bundle of resources, different rules per audience.\nD is wrong: Conditional Access governs sign-in, not entitlement requests.",
fr:"A est faux : dupliquer les packages duplique la maintenance et les laisse diverger.\nB est faux : une stratégie unique applique un seul flux d'approbation et une seule durée à tous ceux qu'elle couvre.\nC est correct : un access package peut porter plusieurs stratégies, chacune définissant qui peut demander, le flux d'approbation et le cycle de vie de l'attribution — un seul lot de ressources, des règles différentes par public.\nD est faux : l'accès conditionnel gouverne la connexion, pas les demandes de droits."}
},
{
id:"d4-056", domain:4, topic:"Hidden access packages",
q:{en:"An access package must be requestable only by people who receive a direct link, and must not appear in the My Access catalogue browsing experience. What do you set?",
   fr:"Un access package ne doit être demandable que par les personnes recevant un lien direct, et ne doit pas apparaître dans la navigation du catalogue de Mon accès. Que règles-tu ?"},
options:[
 {en:"Remove all policies from it", fr:"En retirer toutes les stratégies"},
 {en:"Set assignment required on its resources", fr:"Activer l'attribution requise sur ses ressources"},
 {en:"Delete it from the catalog", fr:"Le supprimer du catalogue"},
 {en:"Mark the access package as hidden, then distribute its direct request link to the intended users", fr:"Marquer l'access package comme masqué, puis distribuer son lien de demande direct aux utilisateurs visés"}],
correct:[3],
explanation:{en:"A is wrong: with no policy nobody can request it at all.\nB is wrong: assignment required is an application setting unrelated to catalogue visibility.\nC is wrong: deleting removes the package entirely.\nD is correct: hidden packages are not listed for browsing but remain requestable through their direct link by users who are in scope of a policy — useful for targeted or sensitive access.",
fr:"A est faux : sans stratégie, plus personne ne peut le demander.\nB est faux : l'attribution requise est un réglage d'application sans lien avec la visibilité du catalogue.\nC est faux : supprimer retire entièrement le package.\nD est correct : les packages masqués ne sont pas listés à la navigation mais restent demandables via leur lien direct par les utilisateurs couverts par une stratégie — utile pour un accès ciblé ou sensible."}
},
{
id:"d4-057", domain:4, topic:"Access package custom extensions",
q:{en:"When access to a package is granted, a ticket must be created in ServiceNow automatically. What do you configure?",
   fr:"Quand l'accès à un package est accordé, un ticket doit être créé automatiquement dans ServiceNow. Que configures-tu ?"},
options:[
 {en:"A custom extension on the catalog that calls an Azure Logic App, triggered on the assignment-granted stage of the access package", fr:"Une extension personnalisée sur le catalogue appelant une Azure Logic App, déclenchée à l'étape d'octroi de l'attribution de l'access package"},
 {en:"A Conditional Access session control", fr:"Un contrôle de session d'accès conditionnel"},
 {en:"A lifecycle workflow leaver task", fr:"Une tâche leaver de lifecycle workflow"},
 {en:"An access review with auto-apply", fr:"Une access review avec application automatique"}],
correct:[0],
explanation:{en:"A is correct: entitlement management supports custom extensions that invoke Logic Apps at defined stages — request created, approved, granted, expired — which is the supported integration point with external systems.\nB is wrong: session controls act during authentication.\nC is wrong: lifecycle workflows are keyed to employment events, not access package stages.\nD is wrong: reviews recertify access.",
fr:"A est correct : l'entitlement management supporte des extensions personnalisées invoquant des Logic Apps à des étapes définies — demande créée, approuvée, octroyée, expirée — c'est le point d'intégration supporté avec les systèmes externes.\nB est faux : les contrôles de session agissent pendant l'authentification.\nC est faux : les lifecycle workflows sont liés aux événements d'emploi, pas aux étapes d'un access package.\nD est faux : les revues recertifient un accès."}
},
{
id:"d4-058", domain:4, topic:"Direct assignment to access packages",
q:{en:"During an incident, ten users must receive an access package immediately without going through the request and approval flow. Who can do this and how?",
   fr:"Pendant un incident, dix utilisateurs doivent recevoir un access package immédiatement sans passer par le flux de demande et d'approbation. Qui peut le faire et comment ?"},
options:[
 {en:"Nobody — access packages can only be requested by users", fr:"Personne — les access packages ne peuvent être que demandés par les utilisateurs"},
 {en:"An access package manager or assignment manager can create direct assignments, which are still recorded and still subject to the package's expiry settings", fr:"Un access package manager ou assignment manager peut créer des attributions directes, qui restent enregistrées et soumises aux réglages d'expiration du package"},
 {en:"Only a Global Administrator, by editing each underlying group manually", fr:"Uniquement un Global Administrator, en modifiant manuellement chaque groupe sous-jacent"},
 {en:"Any user can self-assign in an emergency", fr:"N'importe quel utilisateur peut s'auto-attribuer en urgence"}],
correct:[1],
explanation:{en:"A is wrong: direct assignment exists precisely for cases like this.\nB is correct: direct assignment is a supported delegated operation, and it keeps the governance benefits — the assignment is auditable, appears in reports and expires like any other.\nC is wrong: editing the underlying groups bypasses entitlement management and loses the audit and expiry.\nD is wrong: self-assignment without a policy would defeat the entire model.",
fr:"A est faux : l'attribution directe existe précisément pour ces cas.\nB est correct : l'attribution directe est une opération déléguée supportée, et elle conserve les bénéfices de gouvernance — l'attribution est auditable, apparaît dans les rapports et expire comme les autres.\nC est faux : modifier les groupes sous-jacents contourne l'entitlement management et fait perdre l'audit et l'expiration.\nD est faux : une auto-attribution sans stratégie ruinerait tout le modèle."}
},
{
id:"d4-059", domain:4, topic:"Catalog resource ownership",
q:{en:"A catalog owner tries to add a SharePoint site to their catalog but the site does not appear in the list. What is the most likely reason?",
   fr:"Un catalog owner tente d'ajouter un site SharePoint à son catalogue mais le site n'apparaît pas dans la liste. Quelle est la raison la plus probable ?"},
options:[
 {en:"The catalog must be enabled for external users first", fr:"Le catalogue doit d'abord être activé pour les utilisateurs externes"},
 {en:"Entitlement management does not support SharePoint", fr:"L'entitlement management ne supporte pas SharePoint"},
 {en:"They must be an owner of the resource (or otherwise authorized on it) to add it to a catalog — you can only delegate access to resources you control", fr:"Il doit être propriétaire de la ressource (ou autorisé dessus) pour l'ajouter à un catalogue — on ne délègue l'accès qu'aux ressources qu'on contrôle"},
 {en:"SharePoint sites cannot be added to catalogs", fr:"Les sites SharePoint ne peuvent pas être ajoutés à des catalogues"}],
correct:[2],
explanation:{en:"A is wrong: the external-user setting affects who may request, not which resources can be added.\nB is wrong: SharePoint is explicitly supported.\nC is correct: adding a resource to a catalog requires appropriate rights over that resource, which prevents a catalog owner from handing out access to things that are not theirs.\nD is wrong: SharePoint Online sites are one of the three supported resource types, alongside groups/Teams and applications.",
fr:"A est faux : le réglage relatif aux utilisateurs externes concerne qui peut demander, pas les ressources ajoutables.\nB est faux : SharePoint est explicitement supporté.\nC est correct : ajouter une ressource à un catalogue exige des droits appropriés sur cette ressource, ce qui empêche un catalog owner de distribuer l'accès à des ressources qui ne sont pas les siennes.\nD est faux : les sites SharePoint Online sont l'un des trois types de ressources supportés, avec les groupes/Teams et les applications."}
},
{
id:"d4-060", domain:4, topic:"Access review of access packages",
q:{en:"You must periodically recertify who still holds assignments to a sensitive access package, with the package's own approvers deciding. What do you configure?",
   fr:"Tu dois recertifier périodiquement qui détient encore des attributions à un access package sensible, la décision revenant aux approbateurs du package. Que configures-tu ?"},
options:[
 {en:"Set the package to expire and let users re-request", fr:"Faire expirer le package et laisser les utilisateurs redemander"},
 {en:"A separate access review of each underlying group", fr:"Une access review distincte de chaque groupe sous-jacent"},
 {en:"A PIM review of the package", fr:"Une revue PIM du package"},
 {en:"Enable access reviews on the access package's policy, choosing the reviewers and recurrence", fr:"Activer les access reviews sur la stratégie de l'access package, en choisissant les relecteurs et la récurrence"}],
correct:[3],
explanation:{en:"A is wrong: expiry plus re-request is a valid complement but it is not a recertification decision by an accountable reviewer.\nB is wrong: reviewing the groups separately loses the package context and may conflict with entitlement-managed membership.\nC is wrong: PIM reviews cover role assignments, not access packages.\nD is correct: entitlement management policies can enable recurring reviews of the assignments granted by that package, reviewed by the package's approvers, the assignees themselves or chosen reviewers.",
fr:"A est faux : expiration plus nouvelle demande est un complément valable mais ce n'est pas une décision de recertification par un relecteur responsable.\nB est faux : revoir les groupes séparément perd le contexte du package et peut entrer en conflit avec l'appartenance gérée par l'entitlement management.\nC est faux : les revues PIM couvrent les attributions de rôles, pas les access packages.\nD est correct : les stratégies d'entitlement management peuvent activer des revues récurrentes des attributions accordées par ce package, relues par les approbateurs du package, les bénéficiaires eux-mêmes ou des relecteurs choisis."}
},
{
id:"d4-061", domain:4, topic:"Access review scope selection",
q:{en:"You must recertify membership of all 300 Microsoft 365 groups in one exercise rather than creating 300 separate reviews. What do you do?",
   fr:"Tu dois recertifier l'appartenance des 300 groupes Microsoft 365 en un seul exercice plutôt que de créer 300 revues distinctes. Que fais-tu ?"},
options:[
 {en:"Create one access review with the scope set to all Microsoft 365 groups, reviewed by group owners with a fallback reviewer", fr:"Créer une access review dont la portée est tous les groupes Microsoft 365, relue par les propriétaires de groupes avec un relecteur de repli"},
 {en:"Create 300 reviews with a script", fr:"Créer 300 revues avec un script"},
 {en:"Review the tenant's users instead", fr:"Relire plutôt les utilisateurs du tenant"},
 {en:"Use a PIM review", fr:"Utiliser une revue PIM"}],
correct:[0],
explanation:{en:"A is correct: access reviews support a multi-group scope covering all Microsoft 365 groups (with the option to exclude some), automatically delegating each group to its own owners.\nB is wrong: scripting 300 reviews recreates by hand what the feature does natively, and makes reporting harder.\nC is wrong: reviewing users does not recertify group membership.\nD is wrong: PIM reviews target privileged role assignments.",
fr:"A est correct : les access reviews supportent une portée multi-groupes couvrant tous les groupes Microsoft 365 (avec possibilité d'en exclure), en déléguant automatiquement chaque groupe à ses propres propriétaires.\nB est faux : scripter 300 revues refait à la main ce que la fonctionnalité offre nativement, et complique le reporting.\nC est faux : relire les utilisateurs ne recertifie pas l'appartenance aux groupes.\nD est faux : les revues PIM ciblent les attributions de rôles privilégiés."}
},
{
id:"d4-062", domain:4, topic:"Access review apply results",
q:{en:"An access review completed with decisions recorded, but the denied users still have access three days later. What is the most likely explanation?",
   fr:"Une access review s'est terminée avec des décisions enregistrées, mais les utilisateurs refusés ont toujours accès trois jours plus tard. Quelle est l'explication la plus probable ?"},
options:[
 {en:"The decisions take 30 days to propagate", fr:"Les décisions mettent 30 jours à se propager"},
 {en:"Auto-apply was not enabled, so the results must be applied manually from the review's results page", fr:"L'application automatique n'était pas activée, il faut donc appliquer les résultats manuellement depuis la page de résultats de la revue"},
 {en:"The reviewers lacked permissions to deny", fr:"Les relecteurs n'avaient pas les permissions pour refuser"},
 {en:"Access reviews never remove access", fr:"Les access reviews ne retirent jamais l'accès"}],
correct:[1],
explanation:{en:"A is wrong: application takes minutes to a few hours, not 30 days.\nB is correct: applying results is a separate step unless auto-apply is configured, and forgetting it is the classic reason a completed review changes nothing.\nC is wrong: reviewers designated by the review can always record decisions; permissions are not the blocker.\nD is wrong: reviews do remove access when results are applied.",
fr:"A est faux : l'application prend quelques minutes à quelques heures, pas 30 jours.\nB est correct : appliquer les résultats est une étape distincte sauf si l'application automatique est configurée, et l'oublier est la raison classique pour laquelle une revue terminée ne change rien.\nC est faux : les relecteurs désignés par la revue peuvent toujours enregistrer des décisions, les permissions ne sont pas le blocage.\nD est faux : les revues retirent bien l'accès quand les résultats sont appliqués."}
},
{
id:"d4-063", domain:4, topic:"Access review of Azure resource roles",
q:{en:"You must recertify who holds Owner on 20 Azure subscriptions, with results applied automatically. What do you create?",
   fr:"Tu dois recertifier qui détient Owner sur 20 abonnements Azure, avec application automatique des résultats. Que crées-tu ?"},
options:[
 {en:"An access package review", fr:"Une revue d'access package"},
 {en:"An access review of Entra directory roles", fr:"Une access review des rôles d'annuaire Entra"},
 {en:"An access review of Azure resource roles in PIM, scoped to those subscriptions", fr:"Une access review des rôles de ressources Azure dans PIM, ciblée sur ces abonnements"},
 {en:"An access review of a group containing the owners", fr:"Une access review d'un groupe contenant les propriétaires"}],
correct:[2],
explanation:{en:"A is wrong: access packages review their own assignments, not pre-existing RBAC assignments.\nB is wrong: directory roles are a different permission system and do not include Azure Owner.\nC is correct: PIM provides access reviews for Azure resource roles, covering eligible and active assignments at the scopes you select, with recurrence and auto-apply.\nD is wrong: RBAC owners are often assigned directly, so reviewing one group would miss most of them.",
fr:"A est faux : les access packages revoient leurs propres attributions, pas des attributions RBAC préexistantes.\nB est faux : les rôles d'annuaire relèvent d'un autre système de permissions et n'incluent pas Owner Azure.\nC est correct : PIM fournit des access reviews pour les rôles de ressources Azure, couvrant les attributions éligibles et actives aux portées choisies, avec récurrence et application automatique.\nD est faux : les owners RBAC sont souvent attribués directement, revoir un seul groupe en manquerait la plupart."}
},
{
id:"d4-064", domain:4, topic:"Access review reminders",
q:{en:"Reviewers routinely miss the deadline. Which built-in mechanisms help, without writing custom automation? (Select TWO)",
   fr:"Les relecteurs manquent régulièrement l'échéance. Quels mécanismes intégrés aident, sans automatisation sur mesure ? (Choisis DEUX réponses)"},
options:[
 {en:"Assign all reviews to a Global Administrator", fr:"Assigner toutes les revues à un Global Administrator"},
 {en:"Enable reviewer reminders during the review period", fr:"Activer les rappels aux relecteurs pendant la période de revue"},
 {en:"Configure the \"if reviewers don't respond\" action so silence produces a safe outcome", fr:"Configurer l'action « si les relecteurs ne répondent pas » pour que le silence produise un résultat sûr"},
 {en:"Shorten the review to 24 hours", fr:"Raccourcir la revue à 24 heures"}],
correct:[1,2],
explanation:{en:"A is wrong: centralising on one admin removes the business context and guarantees rubber-stamping.\nB and C are correct: reminders are a built-in setting, and the non-response behaviour (no change, remove access, approve, or take recommendations) ensures the review still produces a deterministic result.\nD is wrong: a shorter window increases the miss rate.",
fr:"A est faux : centraliser sur un seul admin supprime le contexte métier et garantit une validation machinale.\nB et C sont corrects : les rappels sont un réglage intégré, et le comportement en cas de non-réponse (aucun changement, retirer l'accès, approuver, ou suivre les recommandations) garantit que la revue produit tout de même un résultat déterministe.\nD est faux : une fenêtre plus courte augmente le taux d'oubli."}
},
{
id:"d4-065", domain:4, topic:"Lifecycle workflows - joiner",
q:{en:"On the day before an employee's start date, they must receive a Temporary Access Pass by email to their manager and be added to their department groups. What do you build?",
   fr:"La veille de la date d'arrivée d'un salarié, il doit recevoir un Temporary Access Pass par email à son manager et être ajouté aux groupes de son département. Que construis-tu ?"},
options:[
 {en:"A joiner lifecycle workflow triggered relative to employeeHireDate, with the Generate TAP and send email task and a Add user to groups task", fr:"Un lifecycle workflow de type joiner déclenché par rapport à employeeHireDate, avec la tâche Générer un TAP et envoyer un email et une tâche Ajouter l'utilisateur à des groupes"},
 {en:"An access review scheduled for the start date", fr:"Une access review planifiée à la date d'arrivée"},
 {en:"A Conditional Access policy for new users", fr:"Une stratégie d'accès conditionnel pour les nouveaux utilisateurs"},
 {en:"A dynamic group and a manual email", fr:"Un groupe dynamique et un email manuel"}],
correct:[0],
explanation:{en:"A is correct: lifecycle workflows trigger a defined number of days before or after employeeHireDate and run built-in tasks in order, including generating a Temporary Access Pass and sending it to the manager — the standard passwordless onboarding pattern.\nB is wrong: reviews recertify existing access.\nC is wrong: Conditional Access decides access conditions, it provisions nothing.\nD is wrong: a dynamic group handles memberships but nothing else, and manual email is not automation.",
fr:"A est correct : les lifecycle workflows se déclenchent un nombre défini de jours avant ou après employeeHireDate et exécutent des tâches intégrées dans l'ordre, dont la génération d'un Temporary Access Pass et son envoi au manager — le schéma standard d'onboarding sans mot de passe.\nB est faux : les revues recertifient un accès existant.\nC est faux : l'accès conditionnel décide des conditions d'accès, il ne provisionne rien.\nD est faux : un groupe dynamique gère les appartenances mais rien d'autre, et un email manuel n'est pas de l'automatisation."}
},
{
id:"d4-066", domain:4, topic:"Lifecycle workflows - mover",
q:{en:"When an employee changes department, their old department groups must be removed and the new ones added, automatically. Which workflow category applies?",
   fr:"Quand un salarié change de département, ses anciens groupes de département doivent être retirés et les nouveaux ajoutés, automatiquement. Quelle catégorie de workflow s'applique ?"},
options:[
 {en:"Nothing exists for department changes", fr:"Rien n'existe pour les changements de département"},
 {en:"A mover workflow, triggered on an attribute change, combined with attribute-driven dynamic groups or access package auto-assignment", fr:"Un workflow de type mover, déclenché par un changement d'attribut, combiné à des groupes dynamiques pilotés par attribut ou à l'auto-assignation d'access packages"},
 {en:"A leaver workflow", fr:"Un workflow de type leaver"},
 {en:"A joiner workflow re-run manually", fr:"Un workflow joiner relancé manuellement"}],
correct:[1],
explanation:{en:"A is wrong: the mover category exists precisely for this.\nB is correct: mover is the third lifecycle category and handles the change-of-role case; in practice it is combined with attribute-driven membership so old access is dropped and new access granted as the source attribute changes.\nC is wrong: leaver workflows handle departures.\nD is wrong: re-running the joiner would add without removing, and manual triggering is not automation.",
fr:"A est faux : la catégorie mover existe précisément pour cela.\nB est correct : mover est la troisième catégorie de cycle de vie et traite le cas du changement de poste ; en pratique on la combine à une appartenance pilotée par attribut pour que l'ancien accès tombe et le nouveau soit accordé au fil du changement de l'attribut source.\nC est faux : les workflows leaver traitent les départs.\nD est faux : relancer le joiner ajouterait sans retirer, et un déclenchement manuel n'est pas de l'automatisation."}
},
{
id:"d4-067", domain:4, topic:"Lifecycle workflow on-demand",
q:{en:"You built a leaver workflow but must run it immediately for one employee who resigned today, outside the scheduled trigger. What do you do?",
   fr:"Tu as créé un workflow leaver mais dois l'exécuter immédiatement pour un salarié qui a démissionné aujourd'hui, en dehors du déclencheur planifié. Que fais-tu ?"},
options:[
 {en:"Change the employeeLeaveDateTime attribute to today and wait for the schedule", fr:"Changer l'attribut employeeLeaveDateTime à aujourd'hui et attendre la planification"},
 {en:"Duplicate the workflow with a different trigger", fr:"Dupliquer le workflow avec un autre déclencheur"},
 {en:"Run the workflow on demand for that specific user, then check the run history for each task's result", fr:"Exécuter le workflow à la demande pour cet utilisateur précis, puis vérifier l'historique d'exécution pour le résultat de chaque tâche"},
 {en:"Disable the account manually and skip the workflow", fr:"Désactiver le compte manuellement et ignorer le workflow"}],
correct:[2],
explanation:{en:"A is wrong: it would eventually work but delays containment and rewrites HR data to drive a schedule.\nB is wrong: duplicating creates maintenance debt for a one-off.\nC is correct: workflows support on-demand execution against selected users, and the run history shows per-user, per-task success or failure so you can prove the offboarding completed.\nD is wrong: manual disabling skips the other tasks (licences, groups, manager notification) and leaves no consistent record.",
fr:"A est faux : cela finirait par fonctionner mais retarde le confinement et réécrit des données RH pour piloter une planification.\nB est faux : dupliquer crée une dette de maintenance pour un cas unique.\nC est correct : les workflows supportent une exécution à la demande sur des utilisateurs sélectionnés, et l'historique d'exécution montre le succès ou l'échec par utilisateur et par tâche, ce qui permet de prouver que l'offboarding a bien eu lieu.\nD est faux : la désactivation manuelle saute les autres tâches (licences, groupes, notification du manager) et ne laisse aucune trace cohérente."}
},
{
id:"d4-068", domain:4, topic:"Lifecycle workflow scope",
q:{en:"Your leaver workflow must apply only to permanent employees in France, not to contractors or other countries. How do you constrain it?",
   fr:"Ton workflow leaver ne doit s'appliquer qu'aux salariés permanents en France, pas aux prestataires ni aux autres pays. Comment le contraindre ?"},
options:[
 {en:"Put the users in an administrative unit", fr:"Placer les utilisateurs dans une administrative unit"},
 {en:"Rely on the trigger attribute alone", fr:"Se fier au seul attribut de déclenchement"},
 {en:"Create one workflow per user", fr:"Créer un workflow par utilisateur"},
 {en:"Define the workflow's execution conditions with a scope rule on user attributes, for example country and employeeType", fr:"Définir les conditions d'exécution du workflow avec une règle de portée sur des attributs utilisateur, par exemple country et employeeType"}],
correct:[3],
explanation:{en:"A is wrong: administrative units delegate administration; they are not the workflow scoping mechanism.\nB is wrong: the trigger says WHEN, the scope says WHO — without a scope every user with that attribute set would be processed.\nC is wrong: per-user workflows are unmanageable.\nD is correct: a workflow's execution conditions combine a time-based trigger with a scope expression over user attributes, so only matching users are processed.",
fr:"A est faux : les administrative units délèguent l'administration, ce n'est pas le mécanisme de portée des workflows.\nB est faux : le déclencheur dit QUAND, la portée dit QUI — sans portée, tout utilisateur ayant cet attribut serait traité.\nC est faux : des workflows par utilisateur seraient ingérables.\nD est correct : les conditions d'exécution d'un workflow combinent un déclencheur temporel et une expression de portée sur des attributs utilisateur, donc seuls les utilisateurs correspondants sont traités."}
},
{
id:"d4-069", domain:4, topic:"Lifecycle workflow history",
q:{en:"A compliance officer asks for evidence that every leaver in the last quarter had their account disabled and licences removed. Where do you get it?",
   fr:"Un responsable conformité demande la preuve que chaque partant du dernier trimestre a bien eu son compte désactivé et ses licences retirées. Où l'obtiens-tu ?"},
options:[
 {en:"The lifecycle workflow run history and task reports, which show per-user and per-task outcomes and can be exported", fr:"L'historique d'exécution et les rapports de tâches des lifecycle workflows, qui montrent les résultats par utilisateur et par tâche et sont exportables"},
 {en:"A screenshot of the workflow configuration", fr:"Une capture d'écran de la configuration du workflow"},
 {en:"The sign-in logs", fr:"Les journaux de connexion"},
 {en:"The provisioning logs", fr:"Les journaux de provisioning"}],
correct:[0],
explanation:{en:"A is correct: workflow history records each run, each user processed and each task's success or failure — the direct evidence of what actually happened, complemented by the Entra audit logs.\nB is wrong: configuration shows intent, not execution.\nC is wrong: sign-in logs would only show absence of sign-ins, which proves nothing about the tasks.\nD is wrong: provisioning logs cover application provisioning.",
fr:"A est correct : l'historique des workflows enregistre chaque exécution, chaque utilisateur traité et le succès ou l'échec de chaque tâche — la preuve directe de ce qui s'est réellement produit, complétée par les journaux d'audit Entra.\nB est faux : la configuration montre l'intention, pas l'exécution.\nC est faux : les journaux de connexion ne montreraient qu'une absence de connexions, ce qui ne prouve rien sur les tâches.\nD est faux : les journaux de provisioning couvrent le provisioning applicatif."}
},
{
id:"d4-070", domain:4, topic:"Entra recommendations",
q:{en:"Where does Entra ID surface prioritized, tenant-specific improvement advice such as \"convert per-user MFA to Conditional Access\" or \"remove unused privileged roles\"?",
   fr:"Où Entra ID présente-t-il des conseils d'amélioration priorisés et propres au tenant, comme « convertir le MFA par utilisateur vers l'accès conditionnel » ou « retirer les rôles privilégiés inutilisés » ?"},
options:[
 {en:"The audit logs", fr:"Les journaux d'audit"},
 {en:"Entra recommendations, alongside Identity Secure Score", fr:"Les recommandations Entra, aux côtés de l'Identity Secure Score"},
 {en:"The provisioning logs", fr:"Les journaux de provisioning"},
 {en:"Conditional Access templates", fr:"Les modèles d'accès conditionnel"}],
correct:[1],
explanation:{en:"A is wrong: audit logs are a record of changes.\nB is correct: recommendations analyse your tenant's actual configuration and usage and propose concrete actions with impact and status tracking, complementing the Identity Secure Score.\nC is wrong: provisioning logs relate to application provisioning.\nD is wrong: templates are starting points for policies, not an analysis of your tenant.",
fr:"A est faux : les journaux d'audit sont un enregistrement des changements.\nB est correct : les recommandations analysent la configuration et l'usage réels de ton tenant et proposent des actions concrètes avec impact et suivi de statut, en complément de l'Identity Secure Score.\nC est faux : les journaux de provisioning concernent le provisioning applicatif.\nD est faux : les modèles sont des points de départ pour des stratégies, pas une analyse de ton tenant."}
},
{
id:"d4-071", domain:4, topic:"Usage and insights reports",
q:{en:"Management asks which applications are most used and how many users completed MFA registration. Which reporting area answers both?",
   fr:"La direction demande quelles applications sont les plus utilisées et combien d'utilisateurs ont terminé leur inscription MFA. Quelle zone de reporting répond aux deux ?"},
options:[
 {en:"The risky users report", fr:"Le rapport des utilisateurs à risque"},
 {en:"The provisioning logs", fr:"Les journaux de provisioning"},
 {en:"Usage and insights, including the application sign-in report and the authentication methods activity report", fr:"Usage & insights, incluant le rapport de connexions par application et le rapport d'activité des méthodes d'authentification"},
 {en:"The audit logs", fr:"Les journaux d'audit"}],
correct:[2],
explanation:{en:"A is wrong: risky users covers ID Protection detections.\nB is wrong: provisioning logs cover object provisioning.\nC is correct: usage and insights aggregates sign-in activity by application, and the authentication methods activity report shows registration and usage by method — both without writing queries.\nD is wrong: audit logs record configuration changes.",
fr:"A est faux : les utilisateurs à risque couvrent les détections d'ID Protection.\nB est faux : les journaux de provisioning couvrent le provisioning d'objets.\nC est correct : Usage & insights agrège l'activité de connexion par application, et le rapport d'activité des méthodes d'authentification montre l'inscription et l'usage par méthode — le tout sans écrire de requête.\nD est faux : les journaux d'audit enregistrent les changements de configuration."}
},
{
id:"d4-072", domain:4, topic:"Microsoft Graph activity logs",
q:{en:"Your SOC must see which application or user made each Microsoft Graph API call against your tenant, including read operations. What do you enable?",
   fr:"Ton SOC doit voir quelle application ou quel utilisateur a effectué chaque appel d'API Microsoft Graph sur ton tenant, y compris les lectures. Qu'actives-tu ?"},
options:[
 {en:"Provisioning logs", fr:"Les journaux de provisioning"},
 {en:"The audit logs, which already include every read operation", fr:"Les journaux d'audit, qui incluent déjà chaque opération de lecture"},
 {en:"The sign-in logs", fr:"Les journaux de connexion"},
 {en:"Microsoft Graph activity logs, exported through diagnostic settings to Log Analytics or a SIEM", fr:"Les Microsoft Graph activity logs, exportés via les diagnostic settings vers Log Analytics ou un SIEM"}],
correct:[3],
explanation:{en:"A is wrong: provisioning logs are about SCIM object flows.\nB is wrong: audit logs record directory changes, not read calls.\nC is wrong: sign-in logs show authentications, not the subsequent API calls.\nD is correct: Graph activity logs record the API requests made against your tenant — including reads, which the audit log does not cover — and are designed for export to Log Analytics or a SIEM for hunting.",
fr:"A est faux : les journaux de provisioning concernent les flux d'objets SCIM.\nB est faux : les journaux d'audit enregistrent les changements d'annuaire, pas les appels en lecture.\nC est faux : les journaux de connexion montrent les authentifications, pas les appels d'API qui suivent.\nD est correct : les Graph activity logs enregistrent les requêtes d'API effectuées sur ton tenant — y compris les lectures, que le journal d'audit ne couvre pas — et sont conçus pour être exportés vers Log Analytics ou un SIEM à des fins de threat hunting."}
},
{
id:"d4-073", domain:4, topic:"KQL - joining tables",
q:{en:"You must list users who signed in successfully AND had a directory role assigned to them on the same day. Which KQL approach is appropriate?",
   fr:"Tu dois lister les utilisateurs qui se sont connectés avec succès ET à qui un rôle d'annuaire a été attribué le même jour. Quelle approche KQL convient ?"},
options:[
 {en:"Join SigninLogs and AuditLogs on the user identifier, filtering AuditLogs on the role assignment activity", fr:"Joindre SigninLogs et AuditLogs sur l'identifiant utilisateur, en filtrant AuditLogs sur l'activité d'attribution de rôle"},
 {en:"Query SigninLogs only and filter on a role column", fr:"Interroger uniquement SigninLogs et filtrer sur une colonne de rôle"},
 {en:"Query AuditLogs only and filter on ResultType", fr:"Interroger uniquement AuditLogs et filtrer sur ResultType"},
 {en:"Use a union of the two tables without any key", fr:"Faire une union des deux tables sans clé"}],
correct:[0],
explanation:{en:"A is correct: the two events live in different tables, so correlating them requires a join on a shared identifier (such as the user principal name or object ID) with the appropriate time filters.\nB is wrong: SigninLogs has no role assignment column.\nC is wrong: ResultType belongs to sign-ins, and AuditLogs alone cannot show sign-in success.\nD is wrong: a union stacks rows without correlating them, so you could not tell it was the same user.",
fr:"A est correct : les deux événements vivent dans des tables différentes, les corréler exige donc une jointure sur un identifiant commun (comme l'UPN ou l'ID d'objet) avec les filtres temporels adéquats.\nB est faux : SigninLogs n'a pas de colonne d'attribution de rôle.\nC est faux : ResultType appartient aux connexions, et AuditLogs seul ne peut pas montrer un succès de connexion.\nD est faux : une union empile les lignes sans les corréler, on ne saurait pas qu'il s'agit du même utilisateur."}
},
{
id:"d4-074", domain:4, topic:"KQL - Conditional Access analysis",
q:{en:"Which KQL fragment counts sign-ins by their Conditional Access outcome over the last 7 days?",
   fr:"Quel fragment KQL compte les connexions par résultat d'accès conditionnel sur les 7 derniers jours ?"},
options:[
 {en:"SigninLogs | project ConditionalAccessStatus | count", fr:"SigninLogs | project ConditionalAccessStatus | count"},
 {en:"SigninLogs | where TimeGenerated > ago(7d) | summarize count() by ConditionalAccessStatus", fr:"SigninLogs | where TimeGenerated > ago(7d) | summarize count() by ConditionalAccessStatus"},
 {en:"SigninLogs | where ConditionalAccessStatus == \"success\" | distinct UserPrincipalName", fr:"SigninLogs | where ConditionalAccessStatus == « success » | distinct UserPrincipalName"},
 {en:"AuditLogs | where TimeGenerated > ago(7d) | summarize count() by ConditionalAccessStatus", fr:"AuditLogs | where TimeGenerated > ago(7d) | summarize count() by ConditionalAccessStatus"}],
correct:[1],
explanation:{en:"A is wrong: this counts rows overall with no grouping and no time filter.\nB is correct: ConditionalAccessStatus lives on sign-in records (success, failure, notApplied), and summarize count() by groups them over the chosen window.\nC is wrong: this lists distinct users for one outcome, which answers a different question.\nD is wrong: AuditLogs has no such column.",
fr:"A est faux : cela compte les lignes globalement, sans regroupement ni filtre temporel.\nB est correct : ConditionalAccessStatus figure sur les enregistrements de connexion (success, failure, notApplied), et summarize count() by les regroupe sur la fenêtre choisie.\nC est faux : cela liste les utilisateurs distincts pour un seul résultat, ce qui répond à une autre question.\nD est faux : AuditLogs n'a pas cette colonne."}
},
{
id:"d4-075", domain:4, topic:"Sentinel integration",
q:{en:"Your organization wants Entra ID sign-in and audit data inside Microsoft Sentinel with built-in detection rules and hunting queries. What is the correct setup?",
   fr:"Ton organisation veut les données de connexion et d'audit Entra ID dans Microsoft Sentinel, avec des règles de détection et des requêtes de chasse intégrées. Quelle est la configuration correcte ?"},
options:[
 {en:"Use the audit log search in the Entra portal", fr:"Utiliser la recherche dans les journaux d'audit du portail Entra"},
 {en:"Export logs to a storage account and upload them manually", fr:"Exporter les journaux vers un compte de stockage et les téléverser manuellement"},
 {en:"Enable the Microsoft Entra ID data connector in Sentinel, which configures ingestion into the Log Analytics workspace Sentinel runs on", fr:"Activer le connecteur de données Microsoft Entra ID dans Sentinel, qui configure l'ingestion dans l'espace de travail Log Analytics sur lequel Sentinel s'appuie"},
 {en:"Increase the Entra ID native log retention", fr:"Augmenter la rétention native des journaux Entra ID"}],
correct:[2],
explanation:{en:"A is wrong: portal search cannot correlate with other sources or run scheduled detections.\nB is wrong: manual uploads are not a supported ingestion path for continuous detection.\nC is correct: the data connector wires Entra ID log categories into Sentinel's workspace and unlocks the accompanying analytics rules, workbooks and hunting queries.\nD is wrong: native retention is fixed and unrelated to Sentinel.",
fr:"A est faux : la recherche dans le portail ne peut ni corréler avec d'autres sources ni exécuter des détections planifiées.\nB est faux : les téléversements manuels ne sont pas un chemin d'ingestion supporté pour de la détection continue.\nC est correct : le connecteur de données relie les catégories de journaux Entra ID à l'espace de travail de Sentinel et débloque les règles d'analyse, workbooks et requêtes de chasse associés.\nD est faux : la rétention native est fixe et sans rapport avec Sentinel."}
},
{
id:"d4-076", domain:4, topic:"Identity Secure Score",
q:{en:"Which statement about the Identity Secure Score is correct?",
   fr:"Quelle affirmation sur l'Identity Secure Score est correcte ?"},
options:[
 {en:"A score of 100% means the tenant cannot be compromised", fr:"Un score de 100 % signifie que le tenant ne peut pas être compromis"},
 {en:"It only measures MFA coverage", fr:"Il ne mesure que la couverture MFA"},
 {en:"It automatically applies the recommended settings", fr:"Il applique automatiquement les réglages recommandés"},
 {en:"It scores your tenant against Microsoft's identity best practices, shows improvement actions with their point value and user impact, and lets you compare with similar organisations", fr:"Il note ton tenant par rapport aux bonnes pratiques d'identité de Microsoft, présente des actions d'amélioration avec leur valeur en points et leur impact utilisateur, et permet la comparaison avec des organisations similaires"}],
correct:[3],
explanation:{en:"A is wrong: no score guarantees security; it measures adoption of specific controls, not the absence of risk.\nB is wrong: it covers many areas including privileged access, legacy authentication and risk policies.\nC is wrong: it recommends, you decide and implement.\nD is correct: it is a prioritised, measurable view of identity posture with comparison data, useful for planning and for reporting progress to management.",
fr:"A est faux : aucun score ne garantit la sécurité ; il mesure l'adoption de contrôles précis, pas l'absence de risque.\nB est faux : il couvre de nombreux domaines dont l'accès privilégié, l'authentification héritée et les stratégies de risque.\nC est faux : il recommande, c'est toi qui décides et implémentes.\nD est correct : c'est une vue priorisée et mesurable de la posture d'identité avec des données de comparaison, utile pour planifier et rendre compte des progrès à la direction."}
},
{
id:"d4-077", domain:4, topic:"Terms of use reporting",
q:{en:"Legal asks for the list of users who accepted the current usage agreement and when. Where do you find it?",
   fr:"Le juridique demande la liste des utilisateurs ayant accepté la charte d'utilisation en vigueur et la date. Où la trouves-tu ?"},
options:[
 {en:"The terms of use blade, which shows accepted/declined counts and a per-user report you can export, backed by audit log entries", fr:"Le panneau des terms of use, qui affiche le nombre d'acceptations/refus et un rapport par utilisateur exportable, adossé aux entrées du journal d'audit"},
 {en:"The access reviews history", fr:"L'historique des access reviews"},
 {en:"There is no acceptance record", fr:"Il n'existe aucun enregistrement d'acceptation"},
 {en:"The sign-in logs only", fr:"Uniquement les journaux de connexion"}],
correct:[0],
explanation:{en:"A is correct: terms of use track per-user acceptance with timestamps and version, which is the point of using the feature rather than emailing a PDF, and the events also appear in the audit logs.\nB is wrong: access reviews recertify access, not document acceptance.\nC is wrong: acceptance is recorded and reportable.\nD is wrong: sign-in logs show the policy was satisfied but are not the acceptance register.",
fr:"A est correct : les terms of use suivent l'acceptation par utilisateur avec horodatage et version, ce qui est tout l'intérêt de la fonctionnalité par rapport à l'envoi d'un PDF, et les événements apparaissent aussi dans les journaux d'audit.\nB est faux : les access reviews recertifient l'accès, elles ne documentent pas une acceptation.\nC est faux : l'acceptation est enregistrée et exploitable en rapport.\nD est faux : les journaux de connexion montrent que la stratégie a été satisfaite mais ne constituent pas le registre d'acceptation."}
},
{
id:"d4-078", domain:4, topic:"Governance role separation",
q:{en:"A governance team must create access packages, catalogs and access reviews, but must NOT be able to create users or reset passwords. Which role fits best?",
   fr:"Une équipe gouvernance doit créer des access packages, catalogues et access reviews, mais ne doit PAS pouvoir créer d'utilisateurs ni réinitialiser des mots de passe. Quel rôle convient le mieux ?"},
options:[
 {en:"Privileged Role Administrator", fr:"Privileged Role Administrator"},
 {en:"Identity Governance Administrator", fr:"Identity Governance Administrator"},
 {en:"User Administrator", fr:"User Administrator"},
 {en:"Global Administrator", fr:"Global Administrator"}],
correct:[1],
explanation:{en:"A is wrong: Privileged Role Administrator manages role assignments and PIM settings, a different and highly sensitive scope.\nB is correct: Identity Governance Administrator is scoped to entitlement management, access reviews, terms of use and lifecycle workflows, without user or credential management.\nC is wrong: User Administrator manages users and passwords, the opposite of the requirement.\nD is wrong: Global Administrator grants everything.",
fr:"A est faux : Privileged Role Administrator gère les attributions de rôles et les réglages PIM, une portée différente et très sensible.\nB est correct : Identity Governance Administrator se limite à l'entitlement management, aux access reviews, aux terms of use et aux lifecycle workflows, sans gestion des utilisateurs ni des identifiants.\nC est faux : User Administrator gère les utilisateurs et les mots de passe, l'inverse du besoin.\nD est faux : Global Administrator accorde tout."}
},
{
id:"d4-079", domain:4, topic:"PIM for Groups eligible ownership",
q:{en:"Group owners can change membership of a group that grants sensitive access, and that ownership is permanent. How do you make ownership just-in-time?",
   fr:"Des propriétaires de groupe peuvent modifier l'appartenance d'un groupe donnant un accès sensible, et cette propriété est permanente. Comment rendre la propriété juste-à-temps ?"},
options:[
 {en:"Remove all owners and manage the group centrally", fr:"Retirer tous les propriétaires et gérer le groupe centralement"},
 {en:"Convert the group to dynamic membership", fr:"Convertir le groupe en appartenance dynamique"},
 {en:"Use PIM for Groups to make the owner role eligible rather than active, with activation settings such as MFA, justification and approval", fr:"Utiliser PIM for Groups pour rendre le rôle de propriétaire éligible plutôt qu'actif, avec des réglages d'activation comme MFA, justification et approbation"},
 {en:"Run an access review of the owners each quarter", fr:"Lancer une access review des propriétaires chaque trimestre"}],
correct:[2],
explanation:{en:"A is wrong: centralising removes the delegation the business needs.\nB is wrong: dynamic membership removes owner control of membership but does nothing about ownership privileges.\nC is correct: PIM for Groups governs both membership and ownership, so owner rights can be made eligible with activation controls — closing the gap where an owner can silently grant access at any time.\nD is wrong: a quarterly review is detective; between reviews the standing privilege remains.",
fr:"A est faux : centraliser supprime la délégation dont le métier a besoin.\nB est faux : l'appartenance dynamique retire au propriétaire le contrôle de l'appartenance mais ne change rien aux privilèges de propriété.\nC est correct : PIM for Groups gouverne à la fois l'appartenance et la propriété, les droits de propriétaire peuvent donc être rendus éligibles avec des contrôles d'activation — ce qui ferme la faille d'un propriétaire capable d'accorder l'accès silencieusement à tout moment.\nD est faux : une revue trimestrielle est détective ; entre deux revues le privilège permanent demeure."}
},
{
id:"d4-080", domain:4, topic:"PIM approval delegation",
q:{en:"For the Global Administrator role, who should be configured as the approver in PIM?",
   fr:"Pour le rôle Global Administrator, qui doit être configuré comme approbateur dans PIM ?"},
options:[
 {en:"Nobody — approval cannot be required for Global Administrator", fr:"Personne — l'approbation ne peut pas être exigée pour Global Administrator"},
 {en:"All users in the tenant", fr:"Tous les utilisateurs du tenant"},
 {en:"The requester themselves, to avoid delays", fr:"Le demandeur lui-même, pour éviter les délais"},
 {en:"A named group of accountable people other than the requester — if no approver is specified, any Privileged Role Administrator or Global Administrator can approve", fr:"Un groupe nommé de personnes responsables, distinctes du demandeur — si aucun approbateur n'est spécifié, tout Privileged Role Administrator ou Global Administrator peut approuver"}],
correct:[3],
explanation:{en:"A is wrong: approval is configurable for any role and is strongly recommended for the most privileged ones.\nB is wrong: everyone as approver is no control at all.\nC is wrong: self-approval defeats the control entirely.\nD is correct: approvers should be explicitly designated so accountability is clear, and leaving the list empty falls back to the privileged administrators, which may be broader than you intend. A requester cannot approve their own request.",
fr:"A est faux : l'approbation est configurable pour tout rôle et fortement recommandée pour les plus privilégiés.\nB est faux : tout le monde approbateur, c'est aucun contrôle.\nC est faux : l'auto-approbation annule totalement le contrôle.\nD est correct : les approbateurs doivent être explicitement désignés pour que la responsabilité soit claire, et laisser la liste vide bascule sur les administrateurs privilégiés, ce qui peut être plus large que prévu. Un demandeur ne peut pas approuver sa propre demande."}
},
{
id:"d4-081", domain:4, topic:"PIM audit history",
q:{en:"An auditor wants every role activation for the last 60 days, with justification text and approver. Where do you export it from?",
   fr:"Un auditeur veut chaque activation de rôle des 60 derniers jours, avec le texte de justification et l'approbateur. D'où l'exportes-tu ?"},
options:[
 {en:"The PIM audit history (resource and directory role audit), exportable to CSV, complemented by the Entra audit logs", fr:"L'historique d'audit PIM (audit des rôles de ressources et d'annuaire), exportable en CSV, complété par les journaux d'audit Entra"},
 {en:"The access review results", fr:"Les résultats des access reviews"},
 {en:"The sign-in logs", fr:"Les journaux de connexion"},
 {en:"The Identity Secure Score history", fr:"L'historique de l'Identity Secure Score"}],
correct:[0],
explanation:{en:"A is correct: PIM keeps its own audit history of activations, assignments and approvals including the justification supplied, and the same events also flow into the Entra audit logs for long-term export.\nB is wrong: access reviews record recertification decisions.\nC is wrong: sign-in logs record authentications, not role activations.\nD is wrong: Secure Score tracks posture, not individual events.",
fr:"A est correct : PIM conserve son propre historique d'audit des activations, attributions et approbations, y compris la justification fournie, et ces mêmes événements alimentent aussi les journaux d'audit Entra pour un export long terme.\nB est faux : les access reviews enregistrent des décisions de recertification.\nC est faux : les journaux de connexion enregistrent les authentifications, pas les activations de rôles.\nD est faux : le Secure Score suit une posture, pas des événements individuels."}
},
{
id:"d4-082", domain:4, topic:"Break-glass exclusion from PIM",
q:{en:"Should emergency access accounts hold their Global Administrator role as PIM-eligible or as a permanent active assignment?",
   fr:"Les comptes d'accès d'urgence doivent-ils détenir leur rôle Global Administrator en éligible PIM ou en attribution active permanente ?"},
options:[
 {en:"PIM-eligible, so activation is audited", fr:"Éligible PIM, pour que l'activation soit auditée"},
 {en:"Permanent active, so that regaining access never depends on PIM, Conditional Access or MFA services being available — compensated by strong credentials and alerting on every sign-in", fr:"Actif permanent, pour que la reprise d'accès ne dépende jamais de la disponibilité de PIM, de l'accès conditionnel ou des services MFA — compensé par des identifiants robustes et une alerte sur chaque connexion"},
 {en:"They should hold no role until an incident occurs", fr:"Ils ne doivent détenir aucun rôle jusqu'à ce qu'un incident survienne"},
 {en:"They should be synced from on-premises AD with a permanent role", fr:"Ils doivent être synchronisés depuis l'AD on-prem avec un rôle permanent"}],
correct:[1],
explanation:{en:"A is wrong: if PIM or MFA is the thing that is broken, an eligible-only account cannot help you.\nB is correct: the whole purpose of a break-glass account is to work when other systems do not, so its privilege must not depend on activating something. The compensating controls are a long, securely stored credential (ideally a FIDO2 key), exclusion from Conditional Access, and alerting so any use is investigated.\nC is wrong: assigning a role during an incident requires an admin who can sign in — the very problem you are solving.\nD is wrong: break-glass accounts must be cloud-only so an on-premises or sync outage cannot affect them.",
fr:"A est faux : si c'est justement PIM ou le MFA qui est en panne, un compte seulement éligible ne t'aide pas.\nB est correct : la raison d'être d'un compte break-glass est de fonctionner quand les autres systèmes ne fonctionnent plus, son privilège ne doit donc pas dépendre de l'activation de quelque chose. Les contrôles compensatoires sont un identifiant long conservé en sécurité (idéalement une clé FIDO2), l'exclusion de l'accès conditionnel, et une alerte pour que tout usage soit investigué.\nC est faux : attribuer un rôle pendant un incident suppose un admin capable de se connecter — exactement le problème qu'on cherche à résoudre.\nD est faux : les comptes break-glass doivent être cloud-only pour qu'une panne on-prem ou de synchronisation ne les affecte pas."}
},
{
id:"d4-083", domain:4, topic:"Access review decision impact",
q:{en:"In an access review of a dynamic group's membership, a reviewer denies a user. What actually happens when results are applied?",
   fr:"Dans une access review de l'appartenance d'un groupe dynamique, un relecteur refuse un utilisateur. Que se passe-t-il réellement à l'application des résultats ?"},
options:[
 {en:"The dynamic rule is automatically rewritten to exclude them", fr:"La règle dynamique est automatiquement réécrite pour l'exclure"},
 {en:"The group is converted to assigned membership", fr:"Le groupe est converti en appartenance assignée"},
 {en:"Nothing durable — membership is computed by the rule, so the user is re-added; dynamic group membership should be governed by changing the rule or the source attribute", fr:"Rien de durable — l'appartenance est calculée par la règle, donc l'utilisateur est réajouté ; l'appartenance d'un groupe dynamique se gouverne en changeant la règle ou l'attribut source"},
 {en:"The user is permanently removed from the group", fr:"L'utilisateur est retiré définitivement du groupe"}],
correct:[2],
explanation:{en:"A is wrong: nothing rewrites your rule.\nB is wrong: the membership type is not changed by a review.\nC is correct: a dynamic group's membership is recalculated from its rule, so a manual removal does not stick. Reviews are meaningful for assigned groups; for dynamic ones the control point is the attribute data and the rule itself.\nD is wrong: the rule reasserts membership.",
fr:"A est faux : rien ne réécrit ta règle.\nB est faux : le type d'appartenance n'est pas modifié par une revue.\nC est correct : l'appartenance d'un groupe dynamique est recalculée à partir de sa règle, un retrait manuel ne tient donc pas. Les revues ont du sens pour les groupes assignés ; pour les dynamiques, le point de contrôle est la donnée d'attribut et la règle elle-même.\nD est faux : la règle rétablit l'appartenance."}
},
{
id:"d4-084", domain:4, topic:"Governance of guest lifecycle",
q:{en:"Which combination gives guests a complete governed lifecycle from request to removal?",
   fr:"Quelle combinaison donne aux guests un cycle de vie gouverné complet, de la demande au retrait ?"},
options:[
 {en:"Cross-tenant synchronization", fr:"La cross-tenant synchronization"},
 {en:"Manual invitations plus an annual spreadsheet review", fr:"Des invitations manuelles plus une revue annuelle sur tableur"},
 {en:"A Conditional Access policy targeting guests", fr:"Une stratégie d'accès conditionnel ciblant les guests"},
 {en:"Access packages with a connected organization policy and expiry for onboarding, plus recurring access reviews of guests and an inactivity-based cleanup", fr:"Des access packages avec une stratégie de connected organization et une expiration pour l'onboarding, plus des access reviews récurrentes des guests et un nettoyage basé sur l'inactivité"}],
correct:[3],
explanation:{en:"A is wrong: cross-tenant sync provisions users automatically and is not a request-approve-expire lifecycle.\nB is wrong: manual processes are the situation governance features exist to replace.\nC is wrong: Conditional Access controls how guests authenticate, not whether they should still have access.\nD is correct: entitlement management handles request, approval, scope and expiry; access reviews handle periodic recertification; and inactivity signals catch guests who quietly stopped being relevant.",
fr:"A est faux : la cross-tenant sync provisionne automatiquement et n'est pas un cycle demande-approbation-expiration.\nB est faux : les processus manuels sont précisément la situation que ces fonctionnalités remplacent.\nC est faux : l'accès conditionnel contrôle comment les guests s'authentifient, pas s'ils doivent encore avoir accès.\nD est correct : l'entitlement management gère la demande, l'approbation, la portée et l'expiration ; les access reviews assurent la recertification périodique ; et les signaux d'inactivité rattrapent les guests devenus silencieusement inutiles."}
},
{
id:"d4-085", domain:4, topic:"Diagnostic settings categories",
q:{en:"You configure diagnostic settings for Entra ID. Which categories should you select to support security investigations of both authentication and configuration changes?",
   fr:"Tu configures les diagnostic settings d'Entra ID. Quelles catégories sélectionner pour permettre des investigations de sécurité sur l'authentification et sur les changements de configuration ?"},
options:[
 {en:"SignInLogs (and the non-interactive, service principal and managed identity sign-in categories) plus AuditLogs", fr:"SignInLogs (et les catégories connexions non interactives, service principal et managed identity) ainsi qu'AuditLogs"},
 {en:"AuditLogs only, since it contains sign-ins", fr:"AuditLogs seul, puisqu'il contient les connexions"},
 {en:"SignInLogs only, since it contains configuration changes", fr:"SignInLogs seul, puisqu'il contient les changements de configuration"},
 {en:"ProvisioningLogs only", fr:"ProvisioningLogs seul"}],
correct:[0],
explanation:{en:"A is correct: authentication evidence and configuration-change evidence live in different categories, and sign-ins are split across several categories — selecting only the interactive one silently omits service principal and non-interactive activity, a common blind spot.\nB is wrong: audit logs do not contain sign-ins.\nC is wrong: sign-in logs do not contain configuration changes.\nD is wrong: provisioning logs cover SCIM flows only.",
fr:"A est correct : les preuves d'authentification et de changement de configuration vivent dans des catégories différentes, et les connexions sont réparties sur plusieurs catégories — ne sélectionner que l'interactive omet silencieusement l'activité des service principals et non interactive, un angle mort courant.\nB est faux : les journaux d'audit ne contiennent pas les connexions.\nC est faux : les journaux de connexion ne contiennent pas les changements de configuration.\nD est faux : les journaux de provisioning ne couvrent que les flux SCIM."}
},
{
id:"d4-086", domain:4, topic:"Workbook selection",
q:{en:"You must present a monthly dashboard of MFA adoption, legacy authentication usage and Conditional Access impact to management. What is the lowest-effort approach?",
   fr:"Tu dois présenter chaque mois à la direction un tableau de bord de l'adoption du MFA, de l'usage de l'authentification héritée et de l'impact de l'accès conditionnel. Quelle est l'approche la moins coûteuse ?"},
options:[
 {en:"Write custom KQL from scratch for each metric", fr:"Écrire du KQL sur mesure de zéro pour chaque métrique"},
 {en:"Use the built-in Entra ID workbooks for those topics, which run over the logs already in your Log Analytics workspace", fr:"Utiliser les workbooks Entra ID intégrés sur ces sujets, qui s'exécutent sur les journaux déjà présents dans ton espace de travail Log Analytics"},
 {en:"Read the numbers from the Identity Secure Score", fr:"Relever les chiffres de l'Identity Secure Score"},
 {en:"Export CSVs monthly and build slides by hand", fr:"Exporter des CSV chaque mois et construire des diapositives à la main"}],
correct:[1],
explanation:{en:"A is wrong: writing everything from scratch duplicates work already done, though custom KQL is fine for gaps.\nB is correct: Microsoft ships workbooks for exactly these questions — sign-in analysis, legacy authentication, Conditional Access insights and gaps — and they are customisable if you need to adapt them.\nC is wrong: Secure Score gives posture points, not usage trends.\nD is wrong: manual reporting is slow and not reproducible.",
fr:"A est faux : tout écrire de zéro duplique un travail déjà fait, même si du KQL sur mesure reste utile pour combler des manques.\nB est correct : Microsoft fournit des workbooks pour exactement ces questions — analyse des connexions, authentification héritée, insights et trous de l'accès conditionnel — et ils sont personnalisables si besoin.\nC est faux : le Secure Score donne des points de posture, pas des tendances d'usage.\nD est faux : le reporting manuel est lent et non reproductible."}
},
{
id:"d4-087", domain:4, topic:"Alert on new privileged account",
q:{en:"You want an alert within minutes if anyone is added to the Global Administrator role permanently. Which pipeline achieves this?",
   fr:"Tu veux une alerte en quelques minutes si quelqu'un est ajouté durablement au rôle Global Administrator. Quel enchaînement le permet ?"},
options:[
 {en:"A Conditional Access policy on directory roles", fr:"Une stratégie d'accès conditionnel sur les rôles d'annuaire"},
 {en:"A weekly export of the role membership to CSV", fr:"Un export hebdomadaire de l'appartenance au rôle en CSV"},
 {en:"Entra audit logs streamed to Log Analytics, a scheduled log search alert rule matching the role assignment activity, and an action group that notifies the security team", fr:"Les journaux d'audit Entra diffusés vers Log Analytics, une règle d'alerte de recherche planifiée correspondant à l'activité d'attribution de rôle, et un action group notifiant l'équipe sécurité"},
 {en:"An access review of Global Administrators", fr:"Une access review des Global Administrators"}],
correct:[2],
explanation:{en:"A is wrong: Conditional Access constrains sign-ins by role holders; it does not detect a new assignment.\nB is wrong: weekly is far too slow for privileged escalation.\nC is correct: it is the standard detection pipeline — audit events flow to the workspace, a query runs on a schedule, and the action group delivers the notification. PIM alerts complement it for roles under PIM management.\nD is wrong: a review is periodic recertification, not real-time detection.",
fr:"A est faux : l'accès conditionnel contraint les connexions des détenteurs de rôles, il ne détecte pas une nouvelle attribution.\nB est faux : hebdomadaire est bien trop lent pour une élévation de privilèges.\nC est correct : c'est le pipeline de détection standard — les événements d'audit arrivent dans l'espace de travail, une requête s'exécute selon une planification, et l'action group délivre la notification. Les alertes PIM le complètent pour les rôles gérés par PIM.\nD est faux : une revue est une recertification périodique, pas une détection en temps réel."}
},
{
id:"d4-088", domain:4, topic:"Retention strategy",
q:{en:"Compliance requires 7 years of identity audit evidence, while the SOC needs fast queries on the last 90 days. What is the cost-effective design?",
   fr:"La conformité exige 7 ans de preuves d'audit d'identité, tandis que le SOC a besoin de requêtes rapides sur les 90 derniers jours. Quelle conception est la plus économique ?"},
options:[
 {en:"Keep 7 years of data in interactive Log Analytics retention", fr:"Conserver 7 ans de données en rétention interactive Log Analytics"},
 {en:"Keep everything in Entra ID native retention", fr:"Tout conserver dans la rétention native d'Entra ID"},
 {en:"Store 7 years of CSV exports on a file share", fr:"Stocker 7 ans d'exports CSV sur un partage de fichiers"},
 {en:"Send logs to Log Analytics with ~90 days of interactive retention, and archive long-term to cheaper storage (archive tier or a storage account) for the 7-year requirement", fr:"Envoyer les journaux vers Log Analytics avec environ 90 jours de rétention interactive, et archiver à long terme vers un stockage moins cher (niveau archive ou compte de stockage) pour l'exigence de 7 ans"}],
correct:[3],
explanation:{en:"A is wrong: seven years of interactive retention is technically possible but needlessly expensive.\nB is wrong: native retention is 30 days at most, so the requirement cannot be met.\nC is wrong: unstructured CSVs on a share are hard to search, easy to tamper with and weak as evidence.\nD is correct: hot data for investigation and cold data for compliance is the standard two-tier pattern, and it keeps the expensive interactive tier small.",
fr:"A est faux : sept ans de rétention interactive est techniquement possible mais inutilement coûteux.\nB est faux : la rétention native est de 30 jours au maximum, l'exigence ne peut donc pas être satisfaite.\nC est faux : des CSV non structurés sur un partage sont difficiles à rechercher, faciles à altérer et faibles comme preuve.\nD est correct : données chaudes pour l'investigation et froides pour la conformité, c'est le schéma standard à deux niveaux, et il garde petit le niveau interactif coûteux."}
},
{
id:"d4-089", domain:4, topic:"Entitlement vs group-based access",
q:{en:"When should you use an access package rather than simply adding users to a security group?",
   fr:"Quand faut-il utiliser un access package plutôt que d'ajouter simplement des utilisateurs à un groupe de sécurité ?"},
options:[
 {en:"When access must be requestable, approved, time-limited, reviewable and bundled across several resources — the group remains the delivery mechanism underneath", fr:"Quand l'accès doit être demandable, approuvé, limité dans le temps, auditable et regroupé sur plusieurs ressources — le groupe restant le mécanisme de livraison sous-jacent"},
 {en:"Never, because access packages cannot grant group membership", fr:"Jamais, car les access packages ne peuvent pas accorder d'appartenance à un groupe"},
 {en:"Only for internal employees", fr:"Uniquement pour les salariés internes"},
 {en:"Always, because groups are deprecated", fr:"Toujours, car les groupes sont obsolètes"}],
correct:[0],
explanation:{en:"A is correct: entitlement management adds the request, approval, expiry, review and multi-resource bundling that a raw group membership lacks — and it typically grants access BY managing group membership, so the two are complementary rather than alternatives.\nB is wrong: groups are one of the three resource types an access package can grant.\nC is wrong: access packages are especially valuable for external users through connected organizations.\nD is wrong: groups remain fundamental.",
fr:"A est correct : l'entitlement management ajoute la demande, l'approbation, l'expiration, la revue et le regroupement multi-ressources qui manquent à une simple appartenance de groupe — et il accorde généralement l'accès EN gérant l'appartenance à des groupes, les deux sont donc complémentaires et non alternatifs.\nB est faux : les groupes sont l'un des trois types de ressources qu'un access package peut accorder.\nC est faux : les access packages sont particulièrement utiles pour les utilisateurs externes via les connected organizations.\nD est faux : les groupes restent fondamentaux."}
},
{
id:"d4-090", domain:4, topic:"Connected organization settings",
q:{en:"A connected organization's state is set to Proposed rather than Configured. What is the practical consequence?",
   fr:"L'état d'une connected organization est Proposed plutôt que Configured. Quelle est la conséquence pratique ?"},
options:[
 {en:"It cannot be used in access package policies", fr:"Elle ne peut pas être utilisée dans les stratégies d'access package"},
 {en:"It was created automatically (for example when a user from that domain requested access) and is not yet formally managed — review it and set it to Configured if the partnership is legitimate", fr:"Elle a été créée automatiquement (par exemple quand un utilisateur de ce domaine a demandé un accès) et n'est pas encore formellement gérée — la revoir et la passer en Configured si le partenariat est légitime"},
 {en:"It is blocked from all access", fr:"Elle est bloquée pour tout accès"},
 {en:"It will be deleted automatically after 30 days", fr:"Elle sera supprimée automatiquement au bout de 30 jours"}],
correct:[1],
explanation:{en:"A is wrong: policies can reference connected organizations regardless, which is precisely why you should review the proposed ones.\nB is correct: proposed connected organizations are auto-created records reflecting real usage; reviewing and configuring them is a governance step so you know which external organisations you actually work with.\nC is wrong: proposed state does not itself block access.\nD is wrong: there is no automatic deletion.",
fr:"A est faux : les stratégies peuvent y faire référence quoi qu'il arrive, raison pour laquelle il faut justement revoir celles qui sont proposées.\nB est correct : les connected organizations proposées sont des enregistrements créés automatiquement reflétant un usage réel ; les revoir et les configurer est une étape de gouvernance pour savoir avec quelles organisations externes tu travailles réellement.\nC est faux : l'état proposé ne bloque pas en soi l'accès.\nD est faux : il n'y a pas de suppression automatique."}
},
{
id:"d4-091", domain:4, topic:"Reviewing privileged roles",
q:{en:"Which reviewer choice is most appropriate for an access review of the Global Administrator role?",
   fr:"Quel choix de relecteur est le plus approprié pour une access review du rôle Global Administrator ?"},
options:[
 {en:"The role holders themselves, since they know best whether they need it", fr:"Les détenteurs du rôle eux-mêmes, puisqu'ils savent mieux que quiconque s'ils en ont besoin"},
 {en:"No reviewer, with auto-approve on non-response", fr:"Aucun relecteur, avec approbation automatique en cas de non-réponse"},
 {en:"Selected reviewers from the security or governance team — self-review is weak for privileged roles, and managers may not understand the role's scope", fr:"Des relecteurs sélectionnés dans l'équipe sécurité ou gouvernance — l'auto-revue est faible pour des rôles privilégiés, et les managers peuvent ne pas comprendre la portée du rôle"},
 {en:"All users in the tenant", fr:"Tous les utilisateurs du tenant"}],
correct:[2],
explanation:{en:"A is wrong: self-review is acceptable for low-risk access but not for tenant-wide administrative power.\nB is wrong: auto-approving on silence guarantees privilege sprawl survives.\nC is correct: for the highest-privilege roles, independent reviewers provide real scrutiny; self-attestation almost always results in keeping the access, and the point of the review is challenge, not confirmation.\nD is wrong: crowd review has no accountability.",
fr:"A est faux : l'auto-revue est acceptable pour un accès à faible risque, pas pour un pouvoir administratif à l'échelle du tenant.\nB est faux : approuver automatiquement en cas de silence garantit la survie de la prolifération des privilèges.\nC est correct : pour les rôles les plus privilégiés, des relecteurs indépendants apportent un vrai examen ; l'auto-attestation aboutit presque toujours à conserver l'accès, or l'intérêt de la revue est de contester, pas de confirmer.\nD est faux : une revue par la foule n'a aucune responsabilité identifiable."}
},
{
id:"d4-092", domain:4, topic:"Governance licensing scope",
q:{en:"You want to run access reviews and PIM, but not lifecycle workflows. Which licence covers your need?",
   fr:"Tu veux utiliser les access reviews et PIM, mais pas les lifecycle workflows. Quelle licence couvre ton besoin ?"},
options:[
 {en:"Entra ID Governance in addition to P2", fr:"Entra ID Governance en plus de P2"},
 {en:"Entra ID Free", fr:"Entra ID Free"},
 {en:"Entra ID P1", fr:"Entra ID P1"},
 {en:"Entra ID P2 for the users concerned", fr:"Entra ID P2 pour les utilisateurs concernés"}],
correct:[3],
explanation:{en:"A is wrong: paying for Governance would be buying capabilities you excluded.\nB is wrong: Free covers none of this.\nC is wrong: P1 covers Conditional Access, dynamic groups and SSPR writeback, but not PIM.\nD is correct: PIM, access reviews and entitlement management are Entra ID P2 capabilities; the Entra ID Governance add-on is what unlocks lifecycle workflows and the advanced governance features you explicitly do not need.",
fr:"A est faux : payer Governance reviendrait à acheter des capacités que tu as exclues.\nB est faux : l'édition Free ne couvre rien de tout cela.\nC est faux : P1 couvre l'accès conditionnel, les groupes dynamiques et le writeback SSPR, mais pas PIM.\nD est correct : PIM, les access reviews et l'entitlement management sont des capacités d'Entra ID P2 ; le module Entra ID Governance débloque les lifecycle workflows et les fonctions de gouvernance avancées dont tu n'as explicitement pas besoin."}
},
{
id:"d4-093", domain:4, topic:"Separation of duties reporting",
q:{en:"You add an incompatible access package rule, but users already hold both conflicting packages. What does entitlement management do?",
   fr:"Tu ajoutes une règle d'access package incompatible, mais des utilisateurs détiennent déjà les deux packages conflictuels. Que fait l'entitlement management ?"},
options:[
 {en:"It prevents NEW conflicting requests and lets you report on existing users who violate the rule, so you can remediate them deliberately", fr:"Il empêche les NOUVELLES demandes conflictuelles et permet de lister les utilisateurs existants qui violent la règle, pour les remédier délibérément"},
 {en:"It does nothing at all, ever", fr:"Il ne fait absolument rien, jamais"},
 {en:"It immediately revokes one of the two assignments at random", fr:"Il révoque immédiatement l'une des deux attributions au hasard"},
 {en:"It blocks those users from signing in", fr:"Il empêche ces utilisateurs de se connecter"}],
correct:[0],
explanation:{en:"A is correct: separation of duties is preventive for future requests and detective for the existing population — you get a list of violators and decide how to unwind each case, which is the safe behaviour for a production tenant.\nB is wrong: it does prevent new conflicting requests.\nC is wrong: automatic random revocation would break business processes unpredictably.\nD is wrong: it governs entitlements, not authentication.",
fr:"A est correct : la separation of duties est préventive pour les demandes futures et détective pour la population existante — tu obtiens la liste des contrevenants et décides comment démêler chaque cas, comportement sûr pour un tenant de production.\nB est faux : elle empêche bien les nouvelles demandes conflictuelles.\nC est faux : une révocation automatique et aléatoire casserait des processus métier de façon imprévisible.\nD est faux : elle gouverne des droits, pas l'authentification."}
},
{
id:"d4-094", domain:4, topic:"Privileged access strategy",
q:{en:"Which combination best reduces standing privilege in a tenant with 30 Global Administrators?",
   fr:"Quelle combinaison réduit le mieux le privilège permanent dans un tenant comptant 30 Global Administrators ?"},
options:[
 {en:"Enable Security defaults", fr:"Activer les Security defaults"},
 {en:"Replace most assignments with least-privileged roles, make the remaining ones PIM-eligible with approval and MFA, and recertify them with recurring access reviews", fr:"Remplacer la plupart des attributions par des rôles de moindre privilège, rendre les restantes éligibles dans PIM avec approbation et MFA, et les recertifier par des access reviews récurrentes"},
 {en:"Require a longer password for administrators", fr:"Exiger un mot de passe plus long pour les administrateurs"},
 {en:"Move all administrators into one administrative unit", fr:"Déplacer tous les administrateurs dans une seule administrative unit"}],
correct:[1],
explanation:{en:"A is wrong: Security defaults enforce MFA but do not reduce how many people hold privilege or for how long.\nB is correct: the three levers are fewer holders, less standing time, and periodic justification — role right-sizing, just-in-time activation and recertification together address the root cause.\nC is wrong: password length does nothing about excessive standing privilege.\nD is wrong: administrative units scope what admins can manage; they do not reduce the number of Global Administrators.",
fr:"A est faux : les Security defaults imposent le MFA mais ne réduisent ni le nombre de détenteurs ni la durée du privilège.\nB est correct : les trois leviers sont moins de détenteurs, moins de temps permanent, et une justification périodique — le redimensionnement des rôles, l'activation juste-à-temps et la recertification traitent ensemble la cause racine.\nC est faux : la longueur du mot de passe ne change rien à un privilège permanent excessif.\nD est faux : les administrative units limitent ce que les admins peuvent gérer, elles ne réduisent pas le nombre de Global Administrators."}
},
{
id:"d4-095", domain:4, topic:"Monitoring hybrid identity",
q:{en:"You must be alerted if Entra Connect stops synchronizing or if password hash sync fails. What do you use?",
   fr:"Tu dois être alerté si Entra Connect cesse de synchroniser ou si la synchronisation de hash de mot de passe échoue. Qu'utilises-tu ?"},
options:[
 {en:"The provisioning logs", fr:"Les journaux de provisioning"},
 {en:"Identity Secure Score", fr:"L'Identity Secure Score"},
 {en:"Entra Connect Health, which monitors sync and authentication agents and sends alerts", fr:"Entra Connect Health, qui surveille la synchronisation et les agents d'authentification et envoie des alertes"},
 {en:"Access reviews", fr:"Les access reviews"}],
correct:[2],
explanation:{en:"A is wrong: provisioning logs cover cloud application provisioning and Cloud Sync, not Entra Connect health.\nB is wrong: Secure Score measures posture recommendations.\nC is correct: Connect Health monitors the hybrid infrastructure — sync service, password hash sync, pass-through authentication agents and AD FS — with alerting and reporting on errors such as stalled exports.\nD is wrong: reviews recertify access.",
fr:"A est faux : les journaux de provisioning couvrent le provisioning applicatif cloud et Cloud Sync, pas la santé d'Entra Connect.\nB est faux : le Secure Score mesure des recommandations de posture.\nC est correct : Connect Health surveille l'infrastructure hybride — service de synchronisation, sync de hash de mot de passe, agents de pass-through authentication et AD FS — avec alertes et rapports sur des erreurs comme des exports bloqués.\nD est faux : les revues recertifient l'accès."}
},
{
id:"d4-096", domain:4, topic:"Access review recurrence",
q:{en:"An annual access review of a high-risk group is judged insufficient by auditors. What is the appropriate adjustment?",
   fr:"Une access review annuelle d'un groupe à haut risque est jugée insuffisante par les auditeurs. Quel ajustement est approprié ?"},
options:[
 {en:"Remove the group entirely", fr:"Supprimer entièrement le groupe"},
 {en:"Make all reviews monthly across the tenant", fr:"Passer toutes les revues du tenant en mensuel"},
 {en:"Replace the review with a Conditional Access policy", fr:"Remplacer la revue par une stratégie d'accès conditionnel"},
 {en:"Increase the recurrence (for example quarterly or monthly) for that group, keeping longer cycles for low-risk access", fr:"Augmenter la récurrence (par exemple trimestrielle ou mensuelle) pour ce groupe, en gardant des cycles plus longs pour les accès à faible risque"}],
correct:[3],
explanation:{en:"A is wrong: deleting the group removes legitimate access.\nB is wrong: uniform high frequency degrades review quality everywhere.\nC is wrong: Conditional Access controls sign-in conditions, not entitlement recertification.\nD is correct: review frequency should follow risk. Raising it where it matters keeps reviewer attention meaningful, whereas reviewing everything constantly causes fatigue and rubber-stamping — which is worse than a slower but genuine review.",
fr:"A est faux : supprimer le groupe retire des accès légitimes.\nB est faux : une fréquence élevée uniforme dégrade la qualité des revues partout.\nC est faux : l'accès conditionnel contrôle les conditions de connexion, pas la recertification des droits.\nD est correct : la fréquence des revues doit suivre le risque. L'augmenter là où cela compte garde l'attention des relecteurs utile, alors que tout revoir en permanence provoque fatigue et validation machinale — pire qu'une revue plus lente mais sincère."}
},
{
id:"d4-097", domain:4, topic:"Emergency governance",
q:{en:"During a major incident, the response team needs elevated access for 48 hours with full traceability. What is the best approach?",
   fr:"Pendant un incident majeur, l'équipe de réponse a besoin d'un accès élevé pendant 48 heures avec une traçabilité complète. Quelle est la meilleure approche ?"},
options:[
 {en:"Grant PIM eligibility to the response team with an appropriate role, letting them activate with justification, and remove the eligibility once the incident closes", fr:"Accorder une éligibilité PIM à l'équipe de réponse sur un rôle adéquat, la laisser activer avec justification, et retirer l'éligibilité à la clôture de l'incident"},
 {en:"Share the break-glass account credentials with the team", fr:"Partager les identifiants du compte break-glass avec l'équipe"},
 {en:"Give each member a permanent Global Administrator assignment", fr:"Donner à chaque membre une attribution permanente de Global Administrator"},
 {en:"Disable Conditional Access for the duration", fr:"Désactiver l'accès conditionnel pendant la durée de l'incident"}],
correct:[0],
explanation:{en:"A is correct: time-bound eligibility with justification gives the team the access they need, per-person accountability and an audit trail, and the eligibility itself can be time-limited so cleanup is not forgotten.\nB is wrong: sharing break-glass credentials destroys individual accountability and burns your emergency control.\nC is wrong: permanent tenant-wide privilege for an incident is how temporary access becomes permanent.\nD is wrong: removing security controls during an active incident is the opposite of what you want.",
fr:"A est correct : une éligibilité limitée dans le temps avec justification donne à l'équipe l'accès nécessaire, une responsabilité individuelle et une piste d'audit, et l'éligibilité elle-même peut être bornée dans le temps pour que le nettoyage ne soit pas oublié.\nB est faux : partager les identifiants break-glass détruit la responsabilité individuelle et consume ton contrôle d'urgence.\nC est faux : un privilège permanent à l'échelle du tenant pour un incident, c'est ainsi qu'un accès temporaire devient définitif.\nD est faux : retirer des contrôles de sécurité pendant un incident actif est exactement l'inverse de ce qu'il faut faire."}
},
{
id:"d4-098", domain:4, topic:"Provisioning insights",
q:{en:"HR-driven provisioning silently stopped creating accounts for new hires two weeks ago. Which monitoring would have caught it?",
   fr:"Le provisioning piloté par les RH a cessé silencieusement de créer des comptes pour les nouveaux arrivants il y a deux semaines. Quelle surveillance l'aurait détecté ?"},
options:[
 {en:"The Identity Secure Score", fr:"L'Identity Secure Score"},
 {en:"Export provisioning logs to Log Analytics and alert on failures, quarantine state and a drop in successful provisioning volume", fr:"Exporter les journaux de provisioning vers Log Analytics et alerter sur les échecs, l'état de quarantaine et une chute du volume de provisioning réussi"},
 {en:"Sign-in logs for the HR application", fr:"Les journaux de connexion de l'application RH"},
 {en:"An access review of new hires", fr:"Une access review des nouveaux arrivants"}],
correct:[1],
explanation:{en:"A is wrong: Secure Score does not monitor provisioning jobs.\nB is correct: provisioning logs carry per-object results and the job's health state, and alerting on both errors and an unexpected absence of activity catches silent failures — the hardest kind to notice.\nC is wrong: the HR application's sign-ins say nothing about the provisioning job's health.\nD is wrong: a review looks at who has access, and would not run in time or explain the cause.",
fr:"A est faux : le Secure Score ne surveille pas les jobs de provisioning.\nB est correct : les journaux de provisioning portent les résultats par objet et l'état de santé du job, et alerter à la fois sur les erreurs et sur une absence anormale d'activité attrape les pannes silencieuses — les plus difficiles à remarquer.\nC est faux : les connexions de l'application RH ne disent rien de la santé du job de provisioning.\nD est faux : une revue regarde qui a accès, elle n'arriverait pas à temps et n'expliquerait pas la cause."}
},
{
id:"d4-099", domain:4, topic:"Governance rollout order",
q:{en:"You are introducing identity governance in a tenant with no existing controls. Which sequence is most sensible?",
   fr:"Tu introduis la gouvernance des identités dans un tenant sans aucun contrôle existant. Quelle séquence est la plus sensée ?"},
options:[
 {en:"Start with quarterly access reviews of everything", fr:"Commencer par des access reviews trimestrielles de tout"},
 {en:"Enable every governance feature at once on the whole tenant", fr:"Activer toutes les fonctionnalités de gouvernance d'un coup sur tout le tenant"},
 {en:"Gain visibility first (logs, reports, who has what), then reduce standing privilege with PIM, then formalise request and expiry with entitlement management, then add recurring reviews", fr:"D'abord obtenir la visibilité (journaux, rapports, qui a quoi), puis réduire le privilège permanent avec PIM, puis formaliser demande et expiration avec l'entitlement management, puis ajouter des revues récurrentes"},
 {en:"Start with lifecycle workflows before knowing who holds what", fr:"Commencer par les lifecycle workflows avant de savoir qui détient quoi"}],
correct:[2],
explanation:{en:"A is wrong: reviewing unstructured access produces low-quality decisions and burns reviewer goodwill.\nB is wrong: a big-bang rollout causes outages and reviewer fatigue, and makes failures hard to attribute.\nC is correct: you cannot govern what you cannot see, privileged access is the highest-risk area to address first, and reviews are most valuable once access is structured into packages and roles worth reviewing.\nD is wrong: automating lifecycle actions on unknown access can revoke or grant the wrong things at scale.",
fr:"A est faux : revoir un accès non structuré produit des décisions de faible qualité et épuise la bonne volonté des relecteurs.\nB est faux : un déploiement big-bang provoque des pannes et une fatigue des relecteurs, et rend les échecs difficiles à attribuer.\nC est correct : on ne gouverne pas ce qu'on ne voit pas, l'accès privilégié est la zone la plus risquée à traiter en premier, et les revues prennent toute leur valeur une fois l'accès structuré en packages et rôles qui méritent d'être revus.\nD est faux : automatiser des actions de cycle de vie sur des accès inconnus peut révoquer ou accorder les mauvaises choses à grande échelle."}
},
{
id:"d4-100", domain:4, topic:"Zero Trust and governance",
q:{en:"Which pair of statements best reflects how identity governance supports Zero Trust? (Select TWO)",
   fr:"Quelle paire d'affirmations reflète le mieux la façon dont la gouvernance des identités soutient le Zero Trust ? (Choisis DEUX réponses)"},
options:[
 {en:"Grant permanent access to trusted employees to avoid repeated requests", fr:"Accorder un accès permanent aux salariés de confiance pour éviter les demandes répétées"},
 {en:"Use least privilege: grant the narrowest role, just in time, for the shortest useful duration", fr:"Appliquer le moindre privilège : accorder le rôle le plus étroit, juste à temps, pour la durée utile la plus courte"},
 {en:"Verify explicitly and continuously: recertify access periodically and revoke what is no longer justified", fr:"Vérifier explicitement et continuellement : recertifier périodiquement les accès et révoquer ce qui n'est plus justifié"},
 {en:"Trust internal network locations implicitly to reduce friction", fr:"Faire confiance implicitement aux emplacements du réseau interne pour réduire la friction"}],
correct:[1,2],
explanation:{en:"A is wrong: permanent access based on who someone is, rather than what they currently need, is standing privilege — the risk governance exists to remove.\nB and C are correct: least privilege and explicit, ongoing verification are two of the three Zero Trust principles (the third being assume breach), and PIM, entitlement management and access reviews are the identity tools that implement them.\nD is wrong: implicit trust in a network location is precisely the assumption Zero Trust rejects.",
fr:"A est faux : un accès permanent fondé sur qui est la personne, plutôt que sur ce dont elle a besoin maintenant, est un privilège permanent — le risque même que la gouvernance vise à supprimer.\nB et C sont corrects : le moindre privilège et la vérification explicite et continue sont deux des trois principes du Zero Trust (le troisième étant supposer la compromission), et PIM, l'entitlement management et les access reviews sont les outils d'identité qui les mettent en œuvre.\nD est faux : la confiance implicite dans un emplacement réseau est précisément l'hypothèse que le Zero Trust rejette."}
}
];
