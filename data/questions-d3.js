"use strict";
/* Domain 3 — Plan and implement workload identities (20-25%) */
window.SC300_QUESTIONS_D3 = [
{
id:"d3-001", domain:3, topic:"Managed identities",
q:{en:"An Azure App Service web app must read secrets from Azure Key Vault without storing any credentials in code or configuration. What is the BEST solution?",
   fr:"Une web app Azure App Service doit lire des secrets dans Azure Key Vault sans stocker aucun credential dans le code ou la configuration. Quelle est la MEILLEURE solution ?"},
options:[
 {en:"Enable a system-assigned managed identity on the App Service and grant it access to Key Vault", fr:"Activer une managed identity system-assigned sur l'App Service et lui donner accès au Key Vault"},
 {en:"Create an app registration with a client secret stored in appsettings", fr:"Créer une app registration avec un client secret stocké dans appsettings"},
 {en:"Use a service account username/password", fr:"Utiliser un compte de service avec identifiant/mot de passe"},
 {en:"Store the Key Vault access key in an environment variable", fr:"Stocker la clé d'accès du Key Vault dans une variable d'environnement"}],
correct:[0],
explanation:{en:"A is correct: managed identities are the recommended pattern for Azure-hosted workloads — Entra ID manages the credential lifecycle entirely, nothing is stored by you. Grant the identity a Key Vault RBAC role (e.g. Key Vault Secrets User) or access policy.\nB is wrong: a client secret is exactly the credential-in-config problem we're avoiding (rotation, leakage risk).\nC is wrong: worst option — passwords, no rotation, phishable.\nD is wrong: environment variables still contain a stored secret that can leak.",
fr:"A est correct : les managed identities sont le pattern recommandé pour les workloads hébergés dans Azure — Entra ID gère tout le cycle de vie du credential, tu ne stockes rien. Donne à l'identité un rôle RBAC Key Vault (ex : Key Vault Secrets User) ou une access policy.\nB est faux : un client secret est exactement le problème de credential-dans-la-config qu'on évite (rotation, risque de fuite).\nC est faux : pire option — mots de passe, pas de rotation, phishable.\nD est faux : une variable d'environnement contient toujours un secret stocké qui peut fuiter."}
},
{
id:"d3-002", domain:3, topic:"Managed identities",
q:{en:"Ten virtual machines must share the SAME identity to access an Azure Storage account, and the identity must survive when any VM is deleted. Which identity type do you create?",
   fr:"Dix machines virtuelles doivent partager la MÊME identité pour accéder à un compte de stockage Azure, et l'identité doit survivre à la suppression de n'importe quelle VM. Quel type d'identité crées-tu ?"},
options:[
 {en:"A single service principal with a shared certificate on the VMs", fr:"Un service principal unique avec un certificat partagé sur les VMs"},
 {en:"A user-assigned managed identity, assigned to all ten VMs", fr:"Une managed identity user-assigned, assignée aux dix VMs"},
 {en:"A shared user account", fr:"Un compte utilisateur partagé"},
 {en:"A system-assigned managed identity on each VM", fr:"Une managed identity system-assigned sur chaque VM"}],
correct:[1],
explanation:{en:"A is wrong: works but you'd manage/rotate/protect the certificate yourself — managed identities avoid that.\nB is correct: a user-assigned managed identity is a standalone Azure resource with its own lifecycle — it can be attached to many resources and persists if any of them is deleted. Grant it one RBAC role on the storage account.\nC is wrong: user accounts for workloads are an anti-pattern (passwords, MFA issues, no least privilege).\nD is wrong: system-assigned creates TEN different identities (ten role assignments) and each dies with its VM.",
fr:"A est faux : possible mais tu gérerais/roterais/protégerais le certificat toi-même — les managed identities évitent ça.\nB est correct : une managed identity user-assigned est une ressource Azure autonome avec son propre cycle de vie — attachable à plusieurs ressources et survivant à leur suppression. Donne-lui un seul rôle RBAC sur le compte de stockage.\nC est faux : un compte utilisateur pour un workload est un anti-pattern (mots de passe, problèmes MFA, pas de moindre privilège).\nD est faux : le system-assigned crée DIX identités différentes (dix attributions de rôle) et chacune meurt avec sa VM."}
},
{
id:"d3-003", domain:3, topic:"App registration vs enterprise app",
q:{en:"What is the relationship between an app registration (application object) and an enterprise application (service principal)?",
   fr:"Quelle est la relation entre une app registration (application object) et une enterprise application (service principal) ?"},
options:[
 {en:"Enterprise applications only exist for on-premises apps", fr:"Les enterprise applications n'existent que pour les apps on-prem"},
 {en:"They are two names for the same object", fr:"Ce sont deux noms pour le même objet"},
 {en:"The app registration is the global definition in the home tenant; the enterprise application is the local instance (service principal) of that app in each tenant where it's used", fr:"L'app registration est la définition globale dans le tenant d'origine ; l'enterprise application est l'instance locale (service principal) de cette app dans chaque tenant où elle est utilisée"},
 {en:"The enterprise application is the template; the registration is the instance", fr:"L'enterprise application est le modèle ; la registration est l'instance"}],
correct:[2],
explanation:{en:"A is wrong: every app used in the tenant (gallery, custom, multi-tenant) gets a service principal.\nB is wrong: they are distinct objects with distinct IDs.\nC is correct: the application object (App registrations) defines the app: redirect URIs, credentials, API permissions, app roles. The service principal (Enterprise applications) is the instance in a tenant, holding local config: user assignments, SSO settings, provisioning, granted consent. A multi-tenant app has one application object and a service principal in every consuming tenant.\nD is wrong: it's the reverse.",
fr:"A est faux : toute app utilisée dans le tenant (galerie, custom, multi-tenant) reçoit un service principal.\nB est faux : ce sont des objets distincts avec des IDs distincts.\nC est correct : l'application object (App registrations) définit l'app : redirect URIs, credentials, permissions API, app roles. Le service principal (Enterprise applications) est l'instance dans un tenant, portant la config locale : assignations d'utilisateurs, réglages SSO, provisioning, consentement accordé. Une app multi-tenant a un application object et un service principal dans chaque tenant consommateur.\nD est faux : c'est l'inverse."}
},
{
id:"d3-004", domain:3, topic:"API permissions",
q:{en:"A background daemon service (no signed-in user) must read all users' calendars via Microsoft Graph. Which permission type and consent are required?",
   fr:"Un service daemon en arrière-plan (sans utilisateur connecté) doit lire les calendriers de tous les utilisateurs via Microsoft Graph. Quel type de permission et quel consentement sont requis ?"},
options:[
 {en:"Delegated permission (Calendars.Read) with user consent", fr:"Une delegated permission (Calendars.Read) avec consentement utilisateur"},
 {en:"Delegated permission with admin consent", fr:"Une delegated permission avec admin consent"},
 {en:"No permission needed if the app uses a managed identity", fr:"Aucune permission si l'app utilise une managed identity"},
 {en:"Application permission (Calendars.Read) with admin consent", fr:"Une application permission (Calendars.Read) avec admin consent"}],
correct:[3],
explanation:{en:"A and B are wrong: delegated permissions require a signed-in user — a daemon has none, and the effective rights would be limited to that user anyway.\nC is wrong: a managed identity changes HOW the app authenticates, but it still needs Graph application permissions granted to it.\nD is correct: daemons authenticate as themselves (client credentials flow) and need APPLICATION permissions, which always require admin consent because the app acts without a user, potentially on all mailboxes/calendars.",
fr:"A et B sont faux : les delegated permissions exigent un utilisateur connecté — un daemon n'en a pas, et les droits effectifs seraient limités à cet utilisateur.\nC est faux : une managed identity change COMMENT l'app s'authentifie, mais il lui faut quand même des application permissions Graph.\nD est correct : les daemons s'authentifient en leur nom (flux client credentials) et ont besoin d'APPLICATION permissions, qui exigent toujours l'admin consent car l'app agit sans utilisateur, potentiellement sur tous les calendriers."}
},
{
id:"d3-005", domain:3, topic:"Consent management",
q:{en:"Users report they are blocked with \"Need admin approval\" when trying to use a new SaaS app. Security policy forbids letting users consent freely. How do you let users REQUEST access reviewed by admins?",
   fr:"Les utilisateurs sont bloqués avec « Need admin approval » en essayant une nouvelle app SaaS. La politique de sécurité interdit le consentement libre des utilisateurs. Comment leur permettre de DEMANDER un accès validé par les admins ?"},
options:[
 {en:"Enable the admin consent workflow and designate reviewers", fr:"Activer l'admin consent workflow et désigner des reviewers"},
 {en:"Make all users Application Administrators", fr:"Donner à tous les utilisateurs le rôle Application Administrator"},
 {en:"Disable consent entirely with no request option", fr:"Désactiver totalement le consentement sans option de demande"},
 {en:"Allow user consent for all apps", fr:"Autoriser le consentement utilisateur pour toutes les apps"}],
correct:[0],
explanation:{en:"A is correct: the admin consent workflow adds a \"Request approval\" experience — the request goes to designated reviewers (who must be able to grant admin consent: Global Admin, Cloud App Admin, Application Admin) who approve or deny.\nB is wrong: massively over-privileged.\nC is wrong: that's the current blocking state — users have no path forward.\nD is wrong: violates the security policy and opens the door to consent phishing (illicit consent grants).",
fr:"A est correct : l'admin consent workflow ajoute une expérience « Request approval » — la demande part vers des reviewers désignés (capables d'accorder l'admin consent : Global Admin, Cloud App Admin, Application Admin) qui approuvent ou refusent.\nB est faux : sur-privilégié massivement.\nC est faux : c'est l'état bloquant actuel — les utilisateurs n'ont aucune voie de recours.\nD est faux : viole la politique de sécurité et ouvre la porte au consent phishing (illicit consent grants)."}
},
{
id:"d3-006", domain:3, topic:"Application Proxy",
q:{en:"You must publish an internal IIS web app (Integrated Windows Authentication) to remote users through Microsoft Entra Application Proxy with SSO. Which components/settings are needed? (Select all that apply)",
   fr:"Tu dois publier une app web IIS interne (Integrated Windows Authentication) aux utilisateurs distants via Microsoft Entra Application Proxy avec SSO. Quels composants/réglages sont nécessaires ? (Sélectionne toutes les bonnes réponses)"},
options:[
 {en:"Configure Kerberos Constrained Delegation (KCD) for the connector and set the SPN in the app's SSO settings", fr:"Configurer Kerberos Constrained Delegation (KCD) pour le connecteur et définir le SPN dans les réglages SSO de l'app"},
 {en:"Open inbound port 443 on the firewall to the connector server", fr:"Ouvrir le port 443 entrant sur le pare-feu vers le serveur du connecteur"},
 {en:"Deploy the app in a DMZ", fr:"Déployer l'app dans une DMZ"},
 {en:"Install a private network connector on a server that can reach the app", fr:"Installer un private network connector sur un serveur pouvant joindre l'app"}],
correct:[0,3],
explanation:{en:"A and D are correct: the connector handles the outbound-only connection to the App Proxy service, and for IWA apps you configure KCD (connector machine account trusted for delegation to the app's SPN) so Entra pre-authenticated users get silent Kerberos SSO to the backend.\nB is wrong: connectors use OUTBOUND connections only — no inbound firewall rules needed, that's the key selling point.\nC is wrong: no DMZ required; the app stays on the internal network.",
fr:"A et D sont corrects : le connecteur gère la connexion sortante uniquement vers le service App Proxy, et pour les apps IWA tu configures KCD (compte machine du connecteur approuvé pour la délégation vers le SPN de l'app) pour que les utilisateurs pré-authentifiés par Entra obtiennent un SSO Kerberos silencieux vers le backend.\nB est faux : les connecteurs n'utilisent que des connexions SORTANTES — aucune règle entrante, c'est l'argument clé.\nC est faux : pas de DMZ nécessaire ; l'app reste sur le réseau interne."}
},
{
id:"d3-007", domain:3, topic:"SAML SSO",
q:{en:"You configure SAML SSO for a gallery SaaS app. Users get an error saying the sign-in failed because of an invalid audience/identifier. Which SAML setting is most likely wrong?",
   fr:"Tu configures le SSO SAML pour une app SaaS de la galerie. Les utilisateurs obtiennent une erreur de connexion pour cause d'audience/identifiant invalide. Quel réglage SAML est probablement faux ?"},
options:[
 {en:"The signing certificate expired", fr:"Le certificat de signature a expiré"},
 {en:"The user is missing a license", fr:"Il manque une licence à l'utilisateur"},
 {en:"The Identifier (Entity ID) does not match what the SaaS app expects", fr:"L'Identifier (Entity ID) ne correspond pas à ce que l'app SaaS attend"},
 {en:"The Reply URL points to the wrong tenant", fr:"La Reply URL pointe vers le mauvais tenant"}],
correct:[2],
explanation:{en:"A is wrong: an expired certificate produces signature validation errors, not audience errors.\nB is wrong: licensing produces assignment/access errors, not SAML audience errors.\nC is correct: an \"invalid audience\" error means the Audience/Entity ID in the SAML assertion doesn't match the service provider's expected Identifier — the classic Entity ID mismatch.\nD is wrong: a wrong Reply URL (ACS) causes the response to be rejected or misrouted with a different error.",
fr:"A est faux : un certificat expiré produit des erreurs de validation de signature, pas d'audience.\nB est faux : la licence produit des erreurs d'assignation/accès, pas d'audience SAML.\nC est correct : une erreur « invalid audience » signifie que l'Audience/Entity ID dans l'assertion SAML ne correspond pas à l'Identifier attendu par le service provider — le classique mismatch d'Entity ID.\nD est faux : une mauvaise Reply URL (ACS) fait rejeter ou mal router la réponse avec une autre erreur."}
},
{
id:"d3-008", domain:3, topic:"SCIM provisioning",
q:{en:"You must automatically create, update, and disable user accounts in a SaaS app when users are added to, changed in, or removed from a specific Entra group. What do you configure?",
   fr:"Tu dois créer, mettre à jour et désactiver automatiquement les comptes d'une app SaaS quand des utilisateurs sont ajoutés, modifiés ou retirés d'un groupe Entra précis. Que configures-tu ?"},
options:[
 {en:"A logic app calling the SaaS API nightly", fr:"Une logic app appelant l'API du SaaS chaque nuit"},
 {en:"Entra Connect Sync to the SaaS app", fr:"Entra Connect Sync vers l'app SaaS"},
 {en:"SAML SSO with group claims", fr:"Le SSO SAML avec des claims de groupes"},
 {en:"Automatic provisioning (SCIM) on the enterprise app, scope \"Sync only assigned users and groups\", and assign the group", fr:"Le provisioning automatique (SCIM) sur l'enterprise app, portée « Sync only assigned users and groups », et assigner le groupe"}],
correct:[3],
explanation:{en:"A is wrong: custom automation duplicates a built-in, supported feature.\nB is wrong: Entra Connect syncs on-prem AD to Entra ID, not to SaaS apps.\nC is wrong: SSO/claims control authentication and authorization at sign-in, not account lifecycle in the app.\nD is correct: the provisioning service uses SCIM to push create/update/disable operations (~every 40 minutes) to the app; scoping to assigned users/groups makes the group the source of truth. Monitor with provisioning logs.",
fr:"A est faux : une automatisation custom duplique une fonctionnalité intégrée et supportée.\nB est faux : Entra Connect synchronise l'AD on-prem vers Entra ID, pas vers des apps SaaS.\nC est faux : SSO/claims contrôlent l'authentification et l'autorisation à la connexion, pas le cycle de vie des comptes dans l'app.\nD est correct : le service de provisioning utilise SCIM pour pousser les opérations create/update/disable (~toutes les 40 minutes) vers l'app ; la portée « assigned users and groups » fait du groupe la source de vérité. Surveille avec les provisioning logs."}
},
{
id:"d3-009", domain:3, topic:"App roles & assignment",
q:{en:"Access to an internal app must be limited to members of the \"Finance\" group, and the app must receive the user's role (\"Approver\" or \"Viewer\") in the token. What do you configure? (Select all that apply)",
   fr:"L'accès à une app interne doit être limité aux membres du groupe « Finance », et l'app doit recevoir le rôle de l'utilisateur (« Approver » ou « Viewer ») dans le token. Que configures-tu ? (Sélectionne toutes les bonnes réponses)"},
options:[
 {en:"Set \"User assignment required?\" to Yes on the enterprise application", fr:"Mettre « User assignment required? » sur Yes dans l'enterprise application"},
 {en:"Define app roles in the app registration and assign the Finance group/users to those roles", fr:"Définir des app roles dans l'app registration et assigner le groupe Finance/les utilisateurs à ces rôles"},
 {en:"Create a Conditional Access policy blocking everyone else", fr:"Créer une politique Conditional Access bloquant tous les autres"},
 {en:"Add the users as owners of the app", fr:"Ajouter les utilisateurs comme owners de l'app"}],
correct:[0,1],
explanation:{en:"A and B are correct: \"User assignment required = Yes\" ensures only assigned users/groups can get tokens for the app; app roles defined in the registration and assigned on the enterprise app appear in the token's roles claim, which the app uses for authorization.\nC is wrong: possible but clumsy — assignment requirement is the native mechanism; CA is for access conditions, not role claims.\nD is wrong: owners manage the app configuration; ownership is not user access.",
fr:"A et B sont corrects : « User assignment required = Yes » garantit que seuls les utilisateurs/groupes assignés obtiennent des tokens pour l'app ; les app roles définis dans la registration et assignés sur l'enterprise app apparaissent dans le claim roles du token, que l'app utilise pour l'autorisation.\nC est faux : possible mais maladroit — l'exigence d'assignation est le mécanisme natif ; CA sert aux conditions d'accès, pas aux claims de rôles.\nD est faux : les owners gèrent la configuration de l'app ; la propriété n'est pas l'accès utilisateur."}
},
{
id:"d3-010", domain:3, topic:"Admin roles for apps",
q:{en:"You must delegate management of ALL enterprise applications including Application Proxy configuration, WITHOUT granting broader directory permissions. Which role do you assign?",
   fr:"Tu dois déléguer la gestion de TOUTES les enterprise applications y compris la configuration Application Proxy, SANS accorder de permissions d'annuaire plus larges. Quel rôle assignes-tu ?"},
options:[
 {en:"Cloud Application Administrator", fr:"Cloud Application Administrator"},
 {en:"Application Administrator", fr:"Application Administrator"},
 {en:"Application Developer", fr:"Application Developer"},
 {en:"Global Administrator", fr:"Global Administrator"}],
correct:[1],
explanation:{en:"A is wrong: Cloud Application Administrator is identical EXCEPT it cannot manage Application Proxy — the classic exam differentiator.\nB is correct: Application Administrator manages all app registrations, enterprise applications AND Application Proxy.\nC is wrong: Application Developer can only create their own app registrations.\nD is wrong: Global Admin works but massively violates least privilege.",
fr:"A est faux : Cloud Application Administrator est identique SAUF qu'il ne peut pas gérer l'Application Proxy — le différenciateur classique de l'examen.\nB est correct : Application Administrator gère toutes les app registrations, les enterprise applications ET l'Application Proxy.\nC est faux : Application Developer ne peut créer que ses propres app registrations.\nD est faux : Global Admin fonctionne mais viole massivement le moindre privilège."}
},
{
id:"d3-011", domain:3, topic:"Workload identity federation",
q:{en:"A GitHub Actions pipeline must deploy to Azure without storing any client secret or certificate in GitHub. What do you configure?",
   fr:"Un pipeline GitHub Actions doit déployer vers Azure sans stocker aucun client secret ni certificat dans GitHub. Que configures-tu ?"},
options:[
 {en:"A managed identity assigned to GitHub", fr:"Une managed identity assignée à GitHub"},
 {en:"A personal access token of an admin", fr:"Un personal access token d'un admin"},
 {en:"Workload identity federation: add a federated credential on the app registration trusting the GitHub repo's OIDC tokens", fr:"La workload identity federation : ajouter un federated credential sur l'app registration faisant confiance aux tokens OIDC du repo GitHub"},
 {en:"A client secret stored in GitHub Secrets", fr:"Un client secret stocké dans GitHub Secrets"}],
correct:[2],
explanation:{en:"A is wrong: managed identities can only be assigned to AZURE resources; GitHub runs outside Azure (federated credentials on a user-assigned MI are the related alternative, but you can't \"assign an MI to GitHub\").\nB is wrong: personal tokens tie automation to a human and are a major anti-pattern.\nC is correct: workload identity federation establishes an OIDC trust between the external issuer (GitHub) and the app registration — GitHub exchanges its own short-lived token for Entra tokens. No secret is ever stored.\nD is wrong: works but stores a long-lived secret — exactly what we must avoid (rotation + leak risk).",
fr:"A est faux : les managed identities ne s'assignent qu'à des ressources AZURE ; GitHub tourne hors d'Azure (les federated credentials sur une MI user-assigned sont l'alternative proche, mais on ne peut pas « assigner une MI à GitHub »).\nB est faux : les tokens personnels lient l'automatisation à un humain — anti-pattern majeur.\nC est correct : la workload identity federation établit une confiance OIDC entre l'émetteur externe (GitHub) et l'app registration — GitHub échange son propre token éphémère contre des tokens Entra. Aucun secret stocké.\nD est faux : fonctionne mais stocke un secret longue durée — exactement ce qu'on doit éviter (rotation + risque de fuite)."}
},
{
id:"d3-012", domain:3, topic:"Cloud Discovery",
q:{en:"Management wants visibility into which unsanctioned cloud apps (shadow IT) employees use, WITHOUT deploying network appliances. Devices are already onboarded to Microsoft Defender for Endpoint. What is the simplest approach?",
   fr:"La direction veut la visibilité sur les apps cloud non approuvées (shadow IT) utilisées par les employés, SANS déployer d'équipements réseau. Les appareils sont déjà intégrés à Microsoft Defender for Endpoint. Quelle est l'approche la plus simple ?"},
options:[
 {en:"Survey employees about the apps they use", fr:"Sonder les employés sur leurs apps"},
 {en:"Deploy log collectors and upload firewall logs", fr:"Déployer des log collectors et importer les logs du pare-feu"},
 {en:"Install an SSL-inspecting proxy in every office", fr:"Installer un proxy à inspection SSL dans chaque bureau"},
 {en:"Enable the Defender for Endpoint integration in Defender for Cloud Apps to feed Cloud Discovery", fr:"Activer l'intégration Defender for Endpoint dans Defender for Cloud Apps pour alimenter Cloud Discovery"}],
correct:[3],
explanation:{en:"A is wrong: surveys are unreliable and not continuous.\nB is wrong: valid but heavier, and covers only traffic passing the corporate firewall.\nC is wrong: major infrastructure exactly contrary to \"no appliances\".\nD is correct: the MDE integration streams endpoint network telemetry directly into Cloud Discovery — machine-based discovery on and off the corporate network, no appliances or log uploads. You can even block unsanctioned apps via MDE.",
fr:"A est faux : les sondages sont peu fiables et non continus.\nB est faux : valable mais plus lourd, et ne couvre que le trafic passant par le pare-feu d'entreprise.\nC est faux : grosse infrastructure, exactement le contraire de « sans équipements ».\nD est correct : l'intégration MDE envoie la télémétrie réseau des endpoints directement dans Cloud Discovery — découverte par machine, sur et hors réseau d'entreprise, sans équipement ni import de logs. Tu peux même bloquer les apps non approuvées via MDE."}
},
{
id:"d3-013", domain:3, topic:"Session policies MDCA",
q:{en:"Using Defender for Cloud Apps, you must allow users on unmanaged devices to use Salesforce but block file downloads in real time during their sessions. What do you create?",
   fr:"Avec Defender for Cloud Apps, tu dois autoriser les utilisateurs sur appareils non gérés à utiliser Salesforce mais bloquer les téléchargements de fichiers en temps réel pendant leurs sessions. Que crées-tu ?"},
options:[
 {en:"A session policy (Control file download) with Conditional Access App Control routing the session through MDCA", fr:"Une session policy (Control file download) avec Conditional Access App Control routant la session via MDCA"},
 {en:"An access policy blocking unmanaged devices", fr:"Une access policy bloquant les appareils non gérés"},
 {en:"A file policy scanning Salesforce files", fr:"Une file policy scannant les fichiers Salesforce"},
 {en:"An OAuth app policy", fr:"Une OAuth app policy"}],
correct:[0],
explanation:{en:"A is correct: session policies work with Conditional Access App Control (a CA policy sends the session through MDCA's reverse proxy) to apply in-session controls: block download, cut/copy, print, upload — exactly \"allow access but restrict actions\".\nB is wrong: an access policy allows or BLOCKS the whole session — it can't allow-but-restrict.\nC is wrong: file policies inspect data at rest via API connectors, not live session actions.\nD is wrong: OAuth app policies govern third-party app consents, unrelated.",
fr:"A est correct : les session policies fonctionnent avec Conditional Access App Control (une politique CA envoie la session via le reverse proxy MDCA) pour appliquer des contrôles en session : bloquer téléchargement, couper/copier, imprimer, uploader — exactement « autoriser l'accès mais restreindre les actions ».\nB est faux : une access policy autorise ou BLOQUE toute la session — elle ne peut pas autoriser-mais-restreindre.\nC est faux : les file policies inspectent les données au repos via les connecteurs API, pas les actions de session en direct.\nD est faux : les OAuth app policies gouvernent les consentements d'apps tierces, sans rapport."}
},
{
id:"d3-014", domain:3, topic:"OAuth app governance",
q:{en:"You discover users granted consent to a suspicious third-party OAuth app that requests high permissions (Mail.Read, offline_access). What should you do in Defender for Cloud Apps?",
   fr:"Tu découvres que des utilisateurs ont consenti à une app OAuth tierce suspecte demandant des permissions élevées (Mail.Read, offline_access). Que fais-tu dans Defender for Cloud Apps ?"},
options:[
 {en:"Delete the users who consented", fr:"Supprimer les utilisateurs qui ont consenti"},
 {en:"Investigate the app in OAuth apps, mark it as banned/revoke it, and create an OAuth app policy to alert on similar high-permission apps", fr:"Investiguer l'app dans OAuth apps, la bannir/révoquer, et créer une OAuth app policy pour alerter sur les apps similaires à hautes permissions"},
 {en:"Nothing — user consent is safe by design", fr:"Rien — le consentement utilisateur est sûr par conception"},
 {en:"Reset all user passwords", fr:"Réinitialiser tous les mots de passe"}],
correct:[1],
explanation:{en:"A is wrong: users are victims; deleting them is destructive and pointless.\nB is correct: MDCA's OAuth apps page shows permission level, community use and consenting users; banning revokes the app's permissions. An OAuth app policy (e.g. high-severity permissions + rare app) automates future detection. Also tighten user consent settings in Entra to prevent recurrence.\nC is wrong: illicit consent grant attacks are a top identity threat.\nD is wrong: password resets don't revoke OAuth grants — the app keeps its tokens/permissions (that's why consent phishing is dangerous).",
fr:"A est faux : les utilisateurs sont des victimes ; les supprimer est destructif et inutile.\nB est correct : la page OAuth apps de MDCA montre le niveau de permissions, l'usage communautaire et les utilisateurs ayant consenti ; bannir révoque les permissions de l'app. Une OAuth app policy (ex : permissions sévères + app rare) automatise la détection future. Durcis aussi les paramètres de consentement dans Entra pour éviter la récidive.\nC est faux : les attaques par illicit consent grant sont une menace identitaire majeure.\nD est faux : réinitialiser les mots de passe ne révoque pas les consentements OAuth — l'app garde ses tokens/permissions (c'est ce qui rend le consent phishing dangereux)."}
},
{
id:"d3-015", domain:3, topic:"App authentication",
q:{en:"For an app registration used in production, which credential type does Microsoft recommend over client secrets?",
   fr:"Pour une app registration en production, quel type de credential Microsoft recommande-t-il plutôt que les client secrets ?"},
options:[
 {en:"The owner's user credentials", fr:"Les identifiants utilisateur du propriétaire"},
 {en:"Longer-lived client secrets (24 months)", fr:"Des client secrets plus longs (24 mois)"},
 {en:"Certificates (or federated credentials) — harder to leak, longer/controlled rotation", fr:"Les certificats (ou federated credentials) — plus durs à fuiter, rotation contrôlée"},
 {en:"A password stored in Key Vault", fr:"Un mot de passe stocké dans Key Vault"}],
correct:[2],
explanation:{en:"A is wrong: never bind apps to human credentials.\nB is wrong: longer secret lifetime makes leakage WORSE.\nC is correct: Microsoft recommends certificates or workload identity federation instead of client secrets: secrets are strings that get copied into code/config and leak. Best of all: use managed identities when running in Azure.\nD is wrong: Key Vault storage helps hygiene but a secret is still a shared string; the recommendation targets the credential type itself.",
fr:"A est faux : ne jamais lier une app aux identifiants d'un humain.\nB est faux : une durée plus longue AGGRAVE le risque de fuite.\nC est correct : Microsoft recommande les certificats ou la workload identity federation plutôt que les client secrets : les secrets sont des chaînes copiées dans le code/la config et qui fuitent. L'idéal : managed identities quand on tourne dans Azure.\nD est faux : Key Vault améliore l'hygiène mais un secret reste une chaîne partagée ; la recommandation porte sur le type de credential."}
},
{
id:"d3-016", domain:3, topic:"Managed identity usage",
q:{en:"You enabled a system-assigned managed identity on a VM. The VM still cannot read blobs from a storage account. What is missing?",
   fr:"Tu as activé une managed identity system-assigned sur une VM. La VM ne peut toujours pas lire les blobs d'un compte de stockage. Que manque-t-il ?"},
options:[
 {en:"A client secret for the identity", fr:"Un client secret pour l'identité"},
 {en:"Entra ID P2 licenses", fr:"Des licences Entra ID P2"},
 {en:"An app registration for the VM", fr:"Une app registration pour la VM"},
 {en:"An Azure RBAC role assignment (e.g. Storage Blob Data Reader) for the identity on the storage account", fr:"Une attribution de rôle Azure RBAC (ex : Storage Blob Data Reader) pour l'identité sur le compte de stockage"}],
correct:[3],
explanation:{en:"A is wrong: managed identities have no manageable secrets — that's the point.\nB is wrong: managed identities are free, no premium license involved.\nC is wrong: Azure creates the service principal automatically; no registration needed.\nD is correct: enabling the identity only creates the principal — you must still grant it permissions with an RBAC role scoped to the storage account (data-plane role like Storage Blob Data Reader for blob content).",
fr:"A est faux : les managed identities n'ont pas de secrets gérables — c'est le principe.\nB est faux : les managed identities sont gratuites, aucune licence premium.\nC est faux : Azure crée le service principal automatiquement ; pas de registration nécessaire.\nD est correct : activer l'identité crée seulement le principal — il faut encore lui accorder des permissions avec un rôle RBAC scopé sur le compte de stockage (rôle data-plane comme Storage Blob Data Reader pour le contenu blob)."}
},
{
id:"d3-017", domain:3, topic:"Multi-tenant apps",
q:{en:"Your developers built an app that customers in OTHER Entra tenants must sign into with their own work accounts. Which setting must the app registration use?",
   fr:"Tes développeurs ont créé une app à laquelle des clients dans D'AUTRES tenants Entra doivent se connecter avec leurs comptes professionnels. Quel réglage l'app registration doit-elle utiliser ?"},
options:[
 {en:"Supported account types = \"Accounts in any organizational directory\" (multi-tenant)", fr:"Supported account types = « Accounts in any organizational directory » (multi-tenant)"},
 {en:"Create one app registration per customer tenant manually", fr:"Créer une app registration par tenant client manuellement"},
 {en:"Enable public client flows", fr:"Activer les public client flows"},
 {en:"Supported account types = \"Accounts in this organizational directory only\" (single tenant)", fr:"Supported account types = « Accounts in this organizational directory only » (single tenant)"}],
correct:[0],
explanation:{en:"A is correct: multi-tenant registration lets any Entra organization's users sign in; on first use/consent, a service principal is created in the customer's tenant.\nB is wrong: unnecessary — the multi-tenant model exists precisely to avoid this.\nC is wrong: public client flows relate to device/native clients without secrets, not tenant audience.\nD is wrong: single-tenant restricts sign-in to your own tenant.",
fr:"A est correct : la registration multi-tenant permet aux utilisateurs de toute organisation Entra de se connecter ; à la première utilisation/consentement, un service principal est créé dans le tenant du client.\nB est faux : inutile — le modèle multi-tenant existe précisément pour éviter ça.\nC est faux : les public client flows concernent les clients natifs/appareils sans secrets, pas l'audience de tenants.\nD est faux : single-tenant restreint la connexion à ton propre tenant."}
},
{
id:"d3-018", domain:3, topic:"App collections",
q:{en:"Users complain the My Apps portal is cluttered. You want to group apps by department (HR apps, Finance apps) in My Apps. What do you create?",
   fr:"Les utilisateurs trouvent le portail My Apps encombré. Tu veux regrouper les apps par département (apps RH, apps Finance) dans My Apps. Que crées-tu ?"},
options:[
 {en:"Separate tenants per department", fr:"Des tenants séparés par département"},
 {en:"App collections in the Microsoft Entra admin center", fr:"Des app collections dans le centre d'admin Microsoft Entra"},
 {en:"Administrative units", fr:"Des administrative units"},
 {en:"Dynamic groups per department", fr:"Des groupes dynamiques par département"}],
correct:[1],
explanation:{en:"A is wrong: absurd overkill.\nB is correct: app collections (formerly workspaces) organize applications into named groups shown in the My Apps portal, assignable to specific users/groups.\nC is wrong: AUs scope admin permissions, they don't affect My Apps layout.\nD is wrong: groups control ACCESS to apps, not their visual organization into collections (though collections are assigned to groups).",
fr:"A est faux : démesuré et absurde.\nB est correct : les app collections (anciennement workspaces) organisent les applications en groupes nommés affichés dans le portail My Apps, assignables à des utilisateurs/groupes.\nC est faux : les AUs scopent des permissions admin, sans effet sur l'affichage My Apps.\nD est faux : les groupes contrôlent l'ACCÈS aux apps, pas leur organisation visuelle en collections (même si les collections sont assignées à des groupes)."}
},
{
id:"d3-019", domain:3, topic:"Token configuration",
q:{en:"An application needs the user's department and employeeId inside the ID token to personalize the UI. Where do you configure this?",
   fr:"Une application a besoin du department et de l'employeeId de l'utilisateur dans l'ID token pour personnaliser l'interface. Où configures-tu ça ?"},
options:[
 {en:"Conditional Access session controls", fr:"Les contrôles de session Conditional Access"},
 {en:"The enterprise app's provisioning mappings", fr:"Les mappings de provisioning de l'enterprise app"},
 {en:"Token configuration (optional claims) in the app registration", fr:"Token configuration (optional claims) dans l'app registration"},
 {en:"Custom security attributes", fr:"Les custom security attributes"}],
correct:[2],
explanation:{en:"A is wrong: session controls shape session behavior, not token content.\nB is wrong: provisioning mappings define attributes pushed via SCIM to the app's user store, not claims in tokens.\nC is correct: Token configuration on the app registration adds optional claims (like department, employeeid) to ID/access/SAML tokens. For SAML gallery apps you'd use Attributes & Claims on the enterprise app's SSO page.\nD is wrong: custom security attributes are directory metadata for ABAC/filtering, not automatically token claims.",
fr:"A est faux : les contrôles de session façonnent le comportement de session, pas le contenu des tokens.\nB est faux : les mappings de provisioning définissent les attributs poussés via SCIM vers l'app, pas les claims des tokens.\nC est correct : Token configuration sur l'app registration ajoute des optional claims (comme department, employeeid) aux tokens ID/access/SAML. Pour les apps SAML de la galerie, tu utiliserais Attributes & Claims dans la page SSO de l'enterprise app.\nD est faux : les custom security attributes sont des métadonnées d'annuaire pour ABAC/filtrage, pas automatiquement des claims."}
},
{
id:"d3-020", domain:3, topic:"MDCA app catalog",
q:{en:"In Cloud Discovery, you find employees heavily using an unapproved file-sharing app rated 3/10 in the Cloud app catalog. The company standard is OneDrive. What is the recommended governance action?",
   fr:"Dans Cloud Discovery, tu découvres que les employés utilisent massivement une app de partage de fichiers non approuvée notée 3/10 dans le Cloud app catalog. Le standard de l'entreprise est OneDrive. Quelle action de gouvernance est recommandée ?"},
options:[
 {en:"Lower the app's risk score manually", fr:"Baisser manuellement le score de risque de l'app"},
 {en:"Send a memo asking users to stop", fr:"Envoyer une note interne demandant d'arrêter"},
 {en:"Delete the app from the Cloud app catalog", fr:"Supprimer l'app du Cloud app catalog"},
 {en:"Tag the app as Unsanctioned (enforced as blocked via Defender for Endpoint) and keep OneDrive Sanctioned", fr:"Marquer l'app comme Unsanctioned (bloquée via Defender for Endpoint) et garder OneDrive Sanctioned"}],
correct:[3],
explanation:{en:"A is wrong: you can override scores, but faking a lower risk hides the problem instead of governing it.\nB is wrong: memos aren't enforcement.\nC is wrong: the catalog is Microsoft's database of 30,000+ apps; you can't delete entries.\nD is correct: tagging as Unsanctioned integrates with Defender for Endpoint to block access to the app's domains on onboarded devices — enforceable shadow IT governance.",
fr:"A est faux : on peut surcharger un score, mais truquer un risque plus bas masque le problème au lieu de le gouverner.\nB est faux : une note interne n'est pas une mesure d'application.\nC est faux : le catalogue est la base Microsoft de 30 000+ apps ; on ne supprime pas ses entrées.\nD est correct : le tag Unsanctioned s'intègre à Defender for Endpoint pour bloquer l'accès aux domaines de l'app sur les appareils intégrés — une gouvernance du shadow IT applicable techniquement."}
},
{
id:"d3-021", domain:3, topic:"Managed identity types",
q:{en:"Three Azure Functions in different resource groups must all authenticate to the same Azure SQL database with one identity, and that identity must survive the deletion of any single Function. Which identity should you use?",
   fr:"Trois Azure Functions dans des groupes de ressources différents doivent toutes s'authentifier à la même base Azure SQL avec une seule identité, et cette identité doit survivre à la suppression de n'importe quelle Function. Quelle identité utiliser ?"},
options:[
 {en:"A user-assigned managed identity, assigned to all three Functions", fr:"Une user-assigned managed identity, assignée aux trois Functions"},
 {en:"The Azure SQL administrator account", fr:"Le compte administrateur Azure SQL"},
 {en:"A system-assigned managed identity on each Function", fr:"Une system-assigned managed identity sur chaque Function"},
 {en:"An app registration with a shared client secret", fr:"Un app registration avec un client secret partagé"}],
correct:[0],
explanation:{en:"A is correct: a user-assigned managed identity is a standalone Azure resource with its own lifecycle — you assign it to many resources, grant permissions once, and deleting a Function does not delete the identity.\nB is wrong: using an administrator account for application access violates least privilege.\nC is wrong: a system-assigned identity is created with and deleted with its resource, and each Function would get a different principal, so you would grant SQL permissions three times.\nD is wrong: a shared secret must be stored, rotated and can leak — the whole point of managed identities is to avoid credentials.",
fr:"A est correct : une user-assigned managed identity est une ressource Azure autonome avec son propre cycle de vie — tu l'assignes à plusieurs ressources, tu accordes les permissions une fois, et supprimer une Function ne supprime pas l'identité.\nB est faux : utiliser un compte administrateur pour l'accès applicatif viole le moindre privilège.\nC est faux : une identité system-assigned est créée et supprimée avec sa ressource, et chaque Function aurait un principal différent, donc il faudrait accorder les droits SQL trois fois.\nD est faux : un secret partagé doit être stocké, renouvelé et peut fuiter — l'intérêt des managed identities est précisément d'éviter les identifiants."}
},
{
id:"d3-022", domain:3, topic:"Managed identity least privilege",
q:{en:"An Azure VM's managed identity must read secrets from a Key Vault that uses the Azure RBAC permission model. Which role assignment follows least privilege?",
   fr:"La managed identity d'une VM Azure doit lire des secrets dans un Key Vault utilisant le modèle de permissions Azure RBAC. Quelle attribution de rôle respecte le moindre privilège ?"},
options:[
 {en:"Key Vault Administrator on the resource group", fr:"Key Vault Administrator sur le groupe de ressources"},
 {en:"Key Vault Secrets User on the specific Key Vault", fr:"Key Vault Secrets User sur le Key Vault concerné"},
 {en:"Contributor on the subscription", fr:"Contributor sur l'abonnement"},
 {en:"Owner on the Key Vault", fr:"Owner sur le Key Vault"}],
correct:[1],
explanation:{en:"A is wrong: Key Vault Administrator can manage keys, secrets, certificates and permissions, and at resource-group scope it covers other vaults too.\nB is correct: Key Vault Secrets User grants read access to secret values only, scoped to that single vault — the minimum for the task.\nC is wrong: Contributor on a subscription is enormous over-provisioning (and notably still cannot read data plane secrets by itself, so it is both too broad and wrong).\nD is wrong: Owner adds full management and role-assignment rights.",
fr:"A est faux : Key Vault Administrator gère clés, secrets, certificats et permissions, et au niveau du groupe de ressources cela couvre aussi les autres coffres.\nB est correct : Key Vault Secrets User n'accorde que la lecture des valeurs de secrets, sur ce seul coffre — le minimum pour la tâche.\nC est faux : Contributor sur un abonnement est un surprovisionnement énorme (et ne permet d'ailleurs pas à lui seul de lire les secrets du plan de données, donc c'est à la fois trop large et inadapté).\nD est faux : Owner ajoute la gestion complète et le droit d'attribuer des rôles."}
},
{
id:"d3-023", domain:3, topic:"On-premises workload identity",
q:{en:"A batch job running on an on-premises Windows server must call Microsoft Graph unattended. Managed identities are not available. What is the most secure supported approach?",
   fr:"Un traitement batch tournant sur un serveur Windows on-prem doit appeler Microsoft Graph sans interaction. Les managed identities ne sont pas disponibles. Quelle est l'approche supportée la plus sûre ?"},
options:[
 {en:"Use a service account with a password and delegated permissions", fr:"Utiliser un compte de service avec mot de passe et des permissions déléguées"},
 {en:"Use a managed identity anyway via Azure Arc, which is unsupported", fr:"Utiliser quand même une managed identity via Azure Arc, ce qui n'est pas supporté"},
 {en:"Register an application and authenticate with a certificate credential, granting application permissions with admin consent", fr:"Enregistrer une application et s'authentifier avec un certificat, en accordant des permissions applicatives avec consentement admin"},
 {en:"Register an application and use a long-lived client secret stored in the script", fr:"Enregistrer une application et utiliser un client secret longue durée stocké dans le script"}],
correct:[2],
explanation:{en:"A is wrong: a password-based service account with delegated permissions cannot run truly unattended and is a classic weak point.\nB is wrong: Azure Arc-enabled servers DO support managed identities, so the statement is factually incorrect — but the scenario says managed identities are unavailable, so the app-plus-certificate answer stands.\nC is correct: managed identities only exist for Azure resources, so an on-prem daemon needs an app registration. A certificate credential is stronger than a secret (private key can be protected by the OS/TPM and is not a copyable string) and application permissions are the right model for unattended access.\nD is wrong: secrets in scripts leak and expire; this is the pattern to avoid.",
fr:"A est faux : un compte de service avec mot de passe et permissions déléguées ne peut pas fonctionner vraiment sans interaction et constitue un point faible classique.\nB est faux : les serveurs Azure Arc supportent BIEN les managed identities, donc l'affirmation est fausse — mais l'énoncé pose que les managed identities sont indisponibles, donc la réponse app + certificat reste la bonne.\nC est correct : les managed identities n'existent que pour les ressources Azure, donc un démon on-prem a besoin d'un app registration. Un certificat est plus robuste qu'un secret (la clé privée peut être protégée par l'OS/TPM et n'est pas une chaîne copiable) et les permissions applicatives sont le bon modèle pour un accès sans interaction.\nD est faux : les secrets dans les scripts fuitent et expirent ; c'est le schéma à éviter."}
},
{
id:"d3-024", domain:3, topic:"Credential expiry monitoring",
q:{en:"Two production integrations broke last quarter because client secrets expired unnoticed. Which combination best prevents a repeat? (Select TWO)",
   fr:"Deux intégrations de production sont tombées le trimestre dernier à cause de client secrets expirés sans que personne ne le remarque. Quelle combinaison évite le mieux la récidive ? (Choisis DEUX réponses)"},
options:[
 {en:"Grant the applications the Global Administrator role so they keep working", fr:"Accorder le rôle Global Administrator aux applications pour qu'elles continuent de fonctionner"},
 {en:"Replace secrets with certificate credentials or workload identity federation where possible", fr:"Remplacer les secrets par des certificats ou de la workload identity federation quand c'est possible"},
 {en:"Query Microsoft Graph for applications with credentials expiring soon and alert the owners", fr:"Interroger Microsoft Graph pour lister les applications dont les identifiants expirent bientôt et alerter les propriétaires"},
 {en:"Create secrets that never expire", fr:"Créer des secrets sans expiration"}],
correct:[1,2],
explanation:{en:"A is wrong: a role has nothing to do with credential expiry and would be a severe privilege escalation.\nB and C are correct: federated credentials remove secrets entirely (no expiry to manage), certificates are stronger, and proactive reporting on passwordCredentials/keyCredentials end dates via Graph turns an outage into a planned rotation.\nD is wrong: non-expiring secrets are a standing compromise risk, and the portal caps secret lifetime for this reason.",
fr:"A est faux : un rôle n'a rien à voir avec l'expiration d'un identifiant et constituerait une élévation de privilèges grave.\nB et C sont corrects : les identifiants fédérés éliminent les secrets (plus d'expiration à gérer), les certificats sont plus robustes, et un reporting proactif sur les dates de fin des passwordCredentials/keyCredentials via Graph transforme une panne en rotation planifiée.\nD est faux : des secrets sans expiration sont un risque de compromission permanent, et le portail limite leur durée pour cette raison."}
},
{
id:"d3-025", domain:3, topic:"Delegated vs application permissions",
q:{en:"A nightly service must read the mailboxes of all users to build a compliance archive. No user is signed in. Which permission model and consent are required?",
   fr:"Un service nocturne doit lire les boîtes de tous les utilisateurs pour construire une archive de conformité. Aucun utilisateur n'est connecté. Quel modèle de permission et quel consentement sont requis ?"},
options:[
 {en:"Application permissions (for example Mail.Read as an app role), which require admin consent", fr:"Des permissions applicatives (ex : Mail.Read comme app role), qui exigent un consentement administrateur"},
 {en:"Delegated permissions with admin consent granted on behalf of the organization", fr:"Des permissions déléguées avec consentement admin accordé au nom de l'organisation"},
 {en:"Delegated permissions with user consent", fr:"Des permissions déléguées avec consentement utilisateur"},
 {en:"No permissions — a managed identity always has full Graph access", fr:"Aucune permission — une managed identity a toujours un accès complet à Graph"}],
correct:[0],
explanation:{en:"A is correct: with no signed-in user the app acts as itself, which is exactly what application permissions express, and they always require admin consent. Scope it further with Exchange application access policies so it cannot read every mailbox unnecessarily.\nB is wrong: delegated permissions always act on behalf of a signed-in user, so they cannot be used unattended even with admin consent.\nC is wrong: same problem, plus user consent cannot grant tenant-wide mailbox access.\nD is wrong: a managed identity starts with no Graph permissions; you must grant app roles to its service principal.",
fr:"A est correct : sans utilisateur connecté, l'app agit pour elle-même, ce qu'expriment précisément les permissions applicatives, et celles-ci exigent toujours un consentement admin. Restreins encore la portée avec les application access policies Exchange pour qu'elle ne lise pas inutilement toutes les boîtes.\nB est faux : les permissions déléguées agissent toujours au nom d'un utilisateur connecté, donc inutilisables sans interaction même avec consentement admin.\nC est faux : même problème, et un consentement utilisateur ne peut pas accorder l'accès aux boîtes de tout le tenant.\nD est faux : une managed identity démarre sans aucune permission Graph ; il faut accorder des app roles à son service principal."}
},
{
id:"d3-026", domain:3, topic:"Admin consent workflow",
q:{en:"You block user consent to applications. Users now open helpdesk tickets whenever an app needs permissions, and requests get lost. What should you enable?",
   fr:"Tu bloques le consentement utilisateur aux applications. Les utilisateurs ouvrent maintenant des tickets au helpdesk dès qu'une app a besoin de permissions, et les demandes se perdent. Que dois-tu activer ?"},
options:[
 {en:"Grant every user the Cloud Application Administrator role", fr:"Accorder à chaque utilisateur le rôle Cloud Application Administrator"},
 {en:"The admin consent workflow, designating reviewers who receive, approve or deny requests inside Entra ID", fr:"Le workflow de consentement administrateur, en désignant des relecteurs qui reçoivent, approuvent ou refusent les demandes dans Entra ID"},
 {en:"Create an access package for each application", fr:"Créer un access package pour chaque application"},
 {en:"Allow user consent for all applications again", fr:"Réautoriser le consentement utilisateur pour toutes les applications"}],
correct:[1],
explanation:{en:"A is wrong: handing an app-management role to everyone is a severe privilege escalation.\nB is correct: the admin consent workflow gives users a Request approval button, routes the request to designated reviewers with notifications and an expiry, and records the decision — governance without a ticket queue.\nC is wrong: access packages grant users access to existing resources; they do not grant an application its API permissions.\nD is wrong: that reintroduces the consent-phishing risk you just closed.",
fr:"A est faux : donner un rôle de gestion d'applications à tout le monde est une élévation de privilèges grave.\nB est correct : le workflow de consentement admin donne aux utilisateurs un bouton Demander l'approbation, route la demande vers des relecteurs désignés avec notifications et expiration, et enregistre la décision — de la gouvernance sans file de tickets.\nC est faux : les access packages donnent accès à des ressources existantes ; ils n'accordent pas ses permissions d'API à une application.\nD est faux : cela réintroduit le risque de consent phishing que tu viens de fermer."}
},
{
id:"d3-027", domain:3, topic:"User consent settings",
q:{en:"You want users to be able to consent to low-risk permissions, but only for applications from verified publishers. What do you configure?",
   fr:"Tu veux que les utilisateurs puissent consentir à des permissions peu risquées, mais uniquement pour des applications d'éditeurs vérifiés. Que configures-tu ?"},
options:[
 {en:"Require MFA before consenting", fr:"Exiger le MFA avant de consentir"},
 {en:"Allow user consent for all apps and all permissions", fr:"Autoriser le consentement utilisateur pour toutes les apps et toutes les permissions"},
 {en:"User consent settings: allow user consent for apps from verified publishers, for selected permissions, using permission classifications to define the low-impact set", fr:"Les user consent settings : autoriser le consentement utilisateur pour les apps d'éditeurs vérifiés, pour des permissions sélectionnées, en utilisant les permission classifications pour définir l'ensemble à faible impact"},
 {en:"Disable user consent entirely", fr:"Désactiver totalement le consentement utilisateur"}],
correct:[2],
explanation:{en:"A is wrong: MFA proves who is consenting, not that the app or permission is safe.\nB is wrong: that is the permissive posture that enables consent phishing.\nC is correct: Entra ID offers three consent postures, and the middle one restricts user consent to verified-publisher apps and to permissions you have classified as low impact — the balance the requirement describes.\nD is wrong: fully disabling consent contradicts the requirement and pushes all requests to admins.",
fr:"A est faux : le MFA prouve qui consent, pas que l'app ou la permission est sûre.\nB est faux : c'est la posture permissive qui permet le consent phishing.\nC est correct : Entra ID propose trois postures de consentement, et l'intermédiaire restreint le consentement utilisateur aux apps d'éditeurs vérifiés et aux permissions que tu as classées comme à faible impact — l'équilibre décrit par le besoin.\nD est faux : désactiver totalement le consentement contredit le besoin et renvoie toutes les demandes aux admins."}
},
{
id:"d3-028", domain:3, topic:"Illicit consent grant response",
q:{en:"An attacker phished users into consenting to a malicious app that now reads their mail. What are the correct immediate response actions? (Select TWO)",
   fr:"Un attaquant a hameçonné des utilisateurs pour qu'ils consentent à une app malveillante qui lit maintenant leurs mails. Quelles sont les bonnes actions de réponse immédiate ? (Choisis DEUX réponses)"},
options:[
 {en:"Wait for the tokens to expire naturally", fr:"Attendre l'expiration naturelle des jetons"},
 {en:"Disable user sign-in for the service principal (or delete it) to stop the app immediately", fr:"Désactiver la connexion des utilisateurs pour le service principal (ou le supprimer) afin d'arrêter l'app immédiatement"},
 {en:"Revoke the OAuth2 permission grants and the affected users' refresh tokens", fr:"Révoquer les OAuth2 permission grants et les refresh tokens des utilisateurs concernés"},
 {en:"Reset the users' passwords, which alone invalidates the app's access tokens", fr:"Réinitialiser les mots de passe des utilisateurs, ce qui invalide à lui seul les jetons d'accès de l'app"}],
correct:[1,2],
explanation:{en:"A is wrong: waiting leaves the attacker reading mail, and refresh tokens can be renewed indefinitely.\nB and C are correct: killing the service principal stops new token issuance, and removing the delegated permission grants plus revoking refresh tokens cuts the existing access. Afterwards, tighten consent settings and hunt in the audit logs for other consents.\nD is wrong: a password reset does not by itself revoke an app's existing OAuth grant — the consent survives, which is what makes this attack so effective.",
fr:"A est faux : attendre laisse l'attaquant lire les mails, et les refresh tokens peuvent être renouvelés indéfiniment.\nB et C sont corrects : neutraliser le service principal stoppe l'émission de nouveaux jetons, et supprimer les permissions déléguées accordées plus révoquer les refresh tokens coupe l'accès existant. Ensuite, durcis les réglages de consentement et cherche dans les journaux d'audit d'autres consentements.\nD est faux : une réinitialisation de mot de passe ne révoque pas à elle seule l'OAuth grant existant d'une app — le consentement survit, et c'est ce qui rend cette attaque si efficace."}
},
{
id:"d3-029", domain:3, topic:"App Proxy connector groups",
q:{en:"You publish internal apps with Application Proxy for offices in Paris and Singapore. Users complain about latency because traffic is routed through the wrong region. What should you configure?",
   fr:"Tu publies des applications internes avec Application Proxy pour les bureaux de Paris et Singapour. Les utilisateurs se plaignent de latence car le trafic passe par la mauvaise région. Que dois-tu configurer ?"},
options:[
 {en:"Separate connector groups per region, assign each application to the group closest to its backend, and set each group's region", fr:"Des connector groups distincts par région, assigner chaque application au groupe le plus proche de son backend, et définir la région de chaque groupe"},
 {en:"Switch pre-authentication to passthrough", fr:"Passer la pré-authentification en passthrough"},
 {en:"Use a named location per office", fr:"Utiliser une named location par bureau"},
 {en:"Install more connectors in a single default group", fr:"Installer plus de connecteurs dans un unique groupe par défaut"}],
correct:[0],
explanation:{en:"A is correct: connector groups segment connectors by network location or region, each application is served by one group, and setting the group's region makes the service use the nearest Azure region — the standard answer for latency and network segmentation.\nB is wrong: pre-authentication mode affects security, not routing, and passthrough disables Conditional Access.\nC is wrong: named locations are Conditional Access conditions, not routing.\nD is wrong: more connectors in one group does not control which region serves which app.",
fr:"A est correct : les connector groups segmentent les connecteurs par emplacement réseau ou région, chaque application est servie par un groupe, et définir la région du groupe fait utiliser la région Azure la plus proche — la réponse standard pour la latence et la segmentation réseau.\nB est faux : le mode de pré-authentification touche la sécurité, pas le routage, et le passthrough désactive l'accès conditionnel.\nC est faux : les named locations sont des conditions d'accès conditionnel, pas du routage.\nD est faux : plus de connecteurs dans un seul groupe ne contrôle pas quelle région sert quelle app."}
},
{
id:"d3-030", domain:3, topic:"App Proxy pre-authentication",
q:{en:"A team asks you to publish an internal app through Application Proxy with Passthrough pre-authentication. What is the main security consequence you must raise?",
   fr:"Une équipe te demande de publier une application interne via Application Proxy avec la pré-authentification Passthrough. Quelle est la principale conséquence de sécurité que tu dois signaler ?"},
options:[
 {en:"Passthrough disables the connector's outbound-only communication", fr:"Le passthrough désactive la communication uniquement sortante du connecteur"},
 {en:"Entra ID does not authenticate the request, so Conditional Access, MFA and single sign-on do not apply and the app is exposed to anonymous internet traffic", fr:"Entra ID n'authentifie pas la requête, donc l'accès conditionnel, le MFA et le SSO ne s'appliquent pas et l'app est exposée au trafic internet anonyme"},
 {en:"The app will be slower but equally protected", fr:"L'app sera plus lente mais tout aussi protégée"},
 {en:"Passthrough requires the users to be guests", fr:"Le passthrough exige que les utilisateurs soient des guests"}],
correct:[1],
explanation:{en:"A is wrong: the connector always communicates outbound only; passthrough does not change that.\nB is correct: with Entra ID pre-authentication the service authenticates first, which is what enables Conditional Access, MFA and SSO. Passthrough forwards the request untouched, so those protections are bypassed and only the app's own authentication stands between the internet and the backend.\nC is wrong: the protection level is materially lower, not equal.\nD is wrong: passthrough has nothing to do with UserType.",
fr:"A est faux : le connecteur communique toujours uniquement en sortant ; le passthrough n'y change rien.\nB est correct : avec la pré-authentification Entra ID, le service authentifie d'abord, ce qui permet l'accès conditionnel, le MFA et le SSO. Le passthrough transmet la requête telle quelle, donc ces protections sont contournées et seule l'authentification propre de l'app se dresse entre internet et le backend.\nC est faux : le niveau de protection est nettement plus faible, pas équivalent.\nD est faux : le passthrough n'a rien à voir avec le UserType."}
},
{
id:"d3-031", domain:3, topic:"App Proxy SSO methods",
q:{en:"You publish a legacy on-premises web application that authenticates users with Integrated Windows Authentication. Users must get single sign-on through Application Proxy. What do you configure?",
   fr:"Tu publies une application web on-prem historique qui authentifie les utilisateurs par Integrated Windows Authentication. Les utilisateurs doivent bénéficier du SSO via Application Proxy. Que configures-tu ?"},
options:[
 {en:"SAML-based single sign-on", fr:"Le SSO basé sur SAML"},
 {en:"Password-based single sign-on", fr:"Le SSO basé sur mot de passe"},
 {en:"Single sign-on mode \"Integrated Windows Authentication\", with Kerberos constrained delegation for the connector's computer account and the app's SPN", fr:"Le mode SSO « Integrated Windows Authentication », avec une délégation Kerberos contrainte pour le compte ordinateur du connecteur et le SPN de l'app"},
 {en:"Header-based single sign-on, which is built in with no extra component", fr:"Le SSO basé sur les en-têtes, intégré sans composant supplémentaire"}],
correct:[2],
explanation:{en:"A is wrong: the legacy app does not speak SAML — that is the point of publishing it this way.\nB is wrong: password-based SSO replays stored credentials into a form and is a fallback for apps with HTML sign-in forms.\nC is correct: for Kerberos/IWA backends, the connector impersonates the user using Kerberos constrained delegation, so you must configure KCD on the connector host and give the app its SPN.\nD is wrong: header-based SSO requires a third-party component (PingAccess) and suits apps that consume HTTP headers, not Kerberos.",
fr:"A est faux : l'app historique ne parle pas SAML — c'est justement pourquoi on la publie ainsi.\nB est faux : le SSO par mot de passe rejoue des identifiants stockés dans un formulaire, c'est un repli pour les apps à formulaire HTML.\nC est correct : pour un backend Kerberos/IWA, le connecteur impersonne l'utilisateur via la délégation Kerberos contrainte, il faut donc configurer la KCD sur l'hôte du connecteur et donner son SPN à l'app.\nD est faux : le SSO par en-têtes nécessite un composant tiers (PingAccess) et convient aux apps qui consomment des en-têtes HTTP, pas Kerberos."}
},
{
id:"d3-032", domain:3, topic:"SAML claims customization",
q:{en:"A SAML application requires the user's employee ID in a claim named http://schemas.contoso.com/empid, and its value must be the employeeId attribute without the domain part. Where do you configure this?",
   fr:"Une application SAML exige l'identifiant employé dans un claim nommé http://schemas.contoso.com/empid, avec la valeur de l'attribut employeeId sans la partie domaine. Où configures-tu cela ?"},
options:[
 {en:"In Entra Connect attribute mapping", fr:"Dans le mapping d'attributs d'Entra Connect"},
 {en:"In a Conditional Access authentication context", fr:"Dans un authentication context d'accès conditionnel"},
 {en:"In the app registration's Token configuration, which only affects OIDC tokens", fr:"Dans la Token configuration de l'app registration, qui ne concerne que les jetons OIDC"},
 {en:"In the enterprise application's Single sign-on blade, under Attributes & Claims, adding a claim with the required name and a transformation if needed", fr:"Dans le panneau Single sign-on de l'application d'entreprise, sous Attributs & claims, en ajoutant un claim avec le nom requis et une transformation si nécessaire"}],
correct:[3],
explanation:{en:"A is wrong: Connect controls what is synced into the directory, not what a SAML app receives.\nB is wrong: authentication context labels resources for CA policies; it emits no application claims.\nC is wrong: token configuration adds optional claims to OIDC/OAuth tokens, not SAML assertions.\nD is correct: Attributes & Claims is where you name claims, choose the source attribute and apply transformations such as ExtractMailPrefix or Join for SAML tokens.",
fr:"A est faux : Connect contrôle ce qui est synchronisé dans l'annuaire, pas ce que reçoit une app SAML.\nB est faux : l'authentication context étiquette des ressources pour les stratégies CA ; il n'émet aucun claim applicatif.\nC est faux : la token configuration ajoute des claims optionnels aux jetons OIDC/OAuth, pas aux assertions SAML.\nD est correct : Attributs & claims est l'endroit où tu nommes les claims, choisis l'attribut source et appliques des transformations comme ExtractMailPrefix ou Join pour les jetons SAML."}
},
{
id:"d3-033", domain:3, topic:"SAML certificate rollover",
q:{en:"The SAML signing certificate of a business-critical application expires in 20 days. How do you roll it over with no outage?",
   fr:"Le certificat de signature SAML d'une application critique expire dans 20 jours. Comment le renouveler sans interruption ?"},
options:[
 {en:"Create a new certificate in the app's SAML signing section, share the new metadata or certificate with the app owner, then make the new certificate active", fr:"Créer un nouveau certificat dans la section de signature SAML de l'app, transmettre les nouvelles métadonnées ou le certificat au propriétaire de l'app, puis activer le nouveau certificat"},
 {en:"Ask users to clear their browser cache on the expiry date", fr:"Demander aux utilisateurs de vider leur cache navigateur le jour de l'expiration"},
 {en:"Delete the expiring certificate and let Entra ID generate a replacement automatically", fr:"Supprimer le certificat qui expire et laisser Entra ID en générer un automatiquement"},
 {en:"Renew the app registration's client secret", fr:"Renouveler le client secret de l'app registration"}],
correct:[0],
explanation:{en:"A is correct: Entra ID lets an application hold multiple signing certificates with one active. You create the new one, give the service provider the new certificate or federation metadata so it trusts it, then activate — order matters, because activating before the SP trusts the new key breaks sign-in.\nB is wrong: caching is irrelevant to certificate trust.\nC is wrong: deleting the certificate in use causes an immediate outage.\nD is wrong: client secrets are for OAuth/OIDC confidential clients, not SAML signing.",
fr:"A est correct : Entra ID permet à une application de détenir plusieurs certificats de signature dont un actif. Tu crées le nouveau, tu fournis au service provider le certificat ou les métadonnées de fédération pour qu'il lui fasse confiance, puis tu l'actives — l'ordre compte, car activer avant que le SP ne fasse confiance à la nouvelle clé casse la connexion.\nB est faux : le cache n'a rien à voir avec la confiance dans un certificat.\nC est faux : supprimer le certificat en cours d'usage provoque une interruption immédiate.\nD est faux : les client secrets concernent les clients confidentiels OAuth/OIDC, pas la signature SAML."}
},
{
id:"d3-034", domain:3, topic:"SCIM scoping filters",
q:{en:"An HR SaaS app is provisioned via SCIM from Entra ID, but only users whose department is Finance should be created there, even though the app is assigned to a broad group. What do you configure?",
   fr:"Une app SaaS RH est provisionnée par SCIM depuis Entra ID, mais seuls les utilisateurs dont le département est Finance doivent y être créés, même si l'app est assignée à un groupe large. Que configures-tu ?"},
options:[
 {en:"A dynamic group and remove all assignments", fr:"Un groupe dynamique en supprimant toutes les assignations"},
 {en:"A scoping filter in the provisioning configuration, matching department equals Finance", fr:"Un scoping filter dans la configuration de provisioning, avec department égal à Finance"},
 {en:"An attribute mapping with a Join transformation", fr:"Un mapping d'attributs avec une transformation Join"},
 {en:"A Conditional Access policy restricted to Finance", fr:"Une stratégie d'accès conditionnel restreinte à Finance"}],
correct:[1],
explanation:{en:"A is wrong: a dynamic group also works in some designs, but the question keeps the broad assignment, so scoping is the intended answer and the more granular tool.\nB is correct: scoping filters evaluate attribute conditions on top of assignment, so only in-scope users are provisioned — exactly the stated requirement.\nC is wrong: mappings transform values of provisioned attributes, they do not decide who is provisioned.\nD is wrong: Conditional Access governs sign-in, not provisioning.",
fr:"A est faux : un groupe dynamique fonctionne dans certaines conceptions, mais l'énoncé conserve l'assignation large, donc le scoping est la réponse visée et l'outil le plus granulaire.\nB est correct : les scoping filters évaluent des conditions d'attributs par-dessus l'assignation, donc seuls les utilisateurs dans la portée sont provisionnés — exactement le besoin exprimé.\nC est faux : les mappings transforment les valeurs des attributs provisionnés, ils ne décident pas qui est provisionné.\nD est faux : l'accès conditionnel gouverne la connexion, pas le provisioning."}
},
{
id:"d3-035", domain:3, topic:"Provisioning troubleshooting",
q:{en:"After changing a SCIM attribute mapping, you must verify the result for one specific user immediately rather than waiting for the 40-minute provisioning cycle. What do you use?",
   fr:"Après avoir modifié un mapping d'attributs SCIM, tu dois vérifier le résultat pour un utilisateur précis immédiatement, sans attendre le cycle de provisioning de 40 minutes. Qu'utilises-tu ?"},
options:[
 {en:"Delete and recreate the enterprise application", fr:"Supprimer et recréer l'application d'entreprise"},
 {en:"Check the Entra ID audit logs", fr:"Consulter les journaux d'audit d'Entra ID"},
 {en:"Provision on demand, then read the step-by-step result and the provisioning logs", fr:"Le provisioning à la demande (provision on demand), puis lire le résultat étape par étape et les journaux de provisioning"},
 {en:"Restart provisioning, which resyncs everyone from scratch", fr:"Redémarrer le provisioning, ce qui resynchronise tout le monde de zéro"}],
correct:[2],
explanation:{en:"A is wrong: recreating the app destroys configuration and assignments.\nB is wrong: provisioning detail lives in the provisioning logs, not the audit logs.\nC is correct: provision on demand targets a single user or group in seconds and shows each step — import, matching, scoping decision, exported attributes — which is the fastest way to validate a mapping change.\nD is wrong: restarting provisioning triggers a full initial cycle for all users, which is slow and can be disruptive; it is reserved for genuine resets.",
fr:"A est faux : recréer l'app détruit la configuration et les assignations.\nB est faux : le détail du provisioning se trouve dans les journaux de provisioning, pas d'audit.\nC est correct : le provisioning à la demande cible un seul utilisateur ou groupe en quelques secondes et montre chaque étape — import, appariement, décision de scoping, attributs exportés — c'est la façon la plus rapide de valider un changement de mapping.\nD est faux : redémarrer le provisioning déclenche un cycle initial complet pour tous les utilisateurs, lent et potentiellement perturbant ; réservé aux vraies réinitialisations."}
},
{
id:"d3-036", domain:3, topic:"Assignment required",
q:{en:"An enterprise application appears in every user's My Apps portal and anyone in the tenant can sign into it, although you only assigned two groups. What is the cause?",
   fr:"Une application d'entreprise apparaît dans le portail Mes applications de tous les utilisateurs et n'importe qui dans le tenant peut s'y connecter, alors que tu n'as assigné que deux groupes. Quelle est la cause ?"},
options:[
 {en:"Conditional Access is not configured for the app", fr:"L'accès conditionnel n'est pas configuré pour l'application"},
 {en:"The two groups are dynamic and include everyone", fr:"Les deux groupes sont dynamiques et incluent tout le monde"},
 {en:"The app has the Global Reader role assigned", fr:"L'application a le rôle Global Reader assigné"},
 {en:"\"Assignment required\" is set to No, so any user in the tenant can authenticate to the app", fr:"« Attribution requise » est sur Non, donc tout utilisateur du tenant peut s'authentifier à l'application"}],
correct:[3],
explanation:{en:"A is wrong: missing CA reduces conditions on access, but with assignment required set to Yes non-assigned users would still be refused.\nB is wrong: possible in theory but the symptom described is the textbook effect of the assignment toggle.\nC is wrong: directory roles granted to an app govern what the app can do in the directory, not who may sign into it.\nD is correct: assignment required is the switch that decides whether user assignment is enforced. With it off, assignments only control visibility in My Apps and any tenant user can obtain a token for the app.",
fr:"A est faux : l'absence de CA réduit les conditions d'accès, mais avec « attribution requise » sur Oui les utilisateurs non assignés seraient tout de même refusés.\nB est faux : théoriquement possible, mais le symptôme décrit est l'effet classique de l'interrupteur d'attribution.\nC est faux : les rôles d'annuaire accordés à une app gouvernent ce qu'elle peut faire dans l'annuaire, pas qui peut s'y connecter.\nD est correct : « attribution requise » est l'interrupteur qui décide si l'assignation d'utilisateurs est imposée. Désactivé, les assignations ne contrôlent que la visibilité dans Mes applications et tout utilisateur du tenant peut obtenir un jeton pour l'app."}
},
{
id:"d3-037", domain:3, topic:"Group claims",
q:{en:"An application authorizes users by group, but its tokens are rejected because they exceed the maximum size for users in 200 groups. What is the recommended fix?",
   fr:"Une application autorise les utilisateurs par groupe, mais ses jetons sont rejetés car ils dépassent la taille maximale pour des utilisateurs membres de 200 groupes. Quelle est la correction recommandée ?"},
options:[
 {en:"Emit only the groups assigned to the application, or switch the app to app roles instead of raw group claims", fr:"N'émettre que les groupes assignés à l'application, ou faire passer l'app à des app roles au lieu de claims de groupes bruts"},
 {en:"Remove the users from most of their groups", fr:"Retirer les utilisateurs de la plupart de leurs groupes"},
 {en:"Increase the token size limit in the app registration", fr:"Augmenter la limite de taille des jetons dans l'app registration"},
 {en:"Use a SAML assertion instead, which has no size limit", fr:"Utiliser une assertion SAML à la place, qui n'a pas de limite de taille"}],
correct:[0],
explanation:{en:"A is correct: Entra ID caps group claims (roughly 150 for SAML and 200 for JWT) and then emits a Graph link instead. The supported designs are to restrict the claim to groups explicitly assigned to that application, or to model authorization as app roles, which stay small and are app-specific.\nB is wrong: reorganising the whole directory to satisfy one app is not viable.\nC is wrong: there is no such setting to raise.\nD is wrong: SAML has an even lower group limit.",
fr:"A est correct : Entra ID plafonne les claims de groupes (environ 150 pour SAML et 200 pour JWT) puis émet un lien Graph à la place. Les conceptions supportées sont de restreindre le claim aux groupes explicitement assignés à cette application, ou de modéliser l'autorisation avec des app roles, qui restent compacts et propres à l'app.\nB est faux : réorganiser tout l'annuaire pour satisfaire une app n'est pas viable.\nC est faux : ce réglage n'existe pas.\nD est faux : SAML a une limite de groupes encore plus basse."}
},
{
id:"d3-038", domain:3, topic:"App roles",
q:{en:"A custom web API must distinguish Readers from Approvers, and the assignment must be visible and reviewable in Entra ID. What should the developer and you implement?",
   fr:"Une API web personnalisée doit distinguer les Readers des Approvers, et l'attribution doit être visible et auditable dans Entra ID. Que devez-vous implémenter, toi et le développeur ?"},
options:[
 {en:"Create two Entra directory roles named Reader and Approver", fr:"Créer deux rôles d'annuaire Entra nommés Reader et Approver"},
 {en:"Define app roles on the application, assign users or groups to those roles, and have the API authorize on the roles claim", fr:"Définir des app roles sur l'application, assigner des utilisateurs ou groupes à ces rôles, et faire autoriser l'API sur le claim roles"},
 {en:"Use two separate app registrations, one per role", fr:"Utiliser deux app registrations distincts, un par rôle"},
 {en:"Store the role list in the application's own database", fr:"Stocker la liste des rôles dans la base de données de l'application"}],
correct:[1],
explanation:{en:"A is wrong: directory roles grant permissions over Entra ID itself, not over your API.\nB is correct: app roles are declared in the app manifest, assigned through the enterprise application's Users and groups blade, emitted in the roles claim, and — being real assignments — they can be governed with access reviews and access packages.\nC is wrong: duplicating registrations doubles configuration and breaks a single token audience.\nD is wrong: an internal table is invisible to Entra governance and cannot be reviewed centrally.",
fr:"A est faux : les rôles d'annuaire donnent des permissions sur Entra ID lui-même, pas sur ton API.\nB est correct : les app roles sont déclarés dans le manifeste de l'app, attribués via le panneau Utilisateurs et groupes de l'application d'entreprise, émis dans le claim roles, et — étant de véritables attributions — ils peuvent être gouvernés par des access reviews et des access packages.\nC est faux : dupliquer les registrations double la configuration et casse l'unicité de l'audience du jeton.\nD est faux : une table interne est invisible pour la gouvernance Entra et non auditable centralement."}
},
{
id:"d3-039", domain:3, topic:"Single sign-out",
q:{en:"When a user signs out of one application, your other integrated applications keep their sessions open. What must be configured so a single sign-out propagates?",
   fr:"Quand un utilisateur se déconnecte d'une application, tes autres applications intégrées gardent leur session ouverte. Que faut-il configurer pour qu'une déconnexion unique se propage ?"},
options:[
 {en:"Reduce the access token lifetime on each application", fr:"Réduire la durée de vie des jetons d'accès de chaque application"},
 {en:"Revoke the user's sessions in Entra ID after every sign-out", fr:"Révoquer les sessions de l'utilisateur dans Entra ID après chaque déconnexion"},
 {en:"A front-channel logout URL (or SAML logout URL) on each application registration, so Entra ID can notify every application when the session ends", fr:"Une URL de déconnexion front-channel (ou URL de logout SAML) sur chaque app registration, pour qu'Entra ID puisse notifier chaque application à la fin de la session"},
 {en:"A Conditional Access policy with a 1-hour sign-in frequency", fr:"Une stratégie d'accès conditionnel avec une fréquence de connexion d'une heure"}],
correct:[2],
explanation:{en:"A is wrong: shorter tokens shorten the window but the user stays signed in until they expire, which is not sign-out.\nB is wrong: session revocation is an administrative containment action, not the mechanism behind a user-initiated single sign-out.\nC is correct: each application must expose a logout endpoint that Entra ID calls during sign-out; without it the identity provider ends its own session while the application keeps its local one.\nD is wrong: sign-in frequency forces reauthentication later, it does not terminate existing application sessions.",
fr:"A est faux : des jetons plus courts réduisent la fenêtre mais l'utilisateur reste connecté jusqu'à leur expiration, ce n'est pas une déconnexion.\nB est faux : la révocation de session est une action administrative de confinement, pas le mécanisme d'une déconnexion unique initiée par l'utilisateur.\nC est correct : chaque application doit exposer un point de terminaison de déconnexion qu'Entra ID appelle lors du sign-out ; sans lui, le fournisseur d'identité termine sa propre session tandis que l'application conserve la sienne.\nD est faux : la fréquence de connexion force une réauthentification plus tard, elle ne termine pas les sessions applicatives existantes."}
},
{
id:"d3-040", domain:3, topic:"Service principal sign-in logs",
q:{en:"You must find out which application is still using a credential you plan to delete, and when it last authenticated. Where do you look?",
   fr:"Tu dois découvrir quelle application utilise encore un identifiant que tu prévois de supprimer, et quand elle s'est authentifiée pour la dernière fois. Où regardes-tu ?"},
options:[
 {en:"The interactive user sign-ins tab", fr:"L'onglet des connexions interactives d'utilisateurs"},
 {en:"The provisioning logs", fr:"Les journaux de provisioning"},
 {en:"The Entra Connect Health portal", fr:"Le portail Entra Connect Health"},
 {en:"The Service principal sign-ins tab of the sign-in logs, filtered by application ID", fr:"L'onglet Connexions de service principal des journaux de connexion, filtré par ID d'application"}],
correct:[3],
explanation:{en:"A is wrong: app-only authentication involves no user, so it never appears there.\nB is wrong: provisioning logs record SCIM object changes.\nC is wrong: Connect Health monitors the hybrid sync and AD FS infrastructure.\nD is correct: sign-in logs are split into interactive user, non-interactive user, service principal and managed identity sign-ins. Service principal sign-ins show app-only authentications, including which credential and resource were used.",
fr:"A est faux : une authentification app-only n'implique aucun utilisateur, elle n'y apparaît donc jamais.\nB est faux : les journaux de provisioning enregistrent les changements d'objets SCIM.\nC est faux : Connect Health surveille l'infrastructure de sync hybride et AD FS.\nD est correct : les journaux de connexion sont scindés en connexions utilisateur interactives, non interactives, de service principal et de managed identity. Les connexions de service principal montrent les authentifications app-only, y compris l'identifiant et la ressource utilisés."}
},
{
id:"d3-041", domain:3, topic:"CA App Control session policy",
q:{en:"Users on unmanaged devices may read documents in a SaaS app but must not download them. Which combination implements this?",
   fr:"Les utilisateurs sur appareils non gérés peuvent lire des documents dans une app SaaS mais ne doivent pas les télécharger. Quelle combinaison implémente cela ?"},
options:[
 {en:"A Conditional Access policy with the session control \"Use Conditional Access App Control\", plus a Defender for Cloud Apps session policy that blocks downloads", fr:"Une stratégie d'accès conditionnel avec le contrôle de session « Utiliser le contrôle d'application par accès conditionnel », plus une session policy Defender for Cloud Apps qui bloque les téléchargements"},
 {en:"An Intune app protection policy on the SaaS app", fr:"Une stratégie de protection d'application Intune sur l'app SaaS"},
 {en:"A Defender for Cloud Apps access policy in monitor mode", fr:"Une access policy Defender for Cloud Apps en mode surveillance"},
 {en:"A Conditional Access policy that blocks access from unmanaged devices", fr:"Une stratégie d'accès conditionnel qui bloque l'accès depuis les appareils non gérés"}],
correct:[0],
explanation:{en:"A is correct: Conditional Access routes the session to the Defender for Cloud Apps reverse proxy, and a session policy then applies in-session controls such as block download, block upload, or protect on download with a sensitivity label.\nB is wrong: Intune app protection covers managed mobile apps, not a browser session to a SaaS site.\nC is wrong: monitor mode only reports, and access policies allow or block a session rather than controlling actions inside it.\nD is wrong: blocking removes read access, which the requirement wants to keep.",
fr:"A est correct : l'accès conditionnel route la session vers le reverse proxy Defender for Cloud Apps, et une session policy applique ensuite des contrôles en session comme bloquer le téléchargement, bloquer l'envoi, ou protéger au téléchargement avec une étiquette de confidentialité.\nB est faux : la protection d'application Intune couvre les apps mobiles gérées, pas une session navigateur vers un site SaaS.\nC est faux : le mode surveillance ne fait que rapporter, et les access policies autorisent ou bloquent une session au lieu de contrôler les actions à l'intérieur.\nD est faux : bloquer supprime l'accès en lecture, que le besoin veut conserver."}
},
{
id:"d3-042", domain:3, topic:"Verified publisher",
q:{en:"What does a verified publisher badge on a multi-tenant application tell an administrator, and how can it be used as a control?",
   fr:"Qu'indique le badge d'éditeur vérifié sur une application multi-tenant à un administrateur, et comment l'utiliser comme contrôle ?"},
options:[
 {en:"It automatically grants the app admin consent", fr:"Il accorde automatiquement le consentement admin à l'app"},
 {en:"It proves the publisher's identity was verified by Microsoft, and user consent settings can be restricted to apps from verified publishers", fr:"Il prouve que l'identité de l'éditeur a été vérifiée par Microsoft, et les réglages de consentement utilisateur peuvent être restreints aux apps d'éditeurs vérifiés"},
 {en:"It guarantees the application has no security vulnerabilities", fr:"Il garantit que l'application n'a aucune vulnérabilité de sécurité"},
 {en:"It means Microsoft operates the application", fr:"Il signifie que Microsoft exploite l'application"}],
correct:[1],
explanation:{en:"A is wrong: consent still has to be granted; verification only makes it eligible under a stricter consent policy.\nB is correct: verified publisher confirms the developer's identity through a verified partner account, which is an authenticity signal — and Entra ID lets you allow user consent only for such apps.\nC is wrong: identity verification says nothing about code quality or vulnerabilities.\nD is wrong: the publisher remains a third party.",
fr:"A est faux : le consentement doit toujours être accordé ; la vérification rend seulement l'app éligible sous une stratégie de consentement plus stricte.\nB est correct : l'éditeur vérifié confirme l'identité du développeur via un compte partenaire vérifié, ce qui est un signal d'authenticité — et Entra ID permet de n'autoriser le consentement utilisateur qu'à ces apps.\nC est faux : vérifier une identité ne dit rien de la qualité du code ni des vulnérabilités.\nD est faux : l'éditeur reste un tiers."}
},
{
id:"d3-043", domain:3, topic:"App ownership",
q:{en:"A developer must be able to add redirect URIs and rotate credentials for one specific application, but must not manage any other application. What do you do?",
   fr:"Un développeur doit pouvoir ajouter des redirect URIs et renouveler les identifiants d'une application précise, sans pouvoir gérer aucune autre application. Que fais-tu ?"},
options:[
 {en:"Assign the Cloud Application Administrator role", fr:"Assigner le rôle Cloud Application Administrator"},
 {en:"Assign the Application Administrator role", fr:"Assigner le rôle Application Administrator"},
 {en:"Add the developer as an owner of that application registration", fr:"Ajouter le développeur comme propriétaire de cet app registration"},
 {en:"Assign the Application Developer role", fr:"Assigner le rôle Application Developer"}],
correct:[2],
explanation:{en:"A is wrong: Cloud Application Administrator manages ALL applications (except App Proxy).\nB is wrong: Application Administrator also manages all applications, including App Proxy.\nC is correct: object ownership is the per-application delegation model — an owner manages that object and nothing else, which is least privilege here.\nD is wrong: Application Developer lets someone register NEW applications; it does not grant management of an existing one they do not own.",
fr:"A est faux : Cloud Application Administrator gère TOUTES les applications (sauf App Proxy).\nB est faux : Application Administrator gère aussi toutes les applications, y compris App Proxy.\nC est correct : la propriété d'objet est le modèle de délégation par application — un propriétaire gère cet objet et rien d'autre, c'est le moindre privilège ici.\nD est faux : Application Developer permet d'enregistrer de NOUVELLES applications ; il n'accorde pas la gestion d'une application existante dont on n'est pas propriétaire."}
},
{
id:"d3-044", domain:3, topic:"Sign-in audience",
q:{en:"Your ISV must let customers in other Entra tenants sign into its SaaS product, but personal Microsoft accounts must be refused. What do you set?",
   fr:"Ton éditeur doit permettre à des clients d'autres tenants Entra de se connecter à son produit SaaS, mais les comptes Microsoft personnels doivent être refusés. Que configures-tu ?"},
options:[
 {en:"\"Accounts in any organizational directory and personal Microsoft accounts\"", fr:"« Comptes dans n'importe quel annuaire organisationnel et comptes Microsoft personnels »"},
 {en:"A cross-tenant access setting for each customer tenant", fr:"Un cross-tenant access setting pour chaque tenant client"},
 {en:"\"Accounts in this organizational directory only\" (AzureADMyOrg)", fr:"« Comptes de cet annuaire organisationnel uniquement » (AzureADMyOrg)"},
 {en:"The supported account types (signInAudience) to \"Accounts in any organizational directory\" (AzureADMultipleOrgs)", fr:"Les types de comptes supportés (signInAudience) sur « Comptes dans n'importe quel annuaire organisationnel » (AzureADMultipleOrgs)"}],
correct:[3],
explanation:{en:"A is wrong: that explicitly allows the personal accounts you must refuse.\nB is wrong: cross-tenant access settings govern B2B collaboration and direct connect between tenants, not who may sign into your multi-tenant app, and per-customer configuration would not scale.\nC is wrong: single-tenant blocks all external customers.\nD is correct: AzureADMultipleOrgs makes the app multi-tenant for work/school accounts only, so a consenting admin in any Entra tenant can onboard while MSAs are excluded.",
fr:"A est faux : cela autorise explicitement les comptes personnels que tu dois refuser.\nB est faux : les cross-tenant access settings gouvernent la collaboration B2B et le direct connect entre tenants, pas qui peut se connecter à ton app multi-tenant, et une configuration par client ne passerait pas à l'échelle.\nC est faux : le mono-tenant bloque tous les clients externes.\nD est correct : AzureADMultipleOrgs rend l'app multi-tenant pour les comptes professionnels ou scolaires uniquement, donc un admin consentant de n'importe quel tenant Entra peut l'adopter tandis que les comptes Microsoft sont exclus."}
},
{
id:"d3-045", domain:3, topic:"Cloud Discovery",
q:{en:"You must produce a monthly report of unsanctioned cloud apps used by employees, based on real network traffic, without installing anything on the endpoints. What do you configure in Defender for Cloud Apps?",
   fr:"Tu dois produire un rapport mensuel des applications cloud non approuvées utilisées par les employés, basé sur le trafic réseau réel, sans rien installer sur les postes. Que configures-tu dans Defender for Cloud Apps ?"},
options:[
 {en:"Cloud Discovery with an automatic log upload from your firewalls or proxies via a log collector", fr:"Cloud Discovery avec un envoi automatique des journaux de tes pare-feux ou proxys via un log collector"},
 {en:"Entra ID sign-in logs filtered on unknown applications", fr:"Les journaux de connexion Entra ID filtrés sur les applications inconnues"},
 {en:"An app connector for each discovered application", fr:"Un app connector pour chaque application découverte"},
 {en:"A session policy in monitor mode", fr:"Une session policy en mode surveillance"}],
correct:[0],
explanation:{en:"A is correct: Cloud Discovery parses firewall/proxy logs — uploaded manually or continuously through a log collector — and produces shadow IT reports with risk scores, without any endpoint agent. (Defender for Endpoint integration is the alternative when you do have agents.)\nB is wrong: Entra sign-in logs only show apps that authenticate against your tenant, missing most shadow IT.\nC is wrong: app connectors require API credentials for apps you already sanction and know about.\nD is wrong: session policies act on traffic routed through the proxy, which needs Conditional Access App Control and covers only targeted apps.",
fr:"A est correct : Cloud Discovery analyse les journaux de pare-feu/proxy — téléversés manuellement ou en continu via un log collector — et produit des rapports de shadow IT avec scores de risque, sans agent sur les postes. (L'intégration Defender for Endpoint est l'alternative quand on a des agents.)\nB est faux : les journaux de connexion Entra ne montrent que les apps qui s'authentifient contre ton tenant, et manquent l'essentiel du shadow IT.\nC est faux : les app connectors nécessitent des identifiants d'API pour des apps déjà approuvées et connues.\nD est faux : les session policies agissent sur le trafic routé par le proxy, ce qui exige le Conditional Access App Control et ne couvre que les apps ciblées."}
},
{
id:"d3-046", domain:3, topic:"How a managed identity gets a token",
q:{en:"A developer asks how code on an Azure VM obtains a token with a managed identity, given there is no secret anywhere. What do you explain?",
   fr:"Un développeur demande comment du code sur une VM Azure obtient un jeton avec une managed identity, puisqu'il n'y a aucun secret nulle part. Que lui expliques-tu ?"},
options:[
 {en:"The certificate is stored in the VM's certificate store and must be rotated yearly", fr:"Le certificat est stocké dans le magasin de certificats de la VM et doit être renouvelé chaque année"},
 {en:"The code calls the local Instance Metadata Service endpoint, which the Azure platform answers with a token for the requested resource — the platform proves the VM's identity, so no credential is stored", fr:"Le code appelle le point de terminaison local Instance Metadata Service, auquel la plateforme Azure répond par un jeton pour la ressource demandée — la plateforme prouve l'identité de la VM, aucun identifiant n'est stocké"},
 {en:"The developer must embed the client secret in an environment variable", fr:"Le développeur doit intégrer le client secret dans une variable d'environnement"},
 {en:"Managed identities use the signed-in user's token", fr:"Les managed identities utilisent le jeton de l'utilisateur connecté"}],
correct:[1],
explanation:{en:"A is wrong: the platform manages any underlying credential and it is not something you rotate.\nB is correct: the workload requests a token from a non-routable local endpoint; Azure attests the resource's identity and Entra ID issues the token, which is why there is no credential to leak or rotate. Client libraries wrap this behind a credential class.\nC is wrong: embedding a secret is exactly what managed identities remove.\nD is wrong: a managed identity authenticates as itself; no user is involved.",
fr:"A est faux : la plateforme gère l'identifiant sous-jacent et ce n'est pas à toi de le renouveler.\nB est correct : la charge de travail demande un jeton à un point de terminaison local non routable ; Azure atteste l'identité de la ressource et Entra ID émet le jeton, raison pour laquelle il n'y a aucun identifiant à fuiter ni à renouveler. Les bibliothèques clientes encapsulent cela dans une classe de credential.\nC est faux : intégrer un secret est exactement ce que les managed identities suppriment.\nD est faux : une managed identity s'authentifie pour elle-même, aucun utilisateur n'intervient."}
},
{
id:"d3-047", domain:3, topic:"Managed identity and deployment slots",
q:{en:"An App Service uses a system-assigned managed identity. After swapping the staging slot into production, the application loses access to Key Vault. What is the likely cause?",
   fr:"Une App Service utilise une system-assigned managed identity. Après avoir permuté le slot de préproduction vers la production, l'application perd l'accès au Key Vault. Quelle est la cause probable ?"},
options:[
 {en:"Managed identities do not work with App Service", fr:"Les managed identities ne fonctionnent pas avec App Service"},
 {en:"The Key Vault firewall blocks App Service by default", fr:"Le pare-feu du Key Vault bloque App Service par défaut"},
 {en:"Each deployment slot has its own system-assigned identity, so the slot now serving production has a different principal that was never granted access", fr:"Chaque slot de déploiement a sa propre system-assigned identity, donc le slot qui sert désormais la production a un principal différent, jamais autorisé"},
 {en:"Swapping deletes the Key Vault access policy", fr:"La permutation supprime la stratégie d'accès du Key Vault"}],
correct:[2],
explanation:{en:"A is wrong: App Service fully supports managed identities.\nB is wrong: a firewall change would have broken access before the swap too.\nC is correct: system-assigned identities are per-slot and are not swapped with the code, so permissions granted to the production slot's principal do not follow the swap. Granting both slots, or using a shared user-assigned identity, avoids the surprise.\nD is wrong: swapping does not modify the vault's configuration.",
fr:"A est faux : App Service supporte pleinement les managed identities.\nB est faux : un changement de pare-feu aurait aussi cassé l'accès avant la permutation.\nC est correct : les identités system-assigned sont propres à chaque slot et ne sont pas permutées avec le code, donc les permissions accordées au principal du slot de production ne suivent pas la permutation. Autoriser les deux slots, ou utiliser une identité user-assigned partagée, évite la surprise.\nD est faux : la permutation ne modifie pas la configuration du coffre."}
},
{
id:"d3-048", domain:3, topic:"Granting Graph permissions to a managed identity",
q:{en:"A function app's managed identity must read all users from Microsoft Graph. How do you grant this?",
   fr:"La managed identity d'une function app doit lire tous les utilisateurs depuis Microsoft Graph. Comment l'accorder ?"},
options:[
 {en:"Nothing — managed identities inherit Graph read access", fr:"Rien — les managed identities héritent d'un accès en lecture à Graph"},
 {en:"Add the managed identity to the Global Reader directory role", fr:"Ajouter la managed identity au rôle d'annuaire Global Reader"},
 {en:"Grant delegated User.Read permission and consent as a user", fr:"Accorder la permission déléguée User.Read et consentir en tant qu'utilisateur"},
 {en:"Assign the Microsoft Graph application permission (app role) User.Read.All to the managed identity's service principal, which requires an administrator", fr:"Assigner la permission applicative (app role) User.Read.All de Microsoft Graph au service principal de la managed identity, ce qui nécessite un administrateur"}],
correct:[3],
explanation:{en:"A is wrong: managed identities start with zero API permissions.\nB is wrong: a directory role would also work for some scenarios but grants far more than reading users and is not the standard model for API permissions.\nC is wrong: delegated permissions need a signed-in user, which a background function does not have.\nD is correct: a managed identity has a service principal but no permissions by default. You assign the specific Graph app role to it (commonly via PowerShell or Graph), which is an admin operation and should be the narrowest role that works.",
fr:"A est faux : les managed identities démarrent sans aucune permission d'API.\nB est faux : un rôle d'annuaire fonctionnerait dans certains scénarios mais accorde bien plus que la lecture des utilisateurs et n'est pas le modèle standard pour des permissions d'API.\nC est faux : les permissions déléguées exigent un utilisateur connecté, ce qu'une function en arrière-plan n'a pas.\nD est correct : une managed identity possède un service principal mais aucune permission par défaut. On lui assigne l'app role Graph précis (souvent via PowerShell ou Graph), opération d'administrateur, en choisissant le rôle le plus étroit qui fonctionne."}
},
{
id:"d3-049", domain:3, topic:"Orphaned identities",
q:{en:"After deleting several Azure VMs, role assignments in the subscription show \"Identity not found\". What happened and what should you do?",
   fr:"Après la suppression de plusieurs VM Azure, des attributions de rôles de l'abonnement affichent « Identité introuvable ». Que s'est-il passé et que faire ?"},
options:[
 {en:"The VMs' system-assigned identities were deleted with the resources, leaving orphaned role assignments — clean them up as part of decommissioning", fr:"Les identités system-assigned des VM ont été supprimées avec les ressources, laissant des attributions de rôles orphelines — les nettoyer dans le cadre de la décommission"},
 {en:"The identities still exist and will be restored automatically", fr:"Les identités existent encore et seront restaurées automatiquement"},
 {en:"Azure RBAC is corrupted and must be reset", fr:"Azure RBAC est corrompu et doit être réinitialisé"},
 {en:"The role assignments still grant access to anyone", fr:"Ces attributions de rôles accordent encore un accès à n'importe qui"}],
correct:[0],
explanation:{en:"A is correct: a system-assigned identity shares its resource's lifecycle, so deleting the VM removes the principal and leaves a dangling assignment referencing a missing object ID. It grants nothing, but it is audit noise and should be removed.\nB is wrong: deleted system-assigned identities are not restored.\nC is wrong: nothing is corrupted; this is expected behaviour.\nD is wrong: an assignment to a non-existent principal grants no access — but leaving it is still poor hygiene.",
fr:"A est correct : une identité system-assigned partage le cycle de vie de sa ressource, donc supprimer la VM supprime le principal et laisse une attribution pendante référençant un ID d'objet disparu. Elle n'accorde rien, mais c'est du bruit d'audit à supprimer.\nB est faux : les identités system-assigned supprimées ne sont pas restaurées.\nC est faux : rien n'est corrompu, c'est le comportement attendu.\nD est faux : une attribution vers un principal inexistant n'accorde aucun accès — mais la laisser reste une mauvaise hygiène."}
},
{
id:"d3-050", domain:3, topic:"Federated credential subject",
q:{en:"Your GitHub Actions workflow fails with an error saying no matching federated identity record was found for the presented assertion. What is the most likely cause?",
   fr:"Ton workflow GitHub Actions échoue avec une erreur indiquant qu'aucun enregistrement d'identité fédérée ne correspond à l'assertion présentée. Quelle est la cause la plus probable ?"},
options:[
 {en:"GitHub is not a supported issuer", fr:"GitHub n'est pas un émetteur supporté"},
 {en:"The subject identifier configured on the federated credential does not exactly match the token's subject — for example the workflow runs on a different branch, tag or environment than the one configured", fr:"L'identifiant de subject configuré sur le federated credential ne correspond pas exactement au subject du jeton — par exemple le workflow s'exécute sur une branche, un tag ou un environnement différent de celui configuré"},
 {en:"The workflow needs a client certificate", fr:"Le workflow a besoin d'un certificat client"},
 {en:"The application secret has expired", fr:"Le secret de l'application a expiré"}],
correct:[1],
explanation:{en:"A is wrong: GitHub's OIDC issuer is a supported and documented scenario.\nB is correct: the federated credential matches on issuer, subject and audience, and the subject is an exact string (for instance repo:org/name:ref:refs/heads/main). Running on a pull request or another branch produces a different subject and no match.\nC is wrong: no certificate is involved in the OIDC exchange.\nD is wrong: federation exists precisely so there is no secret.",
fr:"A est faux : l'émetteur OIDC de GitHub est un scénario supporté et documenté.\nB est correct : le federated credential fait correspondre l'émetteur, le subject et l'audience, et le subject est une chaîne exacte (par exemple repo:org/nom:ref:refs/heads/main). Une exécution sur une pull request ou une autre branche produit un subject différent, donc aucune correspondance.\nC est faux : aucun certificat n'intervient dans l'échange OIDC.\nD est faux : la fédération existe précisément pour qu'il n'y ait pas de secret."}
},
{
id:"d3-051", domain:3, topic:"Redirect URI platform types",
q:{en:"A JavaScript single-page application authenticates users in the browser. Which app registration platform configuration is correct?",
   fr:"Une application monopage JavaScript authentifie les utilisateurs dans le navigateur. Quelle configuration de plateforme de l'app registration est correcte ?"},
options:[
 {en:"Enable the implicit grant for access tokens", fr:"Activer le flux implicite pour les jetons d'accès"},
 {en:"Register it under Web and add a client secret", fr:"L'enregistrer sous Web et ajouter un client secret"},
 {en:"Register the redirect URI under the Single-page application platform, which uses authorization code flow with PKCE and enables the required CORS behaviour", fr:"Enregistrer l'URI de redirection sous la plateforme Application monopage, qui utilise le flux authorization code avec PKCE et active le comportement CORS requis"},
 {en:"Register it under Mobile and desktop applications", fr:"L'enregistrer sous Applications mobiles et de bureau"}],
correct:[2],
explanation:{en:"A is wrong: the implicit flow is legacy and discouraged; PKCE replaced it.\nB is wrong: browser code cannot keep a secret, so a Web/confidential registration is wrong and dangerous.\nC is correct: the SPA platform type tells Entra ID the client is a public browser client using auth code with PKCE, and the token endpoint then accepts the cross-origin request.\nD is wrong: that platform is for native apps with custom URI schemes.",
fr:"A est faux : le flux implicite est historique et déconseillé, PKCE l'a remplacé.\nB est faux : du code navigateur ne peut pas garder un secret, une inscription Web/confidentielle est donc erronée et dangereuse.\nC est correct : le type de plateforme SPA indique à Entra ID que le client est un client navigateur public utilisant auth code avec PKCE, et le point de terminaison de jeton accepte alors la requête cross-origin.\nD est faux : cette plateforme concerne les applications natives avec schémas d'URI personnalisés."}
},
{
id:"d3-052", domain:3, topic:"Public client flows",
q:{en:"During a security review you find several app registrations with \"Allow public client flows\" set to Yes. Why does this matter?",
   fr:"Lors d'une revue de sécurité tu trouves plusieurs app registrations avec « Autoriser les flux de client public » sur Oui. Pourquoi est-ce important ?"},
options:[
 {en:"It makes the application visible to all users in My Apps", fr:"Cela rend l'application visible de tous les utilisateurs dans Mes applications"},
 {en:"It grants the application admin consent automatically", fr:"Cela accorde automatiquement le consentement admin à l'application"},
 {en:"It disables multifactor authentication for the app", fr:"Cela désactive l'authentification multifacteur pour l'application"},
 {en:"It enables flows such as resource owner password credentials and device code, which handle raw passwords or are easily phished — leave it No unless a specific scenario requires it", fr:"Cela active des flux comme resource owner password credentials et device code, qui manipulent des mots de passe en clair ou sont facilement hameçonnables — le laisser sur Non sauf besoin précis"}],
correct:[3],
explanation:{en:"A is wrong: visibility is a separate enterprise application property.\nB is wrong: consent is unrelated to this setting.\nC is wrong: it does not disable MFA, although ROPC itself cannot complete an MFA challenge, which is part of why it is discouraged.\nD is correct: the toggle allows flows that do not use a client secret, notably ROPC — which sends the user's password to the app and cannot do MFA or Conditional Access properly — and device code flow, a known phishing vector. Default it to No.",
fr:"A est faux : la visibilité est une propriété distincte de l'application d'entreprise.\nB est faux : le consentement n'a aucun lien avec ce réglage.\nC est faux : il ne désactive pas le MFA, même si ROPC lui-même ne peut pas satisfaire un challenge MFA, ce qui explique en partie pourquoi il est déconseillé.\nD est correct : cet interrupteur autorise des flux sans client secret, notamment ROPC — qui transmet le mot de passe de l'utilisateur à l'application et ne gère correctement ni le MFA ni l'accès conditionnel — et le device code flow, vecteur de phishing connu. Le laisser sur Non par défaut."}
},
{
id:"d3-053", domain:3, topic:"Exposing an API",
q:{en:"Your team builds a web API that other in-house applications must call on behalf of signed-in users. What must you configure on the API's app registration?",
   fr:"Ton équipe développe une API web que d'autres applications internes doivent appeler au nom des utilisateurs connectés. Que dois-tu configurer sur l'app registration de l'API ?"},
options:[
 {en:"An Application ID URI and one or more exposed scopes, which client applications then request as delegated permissions", fr:"Un Application ID URI et un ou plusieurs scopes exposés, que les applications clientes demandent ensuite comme permissions déléguées"},
 {en:"A SAML signing certificate", fr:"Un certificat de signature SAML"},
 {en:"A SCIM endpoint", fr:"Un point de terminaison SCIM"},
 {en:"A client secret for each calling application", fr:"Un client secret pour chaque application appelante"}],
correct:[0],
explanation:{en:"A is correct: Expose an API defines the resource's identifier and the scopes it accepts; clients add those scopes as delegated permissions and receive tokens whose audience is your API.\nB is wrong: SAML is for browser SSO to an application, not for a token-based API.\nC is wrong: SCIM is for user provisioning.\nD is wrong: the clients own their own credentials; the API does not issue secrets.",
fr:"A est correct : Exposer une API définit l'identifiant de la ressource et les scopes qu'elle accepte ; les clients ajoutent ces scopes comme permissions déléguées et reçoivent des jetons dont l'audience est ton API.\nB est faux : SAML sert au SSO navigateur vers une application, pas à une API à base de jetons.\nC est faux : SCIM sert au provisioning d'utilisateurs.\nD est faux : les clients possèdent leurs propres identifiants, l'API n'émet pas de secrets."}
},
{
id:"d3-054", domain:3, topic:"scp vs roles claim",
q:{en:"Your API receives a token containing a \"roles\" claim but no \"scp\" claim. What does this tell you?",
   fr:"Ton API reçoit un jeton contenant un claim « roles » mais aucun claim « scp ». Que cela t'indique-t-il ?"},
options:[
 {en:"The token was issued by a different tenant", fr:"Le jeton a été émis par un autre tenant"},
 {en:"The call is app-only — the client authenticated as itself using application permissions or app roles, so there is no signed-in user context", fr:"L'appel est app-only — le client s'est authentifié pour lui-même via des permissions applicatives ou app roles, il n'y a donc aucun contexte d'utilisateur connecté"},
 {en:"The user has no permissions at all", fr:"L'utilisateur n'a aucune permission"},
 {en:"The token is invalid and must be rejected as malformed", fr:"Le jeton est invalide et doit être rejeté comme malformé"}],
correct:[1],
explanation:{en:"A is wrong: the issuing tenant is in the iss and tid claims, not inferred from this.\nB is correct: scp carries delegated scopes granted on behalf of a user, while roles carries application permissions (or a user's assigned app roles). A token with roles and no scp is the signature of a daemon or service calling with its own identity, and your authorization logic must treat it accordingly.\nC is wrong: absence of scp does not mean absence of rights — the roles claim IS the grant.\nD is wrong: the token is well-formed; it is a different call pattern.",
fr:"A est faux : le tenant émetteur figure dans les claims iss et tid, il ne se déduit pas de cela.\nB est correct : scp porte les scopes délégués accordés au nom d'un utilisateur, tandis que roles porte les permissions applicatives (ou les app roles assignés à un utilisateur). Un jeton avec roles et sans scp est la signature d'un démon ou service appelant avec sa propre identité, et ta logique d'autorisation doit le traiter en conséquence.\nC est faux : l'absence de scp ne signifie pas l'absence de droits — le claim roles EST l'octroi.\nD est faux : le jeton est bien formé, c'est un autre schéma d'appel."}
},
{
id:"d3-055", domain:3, topic:"Incremental consent",
q:{en:"An application asks for minimal permissions at sign-in and requests additional ones only when the user opens a specific feature. What is this pattern called and why is it recommended?",
   fr:"Une application demande des permissions minimales à la connexion et n'en demande d'autres que lorsque l'utilisateur ouvre une fonctionnalité précise. Comment s'appelle ce schéma et pourquoi est-il recommandé ?"},
options:[
 {en:"Admin consent workflow", fr:"Le workflow de consentement administrateur"},
 {en:"Preauthorization", fr:"La préautorisation"},
 {en:"Incremental (dynamic) consent — it follows least privilege and reduces the chance of users or admins refusing a large upfront permission list", fr:"Le consentement incrémental (dynamique) — il respecte le moindre privilège et réduit le risque qu'utilisateurs ou admins refusent une longue liste de permissions d'emblée"},
 {en:"Just-in-time provisioning", fr:"Le provisioning juste-à-temps"}],
correct:[2],
explanation:{en:"A is wrong: that is the process for routing user requests to reviewers.\nB is wrong: preauthorization lets an API trust a known client without a consent prompt.\nC is correct: incremental consent requests scopes at the moment they are needed, which is both a better user experience and a least-privilege practice — the app never holds permissions for features nobody uses.\nD is wrong: just-in-time provisioning creates accounts on first sign-in.",
fr:"A est faux : c'est le processus d'acheminement des demandes utilisateur vers des relecteurs.\nB est faux : la préautorisation permet à une API de faire confiance à un client connu sans invite de consentement.\nC est correct : le consentement incrémental demande les scopes au moment où ils sont nécessaires, ce qui est à la fois une meilleure expérience et une pratique de moindre privilège — l'app ne détient jamais de permissions pour des fonctionnalités inutilisées.\nD est faux : le provisioning juste-à-temps crée des comptes à la première connexion."}
},
{
id:"d3-056", domain:3, topic:"Tenant-wide admin consent",
q:{en:"You grant admin consent for an application on behalf of your organization. What is the effect?",
   fr:"Tu accordes le consentement administrateur à une application au nom de ton organisation. Quel est l'effet ?"},
options:[
 {en:"Users are still prompted the first time they sign in", fr:"Les utilisateurs sont quand même invités à la première connexion"},
 {en:"The application is added to every user's My Apps automatically and cannot be hidden", fr:"L'application est ajoutée automatiquement à Mes applications de chaque utilisateur et ne peut pas être masquée"},
 {en:"Only administrators can use the application", fr:"Seuls les administrateurs peuvent utiliser l'application"},
 {en:"Every user in the tenant can use the granted permissions without being prompted individually — so it should follow a review of exactly which permissions are requested", fr:"Chaque utilisateur du tenant peut utiliser les permissions accordées sans invite individuelle — cela doit donc suivre une revue des permissions exactement demandées"}],
correct:[3],
explanation:{en:"A is wrong: suppressing the individual prompt is precisely the purpose.\nB is wrong: assignment and visibility are separate settings you still control.\nC is wrong: consent is not restricted to administrators.\nD is correct: tenant-wide consent creates the grant for all users, which is convenient and also a significant decision — a malicious or over-permissioned app then reaches everyone's data, so review the requested permissions and the publisher first.",
fr:"A est faux : supprimer l'invite individuelle est justement le but.\nB est faux : l'assignation et la visibilité restent des réglages distincts que tu contrôles.\nC est faux : le consentement n'est pas réservé aux administrateurs.\nD est correct : le consentement à l'échelle du tenant crée l'octroi pour tous les utilisateurs, ce qui est pratique mais aussi une décision lourde — une app malveillante ou surprivilégiée atteint alors les données de tout le monde, il faut donc examiner d'abord les permissions demandées et l'éditeur."}
},
{
id:"d3-057", domain:3, topic:"Revoking application access",
q:{en:"A third-party application must lose all access to your tenant's data immediately and permanently. Which set of actions is correct?",
   fr:"Une application tierce doit perdre immédiatement et définitivement tout accès aux données de ton tenant. Quel ensemble d'actions est correct ?"},
options:[
 {en:"Remove its delegated permission grants and app role assignments, revoke refresh tokens for affected users, and disable or delete its service principal", fr:"Supprimer ses octrois de permissions déléguées et ses app role assignments, révoquer les refresh tokens des utilisateurs concernés, et désactiver ou supprimer son service principal"},
 {en:"Ask the vendor to stop calling the API", fr:"Demander à l'éditeur d'arrêter d'appeler l'API"},
 {en:"Remove the application from the My Apps portal", fr:"Retirer l'application du portail Mes applications"},
 {en:"Change the tenant's user consent settings", fr:"Modifier les réglages de consentement utilisateur du tenant"}],
correct:[0],
explanation:{en:"A is correct: removing the grants stops future token issuance for those permissions, disabling or deleting the service principal stops the app entirely, and revoking refresh tokens cuts sessions that already exist.\nB is wrong: security must be enforced technically, not by request.\nC is wrong: visibility is cosmetic; the app keeps working.\nD is wrong: consent settings affect future consents, not an existing grant.",
fr:"A est correct : supprimer les octrois stoppe l'émission future de jetons pour ces permissions, désactiver ou supprimer le service principal arrête complètement l'app, et révoquer les refresh tokens coupe les sessions déjà existantes.\nB est faux : la sécurité doit être appliquée techniquement, pas sur demande.\nC est faux : la visibilité est cosmétique, l'app continue de fonctionner.\nD est faux : les réglages de consentement affectent les consentements futurs, pas un octroi existant."}
},
{
id:"d3-058", domain:3, topic:"Permission classifications",
q:{en:"You allow user consent only for permissions classified as low impact. Which permissions are appropriate to classify that way?",
   fr:"Tu autorises le consentement utilisateur uniquement pour les permissions classées à faible impact. Quelles permissions est-il approprié de classer ainsi ?"},
options:[
 {en:"Mail.Read and Files.ReadWrite.All, because they are commonly requested", fr:"Mail.Read et Files.ReadWrite.All, car elles sont fréquemment demandées"},
 {en:"Permissions that expose only the signed-in user's basic profile and sign-in, such as User.Read, openid, profile, email and offline_access", fr:"Les permissions n'exposant que le profil de base et la connexion de l'utilisateur, comme User.Read, openid, profile, email et offline_access"},
 {en:"Directory.ReadWrite.All, because it is delegated", fr:"Directory.ReadWrite.All, car elle est déléguée"},
 {en:"All delegated permissions, since delegated always means low risk", fr:"Toutes les permissions déléguées, puisque délégué signifie toujours faible risque"}],
correct:[1],
explanation:{en:"A is wrong: access to mail and to all files is exactly the kind of data an attacker wants from a consent phishing campaign.\nB is correct: the default low-impact set covers sign-in and basic profile reading, which cannot expose organisational content — that is why it is safe to let users consent to it.\nC is wrong: directory write access is among the highest-impact permissions there is.\nD is wrong: delegated permissions are bounded by the user's own rights, which for a privileged user can be very broad.",
fr:"A est faux : l'accès aux mails et à tous les fichiers est précisément ce qu'un attaquant vise dans une campagne de consent phishing.\nB est correct : l'ensemble à faible impact par défaut couvre la connexion et la lecture du profil de base, qui ne peuvent pas exposer de contenu de l'organisation — d'où la sécurité de laisser les utilisateurs y consentir.\nC est faux : l'écriture sur l'annuaire compte parmi les permissions les plus lourdes qui soient.\nD est faux : les permissions déléguées sont bornées par les droits propres de l'utilisateur, ce qui pour un utilisateur privilégié peut être très large."}
},
{
id:"d3-059", domain:3, topic:"Hiding applications",
q:{en:"An enterprise application is used only by a backend integration, but it clutters every user's My Apps portal. What do you change?",
   fr:"Une application d'entreprise ne sert qu'à une intégration backend, mais elle encombre le portail Mes applications de tous les utilisateurs. Que modifies-tu ?"},
options:[
 {en:"Set assignment required to Yes, which hides it", fr:"Mettre l'attribution requise sur Oui, ce qui la masque"},
 {en:"Block it with Conditional Access", fr:"La bloquer par accès conditionnel"},
 {en:"Set the application's \"Visible to users?\" property to No in its properties", fr:"Mettre la propriété « Visible par les utilisateurs ? » de l'application sur Non dans ses propriétés"},
 {en:"Delete the enterprise application", fr:"Supprimer l'application d'entreprise"}],
correct:[2],
explanation:{en:"A is wrong: assignment required controls authorization, and while unassigned users would not see the tile, using it for cosmetics confuses two different controls.\nB is wrong: blocking access would break the integration and is not about visibility.\nC is correct: visibility is an independent property — hiding the tile does not change who can authenticate, which is what you want for a backend integration.\nD is wrong: deleting it breaks the integration.",
fr:"A est faux : l'attribution requise contrôle l'autorisation, et même si les utilisateurs non assignés ne verraient pas la tuile, l'utiliser à des fins cosmétiques mélange deux contrôles différents.\nB est faux : bloquer l'accès casserait l'intégration et ne concerne pas la visibilité.\nC est correct : la visibilité est une propriété indépendante — masquer la tuile ne change pas qui peut s'authentifier, ce qui est souhaitable pour une intégration backend.\nD est faux : la supprimer casse l'intégration."}
},
{
id:"d3-060", domain:3, topic:"Self-service application access",
q:{en:"You want employees to be able to request access to a SaaS application from My Apps, with the business owner approving and the user being added to a group automatically. What do you enable?",
   fr:"Tu veux que les salariés puissent demander l'accès à une application SaaS depuis Mes applications, avec approbation du propriétaire métier et ajout automatique de l'utilisateur à un groupe. Qu'actives-tu ?"},
options:[
 {en:"Conditional Access with terms of use", fr:"L'accès conditionnel avec des terms of use"},
 {en:"Admin consent workflow", fr:"Le workflow de consentement administrateur"},
 {en:"A dynamic group on department", fr:"Un groupe dynamique sur le département"},
 {en:"Self-service application access on the enterprise application, with approvers and a group to assign, or an access package for richer governance", fr:"L'accès self-service à l'application sur l'application d'entreprise, avec des approbateurs et un groupe d'assignation, ou un access package pour une gouvernance plus riche"}],
correct:[3],
explanation:{en:"A is wrong: terms of use gate access, they do not provision it.\nB is wrong: that workflow is about consenting to an app's API permissions, not about a user requesting access.\nC is wrong: a dynamic group grants access automatically with no request or approval.\nD is correct: self-service application access provides exactly this request-and-approve flow on the application itself; entitlement management access packages do the same with expiry, reviews and multi-resource bundles when you need more governance.",
fr:"A est faux : les terms of use conditionnent l'accès, ils ne le provisionnent pas.\nB est faux : ce workflow concerne le consentement aux permissions d'API d'une app, pas une demande d'accès par un utilisateur.\nC est faux : un groupe dynamique accorde l'accès automatiquement, sans demande ni approbation.\nD est correct : l'accès self-service à l'application fournit exactement ce flux demande-approbation sur l'application elle-même ; les access packages de l'entitlement management font la même chose avec expiration, revues et lots multi-ressources quand il faut plus de gouvernance."}
},
{
id:"d3-061", domain:3, topic:"Application ownership governance",
q:{en:"An audit finds 60 enterprise applications with no owner and no documentation of their purpose. What is the appropriate governance response?",
   fr:"Un audit trouve 60 applications d'entreprise sans propriétaire et sans documentation de leur usage. Quelle est la réponse de gouvernance appropriée ?"},
options:[
 {en:"Assign named owners to every application, record the purpose in the notes, and run access reviews on their assignments so unused apps surface", fr:"Assigner des propriétaires nommés à chaque application, consigner l'usage dans les notes, et lancer des access reviews sur leurs assignations pour faire remonter les apps inutilisées"},
 {en:"Delete every application with no owner", fr:"Supprimer toute application sans propriétaire"},
 {en:"Assign the Global Administrator as owner of all of them", fr:"Assigner le Global Administrator comme propriétaire de toutes"},
 {en:"Disable them all and wait for complaints", fr:"Toutes les désactiver et attendre les réclamations"}],
correct:[0],
explanation:{en:"A is correct: ownership creates accountability for credentials and permissions, notes preserve context, and reviews of assignments and service principal sign-ins tell you which applications are genuinely used.\nB is wrong: deleting before understanding will break production integrations.\nC is wrong: a single owner for everything is accountability in name only.\nD is wrong: break-then-see is not a change process, though controlled disabling can be a later step for apps proven unused.",
fr:"A est correct : la propriété crée une responsabilité sur les identifiants et permissions, les notes conservent le contexte, et les revues des assignations et des connexions de service principal indiquent quelles applications servent réellement.\nB est faux : supprimer avant de comprendre cassera des intégrations de production.\nC est faux : un propriétaire unique pour tout n'est une responsabilité que sur le papier.\nD est faux : casser pour voir n'est pas un processus de changement, même si une désactivation contrôlée peut être une étape ultérieure pour les apps prouvées inutilisées."}
},
{
id:"d3-062", domain:3, topic:"SAML sign-on URL",
q:{en:"Users can sign into a SAML application from the My Apps portal, but going to the vendor's own login page fails. What is missing?",
   fr:"Les utilisateurs peuvent se connecter à une application SAML depuis le portail Mes applications, mais l'accès depuis la page de connexion du fournisseur échoue. Que manque-t-il ?"},
options:[
 {en:"The users are not assigned to the application", fr:"Les utilisateurs ne sont pas assignés à l'application"},
 {en:"Nothing about IdP-initiated sign-in — the failing path is SP-initiated, so check the application's sign-on URL and that the vendor is configured with your correct SAML endpoints", fr:"Rien du côté de la connexion IdP-initiated — le chemin qui échoue est SP-initiated, il faut donc vérifier l'URL de connexion de l'application et que le fournisseur est configuré avec tes bons points de terminaison SAML"},
 {en:"SAML does not support signing in from the vendor's site", fr:"SAML ne supporte pas la connexion depuis le site du fournisseur"},
 {en:"The signing certificate has expired", fr:"Le certificat de signature a expiré"}],
correct:[1],
explanation:{en:"A is wrong: unassigned users would fail from My Apps too.\nB is correct: My Apps launches an IdP-initiated flow, while starting at the vendor is SP-initiated — the two paths use different configuration, so a working tile with a broken vendor login points at the sign-on URL and the service provider's SAML settings.\nC is wrong: SP-initiated sign-in is the most common SAML pattern.\nD is wrong: an expired certificate would break both paths.",
fr:"A est faux : des utilisateurs non assignés échoueraient aussi depuis Mes applications.\nB est correct : Mes applications lance un flux IdP-initiated, tandis que démarrer chez le fournisseur est SP-initiated — les deux chemins utilisent une configuration différente, donc une tuile qui fonctionne avec une connexion fournisseur cassée oriente vers l'URL de connexion et les réglages SAML du service provider.\nC est faux : la connexion SP-initiated est le schéma SAML le plus courant.\nD est faux : un certificat expiré casserait les deux chemins."}
},
{
id:"d3-063", domain:3, topic:"NameID configuration",
q:{en:"A SAML application identifies its accounts by employee number, not by email. Sign-in fails with \"user not found\" on the vendor side. What do you change?",
   fr:"Une application SAML identifie ses comptes par numéro d'employé, pas par email. La connexion échoue côté fournisseur avec « utilisateur introuvable ». Que modifies-tu ?"},
options:[
 {en:"The application's logo and name", fr:"Le logo et le nom de l'application"},
 {en:"The reply URL", fr:"L'URL de réponse"},
 {en:"The unique user identifier (NameID) claim, so it is sourced from the employeeId attribute in the required format", fr:"Le claim d'identifiant unique de l'utilisateur (NameID), pour qu'il provienne de l'attribut employeeId dans le format requis"},
 {en:"The signing algorithm", fr:"L'algorithme de signature"}],
correct:[2],
explanation:{en:"A is wrong: branding has no effect on matching.\nB is wrong: the reply URL controls where the assertion is posted, not who it identifies.\nC is correct: NameID is the identifier the service provider matches against its own accounts; both its source attribute and its format must match what the vendor expects.\nD is wrong: an algorithm mismatch produces a signature validation error, not user-not-found.",
fr:"A est faux : l'habillage n'a aucun effet sur la correspondance.\nB est faux : l'URL de réponse contrôle où l'assertion est postée, pas qui elle identifie.\nC est correct : le NameID est l'identifiant que le service provider fait correspondre à ses propres comptes ; son attribut source et son format doivent tous deux correspondre à ce qu'attend le fournisseur.\nD est faux : un désaccord d'algorithme produit une erreur de validation de signature, pas un utilisateur introuvable."}
},
{
id:"d3-064", domain:3, topic:"SAML assertion encryption",
q:{en:"A vendor requires that the SAML assertion itself be encrypted, not only transported over TLS. What must you do?",
   fr:"Un fournisseur exige que l'assertion SAML elle-même soit chiffrée, pas seulement transportée en TLS. Que dois-tu faire ?"},
options:[
 {en:"Rotate your SAML signing certificate", fr:"Renouveler ton certificat de signature SAML"},
 {en:"Enable HTTPS on the reply URL, which is the same thing", fr:"Activer HTTPS sur l'URL de réponse, ce qui revient au même"},
 {en:"Switch the application to OIDC", fr:"Basculer l'application en OIDC"},
 {en:"Upload the vendor's public certificate to the application's token encryption settings and enable assertion encryption", fr:"Téléverser le certificat public du fournisseur dans les réglages de chiffrement de jeton de l'application et activer le chiffrement de l'assertion"}],
correct:[3],
explanation:{en:"A is wrong: signing proves origin and integrity, not confidentiality.\nB is wrong: TLS protects the transport only, which is precisely why the vendor asks for more.\nC is wrong: changing protocol is not a response to an encryption requirement.\nD is correct: token encryption uses the service provider's public key so only they can decrypt the assertion, which protects it even after it leaves the TLS channel (for example in browser history or logs).",
fr:"A est faux : la signature prouve l'origine et l'intégrité, pas la confidentialité.\nB est faux : TLS ne protège que le transport, c'est précisément pourquoi le fournisseur demande davantage.\nC est faux : changer de protocole n'est pas une réponse à une exigence de chiffrement.\nD est correct : le chiffrement de jeton utilise la clé publique du service provider pour que lui seul puisse déchiffrer l'assertion, ce qui la protège même après la sortie du canal TLS (par exemple dans l'historique du navigateur ou des journaux)."}
},
{
id:"d3-065", domain:3, topic:"SAML assignment error",
q:{en:"A user opening a SAML app gets AADSTS50105: the signed-in user is not assigned to a role for the application. What is the cause?",
   fr:"Un utilisateur ouvrant une app SAML reçoit AADSTS50105 : l'utilisateur connecté n'est pas assigné à un rôle pour l'application. Quelle est la cause ?"},
options:[
 {en:"The application requires assignment and the user (or a group they belong to) has not been assigned to it", fr:"L'application exige une attribution et l'utilisateur (ou un groupe dont il fait partie) ne lui a pas été assigné"},
 {en:"Conditional Access blocked the sign-in", fr:"L'accès conditionnel a bloqué la connexion"},
 {en:"The user's password is expired", fr:"Le mot de passe de l'utilisateur a expiré"},
 {en:"The SAML certificate expired", fr:"Le certificat SAML a expiré"}],
correct:[0],
explanation:{en:"A is correct: with assignment required, Entra ID refuses to issue a token to users who have no assignment or app role — the fix is to assign the user or their group, choosing the right app role.\nB is wrong: a Conditional Access block returns 53003.\nC is wrong: an expired password interrupts at authentication, before any application authorization.\nD is wrong: certificate problems produce signature errors on the vendor side.",
fr:"A est correct : avec l'attribution requise, Entra ID refuse d'émettre un jeton aux utilisateurs sans attribution ni app role — la correction est d'assigner l'utilisateur ou son groupe, en choisissant le bon app role.\nB est faux : un blocage par accès conditionnel renvoie 53003.\nC est faux : un mot de passe expiré interrompt à l'authentification, avant toute autorisation applicative.\nD est faux : les problèmes de certificat produisent des erreurs de signature côté fournisseur."}
},
{
id:"d3-066", domain:3, topic:"Provisioning attribute expressions",
q:{en:"A SaaS app requires the username to be the part of the email address before the @ sign. How do you produce this during SCIM provisioning?",
   fr:"Une app SaaS exige que le nom d'utilisateur soit la partie de l'adresse email avant le @. Comment le produire pendant le provisioning SCIM ?"},
options:[
 {en:"Use a scoping filter", fr:"Utiliser un scoping filter"},
 {en:"Use an expression mapping, for example ExtractMailPrefix on the userPrincipalName or mail attribute", fr:"Utiliser un mapping par expression, par exemple ExtractMailPrefix sur l'attribut userPrincipalName ou mail"},
 {en:"Create a custom security attribute holding the value", fr:"Créer un attribut de sécurité personnalisé contenant la valeur"},
 {en:"Change every user's UPN to the short form", fr:"Changer l'UPN de chaque utilisateur pour la forme courte"}],
correct:[1],
explanation:{en:"A is wrong: scoping decides WHO is provisioned, not how a value is transformed.\nB is correct: provisioning supports expression mappings with functions such as ExtractMailPrefix, Join, Replace, Split and IIF, so the target value is derived at provisioning time without touching the source directory.\nC is wrong: custom security attributes are for governance filtering and are not provisioning sources.\nD is wrong: rewriting UPNs to satisfy one application is destructive.",
fr:"A est faux : le scoping décide QUI est provisionné, pas comment une valeur est transformée.\nB est correct : le provisioning supporte des mappings par expression avec des fonctions comme ExtractMailPrefix, Join, Replace, Split et IIF, la valeur cible est donc calculée au moment du provisioning sans toucher à l'annuaire source.\nC est faux : les attributs de sécurité personnalisés servent au filtrage de gouvernance et ne sont pas des sources de provisioning.\nD est faux : réécrire les UPN pour satisfaire une application est destructeur."}
},
{
id:"d3-067", domain:3, topic:"Provisioning matching attribute",
q:{en:"Provisioning creates duplicate accounts in the target application instead of linking to the existing ones. What should you check first?",
   fr:"Le provisioning crée des comptes en double dans l'application cible au lieu de se rattacher aux comptes existants. Que dois-tu vérifier en premier ?"},
options:[
 {en:"The provisioning cycle interval", fr:"L'intervalle du cycle de provisioning"},
 {en:"The admin credentials for the target app", fr:"Les identifiants d'administration de l'app cible"},
 {en:"The matching attribute (matching precedence) — it must be an attribute that uniquely and identically identifies the same person on both sides", fr:"L'attribut de correspondance (matching precedence) — il doit s'agir d'un attribut identifiant la même personne de façon unique et identique des deux côtés"},
 {en:"The scoping filter", fr:"Le scoping filter"}],
correct:[2],
explanation:{en:"A is wrong: timing affects when, not whether objects match.\nB is wrong: bad credentials would stop provisioning entirely, not duplicate objects.\nC is correct: the mapping marked with matching precedence is what the service uses to decide whether a target object already exists. If the values differ in case, formatting or source attribute, every user looks new and gets created again.\nD is wrong: scoping filters exclude users; they do not control matching.",
fr:"A est faux : le rythme influe sur le quand, pas sur la correspondance.\nB est faux : de mauvais identifiants arrêteraient tout le provisioning, sans créer de doublons.\nC est correct : le mapping marqué en matching precedence est ce que le service utilise pour décider si un objet cible existe déjà. Si les valeurs diffèrent par la casse, le format ou l'attribut source, chaque utilisateur paraît nouveau et est recréé.\nD est faux : les scoping filters excluent des utilisateurs, ils ne contrôlent pas la correspondance."}
},
{
id:"d3-068", domain:3, topic:"Deprovisioning behaviour",
q:{en:"When a user leaves the scope of provisioning (they are unassigned or no longer match the filter), what does Entra ID do in the target application by default?",
   fr:"Quand un utilisateur sort de la portée du provisioning (désassigné ou ne correspondant plus au filtre), que fait Entra ID par défaut dans l'application cible ?"},
options:[
 {en:"It does nothing, ever", fr:"Il ne fait jamais rien"},
 {en:"It transfers the account to another tenant", fr:"Il transfère le compte vers un autre tenant"},
 {en:"It hard-deletes the account with no configuration option", fr:"Il supprime définitivement le compte sans option de configuration"},
 {en:"It soft-deletes or disables the target account, and the exact behaviour is configurable in the attribute mappings (for example mapping the active attribute)", fr:"Il supprime en douceur ou désactive le compte cible, et le comportement exact est configurable dans les mappings d'attributs (par exemple le mapping de l'attribut active)"}],
correct:[3],
explanation:{en:"A is wrong: doing nothing would leave orphaned access, which is exactly what provisioning is meant to prevent.\nB is wrong: no cross-tenant transfer is involved.\nC is wrong: hard deletion is not the universal behaviour and depends on the connector.\nD is correct: leaving scope triggers deprovisioning, typically by setting the target account inactive; what happens is driven by the mappings and the target application's SCIM implementation, and it is worth testing deliberately before go-live.",
fr:"A est faux : ne rien faire laisserait des accès orphelins, précisément ce que le provisioning évite.\nB est faux : aucun transfert entre tenants n'intervient.\nC est faux : la suppression définitive n'est pas le comportement universel et dépend du connecteur.\nD est correct : sortir de la portée déclenche le déprovisioning, typiquement en rendant le compte cible inactif ; le comportement dépend des mappings et de l'implémentation SCIM de l'application cible, et mérite un test délibéré avant la mise en production."}
},
{
id:"d3-069", domain:3, topic:"Provisioning quarantine",
q:{en:"The provisioning job for an application shows status Quarantine. What does this mean and what do you do?",
   fr:"Le job de provisioning d'une application affiche le statut Quarantine. Que signifie-t-il et que fais-tu ?"},
options:[
 {en:"Repeated failures (often invalid credentials or an unreachable endpoint) put the job in quarantine with reduced retry frequency — fix the root cause, then restart the job", fr:"Des échecs répétés (souvent des identifiants invalides ou un point de terminaison injoignable) placent le job en quarantaine avec une fréquence de réessai réduite — corriger la cause racine, puis redémarrer le job"},
 {en:"The job is paused because too many users are in scope", fr:"Le job est en pause car trop d'utilisateurs sont dans la portée"},
 {en:"The target application has quarantined your tenant for policy violations", fr:"L'application cible a mis ton tenant en quarantaine pour violation de ses règles"},
 {en:"Provisioning completed and is waiting for approval", fr:"Le provisioning est terminé et attend une approbation"}],
correct:[0],
explanation:{en:"A is correct: quarantine is Entra ID's back-off state after persistent errors. The portal shows the reason; once fixed, you restart provisioning so a fresh cycle runs — otherwise retries continue at a much slower cadence.\nB is wrong: scope size does not cause quarantine.\nC is wrong: quarantine is an Entra ID state, not a vendor sanction.\nD is wrong: there is no approval step in provisioning.",
fr:"A est correct : la quarantaine est l'état de recul d'Entra ID après des erreurs persistantes. Le portail affiche la raison ; une fois corrigée, on redémarre le provisioning pour lancer un nouveau cycle — sinon les réessais continuent à un rythme bien plus lent.\nB est faux : la taille de la portée ne provoque pas de quarantaine.\nC est faux : la quarantaine est un état d'Entra ID, pas une sanction du fournisseur.\nD est faux : il n'y a pas d'étape d'approbation dans le provisioning."}
},
{
id:"d3-070", domain:3, topic:"Provisioning cycles",
q:{en:"You enable provisioning for an app with 20,000 users in scope. What should you expect?",
   fr:"Tu actives le provisioning pour une app avec 20 000 utilisateurs dans la portée. À quoi faut-il s'attendre ?"},
options:[
 {en:"All users provisioned within one minute", fr:"Tous les utilisateurs provisionnés en moins d'une minute"},
 {en:"An initial cycle that processes every in-scope user and can take hours, followed by incremental cycles roughly every 40 minutes that handle only changes", fr:"Un cycle initial traitant chaque utilisateur de la portée, pouvant durer des heures, puis des cycles incrémentaux toutes les 40 minutes environ ne traitant que les changements"},
 {en:"Nothing until you manually trigger each user", fr:"Rien tant que tu ne déclenches pas chaque utilisateur manuellement"},
 {en:"A full re-provisioning of all users every 40 minutes", fr:"Un reprovisioning complet de tous les utilisateurs toutes les 40 minutes"}],
correct:[1],
explanation:{en:"A is wrong: large initial cycles take substantial time.\nB is correct: the first cycle is a full sync whose duration scales with directory size and the target's API throughput; afterwards only deltas are processed on a roughly 40-minute cadence. Provision on demand lets you validate individual users meanwhile.\nC is wrong: provisioning is automatic once enabled.\nD is wrong: only the initial cycle is full — restarting provisioning is what forces another one.",
fr:"A est faux : les cycles initiaux volumineux prennent un temps conséquent.\nB est correct : le premier cycle est une synchronisation complète dont la durée dépend de la taille de l'annuaire et du débit d'API de la cible ; ensuite seuls les deltas sont traités, environ toutes les 40 minutes. Le provisioning à la demande permet entre-temps de valider des utilisateurs individuels.\nC est faux : le provisioning est automatique une fois activé.\nD est faux : seul le cycle initial est complet — c'est le redémarrage du provisioning qui en force un autre."}
},
{
id:"d3-071", domain:3, topic:"Group provisioning",
q:{en:"A SaaS application must receive not only users but also the groups they belong to, so its internal permissions stay in sync. What determines whether this works?",
   fr:"Une application SaaS doit recevoir non seulement les utilisateurs mais aussi les groupes auxquels ils appartiennent, pour que ses permissions internes restent synchronisées. Qu'est-ce qui détermine si cela fonctionne ?"},
options:[
 {en:"Whether the users have Entra ID P2", fr:"Si les utilisateurs ont Entra ID P2"},
 {en:"Whether the application uses SAML rather than OIDC", fr:"Si l'application utilise SAML plutôt qu'OIDC"},
 {en:"Whether the application's provisioning connector supports group objects, and whether group mappings are enabled and in scope", fr:"Si le connecteur de provisioning de l'application supporte les objets groupe, et si les mappings de groupes sont activés et dans la portée"},
 {en:"Whether the groups are dynamic", fr:"Si les groupes sont dynamiques"}],
correct:[2],
explanation:{en:"A is wrong: licensing does not enable group provisioning.\nB is wrong: the SSO protocol is independent of provisioning capabilities.\nC is correct: group provisioning depends on the connector and target SCIM implementation supporting groups, plus the group mapping being enabled — some applications accept users only, in which case group-based authorization must come from token claims instead.\nD is wrong: membership type does not determine provisioning support.",
fr:"A est faux : la licence n'active pas le provisioning de groupes.\nB est faux : le protocole de SSO est indépendant des capacités de provisioning.\nC est correct : le provisioning de groupes dépend du support des groupes par le connecteur et l'implémentation SCIM cible, plus l'activation du mapping de groupes — certaines applications n'acceptent que des utilisateurs, auquel cas l'autorisation par groupe doit passer par des claims dans le jeton.\nD est faux : le type d'appartenance ne détermine pas le support du provisioning."}
},
{
id:"d3-072", domain:3, topic:"Custom SCIM application",
q:{en:"Your developers built an in-house app with a SCIM 2.0 endpoint. How do you connect Entra ID provisioning to it?",
   fr:"Tes développeurs ont créé une app interne avec un point de terminaison SCIM 2.0. Comment y connecter le provisioning d'Entra ID ?"},
options:[
 {en:"Configure SAML single sign-on, which also provisions users", fr:"Configurer le SSO SAML, qui provisionne aussi les utilisateurs"},
 {en:"Publish it through Application Proxy first", fr:"La publier d'abord via Application Proxy"},
 {en:"Use Entra Connect to write users into its database", fr:"Utiliser Entra Connect pour écrire les utilisateurs dans sa base de données"},
 {en:"Add the non-gallery application, set the Tenant URL to the SCIM endpoint and provide a secret token, then test the connection and configure mappings", fr:"Ajouter l'application hors galerie, définir la Tenant URL sur le point de terminaison SCIM et fournir un secret token, puis tester la connexion et configurer les mappings"}],
correct:[3],
explanation:{en:"A is wrong: SSO authenticates users; it does not create accounts (except with just-in-time features some apps implement themselves).\nB is wrong: App Proxy publishes internal web apps for user access; the provisioning service needs to reach the SCIM endpoint, which can be handled differently.\nC is wrong: Entra Connect syncs on-premises AD to the cloud, not the cloud to an app.\nD is correct: any SCIM 2.0-compliant endpoint can be used by adding a non-gallery enterprise application and entering the endpoint URL and bearer token; Test Connection validates reachability and authentication before you enable the job.",
fr:"A est faux : le SSO authentifie les utilisateurs, il ne crée pas de comptes (sauf fonctions juste-à-temps implémentées par certaines apps).\nB est faux : App Proxy publie des apps web internes pour l'accès des utilisateurs ; le service de provisioning doit joindre le point de terminaison SCIM, ce qui se traite autrement.\nC est faux : Entra Connect synchronise l'AD on-prem vers le cloud, pas le cloud vers une app.\nD est correct : tout point de terminaison conforme SCIM 2.0 peut être utilisé en ajoutant une application d'entreprise hors galerie et en saisissant l'URL et le jeton bearer ; Tester la connexion valide l'accessibilité et l'authentification avant d'activer le job."}
},
{
id:"d3-073", domain:3, topic:"HR-driven provisioning",
q:{en:"Your organization wants Workday to be the authoritative source that creates users in on-premises AD and Entra ID as people are hired. Which capability do you use?",
   fr:"Ton organisation veut que Workday soit la source de référence créant les utilisateurs dans l'AD on-prem et Entra ID au fil des embauches. Quelle capacité utilises-tu ?"},
options:[
 {en:"Inbound HR-driven provisioning from the cloud HR application into Active Directory and Entra ID", fr:"Le provisioning entrant piloté par les RH depuis l'application RH cloud vers Active Directory et Entra ID"},
 {en:"Outbound SCIM provisioning to Workday", fr:"Le provisioning SCIM sortant vers Workday"},
 {en:"Cross-tenant synchronization", fr:"La cross-tenant synchronization"},
 {en:"A dynamic group based on employeeHireDate", fr:"Un groupe dynamique basé sur employeeHireDate"}],
correct:[0],
explanation:{en:"A is correct: inbound provisioning treats the HR system as the source of truth and creates, updates and disables identities downstream — the foundation of a real joiner/mover/leaver process, often paired with lifecycle workflows.\nB is wrong: outbound would push identities INTO the HR system, the opposite direction.\nC is wrong: cross-tenant sync moves users between Entra tenants.\nD is wrong: a dynamic group classifies users who already exist; it cannot create them.",
fr:"A est correct : le provisioning entrant traite le système RH comme source de vérité et crée, met à jour et désactive les identités en aval — la base d'un vrai processus joiner/mover/leaver, souvent associé aux lifecycle workflows.\nB est faux : le sortant pousserait des identités VERS le système RH, la direction inverse.\nC est faux : la cross-tenant sync déplace des utilisateurs entre tenants Entra.\nD est faux : un groupe dynamique classe des utilisateurs existants, il ne peut pas les créer."}
},
{
id:"d3-074", domain:3, topic:"App Proxy custom domains",
q:{en:"Users must reach a published internal app at https://expenses.contoso.com rather than a msappproxy.net URL. What is required?",
   fr:"Les utilisateurs doivent atteindre une app interne publiée à l'adresse https://expenses.contoso.com plutôt qu'une URL msappproxy.net. Qu'est-ce qui est nécessaire ?"},
options:[
 {en:"Nothing — custom domains are automatic once the domain is verified in Entra ID", fr:"Rien — les domaines personnalisés sont automatiques dès que le domaine est vérifié dans Entra ID"},
 {en:"Configure a custom domain on the application, upload a matching TLS certificate, and create the DNS CNAME pointing to the App Proxy endpoint", fr:"Configurer un domaine personnalisé sur l'application, téléverser un certificat TLS correspondant, et créer l'enregistrement DNS CNAME pointant vers le point de terminaison App Proxy"},
 {en:"A wildcard certificate is forbidden, so you must use the default domain", fr:"Un certificat wildcard est interdit, il faut donc utiliser le domaine par défaut"},
 {en:"Only a DNS A record to the connector server", fr:"Uniquement un enregistrement DNS A vers le serveur connecteur"}],
correct:[1],
explanation:{en:"A is wrong: verifying a domain in Entra ID does not configure app publishing or provide a certificate.\nB is correct: custom domain publishing needs the domain configured on the app, a certificate covering that hostname uploaded to the application, and DNS pointing the hostname at the App Proxy service.\nC is wrong: wildcard certificates are supported and often used for wildcard application publishing.\nD is wrong: clients connect to the App Proxy service, never directly to the connector, which only makes outbound connections.",
fr:"A est faux : vérifier un domaine dans Entra ID ne configure pas la publication ni ne fournit de certificat.\nB est correct : la publication sur domaine personnalisé exige le domaine configuré sur l'app, un certificat couvrant ce nom d'hôte téléversé sur l'application, et un DNS pointant le nom d'hôte vers le service App Proxy.\nC est faux : les certificats wildcard sont supportés et souvent utilisés pour la publication d'applications wildcard.\nD est faux : les clients se connectent au service App Proxy, jamais directement au connecteur, qui n'établit que des connexions sortantes."}
},
{
id:"d3-075", domain:3, topic:"App Proxy wildcard publishing",
q:{en:"You must publish 40 internal SharePoint site collections that share the same domain pattern, without creating 40 applications. What do you use?",
   fr:"Tu dois publier 40 collections de sites SharePoint internes partageant le même modèle de domaine, sans créer 40 applications. Qu'utilises-tu ?"},
options:[
 {en:"Link translation only", fr:"Uniquement la traduction de liens"},
 {en:"One application with 40 reply URLs", fr:"Une application avec 40 URL de réponse"},
 {en:"A wildcard application in Application Proxy, publishing https://*.internal.contoso.com with a wildcard certificate", fr:"Une application wildcard dans Application Proxy, publiant https://*.internal.contoso.com avec un certificat wildcard"},
 {en:"A connector group per site", fr:"Un connector group par site"}],
correct:[2],
explanation:{en:"A is wrong: link translation rewrites internal links inside published pages; it does not publish additional hosts.\nB is wrong: reply URLs concern OAuth/SAML redirects, not App Proxy publishing of multiple hostnames.\nC is correct: wildcard publishing serves an entire hostname pattern through one application, which is the documented approach for many similar internal sites and dramatically reduces administration.\nD is wrong: connector groups segment connectivity, not URL scope.",
fr:"A est faux : la traduction de liens réécrit les liens internes dans les pages publiées, elle ne publie pas d'hôtes supplémentaires.\nB est faux : les URL de réponse concernent les redirections OAuth/SAML, pas la publication de plusieurs noms d'hôtes par App Proxy.\nC est correct : la publication wildcard sert tout un modèle de nom d'hôte via une seule application, c'est l'approche documentée pour de nombreux sites internes similaires et cela réduit fortement l'administration.\nD est faux : les connector groups segmentent la connectivité, pas la portée des URL."}
},
{
id:"d3-076", domain:3, topic:"App Proxy link translation",
q:{en:"A published internal application returns pages containing hard-coded links to http://intranet.corp.local, which fail for remote users. What feature fixes this?",
   fr:"Une application interne publiée renvoie des pages contenant des liens codés en dur vers http://intranet.corp.local, qui échouent pour les utilisateurs distants. Quelle fonctionnalité corrige cela ?"},
options:[
 {en:"Kerberos constrained delegation", fr:"La délégation Kerberos contrainte"},
 {en:"Pre-authentication set to passthrough", fr:"La pré-authentification en passthrough"},
 {en:"A connector group in another region", fr:"Un connector group dans une autre région"},
 {en:"Translate URLs in application body (link translation), which rewrites internal URLs to their external published equivalents", fr:"Traduire les URL dans le corps de l'application (link translation), qui réécrit les URL internes vers leurs équivalents publiés externes"}],
correct:[3],
explanation:{en:"A is wrong: KCD handles single sign-on to Kerberos backends.\nB is wrong: pre-authentication mode affects security, not link rewriting.\nC is wrong: connector location affects latency and reachability, not page content.\nD is correct: link translation rewrites internal hostnames found in the response body and headers so remote clients follow the published external URLs instead of unreachable internal ones. Applications must also be published for the referenced hosts.",
fr:"A est faux : la KCD gère le SSO vers des backends Kerberos.\nB est faux : le mode de pré-authentification touche la sécurité, pas la réécriture de liens.\nC est faux : l'emplacement du connecteur influe sur la latence et l'accessibilité, pas sur le contenu des pages.\nD est correct : la traduction de liens réécrit les noms d'hôtes internes trouvés dans le corps et les en-têtes de la réponse pour que les clients distants suivent les URL externes publiées plutôt que des URL internes injoignables. Les applications doivent aussi être publiées pour les hôtes référencés."}
},
{
id:"d3-077", domain:3, topic:"App Proxy connector operations",
q:{en:"Which statement about Application Proxy connectors is correct?",
   fr:"Quelle affirmation sur les connecteurs Application Proxy est correcte ?"},
options:[
 {en:"They make only outbound connections over HTTPS, require no inbound firewall openings, auto-update themselves, and load-balance within their connector group", fr:"Ils n'établissent que des connexions sortantes en HTTPS, n'exigent aucune ouverture entrante du pare-feu, se mettent à jour automatiquement, et se répartissent la charge au sein de leur connector group"},
 {en:"They must be installed in a DMZ", fr:"Ils doivent être installés en DMZ"},
 {en:"Only one connector may run per connector group", fr:"Un seul connecteur peut fonctionner par connector group"},
 {en:"They require inbound TCP 443 to be opened from the internet", fr:"Ils exigent l'ouverture entrante du TCP 443 depuis internet"}],
correct:[0],
explanation:{en:"A is correct: the outbound-only design is the main security benefit of Application Proxy — no inbound ports, no DMZ requirement — and multiple connectors in a group provide both high availability and load distribution.\nB is wrong: connectors are usually placed on the internal network near the applications.\nC is wrong: Microsoft recommends at least two connectors per group.\nD is wrong: no inbound rules are needed.",
fr:"A est correct : la conception uniquement sortante est le principal bénéfice de sécurité d'Application Proxy — aucun port entrant, aucune DMZ requise — et plusieurs connecteurs dans un groupe apportent à la fois haute disponibilité et répartition de charge.\nB est faux : les connecteurs sont généralement placés sur le réseau interne, près des applications.\nC est faux : Microsoft recommande au moins deux connecteurs par groupe.\nD est faux : aucune règle entrante n'est nécessaire."}
},
{
id:"d3-078", domain:3, topic:"App Proxy troubleshooting",
q:{en:"A published application returns a backend timeout error for remote users, while it works from inside the network. What do you check first?",
   fr:"Une application publiée renvoie une erreur de délai d'attente du backend pour les utilisateurs distants, alors qu'elle fonctionne depuis le réseau interne. Que vérifies-tu en premier ?"},
options:[
 {en:"That Conditional Access is disabled", fr:"Que l'accès conditionnel est désactivé"},
 {en:"That the connector server can reach the internal URL and port, that the backend responds within the configured timeout, and the connector's event logs", fr:"Que le serveur connecteur peut joindre l'URL et le port internes, que le backend répond dans le délai configuré, et les journaux d'événements du connecteur"},
 {en:"That the users have Entra ID P2 licences", fr:"Que les utilisateurs ont des licences Entra ID P2"},
 {en:"That the application is visible in My Apps", fr:"Que l'application est visible dans Mes applications"}],
correct:[1],
explanation:{en:"A is wrong: a Conditional Access block returns an access-denied error, not a backend timeout — and disabling security to fix a network problem is the wrong instinct.\nB is correct: a backend timeout means the connector could not get a timely response from the internal URL, so the checks are connector-to-backend network reachability, name resolution, the backend's own performance and the application's timeout setting (which can be raised for slow apps).\nC is wrong: licensing does not produce backend timeouts.\nD is wrong: visibility is cosmetic.",
fr:"A est faux : un blocage par accès conditionnel renvoie une erreur d'accès refusé, pas un délai backend — et désactiver la sécurité pour régler un problème réseau est le mauvais réflexe.\nB est correct : un délai d'attente backend signifie que le connecteur n'a pas obtenu de réponse à temps de l'URL interne ; les vérifications portent donc sur la joignabilité réseau connecteur-backend, la résolution de noms, la performance du backend et le réglage de délai de l'application (qui peut être augmenté pour les apps lentes).\nC est faux : la licence ne provoque pas de délai d'attente backend.\nD est faux : la visibilité est cosmétique."}
},
{
id:"d3-079", domain:3, topic:"App Proxy vs Private Access",
q:{en:"You currently publish four internal web apps with Application Proxy and now need to give the same users access to internal SSH and RDP hosts. What is the appropriate direction?",
   fr:"Tu publies actuellement quatre applications web internes avec Application Proxy et dois maintenant donner aux mêmes utilisateurs l'accès à des hôtes SSH et RDP internes. Quelle est la bonne orientation ?"},
options:[
 {en:"Publish SSH and RDP through Application Proxy", fr:"Publier SSH et RDP via Application Proxy"},
 {en:"Open inbound firewall ports for those hosts", fr:"Ouvrir des ports entrants du pare-feu vers ces hôtes"},
 {en:"Adopt Global Secure Access Private Access, which covers any TCP/UDP protocol, while Application Proxy remains an option for the HTTP/HTTPS apps", fr:"Adopter Global Secure Access Private Access, qui couvre tout protocole TCP/UDP, Application Proxy restant une option pour les apps HTTP/HTTPS"},
 {en:"Use Conditional Access App Control", fr:"Utiliser le Conditional Access App Control"}],
correct:[2],
explanation:{en:"A is wrong: those protocols are outside App Proxy's scope.\nB is wrong: exposing RDP or SSH to the internet is precisely the risk these technologies exist to eliminate.\nC is correct: Application Proxy is limited to HTTP and HTTPS, so non-web protocols need Private Access, which delivers per-application ZTNA over arbitrary ports with Conditional Access applied.\nD is wrong: CA App Control is a reverse proxy for in-session controls on web applications.",
fr:"A est faux : ces protocoles sont hors du périmètre d'App Proxy.\nB est faux : exposer RDP ou SSH à internet est précisément le risque que ces technologies visent à éliminer.\nC est correct : Application Proxy se limite à HTTP et HTTPS, donc les protocoles non web nécessitent Private Access, qui apporte du ZTNA par application sur des ports quelconques avec accès conditionnel.\nD est faux : le CA App Control est un reverse proxy pour des contrôles en session sur des applications web."}
},
{
id:"d3-080", domain:3, topic:"MDCA app connectors",
q:{en:"You want Defender for Cloud Apps to scan files already stored in a sanctioned SaaS application and apply governance actions to them, not just monitor live traffic. What do you configure?",
   fr:"Tu veux que Defender for Cloud Apps analyse les fichiers déjà stockés dans une application SaaS approuvée et y applique des actions de gouvernance, pas seulement surveiller le trafic en direct. Que configures-tu ?"},
options:[
 {en:"A Conditional Access session policy", fr:"Une session policy d'accès conditionnel"},
 {en:"Tagging the app as sanctioned", fr:"Marquer l'app comme sanctionnée"},
 {en:"Cloud Discovery log upload", fr:"Le téléversement de journaux Cloud Discovery"},
 {en:"An app connector using the application's APIs, which gives visibility into existing data and enables governance actions", fr:"Un app connector utilisant les API de l'application, qui donne la visibilité sur les données existantes et permet les actions de gouvernance"}],
correct:[3],
explanation:{en:"A is wrong: session policies act on live traffic routed through the proxy, not on data already stored.\nB is wrong: sanctioning is a classification label, not a data connection.\nC is wrong: Cloud Discovery analyses network logs to reveal shadow IT; it never sees file contents.\nD is correct: API-based app connectors reach into the application's stored content and configuration, enabling file policies, data scans and governance actions on data at rest.",
fr:"A est faux : les session policies agissent sur le trafic en direct routé par le proxy, pas sur des données déjà stockées.\nB est faux : la sanction est une étiquette de classification, pas une connexion aux données.\nC est faux : Cloud Discovery analyse des journaux réseau pour révéler le shadow IT, il ne voit jamais le contenu des fichiers.\nD est correct : les app connectors basés API accèdent au contenu stocké et à la configuration de l'application, permettant les file policies, l'analyse de données et les actions de gouvernance sur les données au repos."}
},
{
id:"d3-081", domain:3, topic:"MDCA anomaly detection",
q:{en:"Defender for Cloud Apps alerts on \"impossible travel\" and \"activity from infrequent country\" for a SaaS application. Which policy type generated these?",
   fr:"Defender for Cloud Apps alerte sur « voyage impossible » et « activité depuis un pays inhabituel » pour une application SaaS. Quel type de stratégie a généré ces alertes ?"},
options:[
 {en:"Built-in anomaly detection policies, which profile normal behaviour and alert on deviations with no configuration required", fr:"Les stratégies de détection d'anomalies intégrées, qui profilent le comportement normal et alertent sur les écarts sans configuration"},
 {en:"Cloud Discovery policies", fr:"Les stratégies Cloud Discovery"},
 {en:"File policies", fr:"Les file policies"},
 {en:"Session policies", fr:"Les session policies"}],
correct:[0],
explanation:{en:"A is correct: anomaly detection policies are enabled out of the box and learn each user's baseline before alerting, which is why they need no thresholds from you (though sensitivity is tunable).\nB is wrong: Cloud Discovery reports on app usage from network logs.\nC is wrong: file policies scan content and sharing.\nD is wrong: session policies enforce real-time controls on proxied sessions.",
fr:"A est correct : les stratégies de détection d'anomalies sont activées d'emblée et apprennent la ligne de base de chaque utilisateur avant d'alerter, d'où l'absence de seuils à définir (la sensibilité reste ajustable).\nB est faux : Cloud Discovery rend compte de l'usage des apps à partir de journaux réseau.\nC est faux : les file policies analysent le contenu et le partage.\nD est faux : les session policies appliquent des contrôles en temps réel sur les sessions passant par le proxy."}
},
{
id:"d3-082", domain:3, topic:"App governance for OAuth apps",
q:{en:"You need continuous detection of OAuth applications in your tenant that behave suspiciously — for example an app suddenly downloading large volumes of mail. Which capability provides this?",
   fr:"Tu as besoin d'une détection continue des applications OAuth de ton tenant au comportement suspect — par exemple une app téléchargeant soudain de gros volumes de courrier. Quelle capacité fournit cela ?"},
options:[
 {en:"The Entra ID audit log alone", fr:"Le journal d'audit Entra ID seul"},
 {en:"App governance in Defender for Cloud Apps, which monitors OAuth app behaviour and permissions and can automatically disable an offending app", fr:"App governance dans Defender for Cloud Apps, qui surveille le comportement et les permissions des applications OAuth et peut désactiver automatiquement une app fautive"},
 {en:"Cloud Discovery", fr:"Cloud Discovery"},
 {en:"Conditional Access for workload identities", fr:"L'accès conditionnel pour workload identities"}],
correct:[1],
explanation:{en:"A is wrong: the audit log records consent and configuration events but does not analyse behaviour over time.\nB is correct: app governance adds behavioural threat detection and policy enforcement for OAuth applications, including data-access anomalies and automatic remediation.\nC is wrong: Cloud Discovery is about unsanctioned app usage on the network, not OAuth app behaviour.\nD is wrong: workload identity Conditional Access restricts where a service principal may authenticate from; it does not detect anomalous data access.",
fr:"A est faux : le journal d'audit enregistre les événements de consentement et de configuration mais n'analyse pas le comportement dans la durée.\nB est correct : app governance ajoute une détection comportementale des menaces et l'application de stratégies pour les applications OAuth, y compris les anomalies d'accès aux données et la remédiation automatique.\nC est faux : Cloud Discovery concerne l'usage d'applications non approuvées sur le réseau, pas le comportement des apps OAuth.\nD est faux : l'accès conditionnel pour workload identities restreint les emplacements d'authentification d'un service principal, il ne détecte pas un accès anormal aux données."}
},
{
id:"d3-083", domain:3, topic:"Blocking an application",
q:{en:"You must immediately stop all users from signing into a specific enterprise application, without deleting it or its configuration. What do you do?",
   fr:"Tu dois immédiatement empêcher tous les utilisateurs de se connecter à une application d'entreprise précise, sans la supprimer ni perdre sa configuration. Que fais-tu ?"},
options:[
 {en:"Delete the app registration", fr:"Supprimer l'app registration"},
 {en:"Set the application to hidden in My Apps", fr:"Rendre l'application masquée dans Mes applications"},
 {en:"Set \"Enabled for users to sign-in?\" to No on the enterprise application", fr:"Mettre « Activé pour la connexion des utilisateurs ? » sur Non sur l'application d'entreprise"},
 {en:"Remove all users from the application's assignments", fr:"Retirer tous les utilisateurs des assignations de l'application"}],
correct:[2],
explanation:{en:"A is wrong: deleting destroys configuration and consent, and the service principal may remain.\nB is wrong: hiding the tile does not prevent sign-in.\nC is correct: disabling sign-in on the service principal blocks authentication instantly while preserving the object, its permissions and its assignments so you can re-enable it after investigation.\nD is wrong: unassigning is slower, error-prone, and does nothing if assignment is not required.",
fr:"A est faux : supprimer détruit la configuration et le consentement, et le service principal peut subsister.\nB est faux : masquer la tuile n'empêche pas la connexion.\nC est correct : désactiver la connexion sur le service principal bloque l'authentification instantanément tout en conservant l'objet, ses permissions et ses assignations, pour pouvoir le réactiver après investigation.\nD est faux : désassigner est plus lent, sujet à erreur, et sans effet si l'attribution n'est pas requise."}
},
{
id:"d3-084", domain:3, topic:"Auditing consent events",
q:{en:"You must produce a list of every application a user consented to in the last 30 days, and who granted admin consent to which apps. Where do you find this?",
   fr:"Tu dois produire la liste de chaque application à laquelle un utilisateur a consenti ces 30 derniers jours, et qui a accordé le consentement admin à quelles apps. Où trouves-tu cela ?"},
options:[
 {en:"The application's own logs", fr:"Les journaux de l'application elle-même"},
 {en:"The sign-in logs", fr:"Les journaux de connexion"},
 {en:"The provisioning logs", fr:"Les journaux de provisioning"},
 {en:"The Entra ID audit logs, filtering on the consent activities (\"Consent to application\" and \"Add app role assignment grant to user\")", fr:"Les journaux d'audit Entra ID, en filtrant sur les activités de consentement (« Consent to application » et « Add app role assignment grant to user »)"}],
correct:[3],
explanation:{en:"A is wrong: a third-party application's logs are neither authoritative nor under your control.\nB is wrong: sign-in logs show authentications, not permission grants.\nC is wrong: provisioning logs cover SCIM object flows.\nD is correct: consent is a directory change, so it lands in the audit log with the initiating user, the target application and the permissions involved — the primary evidence source when investigating consent phishing.",
fr:"A est faux : les journaux d'une application tierce ne font pas foi et ne sont pas sous ton contrôle.\nB est faux : les journaux de connexion montrent des authentifications, pas des octrois de permissions.\nC est faux : les journaux de provisioning couvrent les flux d'objets SCIM.\nD est correct : le consentement est un changement d'annuaire, il apparaît donc dans le journal d'audit avec l'utilisateur initiateur, l'application cible et les permissions concernées — la source de preuve principale lors d'une enquête sur du consent phishing."}
},
{
id:"d3-085", domain:3, topic:"Scoping application mailbox access",
q:{en:"An application has the Mail.Read application permission, which technically grants access to every mailbox. Compliance requires it to read only the 12 shared mailboxes it needs. What do you configure?",
   fr:"Une application détient la permission applicative Mail.Read, qui donne techniquement accès à toutes les boîtes. La conformité exige qu'elle ne lise que les 12 boîtes partagées dont elle a besoin. Que configures-tu ?"},
options:[
 {en:"An Exchange application access policy restricting that application's access to a mail-enabled security group containing the 12 mailboxes", fr:"Une application access policy Exchange restreignant l'accès de cette application à un groupe de sécurité à extension messagerie contenant les 12 boîtes"},
 {en:"A Conditional Access policy on the application", fr:"Une stratégie d'accès conditionnel sur l'application"},
 {en:"Delegated permissions instead", fr:"Des permissions déléguées à la place"},
 {en:"An administrative unit containing the mailboxes", fr:"Une administrative unit contenant les boîtes"}],
correct:[0],
explanation:{en:"A is correct: application permissions are tenant-wide by design, and Exchange application access policies are the supported mechanism to scope an app's mailbox access to a specific group — the standard answer for least privilege with Graph mail permissions.\nB is wrong: Conditional Access governs authentication conditions, not which mailboxes an app may read.\nC is wrong: delegated permissions require a signed-in user, which a background service lacks.\nD is wrong: administrative units scope directory administration, not Graph data access for applications.",
fr:"A est correct : les permissions applicatives sont par conception à l'échelle du tenant, et les application access policies Exchange sont le mécanisme supporté pour restreindre l'accès aux boîtes d'une app à un groupe précis — la réponse standard pour le moindre privilège avec les permissions mail de Graph.\nB est faux : l'accès conditionnel gouverne les conditions d'authentification, pas les boîtes qu'une app peut lire.\nC est faux : les permissions déléguées exigent un utilisateur connecté, absent d'un service en arrière-plan.\nD est faux : les administrative units limitent l'administration de l'annuaire, pas l'accès aux données Graph par des applications."}
},
{
id:"d3-086", domain:3, topic:"Application management policies",
q:{en:"Security requires that no application in the tenant may have a client secret valid for more than 90 days, enforced centrally rather than reviewed manually. What do you use?",
   fr:"La sécurité exige qu'aucune application du tenant ne puisse avoir un client secret valide plus de 90 jours, imposé centralement plutôt que vérifié manuellement. Qu'utilises-tu ?"},
options:[
 {en:"A PowerShell script that deletes long-lived secrets nightly", fr:"Un script PowerShell supprimant chaque nuit les secrets à longue durée"},
 {en:"An application management policy (tenant default or per-application) restricting credential types and lifetimes", fr:"Une application management policy (par défaut au niveau tenant ou par application) restreignant les types et durées de vie des identifiants"},
 {en:"An access review of application owners", fr:"Une access review des propriétaires d'applications"},
 {en:"A Conditional Access policy for workload identities", fr:"Une stratégie d'accès conditionnel pour workload identities"}],
correct:[1],
explanation:{en:"A is wrong: deleting credentials after the fact breaks running applications and is a detective, not preventive, control.\nB is correct: app management policies let you enforce restrictions on application and service principal credentials — for example blocking password secrets entirely or capping their lifetime — as a tenant default with per-application overrides.\nC is wrong: reviewing owners does not constrain credential creation.\nD is wrong: workload identity Conditional Access controls where a service principal may authenticate from, not how its credentials are created.",
fr:"A est faux : supprimer des identifiants après coup casse des applications en production et constitue un contrôle détectif, pas préventif.\nB est correct : les app management policies permettent d'imposer des restrictions sur les identifiants d'applications et de service principals — par exemple interdire totalement les secrets ou plafonner leur durée — comme réglage par défaut du tenant avec des dérogations par application.\nC est faux : revoir les propriétaires ne contraint pas la création d'identifiants.\nD est faux : l'accès conditionnel pour workload identities contrôle les emplacements d'authentification d'un service principal, pas la création de ses identifiants."}
},
{
id:"d3-087", domain:3, topic:"Optional claims",
q:{en:"A custom application needs the user's on-premises sAMAccountName in the token, which is not emitted by default. What do you configure?",
   fr:"Une application personnalisée a besoin du sAMAccountName on-prem de l'utilisateur dans le jeton, non émis par défaut. Que configures-tu ?"},
options:[
 {en:"A SCIM attribute mapping", fr:"Un mapping d'attribut SCIM"},
 {en:"A directory extension attribute in Entra Connect only", fr:"Uniquement un attribut d'extension d'annuaire dans Entra Connect"},
 {en:"An optional claim in the app registration's token configuration, choosing the on-premises SAM account name claim", fr:"Un claim optionnel dans la token configuration de l'app registration, en choisissant le claim on-premises SAM account name"},
 {en:"An app role named sAMAccountName", fr:"Un app role nommé sAMAccountName"}],
correct:[2],
explanation:{en:"A is wrong: SCIM mappings feed provisioning, not token issuance.\nB is wrong: the attribute must be synced to Entra ID, but syncing alone does not put it in a token.\nC is correct: token configuration exposes optional claims (including on-premises identity claims for hybrid users) that you add to ID or access tokens without changing the application's permissions.\nD is wrong: app roles express authorization, not arbitrary attribute values.",
fr:"A est faux : les mappings SCIM alimentent le provisioning, pas l'émission de jetons.\nB est faux : l'attribut doit être synchronisé vers Entra ID, mais la synchronisation seule ne le place pas dans un jeton.\nC est correct : la token configuration expose des claims optionnels (y compris des claims d'identité on-prem pour les utilisateurs hybrides) que tu ajoutes aux jetons d'ID ou d'accès sans changer les permissions de l'application.\nD est faux : les app roles expriment une autorisation, pas des valeurs d'attributs arbitraires."}
},
{
id:"d3-088", domain:3, topic:"Token audience",
q:{en:"Your API rejects a token as having an invalid audience although the user signed in successfully. What is the developer most likely doing wrong?",
   fr:"Ton API rejette un jeton pour audience invalide alors que l'utilisateur s'est connecté avec succès. Que fait probablement mal le développeur ?"},
options:[
 {en:"Using HTTPS instead of HTTP", fr:"Utiliser HTTPS au lieu de HTTP"},
 {en:"Requesting too few permissions", fr:"Demander trop peu de permissions"},
 {en:"Signing in from an unmanaged device", fr:"Se connecter depuis un appareil non géré"},
 {en:"Sending the ID token (or a token for a different resource) instead of an access token requested for your API's scope", fr:"Envoyer le jeton d'ID (ou un jeton destiné à une autre ressource) au lieu d'un jeton d'accès demandé pour le scope de ton API"}],
correct:[3],
explanation:{en:"A is wrong: transport has nothing to do with the audience claim.\nB is wrong: missing scopes produce authorization failures, not audience mismatches.\nC is wrong: device state affects Conditional Access, not token audience.\nD is correct: an ID token proves authentication to the CLIENT and its audience is the client ID, while your API must receive an access token whose audience is the API — a classic mistake that produces exactly this error.",
fr:"A est faux : le transport n'a rien à voir avec le claim d'audience.\nB est faux : des scopes manquants produisent des échecs d'autorisation, pas un désaccord d'audience.\nC est faux : l'état de l'appareil affecte l'accès conditionnel, pas l'audience du jeton.\nD est correct : un jeton d'ID prouve l'authentification au CLIENT et son audience est l'ID du client, tandis que ton API doit recevoir un jeton d'accès dont l'audience est l'API — une erreur classique produisant exactement ce message."}
},
{
id:"d3-089", domain:3, topic:"Certificate credential rollover",
q:{en:"An application authenticates to Entra ID with a certificate that expires in three weeks. How do you roll it over without downtime?",
   fr:"Une application s'authentifie auprès d'Entra ID avec un certificat qui expire dans trois semaines. Comment le renouveler sans interruption ?"},
options:[
 {en:"Upload the new certificate alongside the existing one, deploy it to the application, verify it is being used, then remove the old one", fr:"Téléverser le nouveau certificat à côté de l'existant, le déployer sur l'application, vérifier qu'il est bien utilisé, puis retirer l'ancien"},
 {en:"Convert the application to use a client secret", fr:"Convertir l'application pour utiliser un client secret"},
 {en:"Wait for expiry; Entra ID renews certificates automatically", fr:"Attendre l'expiration ; Entra ID renouvelle les certificats automatiquement"},
 {en:"Delete the old certificate first, then upload the new one", fr:"Supprimer d'abord l'ancien certificat, puis téléverser le nouveau"}],
correct:[0],
explanation:{en:"A is correct: an application can hold multiple key credentials simultaneously, so overlapping the old and new certificate gives a safe window to deploy and validate before cleanup.\nB is wrong: moving to a weaker credential type to avoid a rollover is a step backwards.\nC is wrong: Entra ID does not renew application credentials for you.\nD is wrong: removing the working credential first guarantees an outage if deployment fails.",
fr:"A est correct : une application peut détenir plusieurs key credentials simultanément, faire se chevaucher l'ancien et le nouveau certificat offre donc une fenêtre sûre pour déployer et valider avant le nettoyage.\nB est faux : passer à un type d'identifiant plus faible pour éviter un renouvellement est un recul.\nC est faux : Entra ID ne renouvelle pas les identifiants d'applications à ta place.\nD est faux : retirer d'abord l'identifiant qui fonctionne garantit une panne si le déploiement échoue."}
},
{
id:"d3-090", domain:3, topic:"App registration vs service principal ownership",
q:{en:"A developer can edit an application's API permissions but cannot manage which users are assigned to it in the enterprise applications blade. What explains this?",
   fr:"Un développeur peut modifier les permissions d'API d'une application mais ne peut pas gérer les utilisateurs qui lui sont assignés dans le panneau Applications d'entreprise. Qu'est-ce qui explique cela ?"},
options:[
 {en:"API permissions and assignments are the same thing", fr:"Les permissions d'API et les assignations sont la même chose"},
 {en:"They own the application registration object but not the corresponding service principal — the two objects have separate owner lists", fr:"Il est propriétaire de l'objet app registration mais pas du service principal correspondant — les deux objets ont des listes de propriétaires distinctes"},
 {en:"Assignment always requires Global Administrator", fr:"L'assignation exige toujours Global Administrator"},
 {en:"The application is multi-tenant", fr:"L'application est multi-tenant"}],
correct:[1],
explanation:{en:"A is wrong: permissions define what the app may call; assignments define who may use it.\nB is correct: the application object (registration, the global definition) and the service principal (the local instance in your tenant) are distinct objects with distinct ownership, which is exactly why a developer can shape the app yet not control who uses it.\nC is wrong: assignment can be delegated through service principal ownership or roles such as Cloud Application Administrator.\nD is wrong: tenancy does not affect ownership separation.",
fr:"A est faux : les permissions définissent ce que l'app peut appeler, les assignations définissent qui peut l'utiliser.\nB est correct : l'objet application (l'app registration, la définition globale) et le service principal (l'instance locale dans ton tenant) sont deux objets distincts avec des propriétés distinctes, ce qui explique précisément qu'un développeur puisse façonner l'app sans contrôler qui l'utilise.\nC est faux : l'assignation peut être déléguée via la propriété du service principal ou des rôles comme Cloud Application Administrator.\nD est faux : le caractère multi-tenant n'affecte pas la séparation des propriétés."}
},
{
id:"d3-091", domain:3, topic:"Multi-tenant onboarding",
q:{en:"A customer's administrator must grant your multi-tenant application admin consent before their users can sign in. What is the supported way to trigger this?",
   fr:"L'administrateur d'un client doit accorder le consentement admin à ton application multi-tenant avant que ses utilisateurs puissent se connecter. Quelle est la façon supportée de le déclencher ?"},
options:[
 {en:"Ask them to create their own app registration with the same client ID", fr:"Lui demander de créer son propre app registration avec le même client ID"},
 {en:"Invite their administrator as a guest in your tenant", fr:"Inviter son administrateur comme guest dans ton tenant"},
 {en:"Send them the admin consent endpoint URL containing your client ID, which they open and approve, creating the service principal and grants in their tenant", fr:"Lui envoyer l'URL du point de terminaison de consentement admin contenant ton client ID, qu'il ouvre et approuve, ce qui crée le service principal et les octrois dans son tenant"},
 {en:"Have them run Entra Connect", fr:"Lui faire exécuter Entra Connect"}],
correct:[2],
explanation:{en:"A is wrong: client IDs are globally unique and cannot be duplicated.\nB is wrong: guest access to your tenant does not consent to anything in theirs.\nC is correct: the admin consent endpoint is the documented onboarding flow — the customer's administrator signs in, reviews the permissions and consents, which provisions a service principal for your application in their tenant.\nD is wrong: Entra Connect is unrelated to application consent.",
fr:"A est faux : les client ID sont uniques mondialement et ne peuvent pas être dupliqués.\nB est faux : un accès guest à ton tenant ne consent à rien dans le sien.\nC est correct : le point de terminaison de consentement admin est le parcours d'onboarding documenté — l'administrateur du client se connecte, examine les permissions et consent, ce qui provisionne un service principal pour ton application dans son tenant.\nD est faux : Entra Connect n'a aucun rapport avec le consentement applicatif."}
},
{
id:"d3-092", domain:3, topic:"Managed identity vs service principal in logs",
q:{en:"You are reviewing sign-in logs and must separate authentications performed by Azure managed identities from those performed by registered applications. How?",
   fr:"Tu examines les journaux de connexion et dois séparer les authentifications réalisées par des managed identities Azure de celles réalisées par des applications enregistrées. Comment ?"},
options:[
 {en:"There is no distinction; both appear as users", fr:"Il n'y a pas de distinction, les deux apparaissent comme utilisateurs"},
 {en:"Check the audit logs instead", fr:"Consulter plutôt les journaux d'audit"},
 {en:"Filter the user sign-ins by application name", fr:"Filtrer les connexions utilisateur par nom d'application"},
 {en:"Use the dedicated Managed identity sign-ins tab, which is separate from the Service principal sign-ins tab", fr:"Utiliser l'onglet dédié Connexions de managed identity, distinct de l'onglet Connexions de service principal"}],
correct:[3],
explanation:{en:"A is wrong: they are explicitly distinguished.\nB is wrong: audit logs record directory changes, not authentications.\nC is wrong: neither identity type appears under user sign-ins.\nD is correct: the sign-in logs are split into four categories — interactive user, non-interactive user, service principal and managed identity — so the separation is built in.",
fr:"A est faux : ils sont explicitement distingués.\nB est faux : les journaux d'audit enregistrent les changements d'annuaire, pas les authentifications.\nC est faux : aucun de ces types d'identité n'apparaît dans les connexions utilisateur.\nD est correct : les journaux de connexion sont scindés en quatre catégories — utilisateur interactif, utilisateur non interactif, service principal et managed identity — la séparation est donc native."}
},
{
id:"d3-093", domain:3, topic:"Least privilege for app administration",
q:{en:"A team must manage single sign-on configuration and user assignment for all enterprise applications, but must NOT be able to manage Application Proxy. Which role fits?",
   fr:"Une équipe doit gérer la configuration du SSO et l'assignation des utilisateurs pour toutes les applications d'entreprise, mais ne doit PAS pouvoir gérer Application Proxy. Quel rôle convient ?"},
options:[
 {en:"Cloud Application Administrator", fr:"Cloud Application Administrator"},
 {en:"Application Developer", fr:"Application Developer"},
 {en:"Application Administrator", fr:"Application Administrator"},
 {en:"Global Administrator", fr:"Global Administrator"}],
correct:[0],
explanation:{en:"A is correct: Cloud Application Administrator has the same application management capabilities as Application Administrator except Application Proxy, which is exactly the stated boundary.\nB is wrong: Application Developer can register new applications but cannot manage all existing enterprise applications.\nC is wrong: Application Administrator includes Application Proxy management.\nD is wrong: Global Administrator vastly exceeds the requirement.",
fr:"A est correct : Cloud Application Administrator dispose des mêmes capacités de gestion d'applications qu'Application Administrator sauf Application Proxy, exactement la frontière demandée.\nB est faux : Application Developer peut enregistrer de nouvelles applications mais ne gère pas toutes les applications d'entreprise existantes.\nC est faux : Application Administrator inclut la gestion d'Application Proxy.\nD est faux : Global Administrator dépasse largement le besoin."}
},
{
id:"d3-094", domain:3, topic:"Password-based SSO",
q:{en:"A legacy SaaS application supports neither SAML nor OIDC, only its own HTML login form. Users must still get single sign-on from My Apps. What do you configure?",
   fr:"Une application SaaS historique ne supporte ni SAML ni OIDC, seulement son propre formulaire HTML de connexion. Les utilisateurs doivent quand même bénéficier du SSO depuis Mes applications. Que configures-tu ?"},
options:[
 {en:"Linked single sign-on", fr:"Le SSO lié (linked)"},
 {en:"Password-based single sign-on, where Entra ID stores the credentials and the My Apps browser extension replays them into the form", fr:"Le SSO basé sur mot de passe, où Entra ID stocke les identifiants et l'extension navigateur Mes applications les rejoue dans le formulaire"},
 {en:"Header-based single sign-on", fr:"Le SSO basé sur les en-têtes"},
 {en:"SCIM provisioning", fr:"Le provisioning SCIM"}],
correct:[1],
explanation:{en:"A is wrong: linked SSO only places a tile pointing at an existing sign-in experience; it performs no authentication.\nB is correct: password-based SSO is designed for form-based applications — credentials are stored encrypted and injected by the extension, and they can be managed by the administrator or by the user. It is the weakest SSO option, so prefer a federated protocol when the vendor supports one.\nC is wrong: header-based SSO applies to on-premises apps published through Application Proxy with an additional component.\nD is wrong: SCIM creates accounts; it does not sign users in.",
fr:"A est faux : le SSO lié ne fait que placer une tuile pointant vers une expérience de connexion existante, il n'authentifie pas.\nB est correct : le SSO par mot de passe est conçu pour les applications à formulaire — les identifiants sont stockés chiffrés et injectés par l'extension, et peuvent être gérés par l'administrateur ou par l'utilisateur. C'est l'option de SSO la plus faible, il faut donc préférer un protocole fédéré dès que le fournisseur en supporte un.\nC est faux : le SSO par en-têtes concerne des apps on-prem publiées via Application Proxy avec un composant supplémentaire.\nD est faux : SCIM crée des comptes, il ne connecte pas les utilisateurs."}
},
{
id:"d3-095", domain:3, topic:"Workload identity risk",
q:{en:"Which capability detects that a service principal's credentials may be compromised — for example a suspicious sign-in from an anomalous location or leaked credentials?",
   fr:"Quelle capacité détecte que les identifiants d'un service principal peuvent être compromis — par exemple une connexion suspecte depuis un emplacement anormal ou des identifiants fuités ?"},
options:[
 {en:"Smart lockout", fr:"Le smart lockout"},
 {en:"Access reviews of applications", fr:"Les access reviews d'applications"},
 {en:"Workload identity risk detections in Entra ID Protection, which require Workload Identities Premium", fr:"Les détections de risque des workload identities dans Entra ID Protection, qui nécessitent Workload Identities Premium"},
 {en:"User risk policies, which cover service principals too", fr:"Les stratégies de risque utilisateur, qui couvrent aussi les service principals"}],
correct:[2],
explanation:{en:"A is wrong: smart lockout protects against password brute force on user accounts.\nB is wrong: access reviews recertify who is assigned, not whether a credential is compromised.\nC is correct: ID Protection extends risk detection to workload identities, surfacing signals such as leaked credentials, anomalous sign-ins and suspicious API traffic, and these risks can drive a Conditional Access block for the service principal.\nD is wrong: user risk policies apply to user accounts only.",
fr:"A est faux : le smart lockout protège contre le brute force de mots de passe sur des comptes utilisateurs.\nB est faux : les access reviews recertifient qui est assigné, pas si un identifiant est compromis.\nC est correct : ID Protection étend la détection de risque aux workload identities, en remontant des signaux comme des identifiants fuités, des connexions anormales et un trafic d'API suspect, et ces risques peuvent déclencher un blocage par accès conditionnel du service principal.\nD est faux : les stratégies de risque utilisateur ne concernent que les comptes utilisateurs."}
},
{
id:"d3-096", domain:3, topic:"MDCA file policies",
q:{en:"You must be alerted and automatically remove external sharing whenever a file labelled Confidential is shared publicly in a connected SaaS application. What do you create?",
   fr:"Tu dois être alerté et retirer automatiquement le partage externe dès qu'un fichier étiqueté Confidentiel est partagé publiquement dans une application SaaS connectée. Que crées-tu ?"},
options:[
 {en:"A Conditional Access policy", fr:"Une stratégie d'accès conditionnel"},
 {en:"A session policy", fr:"Une session policy"},
 {en:"An anomaly detection policy", fr:"Une stratégie de détection d'anomalies"},
 {en:"A file policy in Defender for Cloud Apps with a sensitivity label filter and a governance action to remove public sharing", fr:"Une file policy dans Defender for Cloud Apps avec un filtre sur l'étiquette de confidentialité et une action de gouvernance retirant le partage public"}],
correct:[3],
explanation:{en:"A is wrong: Conditional Access decides access at authentication time.\nB is wrong: session policies act on live proxied sessions, not on files already stored and shared.\nC is wrong: anomaly detection watches behaviour, not file sharing state.\nD is correct: file policies evaluate content and sharing state through the app connector and can apply governance actions automatically, including removing external or public sharing and notifying users.",
fr:"A est faux : l'accès conditionnel décide de l'accès au moment de l'authentification.\nB est faux : les session policies agissent sur des sessions en direct passant par le proxy, pas sur des fichiers déjà stockés et partagés.\nC est faux : la détection d'anomalies surveille le comportement, pas l'état de partage des fichiers.\nD est correct : les file policies évaluent le contenu et l'état de partage via l'app connector et peuvent appliquer automatiquement des actions de gouvernance, dont le retrait du partage externe ou public et la notification des utilisateurs."}
},
{
id:"d3-097", domain:3, topic:"Enterprise app vs registration",
q:{en:"You install a SaaS application from the gallery. Which objects exist in your tenant afterwards?",
   fr:"Tu installes une application SaaS depuis la galerie. Quels objets existent ensuite dans ton tenant ?"},
options:[
 {en:"A service principal (the enterprise application) representing the local instance — the application registration lives in the vendor's tenant", fr:"Un service principal (l'application d'entreprise) représentant l'instance locale — l'app registration réside dans le tenant de l'éditeur"},
 {en:"Both an application registration and a service principal that you fully own", fr:"À la fois un app registration et un service principal que tu possèdes entièrement"},
 {en:"Only an application registration", fr:"Uniquement un app registration"},
 {en:"Neither — gallery apps need no objects", fr:"Aucun — les apps de la galerie n'ont besoin d'aucun objet"}],
correct:[0],
explanation:{en:"A is correct: for a third-party gallery application the registration (the global definition) belongs to the publisher, and consenting or adding it creates a service principal in your tenant, which is what you configure for SSO, assignment and provisioning.\nB is wrong: you do not own the vendor's registration, which is why you cannot change its API permission definitions.\nC is wrong: a registration alone would not let users in your tenant sign in.\nD is wrong: without a service principal the application cannot exist in your tenant.",
fr:"A est correct : pour une application tierce de la galerie, l'app registration (la définition globale) appartient à l'éditeur, et consentir ou l'ajouter crée un service principal dans ton tenant, celui que tu configures pour le SSO, l'assignation et le provisioning.\nB est faux : tu ne possèdes pas l'app registration de l'éditeur, c'est pourquoi tu ne peux pas modifier la définition de ses permissions d'API.\nC est faux : un app registration seul ne permettrait pas aux utilisateurs de ton tenant de se connecter.\nD est faux : sans service principal l'application ne peut pas exister dans ton tenant."}
},
{
id:"d3-098", domain:3, topic:"Provisioning logs analysis",
q:{en:"Provisioning to a SaaS app reports \"Skipped\" for most users. What does that status usually mean?",
   fr:"Le provisioning vers une app SaaS indique « Skipped » pour la plupart des utilisateurs. Que signifie généralement ce statut ?"},
options:[
 {en:"Their licences are missing", fr:"Leurs licences manquent"},
 {en:"Those users are not in scope — they are unassigned or excluded by the scoping filter, so no action was needed", fr:"Ces utilisateurs ne sont pas dans la portée — non assignés ou exclus par le scoping filter, aucune action n'était donc nécessaire"},
 {en:"The provisioning job is in quarantine", fr:"Le job de provisioning est en quarantaine"},
 {en:"The target application rejected them", fr:"L'application cible les a rejetés"}],
correct:[1],
explanation:{en:"A is wrong: licences are not a provisioning scope criterion unless you built one.\nB is correct: Skipped means the service evaluated the user and determined no change was required, overwhelmingly because they are out of scope — the provisioning log's details pane names the exact reason.\nC is wrong: quarantine is a job-level status, not a per-user result.\nD is wrong: a rejection appears as Failure with the target's error.",
fr:"A est faux : les licences ne sont pas un critère de portée du provisioning, sauf si tu en as créé un.\nB est correct : Skipped signifie que le service a évalué l'utilisateur et déterminé qu'aucun changement n'était nécessaire, très majoritairement parce qu'il est hors portée — le volet de détails du journal de provisioning nomme la raison exacte.\nC est faux : la quarantaine est un statut au niveau du job, pas un résultat par utilisateur.\nD est faux : un rejet apparaît en Failure avec l'erreur de la cible."}
},
{
id:"d3-099", domain:3, topic:"Conditional Access for a specific app",
q:{en:"A finance SaaS application must require MFA and a compliant device, while all other applications keep the standard policy. What is the cleanest implementation?",
   fr:"Une application SaaS finance doit exiger le MFA et un appareil conforme, tandis que toutes les autres applications gardent la stratégie standard. Quelle est l'implémentation la plus propre ?"},
options:[
 {en:"Use an authentication context on the application's app roles", fr:"Utiliser un authentication context sur les app roles de l'application"},
 {en:"Modify the baseline policy to require a compliant device for everyone", fr:"Modifier la stratégie de référence pour exiger un appareil conforme pour tous"},
 {en:"A separate Conditional Access policy targeting only that enterprise application with both grant controls, in addition to the baseline policy", fr:"Une stratégie d'accès conditionnel distincte ciblant uniquement cette application d'entreprise avec les deux contrôles d'octroi, en plus de la stratégie de référence"},
 {en:"Set assignment required on the application", fr:"Activer l'attribution requise sur l'application"}],
correct:[2],
explanation:{en:"A is wrong: authentication context targets specific actions or resources (and is very useful for granular steps), but for a whole application the direct target is simpler and sufficient.\nB is wrong: applying the strictest requirement everywhere causes unnecessary lockouts.\nC is correct: additional policies stack — the stricter app-specific policy applies on top of the baseline, and all applicable grant controls must be satisfied, which gives you per-application hardening without weakening or complicating the baseline.\nD is wrong: assignment controls who may use the app, not how strongly they must authenticate.",
fr:"A est faux : l'authentication context cible des actions ou ressources précises (et est très utile pour des étapes granulaires), mais pour une application entière le ciblage direct est plus simple et suffisant.\nB est faux : appliquer l'exigence la plus stricte partout provoque des blocages inutiles.\nC est correct : les stratégies s'additionnent — la stratégie plus stricte propre à l'application s'applique par-dessus la référence, et tous les contrôles d'octroi applicables doivent être satisfaits, ce qui durcit une application sans affaiblir ni compliquer la base.\nD est faux : l'attribution contrôle qui peut utiliser l'app, pas la force d'authentification exigée."}
},
{
id:"d3-100", domain:3, topic:"Workload identity strategy",
q:{en:"Ranking from most to least preferred, how should a new Azure-hosted workload authenticate to Microsoft Graph?",
   fr:"Du plus au moins recommandé, comment une nouvelle charge de travail hébergée dans Azure doit-elle s'authentifier auprès de Microsoft Graph ?"},
options:[
 {en:"Client secret first because it is simplest, then certificate, then managed identity", fr:"D'abord un client secret car c'est le plus simple, puis un certificat, puis une managed identity"},
 {en:"A user service account with a shared password", fr:"Un compte de service utilisateur avec un mot de passe partagé"},
 {en:"It makes no difference as long as permissions are least privilege", fr:"Peu importe, tant que les permissions respectent le moindre privilège"},
 {en:"Managed identity first, then workload identity federation, then a certificate credential, and a client secret only as a last resort", fr:"D'abord une managed identity, puis la workload identity federation, puis un certificat, et un client secret seulement en dernier recours"}],
correct:[3],
explanation:{en:"A is wrong: it inverts the security ranking in favour of convenience.\nB is wrong: user accounts for workloads cannot do MFA, are hard to govern and are a classic finding.\nC is wrong: least privilege and credential strength are complementary, not alternatives — a leaked secret with narrow permissions is still a breach.\nD is correct: the ordering follows how much credential material you must handle. A managed identity has none at all, federation exchanges an external token so there is still no stored secret, a certificate's private key can be hardware-protected, and a client secret is a copyable string with an expiry date.",
fr:"A est faux : cela inverse le classement de sécurité au profit de la commodité.\nB est faux : les comptes utilisateurs pour des charges de travail ne peuvent pas faire de MFA, sont difficiles à gouverner et constituent un constat d'audit classique.\nC est faux : moindre privilège et robustesse de l'identifiant sont complémentaires, pas alternatifs — un secret fuité avec des permissions étroites reste une compromission.\nD est correct : l'ordre suit la quantité de matériel d'identification à manipuler. Une managed identity n'en a aucun, la fédération échange un jeton externe donc aucun secret n'est stocké, la clé privée d'un certificat peut être protégée par matériel, et un client secret est une chaîne copiable avec une date d'expiration."}
}
];
