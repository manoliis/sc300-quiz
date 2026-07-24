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
}
];
