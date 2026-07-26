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
 {en:"A user-assigned managed identity, assigned to all ten VMs", fr:"Une managed identity user-assigned, assignée aux dix VMs"},
 {en:"A system-assigned managed identity on each VM", fr:"Une managed identity system-assigned sur chaque VM"},
 {en:"A single service principal with a shared certificate on the VMs", fr:"Un service principal unique avec un certificat partagé sur les VMs"},
 {en:"A shared user account", fr:"Un compte utilisateur partagé"}],
correct:[0],
explanation:{en:"A is correct: a user-assigned managed identity is a standalone Azure resource with its own lifecycle — it can be attached to many resources and persists if any of them is deleted. Grant it one RBAC role on the storage account.\nB is wrong: system-assigned creates TEN different identities (ten role assignments) and each dies with its VM.\nC is wrong: works but you'd manage/rotate/protect the certificate yourself — managed identities avoid that.\nD is wrong: user accounts for workloads are an anti-pattern (passwords, MFA issues, no least privilege).",
fr:"A est correct : une managed identity user-assigned est une ressource Azure autonome avec son propre cycle de vie — attachable à plusieurs ressources et survivant à leur suppression. Donne-lui un seul rôle RBAC sur le compte de stockage.\nB est faux : le system-assigned crée DIX identités différentes (dix attributions de rôle) et chacune meurt avec sa VM.\nC est faux : possible mais tu gérerais/roterais/protégerais le certificat toi-même — les managed identities évitent ça.\nD est faux : un compte utilisateur pour un workload est un anti-pattern (mots de passe, problèmes MFA, pas de moindre privilège)."}
},
{
id:"d3-003", domain:3, topic:"App registration vs enterprise app",
q:{en:"What is the relationship between an app registration (application object) and an enterprise application (service principal)?",
   fr:"Quelle est la relation entre une app registration (application object) et une enterprise application (service principal) ?"},
options:[
 {en:"The app registration is the global definition in the home tenant; the enterprise application is the local instance (service principal) of that app in each tenant where it's used", fr:"L'app registration est la définition globale dans le tenant d'origine ; l'enterprise application est l'instance locale (service principal) de cette app dans chaque tenant où elle est utilisée"},
 {en:"They are two names for the same object", fr:"Ce sont deux noms pour le même objet"},
 {en:"The enterprise application is the template; the registration is the instance", fr:"L'enterprise application est le modèle ; la registration est l'instance"},
 {en:"Enterprise applications only exist for on-premises apps", fr:"Les enterprise applications n'existent que pour les apps on-prem"}],
correct:[0],
explanation:{en:"A is correct: the application object (App registrations) defines the app: redirect URIs, credentials, API permissions, app roles. The service principal (Enterprise applications) is the instance in a tenant, holding local config: user assignments, SSO settings, provisioning, granted consent. A multi-tenant app has one application object and a service principal in every consuming tenant.\nB is wrong: they are distinct objects with distinct IDs.\nC is wrong: it's the reverse.\nD is wrong: every app used in the tenant (gallery, custom, multi-tenant) gets a service principal.",
fr:"A est correct : l'application object (App registrations) définit l'app : redirect URIs, credentials, permissions API, app roles. Le service principal (Enterprise applications) est l'instance dans un tenant, portant la config locale : assignations d'utilisateurs, réglages SSO, provisioning, consentement accordé. Une app multi-tenant a un application object et un service principal dans chaque tenant consommateur.\nB est faux : ce sont des objets distincts avec des IDs distincts.\nC est faux : c'est l'inverse.\nD est faux : toute app utilisée dans le tenant (galerie, custom, multi-tenant) reçoit un service principal."}
},
{
id:"d3-004", domain:3, topic:"API permissions",
q:{en:"A background daemon service (no signed-in user) must read all users' calendars via Microsoft Graph. Which permission type and consent are required?",
   fr:"Un service daemon en arrière-plan (sans utilisateur connecté) doit lire les calendriers de tous les utilisateurs via Microsoft Graph. Quel type de permission et quel consentement sont requis ?"},
options:[
 {en:"Application permission (Calendars.Read) with admin consent", fr:"Une application permission (Calendars.Read) avec admin consent"},
 {en:"Delegated permission (Calendars.Read) with user consent", fr:"Une delegated permission (Calendars.Read) avec consentement utilisateur"},
 {en:"Delegated permission with admin consent", fr:"Une delegated permission avec admin consent"},
 {en:"No permission needed if the app uses a managed identity", fr:"Aucune permission si l'app utilise une managed identity"}],
correct:[0],
explanation:{en:"A is correct: daemons authenticate as themselves (client credentials flow) and need APPLICATION permissions, which always require admin consent because the app acts without a user, potentially on all mailboxes/calendars.\nB and C are wrong: delegated permissions require a signed-in user — a daemon has none, and the effective rights would be limited to that user anyway.\nD is wrong: a managed identity changes HOW the app authenticates, but it still needs Graph application permissions granted to it.",
fr:"A est correct : les daemons s'authentifient en leur nom (flux client credentials) et ont besoin d'APPLICATION permissions, qui exigent toujours l'admin consent car l'app agit sans utilisateur, potentiellement sur tous les calendriers.\nB et C sont faux : les delegated permissions exigent un utilisateur connecté — un daemon n'en a pas, et les droits effectifs seraient limités à cet utilisateur.\nD est faux : une managed identity change COMMENT l'app s'authentifie, mais il lui faut quand même des application permissions Graph."}
},
{
id:"d3-005", domain:3, topic:"Consent management",
q:{en:"Users report they are blocked with \"Need admin approval\" when trying to use a new SaaS app. Security policy forbids letting users consent freely. How do you let users REQUEST access reviewed by admins?",
   fr:"Les utilisateurs sont bloqués avec « Need admin approval » en essayant une nouvelle app SaaS. La politique de sécurité interdit le consentement libre des utilisateurs. Comment leur permettre de DEMANDER un accès validé par les admins ?"},
options:[
 {en:"Enable the admin consent workflow and designate reviewers", fr:"Activer l'admin consent workflow et désigner des reviewers"},
 {en:"Allow user consent for all apps", fr:"Autoriser le consentement utilisateur pour toutes les apps"},
 {en:"Make all users Application Administrators", fr:"Donner à tous les utilisateurs le rôle Application Administrator"},
 {en:"Disable consent entirely with no request option", fr:"Désactiver totalement le consentement sans option de demande"}],
correct:[0],
explanation:{en:"A is correct: the admin consent workflow adds a \"Request approval\" experience — the request goes to designated reviewers (who must be able to grant admin consent: Global Admin, Cloud App Admin, Application Admin) who approve or deny.\nB is wrong: violates the security policy and opens the door to consent phishing (illicit consent grants).\nC is wrong: massively over-privileged.\nD is wrong: that's the current blocking state — users have no path forward.",
fr:"A est correct : l'admin consent workflow ajoute une expérience « Request approval » — la demande part vers des reviewers désignés (capables d'accorder l'admin consent : Global Admin, Cloud App Admin, Application Admin) qui approuvent ou refusent.\nB est faux : viole la politique de sécurité et ouvre la porte au consent phishing (illicit consent grants).\nC est faux : sur-privilégié massivement.\nD est faux : c'est l'état bloquant actuel — les utilisateurs n'ont aucune voie de recours."}
},
{
id:"d3-006", domain:3, topic:"Application Proxy",
q:{en:"You must publish an internal IIS web app (Integrated Windows Authentication) to remote users through Microsoft Entra Application Proxy with SSO. Which components/settings are needed? (Select all that apply)",
   fr:"Tu dois publier une app web IIS interne (Integrated Windows Authentication) aux utilisateurs distants via Microsoft Entra Application Proxy avec SSO. Quels composants/réglages sont nécessaires ? (Sélectionne toutes les bonnes réponses)"},
options:[
 {en:"Install a private network connector on a server that can reach the app", fr:"Installer un private network connector sur un serveur pouvant joindre l'app"},
 {en:"Configure Kerberos Constrained Delegation (KCD) for the connector and set the SPN in the app's SSO settings", fr:"Configurer Kerberos Constrained Delegation (KCD) pour le connecteur et définir le SPN dans les réglages SSO de l'app"},
 {en:"Open inbound port 443 on the firewall to the connector server", fr:"Ouvrir le port 443 entrant sur le pare-feu vers le serveur du connecteur"},
 {en:"Deploy the app in a DMZ", fr:"Déployer l'app dans une DMZ"}],
correct:[0,1],
explanation:{en:"A and B are correct: the connector handles the outbound-only connection to the App Proxy service, and for IWA apps you configure KCD (connector machine account trusted for delegation to the app's SPN) so Entra pre-authenticated users get silent Kerberos SSO to the backend.\nC is wrong: connectors use OUTBOUND connections only — no inbound firewall rules needed, that's the key selling point.\nD is wrong: no DMZ required; the app stays on the internal network.",
fr:"A et B sont corrects : le connecteur gère la connexion sortante uniquement vers le service App Proxy, et pour les apps IWA tu configures KCD (compte machine du connecteur approuvé pour la délégation vers le SPN de l'app) pour que les utilisateurs pré-authentifiés par Entra obtiennent un SSO Kerberos silencieux vers le backend.\nC est faux : les connecteurs n'utilisent que des connexions SORTANTES — aucune règle entrante, c'est l'argument clé.\nD est faux : pas de DMZ nécessaire ; l'app reste sur le réseau interne."}
},
{
id:"d3-007", domain:3, topic:"SAML SSO",
q:{en:"You configure SAML SSO for a gallery SaaS app. Users get an error saying the sign-in failed because of an invalid audience/identifier. Which SAML setting is most likely wrong?",
   fr:"Tu configures le SSO SAML pour une app SaaS de la galerie. Les utilisateurs obtiennent une erreur de connexion pour cause d'audience/identifiant invalide. Quel réglage SAML est probablement faux ?"},
options:[
 {en:"The Identifier (Entity ID) does not match what the SaaS app expects", fr:"L'Identifier (Entity ID) ne correspond pas à ce que l'app SaaS attend"},
 {en:"The signing certificate expired", fr:"Le certificat de signature a expiré"},
 {en:"The user is missing a license", fr:"Il manque une licence à l'utilisateur"},
 {en:"The Reply URL points to the wrong tenant", fr:"La Reply URL pointe vers le mauvais tenant"}],
correct:[0],
explanation:{en:"A is correct: an \"invalid audience\" error means the Audience/Entity ID in the SAML assertion doesn't match the service provider's expected Identifier — the classic Entity ID mismatch.\nB is wrong: an expired certificate produces signature validation errors, not audience errors.\nC is wrong: licensing produces assignment/access errors, not SAML audience errors.\nD is wrong: a wrong Reply URL (ACS) causes the response to be rejected or misrouted with a different error.",
fr:"A est correct : une erreur « invalid audience » signifie que l'Audience/Entity ID dans l'assertion SAML ne correspond pas à l'Identifier attendu par le service provider — le classique mismatch d'Entity ID.\nB est faux : un certificat expiré produit des erreurs de validation de signature, pas d'audience.\nC est faux : la licence produit des erreurs d'assignation/accès, pas d'audience SAML.\nD est faux : une mauvaise Reply URL (ACS) fait rejeter ou mal router la réponse avec une autre erreur."}
},
{
id:"d3-008", domain:3, topic:"SCIM provisioning",
q:{en:"You must automatically create, update, and disable user accounts in a SaaS app when users are added to, changed in, or removed from a specific Entra group. What do you configure?",
   fr:"Tu dois créer, mettre à jour et désactiver automatiquement les comptes d'une app SaaS quand des utilisateurs sont ajoutés, modifiés ou retirés d'un groupe Entra précis. Que configures-tu ?"},
options:[
 {en:"Automatic provisioning (SCIM) on the enterprise app, scope \"Sync only assigned users and groups\", and assign the group", fr:"Le provisioning automatique (SCIM) sur l'enterprise app, portée « Sync only assigned users and groups », et assigner le groupe"},
 {en:"SAML SSO with group claims", fr:"Le SSO SAML avec des claims de groupes"},
 {en:"A logic app calling the SaaS API nightly", fr:"Une logic app appelant l'API du SaaS chaque nuit"},
 {en:"Entra Connect Sync to the SaaS app", fr:"Entra Connect Sync vers l'app SaaS"}],
correct:[0],
explanation:{en:"A is correct: the provisioning service uses SCIM to push create/update/disable operations (~every 40 minutes) to the app; scoping to assigned users/groups makes the group the source of truth. Monitor with provisioning logs.\nB is wrong: SSO/claims control authentication and authorization at sign-in, not account lifecycle in the app.\nC is wrong: custom automation duplicates a built-in, supported feature.\nD is wrong: Entra Connect syncs on-prem AD to Entra ID, not to SaaS apps.",
fr:"A est correct : le service de provisioning utilise SCIM pour pousser les opérations create/update/disable (~toutes les 40 minutes) vers l'app ; la portée « assigned users and groups » fait du groupe la source de vérité. Surveille avec les provisioning logs.\nB est faux : SSO/claims contrôlent l'authentification et l'autorisation à la connexion, pas le cycle de vie des comptes dans l'app.\nC est faux : une automatisation custom duplique une fonctionnalité intégrée et supportée.\nD est faux : Entra Connect synchronise l'AD on-prem vers Entra ID, pas vers des apps SaaS."}
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
 {en:"Application Administrator", fr:"Application Administrator"},
 {en:"Cloud Application Administrator", fr:"Cloud Application Administrator"},
 {en:"Application Developer", fr:"Application Developer"},
 {en:"Global Administrator", fr:"Global Administrator"}],
correct:[0],
explanation:{en:"A is correct: Application Administrator manages all app registrations, enterprise applications AND Application Proxy.\nB is wrong: Cloud Application Administrator is identical EXCEPT it cannot manage Application Proxy — the classic exam differentiator.\nC is wrong: Application Developer can only create their own app registrations.\nD is wrong: Global Admin works but massively violates least privilege.",
fr:"A est correct : Application Administrator gère toutes les app registrations, les enterprise applications ET l'Application Proxy.\nB est faux : Cloud Application Administrator est identique SAUF qu'il ne peut pas gérer l'Application Proxy — le différenciateur classique de l'examen.\nC est faux : Application Developer ne peut créer que ses propres app registrations.\nD est faux : Global Admin fonctionne mais viole massivement le moindre privilège."}
},
{
id:"d3-011", domain:3, topic:"Workload identity federation",
q:{en:"A GitHub Actions pipeline must deploy to Azure without storing any client secret or certificate in GitHub. What do you configure?",
   fr:"Un pipeline GitHub Actions doit déployer vers Azure sans stocker aucun client secret ni certificat dans GitHub. Que configures-tu ?"},
options:[
 {en:"Workload identity federation: add a federated credential on the app registration trusting the GitHub repo's OIDC tokens", fr:"La workload identity federation : ajouter un federated credential sur l'app registration faisant confiance aux tokens OIDC du repo GitHub"},
 {en:"A client secret stored in GitHub Secrets", fr:"Un client secret stocké dans GitHub Secrets"},
 {en:"A managed identity assigned to GitHub", fr:"Une managed identity assignée à GitHub"},
 {en:"A personal access token of an admin", fr:"Un personal access token d'un admin"}],
correct:[0],
explanation:{en:"A is correct: workload identity federation establishes an OIDC trust between the external issuer (GitHub) and the app registration — GitHub exchanges its own short-lived token for Entra tokens. No secret is ever stored.\nB is wrong: works but stores a long-lived secret — exactly what we must avoid (rotation + leak risk).\nC is wrong: managed identities can only be assigned to AZURE resources; GitHub runs outside Azure (federated credentials on a user-assigned MI are the related alternative, but you can't \"assign an MI to GitHub\").\nD is wrong: personal tokens tie automation to a human and are a major anti-pattern.",
fr:"A est correct : la workload identity federation établit une confiance OIDC entre l'émetteur externe (GitHub) et l'app registration — GitHub échange son propre token éphémère contre des tokens Entra. Aucun secret stocké.\nB est faux : fonctionne mais stocke un secret longue durée — exactement ce qu'on doit éviter (rotation + risque de fuite).\nC est faux : les managed identities ne s'assignent qu'à des ressources AZURE ; GitHub tourne hors d'Azure (les federated credentials sur une MI user-assigned sont l'alternative proche, mais on ne peut pas « assigner une MI à GitHub »).\nD est faux : les tokens personnels lient l'automatisation à un humain — anti-pattern majeur."}
},
{
id:"d3-012", domain:3, topic:"Cloud Discovery",
q:{en:"Management wants visibility into which unsanctioned cloud apps (shadow IT) employees use, WITHOUT deploying network appliances. Devices are already onboarded to Microsoft Defender for Endpoint. What is the simplest approach?",
   fr:"La direction veut la visibilité sur les apps cloud non approuvées (shadow IT) utilisées par les employés, SANS déployer d'équipements réseau. Les appareils sont déjà intégrés à Microsoft Defender for Endpoint. Quelle est l'approche la plus simple ?"},
options:[
 {en:"Enable the Defender for Endpoint integration in Defender for Cloud Apps to feed Cloud Discovery", fr:"Activer l'intégration Defender for Endpoint dans Defender for Cloud Apps pour alimenter Cloud Discovery"},
 {en:"Deploy log collectors and upload firewall logs", fr:"Déployer des log collectors et importer les logs du pare-feu"},
 {en:"Install an SSL-inspecting proxy in every office", fr:"Installer un proxy à inspection SSL dans chaque bureau"},
 {en:"Survey employees about the apps they use", fr:"Sonder les employés sur leurs apps"}],
correct:[0],
explanation:{en:"A is correct: the MDE integration streams endpoint network telemetry directly into Cloud Discovery — machine-based discovery on and off the corporate network, no appliances or log uploads. You can even block unsanctioned apps via MDE.\nB is wrong: valid but heavier, and covers only traffic passing the corporate firewall.\nC is wrong: major infrastructure exactly contrary to \"no appliances\".\nD is wrong: surveys are unreliable and not continuous.",
fr:"A est correct : l'intégration MDE envoie la télémétrie réseau des endpoints directement dans Cloud Discovery — découverte par machine, sur et hors réseau d'entreprise, sans équipement ni import de logs. Tu peux même bloquer les apps non approuvées via MDE.\nB est faux : valable mais plus lourd, et ne couvre que le trafic passant par le pare-feu d'entreprise.\nC est faux : grosse infrastructure, exactement le contraire de « sans équipements ».\nD est faux : les sondages sont peu fiables et non continus."}
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
 {en:"Investigate the app in OAuth apps, mark it as banned/revoke it, and create an OAuth app policy to alert on similar high-permission apps", fr:"Investiguer l'app dans OAuth apps, la bannir/révoquer, et créer une OAuth app policy pour alerter sur les apps similaires à hautes permissions"},
 {en:"Reset all user passwords", fr:"Réinitialiser tous les mots de passe"},
 {en:"Delete the users who consented", fr:"Supprimer les utilisateurs qui ont consenti"},
 {en:"Nothing — user consent is safe by design", fr:"Rien — le consentement utilisateur est sûr par conception"}],
correct:[0],
explanation:{en:"A is correct: MDCA's OAuth apps page shows permission level, community use and consenting users; banning revokes the app's permissions. An OAuth app policy (e.g. high-severity permissions + rare app) automates future detection. Also tighten user consent settings in Entra to prevent recurrence.\nB is wrong: password resets don't revoke OAuth grants — the app keeps its tokens/permissions (that's why consent phishing is dangerous).\nC is wrong: users are victims; deleting them is destructive and pointless.\nD is wrong: illicit consent grant attacks are a top identity threat.",
fr:"A est correct : la page OAuth apps de MDCA montre le niveau de permissions, l'usage communautaire et les utilisateurs ayant consenti ; bannir révoque les permissions de l'app. Une OAuth app policy (ex : permissions sévères + app rare) automatise la détection future. Durcis aussi les paramètres de consentement dans Entra pour éviter la récidive.\nB est faux : réinitialiser les mots de passe ne révoque pas les consentements OAuth — l'app garde ses tokens/permissions (c'est ce qui rend le consent phishing dangereux).\nC est faux : les utilisateurs sont des victimes ; les supprimer est destructif et inutile.\nD est faux : les attaques par illicit consent grant sont une menace identitaire majeure."}
},
{
id:"d3-015", domain:3, topic:"App authentication",
q:{en:"For an app registration used in production, which credential type does Microsoft recommend over client secrets?",
   fr:"Pour une app registration en production, quel type de credential Microsoft recommande-t-il plutôt que les client secrets ?"},
options:[
 {en:"Certificates (or federated credentials) — harder to leak, longer/controlled rotation", fr:"Les certificats (ou federated credentials) — plus durs à fuiter, rotation contrôlée"},
 {en:"Longer-lived client secrets (24 months)", fr:"Des client secrets plus longs (24 mois)"},
 {en:"A password stored in Key Vault", fr:"Un mot de passe stocké dans Key Vault"},
 {en:"The owner's user credentials", fr:"Les identifiants utilisateur du propriétaire"}],
correct:[0],
explanation:{en:"A is correct: Microsoft recommends certificates or workload identity federation instead of client secrets: secrets are strings that get copied into code/config and leak. Best of all: use managed identities when running in Azure.\nB is wrong: longer secret lifetime makes leakage WORSE.\nC is wrong: Key Vault storage helps hygiene but a secret is still a shared string; the recommendation targets the credential type itself.\nD is wrong: never bind apps to human credentials.",
fr:"A est correct : Microsoft recommande les certificats ou la workload identity federation plutôt que les client secrets : les secrets sont des chaînes copiées dans le code/la config et qui fuitent. L'idéal : managed identities quand on tourne dans Azure.\nB est faux : une durée plus longue AGGRAVE le risque de fuite.\nC est faux : Key Vault améliore l'hygiène mais un secret reste une chaîne partagée ; la recommandation porte sur le type de credential.\nD est faux : ne jamais lier une app aux identifiants d'un humain."}
},
{
id:"d3-016", domain:3, topic:"Managed identity usage",
q:{en:"You enabled a system-assigned managed identity on a VM. The VM still cannot read blobs from a storage account. What is missing?",
   fr:"Tu as activé une managed identity system-assigned sur une VM. La VM ne peut toujours pas lire les blobs d'un compte de stockage. Que manque-t-il ?"},
options:[
 {en:"An Azure RBAC role assignment (e.g. Storage Blob Data Reader) for the identity on the storage account", fr:"Une attribution de rôle Azure RBAC (ex : Storage Blob Data Reader) pour l'identité sur le compte de stockage"},
 {en:"A client secret for the identity", fr:"Un client secret pour l'identité"},
 {en:"Entra ID P2 licenses", fr:"Des licences Entra ID P2"},
 {en:"An app registration for the VM", fr:"Une app registration pour la VM"}],
correct:[0],
explanation:{en:"A is correct: enabling the identity only creates the principal — you must still grant it permissions with an RBAC role scoped to the storage account (data-plane role like Storage Blob Data Reader for blob content).\nB is wrong: managed identities have no manageable secrets — that's the point.\nC is wrong: managed identities are free, no premium license involved.\nD is wrong: Azure creates the service principal automatically; no registration needed.",
fr:"A est correct : activer l'identité crée seulement le principal — il faut encore lui accorder des permissions avec un rôle RBAC scopé sur le compte de stockage (rôle data-plane comme Storage Blob Data Reader pour le contenu blob).\nB est faux : les managed identities n'ont pas de secrets gérables — c'est le principe.\nC est faux : les managed identities sont gratuites, aucune licence premium.\nD est faux : Azure crée le service principal automatiquement ; pas de registration nécessaire."}
},
{
id:"d3-017", domain:3, topic:"Multi-tenant apps",
q:{en:"Your developers built an app that customers in OTHER Entra tenants must sign into with their own work accounts. Which setting must the app registration use?",
   fr:"Tes développeurs ont créé une app à laquelle des clients dans D'AUTRES tenants Entra doivent se connecter avec leurs comptes professionnels. Quel réglage l'app registration doit-elle utiliser ?"},
options:[
 {en:"Supported account types = \"Accounts in any organizational directory\" (multi-tenant)", fr:"Supported account types = « Accounts in any organizational directory » (multi-tenant)"},
 {en:"Supported account types = \"Accounts in this organizational directory only\" (single tenant)", fr:"Supported account types = « Accounts in this organizational directory only » (single tenant)"},
 {en:"Create one app registration per customer tenant manually", fr:"Créer une app registration par tenant client manuellement"},
 {en:"Enable public client flows", fr:"Activer les public client flows"}],
correct:[0],
explanation:{en:"A is correct: multi-tenant registration lets any Entra organization's users sign in; on first use/consent, a service principal is created in the customer's tenant.\nB is wrong: single-tenant restricts sign-in to your own tenant.\nC is wrong: unnecessary — the multi-tenant model exists precisely to avoid this.\nD is wrong: public client flows relate to device/native clients without secrets, not tenant audience.",
fr:"A est correct : la registration multi-tenant permet aux utilisateurs de toute organisation Entra de se connecter ; à la première utilisation/consentement, un service principal est créé dans le tenant du client.\nB est faux : single-tenant restreint la connexion à ton propre tenant.\nC est faux : inutile — le modèle multi-tenant existe précisément pour éviter ça.\nD est faux : les public client flows concernent les clients natifs/appareils sans secrets, pas l'audience de tenants."}
},
{
id:"d3-018", domain:3, topic:"App collections",
q:{en:"Users complain the My Apps portal is cluttered. You want to group apps by department (HR apps, Finance apps) in My Apps. What do you create?",
   fr:"Les utilisateurs trouvent le portail My Apps encombré. Tu veux regrouper les apps par département (apps RH, apps Finance) dans My Apps. Que crées-tu ?"},
options:[
 {en:"App collections in the Microsoft Entra admin center", fr:"Des app collections dans le centre d'admin Microsoft Entra"},
 {en:"Administrative units", fr:"Des administrative units"},
 {en:"Dynamic groups per department", fr:"Des groupes dynamiques par département"},
 {en:"Separate tenants per department", fr:"Des tenants séparés par département"}],
correct:[0],
explanation:{en:"A is correct: app collections (formerly workspaces) organize applications into named groups shown in the My Apps portal, assignable to specific users/groups.\nB is wrong: AUs scope admin permissions, they don't affect My Apps layout.\nC is wrong: groups control ACCESS to apps, not their visual organization into collections (though collections are assigned to groups).\nD is wrong: absurd overkill.",
fr:"A est correct : les app collections (anciennement workspaces) organisent les applications en groupes nommés affichés dans le portail My Apps, assignables à des utilisateurs/groupes.\nB est faux : les AUs scopent des permissions admin, sans effet sur l'affichage My Apps.\nC est faux : les groupes contrôlent l'ACCÈS aux apps, pas leur organisation visuelle en collections (même si les collections sont assignées à des groupes).\nD est faux : démesuré et absurde."}
},
{
id:"d3-019", domain:3, topic:"Token configuration",
q:{en:"An application needs the user's department and employeeId inside the ID token to personalize the UI. Where do you configure this?",
   fr:"Une application a besoin du department et de l'employeeId de l'utilisateur dans l'ID token pour personnaliser l'interface. Où configures-tu ça ?"},
options:[
 {en:"Token configuration (optional claims) in the app registration", fr:"Token configuration (optional claims) dans l'app registration"},
 {en:"Conditional Access session controls", fr:"Les contrôles de session Conditional Access"},
 {en:"The enterprise app's provisioning mappings", fr:"Les mappings de provisioning de l'enterprise app"},
 {en:"Custom security attributes", fr:"Les custom security attributes"}],
correct:[0],
explanation:{en:"A is correct: Token configuration on the app registration adds optional claims (like department, employeeid) to ID/access/SAML tokens. For SAML gallery apps you'd use Attributes & Claims on the enterprise app's SSO page.\nB is wrong: session controls shape session behavior, not token content.\nC is wrong: provisioning mappings define attributes pushed via SCIM to the app's user store, not claims in tokens.\nD is wrong: custom security attributes are directory metadata for ABAC/filtering, not automatically token claims.",
fr:"A est correct : Token configuration sur l'app registration ajoute des optional claims (comme department, employeeid) aux tokens ID/access/SAML. Pour les apps SAML de la galerie, tu utiliserais Attributes & Claims dans la page SSO de l'enterprise app.\nB est faux : les contrôles de session façonnent le comportement de session, pas le contenu des tokens.\nC est faux : les mappings de provisioning définissent les attributs poussés via SCIM vers l'app, pas les claims des tokens.\nD est faux : les custom security attributes sont des métadonnées d'annuaire pour ABAC/filtrage, pas automatiquement des claims."}
},
{
id:"d3-020", domain:3, topic:"MDCA app catalog",
q:{en:"In Cloud Discovery, you find employees heavily using an unapproved file-sharing app rated 3/10 in the Cloud app catalog. The company standard is OneDrive. What is the recommended governance action?",
   fr:"Dans Cloud Discovery, tu découvres que les employés utilisent massivement une app de partage de fichiers non approuvée notée 3/10 dans le Cloud app catalog. Le standard de l'entreprise est OneDrive. Quelle action de gouvernance est recommandée ?"},
options:[
 {en:"Tag the app as Unsanctioned (enforced as blocked via Defender for Endpoint) and keep OneDrive Sanctioned", fr:"Marquer l'app comme Unsanctioned (bloquée via Defender for Endpoint) et garder OneDrive Sanctioned"},
 {en:"Delete the app from the Cloud app catalog", fr:"Supprimer l'app du Cloud app catalog"},
 {en:"Lower the app's risk score manually", fr:"Baisser manuellement le score de risque de l'app"},
 {en:"Send a memo asking users to stop", fr:"Envoyer une note interne demandant d'arrêter"}],
correct:[0],
explanation:{en:"A is correct: tagging as Unsanctioned integrates with Defender for Endpoint to block access to the app's domains on onboarded devices — enforceable shadow IT governance.\nB is wrong: the catalog is Microsoft's database of 30,000+ apps; you can't delete entries.\nC is wrong: you can override scores, but faking a lower risk hides the problem instead of governing it.\nD is wrong: memos aren't enforcement.",
fr:"A est correct : le tag Unsanctioned s'intègre à Defender for Endpoint pour bloquer l'accès aux domaines de l'app sur les appareils intégrés — une gouvernance du shadow IT applicable techniquement.\nB est faux : le catalogue est la base Microsoft de 30 000+ apps ; on ne supprime pas ses entrées.\nC est faux : on peut surcharger un score, mais truquer un risque plus bas masque le problème au lieu de le gouverner.\nD est faux : une note interne n'est pas une mesure d'application."}
},
{
id:"d3-021", domain:3, topic:"Managed identity types",
q:{en:"Three Azure Functions in different resource groups must all authenticate to the same Azure SQL database with one identity, and that identity must survive the deletion of any single Function. Which identity should you use?",
   fr:"Trois Azure Functions dans des groupes de ressources différents doivent toutes s'authentifier à la même base Azure SQL avec une seule identité, et cette identité doit survivre à la suppression de n'importe quelle Function. Quelle identité utiliser ?"},
options:[
 {en:"A user-assigned managed identity, assigned to all three Functions", fr:"Une user-assigned managed identity, assignée aux trois Functions"},
 {en:"A system-assigned managed identity on each Function", fr:"Une system-assigned managed identity sur chaque Function"},
 {en:"An app registration with a shared client secret", fr:"Un app registration avec un client secret partagé"},
 {en:"The Azure SQL administrator account", fr:"Le compte administrateur Azure SQL"}],
correct:[0],
explanation:{en:"A is correct: a user-assigned managed identity is a standalone Azure resource with its own lifecycle — you assign it to many resources, grant permissions once, and deleting a Function does not delete the identity.\nB is wrong: a system-assigned identity is created with and deleted with its resource, and each Function would get a different principal, so you would grant SQL permissions three times.\nC is wrong: a shared secret must be stored, rotated and can leak — the whole point of managed identities is to avoid credentials.\nD is wrong: using an administrator account for application access violates least privilege.",
fr:"A est correct : une user-assigned managed identity est une ressource Azure autonome avec son propre cycle de vie — tu l'assignes à plusieurs ressources, tu accordes les permissions une fois, et supprimer une Function ne supprime pas l'identité.\nB est faux : une identité system-assigned est créée et supprimée avec sa ressource, et chaque Function aurait un principal différent, donc il faudrait accorder les droits SQL trois fois.\nC est faux : un secret partagé doit être stocké, renouvelé et peut fuiter — l'intérêt des managed identities est précisément d'éviter les identifiants.\nD est faux : utiliser un compte administrateur pour l'accès applicatif viole le moindre privilège."}
},
{
id:"d3-022", domain:3, topic:"Managed identity least privilege",
q:{en:"An Azure VM's managed identity must read secrets from a Key Vault that uses the Azure RBAC permission model. Which role assignment follows least privilege?",
   fr:"La managed identity d'une VM Azure doit lire des secrets dans un Key Vault utilisant le modèle de permissions Azure RBAC. Quelle attribution de rôle respecte le moindre privilège ?"},
options:[
 {en:"Key Vault Secrets User on the specific Key Vault", fr:"Key Vault Secrets User sur le Key Vault concerné"},
 {en:"Key Vault Administrator on the resource group", fr:"Key Vault Administrator sur le groupe de ressources"},
 {en:"Contributor on the subscription", fr:"Contributor sur l'abonnement"},
 {en:"Owner on the Key Vault", fr:"Owner sur le Key Vault"}],
correct:[0],
explanation:{en:"A is correct: Key Vault Secrets User grants read access to secret values only, scoped to that single vault — the minimum for the task.\nB is wrong: Key Vault Administrator can manage keys, secrets, certificates and permissions, and at resource-group scope it covers other vaults too.\nC is wrong: Contributor on a subscription is enormous over-provisioning (and notably still cannot read data plane secrets by itself, so it is both too broad and wrong).\nD is wrong: Owner adds full management and role-assignment rights.",
fr:"A est correct : Key Vault Secrets User n'accorde que la lecture des valeurs de secrets, sur ce seul coffre — le minimum pour la tâche.\nB est faux : Key Vault Administrator gère clés, secrets, certificats et permissions, et au niveau du groupe de ressources cela couvre aussi les autres coffres.\nC est faux : Contributor sur un abonnement est un surprovisionnement énorme (et ne permet d'ailleurs pas à lui seul de lire les secrets du plan de données, donc c'est à la fois trop large et inadapté).\nD est faux : Owner ajoute la gestion complète et le droit d'attribuer des rôles."}
},
{
id:"d3-023", domain:3, topic:"On-premises workload identity",
q:{en:"A batch job running on an on-premises Windows server must call Microsoft Graph unattended. Managed identities are not available. What is the most secure supported approach?",
   fr:"Un traitement batch tournant sur un serveur Windows on-prem doit appeler Microsoft Graph sans interaction. Les managed identities ne sont pas disponibles. Quelle est l'approche supportée la plus sûre ?"},
options:[
 {en:"Register an application and authenticate with a certificate credential, granting application permissions with admin consent", fr:"Enregistrer une application et s'authentifier avec un certificat, en accordant des permissions applicatives avec consentement admin"},
 {en:"Register an application and use a long-lived client secret stored in the script", fr:"Enregistrer une application et utiliser un client secret longue durée stocké dans le script"},
 {en:"Use a service account with a password and delegated permissions", fr:"Utiliser un compte de service avec mot de passe et des permissions déléguées"},
 {en:"Use a managed identity anyway via Azure Arc, which is unsupported", fr:"Utiliser quand même une managed identity via Azure Arc, ce qui n'est pas supporté"}],
correct:[0],
explanation:{en:"A is correct: managed identities only exist for Azure resources, so an on-prem daemon needs an app registration. A certificate credential is stronger than a secret (private key can be protected by the OS/TPM and is not a copyable string) and application permissions are the right model for unattended access.\nB is wrong: secrets in scripts leak and expire; this is the pattern to avoid.\nC is wrong: a password-based service account with delegated permissions cannot run truly unattended and is a classic weak point.\nD is wrong: Azure Arc-enabled servers DO support managed identities, so the statement is factually incorrect — but the scenario says managed identities are unavailable, so the app-plus-certificate answer stands.",
fr:"A est correct : les managed identities n'existent que pour les ressources Azure, donc un démon on-prem a besoin d'un app registration. Un certificat est plus robuste qu'un secret (la clé privée peut être protégée par l'OS/TPM et n'est pas une chaîne copiable) et les permissions applicatives sont le bon modèle pour un accès sans interaction.\nB est faux : les secrets dans les scripts fuitent et expirent ; c'est le schéma à éviter.\nC est faux : un compte de service avec mot de passe et permissions déléguées ne peut pas fonctionner vraiment sans interaction et constitue un point faible classique.\nD est faux : les serveurs Azure Arc supportent BIEN les managed identities, donc l'affirmation est fausse — mais l'énoncé pose que les managed identities sont indisponibles, donc la réponse app + certificat reste la bonne."}
},
{
id:"d3-024", domain:3, topic:"Credential expiry monitoring",
q:{en:"Two production integrations broke last quarter because client secrets expired unnoticed. Which combination best prevents a repeat? (Select TWO)",
   fr:"Deux intégrations de production sont tombées le trimestre dernier à cause de client secrets expirés sans que personne ne le remarque. Quelle combinaison évite le mieux la récidive ? (Choisis DEUX réponses)"},
options:[
 {en:"Replace secrets with certificate credentials or workload identity federation where possible", fr:"Remplacer les secrets par des certificats ou de la workload identity federation quand c'est possible"},
 {en:"Query Microsoft Graph for applications with credentials expiring soon and alert the owners", fr:"Interroger Microsoft Graph pour lister les applications dont les identifiants expirent bientôt et alerter les propriétaires"},
 {en:"Create secrets that never expire", fr:"Créer des secrets sans expiration"},
 {en:"Grant the applications the Global Administrator role so they keep working", fr:"Accorder le rôle Global Administrator aux applications pour qu'elles continuent de fonctionner"}],
correct:[0,1],
explanation:{en:"A and B are correct: federated credentials remove secrets entirely (no expiry to manage), certificates are stronger, and proactive reporting on passwordCredentials/keyCredentials end dates via Graph turns an outage into a planned rotation.\nC is wrong: non-expiring secrets are a standing compromise risk, and the portal caps secret lifetime for this reason.\nD is wrong: a role has nothing to do with credential expiry and would be a severe privilege escalation.",
fr:"A et B sont corrects : les identifiants fédérés éliminent les secrets (plus d'expiration à gérer), les certificats sont plus robustes, et un reporting proactif sur les dates de fin des passwordCredentials/keyCredentials via Graph transforme une panne en rotation planifiée.\nC est faux : des secrets sans expiration sont un risque de compromission permanent, et le portail limite leur durée pour cette raison.\nD est faux : un rôle n'a rien à voir avec l'expiration d'un identifiant et constituerait une élévation de privilèges grave."}
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
 {en:"The admin consent workflow, designating reviewers who receive, approve or deny requests inside Entra ID", fr:"Le workflow de consentement administrateur, en désignant des relecteurs qui reçoivent, approuvent ou refusent les demandes dans Entra ID"},
 {en:"Allow user consent for all applications again", fr:"Réautoriser le consentement utilisateur pour toutes les applications"},
 {en:"Grant every user the Cloud Application Administrator role", fr:"Accorder à chaque utilisateur le rôle Cloud Application Administrator"},
 {en:"Create an access package for each application", fr:"Créer un access package pour chaque application"}],
correct:[0],
explanation:{en:"A is correct: the admin consent workflow gives users a Request approval button, routes the request to designated reviewers with notifications and an expiry, and records the decision — governance without a ticket queue.\nB is wrong: that reintroduces the consent-phishing risk you just closed.\nC is wrong: handing an app-management role to everyone is a severe privilege escalation.\nD is wrong: access packages grant users access to existing resources; they do not grant an application its API permissions.",
fr:"A est correct : le workflow de consentement admin donne aux utilisateurs un bouton Demander l'approbation, route la demande vers des relecteurs désignés avec notifications et expiration, et enregistre la décision — de la gouvernance sans file de tickets.\nB est faux : cela réintroduit le risque de consent phishing que tu viens de fermer.\nC est faux : donner un rôle de gestion d'applications à tout le monde est une élévation de privilèges grave.\nD est faux : les access packages donnent accès à des ressources existantes ; ils n'accordent pas ses permissions d'API à une application."}
},
{
id:"d3-027", domain:3, topic:"User consent settings",
q:{en:"You want users to be able to consent to low-risk permissions, but only for applications from verified publishers. What do you configure?",
   fr:"Tu veux que les utilisateurs puissent consentir à des permissions peu risquées, mais uniquement pour des applications d'éditeurs vérifiés. Que configures-tu ?"},
options:[
 {en:"User consent settings: allow user consent for apps from verified publishers, for selected permissions, using permission classifications to define the low-impact set", fr:"Les user consent settings : autoriser le consentement utilisateur pour les apps d'éditeurs vérifiés, pour des permissions sélectionnées, en utilisant les permission classifications pour définir l'ensemble à faible impact"},
 {en:"Allow user consent for all apps and all permissions", fr:"Autoriser le consentement utilisateur pour toutes les apps et toutes les permissions"},
 {en:"Disable user consent entirely", fr:"Désactiver totalement le consentement utilisateur"},
 {en:"Require MFA before consenting", fr:"Exiger le MFA avant de consentir"}],
correct:[0],
explanation:{en:"A is correct: Entra ID offers three consent postures, and the middle one restricts user consent to verified-publisher apps and to permissions you have classified as low impact — the balance the requirement describes.\nB is wrong: that is the permissive posture that enables consent phishing.\nC is wrong: fully disabling consent contradicts the requirement and pushes all requests to admins.\nD is wrong: MFA proves who is consenting, not that the app or permission is safe.",
fr:"A est correct : Entra ID propose trois postures de consentement, et l'intermédiaire restreint le consentement utilisateur aux apps d'éditeurs vérifiés et aux permissions que tu as classées comme à faible impact — l'équilibre décrit par le besoin.\nB est faux : c'est la posture permissive qui permet le consent phishing.\nC est faux : désactiver totalement le consentement contredit le besoin et renvoie toutes les demandes aux admins.\nD est faux : le MFA prouve qui consent, pas que l'app ou la permission est sûre."}
},
{
id:"d3-028", domain:3, topic:"Illicit consent grant response",
q:{en:"An attacker phished users into consenting to a malicious app that now reads their mail. What are the correct immediate response actions? (Select TWO)",
   fr:"Un attaquant a hameçonné des utilisateurs pour qu'ils consentent à une app malveillante qui lit maintenant leurs mails. Quelles sont les bonnes actions de réponse immédiate ? (Choisis DEUX réponses)"},
options:[
 {en:"Disable user sign-in for the service principal (or delete it) to stop the app immediately", fr:"Désactiver la connexion des utilisateurs pour le service principal (ou le supprimer) afin d'arrêter l'app immédiatement"},
 {en:"Revoke the OAuth2 permission grants and the affected users' refresh tokens", fr:"Révoquer les OAuth2 permission grants et les refresh tokens des utilisateurs concernés"},
 {en:"Reset the users' passwords, which alone invalidates the app's access tokens", fr:"Réinitialiser les mots de passe des utilisateurs, ce qui invalide à lui seul les jetons d'accès de l'app"},
 {en:"Wait for the tokens to expire naturally", fr:"Attendre l'expiration naturelle des jetons"}],
correct:[0,1],
explanation:{en:"A and B are correct: killing the service principal stops new token issuance, and removing the delegated permission grants plus revoking refresh tokens cuts the existing access. Afterwards, tighten consent settings and hunt in the audit logs for other consents.\nC is wrong: a password reset does not by itself revoke an app's existing OAuth grant — the consent survives, which is what makes this attack so effective.\nD is wrong: waiting leaves the attacker reading mail, and refresh tokens can be renewed indefinitely.",
fr:"A et B sont corrects : neutraliser le service principal stoppe l'émission de nouveaux jetons, et supprimer les permissions déléguées accordées plus révoquer les refresh tokens coupe l'accès existant. Ensuite, durcis les réglages de consentement et cherche dans les journaux d'audit d'autres consentements.\nC est faux : une réinitialisation de mot de passe ne révoque pas à elle seule l'OAuth grant existant d'une app — le consentement survit, et c'est ce qui rend cette attaque si efficace.\nD est faux : attendre laisse l'attaquant lire les mails, et les refresh tokens peuvent être renouvelés indéfiniment."}
},
{
id:"d3-029", domain:3, topic:"App Proxy connector groups",
q:{en:"You publish internal apps with Application Proxy for offices in Paris and Singapore. Users complain about latency because traffic is routed through the wrong region. What should you configure?",
   fr:"Tu publies des applications internes avec Application Proxy pour les bureaux de Paris et Singapour. Les utilisateurs se plaignent de latence car le trafic passe par la mauvaise région. Que dois-tu configurer ?"},
options:[
 {en:"Separate connector groups per region, assign each application to the group closest to its backend, and set each group's region", fr:"Des connector groups distincts par région, assigner chaque application au groupe le plus proche de son backend, et définir la région de chaque groupe"},
 {en:"Install more connectors in a single default group", fr:"Installer plus de connecteurs dans un unique groupe par défaut"},
 {en:"Switch pre-authentication to passthrough", fr:"Passer la pré-authentification en passthrough"},
 {en:"Use a named location per office", fr:"Utiliser une named location par bureau"}],
correct:[0],
explanation:{en:"A is correct: connector groups segment connectors by network location or region, each application is served by one group, and setting the group's region makes the service use the nearest Azure region — the standard answer for latency and network segmentation.\nB is wrong: more connectors in one group does not control which region serves which app.\nC is wrong: pre-authentication mode affects security, not routing, and passthrough disables Conditional Access.\nD is wrong: named locations are Conditional Access conditions, not routing.",
fr:"A est correct : les connector groups segmentent les connecteurs par emplacement réseau ou région, chaque application est servie par un groupe, et définir la région du groupe fait utiliser la région Azure la plus proche — la réponse standard pour la latence et la segmentation réseau.\nB est faux : plus de connecteurs dans un seul groupe ne contrôle pas quelle région sert quelle app.\nC est faux : le mode de pré-authentification touche la sécurité, pas le routage, et le passthrough désactive l'accès conditionnel.\nD est faux : les named locations sont des conditions d'accès conditionnel, pas du routage."}
},
{
id:"d3-030", domain:3, topic:"App Proxy pre-authentication",
q:{en:"A team asks you to publish an internal app through Application Proxy with Passthrough pre-authentication. What is the main security consequence you must raise?",
   fr:"Une équipe te demande de publier une application interne via Application Proxy avec la pré-authentification Passthrough. Quelle est la principale conséquence de sécurité que tu dois signaler ?"},
options:[
 {en:"Entra ID does not authenticate the request, so Conditional Access, MFA and single sign-on do not apply and the app is exposed to anonymous internet traffic", fr:"Entra ID n'authentifie pas la requête, donc l'accès conditionnel, le MFA et le SSO ne s'appliquent pas et l'app est exposée au trafic internet anonyme"},
 {en:"The app will be slower but equally protected", fr:"L'app sera plus lente mais tout aussi protégée"},
 {en:"Passthrough requires the users to be guests", fr:"Le passthrough exige que les utilisateurs soient des guests"},
 {en:"Passthrough disables the connector's outbound-only communication", fr:"Le passthrough désactive la communication uniquement sortante du connecteur"}],
correct:[0],
explanation:{en:"A is correct: with Entra ID pre-authentication the service authenticates first, which is what enables Conditional Access, MFA and SSO. Passthrough forwards the request untouched, so those protections are bypassed and only the app's own authentication stands between the internet and the backend.\nB is wrong: the protection level is materially lower, not equal.\nC is wrong: passthrough has nothing to do with UserType.\nD is wrong: the connector always communicates outbound only; passthrough does not change that.",
fr:"A est correct : avec la pré-authentification Entra ID, le service authentifie d'abord, ce qui permet l'accès conditionnel, le MFA et le SSO. Le passthrough transmet la requête telle quelle, donc ces protections sont contournées et seule l'authentification propre de l'app se dresse entre internet et le backend.\nB est faux : le niveau de protection est nettement plus faible, pas équivalent.\nC est faux : le passthrough n'a rien à voir avec le UserType.\nD est faux : le connecteur communique toujours uniquement en sortant ; le passthrough n'y change rien."}
},
{
id:"d3-031", domain:3, topic:"App Proxy SSO methods",
q:{en:"You publish a legacy on-premises web application that authenticates users with Integrated Windows Authentication. Users must get single sign-on through Application Proxy. What do you configure?",
   fr:"Tu publies une application web on-prem historique qui authentifie les utilisateurs par Integrated Windows Authentication. Les utilisateurs doivent bénéficier du SSO via Application Proxy. Que configures-tu ?"},
options:[
 {en:"Single sign-on mode \"Integrated Windows Authentication\", with Kerberos constrained delegation for the connector's computer account and the app's SPN", fr:"Le mode SSO « Integrated Windows Authentication », avec une délégation Kerberos contrainte pour le compte ordinateur du connecteur et le SPN de l'app"},
 {en:"SAML-based single sign-on", fr:"Le SSO basé sur SAML"},
 {en:"Password-based single sign-on", fr:"Le SSO basé sur mot de passe"},
 {en:"Header-based single sign-on, which is built in with no extra component", fr:"Le SSO basé sur les en-têtes, intégré sans composant supplémentaire"}],
correct:[0],
explanation:{en:"A is correct: for Kerberos/IWA backends, the connector impersonates the user using Kerberos constrained delegation, so you must configure KCD on the connector host and give the app its SPN.\nB is wrong: the legacy app does not speak SAML — that is the point of publishing it this way.\nC is wrong: password-based SSO replays stored credentials into a form and is a fallback for apps with HTML sign-in forms.\nD is wrong: header-based SSO requires a third-party component (PingAccess) and suits apps that consume HTTP headers, not Kerberos.",
fr:"A est correct : pour un backend Kerberos/IWA, le connecteur impersonne l'utilisateur via la délégation Kerberos contrainte, il faut donc configurer la KCD sur l'hôte du connecteur et donner son SPN à l'app.\nB est faux : l'app historique ne parle pas SAML — c'est justement pourquoi on la publie ainsi.\nC est faux : le SSO par mot de passe rejoue des identifiants stockés dans un formulaire, c'est un repli pour les apps à formulaire HTML.\nD est faux : le SSO par en-têtes nécessite un composant tiers (PingAccess) et convient aux apps qui consomment des en-têtes HTTP, pas Kerberos."}
},
{
id:"d3-032", domain:3, topic:"SAML claims customization",
q:{en:"A SAML application requires the user's employee ID in a claim named http://schemas.contoso.com/empid, and its value must be the employeeId attribute without the domain part. Where do you configure this?",
   fr:"Une application SAML exige l'identifiant employé dans un claim nommé http://schemas.contoso.com/empid, avec la valeur de l'attribut employeeId sans la partie domaine. Où configures-tu cela ?"},
options:[
 {en:"In the enterprise application's Single sign-on blade, under Attributes & Claims, adding a claim with the required name and a transformation if needed", fr:"Dans le panneau Single sign-on de l'application d'entreprise, sous Attributs & claims, en ajoutant un claim avec le nom requis et une transformation si nécessaire"},
 {en:"In the app registration's Token configuration, which only affects OIDC tokens", fr:"Dans la Token configuration de l'app registration, qui ne concerne que les jetons OIDC"},
 {en:"In Entra Connect attribute mapping", fr:"Dans le mapping d'attributs d'Entra Connect"},
 {en:"In a Conditional Access authentication context", fr:"Dans un authentication context d'accès conditionnel"}],
correct:[0],
explanation:{en:"A is correct: Attributes & Claims is where you name claims, choose the source attribute and apply transformations such as ExtractMailPrefix or Join for SAML tokens.\nB is wrong: token configuration adds optional claims to OIDC/OAuth tokens, not SAML assertions.\nC is wrong: Connect controls what is synced into the directory, not what a SAML app receives.\nD is wrong: authentication context labels resources for CA policies; it emits no application claims.",
fr:"A est correct : Attributs & claims est l'endroit où tu nommes les claims, choisis l'attribut source et appliques des transformations comme ExtractMailPrefix ou Join pour les jetons SAML.\nB est faux : la token configuration ajoute des claims optionnels aux jetons OIDC/OAuth, pas aux assertions SAML.\nC est faux : Connect contrôle ce qui est synchronisé dans l'annuaire, pas ce que reçoit une app SAML.\nD est faux : l'authentication context étiquette des ressources pour les stratégies CA ; il n'émet aucun claim applicatif."}
},
{
id:"d3-033", domain:3, topic:"SAML certificate rollover",
q:{en:"The SAML signing certificate of a business-critical application expires in 20 days. How do you roll it over with no outage?",
   fr:"Le certificat de signature SAML d'une application critique expire dans 20 jours. Comment le renouveler sans interruption ?"},
options:[
 {en:"Create a new certificate in the app's SAML signing section, share the new metadata or certificate with the app owner, then make the new certificate active", fr:"Créer un nouveau certificat dans la section de signature SAML de l'app, transmettre les nouvelles métadonnées ou le certificat au propriétaire de l'app, puis activer le nouveau certificat"},
 {en:"Delete the expiring certificate and let Entra ID generate a replacement automatically", fr:"Supprimer le certificat qui expire et laisser Entra ID en générer un automatiquement"},
 {en:"Renew the app registration's client secret", fr:"Renouveler le client secret de l'app registration"},
 {en:"Ask users to clear their browser cache on the expiry date", fr:"Demander aux utilisateurs de vider leur cache navigateur le jour de l'expiration"}],
correct:[0],
explanation:{en:"A is correct: Entra ID lets an application hold multiple signing certificates with one active. You create the new one, give the service provider the new certificate or federation metadata so it trusts it, then activate — order matters, because activating before the SP trusts the new key breaks sign-in.\nB is wrong: deleting the certificate in use causes an immediate outage.\nC is wrong: client secrets are for OAuth/OIDC confidential clients, not SAML signing.\nD is wrong: caching is irrelevant to certificate trust.",
fr:"A est correct : Entra ID permet à une application de détenir plusieurs certificats de signature dont un actif. Tu crées le nouveau, tu fournis au service provider le certificat ou les métadonnées de fédération pour qu'il lui fasse confiance, puis tu l'actives — l'ordre compte, car activer avant que le SP ne fasse confiance à la nouvelle clé casse la connexion.\nB est faux : supprimer le certificat en cours d'usage provoque une interruption immédiate.\nC est faux : les client secrets concernent les clients confidentiels OAuth/OIDC, pas la signature SAML.\nD est faux : le cache n'a rien à voir avec la confiance dans un certificat."}
},
{
id:"d3-034", domain:3, topic:"SCIM scoping filters",
q:{en:"An HR SaaS app is provisioned via SCIM from Entra ID, but only users whose department is Finance should be created there, even though the app is assigned to a broad group. What do you configure?",
   fr:"Une app SaaS RH est provisionnée par SCIM depuis Entra ID, mais seuls les utilisateurs dont le département est Finance doivent y être créés, même si l'app est assignée à un groupe large. Que configures-tu ?"},
options:[
 {en:"A scoping filter in the provisioning configuration, matching department equals Finance", fr:"Un scoping filter dans la configuration de provisioning, avec department égal à Finance"},
 {en:"A dynamic group and remove all assignments", fr:"Un groupe dynamique en supprimant toutes les assignations"},
 {en:"An attribute mapping with a Join transformation", fr:"Un mapping d'attributs avec une transformation Join"},
 {en:"A Conditional Access policy restricted to Finance", fr:"Une stratégie d'accès conditionnel restreinte à Finance"}],
correct:[0],
explanation:{en:"A is correct: scoping filters evaluate attribute conditions on top of assignment, so only in-scope users are provisioned — exactly the stated requirement.\nB is wrong: a dynamic group also works in some designs, but the question keeps the broad assignment, so scoping is the intended answer and the more granular tool.\nC is wrong: mappings transform values of provisioned attributes, they do not decide who is provisioned.\nD is wrong: Conditional Access governs sign-in, not provisioning.",
fr:"A est correct : les scoping filters évaluent des conditions d'attributs par-dessus l'assignation, donc seuls les utilisateurs dans la portée sont provisionnés — exactement le besoin exprimé.\nB est faux : un groupe dynamique fonctionne dans certaines conceptions, mais l'énoncé conserve l'assignation large, donc le scoping est la réponse visée et l'outil le plus granulaire.\nC est faux : les mappings transforment les valeurs des attributs provisionnés, ils ne décident pas qui est provisionné.\nD est faux : l'accès conditionnel gouverne la connexion, pas le provisioning."}
},
{
id:"d3-035", domain:3, topic:"Provisioning troubleshooting",
q:{en:"After changing a SCIM attribute mapping, you must verify the result for one specific user immediately rather than waiting for the 40-minute provisioning cycle. What do you use?",
   fr:"Après avoir modifié un mapping d'attributs SCIM, tu dois vérifier le résultat pour un utilisateur précis immédiatement, sans attendre le cycle de provisioning de 40 minutes. Qu'utilises-tu ?"},
options:[
 {en:"Provision on demand, then read the step-by-step result and the provisioning logs", fr:"Le provisioning à la demande (provision on demand), puis lire le résultat étape par étape et les journaux de provisioning"},
 {en:"Restart provisioning, which resyncs everyone from scratch", fr:"Redémarrer le provisioning, ce qui resynchronise tout le monde de zéro"},
 {en:"Delete and recreate the enterprise application", fr:"Supprimer et recréer l'application d'entreprise"},
 {en:"Check the Entra ID audit logs", fr:"Consulter les journaux d'audit d'Entra ID"}],
correct:[0],
explanation:{en:"A is correct: provision on demand targets a single user or group in seconds and shows each step — import, matching, scoping decision, exported attributes — which is the fastest way to validate a mapping change.\nB is wrong: restarting provisioning triggers a full initial cycle for all users, which is slow and can be disruptive; it is reserved for genuine resets.\nC is wrong: recreating the app destroys configuration and assignments.\nD is wrong: provisioning detail lives in the provisioning logs, not the audit logs.",
fr:"A est correct : le provisioning à la demande cible un seul utilisateur ou groupe en quelques secondes et montre chaque étape — import, appariement, décision de scoping, attributs exportés — c'est la façon la plus rapide de valider un changement de mapping.\nB est faux : redémarrer le provisioning déclenche un cycle initial complet pour tous les utilisateurs, lent et potentiellement perturbant ; réservé aux vraies réinitialisations.\nC est faux : recréer l'app détruit la configuration et les assignations.\nD est faux : le détail du provisioning se trouve dans les journaux de provisioning, pas d'audit."}
},
{
id:"d3-036", domain:3, topic:"Assignment required",
q:{en:"An enterprise application appears in every user's My Apps portal and anyone in the tenant can sign into it, although you only assigned two groups. What is the cause?",
   fr:"Une application d'entreprise apparaît dans le portail Mes applications de tous les utilisateurs et n'importe qui dans le tenant peut s'y connecter, alors que tu n'as assigné que deux groupes. Quelle est la cause ?"},
options:[
 {en:"\"Assignment required\" is set to No, so any user in the tenant can authenticate to the app", fr:"« Attribution requise » est sur Non, donc tout utilisateur du tenant peut s'authentifier à l'application"},
 {en:"The two groups are dynamic and include everyone", fr:"Les deux groupes sont dynamiques et incluent tout le monde"},
 {en:"The app has the Global Reader role assigned", fr:"L'application a le rôle Global Reader assigné"},
 {en:"Conditional Access is not configured for the app", fr:"L'accès conditionnel n'est pas configuré pour l'application"}],
correct:[0],
explanation:{en:"A is correct: assignment required is the switch that decides whether user assignment is enforced. With it off, assignments only control visibility in My Apps and any tenant user can obtain a token for the app.\nB is wrong: possible in theory but the symptom described is the textbook effect of the assignment toggle.\nC is wrong: directory roles granted to an app govern what the app can do in the directory, not who may sign into it.\nD is wrong: missing CA reduces conditions on access, but with assignment required set to Yes non-assigned users would still be refused.",
fr:"A est correct : « attribution requise » est l'interrupteur qui décide si l'assignation d'utilisateurs est imposée. Désactivé, les assignations ne contrôlent que la visibilité dans Mes applications et tout utilisateur du tenant peut obtenir un jeton pour l'app.\nB est faux : théoriquement possible, mais le symptôme décrit est l'effet classique de l'interrupteur d'attribution.\nC est faux : les rôles d'annuaire accordés à une app gouvernent ce qu'elle peut faire dans l'annuaire, pas qui peut s'y connecter.\nD est faux : l'absence de CA réduit les conditions d'accès, mais avec « attribution requise » sur Oui les utilisateurs non assignés seraient tout de même refusés."}
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
 {en:"Define app roles on the application, assign users or groups to those roles, and have the API authorize on the roles claim", fr:"Définir des app roles sur l'application, assigner des utilisateurs ou groupes à ces rôles, et faire autoriser l'API sur le claim roles"},
 {en:"Store the role list in the application's own database", fr:"Stocker la liste des rôles dans la base de données de l'application"},
 {en:"Create two Entra directory roles named Reader and Approver", fr:"Créer deux rôles d'annuaire Entra nommés Reader et Approver"},
 {en:"Use two separate app registrations, one per role", fr:"Utiliser deux app registrations distincts, un par rôle"}],
correct:[0],
explanation:{en:"A is correct: app roles are declared in the app manifest, assigned through the enterprise application's Users and groups blade, emitted in the roles claim, and — being real assignments — they can be governed with access reviews and access packages.\nB is wrong: an internal table is invisible to Entra governance and cannot be reviewed centrally.\nC is wrong: directory roles grant permissions over Entra ID itself, not over your API.\nD is wrong: duplicating registrations doubles configuration and breaks a single token audience.",
fr:"A est correct : les app roles sont déclarés dans le manifeste de l'app, attribués via le panneau Utilisateurs et groupes de l'application d'entreprise, émis dans le claim roles, et — étant de véritables attributions — ils peuvent être gouvernés par des access reviews et des access packages.\nB est faux : une table interne est invisible pour la gouvernance Entra et non auditable centralement.\nC est faux : les rôles d'annuaire donnent des permissions sur Entra ID lui-même, pas sur ton API.\nD est faux : dupliquer les registrations double la configuration et casse l'unicité de l'audience du jeton."}
},
{
id:"d3-039", domain:3, topic:"Workload identity federation",
q:{en:"A GitHub Actions workflow must deploy to Azure without any stored secret in the repository. What do you configure?",
   fr:"Un workflow GitHub Actions doit déployer vers Azure sans aucun secret stocké dans le dépôt. Que configures-tu ?"},
options:[
 {en:"A federated credential on the app registration, trusting the GitHub OIDC issuer with a subject that matches the repo, branch or environment", fr:"Un federated credential sur l'app registration, faisant confiance à l'émetteur OIDC de GitHub avec un subject correspondant au dépôt, à la branche ou à l'environnement"},
 {en:"A client secret stored in GitHub Actions secrets", fr:"Un client secret stocké dans les secrets GitHub Actions"},
 {en:"A user-assigned managed identity referenced by the workflow", fr:"Une user-assigned managed identity référencée par le workflow"},
 {en:"A service account with a password rotated monthly", fr:"Un compte de service avec un mot de passe renouvelé chaque mois"}],
correct:[0],
explanation:{en:"A is correct: workload identity federation lets an external OIDC provider's token be exchanged for an Entra token — no secret exists to leak. Scoping the subject to a specific repository and branch or environment is what prevents another repo from impersonating you.\nB is wrong: it still is a secret, which the requirement forbids.\nC is wrong: managed identities are for Azure-hosted workloads; GitHub runners are outside Azure (though a user-assigned identity CAN carry a federated credential, the answer must be the federation itself).\nD is wrong: passwords are exactly what federation removes.",
fr:"A est correct : la workload identity federation permet d'échanger le jeton d'un fournisseur OIDC externe contre un jeton Entra — aucun secret n'existe donc ne peut fuiter. Restreindre le subject à un dépôt et une branche ou un environnement précis est ce qui empêche un autre dépôt de t'usurper.\nB est faux : cela reste un secret, ce que le besoin interdit.\nC est faux : les managed identities concernent les charges hébergées dans Azure ; les runners GitHub sont hors d'Azure (une identité user-assigned PEUT porter un federated credential, mais la réponse est la fédération elle-même).\nD est faux : les mots de passe sont précisément ce que la fédération supprime."}
},
{
id:"d3-040", domain:3, topic:"Service principal sign-in logs",
q:{en:"You must find out which application is still using a credential you plan to delete, and when it last authenticated. Where do you look?",
   fr:"Tu dois découvrir quelle application utilise encore un identifiant que tu prévois de supprimer, et quand elle s'est authentifiée pour la dernière fois. Où regardes-tu ?"},
options:[
 {en:"The Service principal sign-ins tab of the sign-in logs, filtered by application ID", fr:"L'onglet Connexions de service principal des journaux de connexion, filtré par ID d'application"},
 {en:"The interactive user sign-ins tab", fr:"L'onglet des connexions interactives d'utilisateurs"},
 {en:"The provisioning logs", fr:"Les journaux de provisioning"},
 {en:"The Entra Connect Health portal", fr:"Le portail Entra Connect Health"}],
correct:[0],
explanation:{en:"A is correct: sign-in logs are split into interactive user, non-interactive user, service principal and managed identity sign-ins. Service principal sign-ins show app-only authentications, including which credential and resource were used.\nB is wrong: app-only authentication involves no user, so it never appears there.\nC is wrong: provisioning logs record SCIM object changes.\nD is wrong: Connect Health monitors the hybrid sync and AD FS infrastructure.",
fr:"A est correct : les journaux de connexion sont scindés en connexions utilisateur interactives, non interactives, de service principal et de managed identity. Les connexions de service principal montrent les authentifications app-only, y compris l'identifiant et la ressource utilisés.\nB est faux : une authentification app-only n'implique aucun utilisateur, elle n'y apparaît donc jamais.\nC est faux : les journaux de provisioning enregistrent les changements d'objets SCIM.\nD est faux : Connect Health surveille l'infrastructure de sync hybride et AD FS."}
},
{
id:"d3-041", domain:3, topic:"CA App Control session policy",
q:{en:"Users on unmanaged devices may read documents in a SaaS app but must not download them. Which combination implements this?",
   fr:"Les utilisateurs sur appareils non gérés peuvent lire des documents dans une app SaaS mais ne doivent pas les télécharger. Quelle combinaison implémente cela ?"},
options:[
 {en:"A Conditional Access policy with the session control \"Use Conditional Access App Control\", plus a Defender for Cloud Apps session policy that blocks downloads", fr:"Une stratégie d'accès conditionnel avec le contrôle de session « Utiliser le contrôle d'application par accès conditionnel », plus une session policy Defender for Cloud Apps qui bloque les téléchargements"},
 {en:"A Conditional Access policy that blocks access from unmanaged devices", fr:"Une stratégie d'accès conditionnel qui bloque l'accès depuis les appareils non gérés"},
 {en:"An Intune app protection policy on the SaaS app", fr:"Une stratégie de protection d'application Intune sur l'app SaaS"},
 {en:"A Defender for Cloud Apps access policy in monitor mode", fr:"Une access policy Defender for Cloud Apps en mode surveillance"}],
correct:[0],
explanation:{en:"A is correct: Conditional Access routes the session to the Defender for Cloud Apps reverse proxy, and a session policy then applies in-session controls such as block download, block upload, or protect on download with a sensitivity label.\nB is wrong: blocking removes read access, which the requirement wants to keep.\nC is wrong: Intune app protection covers managed mobile apps, not a browser session to a SaaS site.\nD is wrong: monitor mode only reports, and access policies allow or block a session rather than controlling actions inside it.",
fr:"A est correct : l'accès conditionnel route la session vers le reverse proxy Defender for Cloud Apps, et une session policy applique ensuite des contrôles en session comme bloquer le téléchargement, bloquer l'envoi, ou protéger au téléchargement avec une étiquette de confidentialité.\nB est faux : bloquer supprime l'accès en lecture, que le besoin veut conserver.\nC est faux : la protection d'application Intune couvre les apps mobiles gérées, pas une session navigateur vers un site SaaS.\nD est faux : le mode surveillance ne fait que rapporter, et les access policies autorisent ou bloquent une session au lieu de contrôler les actions à l'intérieur."}
},
{
id:"d3-042", domain:3, topic:"Verified publisher",
q:{en:"What does a verified publisher badge on a multi-tenant application tell an administrator, and how can it be used as a control?",
   fr:"Qu'indique le badge d'éditeur vérifié sur une application multi-tenant à un administrateur, et comment l'utiliser comme contrôle ?"},
options:[
 {en:"It proves the publisher's identity was verified by Microsoft, and user consent settings can be restricted to apps from verified publishers", fr:"Il prouve que l'identité de l'éditeur a été vérifiée par Microsoft, et les réglages de consentement utilisateur peuvent être restreints aux apps d'éditeurs vérifiés"},
 {en:"It guarantees the application has no security vulnerabilities", fr:"Il garantit que l'application n'a aucune vulnérabilité de sécurité"},
 {en:"It means Microsoft operates the application", fr:"Il signifie que Microsoft exploite l'application"},
 {en:"It automatically grants the app admin consent", fr:"Il accorde automatiquement le consentement admin à l'app"}],
correct:[0],
explanation:{en:"A is correct: verified publisher confirms the developer's identity through a verified partner account, which is an authenticity signal — and Entra ID lets you allow user consent only for such apps.\nB is wrong: identity verification says nothing about code quality or vulnerabilities.\nC is wrong: the publisher remains a third party.\nD is wrong: consent still has to be granted; verification only makes it eligible under a stricter consent policy.",
fr:"A est correct : l'éditeur vérifié confirme l'identité du développeur via un compte partenaire vérifié, ce qui est un signal d'authenticité — et Entra ID permet de n'autoriser le consentement utilisateur qu'à ces apps.\nB est faux : vérifier une identité ne dit rien de la qualité du code ni des vulnérabilités.\nC est faux : l'éditeur reste un tiers.\nD est faux : le consentement doit toujours être accordé ; la vérification rend seulement l'app éligible sous une stratégie de consentement plus stricte."}
},
{
id:"d3-043", domain:3, topic:"App ownership",
q:{en:"A developer must be able to add redirect URIs and rotate credentials for one specific application, but must not manage any other application. What do you do?",
   fr:"Un développeur doit pouvoir ajouter des redirect URIs et renouveler les identifiants d'une application précise, sans pouvoir gérer aucune autre application. Que fais-tu ?"},
options:[
 {en:"Add the developer as an owner of that application registration", fr:"Ajouter le développeur comme propriétaire de cet app registration"},
 {en:"Assign the Cloud Application Administrator role", fr:"Assigner le rôle Cloud Application Administrator"},
 {en:"Assign the Application Administrator role", fr:"Assigner le rôle Application Administrator"},
 {en:"Assign the Application Developer role", fr:"Assigner le rôle Application Developer"}],
correct:[0],
explanation:{en:"A is correct: object ownership is the per-application delegation model — an owner manages that object and nothing else, which is least privilege here.\nB is wrong: Cloud Application Administrator manages ALL applications (except App Proxy).\nC is wrong: Application Administrator also manages all applications, including App Proxy.\nD is wrong: Application Developer lets someone register NEW applications; it does not grant management of an existing one they do not own.",
fr:"A est correct : la propriété d'objet est le modèle de délégation par application — un propriétaire gère cet objet et rien d'autre, c'est le moindre privilège ici.\nB est faux : Cloud Application Administrator gère TOUTES les applications (sauf App Proxy).\nC est faux : Application Administrator gère aussi toutes les applications, y compris App Proxy.\nD est faux : Application Developer permet d'enregistrer de NOUVELLES applications ; il n'accorde pas la gestion d'une application existante dont on n'est pas propriétaire."}
},
{
id:"d3-044", domain:3, topic:"Sign-in audience",
q:{en:"Your ISV must let customers in other Entra tenants sign into its SaaS product, but personal Microsoft accounts must be refused. What do you set?",
   fr:"Ton éditeur doit permettre à des clients d'autres tenants Entra de se connecter à son produit SaaS, mais les comptes Microsoft personnels doivent être refusés. Que configures-tu ?"},
options:[
 {en:"The supported account types (signInAudience) to \"Accounts in any organizational directory\" (AzureADMultipleOrgs)", fr:"Les types de comptes supportés (signInAudience) sur « Comptes dans n'importe quel annuaire organisationnel » (AzureADMultipleOrgs)"},
 {en:"\"Accounts in this organizational directory only\" (AzureADMyOrg)", fr:"« Comptes de cet annuaire organisationnel uniquement » (AzureADMyOrg)"},
 {en:"\"Accounts in any organizational directory and personal Microsoft accounts\"", fr:"« Comptes dans n'importe quel annuaire organisationnel et comptes Microsoft personnels »"},
 {en:"A cross-tenant access setting for each customer tenant", fr:"Un cross-tenant access setting pour chaque tenant client"}],
correct:[0],
explanation:{en:"A is correct: AzureADMultipleOrgs makes the app multi-tenant for work/school accounts only, so a consenting admin in any Entra tenant can onboard while MSAs are excluded.\nB is wrong: single-tenant blocks all external customers.\nC is wrong: that explicitly allows the personal accounts you must refuse.\nD is wrong: cross-tenant access settings govern B2B collaboration and direct connect between tenants, not who may sign into your multi-tenant app, and per-customer configuration would not scale.",
fr:"A est correct : AzureADMultipleOrgs rend l'app multi-tenant pour les comptes professionnels ou scolaires uniquement, donc un admin consentant de n'importe quel tenant Entra peut l'adopter tandis que les comptes Microsoft sont exclus.\nB est faux : le mono-tenant bloque tous les clients externes.\nC est faux : cela autorise explicitement les comptes personnels que tu dois refuser.\nD est faux : les cross-tenant access settings gouvernent la collaboration B2B et le direct connect entre tenants, pas qui peut se connecter à ton app multi-tenant, et une configuration par client ne passerait pas à l'échelle."}
},
{
id:"d3-045", domain:3, topic:"Cloud Discovery",
q:{en:"You must produce a monthly report of unsanctioned cloud apps used by employees, based on real network traffic, without installing anything on the endpoints. What do you configure in Defender for Cloud Apps?",
   fr:"Tu dois produire un rapport mensuel des applications cloud non approuvées utilisées par les employés, basé sur le trafic réseau réel, sans rien installer sur les postes. Que configures-tu dans Defender for Cloud Apps ?"},
options:[
 {en:"Cloud Discovery with an automatic log upload from your firewalls or proxies via a log collector", fr:"Cloud Discovery avec un envoi automatique des journaux de tes pare-feux ou proxys via un log collector"},
 {en:"An app connector for each discovered application", fr:"Un app connector pour chaque application découverte"},
 {en:"A session policy in monitor mode", fr:"Une session policy en mode surveillance"},
 {en:"Entra ID sign-in logs filtered on unknown applications", fr:"Les journaux de connexion Entra ID filtrés sur les applications inconnues"}],
correct:[0],
explanation:{en:"A is correct: Cloud Discovery parses firewall/proxy logs — uploaded manually or continuously through a log collector — and produces shadow IT reports with risk scores, without any endpoint agent. (Defender for Endpoint integration is the alternative when you do have agents.)\nB is wrong: app connectors require API credentials for apps you already sanction and know about.\nC is wrong: session policies act on traffic routed through the proxy, which needs Conditional Access App Control and covers only targeted apps.\nD is wrong: Entra sign-in logs only show apps that authenticate against your tenant, missing most shadow IT.",
fr:"A est correct : Cloud Discovery analyse les journaux de pare-feu/proxy — téléversés manuellement ou en continu via un log collector — et produit des rapports de shadow IT avec scores de risque, sans agent sur les postes. (L'intégration Defender for Endpoint est l'alternative quand on a des agents.)\nB est faux : les app connectors nécessitent des identifiants d'API pour des apps déjà approuvées et connues.\nC est faux : les session policies agissent sur le trafic routé par le proxy, ce qui exige le Conditional Access App Control et ne couvre que les apps ciblées.\nD est faux : les journaux de connexion Entra ne montrent que les apps qui s'authentifient contre ton tenant, et manquent l'essentiel du shadow IT."}
}
];
