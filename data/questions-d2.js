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
}
];
