"use strict";
/* Domain 2 — Implement authentication and access management (25-30%) */
window.SC300_QUESTIONS_D2 = [
{
id:"d2-001", domain:2, topic:"Conditional Access",
q:{en:"You create a Conditional Access policy requiring MFA for all users. You must verify its impact on real sign-ins BEFORE enforcing it, without affecting users. What do you do?",
   fr:"Tu crées une politique Conditional Access exigeant le MFA pour tous les utilisateurs. Tu dois vérifier son impact sur les vraies connexions AVANT de l'appliquer, sans affecter les utilisateurs. Que fais-tu ?"},
options:[
 {en:"Enable the policy in Report-only mode and review the sign-in logs / Insights workbook", fr:"Activer la politique en mode Report-only et analyser les sign-in logs / le workbook Insights"},
 {en:"Enable the policy for one test user only", fr:"Activer la politique pour un seul utilisateur de test"},
 {en:"Use the What If tool only", fr:"Utiliser uniquement l'outil What If"},
 {en:"Enable the policy and quickly disable it if there are complaints", fr:"Activer la politique et la désactiver vite s'il y a des plaintes"}],
correct:[0],
explanation:{en:"A is correct: Report-only mode evaluates the policy against every real sign-in and records the result (success/failure/user action required) in logs without enforcing anything — the designed way to test impact at scale.\nB is wrong: a single user doesn't reveal the impact on ALL users and workloads.\nC is wrong: What If simulates specific scenarios you type in — useful, but it doesn't measure real traffic impact.\nD is wrong: that's enforcement with user disruption — exactly what we must avoid.",
fr:"A est correct : le mode Report-only évalue la politique sur chaque vraie connexion et enregistre le résultat (succès/échec/action requise) dans les logs sans rien appliquer — la méthode prévue pour tester l'impact à grande échelle.\nB est faux : un seul utilisateur ne révèle pas l'impact sur TOUS les utilisateurs et workloads.\nC est faux : What If simule des scénarios que tu saisis — utile, mais ne mesure pas l'impact du trafic réel.\nD est faux : c'est une mise en production avec perturbation des utilisateurs — exactement ce qu'on veut éviter."}
},
{
id:"d2-002", domain:2, topic:"Break-glass accounts",
q:{en:"You deploy Conditional Access policies requiring MFA for everyone. Which accounts should be EXCLUDED from all CA policies according to Microsoft best practice?",
   fr:"Tu déploies des politiques Conditional Access exigeant le MFA pour tout le monde. Quels comptes doivent être EXCLUS de toutes les politiques CA selon les bonnes pratiques Microsoft ?"},
options:[
 {en:"Emergency access (break-glass) accounts", fr:"Les comptes d'accès d'urgence (break-glass)"},
 {en:"All Global Administrators", fr:"Tous les Global Administrators"},
 {en:"Service desk accounts", fr:"Les comptes du service desk"},
 {en:"Guest accounts", fr:"Les comptes guests"}],
correct:[0],
explanation:{en:"A is correct: 2 break-glass accounts (cloud-only, Global Admin, phishing-resistant credentials stored securely, sign-ins monitored) must be excluded from every CA policy to guarantee access if CA misconfiguration or an MFA outage locks everyone out.\nB is wrong: regular Global Admins should have MORE protection (phishing-resistant MFA), not exclusions.\nC is wrong: service desk accounts are prime targets and must comply.\nD is wrong: guests should generally be covered by MFA policies too.",
fr:"A est correct : 2 comptes break-glass (cloud-only, Global Admin, credentials résistants au phishing stockés en sécurité, connexions surveillées) doivent être exclus de toutes les politiques CA pour garantir l'accès si une mauvaise config CA ou une panne MFA bloque tout le monde.\nB est faux : les Global Admins normaux doivent avoir PLUS de protection (MFA résistant au phishing), pas des exclusions.\nC est faux : les comptes du service desk sont des cibles de choix et doivent se conformer.\nD est faux : les guests doivent en général aussi être couverts par le MFA."}
},
{
id:"d2-003", domain:2, topic:"Temporary Access Pass",
q:{en:"New employees must register a FIDO2 passkey as their only authentication method, without ever having a password. What do you give them for their first sign-in?",
   fr:"Les nouveaux employés doivent enregistrer une passkey FIDO2 comme seule méthode d'authentification, sans jamais avoir de mot de passe. Que leur donnes-tu pour leur première connexion ?"},
options:[
 {en:"A Temporary Access Pass (TAP)", fr:"Un Temporary Access Pass (TAP)"},
 {en:"A temporary password", fr:"Un mot de passe temporaire"},
 {en:"An SMS one-time code", fr:"Un code SMS à usage unique"},
 {en:"A certificate", fr:"Un certificat"}],
correct:[0],
explanation:{en:"A is correct: a TAP is a time-limited (and optionally one-time-use) passcode that satisfies strong authentication, letting the user bootstrap passwordless methods like FIDO2 passkeys or Authenticator without a password. Enable the TAP policy in Authentication methods first.\nB is wrong: a temporary password contradicts the passwordless requirement.\nC is wrong: SMS must first be registered, which requires signing in — chicken-and-egg; also weak.\nD is wrong: certificate-based auth requires PKI deployment and issuing certificates — not the onboarding bootstrap tool here.",
fr:"A est correct : un TAP est un code limité dans le temps (et optionnellement à usage unique) qui vaut authentification forte, permettant d'amorcer des méthodes passwordless comme les passkeys FIDO2 ou Authenticator sans mot de passe. Active d'abord la politique TAP dans Authentication methods.\nB est faux : un mot de passe temporaire contredit l'exigence passwordless.\nC est faux : le SMS doit d'abord être enregistré, ce qui nécessite une connexion — cercle vicieux ; en plus c'est faible.\nD est faux : l'auth par certificat exige une PKI et l'émission de certificats — pas l'outil d'amorçage d'onboarding ici."}
},
{
id:"d2-004", domain:2, topic:"Authentication strengths",
q:{en:"You must require phishing-resistant MFA (FIDO2, Windows Hello for Business, or CBA) for all Global Administrators, while regular users keep standard MFA. What do you configure?",
   fr:"Tu dois exiger un MFA résistant au phishing (FIDO2, Windows Hello for Business ou CBA) pour tous les Global Administrators, tandis que les utilisateurs normaux gardent le MFA standard. Que configures-tu ?"},
options:[
 {en:"A Conditional Access policy targeting the Global Administrator role with the \"Phishing-resistant MFA\" authentication strength", fr:"Une politique Conditional Access ciblant le rôle Global Administrator avec l'authentication strength « Phishing-resistant MFA »"},
 {en:"Per-user MFA enforcement for admins", fr:"Le MFA par utilisateur (per-user) pour les admins"},
 {en:"Security defaults", fr:"Les security defaults"},
 {en:"An Identity Protection user risk policy", fr:"Une politique de user risk d'Identity Protection"}],
correct:[0],
explanation:{en:"A is correct: CA policies can target directory roles and use authentication strengths — the built-in \"Phishing-resistant MFA\" strength only accepts FIDO2 passkeys, Windows Hello for Business, or certificate-based authentication.\nB is wrong: per-user MFA (legacy) cannot require specific methods.\nC is wrong: security defaults apply the same baseline to everyone and cannot select methods.\nD is wrong: risk policies react to risk; they don't enforce specific method types for a role.",
fr:"A est correct : les politiques CA peuvent cibler des rôles d'annuaire et utiliser des authentication strengths — la strength intégrée « Phishing-resistant MFA » n'accepte que passkeys FIDO2, Windows Hello for Business ou l'authentification par certificat.\nB est faux : le MFA per-user (legacy) ne peut pas exiger des méthodes précises.\nC est faux : les security defaults appliquent la même base à tous et ne choisissent pas les méthodes.\nD est faux : les politiques de risque réagissent au risque ; elles n'imposent pas des types de méthodes pour un rôle."}
},
{
id:"d2-005", domain:2, topic:"Legacy authentication",
q:{en:"Sign-in logs show attacks using IMAP and POP3 with password spray. You must block legacy authentication tenant-wide using Conditional Access. How?",
   fr:"Les sign-in logs montrent des attaques via IMAP et POP3 avec password spray. Tu dois bloquer la legacy authentication sur tout le tenant avec Conditional Access. Comment ?"},
options:[
 {en:"Create a CA policy for all users, condition Client apps = \"Exchange ActiveSync clients\" and \"Other clients\", grant control = Block access", fr:"Créer une politique CA pour tous les utilisateurs, condition Client apps = « Exchange ActiveSync clients » et « Other clients », contrôle = Block access"},
 {en:"Create a CA policy requiring MFA for all users", fr:"Créer une politique CA exigeant le MFA pour tous"},
 {en:"Disable IMAP in each user's mailbox settings", fr:"Désactiver IMAP dans les paramètres de chaque boîte mail"},
 {en:"Enable Continuous Access Evaluation", fr:"Activer Continuous Access Evaluation"}],
correct:[0],
explanation:{en:"A is correct: legacy protocols appear under the Client apps condition as Exchange ActiveSync clients and \"Other clients\" (IMAP/POP/SMTP/older Office). Blocking them stops password spray via these protocols since legacy auth can't do MFA anyway.\nB is wrong: legacy protocols cannot perform MFA — some are simply blocked implicitly, but the explicit block policy is the documented approach; MFA-only policy leaves gaps in evaluation ordering.\nC is wrong: per-mailbox settings are Exchange-side, unscalable, and don't cover all legacy auth paths to other workloads.\nD is wrong: CAE revokes tokens in near real time; it doesn't block legacy protocols.",
fr:"A est correct : les protocoles legacy apparaissent sous la condition Client apps comme Exchange ActiveSync clients et « Other clients » (IMAP/POP/SMTP/vieux Office). Les bloquer stoppe le password spray via ces protocoles, qui ne savent de toute façon pas faire de MFA.\nB est faux : les protocoles legacy ne peuvent pas faire de MFA — la politique de blocage explicite est l'approche documentée.\nC est faux : les réglages par boîte mail sont côté Exchange, non scalables, et ne couvrent pas tous les chemins legacy vers d'autres workloads.\nD est faux : CAE révoque des tokens quasi temps réel ; il ne bloque pas les protocoles legacy."}
},
{
id:"d2-006", domain:2, topic:"Named locations",
q:{en:"Your security team requires that access to the Azure management portal is blocked from outside France. What do you configure? (Select all that apply)",
   fr:"L'équipe sécurité exige que l'accès au portail de gestion Azure soit bloqué hors de France. Que configures-tu ? (Sélectionne toutes les bonnes réponses)"},
options:[
 {en:"A named location for France (countries) in Conditional Access", fr:"Une named location pour la France (pays) dans Conditional Access"},
 {en:"A CA policy targeting \"Windows Azure Service Management API / Microsoft Admin Portals\" that blocks access when location is \"Any\" excluding the France named location", fr:"Une politique CA ciblant « Windows Azure Service Management API / Microsoft Admin Portals » qui bloque l'accès quand la localisation est « Any » en excluant la named location France"},
 {en:"A dynamic group of French users", fr:"Un groupe dynamique des utilisateurs français"},
 {en:"An Azure Firewall rule", fr:"Une règle Azure Firewall"}],
correct:[0,1],
explanation:{en:"A and B are correct: you first define France as a country-based named location, then create a CA policy on the management resources (Microsoft Admin Portals / Windows Azure Service Management API) with location condition including Any location and excluding France, grant = Block. This is the standard geo-blocking pattern.\nC is wrong: the requirement is WHERE the sign-in comes from, not the user's nationality/attributes.\nD is wrong: Azure Firewall protects network workloads, not Entra sign-in to portals.",
fr:"A et B sont corrects : tu définis d'abord la France comme named location par pays, puis tu crées une politique CA sur les ressources d'administration (Microsoft Admin Portals / Windows Azure Service Management API) avec la condition de localisation incluant Any et excluant la France, contrôle = Block. C'est le schéma standard de géo-blocage.\nC est faux : l'exigence porte sur l'ORIGINE de la connexion, pas la nationalité/les attributs de l'utilisateur.\nD est faux : Azure Firewall protège des workloads réseau, pas la connexion Entra aux portails."}
},
{
id:"d2-007", domain:2, topic:"ID Protection - user risk",
q:{en:"Microsoft finds a user's credentials in a public breach dump. Which risk detection fires, and what is the Microsoft-recommended automated remediation?",
   fr:"Microsoft trouve les identifiants d'un utilisateur dans un dump public de fuite. Quelle détection de risque se déclenche, et quelle est la remédiation automatisée recommandée par Microsoft ?"},
options:[
 {en:"Leaked credentials (user risk) → CA policy: user risk High requires a secure password change", fr:"Leaked credentials (user risk) → politique CA : user risk High exige un changement de mot de passe sécurisé"},
 {en:"Atypical travel (sign-in risk) → block access", fr:"Atypical travel (sign-in risk) → bloquer l'accès"},
 {en:"Leaked credentials (sign-in risk) → require MFA", fr:"Leaked credentials (sign-in risk) → exiger le MFA"},
 {en:"Password spray (user risk) → disable the account", fr:"Password spray (user risk) → désactiver le compte"}],
correct:[0],
explanation:{en:"A is correct: leaked credentials is a USER risk detection (the account itself is likely compromised). The recommended policy: user risk High → require password change (with MFA to prove identity) — the user self-remediates and the risk closes automatically.\nB is wrong: atypical travel is a sign-in risk, unrelated to breach dumps.\nC is wrong: leaked credentials is user risk, not sign-in risk; MFA alone leaves the compromised password valid.\nD is wrong: password spray is a sign-in risk detection, and disabling the account is manual heavy-handed remediation, not the recommended automated flow.",
fr:"A est correct : leaked credentials est une détection de USER risk (le compte lui-même est probablement compromis). Politique recommandée : user risk High → exiger un changement de mot de passe (avec MFA pour prouver l'identité) — l'utilisateur s'auto-remédie et le risque se ferme automatiquement.\nB est faux : atypical travel est un sign-in risk, sans rapport avec les fuites.\nC est faux : leaked credentials est un user risk, pas un sign-in risk ; le MFA seul laisse le mot de passe compromis valide.\nD est faux : password spray est une détection de sign-in risk, et désactiver le compte est une remédiation manuelle brutale, pas le flux automatisé recommandé."}
},
{
id:"d2-008", domain:2, topic:"ID Protection - licensing",
q:{en:"Which license is required to configure risk-based Conditional Access policies (sign-in risk / user risk conditions)?",
   fr:"Quelle licence est requise pour configurer des politiques Conditional Access basées sur le risque (conditions sign-in risk / user risk) ?"},
options:[
 {en:"Microsoft Entra ID P2", fr:"Microsoft Entra ID P2"},
 {en:"Microsoft Entra ID P1", fr:"Microsoft Entra ID P1"},
 {en:"Microsoft Entra ID Free", fr:"Microsoft Entra ID Free"},
 {en:"Microsoft Entra ID Governance", fr:"Microsoft Entra ID Governance"}],
correct:[0],
explanation:{en:"A is correct: Identity Protection (risk detections + risk-based CA conditions) requires Entra ID P2.\nB is wrong: P1 gives you Conditional Access itself but NOT the risk conditions.\nC is wrong: Free only surfaces basic security defaults; no CA at all.\nD is wrong: the Governance SKU adds lifecycle/entitlement features on top, not Identity Protection.",
fr:"A est correct : Identity Protection (détections de risque + conditions de risque dans CA) nécessite Entra ID P2.\nB est faux : P1 donne le Conditional Access lui-même mais PAS les conditions de risque.\nC est faux : Free n'offre que les security defaults ; pas de CA du tout.\nD est faux : le SKU Governance ajoute des fonctionnalités de cycle de vie/entitlement, pas Identity Protection."}
},
{
id:"d2-009", domain:2, topic:"SSPR",
q:{en:"You enable SSPR for a pilot group. Requirements: users must verify with TWO methods, and security questions must NOT be allowed. Where do you configure this?",
   fr:"Tu actives SSPR pour un groupe pilote. Exigences : les utilisateurs doivent vérifier avec DEUX méthodes, et les questions de sécurité sont INTERDITES. Où configures-tu ça ?"},
options:[
 {en:"Password reset > Authentication methods: set \"Number of methods required to reset\" = 2 and uncheck Security questions", fr:"Password reset > Authentication methods : « Number of methods required to reset » = 2 et décocher Security questions"},
 {en:"Conditional Access > Grant controls", fr:"Conditional Access > contrôles Grant"},
 {en:"Identity Protection > MFA registration policy", fr:"Identity Protection > politique d'enregistrement MFA"},
 {en:"Authentication strengths", fr:"Authentication strengths"}],
correct:[0],
explanation:{en:"A is correct: SSPR settings live under Entra ID > Password reset: scope (None/Selected/All), number of methods required (1 or 2), and which methods are allowed (email, phone, Authenticator, security questions...).\nB is wrong: CA grant controls govern access to apps, not the SSPR method policy.\nC is wrong: the registration policy pushes users to register MFA info; it doesn't set SSPR verification requirements.\nD is wrong: authentication strengths apply to sign-in via CA, not to SSPR flows.",
fr:"A est correct : les paramètres SSPR sont dans Entra ID > Password reset : portée (None/Selected/All), nombre de méthodes requises (1 ou 2), et méthodes autorisées (email, téléphone, Authenticator, questions de sécurité...).\nB est faux : les contrôles Grant de CA gouvernent l'accès aux apps, pas la politique de méthodes SSPR.\nC est faux : la politique d'enregistrement pousse à enregistrer les infos MFA ; elle ne définit pas les exigences de vérification SSPR.\nD est faux : les authentication strengths s'appliquent à la connexion via CA, pas aux parcours SSPR."}
},
{
id:"d2-010", domain:2, topic:"Password protection",
q:{en:"You must prevent users in on-premises AD from setting passwords containing your company name and local sports teams. Deployment must not disrupt users initially. What do you deploy? (Select all that apply)",
   fr:"Tu dois empêcher les utilisateurs de l'AD on-prem de définir des mots de passe contenant le nom de l'entreprise et les équipes sportives locales. Le déploiement ne doit pas perturber les utilisateurs au début. Que déploies-tu ? (Sélectionne toutes les bonnes réponses)"},
options:[
 {en:"Add the terms to the custom banned password list in Entra ID (P1 required)", fr:"Ajouter les termes à la custom banned password list dans Entra ID (P1 requis)"},
 {en:"Deploy Entra Password Protection DC agents on all domain controllers + the proxy service, in Audit mode first", fr:"Déployer les agents DC Entra Password Protection sur tous les contrôleurs de domaine + le service proxy, en mode Audit d'abord"},
 {en:"Configure a fine-grained password policy in AD", fr:"Configurer une fine-grained password policy dans l'AD"},
 {en:"Enable password writeback", fr:"Activer le password writeback"}],
correct:[0,1],
explanation:{en:"A and B are correct: the custom banned password list (with fuzzy matching for variants) is defined in Entra ID, and extending enforcement to on-prem AD requires the Password Protection DC agent on every DC plus at least one proxy service. Start in Audit mode to measure impact, then switch to Enforced.\nC is wrong: AD fine-grained policies control length/complexity/age — they cannot ban specific words.\nD is wrong: password writeback is an SSPR feature, unrelated to banned passwords.",
fr:"A et B sont corrects : la custom banned password list (avec correspondance floue des variantes) se définit dans Entra ID, et l'extension à l'AD on-prem exige l'agent DC Password Protection sur chaque contrôleur + au moins un service proxy. Commence en mode Audit pour mesurer l'impact, puis passe en Enforced.\nC est faux : les fine-grained policies AD contrôlent longueur/complexité/âge — elles ne bannissent pas des mots précis.\nD est faux : le password writeback est une fonctionnalité SSPR, sans rapport."}
},
{
id:"d2-011", domain:2, topic:"Session revocation",
q:{en:"A user's laptop is stolen while signed in to Microsoft 365. You must terminate their existing sessions as fast as possible. Which TWO actions are most effective? (Select all that apply)",
   fr:"Le laptop d'un utilisateur est volé alors qu'il est connecté à Microsoft 365. Tu dois terminer ses sessions existantes au plus vite. Quelles DEUX actions sont les plus efficaces ? (Sélectionne toutes les bonnes réponses)"},
options:[
 {en:"Revoke the user's sessions (invalidate refresh tokens)", fr:"Révoquer les sessions de l'utilisateur (invalider les refresh tokens)"},
 {en:"Disable the account / require password reset", fr:"Désactiver le compte / imposer une réinitialisation du mot de passe"},
 {en:"Remove the user's licenses", fr:"Retirer les licences de l'utilisateur"},
 {en:"Delete the stolen device from Intune only", fr:"Supprimer seulement l'appareil volé d'Intune"}],
correct:[0,1],
explanation:{en:"A and B are correct: revoking sessions invalidates refresh tokens so no new access tokens can be obtained, and disabling/resetting blocks any new authentication. With Continuous Access Evaluation, disabling the account also cuts existing access tokens in near real time for CAE-capable apps; otherwise access tokens die within ~1 hour.\nC is wrong: license removal doesn't terminate authenticated sessions.\nD is wrong: retiring/wiping the device in Intune is a good complementary step, but deleting the device record alone doesn't kill cloud sessions.",
fr:"A et B sont corrects : révoquer les sessions invalide les refresh tokens (plus de nouveaux access tokens), et désactiver/réinitialiser bloque toute nouvelle authentification. Avec Continuous Access Evaluation, la désactivation coupe aussi les access tokens existants quasi en temps réel pour les apps compatibles CAE ; sinon ils expirent sous ~1 heure.\nC est faux : retirer les licences ne termine pas les sessions authentifiées.\nD est faux : retirer/effacer l'appareil dans Intune est un bon complément, mais supprimer la fiche de l'appareil ne tue pas les sessions cloud."}
},
{
id:"d2-012", domain:2, topic:"Windows Hello for Business",
q:{en:"What does Windows Hello for Business use to authenticate users?",
   fr:"Qu'utilise Windows Hello for Business pour authentifier les utilisateurs ?"},
options:[
 {en:"An asymmetric key pair protected by the device's TPM, unlocked by a local PIN or biometric gesture", fr:"Une paire de clés asymétriques protégée par le TPM de l'appareil, déverrouillée par un PIN local ou un geste biométrique"},
 {en:"A password synced to the device", fr:"Un mot de passe synchronisé sur l'appareil"},
 {en:"An SMS code sent at each sign-in", fr:"Un code SMS envoyé à chaque connexion"},
 {en:"A roaming biometric profile stored in the cloud", fr:"Un profil biométrique itinérant stocké dans le cloud"}],
correct:[0],
explanation:{en:"A is correct: WHfB is phishing-resistant, key-based (or certificate-based) authentication. The private key never leaves the TPM; the PIN/biometric only unlocks it locally — that's why a WHfB PIN is stronger than a password (device-bound, not replayable).\nB is wrong: WHfB replaces passwords entirely.\nC is wrong: no SMS involved.\nD is wrong: biometric data NEVER leaves the device — it is not stored in the cloud.",
fr:"A est correct : WHfB est une authentification résistante au phishing, basée sur des clés (ou certificats). La clé privée ne quitte jamais le TPM ; le PIN/biométrique la déverrouille localement — c'est pourquoi un PIN WHfB est plus fort qu'un mot de passe (lié à l'appareil, non rejouable).\nB est faux : WHfB remplace complètement les mots de passe.\nC est faux : aucun SMS.\nD est faux : les données biométriques ne quittent JAMAIS l'appareil — pas de stockage cloud."}
},
{
id:"d2-013", domain:2, topic:"Conditional Access - session",
q:{en:"For unmanaged (non-compliant, non-joined) devices, users must be able to open SharePoint documents in the browser but NOT download, print, or sync them. Which combination achieves this?",
   fr:"Sur les appareils non gérés (ni conformes, ni joints), les utilisateurs doivent pouvoir ouvrir les documents SharePoint dans le navigateur mais PAS les télécharger, imprimer ou synchroniser. Quelle combinaison permet ça ?"},
options:[
 {en:"CA session control \"Use app-enforced restrictions\" + SharePoint limited access configuration", fr:"Contrôle de session CA « Use app-enforced restrictions » + configuration d'accès limité SharePoint"},
 {en:"CA grant control \"Require compliant device\"", fr:"Contrôle Grant CA « Require compliant device »"},
 {en:"Block access from unmanaged devices entirely", fr:"Bloquer totalement l'accès depuis les appareils non gérés"},
 {en:"Require MFA on unmanaged devices", fr:"Exiger le MFA sur les appareils non gérés"}],
correct:[0],
explanation:{en:"A is correct: app-enforced restrictions is a session control where the app (SharePoint/Exchange Online) enforces a limited browser experience — view in browser allowed, download/print/sync blocked — based on device state passed by Entra. (Conditional Access App Control with a block-download session policy in Defender for Cloud Apps is an alternative.)\nB is wrong: requiring a compliant device would BLOCK unmanaged devices instead of giving limited access.\nC is wrong: full block contradicts \"can open in browser\".\nD is wrong: MFA doesn't restrict downloads.",
fr:"A est correct : app-enforced restrictions est un contrôle de session où l'app (SharePoint/Exchange Online) applique une expérience navigateur limitée — lecture en ligne OK, téléchargement/impression/sync bloqués — selon l'état de l'appareil transmis par Entra. (Conditional Access App Control avec une session policy « block download » dans Defender for Cloud Apps est une alternative.)\nB est faux : exiger un appareil conforme BLOQUERAIT les appareils non gérés au lieu de donner un accès limité.\nC est faux : le blocage total contredit « peut ouvrir dans le navigateur ».\nD est faux : le MFA ne restreint pas les téléchargements."}
},
{
id:"d2-014", domain:2, topic:"Continuous Access Evaluation",
q:{en:"What does Continuous Access Evaluation (CAE) provide?",
   fr:"Qu'apporte Continuous Access Evaluation (CAE) ?"},
options:[
 {en:"Near real-time enforcement of critical events (account disabled, password changed, network location change) on access tokens, instead of waiting for token expiry", fr:"L'application quasi temps réel des événements critiques (compte désactivé, mot de passe changé, changement de localisation réseau) sur les access tokens, au lieu d'attendre leur expiration"},
 {en:"Continuous MFA prompts every 10 minutes", fr:"Des invites MFA continues toutes les 10 minutes"},
 {en:"Automatic password rotation", fr:"La rotation automatique des mots de passe"},
 {en:"Real-time sync between AD and Entra ID", fr:"La synchronisation temps réel entre AD et Entra ID"}],
correct:[0],
explanation:{en:"A is correct: with CAE, capable services (Exchange, SharePoint, Teams) subscribe to critical Entra events and revoke/re-evaluate long-lived tokens in near real time. It also enables strict IP location enforcement.\nB is wrong: CAE reduces friction — tokens actually live LONGER (up to 28h) because they can be revoked instantly.\nC is wrong: no relation to password rotation.\nD is wrong: directory sync is Entra Connect's job.",
fr:"A est correct : avec CAE, les services compatibles (Exchange, SharePoint, Teams) s'abonnent aux événements critiques d'Entra et révoquent/réévaluent les tokens quasi en temps réel. Il permet aussi l'application stricte des emplacements IP.\nB est faux : CAE réduit la friction — les tokens vivent en fait PLUS longtemps (jusqu'à 28h) car révocables instantanément.\nC est faux : aucun rapport avec la rotation des mots de passe.\nD est faux : la sync d'annuaire est le travail d'Entra Connect."}
},
{
id:"d2-015", domain:2, topic:"Authentication context",
q:{en:"Your company stores highly confidential documents in one specific SharePoint site. Users must re-authenticate with phishing-resistant MFA when accessing THIS site only, not all of SharePoint. What do you use?",
   fr:"Ton entreprise stocke des documents très confidentiels dans un site SharePoint précis. Les utilisateurs doivent se ré-authentifier avec un MFA résistant au phishing pour accéder à CE site uniquement, pas à tout SharePoint. Qu'utilises-tu ?"},
options:[
 {en:"An authentication context: create it in CA, require the auth strength in a policy targeting the context, and label the site with it (via sensitivity label or site setting)", fr:"Un authentication context : créé dans CA, exigé par une politique ciblant ce contexte, et appliqué au site (via sensitivity label ou paramètre du site)"},
 {en:"A CA policy targeting the SharePoint Online app", fr:"Une politique CA ciblant l'app SharePoint Online"},
 {en:"A named location", fr:"Une named location"},
 {en:"Protected actions", fr:"Des protected actions"}],
correct:[0],
explanation:{en:"A is correct: authentication contexts let you tag specific resources/actions (a SharePoint site via sensitivity label, PIM activation, etc.) and attach a dedicated CA policy (e.g. phishing-resistant strength) that triggers only for that context.\nB is wrong: targeting the SharePoint app applies the requirement to ALL sites.\nC is wrong: named locations define network zones, not per-site protection.\nD is wrong: protected actions guard Entra admin permissions (like editing CA policies), not SharePoint content.",
fr:"A est correct : les authentication contexts permettent d'étiqueter des ressources/actions précises (un site SharePoint via sensitivity label, l'activation PIM, etc.) et d'y attacher une politique CA dédiée (ex : strength résistante au phishing) qui ne se déclenche que pour ce contexte.\nB est faux : cibler l'app SharePoint applique l'exigence à TOUS les sites.\nC est faux : les named locations définissent des zones réseau, pas une protection par site.\nD est faux : les protected actions protègent des permissions admin Entra (comme modifier les politiques CA), pas du contenu SharePoint."}
},
{
id:"d2-016", domain:2, topic:"Protected actions",
q:{en:"You must require phishing-resistant MFA specifically when ANY administrator attempts to modify Conditional Access policies, even if already signed in. What feature do you use?",
   fr:"Tu dois exiger un MFA résistant au phishing spécifiquement quand N'IMPORTE QUEL administrateur tente de modifier les politiques Conditional Access, même déjà connecté. Quelle fonctionnalité utilises-tu ?"},
options:[
 {en:"Protected actions bound to an authentication context", fr:"Les protected actions liées à un authentication context"},
 {en:"PIM approval workflow", fr:"Le workflow d'approbation PIM"},
 {en:"Sign-in frequency = every time", fr:"Sign-in frequency = every time"},
 {en:"A restricted management administrative unit", fr:"Une restricted management administrative unit"}],
correct:[0],
explanation:{en:"A is correct: protected actions bind specific Entra permissions (e.g. microsoft.directory/conditionalAccessPolicies/*) to an authentication context; a CA policy on that context enforces step-up (e.g. phishing-resistant MFA) at the moment the action is attempted.\nB is wrong: PIM approval gates role ACTIVATION, not each subsequent action.\nC is wrong: sign-in frequency reauthenticates for apps globally, not per specific admin permission.\nD is wrong: restricted AUs protect user/group objects, not CA policy operations.",
fr:"A est correct : les protected actions lient des permissions Entra précises (ex : microsoft.directory/conditionalAccessPolicies/*) à un authentication context ; une politique CA sur ce contexte impose le step-up (ex : MFA résistant au phishing) au moment où l'action est tentée.\nB est faux : l'approbation PIM contrôle l'ACTIVATION du rôle, pas chaque action ultérieure.\nC est faux : la sign-in frequency ré-authentifie pour les apps globalement, pas par permission admin précise.\nD est faux : les restricted AUs protègent des objets utilisateurs/groupes, pas les opérations sur les politiques CA."}
},
{
id:"d2-017", domain:2, topic:"MFA registration policy",
q:{en:"Many users have not registered for MFA, so they cannot self-remediate when sign-in risk policies require MFA. How do you force all users to register within 14 days?",
   fr:"Beaucoup d'utilisateurs n'ont pas enregistré le MFA, donc ils ne peuvent pas s'auto-remédier quand les politiques de sign-in risk exigent le MFA. Comment forcer tous les utilisateurs à s'enregistrer sous 14 jours ?"},
options:[
 {en:"Enable the Identity Protection MFA registration policy (or a registration campaign for Authenticator)", fr:"Activer la politique d'enregistrement MFA d'Identity Protection (ou une registration campaign pour Authenticator)"},
 {en:"Block sign-in for unregistered users", fr:"Bloquer la connexion des utilisateurs non enregistrés"},
 {en:"Email users a registration link and hope for the best", fr:"Envoyer un lien d'enregistrement par email en croisant les doigts"},
 {en:"Enable per-user MFA for everyone", fr:"Activer le MFA per-user pour tout le monde"}],
correct:[0],
explanation:{en:"A is correct: the MFA registration policy (Identity Protection, P2) prompts users to register at sign-in with a 14-day grace period; the registration campaign similarly nudges users to set up Microsoft Authenticator. A CA policy targeting the \"Register security information\" user action can secure the registration itself.\nB is wrong: blocking prevents registration entirely.\nC is wrong: not enforceable.\nD is wrong: legacy per-user MFA forces MFA but is the deprecated mechanism and creates a harsher experience than a managed registration rollout.",
fr:"A est correct : la politique d'enregistrement MFA (Identity Protection, P2) invite les utilisateurs à s'enregistrer à la connexion avec 14 jours de délai ; la registration campaign pousse de même vers Microsoft Authenticator. Une politique CA sur l'action « Register security information » peut sécuriser l'enregistrement lui-même.\nB est faux : bloquer empêche complètement l'enregistrement.\nC est faux : non contraignant.\nD est faux : le MFA per-user (legacy) force le MFA mais c'est le mécanisme déprécié, plus brutal qu'un rollout d'enregistrement géré."}
},
{
id:"d2-018", domain:2, topic:"Global Secure Access",
q:{en:"Your users access an on-premises legacy web app through VPN. You must replace VPN access with identity-centric Zero Trust access enforced by Conditional Access, using Microsoft's SSE solution. What do you deploy?",
   fr:"Tes utilisateurs accèdent à une app web legacy on-prem via VPN. Tu dois remplacer le VPN par un accès Zero Trust centré sur l'identité, appliqué par Conditional Access, avec la solution SSE de Microsoft. Que déploies-tu ?"},
options:[
 {en:"Microsoft Entra Private Access (GSA client + private network connectors)", fr:"Microsoft Entra Private Access (client GSA + private network connectors)"},
 {en:"Microsoft Entra Internet Access", fr:"Microsoft Entra Internet Access"},
 {en:"Application Proxy only", fr:"Application Proxy uniquement"},
 {en:"Site-to-site VPN to Azure", fr:"Un VPN site-à-site vers Azure"}],
correct:[0],
explanation:{en:"A is correct: Private Access is the ZTNA component of Global Secure Access — users run the GSA client, traffic to private apps flows through Microsoft's edge to connectors on-prem, and each app (or Quick Access segment) can be gated by CA with MFA.\nB is wrong: Internet Access is the Secure Web Gateway for internet/SaaS traffic, not private apps.\nC is wrong: App Proxy publishes individual web apps and remains valid, but the question asks for the SSE/VPN-replacement solution covering TCP/UDP private resources broadly.\nD is wrong: a site-to-site VPN is exactly the network-centric model we're replacing.",
fr:"A est correct : Private Access est le composant ZTNA de Global Secure Access — les utilisateurs ont le client GSA, le trafic vers les apps privées passe par l'edge Microsoft vers des connecteurs on-prem, et chaque app (ou segment Quick Access) peut être protégée par CA avec MFA.\nB est faux : Internet Access est la Secure Web Gateway pour le trafic internet/SaaS, pas les apps privées.\nC est faux : App Proxy publie des apps web individuelles et reste valable, mais la question demande la solution SSE de remplacement du VPN couvrant largement TCP/UDP.\nD est faux : le VPN site-à-site est exactement le modèle réseau qu'on remplace."}
},
{
id:"d2-019", domain:2, topic:"Global Secure Access",
q:{en:"You must ensure Microsoft 365 access is only possible from your organization's network paths protected by Global Secure Access, blocking stolen-token replay from outside. Which capability do you use?",
   fr:"Tu dois garantir que l'accès à Microsoft 365 n'est possible que depuis les chemins réseau de l'organisation protégés par Global Secure Access, pour bloquer le rejeu de tokens volés depuis l'extérieur. Quelle capacité utilises-tu ?"},
options:[
 {en:"The \"compliant network\" check in Conditional Access (GSA Internet Access for Microsoft 365)", fr:"Le contrôle « compliant network » dans Conditional Access (GSA Internet Access for Microsoft 365)"},
 {en:"A trusted named location with the office IP ranges", fr:"Une named location de confiance avec les IPs des bureaux"},
 {en:"Require hybrid-joined devices", fr:"Exiger des appareils hybrid-joined"},
 {en:"Sign-in frequency of 1 hour", fr:"Une sign-in frequency d'1 heure"}],
correct:[0],
explanation:{en:"A is correct: with GSA's Microsoft 365 traffic profile, sign-ins acquire a compliant-network signal; a CA policy requiring the compliant network blocks any token used outside GSA — defeating token theft/replay even from unknown IPs, without maintaining IP lists.\nB is wrong: IP lists don't cover remote workers and can be bypassed by attackers replaying tokens from any allowed egress; they're also painful to maintain.\nC is wrong: device state helps but doesn't stop replay of tokens issued on valid devices.\nD is wrong: shorter token life narrows the window but doesn't block replay.",
fr:"A est correct : avec le profil de trafic Microsoft 365 de GSA, les connexions acquièrent un signal « compliant network » ; une politique CA l'exigeant bloque tout token utilisé hors GSA — contrant le vol/rejeu de tokens même depuis des IPs inconnues, sans maintenir de listes d'IPs.\nB est faux : les listes d'IPs ne couvrent pas les télétravailleurs et se contournent en rejouant les tokens depuis une sortie autorisée ; en plus c'est pénible à maintenir.\nC est faux : l'état de l'appareil aide mais n'empêche pas le rejeu de tokens émis sur des appareils valides.\nD est faux : une durée de token plus courte réduit la fenêtre mais ne bloque pas le rejeu."}
},
{
id:"d2-020", domain:2, topic:"Risky sign-ins investigation",
q:{en:"A sign-in was flagged with \"unfamiliar sign-in properties\". After investigation, you confirm it was the legitimate user on a business trip. What should you do in Identity Protection?",
   fr:"Une connexion a été signalée « unfamiliar sign-in properties ». Après investigation, tu confirmes que c'était bien l'utilisateur légitime en déplacement professionnel. Que fais-tu dans Identity Protection ?"},
options:[
 {en:"Confirm sign-in safe (or dismiss risk) so the model learns and the risk state closes", fr:"Confirmer la connexion comme sûre (« Confirm sign-in safe ») pour que le modèle apprenne et que l'état de risque se ferme"},
 {en:"Confirm compromised", fr:"Confirmer la compromission (« Confirm compromised »)"},
 {en:"Reset the user's password", fr:"Réinitialiser le mot de passe de l'utilisateur"},
 {en:"Delete the sign-in log entry", fr:"Supprimer l'entrée du sign-in log"}],
correct:[0],
explanation:{en:"A is correct: \"Confirm sign-in safe\" tells Identity Protection the detection was a false positive — the risk closes and the ML model gets feedback.\nB is wrong: confirming compromised marks the user as high risk, triggering remediation policies for a legitimate sign-in.\nC is wrong: unnecessary friction for a confirmed-legitimate event.\nD is wrong: logs are immutable; you cannot (and should not) delete them.",
fr:"A est correct : « Confirm sign-in safe » indique à Identity Protection que la détection était un faux positif — le risque se ferme et le modèle ML apprend.\nB est faux : confirmer la compromission marque l'utilisateur en risque élevé et déclenche la remédiation pour une connexion légitime.\nC est faux : friction inutile pour un événement confirmé légitime.\nD est faux : les logs sont immuables ; on ne peut pas (et ne doit pas) les supprimer."}
},
{
id:"d2-021", domain:2, topic:"Entra Kerberos",
q:{en:"Users sign in with FIDO2 security keys but must access on-premises file shares that use Kerberos. What do you configure so cloud-authenticated users get Kerberos tickets?",
   fr:"Les utilisateurs se connectent avec des clés FIDO2 mais doivent accéder à des partages de fichiers on-prem qui utilisent Kerberos. Que configures-tu pour que les utilisateurs authentifiés cloud obtiennent des tickets Kerberos ?"},
options:[
 {en:"Microsoft Entra Kerberos: create a krbtgt/AzureAD server object so Entra ID issues partial TGTs for on-prem AD", fr:"Microsoft Entra Kerberos : créer l'objet serveur krbtgt/AzureAD pour qu'Entra ID émette des TGT partiels pour l'AD on-prem"},
 {en:"Seamless SSO", fr:"Seamless SSO"},
 {en:"AD FS with claims rules", fr:"AD FS avec des règles de claims"},
 {en:"NTLM fallback", fr:"Le repli NTLM"}],
correct:[0],
explanation:{en:"A is correct: Entra Kerberos (enabled via Entra Connect PowerShell, creating an Azure AD Kerberos server object in AD) lets Entra ID issue partial Kerberos TGTs after passwordless cloud sign-in, which DCs exchange for full TGTs — enabling access to on-prem resources (file shares, and it's also required for FIDO2/WHfB cloud Kerberos trust).\nB is wrong: Seamless SSO works the other direction (on-prem Kerberos to cloud).\nC is wrong: AD FS federates authentication; it doesn't bridge FIDO2 cloud sign-ins to Kerberos tickets.\nD is wrong: NTLM is a legacy protocol to reduce, not a solution.",
fr:"A est correct : Entra Kerberos (activé via PowerShell d'Entra Connect, créant un objet serveur Azure AD Kerberos dans l'AD) permet à Entra ID d'émettre des TGT Kerberos partiels après une connexion cloud passwordless, que les DC échangent contre des TGT complets — donnant accès aux ressources on-prem (partages ; requis aussi pour le cloud Kerberos trust de FIDO2/WHfB).\nB est faux : Seamless SSO marche dans l'autre sens (Kerberos on-prem vers le cloud).\nC est faux : AD FS fédère l'authentification ; il ne convertit pas les connexions FIDO2 cloud en tickets Kerberos.\nD est faux : NTLM est un protocole legacy à réduire, pas une solution."}
},
{
id:"d2-022", domain:2, topic:"Sign-in frequency",
q:{en:"Compliance requires that users accessing a finance app re-authenticate at least every 4 hours, even on trusted devices. What do you configure?",
   fr:"La conformité exige que les utilisateurs de l'app finance se ré-authentifient au moins toutes les 4 heures, même sur des appareils de confiance. Que configures-tu ?"},
options:[
 {en:"A CA policy targeting the finance app with session control \"Sign-in frequency\" = 4 hours", fr:"Une politique CA ciblant l'app finance avec le contrôle de session « Sign-in frequency » = 4 heures"},
 {en:"Reduce the access token lifetime globally", fr:"Réduire la durée de vie des access tokens globalement"},
 {en:"Disable persistent browser sessions tenant-wide", fr:"Désactiver les sessions de navigateur persistantes sur tout le tenant"},
 {en:"Require MFA in the grant controls", fr:"Exiger le MFA dans les contrôles Grant"}],
correct:[0],
explanation:{en:"A is correct: the sign-in frequency session control defines how often reauthentication is required for the targeted apps/users — exactly the per-app periodic reauth requirement.\nB is wrong: configurable token lifetimes for this purpose are deprecated in favor of CA sign-in frequency, and a global change affects everything.\nC is wrong: disabling persistence affects browser cookie persistence after closing, not a fixed 4-hour cadence.\nD is wrong: MFA defines HOW you authenticate, not how OFTEN.",
fr:"A est correct : le contrôle de session sign-in frequency définit la fréquence de ré-authentification pour les apps/utilisateurs ciblés — exactement l'exigence de réauth périodique par app.\nB est faux : les durées de tokens configurables pour ça sont dépréciées au profit de la sign-in frequency, et un changement global touche tout.\nC est faux : désactiver la persistance concerne les cookies après fermeture du navigateur, pas une cadence fixe de 4 heures.\nD est faux : le MFA définit COMMENT on s'authentifie, pas À QUELLE FRÉQUENCE."}
},
{
id:"d2-023", domain:2, topic:"Security defaults",
q:{en:"A small company on Entra ID Free wants baseline protection: MFA for admins, MFA registration for all users, and blocking of legacy authentication — at no extra cost. What do you recommend?",
   fr:"Une petite entreprise sur Entra ID Free veut une protection de base : MFA pour les admins, enregistrement MFA pour tous, blocage de la legacy authentication — sans coût supplémentaire. Que recommandes-tu ?"},
options:[
 {en:"Enable security defaults", fr:"Activer les security defaults"},
 {en:"Buy P1 and build Conditional Access policies", fr:"Acheter P1 et construire des politiques Conditional Access"},
 {en:"Enable per-user MFA for every account", fr:"Activer le MFA per-user pour chaque compte"},
 {en:"Buy P2 for Identity Protection", fr:"Acheter P2 pour Identity Protection"}],
correct:[0],
explanation:{en:"A is correct: security defaults are free and enforce exactly that baseline (MFA registration for all, MFA for admins and when needed, legacy auth blocked, protection of privileged actions). Note: they cannot coexist with CA policies and offer no exclusions.\nB and D are wrong: valid but cost money — the requirement says no extra cost.\nC is wrong: legacy per-user MFA is deprecated, has poor UX, and doesn't block legacy authentication by itself.",
fr:"A est correct : les security defaults sont gratuits et imposent exactement cette base (enregistrement MFA pour tous, MFA pour les admins et quand nécessaire, legacy auth bloquée, protection des actions privilégiées). Note : incompatibles avec les politiques CA et sans exclusions possibles.\nB et D sont faux : valables mais payants — l'exigence est « sans coût supplémentaire ».\nC est faux : le MFA per-user est déprécié, pénible pour l'utilisateur, et ne bloque pas la legacy auth en soi."}
},
{
id:"d2-024", domain:2, topic:"Device filters",
q:{en:"You must apply a Conditional Access policy blocking access ONLY from devices whose model attribute equals \"Surface Hub\". Which CA condition feature do you use?",
   fr:"Tu dois appliquer une politique Conditional Access bloquant l'accès UNIQUEMENT depuis les appareils dont l'attribut model vaut « Surface Hub ». Quelle fonctionnalité de condition CA utilises-tu ?"},
options:[
 {en:"Filter for devices (device.model -eq \"Surface Hub\")", fr:"Filter for devices (device.model -eq \"Surface Hub\")"},
 {en:"Device platforms condition", fr:"La condition Device platforms"},
 {en:"A dynamic device group in the policy exclusions", fr:"Un groupe dynamique d'appareils dans les exclusions de la politique"},
 {en:"Named locations", fr:"Les named locations"}],
correct:[0],
explanation:{en:"A is correct: the \"filter for devices\" condition supports rule expressions on device attributes (model, manufacturer, extensionAttributes, isCompliant, etc.) to include or exclude matching devices.\nB is wrong: device platforms only distinguishes OS families (Windows, iOS...).\nC is wrong: CA user/group assignments target USERS; you can't assign device groups there.\nD is wrong: locations are network-based, not device-attribute-based.",
fr:"A est correct : la condition « filter for devices » supporte des expressions sur les attributs d'appareil (model, manufacturer, extensionAttributes, isCompliant, etc.) pour inclure ou exclure les appareils correspondants.\nB est faux : device platforms ne distingue que les familles d'OS (Windows, iOS...).\nC est faux : les assignments utilisateurs/groupes de CA ciblent des UTILISATEURS ; on ne peut pas y mettre des groupes d'appareils.\nD est faux : les locations sont basées réseau, pas attributs d'appareil."}
},
{
id:"d2-025", domain:2, topic:"Risky workload identities",
q:{en:"Identity Protection flags a service principal as risky (suspicious sign-ins from an unusual datacenter). You must automatically block risky service principals. What do you need?",
   fr:"Identity Protection signale un service principal comme risqué (connexions suspectes depuis un datacenter inhabituel). Tu dois bloquer automatiquement les service principals risqués. Que faut-il ?"},
options:[
 {en:"A Conditional Access policy for workload identities blocking on service principal risk (requires Workload Identities Premium)", fr:"Une politique Conditional Access pour workload identities bloquant sur le risque du service principal (nécessite Workload Identities Premium)"},
 {en:"A user risk policy set to High", fr:"Une politique de user risk réglée sur High"},
 {en:"Disable the app registration manually every time", fr:"Désactiver l'app registration manuellement à chaque fois"},
 {en:"MFA for the service principal", fr:"Le MFA pour le service principal"}],
correct:[0],
explanation:{en:"A is correct: CA for workload identities (Workload Identities Premium license) can target single-tenant service principals and block based on service principal risk from Identity Protection.\nB is wrong: user risk policies apply to human identities only.\nC is wrong: manual response isn't automatic blocking.\nD is wrong: service principals cannot perform MFA — that's precisely why risk-based blocking exists for them.",
fr:"A est correct : le CA pour workload identities (licence Workload Identities Premium) peut cibler les service principals single-tenant et bloquer selon le risque du service principal issu d'Identity Protection.\nB est faux : les politiques de user risk ne s'appliquent qu'aux identités humaines.\nC est faux : une réponse manuelle n'est pas un blocage automatique.\nD est faux : les service principals ne peuvent pas faire de MFA — c'est justement pour ça que le blocage par risque existe pour eux."}
},
{
id:"d2-026", domain:2, topic:"CBA",
q:{en:"Your organization must authenticate users with smart cards (X.509 certificates) directly against Microsoft Entra ID, without AD FS. What do you configure?",
   fr:"Ton organisation doit authentifier les utilisateurs avec des cartes à puce (certificats X.509) directement contre Microsoft Entra ID, sans AD FS. Que configures-tu ?"},
options:[
 {en:"Microsoft Entra certificate-based authentication (CBA): upload the CA trust chain and configure username bindings and authentication binding policies", fr:"Microsoft Entra certificate-based authentication (CBA) : importer la chaîne de confiance de la CA et configurer les username bindings et authentication binding policies"},
 {en:"Windows Hello for Business", fr:"Windows Hello for Business"},
 {en:"FIDO2 security keys", fr:"Des clés de sécurité FIDO2"},
 {en:"Keep AD FS — certificates require federation", fr:"Garder AD FS — les certificats exigent la fédération"}],
correct:[0],
explanation:{en:"A is correct: Entra CBA natively validates X.509 certificates: you upload the trusted issuing CAs (and CRL endpoints), map certificate fields to user attributes (username binding, e.g. PrincipalName → UPN), and set binding rules to treat it as single or multifactor. CBA is phishing-resistant.\nB and C are wrong: strong passwordless options, but they don't use the existing smart-card certificates.\nD is wrong: that was the OLD requirement — native CBA specifically removes the AD FS dependency.",
fr:"A est correct : le CBA d'Entra valide nativement les certificats X.509 : tu importes les CA émettrices de confiance (et les points CRL), tu mappes les champs du certificat aux attributs utilisateur (username binding, ex : PrincipalName → UPN), et tu définis les binding rules pour le traiter comme simple ou multifacteur. Le CBA est résistant au phishing.\nB et C sont faux : bonnes options passwordless, mais elles n'utilisent pas les certificats des cartes à puce existantes.\nD est faux : c'était l'ANCIENNE exigence — le CBA natif supprime justement la dépendance à AD FS."}
},
{
id:"d2-027", domain:2, topic:"What If tool",
q:{en:"A user reports being unexpectedly blocked when accessing an app. You suspect a Conditional Access policy conflict. Which tool shows exactly which policies WOULD apply to a hypothetical sign-in by this user to this app?",
   fr:"Un utilisateur signale un blocage inattendu en accédant à une app. Tu suspectes un conflit de politiques Conditional Access. Quel outil montre exactement quelles politiques s'appliqueraient à une connexion hypothétique de cet utilisateur à cette app ?"},
options:[
 {en:"The Conditional Access What If tool", fr:"L'outil What If de Conditional Access"},
 {en:"The audit logs", fr:"Les audit logs"},
 {en:"Identity Secure Score", fr:"L'Identity Secure Score"},
 {en:"The provisioning logs", fr:"Les provisioning logs"}],
correct:[0],
explanation:{en:"A is correct: What If simulates a sign-in (user, app, IP, platform, risk...) and lists policies that apply / don't apply and why. Combine with the sign-in log's \"Conditional Access\" tab for what actually happened.\nB is wrong: audit logs track directory changes (who modified what), not CA evaluation.\nC is wrong: Secure Score gives posture recommendations.\nD is wrong: provisioning logs cover SCIM/HR provisioning events.",
fr:"A est correct : What If simule une connexion (utilisateur, app, IP, plateforme, risque...) et liste les politiques qui s'appliquent / ne s'appliquent pas et pourquoi. À combiner avec l'onglet « Conditional Access » du sign-in log pour ce qui s'est réellement passé.\nB est faux : les audit logs tracent les changements d'annuaire (qui a modifié quoi), pas l'évaluation CA.\nC est faux : le Secure Score donne des recommandations de posture.\nD est faux : les provisioning logs couvrent les événements de provisioning SCIM/RH."}
},
{
id:"d2-028", domain:2, topic:"Passkeys",
q:{en:"You want users to sign in with passkeys stored in Microsoft Authenticator. Where do you enable and scope this capability?",
   fr:"Tu veux que les utilisateurs se connectent avec des passkeys stockées dans Microsoft Authenticator. Où actives-tu et délimites-tu cette capacité ?"},
options:[
 {en:"Authentication methods policy > Passkey (FIDO2), with key restrictions (AAGUIDs) if needed, targeted to users/groups", fr:"Authentication methods policy > Passkey (FIDO2), avec restrictions de clés (AAGUIDs) si besoin, ciblée sur utilisateurs/groupes"},
 {en:"Security defaults", fr:"Les security defaults"},
 {en:"Per-user MFA settings", fr:"Les réglages MFA per-user"},
 {en:"Conditional Access grant controls", fr:"Les contrôles Grant de Conditional Access"}],
correct:[0],
explanation:{en:"A is correct: passkeys are managed in the Authentication methods policy under Passkey (FIDO2). You can scope to groups and use key restrictions with AAGUIDs to allow only specific authenticators (e.g. Microsoft Authenticator's AAGUIDs or specific hardware keys).\nB is wrong: security defaults don't manage individual methods.\nC is wrong: legacy per-user MFA doesn't handle passkeys.\nD is wrong: CA can REQUIRE strong methods via authentication strengths, but enabling/registration of the method happens in the Authentication methods policy.",
fr:"A est correct : les passkeys se gèrent dans l'Authentication methods policy sous Passkey (FIDO2). Tu peux cibler des groupes et utiliser les restrictions de clés avec AAGUIDs pour n'autoriser que certains authenticators (ex : les AAGUIDs de Microsoft Authenticator ou des clés matérielles précises).\nB est faux : les security defaults ne gèrent pas les méthodes individuellement.\nC est faux : le MFA per-user legacy ne gère pas les passkeys.\nD est faux : CA peut EXIGER des méthodes fortes via les authentication strengths, mais l'activation/enregistrement de la méthode se fait dans l'Authentication methods policy."}
},
{
id:"d2-029", domain:2, topic:"CA policy evaluation",
q:{en:"Two Conditional Access policies apply to the same sign-in: Policy 1 requires MFA; Policy 2 blocks access. What is the result?",
   fr:"Deux politiques Conditional Access s'appliquent à la même connexion : la politique 1 exige le MFA ; la politique 2 bloque l'accès. Quel est le résultat ?"},
options:[
 {en:"Access is blocked — Block wins over all other controls", fr:"L'accès est bloqué — Block gagne sur tous les autres contrôles"},
 {en:"The user gets access after MFA", fr:"L'utilisateur accède après MFA"},
 {en:"The most recently created policy wins", fr:"La politique créée le plus récemment gagne"},
 {en:"The user chooses which policy to satisfy", fr:"L'utilisateur choisit quelle politique satisfaire"}],
correct:[0],
explanation:{en:"A is correct: CA policies are all evaluated and their controls combined — Block access always takes precedence. There is no policy ordering or priority.\nB is wrong: MFA can't override a block.\nC is wrong: creation date is irrelevant; there's no ordering.\nD is wrong: users never choose; all applicable policies must be satisfied.",
fr:"A est correct : toutes les politiques CA sont évaluées et leurs contrôles combinés — Block access a toujours la priorité. Il n'y a ni ordre ni priorité de politiques.\nB est faux : le MFA ne peut pas passer outre un blocage.\nC est faux : la date de création est sans importance ; pas d'ordre.\nD est faux : l'utilisateur ne choisit jamais ; toutes les politiques applicables doivent être satisfaites."}
},
{
id:"d2-030", domain:2, topic:"Authenticator security",
q:{en:"To defend against MFA fatigue (push bombing) attacks with Microsoft Authenticator, which features should you enable? (Select all that apply)",
   fr:"Pour te défendre contre les attaques de MFA fatigue (push bombing) avec Microsoft Authenticator, quelles fonctionnalités actives-tu ? (Sélectionne toutes les bonnes réponses)"},
options:[
 {en:"Number matching", fr:"Le number matching"},
 {en:"Additional context (app name and geographic location) in notifications", fr:"Le contexte additionnel (nom de l'app et localisation géographique) dans les notifications"},
 {en:"SMS as the default method", fr:"Le SMS comme méthode par défaut"},
 {en:"Longer session lifetimes", fr:"Des sessions plus longues"}],
correct:[0,1],
explanation:{en:"A and B are correct: number matching forces the user to type the number displayed on the sign-in screen (can't approve blindly), and showing the requesting app + location helps users spot fraudulent prompts. Both are configured in the Authenticator settings of the Authentication methods policy (number matching is now enforced by Microsoft).\nC is wrong: SMS is weaker and equally phishable.\nD is wrong: longer sessions reduce prompts but don't address malicious push approvals.",
fr:"A et B sont corrects : le number matching force l'utilisateur à saisir le nombre affiché sur l'écran de connexion (impossible d'approuver à l'aveugle), et l'affichage de l'app demandeuse + la localisation aide à repérer les invites frauduleuses. Les deux se configurent dans les réglages Authenticator de l'Authentication methods policy (le number matching est désormais imposé par Microsoft).\nC est faux : le SMS est plus faible et tout aussi phishable.\nD est faux : des sessions plus longues réduisent les invites mais ne traitent pas les approbations de push malveillants."}
},
{
id:"d2-031", domain:2, topic:"Report-only mode",
q:{en:"You must deploy a Conditional Access policy requiring MFA for all users, but you have to know the impact before enforcing it. What is the correct approach?",
   fr:"Tu dois déployer une stratégie d'accès conditionnel exigeant le MFA pour tous, mais tu dois connaître l'impact avant de l'appliquer. Quelle est la bonne approche ?"},
options:[
 {en:"Create the policy in report-only mode and analyse the report-only results in the sign-in logs and the Conditional Access Insights workbook", fr:"Créer la stratégie en mode report-only et analyser les résultats report-only dans les journaux de connexion et le workbook Conditional Access Insights"},
 {en:"Enable it On for a pilot group only, since report-only does not log anything", fr:"L'activer On pour un groupe pilote seulement, car le mode report-only ne journalise rien"},
 {en:"Use the What If tool, which records real sign-ins over time", fr:"Utiliser l'outil What If, qui enregistre les vraies connexions dans le temps"},
 {en:"Set the policy to Off and check the audit logs", fr:"Mettre la stratégie sur Off et consulter les journaux d'audit"}],
correct:[0],
explanation:{en:"A is correct: report-only evaluates the policy on every real sign-in and records what WOULD have happened (success/failure/user action required) without affecting the user, and the Insights workbook aggregates that.\nB is wrong: a pilot group is a valid second step, but report-only does log results — that is its whole purpose.\nC is wrong: What If simulates one hypothetical sign-in you describe; it does not observe real traffic.\nD is wrong: an Off policy is never evaluated, so nothing is recorded.",
fr:"A est correct : le mode report-only évalue la stratégie à chaque vraie connexion et enregistre ce qui SE SERAIT passé (succès/échec/action requise) sans impacter l'utilisateur, et le workbook Insights agrège ces données.\nB est faux : un groupe pilote est une deuxième étape valable, mais le report-only journalise bien les résultats — c'est tout son intérêt.\nC est faux : What If simule une connexion hypothétique que tu décris ; il n'observe pas le trafic réel.\nD est faux : une stratégie Off n'est jamais évaluée, donc rien n'est enregistré."}
},
{
id:"d2-032", domain:2, topic:"Authentication methods migration",
q:{en:"Your tenant still manages MFA methods in the legacy per-user MFA portal and legacy SSPR policy. You must consolidate everything into the Authentication methods policy. What should you use?",
   fr:"Ton tenant gère encore les méthodes MFA dans l'ancien portail MFA par utilisateur et l'ancienne stratégie SSPR. Tu dois tout consolider dans l'Authentication methods policy. Qu'utilises-tu ?"},
options:[
 {en:"The migration wizard in the Authentication methods policy, moving through Migration in progress to Migration complete", fr:"L'assistant de migration de l'Authentication methods policy, en passant par Migration in progress puis Migration complete"},
 {en:"Re-register every user's methods manually", fr:"Réenregistrer manuellement les méthodes de chaque utilisateur"},
 {en:"Disable Security defaults, which performs the migration automatically", fr:"Désactiver les Security defaults, ce qui effectue la migration automatiquement"},
 {en:"Delete the legacy policies; the new policy inherits their settings", fr:"Supprimer les anciennes stratégies ; la nouvelle stratégie hérite de leurs réglages"}],
correct:[0],
explanation:{en:"A is correct: the guided migration has three states — pre-migration (legacy still authoritative), migration in progress (both evaluated so you can move method by method) and migration complete (only the Authentication methods policy applies). The legacy MFA and SSPR method policies are retired.\nB is wrong: registrations are preserved; users do not re-enrol.\nC is wrong: Security defaults are unrelated and cannot be combined with CA anyway.\nD is wrong: there is no automatic inheritance, and you cannot simply delete the legacy configuration.",
fr:"A est correct : la migration guidée a trois états — pre-migration (l'ancien reste maître), migration in progress (les deux sont évalués, tu migres méthode par méthode) et migration complete (seule l'Authentication methods policy s'applique). Les anciennes stratégies de méthodes MFA et SSPR sont retirées.\nB est faux : les enregistrements sont conservés, les utilisateurs ne se réinscrivent pas.\nC est faux : les Security defaults n'ont aucun lien et ne se combinent pas avec l'accès conditionnel de toute façon.\nD est faux : il n'y a pas d'héritage automatique, et on ne supprime pas simplement l'ancienne configuration."}
},
{
id:"d2-033", domain:2, topic:"FIDO2 key restrictions",
q:{en:"Your company purchased a specific FIDO2 security key model and must ensure that no other brand of key can be registered. What do you configure?",
   fr:"Ton entreprise a acheté un modèle précis de clé de sécurité FIDO2 et doit garantir qu'aucune autre marque ne puisse être enregistrée. Que configures-tu ?"},
options:[
 {en:"Key restrictions in the FIDO2 authentication method policy, with an Allow list of the approved AAGUIDs", fr:"Les key restrictions dans la stratégie de méthode FIDO2, avec une liste d'autorisation des AAGUID approuvés"},
 {en:"A Conditional Access policy requiring a compliant device", fr:"Une stratégie d'accès conditionnel exigeant un appareil conforme"},
 {en:"An authentication strength requiring phishing-resistant MFA", fr:"Une authentication strength exigeant du MFA résistant au phishing"},
 {en:"Intune device configuration profiles", fr:"Des profils de configuration d'appareils Intune"}],
correct:[0],
explanation:{en:"A is correct: each FIDO2 model has an AAGUID, and the FIDO2 method policy lets you enforce an allow (or block) list of AAGUIDs, so only approved hardware can be registered.\nB is wrong: device compliance says nothing about which security key is used.\nC is wrong: a phishing-resistant strength accepts ANY FIDO2 key, plus Windows Hello and CBA.\nD is wrong: Intune manages devices, not which FIDO2 keys Entra ID accepts.",
fr:"A est correct : chaque modèle FIDO2 possède un AAGUID, et la stratégie de méthode FIDO2 permet d'imposer une liste d'autorisation (ou de blocage) d'AAGUID, donc seul le matériel approuvé peut être enregistré.\nB est faux : la conformité de l'appareil ne dit rien de la clé de sécurité utilisée.\nC est faux : une strength résistante au phishing accepte N'IMPORTE QUELLE clé FIDO2, plus Windows Hello et CBA.\nD est faux : Intune gère les appareils, pas les clés FIDO2 acceptées par Entra ID."}
},
{
id:"d2-034", domain:2, topic:"Authenticator number matching",
q:{en:"Users complain they approve Authenticator prompts by reflex and worry about MFA fatigue attacks. Which Authenticator settings directly address this?",
   fr:"Les utilisateurs disent approuver les notifications Authenticator par réflexe et craignent les attaques de fatigue MFA. Quels réglages d'Authenticator répondent directement à cela ?"},
options:[
 {en:"Number matching, plus additional context showing the application name and the sign-in geographic location", fr:"Le number matching, plus le contexte additionnel affichant le nom de l'application et la localisation géographique de la connexion"},
 {en:"Switching everyone to SMS codes", fr:"Basculer tout le monde sur des codes SMS"},
 {en:"Increasing the sign-in frequency to every hour", fr:"Augmenter la fréquence de connexion à toutes les heures"},
 {en:"Enabling Security defaults", fr:"Activer les Security defaults"}],
correct:[0],
explanation:{en:"A is correct: number matching forces the user to read a number from the sign-in screen and type it in the app, which a reflex tap cannot satisfy, and app name plus location give the user the context to recognise a sign-in that is not theirs. Both are configured in the Authenticator method policy and number matching is now enforced by default.\nB is wrong: SMS is weaker (SIM swap, interception) and is being de-emphasised.\nC is wrong: more prompts increase fatigue rather than reduce it.\nD is wrong: Security defaults enable basic MFA but do not add these protections as a configurable control.",
fr:"A est correct : le number matching oblige l'utilisateur à lire un nombre sur l'écran de connexion et à le saisir dans l'app, ce qu'un tap réflexe ne peut pas satisfaire, et le nom de l'app plus la localisation donnent le contexte pour reconnaître une connexion qui n'est pas la sienne. Les deux se configurent dans la stratégie de méthode Authenticator et le number matching est désormais imposé par défaut.\nB est faux : le SMS est plus faible (SIM swap, interception) et est en voie de dépriorisation.\nC est faux : plus d'invites augmente la fatigue au lieu de la réduire.\nD est faux : les Security defaults activent un MFA de base mais n'apportent pas ces protections comme contrôle configurable."}
},
{
id:"d2-035", domain:2, topic:"Smart lockout",
q:{en:"Which statement about Entra ID smart lockout is correct?",
   fr:"Quelle affirmation sur le smart lockout d'Entra ID est correcte ?"},
options:[
 {en:"It locks the account after a threshold of failed attempts (10 by default) for an increasing duration, and it tracks familiar locations so the real user is less likely to be locked out by an attacker", fr:"Il verrouille le compte après un seuil d'échecs (10 par défaut) pour une durée croissante, et il distingue les emplacements familiers pour que le vrai utilisateur soit moins susceptible d'être verrouillé par un attaquant"},
 {en:"It permanently disables the account until an administrator intervenes", fr:"Il désactive définitivement le compte jusqu'à intervention d'un administrateur"},
 {en:"It is only available with Entra ID P2", fr:"Il n'est disponible qu'avec Entra ID P2"},
 {en:"It replaces the need for Conditional Access", fr:"Il remplace le besoin d'accès conditionnel"}],
correct:[0],
explanation:{en:"A is correct: smart lockout uses a configurable threshold and lockout duration that grows with repeated bad attempts, and it distinguishes familiar from unfamiliar sign-in locations so brute force from an attacker does not lock the legitimate user out.\nB is wrong: the lockout is temporary, not a permanent disable.\nC is wrong: smart lockout protects all tenants; only customizing the threshold/duration requires Entra ID P1 or P2.\nD is wrong: it is a brute-force defence, not an access-control engine.",
fr:"A est correct : le smart lockout utilise un seuil et une durée de verrouillage configurables qui augmentent avec les échecs répétés, et il distingue les emplacements de connexion familiers des inconnus pour qu'un brute force externe ne verrouille pas l'utilisateur légitime.\nB est faux : le verrouillage est temporaire, pas une désactivation définitive.\nC est faux : le smart lockout protège tous les tenants ; seule la personnalisation du seuil/durée nécessite Entra ID P1 ou P2.\nD est faux : c'est une défense contre le brute force, pas un moteur de contrôle d'accès."}
},
{
id:"d2-036", domain:2, topic:"Custom banned passwords",
q:{en:"You must block passwords containing your brand names and local sports team names, both in the cloud AND when users change their password on a domain controller. What must you deploy?",
   fr:"Tu dois bloquer les mots de passe contenant tes noms de marque et ceux des clubs sportifs locaux, à la fois dans le cloud ET quand les utilisateurs changent leur mot de passe sur un contrôleur de domaine. Que dois-tu déployer ?"},
options:[
 {en:"A custom banned password list in Entra ID, plus the Entra Password Protection DC agent on domain controllers and the proxy service", fr:"Une liste de mots de passe interdits personnalisée dans Entra ID, plus l'agent DC Entra Password Protection sur les contrôleurs de domaine et le service proxy"},
 {en:"A custom banned password list in Entra ID only — it applies to on-prem automatically", fr:"Une liste personnalisée dans Entra ID seulement — elle s'applique automatiquement à l'on-prem"},
 {en:"An AD fine-grained password policy", fr:"Une stratégie de mot de passe affinée AD"},
 {en:"A Conditional Access policy with password protection as a grant control", fr:"Une stratégie d'accès conditionnel avec la protection de mot de passe comme contrôle d'octroi"}],
correct:[0],
explanation:{en:"A is correct: the custom banned list (up to 1000 terms) is defined in Entra ID, and on-premises enforcement requires the DC agent installed on every writable DC plus the proxy service to download the policy.\nB is wrong: without the agents, on-prem password changes are never evaluated against the list.\nC is wrong: fine-grained policies enforce length and complexity, not a term dictionary.\nD is wrong: Conditional Access has no such grant control; password protection is not an access decision.",
fr:"A est correct : la liste interdite personnalisée (jusqu'à 1000 termes) est définie dans Entra ID, et l'application on-prem nécessite l'agent DC installé sur chaque DC inscriptible plus le service proxy pour télécharger la stratégie.\nB est faux : sans les agents, les changements de mot de passe on-prem ne sont jamais confrontés à la liste.\nC est faux : les stratégies affinées imposent longueur et complexité, pas un dictionnaire de termes.\nD est faux : l'accès conditionnel n'a pas ce contrôle d'octroi ; la protection de mot de passe n'est pas une décision d'accès."}
},
{
id:"d2-037", domain:2, topic:"OATH hardware tokens",
q:{en:"A group of factory workers cannot use smartphones on the production floor but must perform MFA. Which method should you deploy?",
   fr:"Un groupe d'ouvriers ne peut pas utiliser de smartphone sur la ligne de production mais doit faire du MFA. Quelle méthode déployer ?"},
options:[
 {en:"OATH hardware tokens, uploaded in the Authentication methods policy with a CSV of serial numbers and secret keys, then activated per user", fr:"Des tokens matériels OATH, téléversés dans l'Authentication methods policy via un CSV de numéros de série et clés secrètes, puis activés par utilisateur"},
 {en:"SMS to a shared department phone", fr:"Un SMS vers un téléphone de service partagé"},
 {en:"Temporary Access Pass as a permanent method", fr:"Le Temporary Access Pass comme méthode permanente"},
 {en:"Security questions", fr:"Des questions de sécurité"}],
correct:[0],
explanation:{en:"A is correct: OATH TOTP hardware tokens are designed for users without phones — you upload the token metadata, assign each token to a user and activate it by entering the current code. FIDO2 keys would be an even stronger alternative.\nB is wrong: a shared phone destroys individual accountability and is not a per-user credential.\nC is wrong: TAP is explicitly time-limited and meant for bootstrapping or recovery, not steady-state MFA.\nD is wrong: security questions are an SSPR method only, never accepted for MFA.",
fr:"A est correct : les tokens matériels OATH TOTP sont conçus pour les utilisateurs sans téléphone — tu téléverses les métadonnées, assignes chaque token à un utilisateur et l'actives en saisissant le code courant. Les clés FIDO2 seraient une alternative encore plus robuste.\nB est faux : un téléphone partagé détruit la responsabilité individuelle et n'est pas un identifiant par utilisateur.\nC est faux : le TAP est explicitement limité dans le temps et destiné à l'amorçage ou à la récupération, pas au MFA courant.\nD est faux : les questions de sécurité sont une méthode SSPR uniquement, jamais acceptée pour le MFA."}
},
{
id:"d2-038", domain:2, topic:"Combined registration",
q:{en:"You want users to register their MFA and SSPR methods in one place, and you require administrators to always have two methods. Which statements are TRUE? (Select TWO)",
   fr:"Tu veux que les utilisateurs enregistrent leurs méthodes MFA et SSPR au même endroit, et tu exiges que les administrateurs aient toujours deux méthodes. Quelles affirmations sont VRAIES ? (Choisis DEUX réponses)"},
options:[
 {en:"Combined registration lets a user register methods once for both MFA and SSPR", fr:"L'inscription combinée permet d'enregistrer les méthodes une seule fois pour le MFA et le SSPR"},
 {en:"Administrators are always required to use two authentication methods for SSPR and cannot use security questions", fr:"Les administrateurs doivent toujours utiliser deux méthodes d'authentification pour le SSPR et ne peuvent pas utiliser les questions de sécurité"},
 {en:"Security questions are available to administrators if you enable them in the SSPR policy", fr:"Les questions de sécurité sont disponibles pour les administrateurs si tu les actives dans la stratégie SSPR"},
 {en:"Combined registration requires Entra ID P2", fr:"L'inscription combinée nécessite Entra ID P2"}],
correct:[0,1],
explanation:{en:"A and B are correct: combined registration is the single modern experience covering both MFA and SSPR, and Microsoft enforces a stricter SSPR policy for administrators — two methods, with security questions unavailable to them.\nC is wrong: the security-questions option applies to end users only; administrators are excluded by design.\nD is wrong: combined registration is not gated behind P2 (SSPR for members needs P1).",
fr:"A et B sont corrects : l'inscription combinée est l'expérience moderne unique couvrant MFA et SSPR, et Microsoft impose une stratégie SSPR plus stricte aux administrateurs — deux méthodes, sans questions de sécurité.\nC est faux : l'option questions de sécurité ne concerne que les utilisateurs finaux ; les administrateurs en sont exclus par conception.\nD est faux : l'inscription combinée n'est pas conditionnée à P2 (le SSPR pour les membres nécessite P1)."}
},
{
id:"d2-039", domain:2, topic:"CA - app protection policy",
q:{en:"Sales staff use personal iPhones and Android phones that will never be enrolled in Intune, but corporate Outlook data on them must be protected. Which Conditional Access grant control fits?",
   fr:"Les commerciaux utilisent des iPhone et Android personnels qui ne seront jamais inscrits dans Intune, mais les données Outlook d'entreprise doivent être protégées. Quel contrôle d'octroi d'accès conditionnel convient ?"},
options:[
 {en:"Require app protection policy, which enforces Intune MAM protection inside approved apps without enrolling the device", fr:"Exiger une app protection policy, qui applique la protection Intune MAM dans les applications approuvées sans inscrire l'appareil"},
 {en:"Require device to be marked as compliant", fr:"Exiger que l'appareil soit marqué comme conforme"},
 {en:"Require Entra hybrid joined device", fr:"Exiger un appareil Entra hybrid joined"},
 {en:"Block access from mobile platforms", fr:"Bloquer l'accès depuis les plateformes mobiles"}],
correct:[0],
explanation:{en:"A is correct: app protection policies (MAM without enrolment) protect the corporate data inside approved client apps — encryption, PIN, no copy to personal apps — which is exactly the BYOD case.\nB is wrong: compliance requires Intune enrolment, which is excluded.\nC is wrong: hybrid join applies to domain-joined Windows devices, not personal phones.\nD is wrong: blocking mobile access fails the business requirement.",
fr:"A est correct : les app protection policies (MAM sans inscription) protègent les données d'entreprise à l'intérieur des applications clientes approuvées — chiffrement, code PIN, pas de copie vers les apps personnelles — c'est exactement le cas BYOD.\nB est faux : la conformité exige l'inscription Intune, exclue ici.\nC est faux : le hybrid join concerne les appareils Windows joints au domaine, pas des téléphones personnels.\nD est faux : bloquer le mobile ne répond pas au besoin métier."}
},
{
id:"d2-040", domain:2, topic:"CA - Terms of use",
q:{en:"Legal requires every external guest to accept a usage agreement before opening any application, with the acceptance recorded and re-confirmed yearly. How do you implement this?",
   fr:"Le service juridique exige que chaque guest externe accepte une charte d'utilisation avant d'ouvrir toute application, avec l'acceptation enregistrée et reconfirmée chaque année. Comment l'implémentes-tu ?"},
options:[
 {en:"Create a terms of use with yearly re-acceptance and require it as a grant control in a Conditional Access policy targeting guest users", fr:"Créer des terms of use avec réacceptation annuelle et les exiger comme contrôle d'octroi dans une stratégie d'accès conditionnel ciblant les guests"},
 {en:"Email the PDF to guests when you invite them", fr:"Envoyer le PDF par email aux guests lors de l'invitation"},
 {en:"Add the agreement text to the company branding sign-in page", fr:"Ajouter le texte de la charte sur la page de connexion personnalisée"},
 {en:"Create an access package with a question on the request form", fr:"Créer un access package avec une question dans le formulaire de demande"}],
correct:[0],
explanation:{en:"A is correct: terms of use is an Entra Governance feature that presents a document at sign-in, records who accepted and when, and supports expiry/re-acceptance schedules; Conditional Access enforces it as a grant control per user set or application.\nB is wrong: an email produces no enforcement and no auditable acceptance.\nC is wrong: branding text is decoration, not consent capture.\nD is wrong: an access package question is answered once at request time and does not gate every application sign-in.",
fr:"A est correct : les terms of use sont une fonctionnalité Entra Governance qui présente un document à la connexion, enregistre qui a accepté et quand, et supporte l'expiration/réacceptation ; l'accès conditionnel les impose comme contrôle d'octroi par ensemble d'utilisateurs ou par application.\nB est faux : un email n'apporte aucune application technique ni acceptation auditable.\nC est faux : le texte de branding est décoratif, il ne recueille pas de consentement.\nD est faux : une question d'access package est répondue une fois à la demande et ne conditionne pas chaque connexion applicative."}
},
{
id:"d2-041", domain:2, topic:"Token protection",
q:{en:"Threat intelligence reports token theft: attackers exfiltrate refresh tokens from compromised endpoints and replay them from their own machines. Which Conditional Access session control targets this attack?",
   fr:"Le renseignement sur les menaces signale du vol de jetons : les attaquants exfiltrent des refresh tokens depuis des postes compromis et les rejouent depuis leurs propres machines. Quel contrôle de session d'accès conditionnel cible cette attaque ?"},
options:[
 {en:"Require token protection for sign-in sessions, which cryptographically binds the token to the device", fr:"Exiger la token protection pour les sessions de connexion, qui lie cryptographiquement le jeton à l'appareil"},
 {en:"Persistent browser session set to Never persistent", fr:"Session de navigateur persistante réglée sur Jamais persistante"},
 {en:"Sign-in frequency set to 1 hour", fr:"Fréquence de connexion réglée sur 1 heure"},
 {en:"Require MFA on every sign-in", fr:"Exiger le MFA à chaque connexion"}],
correct:[0],
explanation:{en:"A is correct: token protection (token binding) ties the refresh token to the client device's cryptographic key, so a stolen token is useless on another machine. It is the control specifically designed against token replay.\nB is wrong: non-persistent sessions only affect browser cookie persistence, not exported refresh tokens.\nC is wrong: shortening sign-in frequency narrows the window but the stolen token still works inside it.\nD is wrong: the attacker replays a token that was already issued after MFA, so re-prompting the victim does not stop them.",
fr:"A est correct : la token protection (token binding) lie le refresh token à la clé cryptographique de l'appareil client, donc un jeton volé est inutilisable sur une autre machine. C'est le contrôle spécifiquement conçu contre le rejeu de jeton.\nB est faux : les sessions non persistantes n'affectent que la persistance du cookie navigateur, pas les refresh tokens exportés.\nC est faux : raccourcir la fréquence réduit la fenêtre mais le jeton volé reste valable dedans.\nD est faux : l'attaquant rejoue un jeton déjà émis après MFA, redemander le MFA à la victime ne l'arrête pas."}
},
{
id:"d2-042", domain:2, topic:"CA - external user types",
q:{en:"You need one Conditional Access policy that applies only to B2B collaboration guests, and a different one for internal employees. How do you scope the guest policy?",
   fr:"Tu as besoin d'une stratégie d'accès conditionnel qui ne s'applique qu'aux guests B2B collaboration, et d'une autre pour les employés internes. Comment cibles-tu la stratégie des guests ?"},
options:[
 {en:"Under Users, select Guest or external users and choose the specific external user type \"B2B collaboration guest users\"", fr:"Dans Utilisateurs, choisir Invités ou utilisateurs externes et sélectionner le type externe précis « B2B collaboration guest users »"},
 {en:"Target All users and exclude a group containing every employee", fr:"Cibler Tous les utilisateurs et exclure un groupe contenant tous les employés"},
 {en:"Use a named location matching partner IP ranges", fr:"Utiliser une named location correspondant aux plages IP des partenaires"},
 {en:"Use a device filter on the guest devices", fr:"Utiliser un filtre d'appareils sur les appareils des guests"}],
correct:[0],
explanation:{en:"A is correct: the Users condition can target external user types individually — B2B collaboration guests, B2B collaboration members, B2B direct connect users, service providers and other external users — which is precise and self-maintaining.\nB is wrong: an employee exclusion group has to be maintained forever and silently breaks when someone is missed.\nC is wrong: guests sign in from anywhere; IP is not identity.\nD is wrong: guests typically have no registered device to filter on.",
fr:"A est correct : la condition Utilisateurs peut cibler les types externes individuellement — guests B2B collaboration, membres B2B collaboration, utilisateurs B2B direct connect, fournisseurs de services et autres utilisateurs externes — c'est précis et sans maintenance.\nB est faux : un groupe d'exclusion des employés doit être maintenu indéfiniment et casse silencieusement dès qu'un oubli survient.\nC est faux : les guests se connectent de partout ; une IP n'est pas une identité.\nD est faux : les guests n'ont généralement aucun appareil enregistré sur lequel filtrer."}
},
{
id:"d2-043", domain:2, topic:"CA - filter for applications",
q:{en:"You have 300 enterprise applications and need one Conditional Access policy that automatically covers every application tagged as \"HighBusinessImpact\", including apps added next year. What do you use?",
   fr:"Tu as 300 applications d'entreprise et il te faut une stratégie d'accès conditionnel couvrant automatiquement chaque application marquée « HighBusinessImpact », y compris celles ajoutées l'an prochain. Qu'utilises-tu ?"},
options:[
 {en:"A custom security attribute on the service principals plus the Conditional Access filter for applications", fr:"Un attribut de sécurité personnalisé sur les service principals plus le filtre pour applications de l'accès conditionnel"},
 {en:"Select the applications manually and update the policy when apps are added", fr:"Sélectionner les applications manuellement et mettre à jour la stratégie à chaque ajout"},
 {en:"An app collection in My Apps", fr:"Une collection d'applications dans Mes applications"},
 {en:"A dynamic group of applications", fr:"Un groupe dynamique d'applications"}],
correct:[0],
explanation:{en:"A is correct: you define a custom security attribute set, stamp the attribute on the relevant service principals, then use \"Edit filter\" in the Cloud apps condition — new apps get the policy the moment they are tagged.\nB is wrong: manual selection is the maintenance burden the requirement excludes.\nC is wrong: app collections only organise the My Apps portal for users.\nD is wrong: Entra groups contain users, devices and service principals for membership purposes, but the Cloud apps condition does not accept a group of applications.",
fr:"A est correct : tu définis un ensemble d'attributs de sécurité personnalisés, tu marques l'attribut sur les service principals concernés, puis tu utilises « Modifier le filtre » dans la condition Applications cloud — une nouvelle app reçoit la stratégie dès qu'elle est marquée.\nB est faux : la sélection manuelle est exactement la charge de maintenance que l'énoncé exclut.\nC est faux : les collections d'applications organisent seulement le portail Mes applications.\nD est faux : les groupes Entra contiennent utilisateurs, appareils et service principals pour l'appartenance, mais la condition Applications cloud n'accepte pas un groupe d'applications."}
},
{
id:"d2-044", domain:2, topic:"Risk policies configuration",
q:{en:"Which pair correctly matches the ID Protection policy to its recommended remediation?",
   fr:"Quelle paire associe correctement la stratégie ID Protection à sa remédiation recommandée ?"},
options:[
 {en:"Sign-in risk policy → require multifactor authentication; user risk policy → require secure password change", fr:"Stratégie de risque de connexion → exiger le MFA ; stratégie de risque utilisateur → exiger un changement de mot de passe sécurisé"},
 {en:"Sign-in risk policy → require password change; user risk policy → require MFA", fr:"Stratégie de risque de connexion → exiger un changement de mot de passe ; stratégie de risque utilisateur → exiger le MFA"},
 {en:"Both policies should block access, as remediation is unsafe", fr:"Les deux stratégies devraient bloquer l'accès, la remédiation étant risquée"},
 {en:"Sign-in risk policy → require compliant device; user risk policy → require terms of use", fr:"Stratégie de risque de connexion → exiger un appareil conforme ; stratégie de risque utilisateur → exiger les terms of use"}],
correct:[0],
explanation:{en:"A is correct: sign-in risk means THIS authentication looks suspicious, so proving possession of a second factor remediates it and clears the risk. User risk means the identity itself is likely compromised (for example leaked credentials), so the credential must be replaced — a secure password change (which requires MFA) remediates and resets user risk.\nB is wrong: the two are swapped.\nC is wrong: blocking is an option but Microsoft recommends self-remediation to reduce helpdesk load; blocking alone never clears risk.\nD is wrong: neither control remediates risk.",
fr:"A est correct : un risque de connexion signifie que CETTE authentification paraît suspecte, donc prouver la possession d'un second facteur la remédie et efface le risque. Un risque utilisateur signifie que l'identité elle-même est probablement compromise (ex : identifiants fuités), donc l'identifiant doit être remplacé — un changement de mot de passe sécurisé (qui exige le MFA) remédie et réinitialise le risque utilisateur.\nB est faux : les deux sont inversés.\nC est faux : bloquer est une option mais Microsoft recommande l'auto-remédiation pour réduire la charge du helpdesk ; bloquer seul n'efface jamais le risque.\nD est faux : aucun de ces contrôles ne remédie au risque."}
},
{
id:"d2-045", domain:2, topic:"Risk detections",
q:{en:"Which ID Protection risk detection is calculated OFFLINE and always raises USER risk rather than sign-in risk?",
   fr:"Quelle détection de risque ID Protection est calculée HORS LIGNE et élève toujours le risque UTILISATEUR plutôt que le risque de connexion ?"},
options:[
 {en:"Leaked credentials", fr:"Identifiants fuités (leaked credentials)"},
 {en:"Atypical travel", fr:"Voyage atypique (atypical travel)"},
 {en:"Anonymous IP address", fr:"Adresse IP anonyme"},
 {en:"Malicious IP address", fr:"Adresse IP malveillante"}],
correct:[0],
explanation:{en:"A is correct: leaked credentials come from Microsoft's monitoring of dark-web and public dumps, matched against your tenant after the fact — there is no sign-in to score, so it raises user risk offline.\nB is wrong: atypical travel is a sign-in risk detection computed by comparing sign-in locations (offline, but sign-in scoped).\nC is wrong: anonymous IP is a real-time sign-in risk detection.\nD is wrong: malicious IP address is a sign-in risk detection based on IP reputation.",
fr:"A est correct : les identifiants fuités proviennent de la surveillance par Microsoft du dark web et des fuites publiques, comparés à ton tenant après coup — il n'y a aucune connexion à noter, donc cela élève le risque utilisateur hors ligne.\nB est faux : le voyage atypique est une détection de risque de connexion calculée en comparant les emplacements de connexion (hors ligne, mais liée à une connexion).\nC est faux : l'IP anonyme est une détection de risque de connexion en temps réel.\nD est faux : l'adresse IP malveillante est une détection de risque de connexion basée sur la réputation de l'IP."}
},
{
id:"d2-046", domain:2, topic:"Risk feedback loop",
q:{en:"An investigation proves a flagged sign-in was really an attacker. Beyond containment, what is the value of clicking \"Confirm compromised\" in ID Protection?",
   fr:"Une investigation prouve qu'une connexion signalée était bien un attaquant. Au-delà du confinement, quel est l'intérêt de cliquer « Confirmer la compromission » dans ID Protection ?"},
options:[
 {en:"It sets the user risk to High and feeds the machine-learning model so future similar detections are scored more accurately", fr:"Cela porte le risque utilisateur à Élevé et alimente le modèle de machine learning pour que les détections similaires futures soient notées plus justement"},
 {en:"It permanently deletes the sign-in log entry", fr:"Cela supprime définitivement l'entrée du journal de connexion"},
 {en:"It automatically blocks the source IP address tenant-wide", fr:"Cela bloque automatiquement l'adresse IP source pour tout le tenant"},
 {en:"It has no effect other than a visual label", fr:"Cela n'a aucun effet, c'est une simple étiquette visuelle"}],
correct:[0],
explanation:{en:"A is correct: confirm compromised and dismiss are the analyst feedback loop — confirming raises user risk to High immediately (triggering your user risk policy) and trains the model, while dismissing sets risk to none. Using them consistently improves detection quality over time.\nB is wrong: logs are immutable; risk state changes, the record does not disappear.\nC is wrong: there is no automatic IP blocklist from this action.\nD is wrong: it changes risk state and model training, which is far from cosmetic.",
fr:"A est correct : confirmer la compromission et rejeter constituent la boucle de retour de l'analyste — confirmer porte immédiatement le risque utilisateur à Élevé (déclenchant ta stratégie de risque utilisateur) et entraîne le modèle, tandis que rejeter met le risque à néant. Les utiliser systématiquement améliore la qualité de détection dans le temps.\nB est faux : les journaux sont immuables ; l'état de risque change, l'enregistrement ne disparaît pas.\nC est faux : cette action ne crée aucune liste de blocage d'IP automatique.\nD est faux : elle change l'état de risque et l'entraînement du modèle, ce qui est tout sauf cosmétique."}
},
{
id:"d2-047", domain:2, topic:"GSA - Private Access",
q:{en:"You must give remote employees access to an internal line-of-business web app and an internal SMB file share, replacing the legacy VPN, with Conditional Access applied per application. Which Global Secure Access capability do you use?",
   fr:"Tu dois donner à des employés distants l'accès à une application web métier interne et à un partage de fichiers SMB interne, en remplaçant le VPN historique, avec de l'accès conditionnel par application. Quelle capacité de Global Secure Access utilises-tu ?"},
options:[
 {en:"Microsoft Entra Private Access, with Quick Access or per-app enterprise applications and the private network connector", fr:"Microsoft Entra Private Access, avec Quick Access ou des applications d'entreprise par app et le connecteur de réseau privé"},
 {en:"Microsoft Entra Internet Access", fr:"Microsoft Entra Internet Access"},
 {en:"Application Proxy, which supports all TCP and UDP protocols", fr:"Application Proxy, qui supporte tous les protocoles TCP et UDP"},
 {en:"A named location containing the corporate IP range", fr:"Une named location contenant la plage IP de l'entreprise"}],
correct:[0],
explanation:{en:"A is correct: Private Access is the ZTNA capability for private resources over any TCP/UDP port — not just HTTP — and each private app can be an enterprise application, so Conditional Access applies individually.\nB is wrong: Internet Access is the secure web gateway for internet and SaaS traffic.\nC is wrong: Application Proxy publishes web (HTTP/HTTPS) apps only, so it cannot serve an SMB share.\nD is wrong: a named location is a condition, not a connectivity solution.",
fr:"A est correct : Private Access est la capacité ZTNA pour les ressources privées sur n'importe quel port TCP/UDP — pas seulement HTTP — et chaque app privée peut être une application d'entreprise, donc l'accès conditionnel s'applique individuellement.\nB est faux : Internet Access est la passerelle web sécurisée pour le trafic internet et SaaS.\nC est faux : Application Proxy ne publie que des applications web (HTTP/HTTPS), il ne peut donc pas servir un partage SMB.\nD est faux : une named location est une condition, pas une solution de connectivité."}
},
{
id:"d2-048", domain:2, topic:"GSA - compliant network",
q:{en:"You want to require that access to Exchange Online happens only through your Global Secure Access tenant, so a stolen session cannot be used from an arbitrary network — without maintaining IP address lists. What do you configure?",
   fr:"Tu veux exiger que l'accès à Exchange Online passe uniquement par ton tenant Global Secure Access, pour qu'une session volée ne serve pas depuis un réseau quelconque — sans maintenir de listes d'adresses IP. Que configures-tu ?"},
options:[
 {en:"A Conditional Access policy using the compliant network check condition, with Global Secure Access enabled", fr:"Une stratégie d'accès conditionnel utilisant la condition compliant network check, avec Global Secure Access activé"},
 {en:"A trusted named location with your office public IPs", fr:"Une named location de confiance avec les IP publiques de tes bureaux"},
 {en:"A device filter requiring a specific device model", fr:"Un filtre d'appareils exigeant un modèle précis"},
 {en:"Sign-in frequency of 1 hour", fr:"Une fréquence de connexion d'une heure"}],
correct:[0],
explanation:{en:"A is correct: the compliant network check verifies the traffic actually traversed your GSA tenant with the client installed and policies applied — it is tenant-specific and needs no IP maintenance, and it is the recommended replacement for IP-based trusted locations.\nB is wrong: public IPs are spoofable, shared and a constant maintenance burden, and VPN egress defeats them.\nC is wrong: device model has nothing to do with network path.\nD is wrong: re-authenticating more often does not constrain the network used.",
fr:"A est correct : le compliant network check vérifie que le trafic a réellement traversé ton tenant GSA avec le client installé et les stratégies appliquées — c'est spécifique à ton tenant, sans maintenance d'IP, et c'est le remplaçant recommandé des trusted locations basées sur IP.\nB est faux : les IP publiques sont usurpables, partagées et une charge de maintenance constante, et une sortie VPN les contourne.\nC est faux : le modèle d'appareil n'a rien à voir avec le chemin réseau.\nD est faux : se réauthentifier plus souvent ne contraint pas le réseau utilisé."}
},
{
id:"d2-049", domain:2, topic:"CBA username binding",
q:{en:"You deploy certificate-based authentication. Certificates carry the user's UPN in the Subject Alternative Name. Which binding is the most secure choice, and why?",
   fr:"Tu déploies l'authentification par certificat. Les certificats portent l'UPN de l'utilisateur dans le Subject Alternative Name. Quel binding est le choix le plus sûr, et pourquoi ?"},
options:[
 {en:"A high-affinity binding such as SubjectKeyIdentifier or Issuer+SerialNumber mapped to certificateUserIds, because UPN-based bindings are low affinity and reusable if a name is re-assigned", fr:"Un binding à forte affinité comme SubjectKeyIdentifier ou Issuer+SerialNumber mappé sur certificateUserIds, car les bindings basés sur l'UPN sont à faible affinité et réutilisables si un nom est réattribué"},
 {en:"PrincipalName to UPN, because it is the simplest", fr:"PrincipalName vers UPN, car c'est le plus simple"},
 {en:"RFC822Name to mail, because email is unique forever", fr:"RFC822Name vers mail, car l'email est unique pour toujours"},
 {en:"Any binding is equivalent as long as the root CA is trusted", fr:"Tous les bindings sont équivalents dès lors que l'autorité racine est de confiance"}],
correct:[0],
explanation:{en:"A is correct: Microsoft classifies bindings by affinity. Low-affinity bindings (PrincipalName, RFC822Name) rely on mutable, reusable identifiers, so a re-issued UPN or email could match the wrong person's certificate. High-affinity bindings use identifiers unique to the certificate itself and are recommended, with the value stored in the user's certificateUserIds attribute.\nB and C are wrong: both are low affinity, acceptable only as a starting point.\nD is wrong: a trusted CA proves issuance, not that the certificate maps to the right account.",
fr:"A est correct : Microsoft classe les bindings par affinité. Les bindings à faible affinité (PrincipalName, RFC822Name) reposent sur des identifiants mutables et réutilisables, donc un UPN ou email réattribué pourrait correspondre au certificat de la mauvaise personne. Les bindings à forte affinité utilisent des identifiants propres au certificat et sont recommandés, la valeur étant stockée dans l'attribut certificateUserIds de l'utilisateur.\nB et C sont faux : les deux sont à faible affinité, acceptables seulement comme point de départ.\nD est faux : une autorité de confiance prouve l'émission, pas que le certificat corresponde au bon compte."}
},
{
id:"d2-050", domain:2, topic:"WHfB cloud Kerberos trust",
q:{en:"You are deploying Windows Hello for Business for hybrid users who must access on-premises file servers with SSO. Which trust model does Microsoft recommend, and what does it require?",
   fr:"Tu déploies Windows Hello for Business pour des utilisateurs hybrides qui doivent accéder à des serveurs de fichiers on-prem en SSO. Quel modèle de confiance Microsoft recommande-t-il, et qu'exige-t-il ?"},
options:[
 {en:"Cloud Kerberos trust, which requires an Entra Kerberos server object in AD and no PKI or certificates for the users", fr:"Cloud Kerberos trust, qui nécessite un objet serveur Entra Kerberos dans l'AD et aucune PKI ni certificat pour les utilisateurs"},
 {en:"Certificate trust, which is now the recommended default", fr:"Certificate trust, désormais le modèle par défaut recommandé"},
 {en:"Key trust, which requires no changes to Active Directory", fr:"Key trust, qui n'exige aucune modification d'Active Directory"},
 {en:"AD FS trust with a dedicated device registration service", fr:"AD FS trust avec un service dédié d'enregistrement d'appareils"}],
correct:[0],
explanation:{en:"A is correct: cloud Kerberos trust is the simplest and Microsoft-recommended model — you create the Entra Kerberos server object in AD, Entra ID issues partial TGTs, and no user certificates or PKI are needed.\nB is wrong: certificate trust requires a full PKI with certificate enrolment and is now the legacy option.\nC is wrong: key trust does require AD schema and domain controller prerequisites, and still needs a PKI for certificate-based on-prem authentication scenarios.\nD is wrong: AD FS-based device registration is a legacy path being retired.",
fr:"A est correct : le cloud Kerberos trust est le modèle le plus simple et recommandé par Microsoft — tu crées l'objet serveur Entra Kerberos dans l'AD, Entra ID émet des TGT partiels, et aucun certificat utilisateur ni PKI n'est nécessaire.\nB est faux : le certificate trust exige une PKI complète avec inscription de certificats et constitue désormais l'option historique.\nC est faux : le key trust impose bien des prérequis de schéma AD et de contrôleurs de domaine, et nécessite encore une PKI pour certains scénarios on-prem.\nD est faux : l'enregistrement d'appareils via AD FS est une voie historique en fin de vie."}
},
{
id:"d2-051", domain:2, topic:"Staged rollout",
q:{en:"Contoso is federated with AD FS and wants to move to password hash synchronization progressively, testing with 500 users first, without changing the domain's federation settings tenant-wide. What do you use?",
   fr:"Contoso est fédéré avec AD FS et veut passer progressivement à la synchronisation de hash de mot de passe, en testant d'abord avec 500 utilisateurs, sans changer les paramètres de fédération du domaine pour tout le tenant. Qu'utilises-tu ?"},
options:[
 {en:"Staged rollout, adding the pilot users' groups so they authenticate in the cloud while the domain stays federated", fr:"Le staged rollout, en ajoutant les groupes d'utilisateurs pilotes pour qu'ils s'authentifient dans le cloud alors que le domaine reste fédéré"},
 {en:"Convert the domain to managed with Set-MsolDomainAuthentication, then revert if there are issues", fr:"Convertir le domaine en managed avec Set-MsolDomainAuthentication, puis revenir en arrière en cas de problème"},
 {en:"Create a second verified domain for the pilot users", fr:"Créer un second domaine vérifié pour les utilisateurs pilotes"},
 {en:"Enable Seamless SSO, which bypasses AD FS for selected users", fr:"Activer Seamless SSO, qui contourne AD FS pour certains utilisateurs"}],
correct:[0],
explanation:{en:"A is correct: staged rollout is built exactly for this — selected groups (up to 10 groups and 50,000 users per feature) authenticate with PHS or PTA while the domain remains federated for everyone else, so you can validate and roll back per group.\nB is wrong: converting the domain is the all-at-once cutover the requirement forbids.\nC is wrong: adding a domain means changing users' UPNs, a far more disruptive change.\nD is wrong: Seamless SSO is a convenience feature for domain-joined devices, not a way to select an authentication method for a subset of users.",
fr:"A est correct : le staged rollout est fait précisément pour ça — des groupes sélectionnés (jusqu'à 10 groupes et 50 000 utilisateurs par fonctionnalité) s'authentifient avec PHS ou PTA tandis que le domaine reste fédéré pour les autres, ce qui permet de valider et de revenir en arrière groupe par groupe.\nB est faux : convertir le domaine, c'est la bascule totale que l'énoncé interdit.\nC est faux : ajouter un domaine implique de changer les UPN des utilisateurs, un changement bien plus perturbant.\nD est faux : Seamless SSO est un confort pour les appareils joints au domaine, pas un moyen de choisir la méthode d'authentification d'un sous-ensemble d'utilisateurs."}
},
{
id:"d2-052", domain:2, topic:"Authentication strength for admins",
q:{en:"You must ensure that anyone activating the Global Administrator role uses phishing-resistant MFA, while ordinary users may keep using the Authenticator app. What do you configure?",
   fr:"Tu dois garantir que toute personne activant le rôle Global Administrator utilise du MFA résistant au phishing, alors que les utilisateurs ordinaires peuvent continuer avec l'app Authenticator. Que configures-tu ?"},
options:[
 {en:"A Conditional Access policy targeting the directory role that requires the built-in Phishing-resistant MFA authentication strength", fr:"Une stratégie d'accès conditionnel ciblant le rôle d'annuaire, exigeant l'authentication strength intégrée Phishing-resistant MFA"},
 {en:"Disable the Authenticator app tenant-wide", fr:"Désactiver l'app Authenticator pour tout le tenant"},
 {en:"Set the sign-in frequency for admins to every sign-in", fr:"Mettre la fréquence de connexion des admins à chaque connexion"},
 {en:"Enable Security defaults", fr:"Activer les Security defaults"}],
correct:[0],
explanation:{en:"A is correct: authentication strengths let one policy demand a specific class of credential — the phishing-resistant strength accepts only FIDO2 security keys, Windows Hello for Business and certificate-based authentication — and CA can target directory roles, so ordinary users are unaffected. Combining it with an authentication context also protects PIM activation.\nB is wrong: that punishes all users and removes a good method for them.\nC is wrong: frequency controls how often, not how strong.\nD is wrong: Security defaults apply one blanket baseline and cannot express per-role strength.",
fr:"A est correct : les authentication strengths permettent à une stratégie d'exiger une classe précise d'identifiant — la strength résistante au phishing n'accepte que les clés FIDO2, Windows Hello for Business et l'authentification par certificat — et l'accès conditionnel peut cibler des rôles d'annuaire, donc les utilisateurs ordinaires ne sont pas touchés. La combiner à un authentication context protège aussi l'activation PIM.\nB est faux : cela pénalise tous les utilisateurs et leur retire une bonne méthode.\nC est faux : la fréquence contrôle la répétition, pas la robustesse.\nD est faux : les Security defaults appliquent une base unique et ne savent pas exprimer une force par rôle."}
},
{
id:"d2-053", domain:2, topic:"Sign-in frequency vs CAE",
q:{en:"You set sign-in frequency to 1 hour for a sensitive application. A security analyst asks whether a user disabled in Entra ID could still use the app for up to an hour. What is the accurate answer?",
   fr:"Tu règles la fréquence de connexion à 1 heure pour une application sensible. Un analyste demande si un utilisateur désactivé dans Entra ID pourrait encore utiliser l'application pendant une heure. Quelle est la réponse exacte ?"},
options:[
 {en:"No, if the app supports Continuous Access Evaluation, which revokes the session within minutes on critical events such as account disable, password change or admin-triggered revocation", fr:"Non, si l'application supporte la Continuous Access Evaluation, qui révoque la session en quelques minutes sur les événements critiques comme la désactivation du compte, le changement de mot de passe ou une révocation déclenchée par un admin"},
 {en:"Yes, always — access tokens are valid until sign-in frequency expires", fr:"Oui, toujours — les jetons d'accès sont valides jusqu'à expiration de la fréquence de connexion"},
 {en:"No, because sign-in frequency revokes tokens instantly", fr:"Non, car la fréquence de connexion révoque les jetons instantanément"},
 {en:"Yes, and nothing can shorten it", fr:"Oui, et rien ne peut raccourcir ce délai"}],
correct:[0],
explanation:{en:"A is correct: sign-in frequency only forces reauthentication when the interval elapses, whereas CAE lets Entra ID push critical events to CAE-capable resources (Exchange, SharePoint, Teams and Graph) so the session is terminated in near real time. Both are complementary.\nB is wrong: it is true only for apps that do not support CAE.\nC is wrong: sign-in frequency does not revoke anything, it schedules reauthentication.\nD is wrong: CAE and explicit session revocation both shorten it.",
fr:"A est correct : la fréquence de connexion ne force la réauthentification qu'à l'échéance de l'intervalle, tandis que la CAE permet à Entra ID de pousser les événements critiques vers les ressources compatibles (Exchange, SharePoint, Teams et Graph) pour que la session soit terminée quasi en temps réel. Les deux sont complémentaires.\nB est faux : ce n'est vrai que pour les applications ne supportant pas la CAE.\nC est faux : la fréquence de connexion ne révoque rien, elle planifie une réauthentification.\nD est faux : la CAE et la révocation explicite de session raccourcissent ce délai."}
},
{
id:"d2-054", domain:2, topic:"CA - device platform block",
q:{en:"Policy states that corporate email must not be accessible from Linux desktops or from ChromeOS, while Windows, macOS, iOS and Android remain allowed. What is the correct Conditional Access configuration?",
   fr:"La politique impose que la messagerie d'entreprise ne soit pas accessible depuis les postes Linux ni depuis ChromeOS, alors que Windows, macOS, iOS et Android restent autorisés. Quelle est la bonne configuration d'accès conditionnel ?"},
options:[
 {en:"A policy with the device platforms condition including Linux and ChromeOS, and the Block access grant control", fr:"Une stratégie avec la condition plateformes d'appareils incluant Linux et ChromeOS, et le contrôle d'octroi Bloquer l'accès"},
 {en:"A policy including all platforms with Block, excluding nothing", fr:"Une stratégie incluant toutes les plateformes avec Bloquer, sans exclusion"},
 {en:"A device filter on operatingSystem, which does not support unmanaged devices", fr:"Un filtre d'appareils sur operatingSystem, qui ne gère pas les appareils non gérés"},
 {en:"An Intune compliance policy, since Conditional Access cannot see the platform", fr:"Une stratégie de conformité Intune, car l'accès conditionnel ne voit pas la plateforme"}],
correct:[0],
explanation:{en:"A is correct: the device platforms condition is evaluated from the user agent and lets you include exactly the platforms to block, leaving the others untouched. Remember platform is a client-declared signal, so pair it with stronger controls for sensitive data.\nB is wrong: that locks out everyone, including the allowed platforms.\nC is wrong: device filters evaluate registered device attributes, so unregistered Linux clients would not match — the platform condition is the right tool.\nD is wrong: Conditional Access does evaluate device platform; compliance is a different signal requiring enrolment.",
fr:"A est correct : la condition plateformes d'appareils est évaluée depuis le user agent et permet d'inclure exactement les plateformes à bloquer, sans toucher aux autres. Rappelle-toi que la plateforme est un signal déclaré par le client, donc à combiner avec des contrôles plus forts pour les données sensibles.\nB est faux : cela bloque tout le monde, y compris les plateformes autorisées.\nC est faux : les filtres d'appareils évaluent les attributs d'appareils enregistrés, donc des clients Linux non enregistrés ne correspondraient pas — la condition de plateforme est l'outil adapté.\nD est faux : l'accès conditionnel évalue bien la plateforme ; la conformité est un autre signal qui exige l'inscription."}
},
{
id:"d2-055", domain:2, topic:"SSPR rollout",
q:{en:"You enable SSPR for a pilot group and set \"Require users to register when signing in\" to Yes with a 180-day reconfirmation. A pilot user reports they were never prompted. What is the most likely explanation?",
   fr:"Tu actives le SSPR pour un groupe pilote et mets « Exiger l'inscription des utilisateurs à la connexion » sur Oui avec une reconfirmation à 180 jours. Un utilisateur pilote signale n'avoir jamais été invité à s'inscrire. Quelle est l'explication la plus probable ?"},
options:[
 {en:"The user already has the required number of authentication methods registered, so there is nothing left to register", fr:"L'utilisateur a déjà le nombre requis de méthodes d'authentification enregistrées, il ne reste donc rien à inscrire"},
 {en:"SSPR registration prompts only appear for administrators", fr:"Les invitations d'inscription SSPR n'apparaissent que pour les administrateurs"},
 {en:"The user must have Entra ID P2", fr:"L'utilisateur doit avoir Entra ID P2"},
 {en:"Registration enforcement requires Security defaults to be enabled", fr:"L'enforcement de l'inscription exige que les Security defaults soient activés"}],
correct:[0],
explanation:{en:"A is correct: the interrupt only fires when the user is missing methods relative to the policy's required count — someone who already registered Authenticator and a phone (or was covered by the MFA registration policy) simply sails through.\nB is wrong: enforcement targets the selected group of users; admins have their own stricter SSPR rules.\nC is wrong: SSPR for members requires P1, not P2.\nD is wrong: Security defaults and Conditional Access-based registration are alternatives, not prerequisites, and Security defaults cannot coexist with CA policies.",
fr:"A est correct : l'interruption ne se déclenche que si l'utilisateur manque de méthodes par rapport au nombre requis par la stratégie — quelqu'un qui a déjà enregistré Authenticator et un téléphone (ou qui a été couvert par la stratégie d'inscription MFA) passe simplement sans invite.\nB est faux : l'enforcement cible le groupe d'utilisateurs sélectionné ; les admins ont leurs propres règles SSPR plus strictes.\nC est faux : le SSPR pour les membres nécessite P1, pas P2.\nD est faux : les Security defaults et l'inscription via accès conditionnel sont des alternatives, pas des prérequis, et les Security defaults ne cohabitent pas avec des stratégies CA."}
}
];
