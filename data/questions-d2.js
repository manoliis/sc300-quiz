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
 {en:"Service desk accounts", fr:"Les comptes du service desk"},
 {en:"Emergency access (break-glass) accounts", fr:"Les comptes d'accès d'urgence (break-glass)"},
 {en:"Guest accounts", fr:"Les comptes guests"},
 {en:"All Global Administrators", fr:"Tous les Global Administrators"}],
correct:[1],
explanation:{en:"A is wrong: service desk accounts are prime targets and must comply.\nB is correct: 2 break-glass accounts (cloud-only, Global Admin, phishing-resistant credentials stored securely, sign-ins monitored) must be excluded from every CA policy to guarantee access if CA misconfiguration or an MFA outage locks everyone out.\nC is wrong: guests should generally be covered by MFA policies too.\nD is wrong: regular Global Admins should have MORE protection (phishing-resistant MFA), not exclusions.",
fr:"A est faux : les comptes du service desk sont des cibles de choix et doivent se conformer.\nB est correct : 2 comptes break-glass (cloud-only, Global Admin, credentials résistants au phishing stockés en sécurité, connexions surveillées) doivent être exclus de toutes les politiques CA pour garantir l'accès si une mauvaise config CA ou une panne MFA bloque tout le monde.\nC est faux : les guests doivent en général aussi être couverts par le MFA.\nD est faux : les Global Admins normaux doivent avoir PLUS de protection (MFA résistant au phishing), pas des exclusions."}
},
{
id:"d2-003", domain:2, topic:"Temporary Access Pass",
q:{en:"New employees must register a FIDO2 passkey as their only authentication method, without ever having a password. What do you give them for their first sign-in?",
   fr:"Les nouveaux employés doivent enregistrer une passkey FIDO2 comme seule méthode d'authentification, sans jamais avoir de mot de passe. Que leur donnes-tu pour leur première connexion ?"},
options:[
 {en:"A certificate", fr:"Un certificat"},
 {en:"A temporary password", fr:"Un mot de passe temporaire"},
 {en:"A Temporary Access Pass (TAP)", fr:"Un Temporary Access Pass (TAP)"},
 {en:"An SMS one-time code", fr:"Un code SMS à usage unique"}],
correct:[2],
explanation:{en:"A is wrong: certificate-based auth requires PKI deployment and issuing certificates — not the onboarding bootstrap tool here.\nB is wrong: a temporary password contradicts the passwordless requirement.\nC is correct: a TAP is a time-limited (and optionally one-time-use) passcode that satisfies strong authentication, letting the user bootstrap passwordless methods like FIDO2 passkeys or Authenticator without a password. Enable the TAP policy in Authentication methods first.\nD is wrong: SMS must first be registered, which requires signing in — chicken-and-egg; also weak.",
fr:"A est faux : l'auth par certificat exige une PKI et l'émission de certificats — pas l'outil d'amorçage d'onboarding ici.\nB est faux : un mot de passe temporaire contredit l'exigence passwordless.\nC est correct : un TAP est un code limité dans le temps (et optionnellement à usage unique) qui vaut authentification forte, permettant d'amorcer des méthodes passwordless comme les passkeys FIDO2 ou Authenticator sans mot de passe. Active d'abord la politique TAP dans Authentication methods.\nD est faux : le SMS doit d'abord être enregistré, ce qui nécessite une connexion — cercle vicieux ; en plus c'est faible."}
},
{
id:"d2-004", domain:2, topic:"Authentication strengths",
q:{en:"You must require phishing-resistant MFA (FIDO2, Windows Hello for Business, or CBA) for all Global Administrators, while regular users keep standard MFA. What do you configure?",
   fr:"Tu dois exiger un MFA résistant au phishing (FIDO2, Windows Hello for Business ou CBA) pour tous les Global Administrators, tandis que les utilisateurs normaux gardent le MFA standard. Que configures-tu ?"},
options:[
 {en:"Per-user MFA enforcement for admins", fr:"Le MFA par utilisateur (per-user) pour les admins"},
 {en:"Security defaults", fr:"Les security defaults"},
 {en:"An Identity Protection user risk policy", fr:"Une politique de user risk d'Identity Protection"},
 {en:"A Conditional Access policy targeting the Global Administrator role with the \"Phishing-resistant MFA\" authentication strength", fr:"Une politique Conditional Access ciblant le rôle Global Administrator avec l'authentication strength « Phishing-resistant MFA »"}],
correct:[3],
explanation:{en:"A is wrong: per-user MFA (legacy) cannot require specific methods.\nB is wrong: security defaults apply the same baseline to everyone and cannot select methods.\nC is wrong: risk policies react to risk; they don't enforce specific method types for a role.\nD is correct: CA policies can target directory roles and use authentication strengths — the built-in \"Phishing-resistant MFA\" strength only accepts FIDO2 passkeys, Windows Hello for Business, or certificate-based authentication.",
fr:"A est faux : le MFA per-user (legacy) ne peut pas exiger des méthodes précises.\nB est faux : les security defaults appliquent la même base à tous et ne choisissent pas les méthodes.\nC est faux : les politiques de risque réagissent au risque ; elles n'imposent pas des types de méthodes pour un rôle.\nD est correct : les politiques CA peuvent cibler des rôles d'annuaire et utiliser des authentication strengths — la strength intégrée « Phishing-resistant MFA » n'accepte que passkeys FIDO2, Windows Hello for Business ou l'authentification par certificat."}
},
{
id:"d2-005", domain:2, topic:"Legacy authentication",
q:{en:"Sign-in logs show attacks using IMAP and POP3 with password spray. You must block legacy authentication tenant-wide using Conditional Access. How?",
   fr:"Les sign-in logs montrent des attaques via IMAP et POP3 avec password spray. Tu dois bloquer la legacy authentication sur tout le tenant avec Conditional Access. Comment ?"},
options:[
 {en:"Create a CA policy for all users, condition Client apps = \"Exchange ActiveSync clients\" and \"Other clients\", grant control = Block access", fr:"Créer une politique CA pour tous les utilisateurs, condition Client apps = « Exchange ActiveSync clients » et « Other clients », contrôle = Block access"},
 {en:"Disable IMAP in each user's mailbox settings", fr:"Désactiver IMAP dans les paramètres de chaque boîte mail"},
 {en:"Enable Continuous Access Evaluation", fr:"Activer Continuous Access Evaluation"},
 {en:"Create a CA policy requiring MFA for all users", fr:"Créer une politique CA exigeant le MFA pour tous"}],
correct:[0],
explanation:{en:"A is correct: legacy protocols appear under the Client apps condition as Exchange ActiveSync clients and \"Other clients\" (IMAP/POP/SMTP/older Office). Blocking them stops password spray via these protocols since legacy auth can't do MFA anyway.\nB is wrong: per-mailbox settings are Exchange-side, unscalable, and don't cover all legacy auth paths to other workloads.\nC is wrong: CAE revokes tokens in near real time; it doesn't block legacy protocols.\nD is wrong: legacy protocols cannot perform MFA — some are simply blocked implicitly, but the explicit block policy is the documented approach; MFA-only policy leaves gaps in evaluation ordering.",
fr:"A est correct : les protocoles legacy apparaissent sous la condition Client apps comme Exchange ActiveSync clients et « Other clients » (IMAP/POP/SMTP/vieux Office). Les bloquer stoppe le password spray via ces protocoles, qui ne savent de toute façon pas faire de MFA.\nB est faux : les réglages par boîte mail sont côté Exchange, non scalables, et ne couvrent pas tous les chemins legacy vers d'autres workloads.\nC est faux : CAE révoque des tokens quasi temps réel ; il ne bloque pas les protocoles legacy.\nD est faux : les protocoles legacy ne peuvent pas faire de MFA — la politique de blocage explicite est l'approche documentée."}
},
{
id:"d2-006", domain:2, topic:"Named locations",
q:{en:"Your security team requires that access to the Azure management portal is blocked from outside France. What do you configure? (Select all that apply)",
   fr:"L'équipe sécurité exige que l'accès au portail de gestion Azure soit bloqué hors de France. Que configures-tu ? (Sélectionne toutes les bonnes réponses)"},
options:[
 {en:"A CA policy targeting \"Windows Azure Service Management API / Microsoft Admin Portals\" that blocks access when location is \"Any\" excluding the France named location", fr:"Une politique CA ciblant « Windows Azure Service Management API / Microsoft Admin Portals » qui bloque l'accès quand la localisation est « Any » en excluant la named location France"},
 {en:"A dynamic group of French users", fr:"Un groupe dynamique des utilisateurs français"},
 {en:"An Azure Firewall rule", fr:"Une règle Azure Firewall"},
 {en:"A named location for France (countries) in Conditional Access", fr:"Une named location pour la France (pays) dans Conditional Access"}],
correct:[0,3],
explanation:{en:"A and D are correct: you first define France as a country-based named location, then create a CA policy on the management resources (Microsoft Admin Portals / Windows Azure Service Management API) with location condition including Any location and excluding France, grant = Block. This is the standard geo-blocking pattern.\nB is wrong: the requirement is WHERE the sign-in comes from, not the user's nationality/attributes.\nC is wrong: Azure Firewall protects network workloads, not Entra sign-in to portals.",
fr:"A et D sont corrects : tu définis d'abord la France comme named location par pays, puis tu crées une politique CA sur les ressources d'administration (Microsoft Admin Portals / Windows Azure Service Management API) avec la condition de localisation incluant Any et excluant la France, contrôle = Block. C'est le schéma standard de géo-blocage.\nB est faux : l'exigence porte sur l'ORIGINE de la connexion, pas la nationalité/les attributs de l'utilisateur.\nC est faux : Azure Firewall protège des workloads réseau, pas la connexion Entra aux portails."}
},
{
id:"d2-007", domain:2, topic:"ID Protection - user risk",
q:{en:"Microsoft finds a user's credentials in a public breach dump. Which risk detection fires, and what is the Microsoft-recommended automated remediation?",
   fr:"Microsoft trouve les identifiants d'un utilisateur dans un dump public de fuite. Quelle détection de risque se déclenche, et quelle est la remédiation automatisée recommandée par Microsoft ?"},
options:[
 {en:"Atypical travel (sign-in risk) → block access", fr:"Atypical travel (sign-in risk) → bloquer l'accès"},
 {en:"Leaked credentials (sign-in risk) → require MFA", fr:"Leaked credentials (sign-in risk) → exiger le MFA"},
 {en:"Leaked credentials (user risk) → CA policy: user risk High requires a secure password change", fr:"Leaked credentials (user risk) → politique CA : user risk High exige un changement de mot de passe sécurisé"},
 {en:"Password spray (user risk) → disable the account", fr:"Password spray (user risk) → désactiver le compte"}],
correct:[2],
explanation:{en:"A is wrong: atypical travel is a sign-in risk, unrelated to breach dumps.\nB is wrong: leaked credentials is user risk, not sign-in risk; MFA alone leaves the compromised password valid.\nC is correct: leaked credentials is a USER risk detection (the account itself is likely compromised). The recommended policy: user risk High → require password change (with MFA to prove identity) — the user self-remediates and the risk closes automatically.\nD is wrong: password spray is a sign-in risk detection, and disabling the account is manual heavy-handed remediation, not the recommended automated flow.",
fr:"A est faux : atypical travel est un sign-in risk, sans rapport avec les fuites.\nB est faux : leaked credentials est un user risk, pas un sign-in risk ; le MFA seul laisse le mot de passe compromis valide.\nC est correct : leaked credentials est une détection de USER risk (le compte lui-même est probablement compromis). Politique recommandée : user risk High → exiger un changement de mot de passe (avec MFA pour prouver l'identité) — l'utilisateur s'auto-remédie et le risque se ferme automatiquement.\nD est faux : password spray est une détection de sign-in risk, et désactiver le compte est une remédiation manuelle brutale, pas le flux automatisé recommandé."}
},
{
id:"d2-008", domain:2, topic:"ID Protection - licensing",
q:{en:"Which license is required to configure risk-based Conditional Access policies (sign-in risk / user risk conditions)?",
   fr:"Quelle licence est requise pour configurer des politiques Conditional Access basées sur le risque (conditions sign-in risk / user risk) ?"},
options:[
 {en:"Microsoft Entra ID Free", fr:"Microsoft Entra ID Free"},
 {en:"Microsoft Entra ID Governance", fr:"Microsoft Entra ID Governance"},
 {en:"Microsoft Entra ID P1", fr:"Microsoft Entra ID P1"},
 {en:"Microsoft Entra ID P2", fr:"Microsoft Entra ID P2"}],
correct:[3],
explanation:{en:"A is wrong: Free only surfaces basic security defaults; no CA at all.\nB is wrong: the Governance SKU adds lifecycle/entitlement features on top, not Identity Protection.\nC is wrong: P1 gives you Conditional Access itself but NOT the risk conditions.\nD is correct: Identity Protection (risk detections + risk-based CA conditions) requires Entra ID P2.",
fr:"A est faux : Free n'offre que les security defaults ; pas de CA du tout.\nB est faux : le SKU Governance ajoute des fonctionnalités de cycle de vie/entitlement, pas Identity Protection.\nC est faux : P1 donne le Conditional Access lui-même mais PAS les conditions de risque.\nD est correct : Identity Protection (détections de risque + conditions de risque dans CA) nécessite Entra ID P2."}
},
{
id:"d2-009", domain:2, topic:"SSPR",
q:{en:"You enable SSPR for a pilot group. Requirements: users must verify with TWO methods, and security questions must NOT be allowed. Where do you configure this?",
   fr:"Tu actives SSPR pour un groupe pilote. Exigences : les utilisateurs doivent vérifier avec DEUX méthodes, et les questions de sécurité sont INTERDITES. Où configures-tu ça ?"},
options:[
 {en:"Password reset > Authentication methods: set \"Number of methods required to reset\" = 2 and uncheck Security questions", fr:"Password reset > Authentication methods : « Number of methods required to reset » = 2 et décocher Security questions"},
 {en:"Authentication strengths", fr:"Authentication strengths"},
 {en:"Conditional Access > Grant controls", fr:"Conditional Access > contrôles Grant"},
 {en:"Identity Protection > MFA registration policy", fr:"Identity Protection > politique d'enregistrement MFA"}],
correct:[0],
explanation:{en:"A is correct: SSPR settings live under Entra ID > Password reset: scope (None/Selected/All), number of methods required (1 or 2), and which methods are allowed (email, phone, Authenticator, security questions...).\nB is wrong: authentication strengths apply to sign-in via CA, not to SSPR flows.\nC is wrong: CA grant controls govern access to apps, not the SSPR method policy.\nD is wrong: the registration policy pushes users to register MFA info; it doesn't set SSPR verification requirements.",
fr:"A est correct : les paramètres SSPR sont dans Entra ID > Password reset : portée (None/Selected/All), nombre de méthodes requises (1 ou 2), et méthodes autorisées (email, téléphone, Authenticator, questions de sécurité...).\nB est faux : les authentication strengths s'appliquent à la connexion via CA, pas aux parcours SSPR.\nC est faux : les contrôles Grant de CA gouvernent l'accès aux apps, pas la politique de méthodes SSPR.\nD est faux : la politique d'enregistrement pousse à enregistrer les infos MFA ; elle ne définit pas les exigences de vérification SSPR."}
},
{
id:"d2-010", domain:2, topic:"Password protection",
q:{en:"You must prevent users in on-premises AD from setting passwords containing your company name and local sports teams. Deployment must not disrupt users initially. What do you deploy? (Select all that apply)",
   fr:"Tu dois empêcher les utilisateurs de l'AD on-prem de définir des mots de passe contenant le nom de l'entreprise et les équipes sportives locales. Le déploiement ne doit pas perturber les utilisateurs au début. Que déploies-tu ? (Sélectionne toutes les bonnes réponses)"},
options:[
 {en:"Deploy Entra Password Protection DC agents on all domain controllers + the proxy service, in Audit mode first", fr:"Déployer les agents DC Entra Password Protection sur tous les contrôleurs de domaine + le service proxy, en mode Audit d'abord"},
 {en:"Configure a fine-grained password policy in AD", fr:"Configurer une fine-grained password policy dans l'AD"},
 {en:"Enable password writeback", fr:"Activer le password writeback"},
 {en:"Add the terms to the custom banned password list in Entra ID (P1 required)", fr:"Ajouter les termes à la custom banned password list dans Entra ID (P1 requis)"}],
correct:[0,3],
explanation:{en:"A and D are correct: the custom banned password list (with fuzzy matching for variants) is defined in Entra ID, and extending enforcement to on-prem AD requires the Password Protection DC agent on every DC plus at least one proxy service. Start in Audit mode to measure impact, then switch to Enforced.\nB is wrong: AD fine-grained policies control length/complexity/age — they cannot ban specific words.\nC is wrong: password writeback is an SSPR feature, unrelated to banned passwords.",
fr:"A et D sont corrects : la custom banned password list (avec correspondance floue des variantes) se définit dans Entra ID, et l'extension à l'AD on-prem exige l'agent DC Password Protection sur chaque contrôleur + au moins un service proxy. Commence en mode Audit pour mesurer l'impact, puis passe en Enforced.\nB est faux : les fine-grained policies AD contrôlent longueur/complexité/âge — elles ne bannissent pas des mots précis.\nC est faux : le password writeback est une fonctionnalité SSPR, sans rapport."}
},
{
id:"d2-011", domain:2, topic:"Session revocation",
q:{en:"A user's laptop is stolen while signed in to Microsoft 365. You must terminate their existing sessions as fast as possible. Which TWO actions are most effective? (Select all that apply)",
   fr:"Le laptop d'un utilisateur est volé alors qu'il est connecté à Microsoft 365. Tu dois terminer ses sessions existantes au plus vite. Quelles DEUX actions sont les plus efficaces ? (Sélectionne toutes les bonnes réponses)"},
options:[
 {en:"Remove the user's licenses", fr:"Retirer les licences de l'utilisateur"},
 {en:"Delete the stolen device from Intune only", fr:"Supprimer seulement l'appareil volé d'Intune"},
 {en:"Revoke the user's sessions (invalidate refresh tokens)", fr:"Révoquer les sessions de l'utilisateur (invalider les refresh tokens)"},
 {en:"Disable the account / require password reset", fr:"Désactiver le compte / imposer une réinitialisation du mot de passe"}],
correct:[2,3],
explanation:{en:"A is wrong: license removal doesn't terminate authenticated sessions.\nB is wrong: retiring/wiping the device in Intune is a good complementary step, but deleting the device record alone doesn't kill cloud sessions.\nC and D are correct: revoking sessions invalidates refresh tokens so no new access tokens can be obtained, and disabling/resetting blocks any new authentication. With Continuous Access Evaluation, disabling the account also cuts existing access tokens in near real time for CAE-capable apps; otherwise access tokens die within ~1 hour.",
fr:"A est faux : retirer les licences ne termine pas les sessions authentifiées.\nB est faux : retirer/effacer l'appareil dans Intune est un bon complément, mais supprimer la fiche de l'appareil ne tue pas les sessions cloud.\nC et D sont corrects : révoquer les sessions invalide les refresh tokens (plus de nouveaux access tokens), et désactiver/réinitialiser bloque toute nouvelle authentification. Avec Continuous Access Evaluation, la désactivation coupe aussi les access tokens existants quasi en temps réel pour les apps compatibles CAE ; sinon ils expirent sous ~1 heure."}
},
{
id:"d2-012", domain:2, topic:"Windows Hello for Business",
q:{en:"What does Windows Hello for Business use to authenticate users?",
   fr:"Qu'utilise Windows Hello for Business pour authentifier les utilisateurs ?"},
options:[
 {en:"A roaming biometric profile stored in the cloud", fr:"Un profil biométrique itinérant stocké dans le cloud"},
 {en:"A password synced to the device", fr:"Un mot de passe synchronisé sur l'appareil"},
 {en:"An SMS code sent at each sign-in", fr:"Un code SMS envoyé à chaque connexion"},
 {en:"An asymmetric key pair protected by the device's TPM, unlocked by a local PIN or biometric gesture", fr:"Une paire de clés asymétriques protégée par le TPM de l'appareil, déverrouillée par un PIN local ou un geste biométrique"}],
correct:[3],
explanation:{en:"A is wrong: biometric data NEVER leaves the device — it is not stored in the cloud.\nB is wrong: WHfB replaces passwords entirely.\nC is wrong: no SMS involved.\nD is correct: WHfB is phishing-resistant, key-based (or certificate-based) authentication. The private key never leaves the TPM; the PIN/biometric only unlocks it locally — that's why a WHfB PIN is stronger than a password (device-bound, not replayable).",
fr:"A est faux : les données biométriques ne quittent JAMAIS l'appareil — pas de stockage cloud.\nB est faux : WHfB remplace complètement les mots de passe.\nC est faux : aucun SMS.\nD est correct : WHfB est une authentification résistante au phishing, basée sur des clés (ou certificats). La clé privée ne quitte jamais le TPM ; le PIN/biométrique la déverrouille localement — c'est pourquoi un PIN WHfB est plus fort qu'un mot de passe (lié à l'appareil, non rejouable)."}
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
 {en:"Automatic password rotation", fr:"La rotation automatique des mots de passe"},
 {en:"Near real-time enforcement of critical events (account disabled, password changed, network location change) on access tokens, instead of waiting for token expiry", fr:"L'application quasi temps réel des événements critiques (compte désactivé, mot de passe changé, changement de localisation réseau) sur les access tokens, au lieu d'attendre leur expiration"},
 {en:"Real-time sync between AD and Entra ID", fr:"La synchronisation temps réel entre AD et Entra ID"},
 {en:"Continuous MFA prompts every 10 minutes", fr:"Des invites MFA continues toutes les 10 minutes"}],
correct:[1],
explanation:{en:"A is wrong: no relation to password rotation.\nB is correct: with CAE, capable services (Exchange, SharePoint, Teams) subscribe to critical Entra events and revoke/re-evaluate long-lived tokens in near real time. It also enables strict IP location enforcement.\nC is wrong: directory sync is Entra Connect's job.\nD is wrong: CAE reduces friction — tokens actually live LONGER (up to 28h) because they can be revoked instantly.",
fr:"A est faux : aucun rapport avec la rotation des mots de passe.\nB est correct : avec CAE, les services compatibles (Exchange, SharePoint, Teams) s'abonnent aux événements critiques d'Entra et révoquent/réévaluent les tokens quasi en temps réel. Il permet aussi l'application stricte des emplacements IP.\nC est faux : la sync d'annuaire est le travail d'Entra Connect.\nD est faux : CAE réduit la friction — les tokens vivent en fait PLUS longtemps (jusqu'à 28h) car révocables instantanément."}
},
{
id:"d2-015", domain:2, topic:"Authentication context",
q:{en:"Your company stores highly confidential documents in one specific SharePoint site. Users must re-authenticate with phishing-resistant MFA when accessing THIS site only, not all of SharePoint. What do you use?",
   fr:"Ton entreprise stocke des documents très confidentiels dans un site SharePoint précis. Les utilisateurs doivent se ré-authentifier avec un MFA résistant au phishing pour accéder à CE site uniquement, pas à tout SharePoint. Qu'utilises-tu ?"},
options:[
 {en:"Protected actions", fr:"Des protected actions"},
 {en:"A CA policy targeting the SharePoint Online app", fr:"Une politique CA ciblant l'app SharePoint Online"},
 {en:"An authentication context: create it in CA, require the auth strength in a policy targeting the context, and label the site with it (via sensitivity label or site setting)", fr:"Un authentication context : créé dans CA, exigé par une politique ciblant ce contexte, et appliqué au site (via sensitivity label ou paramètre du site)"},
 {en:"A named location", fr:"Une named location"}],
correct:[2],
explanation:{en:"A is wrong: protected actions guard Entra admin permissions (like editing CA policies), not SharePoint content.\nB is wrong: targeting the SharePoint app applies the requirement to ALL sites.\nC is correct: authentication contexts let you tag specific resources/actions (a SharePoint site via sensitivity label, PIM activation, etc.) and attach a dedicated CA policy (e.g. phishing-resistant strength) that triggers only for that context.\nD is wrong: named locations define network zones, not per-site protection.",
fr:"A est faux : les protected actions protègent des permissions admin Entra (comme modifier les politiques CA), pas du contenu SharePoint.\nB est faux : cibler l'app SharePoint applique l'exigence à TOUS les sites.\nC est correct : les authentication contexts permettent d'étiqueter des ressources/actions précises (un site SharePoint via sensitivity label, l'activation PIM, etc.) et d'y attacher une politique CA dédiée (ex : strength résistante au phishing) qui ne se déclenche que pour ce contexte.\nD est faux : les named locations définissent des zones réseau, pas une protection par site."}
},
{
id:"d2-016", domain:2, topic:"Protected actions",
q:{en:"You must require phishing-resistant MFA specifically when ANY administrator attempts to modify Conditional Access policies, even if already signed in. What feature do you use?",
   fr:"Tu dois exiger un MFA résistant au phishing spécifiquement quand N'IMPORTE QUEL administrateur tente de modifier les politiques Conditional Access, même déjà connecté. Quelle fonctionnalité utilises-tu ?"},
options:[
 {en:"PIM approval workflow", fr:"Le workflow d'approbation PIM"},
 {en:"Sign-in frequency = every time", fr:"Sign-in frequency = every time"},
 {en:"A restricted management administrative unit", fr:"Une restricted management administrative unit"},
 {en:"Protected actions bound to an authentication context", fr:"Les protected actions liées à un authentication context"}],
correct:[3],
explanation:{en:"A is wrong: PIM approval gates role ACTIVATION, not each subsequent action.\nB is wrong: sign-in frequency reauthenticates for apps globally, not per specific admin permission.\nC is wrong: restricted AUs protect user/group objects, not CA policy operations.\nD is correct: protected actions bind specific Entra permissions (e.g. microsoft.directory/conditionalAccessPolicies/*) to an authentication context; a CA policy on that context enforces step-up (e.g. phishing-resistant MFA) at the moment the action is attempted.",
fr:"A est faux : l'approbation PIM contrôle l'ACTIVATION du rôle, pas chaque action ultérieure.\nB est faux : la sign-in frequency ré-authentifie pour les apps globalement, pas par permission admin précise.\nC est faux : les restricted AUs protègent des objets utilisateurs/groupes, pas les opérations sur les politiques CA.\nD est correct : les protected actions lient des permissions Entra précises (ex : microsoft.directory/conditionalAccessPolicies/*) à un authentication context ; une politique CA sur ce contexte impose le step-up (ex : MFA résistant au phishing) au moment où l'action est tentée."}
},
{
id:"d2-017", domain:2, topic:"MFA registration policy",
q:{en:"Many users have not registered for MFA, so they cannot self-remediate when sign-in risk policies require MFA. How do you force all users to register within 14 days?",
   fr:"Beaucoup d'utilisateurs n'ont pas enregistré le MFA, donc ils ne peuvent pas s'auto-remédier quand les politiques de sign-in risk exigent le MFA. Comment forcer tous les utilisateurs à s'enregistrer sous 14 jours ?"},
options:[
 {en:"Enable the Identity Protection MFA registration policy (or a registration campaign for Authenticator)", fr:"Activer la politique d'enregistrement MFA d'Identity Protection (ou une registration campaign pour Authenticator)"},
 {en:"Email users a registration link and hope for the best", fr:"Envoyer un lien d'enregistrement par email en croisant les doigts"},
 {en:"Enable per-user MFA for everyone", fr:"Activer le MFA per-user pour tout le monde"},
 {en:"Block sign-in for unregistered users", fr:"Bloquer la connexion des utilisateurs non enregistrés"}],
correct:[0],
explanation:{en:"A is correct: the MFA registration policy (Identity Protection, P2) prompts users to register at sign-in with a 14-day grace period; the registration campaign similarly nudges users to set up Microsoft Authenticator. A CA policy targeting the \"Register security information\" user action can secure the registration itself.\nB is wrong: not enforceable.\nC is wrong: legacy per-user MFA forces MFA but is the deprecated mechanism and creates a harsher experience than a managed registration rollout.\nD is wrong: blocking prevents registration entirely.",
fr:"A est correct : la politique d'enregistrement MFA (Identity Protection, P2) invite les utilisateurs à s'enregistrer à la connexion avec 14 jours de délai ; la registration campaign pousse de même vers Microsoft Authenticator. Une politique CA sur l'action « Register security information » peut sécuriser l'enregistrement lui-même.\nB est faux : non contraignant.\nC est faux : le MFA per-user (legacy) force le MFA mais c'est le mécanisme déprécié, plus brutal qu'un rollout d'enregistrement géré.\nD est faux : bloquer empêche complètement l'enregistrement."}
},
{
id:"d2-018", domain:2, topic:"Global Secure Access",
q:{en:"Your users access an on-premises legacy web app through VPN. You must replace VPN access with identity-centric Zero Trust access enforced by Conditional Access, using Microsoft's SSE solution. What do you deploy?",
   fr:"Tes utilisateurs accèdent à une app web legacy on-prem via VPN. Tu dois remplacer le VPN par un accès Zero Trust centré sur l'identité, appliqué par Conditional Access, avec la solution SSE de Microsoft. Que déploies-tu ?"},
options:[
 {en:"Site-to-site VPN to Azure", fr:"Un VPN site-à-site vers Azure"},
 {en:"Microsoft Entra Private Access (GSA client + private network connectors)", fr:"Microsoft Entra Private Access (client GSA + private network connectors)"},
 {en:"Microsoft Entra Internet Access", fr:"Microsoft Entra Internet Access"},
 {en:"Application Proxy only", fr:"Application Proxy uniquement"}],
correct:[1],
explanation:{en:"A is wrong: a site-to-site VPN is exactly the network-centric model we're replacing.\nB is correct: Private Access is the ZTNA component of Global Secure Access — users run the GSA client, traffic to private apps flows through Microsoft's edge to connectors on-prem, and each app (or Quick Access segment) can be gated by CA with MFA.\nC is wrong: Internet Access is the Secure Web Gateway for internet/SaaS traffic, not private apps.\nD is wrong: App Proxy publishes individual web apps and remains valid, but the question asks for the SSE/VPN-replacement solution covering TCP/UDP private resources broadly.",
fr:"A est faux : le VPN site-à-site est exactement le modèle réseau qu'on remplace.\nB est correct : Private Access est le composant ZTNA de Global Secure Access — les utilisateurs ont le client GSA, le trafic vers les apps privées passe par l'edge Microsoft vers des connecteurs on-prem, et chaque app (ou segment Quick Access) peut être protégée par CA avec MFA.\nC est faux : Internet Access est la Secure Web Gateway pour le trafic internet/SaaS, pas les apps privées.\nD est faux : App Proxy publie des apps web individuelles et reste valable, mais la question demande la solution SSE de remplacement du VPN couvrant largement TCP/UDP."}
},
{
id:"d2-019", domain:2, topic:"Global Secure Access",
q:{en:"You must ensure Microsoft 365 access is only possible from your organization's network paths protected by Global Secure Access, blocking stolen-token replay from outside. Which capability do you use?",
   fr:"Tu dois garantir que l'accès à Microsoft 365 n'est possible que depuis les chemins réseau de l'organisation protégés par Global Secure Access, pour bloquer le rejeu de tokens volés depuis l'extérieur. Quelle capacité utilises-tu ?"},
options:[
 {en:"A trusted named location with the office IP ranges", fr:"Une named location de confiance avec les IPs des bureaux"},
 {en:"Require hybrid-joined devices", fr:"Exiger des appareils hybrid-joined"},
 {en:"The \"compliant network\" check in Conditional Access (GSA Internet Access for Microsoft 365)", fr:"Le contrôle « compliant network » dans Conditional Access (GSA Internet Access for Microsoft 365)"},
 {en:"Sign-in frequency of 1 hour", fr:"Une sign-in frequency d'1 heure"}],
correct:[2],
explanation:{en:"A is wrong: IP lists don't cover remote workers and can be bypassed by attackers replaying tokens from any allowed egress; they're also painful to maintain.\nB is wrong: device state helps but doesn't stop replay of tokens issued on valid devices.\nC is correct: with GSA's Microsoft 365 traffic profile, sign-ins acquire a compliant-network signal; a CA policy requiring the compliant network blocks any token used outside GSA — defeating token theft/replay even from unknown IPs, without maintaining IP lists.\nD is wrong: shorter token life narrows the window but doesn't block replay.",
fr:"A est faux : les listes d'IPs ne couvrent pas les télétravailleurs et se contournent en rejouant les tokens depuis une sortie autorisée ; en plus c'est pénible à maintenir.\nB est faux : l'état de l'appareil aide mais n'empêche pas le rejeu de tokens émis sur des appareils valides.\nC est correct : avec le profil de trafic Microsoft 365 de GSA, les connexions acquièrent un signal « compliant network » ; une politique CA l'exigeant bloque tout token utilisé hors GSA — contrant le vol/rejeu de tokens même depuis des IPs inconnues, sans maintenir de listes d'IPs.\nD est faux : une durée de token plus courte réduit la fenêtre mais ne bloque pas le rejeu."}
},
{
id:"d2-020", domain:2, topic:"Risky sign-ins investigation",
q:{en:"A sign-in was flagged with \"unfamiliar sign-in properties\". After investigation, you confirm it was the legitimate user on a business trip. What should you do in Identity Protection?",
   fr:"Une connexion a été signalée « unfamiliar sign-in properties ». Après investigation, tu confirmes que c'était bien l'utilisateur légitime en déplacement professionnel. Que fais-tu dans Identity Protection ?"},
options:[
 {en:"Reset the user's password", fr:"Réinitialiser le mot de passe de l'utilisateur"},
 {en:"Delete the sign-in log entry", fr:"Supprimer l'entrée du sign-in log"},
 {en:"Confirm compromised", fr:"Confirmer la compromission (« Confirm compromised »)"},
 {en:"Confirm sign-in safe (or dismiss risk) so the model learns and the risk state closes", fr:"Confirmer la connexion comme sûre (« Confirm sign-in safe ») pour que le modèle apprenne et que l'état de risque se ferme"}],
correct:[3],
explanation:{en:"A is wrong: unnecessary friction for a confirmed-legitimate event.\nB is wrong: logs are immutable; you cannot (and should not) delete them.\nC is wrong: confirming compromised marks the user as high risk, triggering remediation policies for a legitimate sign-in.\nD is correct: \"Confirm sign-in safe\" tells Identity Protection the detection was a false positive — the risk closes and the ML model gets feedback.",
fr:"A est faux : friction inutile pour un événement confirmé légitime.\nB est faux : les logs sont immuables ; on ne peut pas (et ne doit pas) les supprimer.\nC est faux : confirmer la compromission marque l'utilisateur en risque élevé et déclenche la remédiation pour une connexion légitime.\nD est correct : « Confirm sign-in safe » indique à Identity Protection que la détection était un faux positif — le risque se ferme et le modèle ML apprend."}
},
{
id:"d2-021", domain:2, topic:"Entra Kerberos",
q:{en:"Users sign in with FIDO2 security keys but must access on-premises file shares that use Kerberos. What do you configure so cloud-authenticated users get Kerberos tickets?",
   fr:"Les utilisateurs se connectent avec des clés FIDO2 mais doivent accéder à des partages de fichiers on-prem qui utilisent Kerberos. Que configures-tu pour que les utilisateurs authentifiés cloud obtiennent des tickets Kerberos ?"},
options:[
 {en:"Microsoft Entra Kerberos: create a krbtgt/AzureAD server object so Entra ID issues partial TGTs for on-prem AD", fr:"Microsoft Entra Kerberos : créer l'objet serveur krbtgt/AzureAD pour qu'Entra ID émette des TGT partiels pour l'AD on-prem"},
 {en:"NTLM fallback", fr:"Le repli NTLM"},
 {en:"Seamless SSO", fr:"Seamless SSO"},
 {en:"AD FS with claims rules", fr:"AD FS avec des règles de claims"}],
correct:[0],
explanation:{en:"A is correct: Entra Kerberos (enabled via Entra Connect PowerShell, creating an Azure AD Kerberos server object in AD) lets Entra ID issue partial Kerberos TGTs after passwordless cloud sign-in, which DCs exchange for full TGTs — enabling access to on-prem resources (file shares, and it's also required for FIDO2/WHfB cloud Kerberos trust).\nB is wrong: NTLM is a legacy protocol to reduce, not a solution.\nC is wrong: Seamless SSO works the other direction (on-prem Kerberos to cloud).\nD is wrong: AD FS federates authentication; it doesn't bridge FIDO2 cloud sign-ins to Kerberos tickets.",
fr:"A est correct : Entra Kerberos (activé via PowerShell d'Entra Connect, créant un objet serveur Azure AD Kerberos dans l'AD) permet à Entra ID d'émettre des TGT Kerberos partiels après une connexion cloud passwordless, que les DC échangent contre des TGT complets — donnant accès aux ressources on-prem (partages ; requis aussi pour le cloud Kerberos trust de FIDO2/WHfB).\nB est faux : NTLM est un protocole legacy à réduire, pas une solution.\nC est faux : Seamless SSO marche dans l'autre sens (Kerberos on-prem vers le cloud).\nD est faux : AD FS fédère l'authentification ; il ne convertit pas les connexions FIDO2 cloud en tickets Kerberos."}
},
{
id:"d2-022", domain:2, topic:"Sign-in frequency",
q:{en:"Compliance requires that users accessing a finance app re-authenticate at least every 4 hours, even on trusted devices. What do you configure?",
   fr:"La conformité exige que les utilisateurs de l'app finance se ré-authentifient au moins toutes les 4 heures, même sur des appareils de confiance. Que configures-tu ?"},
options:[
 {en:"Reduce the access token lifetime globally", fr:"Réduire la durée de vie des access tokens globalement"},
 {en:"A CA policy targeting the finance app with session control \"Sign-in frequency\" = 4 hours", fr:"Une politique CA ciblant l'app finance avec le contrôle de session « Sign-in frequency » = 4 heures"},
 {en:"Disable persistent browser sessions tenant-wide", fr:"Désactiver les sessions de navigateur persistantes sur tout le tenant"},
 {en:"Require MFA in the grant controls", fr:"Exiger le MFA dans les contrôles Grant"}],
correct:[1],
explanation:{en:"A is wrong: configurable token lifetimes for this purpose are deprecated in favor of CA sign-in frequency, and a global change affects everything.\nB is correct: the sign-in frequency session control defines how often reauthentication is required for the targeted apps/users — exactly the per-app periodic reauth requirement.\nC is wrong: disabling persistence affects browser cookie persistence after closing, not a fixed 4-hour cadence.\nD is wrong: MFA defines HOW you authenticate, not how OFTEN.",
fr:"A est faux : les durées de tokens configurables pour ça sont dépréciées au profit de la sign-in frequency, et un changement global touche tout.\nB est correct : le contrôle de session sign-in frequency définit la fréquence de ré-authentification pour les apps/utilisateurs ciblés — exactement l'exigence de réauth périodique par app.\nC est faux : désactiver la persistance concerne les cookies après fermeture du navigateur, pas une cadence fixe de 4 heures.\nD est faux : le MFA définit COMMENT on s'authentifie, pas À QUELLE FRÉQUENCE."}
},
{
id:"d2-023", domain:2, topic:"Security defaults",
q:{en:"A small company on Entra ID Free wants baseline protection: MFA for admins, MFA registration for all users, and blocking of legacy authentication — at no extra cost. What do you recommend?",
   fr:"Une petite entreprise sur Entra ID Free veut une protection de base : MFA pour les admins, enregistrement MFA pour tous, blocage de la legacy authentication — sans coût supplémentaire. Que recommandes-tu ?"},
options:[
 {en:"Enable per-user MFA for every account", fr:"Activer le MFA per-user pour chaque compte"},
 {en:"Buy P2 for Identity Protection", fr:"Acheter P2 pour Identity Protection"},
 {en:"Enable security defaults", fr:"Activer les security defaults"},
 {en:"Buy P1 and build Conditional Access policies", fr:"Acheter P1 et construire des politiques Conditional Access"}],
correct:[2],
explanation:{en:"A is wrong: legacy per-user MFA is deprecated, has poor UX, and doesn't block legacy authentication by itself.\nB and D are wrong: valid but cost money — the requirement says no extra cost.\nC is correct: security defaults are free and enforce exactly that baseline (MFA registration for all, MFA for admins and when needed, legacy auth blocked, protection of privileged actions). Note: they cannot coexist with CA policies and offer no exclusions.",
fr:"A est faux : le MFA per-user est déprécié, pénible pour l'utilisateur, et ne bloque pas la legacy auth en soi.\nB et D sont faux : valables mais payants — l'exigence est « sans coût supplémentaire ».\nC est correct : les security defaults sont gratuits et imposent exactement cette base (enregistrement MFA pour tous, MFA pour les admins et quand nécessaire, legacy auth bloquée, protection des actions privilégiées). Note : incompatibles avec les politiques CA et sans exclusions possibles."}
},
{
id:"d2-024", domain:2, topic:"Device filters",
q:{en:"You must apply a Conditional Access policy blocking access ONLY from devices whose model attribute equals \"Surface Hub\". Which CA condition feature do you use?",
   fr:"Tu dois appliquer une politique Conditional Access bloquant l'accès UNIQUEMENT depuis les appareils dont l'attribut model vaut « Surface Hub ». Quelle fonctionnalité de condition CA utilises-tu ?"},
options:[
 {en:"Named locations", fr:"Les named locations"},
 {en:"Device platforms condition", fr:"La condition Device platforms"},
 {en:"A dynamic device group in the policy exclusions", fr:"Un groupe dynamique d'appareils dans les exclusions de la politique"},
 {en:"Filter for devices (device.model -eq \"Surface Hub\")", fr:"Filter for devices (device.model -eq \"Surface Hub\")"}],
correct:[3],
explanation:{en:"A is wrong: locations are network-based, not device-attribute-based.\nB is wrong: device platforms only distinguishes OS families (Windows, iOS...).\nC is wrong: CA user/group assignments target USERS; you can't assign device groups there.\nD is correct: the \"filter for devices\" condition supports rule expressions on device attributes (model, manufacturer, extensionAttributes, isCompliant, etc.) to include or exclude matching devices.",
fr:"A est faux : les locations sont basées réseau, pas attributs d'appareil.\nB est faux : device platforms ne distingue que les familles d'OS (Windows, iOS...).\nC est faux : les assignments utilisateurs/groupes de CA ciblent des UTILISATEURS ; on ne peut pas y mettre des groupes d'appareils.\nD est correct : la condition « filter for devices » supporte des expressions sur les attributs d'appareil (model, manufacturer, extensionAttributes, isCompliant, etc.) pour inclure ou exclure les appareils correspondants."}
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
 {en:"FIDO2 security keys", fr:"Des clés de sécurité FIDO2"},
 {en:"Microsoft Entra certificate-based authentication (CBA): upload the CA trust chain and configure username bindings and authentication binding policies", fr:"Microsoft Entra certificate-based authentication (CBA) : importer la chaîne de confiance de la CA et configurer les username bindings et authentication binding policies"},
 {en:"Keep AD FS — certificates require federation", fr:"Garder AD FS — les certificats exigent la fédération"},
 {en:"Windows Hello for Business", fr:"Windows Hello for Business"}],
correct:[1],
explanation:{en:"A and D are wrong: strong passwordless options, but they don't use the existing smart-card certificates.\nB is correct: Entra CBA natively validates X.509 certificates: you upload the trusted issuing CAs (and CRL endpoints), map certificate fields to user attributes (username binding, e.g. PrincipalName → UPN), and set binding rules to treat it as single or multifactor. CBA is phishing-resistant.\nC is wrong: that was the OLD requirement — native CBA specifically removes the AD FS dependency.",
fr:"A et D sont faux : bonnes options passwordless, mais elles n'utilisent pas les certificats des cartes à puce existantes.\nB est correct : le CBA d'Entra valide nativement les certificats X.509 : tu importes les CA émettrices de confiance (et les points CRL), tu mappes les champs du certificat aux attributs utilisateur (username binding, ex : PrincipalName → UPN), et tu définis les binding rules pour le traiter comme simple ou multifacteur. Le CBA est résistant au phishing.\nC est faux : c'était l'ANCIENNE exigence — le CBA natif supprime justement la dépendance à AD FS."}
},
{
id:"d2-027", domain:2, topic:"What If tool",
q:{en:"A user reports being unexpectedly blocked when accessing an app. You suspect a Conditional Access policy conflict. Which tool shows exactly which policies WOULD apply to a hypothetical sign-in by this user to this app?",
   fr:"Un utilisateur signale un blocage inattendu en accédant à une app. Tu suspectes un conflit de politiques Conditional Access. Quel outil montre exactement quelles politiques s'appliqueraient à une connexion hypothétique de cet utilisateur à cette app ?"},
options:[
 {en:"The provisioning logs", fr:"Les provisioning logs"},
 {en:"The audit logs", fr:"Les audit logs"},
 {en:"The Conditional Access What If tool", fr:"L'outil What If de Conditional Access"},
 {en:"Identity Secure Score", fr:"L'Identity Secure Score"}],
correct:[2],
explanation:{en:"A is wrong: provisioning logs cover SCIM/HR provisioning events.\nB is wrong: audit logs track directory changes (who modified what), not CA evaluation.\nC is correct: What If simulates a sign-in (user, app, IP, platform, risk...) and lists policies that apply / don't apply and why. Combine with the sign-in log's \"Conditional Access\" tab for what actually happened.\nD is wrong: Secure Score gives posture recommendations.",
fr:"A est faux : les provisioning logs couvrent les événements de provisioning SCIM/RH.\nB est faux : les audit logs tracent les changements d'annuaire (qui a modifié quoi), pas l'évaluation CA.\nC est correct : What If simule une connexion (utilisateur, app, IP, plateforme, risque...) et liste les politiques qui s'appliquent / ne s'appliquent pas et pourquoi. À combiner avec l'onglet « Conditional Access » du sign-in log pour ce qui s'est réellement passé.\nD est faux : le Secure Score donne des recommandations de posture."}
},
{
id:"d2-028", domain:2, topic:"Passkeys",
q:{en:"You want users to sign in with passkeys stored in Microsoft Authenticator. Where do you enable and scope this capability?",
   fr:"Tu veux que les utilisateurs se connectent avec des passkeys stockées dans Microsoft Authenticator. Où actives-tu et délimites-tu cette capacité ?"},
options:[
 {en:"Security defaults", fr:"Les security defaults"},
 {en:"Per-user MFA settings", fr:"Les réglages MFA per-user"},
 {en:"Conditional Access grant controls", fr:"Les contrôles Grant de Conditional Access"},
 {en:"Authentication methods policy > Passkey (FIDO2), with key restrictions (AAGUIDs) if needed, targeted to users/groups", fr:"Authentication methods policy > Passkey (FIDO2), avec restrictions de clés (AAGUIDs) si besoin, ciblée sur utilisateurs/groupes"}],
correct:[3],
explanation:{en:"A is wrong: security defaults don't manage individual methods.\nB is wrong: legacy per-user MFA doesn't handle passkeys.\nC is wrong: CA can REQUIRE strong methods via authentication strengths, but enabling/registration of the method happens in the Authentication methods policy.\nD is correct: passkeys are managed in the Authentication methods policy under Passkey (FIDO2). You can scope to groups and use key restrictions with AAGUIDs to allow only specific authenticators (e.g. Microsoft Authenticator's AAGUIDs or specific hardware keys).",
fr:"A est faux : les security defaults ne gèrent pas les méthodes individuellement.\nB est faux : le MFA per-user legacy ne gère pas les passkeys.\nC est faux : CA peut EXIGER des méthodes fortes via les authentication strengths, mais l'activation/enregistrement de la méthode se fait dans l'Authentication methods policy.\nD est correct : les passkeys se gèrent dans l'Authentication methods policy sous Passkey (FIDO2). Tu peux cibler des groupes et utiliser les restrictions de clés avec AAGUIDs pour n'autoriser que certains authenticators (ex : les AAGUIDs de Microsoft Authenticator ou des clés matérielles précises)."}
},
{
id:"d2-029", domain:2, topic:"CA policy evaluation",
q:{en:"Two Conditional Access policies apply to the same sign-in: Policy 1 requires MFA; Policy 2 blocks access. What is the result?",
   fr:"Deux politiques Conditional Access s'appliquent à la même connexion : la politique 1 exige le MFA ; la politique 2 bloque l'accès. Quel est le résultat ?"},
options:[
 {en:"Access is blocked — Block wins over all other controls", fr:"L'accès est bloqué — Block gagne sur tous les autres contrôles"},
 {en:"The most recently created policy wins", fr:"La politique créée le plus récemment gagne"},
 {en:"The user chooses which policy to satisfy", fr:"L'utilisateur choisit quelle politique satisfaire"},
 {en:"The user gets access after MFA", fr:"L'utilisateur accède après MFA"}],
correct:[0],
explanation:{en:"A is correct: CA policies are all evaluated and their controls combined — Block access always takes precedence. There is no policy ordering or priority.\nB is wrong: creation date is irrelevant; there's no ordering.\nC is wrong: users never choose; all applicable policies must be satisfied.\nD is wrong: MFA can't override a block.",
fr:"A est correct : toutes les politiques CA sont évaluées et leurs contrôles combinés — Block access a toujours la priorité. Il n'y a ni ordre ni priorité de politiques.\nB est faux : la date de création est sans importance ; pas d'ordre.\nC est faux : l'utilisateur ne choisit jamais ; toutes les politiques applicables doivent être satisfaites.\nD est faux : le MFA ne peut pas passer outre un blocage."}
},
{
id:"d2-030", domain:2, topic:"Authenticator security",
q:{en:"To defend against MFA fatigue (push bombing) attacks with Microsoft Authenticator, which features should you enable? (Select all that apply)",
   fr:"Pour te défendre contre les attaques de MFA fatigue (push bombing) avec Microsoft Authenticator, quelles fonctionnalités actives-tu ? (Sélectionne toutes les bonnes réponses)"},
options:[
 {en:"Additional context (app name and geographic location) in notifications", fr:"Le contexte additionnel (nom de l'app et localisation géographique) dans les notifications"},
 {en:"SMS as the default method", fr:"Le SMS comme méthode par défaut"},
 {en:"Longer session lifetimes", fr:"Des sessions plus longues"},
 {en:"Number matching", fr:"Le number matching"}],
correct:[0,3],
explanation:{en:"A and D are correct: number matching forces the user to type the number displayed on the sign-in screen (can't approve blindly), and showing the requesting app + location helps users spot fraudulent prompts. Both are configured in the Authenticator settings of the Authentication methods policy (number matching is now enforced by Microsoft).\nB is wrong: SMS is weaker and equally phishable.\nC is wrong: longer sessions reduce prompts but don't address malicious push approvals.",
fr:"A et D sont corrects : le number matching force l'utilisateur à saisir le nombre affiché sur l'écran de connexion (impossible d'approuver à l'aveugle), et l'affichage de l'app demandeuse + la localisation aide à repérer les invites frauduleuses. Les deux se configurent dans les réglages Authenticator de l'Authentication methods policy (le number matching est désormais imposé par Microsoft).\nB est faux : le SMS est plus faible et tout aussi phishable.\nC est faux : des sessions plus longues réduisent les invites mais ne traitent pas les approbations de push malveillants."}
},
{
id:"d2-031", domain:2, topic:"Report-only mode",
q:{en:"You must deploy a Conditional Access policy requiring MFA for all users, but you have to know the impact before enforcing it. What is the correct approach?",
   fr:"Tu dois déployer une stratégie d'accès conditionnel exigeant le MFA pour tous, mais tu dois connaître l'impact avant de l'appliquer. Quelle est la bonne approche ?"},
options:[
 {en:"Enable it On for a pilot group only, since report-only does not log anything", fr:"L'activer On pour un groupe pilote seulement, car le mode report-only ne journalise rien"},
 {en:"Use the What If tool, which records real sign-ins over time", fr:"Utiliser l'outil What If, qui enregistre les vraies connexions dans le temps"},
 {en:"Create the policy in report-only mode and analyse the report-only results in the sign-in logs and the Conditional Access Insights workbook", fr:"Créer la stratégie en mode report-only et analyser les résultats report-only dans les journaux de connexion et le workbook Conditional Access Insights"},
 {en:"Set the policy to Off and check the audit logs", fr:"Mettre la stratégie sur Off et consulter les journaux d'audit"}],
correct:[2],
explanation:{en:"A is wrong: a pilot group is a valid second step, but report-only does log results — that is its whole purpose.\nB is wrong: What If simulates one hypothetical sign-in you describe; it does not observe real traffic.\nC is correct: report-only evaluates the policy on every real sign-in and records what WOULD have happened (success/failure/user action required) without affecting the user, and the Insights workbook aggregates that.\nD is wrong: an Off policy is never evaluated, so nothing is recorded.",
fr:"A est faux : un groupe pilote est une deuxième étape valable, mais le report-only journalise bien les résultats — c'est tout son intérêt.\nB est faux : What If simule une connexion hypothétique que tu décris ; il n'observe pas le trafic réel.\nC est correct : le mode report-only évalue la stratégie à chaque vraie connexion et enregistre ce qui SE SERAIT passé (succès/échec/action requise) sans impacter l'utilisateur, et le workbook Insights agrège ces données.\nD est faux : une stratégie Off n'est jamais évaluée, donc rien n'est enregistré."}
},
{
id:"d2-032", domain:2, topic:"Authentication methods migration",
q:{en:"Your tenant still manages MFA methods in the legacy per-user MFA portal and legacy SSPR policy. You must consolidate everything into the Authentication methods policy. What should you use?",
   fr:"Ton tenant gère encore les méthodes MFA dans l'ancien portail MFA par utilisateur et l'ancienne stratégie SSPR. Tu dois tout consolider dans l'Authentication methods policy. Qu'utilises-tu ?"},
options:[
 {en:"Disable Security defaults, which performs the migration automatically", fr:"Désactiver les Security defaults, ce qui effectue la migration automatiquement"},
 {en:"Delete the legacy policies; the new policy inherits their settings", fr:"Supprimer les anciennes stratégies ; la nouvelle stratégie hérite de leurs réglages"},
 {en:"Re-register every user's methods manually", fr:"Réenregistrer manuellement les méthodes de chaque utilisateur"},
 {en:"The migration wizard in the Authentication methods policy, moving through Migration in progress to Migration complete", fr:"L'assistant de migration de l'Authentication methods policy, en passant par Migration in progress puis Migration complete"}],
correct:[3],
explanation:{en:"A is wrong: Security defaults are unrelated and cannot be combined with CA anyway.\nB is wrong: there is no automatic inheritance, and you cannot simply delete the legacy configuration.\nC is wrong: registrations are preserved; users do not re-enrol.\nD is correct: the guided migration has three states — pre-migration (legacy still authoritative), migration in progress (both evaluated so you can move method by method) and migration complete (only the Authentication methods policy applies). The legacy MFA and SSPR method policies are retired.",
fr:"A est faux : les Security defaults n'ont aucun lien et ne se combinent pas avec l'accès conditionnel de toute façon.\nB est faux : il n'y a pas d'héritage automatique, et on ne supprime pas simplement l'ancienne configuration.\nC est faux : les enregistrements sont conservés, les utilisateurs ne se réinscrivent pas.\nD est correct : la migration guidée a trois états — pre-migration (l'ancien reste maître), migration in progress (les deux sont évalués, tu migres méthode par méthode) et migration complete (seule l'Authentication methods policy s'applique). Les anciennes stratégies de méthodes MFA et SSPR sont retirées."}
},
{
id:"d2-033", domain:2, topic:"FIDO2 key restrictions",
q:{en:"Your company purchased a specific FIDO2 security key model and must ensure that no other brand of key can be registered. What do you configure?",
   fr:"Ton entreprise a acheté un modèle précis de clé de sécurité FIDO2 et doit garantir qu'aucune autre marque ne puisse être enregistrée. Que configures-tu ?"},
options:[
 {en:"Key restrictions in the FIDO2 authentication method policy, with an Allow list of the approved AAGUIDs", fr:"Les key restrictions dans la stratégie de méthode FIDO2, avec une liste d'autorisation des AAGUID approuvés"},
 {en:"Intune device configuration profiles", fr:"Des profils de configuration d'appareils Intune"},
 {en:"A Conditional Access policy requiring a compliant device", fr:"Une stratégie d'accès conditionnel exigeant un appareil conforme"},
 {en:"An authentication strength requiring phishing-resistant MFA", fr:"Une authentication strength exigeant du MFA résistant au phishing"}],
correct:[0],
explanation:{en:"A is correct: each FIDO2 model has an AAGUID, and the FIDO2 method policy lets you enforce an allow (or block) list of AAGUIDs, so only approved hardware can be registered.\nB is wrong: Intune manages devices, not which FIDO2 keys Entra ID accepts.\nC is wrong: device compliance says nothing about which security key is used.\nD is wrong: a phishing-resistant strength accepts ANY FIDO2 key, plus Windows Hello and CBA.",
fr:"A est correct : chaque modèle FIDO2 possède un AAGUID, et la stratégie de méthode FIDO2 permet d'imposer une liste d'autorisation (ou de blocage) d'AAGUID, donc seul le matériel approuvé peut être enregistré.\nB est faux : Intune gère les appareils, pas les clés FIDO2 acceptées par Entra ID.\nC est faux : la conformité de l'appareil ne dit rien de la clé de sécurité utilisée.\nD est faux : une strength résistante au phishing accepte N'IMPORTE QUELLE clé FIDO2, plus Windows Hello et CBA."}
},
{
id:"d2-034", domain:2, topic:"Authenticator number matching",
q:{en:"Users complain they approve Authenticator prompts by reflex and worry about MFA fatigue attacks. Which Authenticator settings directly address this?",
   fr:"Les utilisateurs disent approuver les notifications Authenticator par réflexe et craignent les attaques de fatigue MFA. Quels réglages d'Authenticator répondent directement à cela ?"},
options:[
 {en:"Switching everyone to SMS codes", fr:"Basculer tout le monde sur des codes SMS"},
 {en:"Number matching, plus additional context showing the application name and the sign-in geographic location", fr:"Le number matching, plus le contexte additionnel affichant le nom de l'application et la localisation géographique de la connexion"},
 {en:"Increasing the sign-in frequency to every hour", fr:"Augmenter la fréquence de connexion à toutes les heures"},
 {en:"Enabling Security defaults", fr:"Activer les Security defaults"}],
correct:[1],
explanation:{en:"A is wrong: SMS is weaker (SIM swap, interception) and is being de-emphasised.\nB is correct: number matching forces the user to read a number from the sign-in screen and type it in the app, which a reflex tap cannot satisfy, and app name plus location give the user the context to recognise a sign-in that is not theirs. Both are configured in the Authenticator method policy and number matching is now enforced by default.\nC is wrong: more prompts increase fatigue rather than reduce it.\nD is wrong: Security defaults enable basic MFA but do not add these protections as a configurable control.",
fr:"A est faux : le SMS est plus faible (SIM swap, interception) et est en voie de dépriorisation.\nB est correct : le number matching oblige l'utilisateur à lire un nombre sur l'écran de connexion et à le saisir dans l'app, ce qu'un tap réflexe ne peut pas satisfaire, et le nom de l'app plus la localisation donnent le contexte pour reconnaître une connexion qui n'est pas la sienne. Les deux se configurent dans la stratégie de méthode Authenticator et le number matching est désormais imposé par défaut.\nC est faux : plus d'invites augmente la fatigue au lieu de la réduire.\nD est faux : les Security defaults activent un MFA de base mais n'apportent pas ces protections comme contrôle configurable."}
},
{
id:"d2-035", domain:2, topic:"Smart lockout",
q:{en:"Which statement about Entra ID smart lockout is correct?",
   fr:"Quelle affirmation sur le smart lockout d'Entra ID est correcte ?"},
options:[
 {en:"It is only available with Entra ID P2", fr:"Il n'est disponible qu'avec Entra ID P2"},
 {en:"It replaces the need for Conditional Access", fr:"Il remplace le besoin d'accès conditionnel"},
 {en:"It locks the account after a threshold of failed attempts (10 by default) for an increasing duration, and it tracks familiar locations so the real user is less likely to be locked out by an attacker", fr:"Il verrouille le compte après un seuil d'échecs (10 par défaut) pour une durée croissante, et il distingue les emplacements familiers pour que le vrai utilisateur soit moins susceptible d'être verrouillé par un attaquant"},
 {en:"It permanently disables the account until an administrator intervenes", fr:"Il désactive définitivement le compte jusqu'à intervention d'un administrateur"}],
correct:[2],
explanation:{en:"A is wrong: smart lockout protects all tenants; only customizing the threshold/duration requires Entra ID P1 or P2.\nB is wrong: it is a brute-force defence, not an access-control engine.\nC is correct: smart lockout uses a configurable threshold and lockout duration that grows with repeated bad attempts, and it distinguishes familiar from unfamiliar sign-in locations so brute force from an attacker does not lock the legitimate user out.\nD is wrong: the lockout is temporary, not a permanent disable.",
fr:"A est faux : le smart lockout protège tous les tenants ; seule la personnalisation du seuil/durée nécessite Entra ID P1 ou P2.\nB est faux : c'est une défense contre le brute force, pas un moteur de contrôle d'accès.\nC est correct : le smart lockout utilise un seuil et une durée de verrouillage configurables qui augmentent avec les échecs répétés, et il distingue les emplacements de connexion familiers des inconnus pour qu'un brute force externe ne verrouille pas l'utilisateur légitime.\nD est faux : le verrouillage est temporaire, pas une désactivation définitive."}
},
{
id:"d2-036", domain:2, topic:"Custom banned passwords",
q:{en:"You must block passwords containing your brand names and local sports team names, both in the cloud AND when users change their password on a domain controller. What must you deploy?",
   fr:"Tu dois bloquer les mots de passe contenant tes noms de marque et ceux des clubs sportifs locaux, à la fois dans le cloud ET quand les utilisateurs changent leur mot de passe sur un contrôleur de domaine. Que dois-tu déployer ?"},
options:[
 {en:"A Conditional Access policy with password protection as a grant control", fr:"Une stratégie d'accès conditionnel avec la protection de mot de passe comme contrôle d'octroi"},
 {en:"A custom banned password list in Entra ID only — it applies to on-prem automatically", fr:"Une liste personnalisée dans Entra ID seulement — elle s'applique automatiquement à l'on-prem"},
 {en:"An AD fine-grained password policy", fr:"Une stratégie de mot de passe affinée AD"},
 {en:"A custom banned password list in Entra ID, plus the Entra Password Protection DC agent on domain controllers and the proxy service", fr:"Une liste de mots de passe interdits personnalisée dans Entra ID, plus l'agent DC Entra Password Protection sur les contrôleurs de domaine et le service proxy"}],
correct:[3],
explanation:{en:"A is wrong: Conditional Access has no such grant control; password protection is not an access decision.\nB is wrong: without the agents, on-prem password changes are never evaluated against the list.\nC is wrong: fine-grained policies enforce length and complexity, not a term dictionary.\nD is correct: the custom banned list (up to 1000 terms) is defined in Entra ID, and on-premises enforcement requires the DC agent installed on every writable DC plus the proxy service to download the policy.",
fr:"A est faux : l'accès conditionnel n'a pas ce contrôle d'octroi ; la protection de mot de passe n'est pas une décision d'accès.\nB est faux : sans les agents, les changements de mot de passe on-prem ne sont jamais confrontés à la liste.\nC est faux : les stratégies affinées imposent longueur et complexité, pas un dictionnaire de termes.\nD est correct : la liste interdite personnalisée (jusqu'à 1000 termes) est définie dans Entra ID, et l'application on-prem nécessite l'agent DC installé sur chaque DC inscriptible plus le service proxy pour télécharger la stratégie."}
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
 {en:"Administrators are always required to use two authentication methods for SSPR and cannot use security questions", fr:"Les administrateurs doivent toujours utiliser deux méthodes d'authentification pour le SSPR et ne peuvent pas utiliser les questions de sécurité"},
 {en:"Security questions are available to administrators if you enable them in the SSPR policy", fr:"Les questions de sécurité sont disponibles pour les administrateurs si tu les actives dans la stratégie SSPR"},
 {en:"Combined registration requires Entra ID P2", fr:"L'inscription combinée nécessite Entra ID P2"},
 {en:"Combined registration lets a user register methods once for both MFA and SSPR", fr:"L'inscription combinée permet d'enregistrer les méthodes une seule fois pour le MFA et le SSPR"}],
correct:[0,3],
explanation:{en:"A and D are correct: combined registration is the single modern experience covering both MFA and SSPR, and Microsoft enforces a stricter SSPR policy for administrators — two methods, with security questions unavailable to them.\nB is wrong: the security-questions option applies to end users only; administrators are excluded by design.\nC is wrong: combined registration is not gated behind P2 (SSPR for members needs P1).",
fr:"A et D sont corrects : l'inscription combinée est l'expérience moderne unique couvrant MFA et SSPR, et Microsoft impose une stratégie SSPR plus stricte aux administrateurs — deux méthodes, sans questions de sécurité.\nB est faux : l'option questions de sécurité ne concerne que les utilisateurs finaux ; les administrateurs en sont exclus par conception.\nC est faux : l'inscription combinée n'est pas conditionnée à P2 (le SSPR pour les membres nécessite P1)."}
},
{
id:"d2-039", domain:2, topic:"CA - app protection policy",
q:{en:"Sales staff use personal iPhones and Android phones that will never be enrolled in Intune, but corporate Outlook data on them must be protected. Which Conditional Access grant control fits?",
   fr:"Les commerciaux utilisent des iPhone et Android personnels qui ne seront jamais inscrits dans Intune, mais les données Outlook d'entreprise doivent être protégées. Quel contrôle d'octroi d'accès conditionnel convient ?"},
options:[
 {en:"Block access from mobile platforms", fr:"Bloquer l'accès depuis les plateformes mobiles"},
 {en:"Require device to be marked as compliant", fr:"Exiger que l'appareil soit marqué comme conforme"},
 {en:"Require app protection policy, which enforces Intune MAM protection inside approved apps without enrolling the device", fr:"Exiger une app protection policy, qui applique la protection Intune MAM dans les applications approuvées sans inscrire l'appareil"},
 {en:"Require Entra hybrid joined device", fr:"Exiger un appareil Entra hybrid joined"}],
correct:[2],
explanation:{en:"A is wrong: blocking mobile access fails the business requirement.\nB is wrong: compliance requires Intune enrolment, which is excluded.\nC is correct: app protection policies (MAM without enrolment) protect the corporate data inside approved client apps — encryption, PIN, no copy to personal apps — which is exactly the BYOD case.\nD is wrong: hybrid join applies to domain-joined Windows devices, not personal phones.",
fr:"A est faux : bloquer le mobile ne répond pas au besoin métier.\nB est faux : la conformité exige l'inscription Intune, exclue ici.\nC est correct : les app protection policies (MAM sans inscription) protègent les données d'entreprise à l'intérieur des applications clientes approuvées — chiffrement, code PIN, pas de copie vers les apps personnelles — c'est exactement le cas BYOD.\nD est faux : le hybrid join concerne les appareils Windows joints au domaine, pas des téléphones personnels."}
},
{
id:"d2-040", domain:2, topic:"CA - Terms of use",
q:{en:"Legal requires every external guest to accept a usage agreement before opening any application, with the acceptance recorded and re-confirmed yearly. How do you implement this?",
   fr:"Le service juridique exige que chaque guest externe accepte une charte d'utilisation avant d'ouvrir toute application, avec l'acceptation enregistrée et reconfirmée chaque année. Comment l'implémentes-tu ?"},
options:[
 {en:"Email the PDF to guests when you invite them", fr:"Envoyer le PDF par email aux guests lors de l'invitation"},
 {en:"Add the agreement text to the company branding sign-in page", fr:"Ajouter le texte de la charte sur la page de connexion personnalisée"},
 {en:"Create an access package with a question on the request form", fr:"Créer un access package avec une question dans le formulaire de demande"},
 {en:"Create a terms of use with yearly re-acceptance and require it as a grant control in a Conditional Access policy targeting guest users", fr:"Créer des terms of use avec réacceptation annuelle et les exiger comme contrôle d'octroi dans une stratégie d'accès conditionnel ciblant les guests"}],
correct:[3],
explanation:{en:"A is wrong: an email produces no enforcement and no auditable acceptance.\nB is wrong: branding text is decoration, not consent capture.\nC is wrong: an access package question is answered once at request time and does not gate every application sign-in.\nD is correct: terms of use is an Entra Governance feature that presents a document at sign-in, records who accepted and when, and supports expiry/re-acceptance schedules; Conditional Access enforces it as a grant control per user set or application.",
fr:"A est faux : un email n'apporte aucune application technique ni acceptation auditable.\nB est faux : le texte de branding est décoratif, il ne recueille pas de consentement.\nC est faux : une question d'access package est répondue une fois à la demande et ne conditionne pas chaque connexion applicative.\nD est correct : les terms of use sont une fonctionnalité Entra Governance qui présente un document à la connexion, enregistre qui a accepté et quand, et supporte l'expiration/réacceptation ; l'accès conditionnel les impose comme contrôle d'octroi par ensemble d'utilisateurs ou par application."}
},
{
id:"d2-041", domain:2, topic:"Token protection",
q:{en:"Threat intelligence reports token theft: attackers exfiltrate refresh tokens from compromised endpoints and replay them from their own machines. Which Conditional Access session control targets this attack?",
   fr:"Le renseignement sur les menaces signale du vol de jetons : les attaquants exfiltrent des refresh tokens depuis des postes compromis et les rejouent depuis leurs propres machines. Quel contrôle de session d'accès conditionnel cible cette attaque ?"},
options:[
 {en:"Require token protection for sign-in sessions, which cryptographically binds the token to the device", fr:"Exiger la token protection pour les sessions de connexion, qui lie cryptographiquement le jeton à l'appareil"},
 {en:"Sign-in frequency set to 1 hour", fr:"Fréquence de connexion réglée sur 1 heure"},
 {en:"Require MFA on every sign-in", fr:"Exiger le MFA à chaque connexion"},
 {en:"Persistent browser session set to Never persistent", fr:"Session de navigateur persistante réglée sur Jamais persistante"}],
correct:[0],
explanation:{en:"A is correct: token protection (token binding) ties the refresh token to the client device's cryptographic key, so a stolen token is useless on another machine. It is the control specifically designed against token replay.\nB is wrong: shortening sign-in frequency narrows the window but the stolen token still works inside it.\nC is wrong: the attacker replays a token that was already issued after MFA, so re-prompting the victim does not stop them.\nD is wrong: non-persistent sessions only affect browser cookie persistence, not exported refresh tokens.",
fr:"A est correct : la token protection (token binding) lie le refresh token à la clé cryptographique de l'appareil client, donc un jeton volé est inutilisable sur une autre machine. C'est le contrôle spécifiquement conçu contre le rejeu de jeton.\nB est faux : raccourcir la fréquence réduit la fenêtre mais le jeton volé reste valable dedans.\nC est faux : l'attaquant rejoue un jeton déjà émis après MFA, redemander le MFA à la victime ne l'arrête pas.\nD est faux : les sessions non persistantes n'affectent que la persistance du cookie navigateur, pas les refresh tokens exportés."}
},
{
id:"d2-042", domain:2, topic:"CA - external user types",
q:{en:"You need one Conditional Access policy that applies only to B2B collaboration guests, and a different one for internal employees. How do you scope the guest policy?",
   fr:"Tu as besoin d'une stratégie d'accès conditionnel qui ne s'applique qu'aux guests B2B collaboration, et d'une autre pour les employés internes. Comment cibles-tu la stratégie des guests ?"},
options:[
 {en:"Use a device filter on the guest devices", fr:"Utiliser un filtre d'appareils sur les appareils des guests"},
 {en:"Under Users, select Guest or external users and choose the specific external user type \"B2B collaboration guest users\"", fr:"Dans Utilisateurs, choisir Invités ou utilisateurs externes et sélectionner le type externe précis « B2B collaboration guest users »"},
 {en:"Target All users and exclude a group containing every employee", fr:"Cibler Tous les utilisateurs et exclure un groupe contenant tous les employés"},
 {en:"Use a named location matching partner IP ranges", fr:"Utiliser une named location correspondant aux plages IP des partenaires"}],
correct:[1],
explanation:{en:"A is wrong: guests typically have no registered device to filter on.\nB is correct: the Users condition can target external user types individually — B2B collaboration guests, B2B collaboration members, B2B direct connect users, service providers and other external users — which is precise and self-maintaining.\nC is wrong: an employee exclusion group has to be maintained forever and silently breaks when someone is missed.\nD is wrong: guests sign in from anywhere; IP is not identity.",
fr:"A est faux : les guests n'ont généralement aucun appareil enregistré sur lequel filtrer.\nB est correct : la condition Utilisateurs peut cibler les types externes individuellement — guests B2B collaboration, membres B2B collaboration, utilisateurs B2B direct connect, fournisseurs de services et autres utilisateurs externes — c'est précis et sans maintenance.\nC est faux : un groupe d'exclusion des employés doit être maintenu indéfiniment et casse silencieusement dès qu'un oubli survient.\nD est faux : les guests se connectent de partout ; une IP n'est pas une identité."}
},
{
id:"d2-043", domain:2, topic:"CA - filter for applications",
q:{en:"You have 300 enterprise applications and need one Conditional Access policy that automatically covers every application tagged as \"HighBusinessImpact\", including apps added next year. What do you use?",
   fr:"Tu as 300 applications d'entreprise et il te faut une stratégie d'accès conditionnel couvrant automatiquement chaque application marquée « HighBusinessImpact », y compris celles ajoutées l'an prochain. Qu'utilises-tu ?"},
options:[
 {en:"Select the applications manually and update the policy when apps are added", fr:"Sélectionner les applications manuellement et mettre à jour la stratégie à chaque ajout"},
 {en:"An app collection in My Apps", fr:"Une collection d'applications dans Mes applications"},
 {en:"A custom security attribute on the service principals plus the Conditional Access filter for applications", fr:"Un attribut de sécurité personnalisé sur les service principals plus le filtre pour applications de l'accès conditionnel"},
 {en:"A dynamic group of applications", fr:"Un groupe dynamique d'applications"}],
correct:[2],
explanation:{en:"A is wrong: manual selection is the maintenance burden the requirement excludes.\nB is wrong: app collections only organise the My Apps portal for users.\nC is correct: you define a custom security attribute set, stamp the attribute on the relevant service principals, then use \"Edit filter\" in the Cloud apps condition — new apps get the policy the moment they are tagged.\nD is wrong: Entra groups contain users, devices and service principals for membership purposes, but the Cloud apps condition does not accept a group of applications.",
fr:"A est faux : la sélection manuelle est exactement la charge de maintenance que l'énoncé exclut.\nB est faux : les collections d'applications organisent seulement le portail Mes applications.\nC est correct : tu définis un ensemble d'attributs de sécurité personnalisés, tu marques l'attribut sur les service principals concernés, puis tu utilises « Modifier le filtre » dans la condition Applications cloud — une nouvelle app reçoit la stratégie dès qu'elle est marquée.\nD est faux : les groupes Entra contiennent utilisateurs, appareils et service principals pour l'appartenance, mais la condition Applications cloud n'accepte pas un groupe d'applications."}
},
{
id:"d2-044", domain:2, topic:"Risk policies configuration",
q:{en:"Which pair correctly matches the ID Protection policy to its recommended remediation?",
   fr:"Quelle paire associe correctement la stratégie ID Protection à sa remédiation recommandée ?"},
options:[
 {en:"Both policies should block access, as remediation is unsafe", fr:"Les deux stratégies devraient bloquer l'accès, la remédiation étant risquée"},
 {en:"Sign-in risk policy → require compliant device; user risk policy → require terms of use", fr:"Stratégie de risque de connexion → exiger un appareil conforme ; stratégie de risque utilisateur → exiger les terms of use"},
 {en:"Sign-in risk policy → require password change; user risk policy → require MFA", fr:"Stratégie de risque de connexion → exiger un changement de mot de passe ; stratégie de risque utilisateur → exiger le MFA"},
 {en:"Sign-in risk policy → require multifactor authentication; user risk policy → require secure password change", fr:"Stratégie de risque de connexion → exiger le MFA ; stratégie de risque utilisateur → exiger un changement de mot de passe sécurisé"}],
correct:[3],
explanation:{en:"A is wrong: blocking is an option but Microsoft recommends self-remediation to reduce helpdesk load; blocking alone never clears risk.\nB is wrong: neither control remediates risk.\nC is wrong: the two are swapped.\nD is correct: sign-in risk means THIS authentication looks suspicious, so proving possession of a second factor remediates it and clears the risk. User risk means the identity itself is likely compromised (for example leaked credentials), so the credential must be replaced — a secure password change (which requires MFA) remediates and resets user risk.",
fr:"A est faux : bloquer est une option mais Microsoft recommande l'auto-remédiation pour réduire la charge du helpdesk ; bloquer seul n'efface jamais le risque.\nB est faux : aucun de ces contrôles ne remédie au risque.\nC est faux : les deux sont inversés.\nD est correct : un risque de connexion signifie que CETTE authentification paraît suspecte, donc prouver la possession d'un second facteur la remédie et efface le risque. Un risque utilisateur signifie que l'identité elle-même est probablement compromise (ex : identifiants fuités), donc l'identifiant doit être remplacé — un changement de mot de passe sécurisé (qui exige le MFA) remédie et réinitialise le risque utilisateur."}
},
{
id:"d2-045", domain:2, topic:"Risk detections",
q:{en:"Which ID Protection risk detection is calculated OFFLINE and always raises USER risk rather than sign-in risk?",
   fr:"Quelle détection de risque ID Protection est calculée HORS LIGNE et élève toujours le risque UTILISATEUR plutôt que le risque de connexion ?"},
options:[
 {en:"Leaked credentials", fr:"Identifiants fuités (leaked credentials)"},
 {en:"Malicious IP address", fr:"Adresse IP malveillante"},
 {en:"Atypical travel", fr:"Voyage atypique (atypical travel)"},
 {en:"Anonymous IP address", fr:"Adresse IP anonyme"}],
correct:[0],
explanation:{en:"A is correct: leaked credentials come from Microsoft's monitoring of dark-web and public dumps, matched against your tenant after the fact — there is no sign-in to score, so it raises user risk offline.\nB is wrong: malicious IP address is a sign-in risk detection based on IP reputation.\nC is wrong: atypical travel is a sign-in risk detection computed by comparing sign-in locations (offline, but sign-in scoped).\nD is wrong: anonymous IP is a real-time sign-in risk detection.",
fr:"A est correct : les identifiants fuités proviennent de la surveillance par Microsoft du dark web et des fuites publiques, comparés à ton tenant après coup — il n'y a aucune connexion à noter, donc cela élève le risque utilisateur hors ligne.\nB est faux : l'adresse IP malveillante est une détection de risque de connexion basée sur la réputation de l'IP.\nC est faux : le voyage atypique est une détection de risque de connexion calculée en comparant les emplacements de connexion (hors ligne, mais liée à une connexion).\nD est faux : l'IP anonyme est une détection de risque de connexion en temps réel."}
},
{
id:"d2-046", domain:2, topic:"Risk feedback loop",
q:{en:"An investigation proves a flagged sign-in was really an attacker. Beyond containment, what is the value of clicking \"Confirm compromised\" in ID Protection?",
   fr:"Une investigation prouve qu'une connexion signalée était bien un attaquant. Au-delà du confinement, quel est l'intérêt de cliquer « Confirmer la compromission » dans ID Protection ?"},
options:[
 {en:"It permanently deletes the sign-in log entry", fr:"Cela supprime définitivement l'entrée du journal de connexion"},
 {en:"It sets the user risk to High and feeds the machine-learning model so future similar detections are scored more accurately", fr:"Cela porte le risque utilisateur à Élevé et alimente le modèle de machine learning pour que les détections similaires futures soient notées plus justement"},
 {en:"It automatically blocks the source IP address tenant-wide", fr:"Cela bloque automatiquement l'adresse IP source pour tout le tenant"},
 {en:"It has no effect other than a visual label", fr:"Cela n'a aucun effet, c'est une simple étiquette visuelle"}],
correct:[1],
explanation:{en:"A is wrong: logs are immutable; risk state changes, the record does not disappear.\nB is correct: confirm compromised and dismiss are the analyst feedback loop — confirming raises user risk to High immediately (triggering your user risk policy) and trains the model, while dismissing sets risk to none. Using them consistently improves detection quality over time.\nC is wrong: there is no automatic IP blocklist from this action.\nD is wrong: it changes risk state and model training, which is far from cosmetic.",
fr:"A est faux : les journaux sont immuables ; l'état de risque change, l'enregistrement ne disparaît pas.\nB est correct : confirmer la compromission et rejeter constituent la boucle de retour de l'analyste — confirmer porte immédiatement le risque utilisateur à Élevé (déclenchant ta stratégie de risque utilisateur) et entraîne le modèle, tandis que rejeter met le risque à néant. Les utiliser systématiquement améliore la qualité de détection dans le temps.\nC est faux : cette action ne crée aucune liste de blocage d'IP automatique.\nD est faux : elle change l'état de risque et l'entraînement du modèle, ce qui est tout sauf cosmétique."}
},
{
id:"d2-047", domain:2, topic:"GSA - Private Access",
q:{en:"You must give remote employees access to an internal line-of-business web app and an internal SMB file share, replacing the legacy VPN, with Conditional Access applied per application. Which Global Secure Access capability do you use?",
   fr:"Tu dois donner à des employés distants l'accès à une application web métier interne et à un partage de fichiers SMB interne, en remplaçant le VPN historique, avec de l'accès conditionnel par application. Quelle capacité de Global Secure Access utilises-tu ?"},
options:[
 {en:"Application Proxy, which supports all TCP and UDP protocols", fr:"Application Proxy, qui supporte tous les protocoles TCP et UDP"},
 {en:"A named location containing the corporate IP range", fr:"Une named location contenant la plage IP de l'entreprise"},
 {en:"Microsoft Entra Private Access, with Quick Access or per-app enterprise applications and the private network connector", fr:"Microsoft Entra Private Access, avec Quick Access ou des applications d'entreprise par app et le connecteur de réseau privé"},
 {en:"Microsoft Entra Internet Access", fr:"Microsoft Entra Internet Access"}],
correct:[2],
explanation:{en:"A is wrong: Application Proxy publishes web (HTTP/HTTPS) apps only, so it cannot serve an SMB share.\nB is wrong: a named location is a condition, not a connectivity solution.\nC is correct: Private Access is the ZTNA capability for private resources over any TCP/UDP port — not just HTTP — and each private app can be an enterprise application, so Conditional Access applies individually.\nD is wrong: Internet Access is the secure web gateway for internet and SaaS traffic.",
fr:"A est faux : Application Proxy ne publie que des applications web (HTTP/HTTPS), il ne peut donc pas servir un partage SMB.\nB est faux : une named location est une condition, pas une solution de connectivité.\nC est correct : Private Access est la capacité ZTNA pour les ressources privées sur n'importe quel port TCP/UDP — pas seulement HTTP — et chaque app privée peut être une application d'entreprise, donc l'accès conditionnel s'applique individuellement.\nD est faux : Internet Access est la passerelle web sécurisée pour le trafic internet et SaaS."}
},
{
id:"d2-048", domain:2, topic:"GSA - compliant network",
q:{en:"You want to require that access to Exchange Online happens only through your Global Secure Access tenant, so a stolen session cannot be used from an arbitrary network — without maintaining IP address lists. What do you configure?",
   fr:"Tu veux exiger que l'accès à Exchange Online passe uniquement par ton tenant Global Secure Access, pour qu'une session volée ne serve pas depuis un réseau quelconque — sans maintenir de listes d'adresses IP. Que configures-tu ?"},
options:[
 {en:"Sign-in frequency of 1 hour", fr:"Une fréquence de connexion d'une heure"},
 {en:"A trusted named location with your office public IPs", fr:"Une named location de confiance avec les IP publiques de tes bureaux"},
 {en:"A device filter requiring a specific device model", fr:"Un filtre d'appareils exigeant un modèle précis"},
 {en:"A Conditional Access policy using the compliant network check condition, with Global Secure Access enabled", fr:"Une stratégie d'accès conditionnel utilisant la condition compliant network check, avec Global Secure Access activé"}],
correct:[3],
explanation:{en:"A is wrong: re-authenticating more often does not constrain the network used.\nB is wrong: public IPs are spoofable, shared and a constant maintenance burden, and VPN egress defeats them.\nC is wrong: device model has nothing to do with network path.\nD is correct: the compliant network check verifies the traffic actually traversed your GSA tenant with the client installed and policies applied — it is tenant-specific and needs no IP maintenance, and it is the recommended replacement for IP-based trusted locations.",
fr:"A est faux : se réauthentifier plus souvent ne contraint pas le réseau utilisé.\nB est faux : les IP publiques sont usurpables, partagées et une charge de maintenance constante, et une sortie VPN les contourne.\nC est faux : le modèle d'appareil n'a rien à voir avec le chemin réseau.\nD est correct : le compliant network check vérifie que le trafic a réellement traversé ton tenant GSA avec le client installé et les stratégies appliquées — c'est spécifique à ton tenant, sans maintenance d'IP, et c'est le remplaçant recommandé des trusted locations basées sur IP."}
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
 {en:"Key trust, which requires no changes to Active Directory", fr:"Key trust, qui n'exige aucune modification d'Active Directory"},
 {en:"Cloud Kerberos trust, which requires an Entra Kerberos server object in AD and no PKI or certificates for the users", fr:"Cloud Kerberos trust, qui nécessite un objet serveur Entra Kerberos dans l'AD et aucune PKI ni certificat pour les utilisateurs"},
 {en:"AD FS trust with a dedicated device registration service", fr:"AD FS trust avec un service dédié d'enregistrement d'appareils"},
 {en:"Certificate trust, which is now the recommended default", fr:"Certificate trust, désormais le modèle par défaut recommandé"}],
correct:[1],
explanation:{en:"A is wrong: key trust does require AD schema and domain controller prerequisites, and still needs a PKI for certificate-based on-prem authentication scenarios.\nB is correct: cloud Kerberos trust is the simplest and Microsoft-recommended model — you create the Entra Kerberos server object in AD, Entra ID issues partial TGTs, and no user certificates or PKI are needed.\nC is wrong: AD FS-based device registration is a legacy path being retired.\nD is wrong: certificate trust requires a full PKI with certificate enrolment and is now the legacy option.",
fr:"A est faux : le key trust impose bien des prérequis de schéma AD et de contrôleurs de domaine, et nécessite encore une PKI pour certains scénarios on-prem.\nB est correct : le cloud Kerberos trust est le modèle le plus simple et recommandé par Microsoft — tu crées l'objet serveur Entra Kerberos dans l'AD, Entra ID émet des TGT partiels, et aucun certificat utilisateur ni PKI n'est nécessaire.\nC est faux : l'enregistrement d'appareils via AD FS est une voie historique en fin de vie.\nD est faux : le certificate trust exige une PKI complète avec inscription de certificats et constitue désormais l'option historique."}
},
{
id:"d2-051", domain:2, topic:"Staged rollout",
q:{en:"Contoso is federated with AD FS and wants to move to password hash synchronization progressively, testing with 500 users first, without changing the domain's federation settings tenant-wide. What do you use?",
   fr:"Contoso est fédéré avec AD FS et veut passer progressivement à la synchronisation de hash de mot de passe, en testant d'abord avec 500 utilisateurs, sans changer les paramètres de fédération du domaine pour tout le tenant. Qu'utilises-tu ?"},
options:[
 {en:"Enable Seamless SSO, which bypasses AD FS for selected users", fr:"Activer Seamless SSO, qui contourne AD FS pour certains utilisateurs"},
 {en:"Convert the domain to managed with Set-MsolDomainAuthentication, then revert if there are issues", fr:"Convertir le domaine en managed avec Set-MsolDomainAuthentication, puis revenir en arrière en cas de problème"},
 {en:"Staged rollout, adding the pilot users' groups so they authenticate in the cloud while the domain stays federated", fr:"Le staged rollout, en ajoutant les groupes d'utilisateurs pilotes pour qu'ils s'authentifient dans le cloud alors que le domaine reste fédéré"},
 {en:"Create a second verified domain for the pilot users", fr:"Créer un second domaine vérifié pour les utilisateurs pilotes"}],
correct:[2],
explanation:{en:"A is wrong: Seamless SSO is a convenience feature for domain-joined devices, not a way to select an authentication method for a subset of users.\nB is wrong: converting the domain is the all-at-once cutover the requirement forbids.\nC is correct: staged rollout is built exactly for this — selected groups (up to 10 groups and 50,000 users per feature) authenticate with PHS or PTA while the domain remains federated for everyone else, so you can validate and roll back per group.\nD is wrong: adding a domain means changing users' UPNs, a far more disruptive change.",
fr:"A est faux : Seamless SSO est un confort pour les appareils joints au domaine, pas un moyen de choisir la méthode d'authentification d'un sous-ensemble d'utilisateurs.\nB est faux : convertir le domaine, c'est la bascule totale que l'énoncé interdit.\nC est correct : le staged rollout est fait précisément pour ça — des groupes sélectionnés (jusqu'à 10 groupes et 50 000 utilisateurs par fonctionnalité) s'authentifient avec PHS ou PTA tandis que le domaine reste fédéré pour les autres, ce qui permet de valider et de revenir en arrière groupe par groupe.\nD est faux : ajouter un domaine implique de changer les UPN des utilisateurs, un changement bien plus perturbant."}
},
{
id:"d2-052", domain:2, topic:"Authentication strength for admins",
q:{en:"You must ensure that anyone activating the Global Administrator role uses phishing-resistant MFA, while ordinary users may keep using the Authenticator app. What do you configure?",
   fr:"Tu dois garantir que toute personne activant le rôle Global Administrator utilise du MFA résistant au phishing, alors que les utilisateurs ordinaires peuvent continuer avec l'app Authenticator. Que configures-tu ?"},
options:[
 {en:"Disable the Authenticator app tenant-wide", fr:"Désactiver l'app Authenticator pour tout le tenant"},
 {en:"Set the sign-in frequency for admins to every sign-in", fr:"Mettre la fréquence de connexion des admins à chaque connexion"},
 {en:"Enable Security defaults", fr:"Activer les Security defaults"},
 {en:"A Conditional Access policy targeting the directory role that requires the built-in Phishing-resistant MFA authentication strength", fr:"Une stratégie d'accès conditionnel ciblant le rôle d'annuaire, exigeant l'authentication strength intégrée Phishing-resistant MFA"}],
correct:[3],
explanation:{en:"A is wrong: that punishes all users and removes a good method for them.\nB is wrong: frequency controls how often, not how strong.\nC is wrong: Security defaults apply one blanket baseline and cannot express per-role strength.\nD is correct: authentication strengths let one policy demand a specific class of credential — the phishing-resistant strength accepts only FIDO2 security keys, Windows Hello for Business and certificate-based authentication — and CA can target directory roles, so ordinary users are unaffected. Combining it with an authentication context also protects PIM activation.",
fr:"A est faux : cela pénalise tous les utilisateurs et leur retire une bonne méthode.\nB est faux : la fréquence contrôle la répétition, pas la robustesse.\nC est faux : les Security defaults appliquent une base unique et ne savent pas exprimer une force par rôle.\nD est correct : les authentication strengths permettent à une stratégie d'exiger une classe précise d'identifiant — la strength résistante au phishing n'accepte que les clés FIDO2, Windows Hello for Business et l'authentification par certificat — et l'accès conditionnel peut cibler des rôles d'annuaire, donc les utilisateurs ordinaires ne sont pas touchés. La combiner à un authentication context protège aussi l'activation PIM."}
},
{
id:"d2-053", domain:2, topic:"Sign-in frequency vs CAE",
q:{en:"You set sign-in frequency to 1 hour for a sensitive application. A security analyst asks whether a user disabled in Entra ID could still use the app for up to an hour. What is the accurate answer?",
   fr:"Tu règles la fréquence de connexion à 1 heure pour une application sensible. Un analyste demande si un utilisateur désactivé dans Entra ID pourrait encore utiliser l'application pendant une heure. Quelle est la réponse exacte ?"},
options:[
 {en:"No, if the app supports Continuous Access Evaluation, which revokes the session within minutes on critical events such as account disable, password change or admin-triggered revocation", fr:"Non, si l'application supporte la Continuous Access Evaluation, qui révoque la session en quelques minutes sur les événements critiques comme la désactivation du compte, le changement de mot de passe ou une révocation déclenchée par un admin"},
 {en:"No, because sign-in frequency revokes tokens instantly", fr:"Non, car la fréquence de connexion révoque les jetons instantanément"},
 {en:"Yes, and nothing can shorten it", fr:"Oui, et rien ne peut raccourcir ce délai"},
 {en:"Yes, always — access tokens are valid until sign-in frequency expires", fr:"Oui, toujours — les jetons d'accès sont valides jusqu'à expiration de la fréquence de connexion"}],
correct:[0],
explanation:{en:"A is correct: sign-in frequency only forces reauthentication when the interval elapses, whereas CAE lets Entra ID push critical events to CAE-capable resources (Exchange, SharePoint, Teams and Graph) so the session is terminated in near real time. Both are complementary.\nB is wrong: sign-in frequency does not revoke anything, it schedules reauthentication.\nC is wrong: CAE and explicit session revocation both shorten it.\nD is wrong: it is true only for apps that do not support CAE.",
fr:"A est correct : la fréquence de connexion ne force la réauthentification qu'à l'échéance de l'intervalle, tandis que la CAE permet à Entra ID de pousser les événements critiques vers les ressources compatibles (Exchange, SharePoint, Teams et Graph) pour que la session soit terminée quasi en temps réel. Les deux sont complémentaires.\nB est faux : la fréquence de connexion ne révoque rien, elle planifie une réauthentification.\nC est faux : la CAE et la révocation explicite de session raccourcissent ce délai.\nD est faux : ce n'est vrai que pour les applications ne supportant pas la CAE."}
},
{
id:"d2-054", domain:2, topic:"CA - device platform block",
q:{en:"Policy states that corporate email must not be accessible from Linux desktops or from ChromeOS, while Windows, macOS, iOS and Android remain allowed. What is the correct Conditional Access configuration?",
   fr:"La politique impose que la messagerie d'entreprise ne soit pas accessible depuis les postes Linux ni depuis ChromeOS, alors que Windows, macOS, iOS et Android restent autorisés. Quelle est la bonne configuration d'accès conditionnel ?"},
options:[
 {en:"An Intune compliance policy, since Conditional Access cannot see the platform", fr:"Une stratégie de conformité Intune, car l'accès conditionnel ne voit pas la plateforme"},
 {en:"A policy with the device platforms condition including Linux and ChromeOS, and the Block access grant control", fr:"Une stratégie avec la condition plateformes d'appareils incluant Linux et ChromeOS, et le contrôle d'octroi Bloquer l'accès"},
 {en:"A policy including all platforms with Block, excluding nothing", fr:"Une stratégie incluant toutes les plateformes avec Bloquer, sans exclusion"},
 {en:"A device filter on operatingSystem, which does not support unmanaged devices", fr:"Un filtre d'appareils sur operatingSystem, qui ne gère pas les appareils non gérés"}],
correct:[1],
explanation:{en:"A is wrong: Conditional Access does evaluate device platform; compliance is a different signal requiring enrolment.\nB is correct: the device platforms condition is evaluated from the user agent and lets you include exactly the platforms to block, leaving the others untouched. Remember platform is a client-declared signal, so pair it with stronger controls for sensitive data.\nC is wrong: that locks out everyone, including the allowed platforms.\nD is wrong: device filters evaluate registered device attributes, so unregistered Linux clients would not match — the platform condition is the right tool.",
fr:"A est faux : l'accès conditionnel évalue bien la plateforme ; la conformité est un autre signal qui exige l'inscription.\nB est correct : la condition plateformes d'appareils est évaluée depuis le user agent et permet d'inclure exactement les plateformes à bloquer, sans toucher aux autres. Rappelle-toi que la plateforme est un signal déclaré par le client, donc à combiner avec des contrôles plus forts pour les données sensibles.\nC est faux : cela bloque tout le monde, y compris les plateformes autorisées.\nD est faux : les filtres d'appareils évaluent les attributs d'appareils enregistrés, donc des clients Linux non enregistrés ne correspondraient pas — la condition de plateforme est l'outil adapté."}
},
{
id:"d2-055", domain:2, topic:"SSPR rollout",
q:{en:"You enable SSPR for a pilot group and set \"Require users to register when signing in\" to Yes with a 180-day reconfirmation. A pilot user reports they were never prompted. What is the most likely explanation?",
   fr:"Tu actives le SSPR pour un groupe pilote et mets « Exiger l'inscription des utilisateurs à la connexion » sur Oui avec une reconfirmation à 180 jours. Un utilisateur pilote signale n'avoir jamais été invité à s'inscrire. Quelle est l'explication la plus probable ?"},
options:[
 {en:"SSPR registration prompts only appear for administrators", fr:"Les invitations d'inscription SSPR n'apparaissent que pour les administrateurs"},
 {en:"The user must have Entra ID P2", fr:"L'utilisateur doit avoir Entra ID P2"},
 {en:"The user already has the required number of authentication methods registered, so there is nothing left to register", fr:"L'utilisateur a déjà le nombre requis de méthodes d'authentification enregistrées, il ne reste donc rien à inscrire"},
 {en:"Registration enforcement requires Security defaults to be enabled", fr:"L'enforcement de l'inscription exige que les Security defaults soient activés"}],
correct:[2],
explanation:{en:"A is wrong: enforcement targets the selected group of users; admins have their own stricter SSPR rules.\nB is wrong: SSPR for members requires P1, not P2.\nC is correct: the interrupt only fires when the user is missing methods relative to the policy's required count — someone who already registered Authenticator and a phone (or was covered by the MFA registration policy) simply sails through.\nD is wrong: Security defaults and Conditional Access-based registration are alternatives, not prerequisites, and Security defaults cannot coexist with CA policies.",
fr:"A est faux : l'enforcement cible le groupe d'utilisateurs sélectionné ; les admins ont leurs propres règles SSPR plus strictes.\nB est faux : le SSPR pour les membres nécessite P1, pas P2.\nC est correct : l'interruption ne se déclenche que si l'utilisateur manque de méthodes par rapport au nombre requis par la stratégie — quelqu'un qui a déjà enregistré Authenticator et un téléphone (ou qui a été couvert par la stratégie d'inscription MFA) passe simplement sans invite.\nD est faux : les Security defaults et l'inscription via accès conditionnel sont des alternatives, pas des prérequis, et les Security defaults ne cohabitent pas avec des stratégies CA."}
},
{
id:"d2-056", domain:2, topic:"CA - Microsoft Admin Portals",
q:{en:"You must require phishing-resistant MFA for access to the Entra admin center, the Microsoft 365 admin center, the Azure portal and Exchange admin center — without listing each one and without breaking non-admin apps. What do you target?",
   fr:"Tu dois exiger un MFA résistant au phishing pour l'accès au centre d'administration Entra, au centre d'administration Microsoft 365, au portail Azure et au centre d'administration Exchange — sans les lister un par un et sans casser les applications non administratives. Que cibles-tu ?"},
options:[
 {en:"The Microsoft Graph API application", fr:"L'application Microsoft Graph API"},
 {en:"The Office 365 app suite", fr:"La suite d'applications Office 365"},
 {en:"All cloud apps", fr:"Toutes les applications cloud"},
 {en:"The \"Microsoft Admin Portals\" target group in the Cloud apps condition", fr:"Le groupe cible « Microsoft Admin Portals » dans la condition Applications cloud"}],
correct:[3],
explanation:{en:"A is wrong: Graph is the API, not the portals, and blocking or hardening it has very different consequences.\nB is wrong: the Office 365 suite covers user productivity services, not admin portals.\nC is wrong: targeting all cloud apps applies the requirement to everything, which would force phishing-resistant MFA on every user app.\nD is correct: Microsoft Admin Portals is a maintained target group covering the administrative portals, so new portals are included automatically and ordinary user apps are untouched.",
fr:"A est faux : Graph est l'API, pas les portails, et le durcir a des conséquences très différentes.\nB est faux : la suite Office 365 couvre les services de productivité, pas les portails d'administration.\nC est faux : cibler toutes les applications cloud applique l'exigence à tout, imposant un MFA résistant au phishing sur chaque app utilisateur.\nD est correct : Microsoft Admin Portals est un groupe cible maintenu par Microsoft couvrant les portails d'administration, donc les nouveaux portails y sont inclus automatiquement et les applications utilisateur ne sont pas touchées."}
},
{
id:"d2-057", domain:2, topic:"CA - register security information",
q:{en:"Users must only be able to register MFA and SSPR methods from the corporate network or from a compliant device, to stop an attacker with a stolen password from enrolling their own authenticator. What do you configure?",
   fr:"Les utilisateurs ne doivent pouvoir enregistrer leurs méthodes MFA et SSPR que depuis le réseau d'entreprise ou un appareil conforme, pour empêcher un attaquant disposant d'un mot de passe volé d'enrôler son propre authentificateur. Que configures-tu ?"},
options:[
 {en:"A Conditional Access policy on the user action \"Register security information\", with a location and/or compliant device condition", fr:"Une stratégie d'accès conditionnel sur l'action utilisateur « Enregistrer les informations de sécurité », avec une condition d'emplacement et/ou d'appareil conforme"},
 {en:"Blocking the My Security Info page with a firewall rule", fr:"Bloquer la page Mes informations de sécurité par une règle de pare-feu"},
 {en:"The MFA registration policy in ID Protection", fr:"La stratégie d'inscription MFA d'ID Protection"},
 {en:"A Temporary Access Pass for every user", fr:"Un Temporary Access Pass pour chaque utilisateur"}],
correct:[0],
explanation:{en:"A is correct: the Register security information user action lets Conditional Access gate the registration flow itself, which is the documented protection against an attacker enrolling a credential after a password compromise.\nB is wrong: a firewall cannot distinguish an authenticated user's registration flow, and users are off-network by design.\nC is wrong: the ID Protection registration policy forces users TO register; it does not restrict from where.\nD is wrong: TAP is a bootstrap credential, useful alongside this policy but not a restriction.",
fr:"A est correct : l'action utilisateur « Enregistrer les informations de sécurité » permet à l'accès conditionnel de conditionner le flux d'inscription lui-même, c'est la protection documentée contre un attaquant qui enrôlerait un identifiant après un vol de mot de passe.\nB est faux : un pare-feu ne peut pas distinguer le flux d'inscription d'un utilisateur authentifié, et les utilisateurs sont hors réseau par nature.\nC est faux : la stratégie d'inscription d'ID Protection force les utilisateurs À s'inscrire, elle ne restreint pas depuis où.\nD est faux : le TAP est un identifiant d'amorçage, utile en complément mais pas une restriction."}
},
{
id:"d2-058", domain:2, topic:"CA - authentication flows",
q:{en:"Threat reports show attackers phishing users with the device code flow to obtain tokens. Which Conditional Access condition addresses this specifically?",
   fr:"Des rapports de menaces montrent des attaquants hameçonnant les utilisateurs via le device code flow pour obtenir des jetons. Quelle condition d'accès conditionnel traite spécifiquement ce cas ?"},
options:[
 {en:"The client apps condition set to legacy authentication", fr:"La condition client apps réglée sur l'authentification héritée"},
 {en:"The authentication flows condition, blocking device code flow except for the few users and devices that genuinely need it", fr:"La condition authentication flows, en bloquant le device code flow sauf pour les rares utilisateurs et appareils qui en ont réellement besoin"},
 {en:"The device platforms condition", fr:"La condition plateformes d'appareils"},
 {en:"Requiring a compliant device on all policies", fr:"Exiger un appareil conforme sur toutes les stratégies"}],
correct:[1],
explanation:{en:"A is wrong: device code flow is modern authentication, not legacy auth.\nB is correct: the authentication flows condition targets specific flows — device code flow and authentication transfer — so you can block the flow itself, which is the recommended mitigation since it is input-constrained and easily social-engineered.\nC is wrong: the attack does not depend on the platform.\nD is wrong: device code flow is typically used precisely where a compliant device cannot be evaluated, and blanket compliance requirements break other scenarios.",
fr:"A est faux : le device code flow relève de l'authentification moderne, pas héritée.\nB est correct : la condition authentication flows cible des flux précis — device code flow et authentication transfer — permettant de bloquer le flux lui-même, ce qui est l'atténuation recommandée puisqu'il est conçu pour des appareils à saisie limitée et facile à détourner par ingénierie sociale.\nC est faux : l'attaque ne dépend pas de la plateforme.\nD est faux : le device code flow est justement utilisé là où un appareil conforme ne peut pas être évalué, et une exigence de conformité générale casse d'autres scénarios."}
},
{
id:"d2-059", domain:2, topic:"CA - policy combination",
q:{en:"A sign-in matches three policies: one grants access with MFA, one grants access with a compliant device, and one blocks access. What is the result?",
   fr:"Une connexion correspond à trois stratégies : l'une accorde l'accès avec MFA, une autre avec un appareil conforme, et la troisième bloque l'accès. Quel est le résultat ?"},
options:[
 {en:"The most recently created policy wins", fr:"La stratégie créée le plus récemment gagne"},
 {en:"The policy with the narrowest scope wins", fr:"La stratégie à la portée la plus étroite gagne"},
 {en:"Access is blocked — a Block grant control always wins over any Allow, regardless of the other policies", fr:"L'accès est bloqué — un contrôle Bloquer l'emporte toujours sur tout contrôle Autoriser, quelles que soient les autres stratégies"},
 {en:"Access is granted if the user satisfies MFA and device compliance", fr:"L'accès est accordé si l'utilisateur satisfait le MFA et la conformité de l'appareil"}],
correct:[2],
explanation:{en:"A is wrong: creation order is irrelevant — there is no policy priority number in Conditional Access.\nB is wrong: scope narrowness confers no precedence.\nC is correct: Conditional Access evaluates all applicable policies, block always takes precedence, and when only grant policies apply, ALL of their controls must be satisfied together.\nD is wrong: that would be true only without the blocking policy.",
fr:"A est faux : l'ordre de création est sans effet — il n'y a pas de numéro de priorité dans l'accès conditionnel.\nB est faux : l'étroitesse de la portée ne confère aucune priorité.\nC est correct : l'accès conditionnel évalue toutes les stratégies applicables, le blocage a toujours la priorité, et quand seules des stratégies d'octroi s'appliquent, TOUS leurs contrôles doivent être satisfaits ensemble.\nD est faux : ce serait vrai seulement sans la stratégie de blocage."}
},
{
id:"d2-060", domain:2, topic:"CA - Office 365 app suite",
q:{en:"You want one policy protecting Exchange Online, SharePoint, Teams and the other Microsoft 365 services consistently, including services added later. What do you select as the target resource?",
   fr:"Tu veux une seule stratégie protégeant Exchange Online, SharePoint, Teams et les autres services Microsoft 365 de façon cohérente, y compris les services ajoutés plus tard. Que sélectionnes-tu comme ressource cible ?"},
options:[
 {en:"Microsoft Admin Portals", fr:"Microsoft Admin Portals"},
 {en:"Exchange Online, SharePoint and Teams selected individually", fr:"Exchange Online, SharePoint et Teams sélectionnés individuellement"},
 {en:"All cloud apps", fr:"Toutes les applications cloud"},
 {en:"The Office 365 app suite, which groups the interdependent Microsoft 365 services", fr:"La suite d'applications Office 365, qui regroupe les services Microsoft 365 interdépendants"}],
correct:[3],
explanation:{en:"A is wrong: that group covers administrative portals, not user services.\nB is wrong: this is the classic mistake — a Teams sign-in also touches Exchange and SharePoint, so partial targeting leaves holes.\nC is wrong: all cloud apps is broader than the requirement and affects every third-party application too.\nD is correct: Microsoft 365 services call each other, so selecting individual apps produces inconsistent prompts and gaps. The Office 365 suite is the recommended target and Microsoft keeps its contents current.",
fr:"A est faux : ce groupe couvre les portails d'administration, pas les services utilisateur.\nB est faux : c'est l'erreur classique — une connexion Teams touche aussi Exchange et SharePoint, un ciblage partiel laisse des failles.\nC est faux : toutes les applications cloud dépasse le besoin et affecte aussi chaque application tierce.\nD est correct : les services Microsoft 365 s'appellent entre eux, donc sélectionner des applications individuelles produit des invites incohérentes et des trous. La suite Office 365 est la cible recommandée et Microsoft maintient son contenu à jour."}
},
{
id:"d2-061", domain:2, topic:"CA templates",
q:{en:"You are new to Conditional Access and want Microsoft's recommended baseline policies quickly and safely. What do you use?",
   fr:"Tu débutes avec l'accès conditionnel et veux rapidement et sans risque les stratégies de référence recommandées par Microsoft. Qu'utilises-tu ?"},
options:[
 {en:"Conditional Access policy templates, which create the recommended policies in report-only state so you can measure impact before enforcing", fr:"Les modèles de stratégies d'accès conditionnel, qui créent les stratégies recommandées en mode report-only pour mesurer l'impact avant application"},
 {en:"Security defaults, then add Conditional Access policies on top", fr:"Les Security defaults, puis ajouter des stratégies d'accès conditionnel par-dessus"},
 {en:"The What If tool, which creates policies for you", fr:"L'outil What If, qui crée les stratégies pour toi"},
 {en:"Copy policies from another tenant in the portal", fr:"Copier les stratégies d'un autre tenant dans le portail"}],
correct:[0],
explanation:{en:"A is correct: templates cover common scenarios (require MFA for admins, block legacy auth, require compliant devices) and are created in report-only by default, which is the safe rollout path. You still must exclude your emergency access accounts.\nB is wrong: Security defaults cannot coexist with Conditional Access policies — you must disable them first.\nC is wrong: What If only simulates one hypothetical sign-in.\nD is wrong: the portal cannot copy policies across tenants; you would export and import via Graph.",
fr:"A est correct : les modèles couvrent les scénarios courants (exiger le MFA des admins, bloquer l'auth héritée, exiger des appareils conformes) et sont créés en report-only par défaut, c'est le chemin de déploiement sûr. Il faut toujours y exclure tes comptes d'accès d'urgence.\nB est faux : les Security defaults ne cohabitent pas avec des stratégies d'accès conditionnel — il faut d'abord les désactiver.\nC est faux : What If ne simule qu'une connexion hypothétique.\nD est faux : le portail ne copie pas de stratégies entre tenants ; il faudrait exporter et importer via Graph."}
},
{
id:"d2-062", domain:2, topic:"CA - backup and change control",
q:{en:"Audit requires that every Conditional Access change be reviewable and revertible. Conditional Access has no built-in version history. What is the practical approach?",
   fr:"L'audit exige que chaque modification d'accès conditionnel soit consultable et réversible. L'accès conditionnel n'a pas d'historique de versions intégré. Quelle est l'approche pratique ?"},
options:[
 {en:"Rely on the 30-day soft delete of deleted policies", fr:"Compter sur la suppression réversible de 30 jours des stratégies supprimées"},
 {en:"Export the policies as JSON via Microsoft Graph on a schedule, keep them in source control, and correlate changes with the Entra audit logs", fr:"Exporter les stratégies en JSON via Microsoft Graph de façon planifiée, les conserver dans un gestionnaire de versions, et corréler les changements avec les journaux d'audit Entra"},
 {en:"Enable report-only mode permanently", fr:"Activer le mode report-only en permanence"},
 {en:"Take screenshots of each policy monthly", fr:"Prendre des captures d'écran de chaque stratégie chaque mois"}],
correct:[1],
explanation:{en:"A is wrong: there is no reliable soft-delete restore for Conditional Access policies as a change-control mechanism.\nB is correct: policies are Graph objects, so scripted JSON export plus source control gives you diffs and a restore path, while the audit logs record who changed what and when.\nC is wrong: report-only means nothing is enforced — that is a rollout state, not change control.\nD is wrong: screenshots are neither diffable nor restorable.",
fr:"A est faux : il n'existe pas de restauration fiable par suppression réversible des stratégies d'accès conditionnel comme mécanisme de contrôle des changements.\nB est correct : les stratégies sont des objets Graph, donc un export JSON scripté plus un gestionnaire de versions donne des diffs et un chemin de restauration, tandis que les journaux d'audit enregistrent qui a changé quoi et quand.\nC est faux : le mode report-only signifie que rien n'est appliqué — c'est un état de déploiement, pas du contrôle de changement.\nD est faux : des captures d'écran ne se comparent ni ne se restaurent."}
},
{
id:"d2-063", domain:2, topic:"Emergency access design",
q:{en:"What is the correct design for emergency access (break-glass) accounts?",
   fr:"Quelle est la conception correcte pour les comptes d'accès d'urgence (break-glass) ?"},
options:[
 {en:"Shared use of the tenant creator's personal account", fr:"L'usage partagé du compte personnel du créateur du tenant"},
 {en:"One synchronized account with a permanent Global Administrator assignment and no MFA", fr:"Un compte synchronisé avec une attribution permanente de Global Administrator et sans MFA"},
 {en:"At least two cloud-only accounts, excluded from all Conditional Access policies, with strong credentials stored securely offline and sign-in alerting enabled", fr:"Au moins deux comptes cloud-only, exclus de toutes les stratégies d'accès conditionnel, avec des identifiants robustes conservés hors ligne en sécurité et une alerte sur leurs connexions"},
 {en:"Two accounts managed through PIM as eligible only, so they must be activated in an emergency", fr:"Deux comptes gérés dans PIM en éligible uniquement, à activer en cas d'urgence"}],
correct:[2],
explanation:{en:"A is wrong: shared personal accounts destroy accountability.\nB is wrong: a single synced account fails exactly when hybrid identity breaks, and a phishable or absent credential is a standing risk — modern guidance is a phishing-resistant credential such as a FIDO2 key.\nC is correct: they must be cloud-only (so an on-premises outage cannot affect them), excluded from CA (so a misconfigured policy cannot lock you out), at least two for redundancy, and monitored because any sign-in should be an incident.\nD is wrong: making them PIM-eligible means their access depends on PIM being available, defeating the purpose.",
fr:"A est faux : les comptes personnels partagés détruisent la traçabilité.\nB est faux : un compte synchronisé unique échoue précisément quand l'identité hybride tombe, et un identifiant hameçonnable ou absent est un risque permanent — la recommandation actuelle est un identifiant résistant au phishing comme une clé FIDO2.\nC est correct : ils doivent être cloud-only (pour qu'une panne on-prem ne les touche pas), exclus de l'accès conditionnel (pour qu'une stratégie mal configurée ne t'enferme pas dehors), au moins deux pour la redondance, et surveillés puisque toute connexion doit être un incident.\nD est faux : les rendre éligibles dans PIM fait dépendre leur accès de la disponibilité de PIM, ce qui annule leur raison d'être."}
},
{
id:"d2-064", domain:2, topic:"CA for workload identities",
q:{en:"A service principal used by an integration must only be able to authenticate from your datacentre IP ranges. What do you need?",
   fr:"Un service principal utilisé par une intégration ne doit pouvoir s'authentifier que depuis les plages IP de ton datacenter. De quoi as-tu besoin ?"},
options:[
 {en:"A standard Conditional Access policy targeting users, since service principals are users too", fr:"Une stratégie d'accès conditionnel standard ciblant les utilisateurs, puisque les service principals sont aussi des utilisateurs"},
 {en:"An IP restriction on the app registration manifest", fr:"Une restriction IP dans le manifeste de l'app registration"},
 {en:"A named location alone", fr:"Une named location seule"},
 {en:"A Conditional Access policy for workload identities with a location condition, which requires Workload Identities Premium licensing", fr:"Une stratégie d'accès conditionnel pour workload identities avec une condition d'emplacement, qui nécessite une licence Workload Identities Premium"}],
correct:[3],
explanation:{en:"A is wrong: user-targeted policies do not evaluate app-only authentication — that is why a separate policy type exists.\nB is wrong: the manifest has no IP restriction capability.\nC is wrong: a named location is only a building block; without a policy that uses it nothing is enforced.\nD is correct: Conditional Access can target workload identities (single-tenant service principals) with location and risk conditions and a block control, and it requires the Workload Identities Premium add-on.",
fr:"A est faux : les stratégies ciblant les utilisateurs n'évaluent pas l'authentification app-only — c'est pourquoi un type de stratégie distinct existe.\nB est faux : le manifeste n'offre aucune capacité de restriction IP.\nC est faux : une named location n'est qu'une brique ; sans stratégie qui l'utilise, rien n'est appliqué.\nD est correct : l'accès conditionnel peut cibler les workload identities (service principals mono-tenant) avec des conditions d'emplacement et de risque et un contrôle de blocage, et cela nécessite le module Workload Identities Premium."}
},
{
id:"d2-065", domain:2, topic:"CA - insider risk condition",
q:{en:"Your organization uses Microsoft Purview insider risk management. You want users whose insider risk level becomes elevated to be blocked from downloading corporate data. What enables this in Conditional Access?",
   fr:"Ton organisation utilise la gestion des risques internes de Microsoft Purview. Tu veux que les utilisateurs dont le niveau de risque interne devient élevé soient empêchés de télécharger des données d'entreprise. Qu'est-ce qui permet cela dans l'accès conditionnel ?"},
options:[
 {en:"The insider risk condition, which consumes Purview adaptive protection risk levels as a Conditional Access signal", fr:"La condition insider risk, qui consomme les niveaux de risque d'adaptive protection de Purview comme signal d'accès conditionnel"},
 {en:"The user risk condition from ID Protection", fr:"La condition de risque utilisateur d'ID Protection"},
 {en:"A device filter on a custom attribute", fr:"Un filtre d'appareils sur un attribut personnalisé"},
 {en:"The sign-in risk condition from ID Protection", fr:"La condition de risque de connexion d'ID Protection"}],
correct:[0],
explanation:{en:"A is correct: adaptive protection publishes insider risk levels (minor, moderate, elevated) that Conditional Access can consume as a condition, letting access tighten automatically for risky behaviour rather than risky authentication.\nB and D are wrong: ID Protection risk is about compromised credentials and suspicious authentication, not data-handling behaviour.\nC is wrong: device filters evaluate device attributes and have no view of user behaviour.",
fr:"A est correct : l'adaptive protection publie des niveaux de risque interne (mineur, modéré, élevé) que l'accès conditionnel peut consommer comme condition, ce qui durcit automatiquement l'accès sur un comportement à risque plutôt que sur une authentification à risque.\nB et D sont faux : le risque d'ID Protection porte sur les identifiants compromis et l'authentification suspecte, pas sur le comportement de manipulation des données.\nC est faux : les filtres d'appareils évaluent des attributs d'appareil et n'ont aucune vue du comportement utilisateur."}
},
{
id:"d2-066", domain:2, topic:"CA exclusion hygiene",
q:{en:"A penetration test shows 40 users bypassing your MFA policy. Investigation reveals they are in an exclusion group created two years ago for a migration. What is the right lesson and action?",
   fr:"Un test d'intrusion montre 40 utilisateurs contournant ta stratégie MFA. L'enquête révèle qu'ils sont dans un groupe d'exclusion créé il y a deux ans pour une migration. Quelle est la bonne leçon et la bonne action ?"},
options:[
 {en:"Add a second MFA policy without exclusions and leave the first in place", fr:"Ajouter une seconde stratégie MFA sans exclusion et laisser la première en place"},
 {en:"Exclusions are permanent unless governed — remove the stale members, and put the exclusion group under a recurring access review so it empties itself", fr:"Les exclusions sont permanentes si elles ne sont pas gouvernées — retirer les membres obsolètes, et placer le groupe d'exclusion sous access review récurrente pour qu'il se vide de lui-même"},
 {en:"Delete the MFA policy and recreate it", fr:"Supprimer la stratégie MFA et la recréer"},
 {en:"Exclusions expire automatically after one year, so no action is needed", fr:"Les exclusions expirent automatiquement au bout d'un an, aucune action n'est nécessaire"}],
correct:[1],
explanation:{en:"A is wrong: it would work, since grant controls from all applicable policies must be satisfied — but leaving a misgoverned exclusion group in place fails the audit and hides the real problem.\nB is correct: Conditional Access exclusions never expire on their own, which makes them the most common real-world gap. Governing the exclusion group with an access review (or an access package with expiry) turns a permanent hole into a temporary one.\nC is wrong: recreating the policy does not address the group, and you would likely re-add the same exclusion.\nD is wrong: there is no automatic expiry of exclusions.",
fr:"A est faux : cela fonctionnerait, puisque les contrôles d'octroi de toutes les stratégies applicables doivent être satisfaits — mais laisser en place un groupe d'exclusion non gouverné échoue à l'audit et masque le vrai problème.\nB est correct : les exclusions d'accès conditionnel n'expirent jamais d'elles-mêmes, ce qui en fait la faille la plus courante en pratique. Gouverner le groupe d'exclusion par une access review (ou un access package avec expiration) transforme un trou permanent en trou temporaire.\nC est faux : recréer la stratégie ne traite pas le groupe, et tu y remettrais probablement la même exclusion.\nD est faux : il n'existe aucune expiration automatique des exclusions."}
},
{
id:"d2-067", domain:2, topic:"Per-user MFA states",
q:{en:"A user is set to Enforced in the legacy per-user MFA portal. You create a Conditional Access policy that requires MFA only from outside the corporate network. The user is prompted for MFA even in the office. Why?",
   fr:"Un utilisateur est en Enforced dans l'ancien portail MFA par utilisateur. Tu crées une stratégie d'accès conditionnel exigeant le MFA uniquement hors du réseau d'entreprise. L'utilisateur est invité au MFA même au bureau. Pourquoi ?"},
options:[
 {en:"The corporate network is not registered as a named location, which is the only possible cause", fr:"Le réseau d'entreprise n'est pas enregistré comme named location, seule cause possible"},
 {en:"Conditional Access policies take up to 24 hours to apply", fr:"Les stratégies d'accès conditionnel mettent jusqu'à 24 heures à s'appliquer"},
 {en:"Per-user MFA state overrides your conditions — the user must be set to Disabled in per-user MFA for Conditional Access to control when MFA applies", fr:"L'état MFA par utilisateur prime sur tes conditions — l'utilisateur doit être mis à Disabled dans le MFA par utilisateur pour que l'accès conditionnel décide quand le MFA s'applique"},
 {en:"The user must re-register their authentication methods", fr:"L'utilisateur doit réenregistrer ses méthodes d'authentification"}],
correct:[2],
explanation:{en:"A is wrong: a missing named location is worth checking, but the option overstates it as the only cause and the per-user state explains the symptom.\nB is wrong: policies apply within minutes.\nC is correct: a user Enforced in per-user MFA is always challenged, whatever Conditional Access says. The migration path is to move the requirement into Conditional Access and set per-user MFA to Disabled — leaving both configured is the classic double-prompt trap.\nD is wrong: registration state does not create unconditional prompts.",
fr:"A est faux : une named location manquante mérite vérification, mais l'option la présente à tort comme seule cause alors que l'état par utilisateur explique le symptôme.\nB est faux : les stratégies s'appliquent en quelques minutes.\nC est correct : un utilisateur en Enforced dans le MFA par utilisateur est toujours challengé, quoi que dise l'accès conditionnel. Le chemin de migration est de porter l'exigence dans l'accès conditionnel et de mettre le MFA par utilisateur à Disabled — laisser les deux configurés est le piège classique de la double invite.\nD est faux : l'état d'inscription ne crée pas d'invites inconditionnelles."}
},
{
id:"d2-068", domain:2, topic:"Trusted IPs vs named locations",
q:{en:"Your tenant still uses the legacy MFA \"Trusted IPs\" list to skip MFA at the office. What is the modern equivalent and why migrate?",
   fr:"Ton tenant utilise encore l'ancienne liste « Trusted IPs » du MFA pour éviter le MFA au bureau. Quel est l'équivalent moderne et pourquoi migrer ?"},
options:[
 {en:"Security defaults, which include an office IP exemption", fr:"Les Security defaults, qui incluent une exemption pour l'IP du bureau"},
 {en:"Per-user MFA exclusions", fr:"Des exclusions dans le MFA par utilisateur"},
 {en:"Nothing — Trusted IPs is the current recommended feature", fr:"Rien — Trusted IPs est la fonctionnalité recommandée actuelle"},
 {en:"Named locations used as a Conditional Access condition — they are per-policy, auditable in sign-in logs, and Microsoft now recommends replacing IP-based trust with device compliance or a compliant network check", fr:"Les named locations utilisées comme condition d'accès conditionnel — elles sont propres à chaque stratégie, auditables dans les journaux de connexion, et Microsoft recommande désormais de remplacer la confiance par IP par la conformité d'appareil ou un compliant network check"}],
correct:[3],
explanation:{en:"A is wrong: Security defaults have no IP exemption and cannot be customized.\nB is wrong: per-user exclusions remove MFA entirely for that user, everywhere.\nC is wrong: Trusted IPs is a legacy MFA-portal setting.\nD is correct: named locations are the Conditional Access construct, applied selectively per policy and visible in the logs. Beyond the migration, Microsoft's guidance is that a public IP address is a weak trust signal — device compliance or the Global Secure Access compliant network check are the stronger replacements.",
fr:"A est faux : les Security defaults n'ont pas d'exemption IP et ne sont pas personnalisables.\nB est faux : les exclusions par utilisateur retirent totalement le MFA pour cet utilisateur, partout.\nC est faux : Trusted IPs est un réglage de l'ancien portail MFA.\nD est correct : les named locations sont la construction de l'accès conditionnel, appliquées sélectivement par stratégie et visibles dans les journaux. Au-delà de la migration, la recommandation de Microsoft est qu'une adresse IP publique est un signal de confiance faible — la conformité d'appareil ou le compliant network check de Global Secure Access sont les remplacements robustes."}
},
{
id:"d2-069", domain:2, topic:"Remember MFA vs sign-in frequency",
q:{en:"You want browser sessions on unmanaged devices to require reauthentication every 8 hours and never to persist. Which mechanism should you use?",
   fr:"Tu veux que les sessions navigateur sur les appareils non gérés exigent une réauthentification toutes les 8 heures et ne persistent jamais. Quel mécanisme utiliser ?"},
options:[
 {en:"Conditional Access session controls: sign-in frequency of 8 hours plus persistent browser session set to Never persistent", fr:"Les contrôles de session d'accès conditionnel : fréquence de connexion à 8 heures plus session navigateur persistante réglée sur Jamais persistante"},
 {en:"Ask users to sign out manually", fr:"Demander aux utilisateurs de se déconnecter manuellement"},
 {en:"The legacy \"Remember multifactor authentication on trusted device\" setting set to 1 day", fr:"L'ancien réglage « Se souvenir de l'authentification multifacteur sur les appareils approuvés » réglé sur 1 jour"},
 {en:"Reduce the access token lifetime with Configurable Token Lifetime policies", fr:"Réduire la durée de vie des jetons d'accès avec les stratégies Configurable Token Lifetime"}],
correct:[0],
explanation:{en:"A is correct: sign-in frequency and persistent browser session are the supported session controls, they can be scoped by device state, and Microsoft recommends them over the legacy remember-MFA setting (the two should not be combined).\nB is wrong: relying on user behaviour is not a control.\nC is wrong: the legacy setting is tenant-wide, cannot target unmanaged devices, and conflicts with session controls.\nD is wrong: token lifetime policies for these behaviours were retired in favour of Conditional Access and Continuous Access Evaluation.",
fr:"A est correct : la fréquence de connexion et la session navigateur persistante sont les contrôles de session supportés, ils peuvent être ciblés selon l'état de l'appareil, et Microsoft les recommande plutôt que l'ancien réglage « se souvenir du MFA » (les deux ne doivent pas être combinés).\nB est faux : compter sur le comportement des utilisateurs n'est pas un contrôle.\nC est faux : l'ancien réglage est global au tenant, ne peut pas cibler les appareils non gérés, et entre en conflit avec les contrôles de session.\nD est faux : les stratégies de durée de vie de jetons pour ces comportements ont été retirées au profit de l'accès conditionnel et de la Continuous Access Evaluation."}
},
{
id:"d2-070", domain:2, topic:"Passwordless phone sign-in",
q:{en:"You enable passwordless phone sign-in with Microsoft Authenticator. What does the user experience become?",
   fr:"Tu actives la connexion par téléphone sans mot de passe avec Microsoft Authenticator. Que devient l'expérience utilisateur ?"},
options:[
 {en:"They enter their password, then approve a push notification", fr:"Il saisit son mot de passe, puis approuve une notification push"},
 {en:"They enter their username, then approve in Authenticator with number matching and biometrics or PIN — no password is typed at all", fr:"Il saisit son nom d'utilisateur, puis approuve dans Authenticator avec number matching et biométrie ou code PIN — aucun mot de passe n'est saisi"},
 {en:"They receive an SMS code instead of a password", fr:"Il reçoit un code SMS au lieu d'un mot de passe"},
 {en:"Their password is removed from the account permanently", fr:"Son mot de passe est supprimé définitivement du compte"}],
correct:[1],
explanation:{en:"A is wrong: that describes classic password plus MFA push.\nB is correct: phone sign-in replaces the password entirely — the phone's device-bound key plus the local gesture and number matching form the authentication, which counts as multifactor.\nC is wrong: SMS is a separate, weaker method.\nD is wrong: the account keeps a password unless you additionally remove it; passwordless changes how the user signs in, not whether a credential exists.",
fr:"A est faux : cela décrit le classique mot de passe plus push MFA.\nB est correct : la connexion par téléphone remplace entièrement le mot de passe — la clé liée à l'appareil, le geste local et le number matching constituent l'authentification, considérée comme multifacteur.\nC est faux : le SMS est une méthode distincte et plus faible.\nD est faux : le compte conserve un mot de passe sauf suppression explicite ; le sans mot de passe change la façon de se connecter, pas l'existence de l'identifiant."}
},
{
id:"d2-071", domain:2, topic:"Passkeys in Authenticator",
q:{en:"Management asks for phishing-resistant MFA without buying hardware keys for 3,000 employees who already use Microsoft Authenticator. What do you deploy?",
   fr:"La direction demande un MFA résistant au phishing sans acheter de clés matérielles pour 3 000 salariés qui utilisent déjà Microsoft Authenticator. Que déploies-tu ?"},
options:[
 {en:"OATH software tokens", fr:"Des tokens logiciels OATH"},
 {en:"SMS with a longer code", fr:"Un SMS avec un code plus long"},
 {en:"Device-bound passkeys in Microsoft Authenticator, enabled through the passkey (FIDO2) authentication method policy", fr:"Des passkeys liées à l'appareil dans Microsoft Authenticator, activées via la stratégie de méthode d'authentification passkey (FIDO2)"},
 {en:"Push notifications with number matching, which are phishing-resistant", fr:"Des notifications push avec number matching, qui sont résistantes au phishing"}],
correct:[2],
explanation:{en:"A is wrong: TOTP codes are entirely phishable.\nB is wrong: SMS is the weakest common method regardless of code length.\nC is correct: passkeys in Authenticator are device-bound FIDO2 credentials, so they satisfy the phishing-resistant authentication strength without hardware purchases, and you enable them in the passkey method policy (restricting the Authenticator AAGUIDs if you wish).\nD is wrong: number matching greatly reduces MFA fatigue attacks but push approval is still phishable through adversary-in-the-middle.",
fr:"A est faux : les codes TOTP sont entièrement hameçonnables.\nB est faux : le SMS est la méthode courante la plus faible, quelle que soit la longueur du code.\nC est correct : les passkeys dans Authenticator sont des identifiants FIDO2 liés à l'appareil, elles satisfont donc l'authentication strength résistante au phishing sans achat de matériel, et on les active dans la stratégie de méthode passkey (en restreignant les AAGUID d'Authenticator si tu le souhaites).\nD est faux : le number matching réduit fortement les attaques de fatigue MFA mais l'approbation push reste hameçonnable via un adversaire au milieu."}
},
{
id:"d2-072", domain:2, topic:"FIDO2 policy options",
q:{en:"You want employees to enrol their own FIDO2 keys, but only keys whose authenticity is cryptographically proven by the manufacturer. Which two FIDO2 policy settings matter?",
   fr:"Tu veux que les salariés enrôlent eux-mêmes leurs clés FIDO2, mais uniquement des clés dont l'authenticité est prouvée cryptographiquement par le fabricant. Quels deux réglages de la stratégie FIDO2 comptent ?"},
options:[
 {en:"Key restrictions set to Block, and Allow self-service set up", fr:"Les key restrictions réglées sur Bloquer, et Autoriser la configuration en self-service"},
 {en:"Allow self-service set up, and Require number matching", fr:"Autoriser la configuration en self-service, et Exiger le number matching"},
 {en:"Enforce attestation, and Require a Temporary Access Pass", fr:"Imposer l'attestation, et Exiger un Temporary Access Pass"},
 {en:"Allow self-service set up, and Enforce attestation", fr:"Autoriser la configuration en self-service, et Imposer l'attestation"}],
correct:[3],
explanation:{en:"A is wrong: a Block list denies specific AAGUIDs, which is the opposite approach and does not prove authenticity of what remains.\nB is wrong: number matching belongs to the Authenticator method, not FIDO2.\nC is wrong: TAP is a bootstrap credential, not an authenticity check.\nD is correct: self-service set up lets users register their own keys, and enforcing attestation makes Entra ID verify the manufacturer attestation statement so only genuine, certified devices are accepted.",
fr:"A est faux : une liste de blocage refuse des AAGUID précis, c'est l'approche inverse et cela ne prouve pas l'authenticité de ce qui reste.\nB est faux : le number matching relève de la méthode Authenticator, pas de FIDO2.\nC est faux : le TAP est un identifiant d'amorçage, pas une vérification d'authenticité.\nD est correct : la configuration en self-service laisse les utilisateurs enregistrer leurs clés, et imposer l'attestation fait vérifier par Entra ID la déclaration d'attestation du fabricant pour n'accepter que des appareils authentiques et certifiés."}
},
{
id:"d2-073", domain:2, topic:"TAP configuration",
q:{en:"New hires must bootstrap Windows Hello for Business on their first day without ever using a password, and the credential must be usable only once. How do you configure the Temporary Access Pass policy?",
   fr:"Les nouveaux arrivants doivent amorcer Windows Hello for Business le premier jour sans jamais utiliser de mot de passe, et l'identifiant ne doit servir qu'une fois. Comment configures-tu la stratégie Temporary Access Pass ?"},
options:[
 {en:"Enable TAP for the onboarding group with one-time use required and a short lifetime", fr:"Activer le TAP pour le groupe d'onboarding avec usage unique obligatoire et une durée de vie courte"},
 {en:"Enable TAP tenant-wide as reusable with a 30-day lifetime", fr:"Activer le TAP pour tout le tenant en réutilisable avec une durée de vie de 30 jours"},
 {en:"Give them a temporary password and require a change at first sign-in", fr:"Leur donner un mot de passe temporaire et exiger un changement à la première connexion"},
 {en:"Register a FIDO2 key on their behalf and hand it over", fr:"Enregistrer une clé FIDO2 à leur place et la leur remettre"}],
correct:[0],
explanation:{en:"A is correct: TAP is the supported passwordless bootstrap credential — it can be limited to one use and to a short validity window, and it lets the user register a strong method such as Windows Hello or a passkey.\nB is wrong: a long-lived reusable TAP for everyone is a serious standing risk.\nC is wrong: a temporary password reintroduces exactly the credential you wanted to avoid.\nD is wrong: registering a credential on a user's behalf breaks the binding between the person and their authenticator.",
fr:"A est correct : le TAP est l'identifiant d'amorçage sans mot de passe supporté — il peut être limité à un seul usage et à une courte fenêtre de validité, et il permet à l'utilisateur d'enregistrer une méthode forte comme Windows Hello ou une passkey.\nB est faux : un TAP réutilisable à longue durée pour tout le monde est un risque permanent sérieux.\nC est faux : un mot de passe temporaire réintroduit précisément l'identifiant qu'on voulait éviter.\nD est faux : enregistrer un identifiant à la place d'un utilisateur casse le lien entre la personne et son authentificateur."}
},
{
id:"d2-074", domain:2, topic:"SSPR account unlock",
q:{en:"Hybrid users are frequently locked out of their on-premises AD account after typing a wrong password, and call the helpdesk. You want them to self-unlock WITHOUT changing their password. What do you enable?",
   fr:"Des utilisateurs hybrides sont souvent verrouillés sur leur compte AD on-prem après une erreur de mot de passe, et appellent le helpdesk. Tu veux qu'ils se déverrouillent eux-mêmes SANS changer de mot de passe. Qu'actives-tu ?"},
options:[
 {en:"Self-service password reset only, since unlocking always requires a reset", fr:"Uniquement le SSPR, puisque le déverrouillage exige toujours une réinitialisation"},
 {en:"The SSPR option to allow users to unlock their account without resetting the password, which requires password writeback", fr:"L'option SSPR autorisant les utilisateurs à déverrouiller leur compte sans réinitialiser le mot de passe, qui nécessite le password writeback"},
 {en:"Removing the on-premises account lockout policy", fr:"Supprimer la stratégie de verrouillage de compte on-prem"},
 {en:"Smart lockout with a shorter duration", fr:"Le smart lockout avec une durée plus courte"}],
correct:[1],
explanation:{en:"A is wrong: unlock-without-reset is an explicit, separate option.\nB is correct: SSPR can write an unlock back to on-premises AD as a distinct operation from a password reset, so the user keeps their password. It depends on password writeback being configured.\nC is wrong: removing lockout protection to avoid lockouts trades a helpdesk annoyance for a brute-force exposure.\nD is wrong: smart lockout protects cloud authentication against brute force; it does not unlock an on-premises account.",
fr:"A est faux : le déverrouillage sans réinitialisation est une option explicite et distincte.\nB est correct : le SSPR peut réécrire un déverrouillage dans l'AD on-prem comme opération distincte d'une réinitialisation, donc l'utilisateur garde son mot de passe. Cela dépend du password writeback configuré.\nC est faux : supprimer la protection de verrouillage pour éviter les verrouillages échange une gêne du helpdesk contre une exposition au brute force.\nD est faux : le smart lockout protège l'authentification cloud contre le brute force, il ne déverrouille pas un compte on-prem."}
},
{
id:"d2-075", domain:2, topic:"SSPR notifications",
q:{en:"Security wants to be alerted whenever any administrator's password is reset through SSPR, and wants users notified about resets on their own account. What do you configure?",
   fr:"La sécurité veut être alertée dès qu'un mot de passe d'administrateur est réinitialisé via le SSPR, et veut que les utilisateurs soient notifiés des réinitialisations sur leur propre compte. Que configures-tu ?"},
options:[
 {en:"Nothing — SSPR events are not notifiable", fr:"Rien — les événements SSPR ne sont pas notifiables"},
 {en:"A Log Analytics alert on the SigninLogs table", fr:"Une alerte Log Analytics sur la table SigninLogs"},
 {en:"The SSPR notification settings: notify users on password resets, and notify all admins when other admins reset their password", fr:"Les réglages de notification du SSPR : notifier les utilisateurs lors des réinitialisations, et notifier tous les admins quand d'autres admins réinitialisent leur mot de passe"},
 {en:"An ID Protection user risk policy", fr:"Une stratégie de risque utilisateur d'ID Protection"}],
correct:[2],
explanation:{en:"A is wrong: the notifications exist.\nB is wrong: password resets are audit events, not sign-ins, so that table is the wrong one — and a custom alert is unnecessary when a built-in setting exists (though audit-log alerting is a valid complement).\nC is correct: the SSPR policy has two built-in notification switches that cover exactly these needs, with no extra tooling.\nD is wrong: a user risk policy remediates risk, it does not notify about resets.",
fr:"A est faux : ces notifications existent.\nB est faux : les réinitialisations de mot de passe sont des événements d'audit, pas des connexions, donc cette table est la mauvaise — et une alerte sur mesure est inutile quand un réglage intégré existe (bien qu'une alerte sur les journaux d'audit soit un complément valable).\nC est correct : la stratégie SSPR comporte deux interrupteurs de notification intégrés qui couvrent exactement ces besoins, sans outillage supplémentaire.\nD est faux : une stratégie de risque utilisateur remédie au risque, elle ne notifie pas des réinitialisations."}
},
{
id:"d2-076", domain:2, topic:"SSPR method count",
q:{en:"Your SSPR policy requires 2 methods to reset, and offers mobile app notification, mobile app code, email and mobile phone. A user registered only the Authenticator app. Can they reset their password?",
   fr:"Ta stratégie SSPR exige 2 méthodes pour réinitialiser, et propose notification par app mobile, code d'app mobile, email et téléphone mobile. Un utilisateur n'a enregistré que l'app Authenticator. Peut-il réinitialiser son mot de passe ?"},
options:[
 {en:"Yes, because the app provides both a notification and a code, which counts as two", fr:"Oui, car l'app fournit à la fois une notification et un code, ce qui compte pour deux"},
 {en:"Yes, administrators are exempt from the method count", fr:"Oui, les administrateurs sont exemptés du nombre de méthodes"},
 {en:"No, and the reset will silently fail without any message", fr:"Non, et la réinitialisation échouera silencieusement sans message"},
 {en:"No — with 2 methods required they must satisfy two DIFFERENT enabled methods, so they need to register another one", fr:"Non — avec 2 méthodes requises il doit satisfaire deux méthodes activées DIFFÉRENTES, il doit donc en enregistrer une autre"}],
correct:[3],
explanation:{en:"A is wrong: notification and code from the same app do not count as two independent methods for the reset requirement.\nB is wrong: administrators face a stricter policy, not a laxer one — always two methods and no security questions.\nC is wrong: the user is told that more information is required; it does not fail silently.\nD is correct: the required number of methods means distinct methods must be verified, so a single registered method blocks the reset until the user registers another — which is why registration enforcement matters before tightening this number.",
fr:"A est faux : notification et code de la même app ne comptent pas comme deux méthodes indépendantes pour cette exigence.\nB est faux : les administrateurs subissent une stratégie plus stricte, pas plus souple — toujours deux méthodes et pas de questions de sécurité.\nC est faux : l'utilisateur est informé qu'il faut davantage d'informations, l'échec n'est pas silencieux.\nD est correct : le nombre de méthodes requis signifie que des méthodes distinctes doivent être vérifiées, donc une seule méthode enregistrée bloque la réinitialisation jusqu'à ce que l'utilisateur en enregistre une autre — d'où l'importance d'imposer l'inscription avant de durcir ce nombre."}
},
{
id:"d2-077", domain:2, topic:"Global banned password list",
q:{en:"Which statement about the global banned password list is correct?",
   fr:"Quelle affirmation sur la liste globale de mots de passe interdits est correcte ?"},
options:[
 {en:"It is maintained by Microsoft from real attack telemetry, always applied to all Entra ID tenants, and cannot be disabled or viewed", fr:"Elle est maintenue par Microsoft à partir de la télémétrie d'attaques réelles, toujours appliquée à tous les tenants Entra ID, et ne peut être ni désactivée ni consultée"},
 {en:"It replaces the need for a custom banned password list", fr:"Elle rend inutile toute liste personnalisée de mots de passe interdits"},
 {en:"It only applies to administrators", fr:"Elle ne s'applique qu'aux administrateurs"},
 {en:"It must be enabled in the password protection settings", fr:"Elle doit être activée dans les paramètres de protection des mots de passe"}],
correct:[0],
explanation:{en:"A is correct: the global list is always on for every tenant, is not visible or editable, and uses fuzzy matching plus substitution detection so variants are caught too.\nB is wrong: the custom list adds organisation-specific terms — brand names, local teams, product names — that global telemetry has no reason to include.\nC is wrong: it protects all users.\nD is wrong: only the CUSTOM list and the on-premises enforcement need enabling.",
fr:"A est correct : la liste globale est toujours active pour chaque tenant, n'est ni visible ni modifiable, et utilise une correspondance approximative avec détection des substitutions pour attraper aussi les variantes.\nB est faux : la liste personnalisée ajoute des termes propres à l'organisation — marques, clubs locaux, noms de produits — que la télémétrie globale n'a aucune raison d'inclure.\nC est faux : elle protège tous les utilisateurs.\nD est faux : seules la liste PERSONNALISÉE et l'application on-prem doivent être activées."}
},
{
id:"d2-078", domain:2, topic:"Password protection deployment mode",
q:{en:"You are deploying Entra Password Protection on domain controllers. How should you start, and why?",
   fr:"Tu déploies Entra Password Protection sur des contrôleurs de domaine. Comment commencer, et pourquoi ?"},
options:[
 {en:"By disabling the on-premises password policy first", fr:"En désactivant d'abord la stratégie de mot de passe on-prem"},
 {en:"In Audit mode, which logs what WOULD be rejected without blocking users, then switch to Enforce once you have reviewed the impact", fr:"En mode Audit, qui journalise ce qui SERAIT rejeté sans bloquer les utilisateurs, puis passer en Enforce après revue de l'impact"},
 {en:"In Enforce mode immediately, since audit mode does not log anything", fr:"En mode Enforce immédiatement, car le mode audit ne journalise rien"},
 {en:"With the DC agent on one domain controller only, permanently", fr:"Avec l'agent DC sur un seul contrôleur de domaine, définitivement"}],
correct:[1],
explanation:{en:"A is wrong: password protection complements the AD policy; disabling the latter weakens security.\nB is correct: audit mode writes events to the DC agent's event log showing which password changes would have been rejected, letting you size the change before enforcing it.\nC is wrong: audit mode logs precisely this, which is its purpose.\nD is wrong: the agent must eventually be on every writable domain controller, otherwise password changes handled by other DCs escape the policy.",
fr:"A est faux : la protection des mots de passe complète la stratégie AD ; désactiver celle-ci affaiblit la sécurité.\nB est correct : le mode audit écrit dans le journal d'événements de l'agent DC les changements de mot de passe qui auraient été rejetés, ce qui permet de mesurer l'impact avant d'appliquer.\nC est faux : le mode audit journalise précisément cela, c'est sa raison d'être.\nD est faux : l'agent doit à terme être sur chaque contrôleur de domaine inscriptible, sinon les changements traités par les autres DC échappent à la stratégie."}
},
{
id:"d2-079", domain:2, topic:"Risk level aggregation",
q:{en:"A user triggered three Low sign-in risk detections this week. Their user risk is now Medium although no single detection was Medium. Why?",
   fr:"Un utilisateur a déclenché trois détections de risque de connexion Faible cette semaine. Son risque utilisateur est maintenant Moyen alors qu'aucune détection n'était Moyenne. Pourquoi ?"},
options:[
 {en:"It is a bug; user risk should equal the highest sign-in risk", fr:"C'est un bug ; le risque utilisateur devrait égaler le risque de connexion le plus élevé"},
 {en:"The user must have leaked credentials, the only cause of Medium user risk", fr:"L'utilisateur doit avoir des identifiants fuités, seule cause d'un risque utilisateur Moyen"},
 {en:"User risk is an aggregate score built from all detections for that identity over time, so several low-severity signals can raise it", fr:"Le risque utilisateur est un score agrégé construit à partir de toutes les détections liées à cette identité dans le temps, donc plusieurs signaux de faible gravité peuvent l'élever"},
 {en:"Risk levels increase automatically every 7 days", fr:"Les niveaux de risque augmentent automatiquement tous les 7 jours"}],
correct:[2],
explanation:{en:"A is wrong: aggregation is by design.\nB is wrong: leaked credentials raise user risk but are not the only contributor.\nC is correct: sign-in risk describes one authentication, while user risk accumulates evidence about the identity across detections — which is why the two policies exist separately and remediate differently.\nD is wrong: risk does not inflate on a timer; unremediated risk simply persists.",
fr:"A est faux : l'agrégation est voulue par conception.\nB est faux : les identifiants fuités élèvent le risque utilisateur mais n'en sont pas la seule cause.\nC est correct : le risque de connexion décrit une authentification, tandis que le risque utilisateur accumule les preuves concernant l'identité à travers les détections — d'où l'existence de deux stratégies distinctes avec des remédiations différentes.\nD est faux : le risque ne gonfle pas avec le temps ; un risque non remédié persiste simplement."}
},
{
id:"d2-080", domain:2, topic:"Risky users report",
q:{en:"From the Risky users report, which actions can an analyst take directly? (Select TWO)",
   fr:"Depuis le rapport Utilisateurs à risque, quelles actions un analyste peut-il effectuer directement ? (Choisis DEUX réponses)"},
options:[
 {en:"Roll back the user's recent file changes", fr:"Annuler les modifications de fichiers récentes de l'utilisateur"},
 {en:"Reset the user's password", fr:"Réinitialiser le mot de passe de l'utilisateur"},
 {en:"Block the user from signing in", fr:"Empêcher l'utilisateur de se connecter"},
 {en:"Delete the user's mailbox", fr:"Supprimer la boîte aux lettres de l'utilisateur"}],
correct:[1,2],
explanation:{en:"A is wrong: file recovery is a SharePoint/OneDrive capability, not an ID Protection action.\nB and C are correct: the report offers identity containment and remediation actions — reset password (which also resets user risk when done as a secure change), block or unblock sign-in, confirm compromised, and dismiss risk.\nD is wrong: mailbox operations belong to Exchange and Purview tooling.",
fr:"A est faux : la récupération de fichiers est une capacité SharePoint/OneDrive, pas une action d'ID Protection.\nB et C sont corrects : le rapport propose des actions de confinement et de remédiation de l'identité — réinitialiser le mot de passe (ce qui réinitialise aussi le risque utilisateur lorsqu'il s'agit d'un changement sécurisé), bloquer ou débloquer la connexion, confirmer la compromission, et rejeter le risque.\nD est faux : les opérations sur les boîtes relèvent des outils Exchange et Purview."}
},
{
id:"d2-081", domain:2, topic:"Confirm safe",
q:{en:"A salesperson legitimately signs in from three countries in one week, generating atypical travel detections that keep interrupting them. Investigation confirms every sign-in was genuine. What should the analyst do?",
   fr:"Un commercial se connecte légitimement depuis trois pays en une semaine, générant des détections de voyage atypique qui l'interrompent sans cesse. L'enquête confirme que chaque connexion était authentique. Que doit faire l'analyste ?"},
options:[
 {en:"Confirm the sign-ins as safe, which clears the risk and feeds the model so similar legitimate patterns are scored better", fr:"Confirmer les connexions comme sûres, ce qui efface le risque et alimente le modèle pour que des schémas légitimes similaires soient mieux notés"},
 {en:"Do nothing, as feedback has no effect on detections", fr:"Ne rien faire, le retour n'ayant aucun effet sur les détections"},
 {en:"Exclude the user from all Conditional Access policies", fr:"Exclure l'utilisateur de toutes les stratégies d'accès conditionnel"},
 {en:"Disable ID Protection for the tenant", fr:"Désactiver ID Protection pour le tenant"}],
correct:[0],
explanation:{en:"A is correct: analyst feedback is the supported way to teach the system. Confirming safe (or dismissing risk) clears the state and improves future scoring for that user's pattern.\nB is wrong: the feedback loop demonstrably influences future risk assessment.\nC is wrong: a permanent exclusion is a standing security hole for someone who travels — exactly the profile attackers imitate.\nD is wrong: switching off the detection engine to silence one false positive is disproportionate.",
fr:"A est correct : le retour de l'analyste est la façon supportée d'entraîner le système. Confirmer comme sûr (ou rejeter le risque) efface l'état et améliore la notation future du schéma de cet utilisateur.\nB est faux : la boucle de retour influence bel et bien l'évaluation future du risque.\nC est faux : une exclusion permanente est une faille de sécurité durable pour quelqu'un qui voyage — précisément le profil que les attaquants imitent.\nD est faux : couper le moteur de détection pour taire un faux positif est disproportionné."}
},
{
id:"d2-082", domain:2, topic:"Exporting risk data",
q:{en:"Your SOC uses Microsoft Sentinel and needs ID Protection risk detections retained for one year and correlated with other sources. What do you configure?",
   fr:"Ton SOC utilise Microsoft Sentinel et doit conserver les détections de risque d'ID Protection un an et les corréler avec d'autres sources. Que configures-tu ?"},
options:[
 {en:"Increase the ID Protection retention setting to 365 days in the portal", fr:"Augmenter le réglage de rétention d'ID Protection à 365 jours dans le portail"},
 {en:"Diagnostic settings that stream the risk-related log categories to Log Analytics/Sentinel, plus the Entra ID data connector", fr:"Des diagnostic settings diffusant les catégories de journaux liées au risque vers Log Analytics/Sentinel, plus le connecteur de données Entra ID"},
 {en:"Download the CSV each month manually", fr:"Télécharger le CSV chaque mois manuellement"},
 {en:"Nothing — risk data is retained for two years natively", fr:"Rien — les données de risque sont conservées deux ans nativement"}],
correct:[1],
explanation:{en:"A is wrong: native ID Protection retention is fixed by licence and not configurable to a year.\nB is correct: risk detections and risky-user data are exportable log categories, and streaming them to Log Analytics (with Sentinel on top) gives long retention, KQL correlation and alerting.\nC is wrong: manual exports are fragile and cannot be correlated automatically.\nD is wrong: native retention is far shorter than two years.",
fr:"A est faux : la rétention native d'ID Protection est fixée par la licence et n'est pas configurable à un an.\nB est correct : les détections de risque et les données d'utilisateurs à risque sont des catégories de journaux exportables, et les diffuser vers Log Analytics (avec Sentinel par-dessus) donne longue rétention, corrélation KQL et alertes.\nC est faux : des exports manuels sont fragiles et non corrélables automatiquement.\nD est faux : la rétention native est bien inférieure à deux ans."}
},
{
id:"d2-083", domain:2, topic:"Sign-in error codes",
q:{en:"A user reports being unable to open Outlook on the web. The sign-in log shows failure code 53003. What does it mean?",
   fr:"Un utilisateur signale ne pas pouvoir ouvrir Outlook sur le web. Le journal de connexion affiche le code d'échec 53003. Que signifie-t-il ?"},
options:[
 {en:"The account is locked out by smart lockout", fr:"Le compte est verrouillé par le smart lockout"},
 {en:"Multifactor authentication is required and the user must complete it", fr:"L'authentification multifacteur est requise et l'utilisateur doit la compléter"},
 {en:"Access was blocked by a Conditional Access policy — the log's Conditional Access tab shows which policy and why", fr:"L'accès a été bloqué par une stratégie d'accès conditionnel — l'onglet Accès conditionnel du journal indique quelle stratégie et pourquoi"},
 {en:"The password was incorrect", fr:"Le mot de passe était incorrect"}],
correct:[2],
explanation:{en:"A is wrong: smart lockout has its own code (50053).\nB is wrong: an MFA interrupt is not a block; that is code 50076 or 50074 and the user is prompted rather than refused.\nC is correct: 53003 means blocked by Conditional Access, and the sign-in detail's Conditional Access tab lists every applicable policy with its result so you can see the responsible one.\nD is wrong: invalid credentials produce a different code (50126).",
fr:"A est faux : le smart lockout a son propre code (50053).\nB est faux : une interruption MFA n'est pas un blocage ; c'est le code 50076 ou 50074 et l'utilisateur est invité, pas refusé.\nC est correct : 53003 signifie bloqué par l'accès conditionnel, et l'onglet Accès conditionnel du détail de connexion liste chaque stratégie applicable avec son résultat pour identifier la responsable.\nD est faux : des identifiants invalides produisent un autre code (50126)."}
},
{
id:"d2-084", domain:2, topic:"Sign-in logs - CA analysis",
q:{en:"You must prove to an auditor which Conditional Access policies applied to a specific sign-in and whether each one succeeded. Where do you look?",
   fr:"Tu dois prouver à un auditeur quelles stratégies d'accès conditionnel se sont appliquées à une connexion précise et si chacune a réussi. Où regardes-tu ?"},
options:[
 {en:"The policy's own configuration page", fr:"La page de configuration de la stratégie elle-même"},
 {en:"The audit logs", fr:"Les journaux d'audit"},
 {en:"The What If tool", fr:"L'outil What If"},
 {en:"The Conditional Access tab of that sign-in's detail in the sign-in logs, which lists each policy as Success, Failure, Not applied or Report-only", fr:"L'onglet Accès conditionnel du détail de cette connexion dans les journaux de connexion, qui liste chaque stratégie en Succès, Échec, Non appliquée ou Report-only"}],
correct:[3],
explanation:{en:"A is wrong: the configuration shows intent, not what actually happened.\nB is wrong: audit logs record configuration changes, not per-sign-in evaluation.\nC is wrong: What If simulates a hypothetical sign-in and proves nothing about a real one.\nD is correct: each sign-in record carries the full policy evaluation, including report-only outcomes and the controls that were satisfied — the authoritative evidence for an auditor.",
fr:"A est faux : la configuration montre l'intention, pas ce qui s'est réellement produit.\nB est faux : les journaux d'audit enregistrent les changements de configuration, pas l'évaluation par connexion.\nC est faux : What If simule une connexion hypothétique et ne prouve rien sur une connexion réelle.\nD est correct : chaque enregistrement de connexion porte l'évaluation complète des stratégies, y compris les résultats report-only et les contrôles satisfaits — la preuve de référence pour un auditeur."}
},
{
id:"d2-085", domain:2, topic:"CA coverage gaps",
q:{en:"Management asks whether any sign-ins in your tenant are not covered by ANY Conditional Access policy. How do you answer with data?",
   fr:"La direction demande si certaines connexions de ton tenant ne sont couvertes par AUCUNE stratégie d'accès conditionnel. Comment répondre avec des données ?"},
options:[
 {en:"Use the Conditional Access insights and reporting workbook, which shows sign-ins with no policy applied, and query SigninLogs in Log Analytics for the same", fr:"Utiliser le workbook Conditional Access insights and reporting, qui montre les connexions sans stratégie appliquée, et interroger SigninLogs dans Log Analytics pour la même chose"},
 {en:"Read each policy's configuration and reason about the gaps", fr:"Lire la configuration de chaque stratégie et raisonner sur les trous"},
 {en:"Run What If for every user", fr:"Lancer What If pour chaque utilisateur"},
 {en:"Assume full coverage if you have a policy targeting All users", fr:"Supposer une couverture totale si tu as une stratégie ciblant Tous les utilisateurs"}],
correct:[0],
explanation:{en:"A is correct: the insights workbook is built for exactly this question and, with logs in Log Analytics, you can quantify uncovered sign-ins by application, user and client.\nB is wrong: reasoning about intent misses real-world exclusions, unsupported clients and edge flows.\nC is wrong: What If does not scale and only covers scenarios you think to test.\nD is wrong: an All users policy still has exclusions, condition filters and unsupported client apps, so coverage is never assumable.",
fr:"A est correct : le workbook insights est fait exactement pour cette question et, avec les journaux dans Log Analytics, tu peux quantifier les connexions non couvertes par application, utilisateur et client.\nB est faux : raisonner sur l'intention rate les exclusions réelles, les clients non supportés et les flux limites.\nC est faux : What If ne passe pas à l'échelle et ne couvre que les scénarios auxquels tu penses.\nD est faux : une stratégie Tous les utilisateurs comporte quand même des exclusions, des filtres de conditions et des clients non supportés, la couverture ne se présume jamais."}
},
{
id:"d2-086", domain:2, topic:"GSA traffic profiles",
q:{en:"You deploy the Global Secure Access client and want Exchange Online, SharePoint and Graph traffic to be acquired by the service so you can apply the compliant network check. Which traffic profile do you enable?",
   fr:"Tu déploies le client Global Secure Access et veux que le trafic Exchange Online, SharePoint et Graph soit capté par le service pour appliquer le compliant network check. Quel profil de trafic actives-tu ?"},
options:[
 {en:"The Private access traffic profile", fr:"Le profil de trafic Private access"},
 {en:"The Microsoft traffic profile", fr:"Le profil de trafic Microsoft"},
 {en:"A named location containing Microsoft IP ranges", fr:"Une named location contenant les plages IP Microsoft"},
 {en:"The Internet access traffic profile", fr:"Le profil de trafic Internet access"}],
correct:[1],
explanation:{en:"A is wrong: the private profile covers your internal resources.\nB is correct: the Microsoft traffic profile acquires traffic destined for Microsoft 365 and Entra services, which is what lets Conditional Access assert the compliant network check for those apps.\nC is wrong: IP-based named locations are the legacy approach the compliant network check replaces.\nD is wrong: the internet profile covers general web and third-party SaaS traffic.",
fr:"A est faux : le profil privé couvre tes ressources internes.\nB est correct : le profil de trafic Microsoft capte le trafic destiné aux services Microsoft 365 et Entra, ce qui permet à l'accès conditionnel d'affirmer le compliant network check pour ces applications.\nC est faux : les named locations basées IP sont l'approche historique que le compliant network check remplace.\nD est faux : le profil internet couvre le web général et le SaaS tiers."}
},
{
id:"d2-087", domain:2, topic:"GSA source IP restoration",
q:{en:"After deploying Global Secure Access, your sign-in logs show the service's IP addresses instead of your users' real ones, breaking an IP-based report. What feature addresses this?",
   fr:"Après le déploiement de Global Secure Access, tes journaux de connexion affichent les adresses IP du service au lieu des vraies IP des utilisateurs, ce qui casse un rapport basé sur les IP. Quelle fonctionnalité règle cela ?"},
options:[
 {en:"Switching all policies to report-only", fr:"Basculer toutes les stratégies en report-only"},
 {en:"Disabling the Microsoft traffic profile", fr:"Désactiver le profil de trafic Microsoft"},
 {en:"Source IP restoration, which preserves the original client IP for logging and for IP-based conditions", fr:"La source IP restoration, qui préserve l'IP cliente d'origine pour la journalisation et les conditions basées IP"},
 {en:"Adding the GSA IP ranges as a trusted named location", fr:"Ajouter les plages IP de GSA comme named location de confiance"}],
correct:[2],
explanation:{en:"A is wrong: report-only changes enforcement, not logged IP addresses.\nB is wrong: turning off the profile loses the benefits you deployed GSA for.\nC is correct: source IP restoration makes the original client address visible to Entra ID again, so logs stay meaningful and existing IP-based conditions keep working during a transition.\nD is wrong: marking the service's own IPs as trusted would make every user appear on a trusted network — a serious weakening.",
fr:"A est faux : le report-only change l'application, pas les adresses IP journalisées.\nB est faux : désactiver le profil fait perdre les bénéfices pour lesquels GSA a été déployé.\nC est correct : la source IP restoration rend à nouveau visible l'adresse cliente d'origine pour Entra ID, donc les journaux restent exploitables et les conditions basées IP existantes continuent de fonctionner pendant une transition.\nD est faux : marquer les IP du service comme de confiance ferait apparaître chaque utilisateur sur un réseau de confiance — un affaiblissement grave."}
},
{
id:"d2-088", domain:2, topic:"CBA revocation",
q:{en:"You deployed certificate-based authentication. A laptop is lost and its user certificate must stop working immediately. What must be in place?",
   fr:"Tu as déployé l'authentification par certificat. Un portable est perdu et son certificat utilisateur doit cesser de fonctionner immédiatement. Que faut-il avoir mis en place ?"},
options:[
 {en:"Nothing — revoking in your internal PKI is automatically known to Entra ID", fr:"Rien — révoquer dans ta PKI interne est automatiquement connu d'Entra ID"},
 {en:"Deletion of the user's device object", fr:"La suppression de l'objet appareil de l'utilisateur"},
 {en:"A password reset for the user", fr:"Une réinitialisation du mot de passe de l'utilisateur"},
 {en:"A published CRL whose distribution point is configured on the certificate authority object in the Entra trust store, so revocation is evaluated", fr:"Une CRL publiée dont le point de distribution est configuré sur l'objet autorité de certification du magasin de confiance Entra, afin que la révocation soit évaluée"}],
correct:[3],
explanation:{en:"A is wrong: Entra ID has no direct link to your PKI database.\nB is wrong: deleting the device object does not invalidate a user certificate.\nC is wrong: certificate authentication does not use the password.\nD is correct: Entra ID checks revocation only if the CA object in the trust store points to a reachable CRL distribution point; without it, a revoked certificate keeps authenticating. Note the CRL must be publicly reachable and within supported size limits.",
fr:"A est faux : Entra ID n'a aucun lien direct avec la base de ta PKI.\nB est faux : supprimer l'objet appareil n'invalide pas un certificat utilisateur.\nC est faux : l'authentification par certificat n'utilise pas le mot de passe.\nD est correct : Entra ID ne vérifie la révocation que si l'objet AC du magasin de confiance pointe vers un point de distribution de CRL accessible ; sans cela, un certificat révoqué continue d'authentifier. Note que la CRL doit être joignable publiquement et respecter les limites de taille supportées."}
},
{
id:"d2-089", domain:2, topic:"CBA trust store",
q:{en:"Users with valid smart cards cannot authenticate with CBA. What is the most likely configuration mistake?",
   fr:"Des utilisateurs munis de cartes à puce valides ne parviennent pas à s'authentifier en CBA. Quelle est l'erreur de configuration la plus probable ?"},
options:[
 {en:"The issuing CA chain (root and intermediates) has not been fully uploaded to the Entra ID certificate authorities trust store", fr:"La chaîne de l'AC émettrice (racine et intermédiaires) n'a pas été entièrement téléversée dans le magasin de confiance des autorités de certification d'Entra ID"},
 {en:"CBA requires AD FS to be deployed", fr:"CBA exige le déploiement d'AD FS"},
 {en:"Smart cards are not supported by CBA", fr:"Les cartes à puce ne sont pas supportées par CBA"},
 {en:"The users are missing an Entra ID P2 licence", fr:"Il manque une licence Entra ID P2 aux utilisateurs"}],
correct:[0],
explanation:{en:"A is correct: Entra ID must be able to build the full chain to a trusted root, so every intermediate as well as the root must be present in the trust store, with the root flagged as a root authority.\nB is wrong: cloud-native CBA exists precisely so you can retire AD FS for smart card authentication.\nC is wrong: smart cards are a primary CBA use case.\nD is wrong: CBA does not require P2.",
fr:"A est correct : Entra ID doit pouvoir construire la chaîne complète jusqu'à une racine de confiance, donc chaque intermédiaire ainsi que la racine doivent être présents dans le magasin, la racine étant marquée comme autorité racine.\nB est faux : le CBA cloud-native existe précisément pour pouvoir retirer AD FS de l'authentification par carte à puce.\nC est faux : les cartes à puce sont un cas d'usage principal du CBA.\nD est faux : CBA n'exige pas P2."}
},
{
id:"d2-090", domain:2, topic:"Custom authentication strengths",
q:{en:"Policy states that access to the finance application must be granted only with a FIDO2 security key or certificate-based authentication — Windows Hello for Business must NOT be accepted. How do you implement it?",
   fr:"La politique impose que l'accès à l'application finance ne soit accordé qu'avec une clé de sécurité FIDO2 ou une authentification par certificat — Windows Hello for Business ne doit PAS être accepté. Comment l'implémenter ?"},
options:[
 {en:"Require MFA and hope users choose a key", fr:"Exiger le MFA en espérant que les utilisateurs choisissent une clé"},
 {en:"Create a custom authentication strength containing only those two methods and require it in a Conditional Access policy for that app", fr:"Créer une authentication strength personnalisée ne contenant que ces deux méthodes et l'exiger dans une stratégie d'accès conditionnel sur cette application"},
 {en:"Require the built-in Phishing-resistant MFA strength", fr:"Exiger l'authentication strength intégrée Phishing-resistant MFA"},
 {en:"Disable Windows Hello for Business tenant-wide", fr:"Désactiver Windows Hello for Business pour tout le tenant"}],
correct:[1],
explanation:{en:"A is wrong: hoping is not a control, and plain MFA accepts weak methods.\nB is correct: the three built-in strengths are fixed, so when the requirement excludes a method the built-in set includes, you build a custom strength with exactly the allowed combinations.\nC is wrong: the phishing-resistant built-in strength accepts Windows Hello for Business, which is explicitly excluded here.\nD is wrong: disabling WHfB tenant-wide punishes every other scenario.",
fr:"A est faux : espérer n'est pas un contrôle, et un MFA simple accepte des méthodes faibles.\nB est correct : les trois strengths intégrées sont fixes, donc quand le besoin exclut une méthode que l'ensemble intégré inclut, on construit une strength personnalisée avec exactement les combinaisons autorisées.\nC est faux : la strength intégrée résistante au phishing accepte Windows Hello for Business, explicitement exclu ici.\nD est faux : désactiver WHfB pour tout le tenant pénalise tous les autres scénarios."}
},
{
id:"d2-091", domain:2, topic:"Authentication strengths for guests",
q:{en:"You require a phishing-resistant authentication strength on an app that partners also use. What must you consider for those external users?",
   fr:"Tu exiges une authentication strength résistante au phishing sur une application utilisée aussi par des partenaires. Que dois-tu prendre en compte pour ces utilisateurs externes ?"},
options:[
 {en:"Authentication strengths never apply to guests", fr:"Les authentication strengths ne s'appliquent jamais aux guests"},
 {en:"Guests are automatically compliant with any strength", fr:"Les guests sont automatiquement conformes à toute strength"},
 {en:"Guests can only satisfy it if their home tenant provides an acceptable method and you trust its MFA claims, otherwise they must register a suitable method in your tenant — some methods cannot be satisfied by external users", fr:"Les guests ne peuvent la satisfaire que si leur tenant d'origine fournit une méthode acceptable et que tu fais confiance à ses revendications MFA, sinon ils doivent enregistrer une méthode adéquate dans ton tenant — certaines méthodes ne peuvent pas être satisfaites par des utilisateurs externes"},
 {en:"You must convert the guests to members first", fr:"Il faut d'abord convertir les guests en membres"}],
correct:[2],
explanation:{en:"A is wrong: strengths do apply to guests, which is why the consideration matters.\nB is wrong: nothing is automatically satisfied.\nC is correct: for external users the outcome depends on cross-tenant access trust settings and on what their home tenant can actually provide; Microsoft documents which methods external users can and cannot satisfy, and getting this wrong locks partners out.\nD is wrong: UserType does not change which authentication methods an external identity holds.",
fr:"A est faux : les strengths s'appliquent bien aux guests, d'où l'importance de cette considération.\nB est faux : rien n'est satisfait automatiquement.\nC est correct : pour les utilisateurs externes le résultat dépend des paramètres de confiance cross-tenant et de ce que leur tenant d'origine peut réellement fournir ; Microsoft documente les méthodes que les externes peuvent ou non satisfaire, et se tromper ici enferme les partenaires dehors.\nD est faux : le UserType ne change pas les méthodes d'authentification détenues par une identité externe."}
},
{
id:"d2-092", domain:2, topic:"Persistent browser session",
q:{en:"On shared kiosk machines, users must never see the \"Stay signed in?\" prompt and the session must end when the browser closes. What do you configure?",
   fr:"Sur des postes kiosques partagés, les utilisateurs ne doivent jamais voir l'invite « Rester connecté ? » et la session doit se terminer à la fermeture du navigateur. Que configures-tu ?"},
options:[
 {en:"Disabling the \"Keep me signed in\" option in company branding only", fr:"Désactiver l'option « Rester connecté » uniquement dans la personnalisation d'entreprise"},
 {en:"Blocking cookies in the browser policy", fr:"Bloquer les cookies dans la stratégie du navigateur"},
 {en:"Sign-in frequency of 15 minutes", fr:"Une fréquence de connexion de 15 minutes"},
 {en:"A Conditional Access session control setting persistent browser session to Never persistent, scoped to those devices or locations", fr:"Un contrôle de session d'accès conditionnel réglant la session navigateur persistante sur Jamais persistante, ciblé sur ces appareils ou emplacements"}],
correct:[3],
explanation:{en:"A is wrong: the branding switch is tenant-wide and does not make sessions non-persistent for a subset.\nB is wrong: blocking cookies breaks authentication entirely.\nC is wrong: frequency forces reauthentication but the session can still persist across browser restarts within the window.\nD is correct: Never persistent suppresses the prompt and makes the session cookie non-persistent, so closing the browser ends it — and Conditional Access lets you scope this to kiosk conditions instead of all users.",
fr:"A est faux : l'interrupteur de branding est global au tenant et ne rend pas les sessions non persistantes pour un sous-ensemble.\nB est faux : bloquer les cookies casse totalement l'authentification.\nC est faux : la fréquence force une réauthentification mais la session peut persister au redémarrage du navigateur dans la fenêtre.\nD est correct : Jamais persistante supprime l'invite et rend le cookie de session non persistant, donc fermer le navigateur y met fin — et l'accès conditionnel permet de cibler les conditions kiosque plutôt que tous les utilisateurs."}
},
{
id:"d2-093", domain:2, topic:"Security defaults limitations",
q:{en:"A 200-seat company uses Security defaults and now needs to exempt a service account and require MFA only from outside the office. What must they do?",
   fr:"Une entreprise de 200 postes utilise les Security defaults et doit maintenant exempter un compte de service et n'exiger le MFA que hors du bureau. Que doit-elle faire ?"},
options:[
 {en:"Disable Security defaults and implement Conditional Access policies, since Security defaults cannot be customized, excluded or combined with CA", fr:"Désactiver les Security defaults et implémenter des stratégies d'accès conditionnel, puisque les Security defaults ne sont ni personnalisables, ni excluables, ni combinables avec l'accès conditionnel"},
 {en:"Use per-user MFA exclusions alongside Security defaults", fr:"Utiliser des exclusions du MFA par utilisateur en plus des Security defaults"},
 {en:"Add the service account to the Security defaults exclusion list", fr:"Ajouter le compte de service à la liste d'exclusion des Security defaults"},
 {en:"Keep Security defaults and add one Conditional Access policy on top", fr:"Garder les Security defaults et ajouter une stratégie d'accès conditionnel par-dessus"}],
correct:[0],
explanation:{en:"A is correct: Security defaults are an all-or-nothing baseline with no exclusions and no conditions, and they cannot coexist with Conditional Access — moving to CA (which needs Entra ID P1) is the documented next step.\nB is wrong: Security defaults ignore per-user MFA state for its enforced behaviours, and mixing legacy mechanisms is not the supported path.\nC is wrong: there is no exclusion list.\nD is wrong: enabling a CA policy requires Security defaults to be off.",
fr:"A est correct : les Security defaults sont une base tout-ou-rien sans exclusion ni condition, et elles ne cohabitent pas avec l'accès conditionnel — passer à l'accès conditionnel (qui nécessite Entra ID P1) est l'étape documentée suivante.\nB est faux : les Security defaults ignorent l'état du MFA par utilisateur pour les comportements qu'elles imposent, et mélanger des mécanismes historiques n'est pas le chemin supporté.\nC est faux : il n'existe pas de liste d'exclusion.\nD est faux : activer une stratégie CA exige que les Security defaults soient désactivées."}
},
{
id:"d2-094", domain:2, topic:"CA incident response",
q:{en:"A newly enabled Conditional Access policy is locking out a whole department during business hours. What is the fastest correct response?",
   fr:"Une stratégie d'accès conditionnel tout juste activée enferme dehors un service entier en pleine journée. Quelle est la réponse correcte la plus rapide ?"},
options:[
 {en:"Delete the policy so it cannot be re-enabled by mistake", fr:"Supprimer la stratégie pour qu'elle ne puisse pas être réactivée par erreur"},
 {en:"Set the policy to Off (or report-only), verify recovery in the sign-in logs, then fix and re-test in report-only before enabling again", fr:"Mettre la stratégie sur Off (ou report-only), vérifier la reprise dans les journaux de connexion, puis corriger et retester en report-only avant de réactiver"},
 {en:"Add the affected users to a permanent exclusion group", fr:"Ajouter les utilisateurs concernés à un groupe d'exclusion permanent"},
 {en:"Sign in with the break-glass account and leave it signed in for the day", fr:"Se connecter avec le compte break-glass et rester connecté toute la journée"}],
correct:[1],
explanation:{en:"A is wrong: deleting destroys the configuration and its history, making the post-incident fix harder.\nB is correct: the Off switch is the intended kill switch and takes effect within minutes, report-only lets you validate the corrected policy against real traffic, and the sign-in logs confirm recovery.\nC is wrong: a permanent exclusion converts an outage into a lasting security gap.\nD is wrong: break-glass accounts are for regaining administrative access, not for day-to-day work, and every use should be an audited incident.",
fr:"A est faux : supprimer détruit la configuration et son historique, ce qui complique la correction après incident.\nB est correct : l'interrupteur Off est le coupe-circuit prévu et prend effet en quelques minutes, le report-only permet de valider la stratégie corrigée contre le trafic réel, et les journaux de connexion confirment la reprise.\nC est faux : une exclusion permanente transforme une panne en faille de sécurité durable.\nD est faux : les comptes break-glass servent à retrouver un accès administratif, pas au travail quotidien, et chaque usage doit être un incident audité."}
},
{
id:"d2-095", domain:2, topic:"Verifying MFA in logs",
q:{en:"An auditor wants proof that a specific sign-in actually completed multifactor authentication. Which field in the sign-in log answers this?",
   fr:"Un auditeur veut la preuve qu'une connexion précise a réellement réalisé une authentification multifacteur. Quel champ du journal de connexion répond à cela ?"},
options:[
 {en:"The risk state field", fr:"Le champ état de risque"},
 {en:"The device compliance field", fr:"Le champ conformité de l'appareil"},
 {en:"The authentication requirement and the authentication details, which show \"Multifactor authentication\" and the methods used at each step", fr:"L'exigence d'authentification et les détails d'authentification, qui indiquent « Multifactor authentication » et les méthodes utilisées à chaque étape"},
 {en:"The Conditional Access status field alone", fr:"Le champ statut d'accès conditionnel seul"}],
correct:[2],
explanation:{en:"A is wrong: risk state is unrelated to factor count.\nB is wrong: compliance is a device signal, not an authentication factor.\nC is correct: the authentication requirement states whether single-factor or multifactor was required and satisfied, and the authentication details tab lists each step with the method and result — including whether MFA came from a claim in the token rather than a fresh prompt.\nD is wrong: a Success status shows policy satisfaction but not which factors were used.",
fr:"A est faux : l'état de risque n'a aucun lien avec le nombre de facteurs.\nB est faux : la conformité est un signal d'appareil, pas un facteur d'authentification.\nC est correct : l'exigence d'authentification indique si un facteur simple ou multiple était requis et satisfait, et l'onglet des détails d'authentification liste chaque étape avec la méthode et le résultat — y compris si le MFA venait d'une revendication du jeton plutôt que d'une nouvelle invite.\nD est faux : un statut Succès montre que la stratégie est satisfaite mais pas quels facteurs ont servi."}
},
{
id:"d2-096", domain:2, topic:"Telephony method scoping",
q:{en:"You want to remove SMS and voice call as authentication methods for all employees, but a small group of field staff genuinely has no alternative for now. What do you do?",
   fr:"Tu veux retirer le SMS et l'appel vocal comme méthodes d'authentification pour tous les salariés, mais un petit groupe de personnel de terrain n'a réellement pas d'alternative pour l'instant. Que fais-tu ?"},
options:[
 {en:"Exclude the field staff from all MFA requirements", fr:"Exclure le personnel de terrain de toute exigence de MFA"},
 {en:"Disable SMS and voice tenant-wide and let the field staff use security questions", fr:"Désactiver le SMS et le vocal pour tout le tenant et laisser le personnel de terrain utiliser les questions de sécurité"},
 {en:"Keep SMS enabled for everyone since it cannot be scoped", fr:"Garder le SMS activé pour tous puisqu'il n'est pas ciblable"},
 {en:"In the Authentication methods policy, enable SMS/voice only for that specific group (and exclude everyone else), while promoting stronger methods elsewhere", fr:"Dans l'Authentication methods policy, activer le SMS/vocal uniquement pour ce groupe précis (et exclure tous les autres), en promouvant des méthodes plus fortes ailleurs"}],
correct:[3],
explanation:{en:"A is wrong: removing MFA entirely is far worse than a weak second factor.\nB is wrong: security questions are an SSPR-only method and are never valid for MFA.\nC is wrong: methods are scopable per group, which is the whole point of the modern policy.\nD is correct: each method in the Authentication methods policy has its own include/exclude targeting, so you can retire telephony broadly while keeping a scoped, documented exception with a plan to remove it.",
fr:"A est faux : retirer totalement le MFA est bien pire qu'un second facteur faible.\nB est faux : les questions de sécurité sont une méthode réservée au SSPR et ne sont jamais valables pour le MFA.\nC est faux : les méthodes sont ciblables par groupe, c'est tout l'intérêt de la stratégie moderne.\nD est correct : chaque méthode de l'Authentication methods policy a son propre ciblage inclure/exclure, tu peux donc retirer largement la téléphonie tout en gardant une exception ciblée et documentée, avec un plan pour la supprimer."}
},
{
id:"d2-097", domain:2, topic:"Report suspicious activity",
q:{en:"You enable \"Report suspicious activity\" in the Authentication methods policy. What happens when a user reports an unexpected MFA prompt?",
   fr:"Tu actives « Signaler une activité suspecte » dans l'Authentication methods policy. Que se passe-t-il quand un utilisateur signale une invite MFA inattendue ?"},
options:[
 {en:"The authentication is denied and the user is flagged with high user risk, which your user risk policy can then remediate", fr:"L'authentification est refusée et l'utilisateur est marqué en risque utilisateur élevé, que ta stratégie de risque utilisateur peut alors remédier"},
 {en:"The prompt is approved but an email is sent to the administrator", fr:"L'invite est approuvée mais un email est envoyé à l'administrateur"},
 {en:"The user's account is deleted for safety", fr:"Le compte de l'utilisateur est supprimé par sécurité"},
 {en:"Nothing happens until an administrator reviews the report", fr:"Rien ne se passe jusqu'à ce qu'un administrateur examine le signalement"}],
correct:[0],
explanation:{en:"A is correct: reporting suspicious activity (the modern replacement for fraud alert) denies that authentication and raises the user's risk to high, so an automated user risk policy can force a secure password change immediately.\nB is wrong: the authentication is denied, not approved.\nC is wrong: no account is deleted.\nD is wrong: the point of the feature is immediate, automated containment; administrator review comes afterwards in the risky users report.",
fr:"A est correct : signaler une activité suspecte (le remplaçant moderne de l'alerte de fraude) refuse cette authentification et porte le risque de l'utilisateur à élevé, pour qu'une stratégie automatisée de risque utilisateur impose immédiatement un changement de mot de passe sécurisé.\nB est faux : l'authentification est refusée, pas approuvée.\nC est faux : aucun compte n'est supprimé.\nD est faux : l'intérêt de la fonctionnalité est un confinement immédiat et automatisé ; la revue par un administrateur vient ensuite dans le rapport des utilisateurs à risque."}
},
{
id:"d2-098", domain:2, topic:"Authenticator OTP fallback",
q:{en:"A user is in an area with no data connection and cannot receive Authenticator push notifications, but must sign in with MFA. What is the supported fallback within the same app?",
   fr:"Un utilisateur est dans une zone sans connexion data et ne peut pas recevoir les notifications push d'Authenticator, mais doit se connecter avec MFA. Quel est le repli supporté dans la même application ?"},
options:[
 {en:"A security question", fr:"Une question de sécurité"},
 {en:"The verification code (TOTP) shown in Microsoft Authenticator, which works offline", fr:"Le code de vérification (TOTP) affiché dans Microsoft Authenticator, qui fonctionne hors ligne"},
 {en:"Nothing — MFA always requires connectivity", fr:"Rien — le MFA exige toujours une connectivité"},
 {en:"An SMS code, which is the only offline option", fr:"Un code SMS, seule option hors ligne"}],
correct:[1],
explanation:{en:"A is wrong: security questions are SSPR-only.\nB is correct: Authenticator generates time-based one-time codes locally, so they work with no network on the phone — provided the OTP option is allowed in the Authenticator method policy.\nC is wrong: TOTP is designed exactly for offline use.\nD is wrong: SMS also needs mobile network coverage, and it is a weaker method.",
fr:"A est faux : les questions de sécurité sont réservées au SSPR.\nB est correct : Authenticator génère localement des codes à usage unique basés sur le temps, ils fonctionnent donc sans réseau sur le téléphone — à condition que l'option OTP soit autorisée dans la stratégie de méthode Authenticator.\nC est faux : le TOTP est conçu précisément pour l'usage hors ligne.\nD est faux : le SMS exige aussi une couverture réseau mobile, et c'est une méthode plus faible."}
},
{
id:"d2-099", domain:2, topic:"MFA registration campaign",
q:{en:"Many users still rely on SMS. You want Entra ID to nudge them to set up Microsoft Authenticator during sign-in, without blocking them. What do you use?",
   fr:"Beaucoup d'utilisateurs dépendent encore du SMS. Tu veux qu'Entra ID les incite à configurer Microsoft Authenticator pendant la connexion, sans les bloquer. Qu'utilises-tu ?"},
options:[
 {en:"An email campaign asking users to visit the security info page", fr:"Une campagne d'emails invitant les utilisateurs à visiter la page d'informations de sécurité"},
 {en:"A Conditional Access policy blocking SMS", fr:"Une stratégie d'accès conditionnel bloquant le SMS"},
 {en:"The registration campaign in the Authentication methods policy, which prompts targeted users to set up Authenticator with a configurable number of snoozes", fr:"La registration campaign de l'Authentication methods policy, qui invite les utilisateurs ciblés à configurer Authenticator avec un nombre configurable de reports"},
 {en:"The ID Protection MFA registration policy", fr:"La stratégie d'inscription MFA d'ID Protection"}],
correct:[2],
explanation:{en:"A is wrong: emails have low completion rates and no enforcement path.\nB is wrong: Conditional Access does not select authentication methods that way; you would use authentication strengths, and blocking is not the gentle nudge requested.\nC is correct: the registration campaign interrupts sign-in with a guided setup for a stronger method, can be scoped to groups, and allows a limited number of snoozes — designed exactly for this migration.\nD is wrong: that policy forces registration of any MFA method, it does not promote a specific stronger one.",
fr:"A est faux : les emails ont un faible taux de réalisation et aucun levier d'application.\nB est faux : l'accès conditionnel ne sélectionne pas les méthodes ainsi ; on utiliserait des authentication strengths, et bloquer n'est pas l'incitation douce demandée.\nC est correct : la registration campaign interrompt la connexion avec une configuration guidée d'une méthode plus forte, peut être ciblée par groupes, et autorise un nombre limité de reports — conçue exactement pour cette migration.\nD est faux : cette stratégie force l'inscription d'une méthode MFA quelconque, elle ne promeut pas une méthode plus forte en particulier."}
},
{
id:"d2-100", domain:2, topic:"Reset types and roles",
q:{en:"Which statement about resetting passwords is correct?",
   fr:"Quelle affirmation sur la réinitialisation des mots de passe est correcte ?"},
options:[
 {en:"Any Helpdesk Administrator can reset any account's password, including Global Administrators", fr:"Tout Helpdesk Administrator peut réinitialiser le mot de passe de n'importe quel compte, y compris des Global Administrators"},
 {en:"SSPR and administrator reset are the same operation with the same audit entry", fr:"Le SSPR et la réinitialisation par un administrateur sont la même opération avec la même entrée d'audit"},
 {en:"Password change and password reset are interchangeable terms in Entra ID", fr:"Changement et réinitialisation de mot de passe sont des termes interchangeables dans Entra ID"},
 {en:"A user resetting their own forgotten password uses SSPR; an administrator resetting someone else's needs an appropriate role, and resetting another ADMINISTRATOR's credentials requires Privileged Authentication Administrator (or Global Administrator)", fr:"Un utilisateur qui réinitialise son propre mot de passe oublié utilise le SSPR ; un administrateur qui réinitialise celui d'un autre a besoin d'un rôle adéquat, et réinitialiser les identifiants d'un autre ADMINISTRATEUR exige Privileged Authentication Administrator (ou Global Administrator)"}],
correct:[3],
explanation:{en:"A is wrong: Helpdesk Administrator can reset passwords for non-administrators only.\nB is wrong: they are different operations and produce different audit records, with different initiators.\nC is wrong: a change requires knowing the current password, a reset does not — a meaningful security distinction.\nD is correct: self-service reset, delegated helpdesk reset and privileged reset are distinct paths with distinct permission requirements — and the roles that can act on other administrators are deliberately limited.",
fr:"A est faux : Helpdesk Administrator ne peut réinitialiser que les mots de passe des non-administrateurs.\nB est faux : ce sont des opérations différentes produisant des enregistrements d'audit différents, avec des initiateurs différents.\nC est faux : un changement exige de connaître le mot de passe actuel, une réinitialisation non — une distinction de sécurité importante.\nD est correct : réinitialisation en self-service, réinitialisation déléguée au helpdesk et réinitialisation privilégiée sont des chemins distincts avec des exigences de permissions distinctes — et les rôles pouvant agir sur d'autres administrateurs sont volontairement limités."}
}
];
