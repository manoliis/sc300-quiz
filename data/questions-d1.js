"use strict";
/* Domain 1 — Implement and manage user identities (20-25%) */
window.SC300_QUESTIONS_D1 = [
{
id:"d1-001", domain:1, topic:"Administrative units",
q:{en:"Contoso has offices in France and Germany. You must allow the France helpdesk team to reset passwords ONLY for users in the France office, following the principle of least privilege. What should you do?",
   fr:"Contoso a des bureaux en France et en Allemagne. Tu dois permettre au helpdesk France de réinitialiser les mots de passe UNIQUEMENT des utilisateurs du bureau France, en respectant le principe du moindre privilège. Que fais-tu ?"},
options:[
 {en:"Assign the Helpdesk Administrator role at tenant scope", fr:"Assigner le rôle Helpdesk Administrator au niveau du tenant"},
 {en:"Create an administrative unit containing France users and assign Helpdesk Administrator scoped to that AU", fr:"Créer une administrative unit contenant les utilisateurs France et assigner Helpdesk Administrator scopé sur cette AU"},
 {en:"Create a security group for France users and assign the Password Administrator role to the group", fr:"Créer un groupe de sécurité pour les utilisateurs France et assigner le rôle Password Administrator au groupe"},
 {en:"Assign the User Administrator role at tenant scope", fr:"Assigner le rôle User Administrator au niveau du tenant"}],
correct:[1],
explanation:{en:"B is correct: an administrative unit (AU) restricts the scope of a role assignment to only the users inside it — the France helpdesk can then reset passwords only for France users.\nA is wrong: tenant-scope Helpdesk Administrator could reset passwords for ALL users, violating least privilege.\nC is wrong: assigning a role to a group still grants it at tenant scope — the group defines WHO gets the role, not WHICH users it applies to.\nD is wrong: User Administrator at tenant scope is even broader (manages all users and groups).",
fr:"B est correct : une administrative unit (AU) restreint la portée d'une attribution de rôle aux seuls utilisateurs qu'elle contient — le helpdesk France ne peut réinitialiser que les mots de passe des utilisateurs France.\nA est faux : Helpdesk Administrator au niveau tenant permettrait de réinitialiser TOUS les utilisateurs, violation du moindre privilège.\nC est faux : assigner un rôle à un groupe le donne quand même au niveau tenant — le groupe définit QUI reçoit le rôle, pas sur QUELS utilisateurs il s'applique.\nD est faux : User Administrator au niveau tenant est encore plus large (gère tous les utilisateurs et groupes)."}
},
{
id:"d1-002", domain:1, topic:"Dynamic groups",
q:{en:"You need a group whose membership automatically includes all users whose department attribute is \"Sales\". Which membership rule should you use?",
   fr:"Tu as besoin d'un groupe dont l'appartenance inclut automatiquement tous les utilisateurs dont l'attribut department est « Sales ». Quelle règle d'appartenance utiliser ?"},
options:[
 {en:"user.department -eq \"Sales\"", fr:"user.department -eq \"Sales\""},
 {en:"user.department = \"Sales\"", fr:"user.department = \"Sales\""},
 {en:"department -contains \"Sales\"", fr:"department -contains \"Sales\""},
 {en:"user.department == \"Sales\"", fr:"user.department == \"Sales\""}],
correct:[0],
explanation:{en:"A is correct: dynamic membership rules use the syntax property operator value, e.g. user.department -eq \"Sales\". Operators are PowerShell-style: -eq, -ne, -contains, -startsWith, etc.\nB and D are wrong: = and == are not valid operators in dynamic membership rules.\nC is wrong: the property must be prefixed with the object type (user. or device.), and -contains checks substring collections, not exact equality.",
fr:"A est correct : les règles d'appartenance dynamique utilisent la syntaxe propriété opérateur valeur, ex : user.department -eq \"Sales\". Les opérateurs sont de style PowerShell : -eq, -ne, -contains, -startsWith, etc.\nB et D sont faux : = et == ne sont pas des opérateurs valides.\nC est faux : la propriété doit être préfixée par le type d'objet (user. ou device.), et -contains teste une sous-chaîne, pas l'égalité exacte."}
},
{
id:"d1-003", domain:1, topic:"Licensing",
q:{en:"You assign an Entra ID P1 license to a group using group-based licensing. One user in the group shows a licensing error. What is the most likely cause?",
   fr:"Tu assignes une licence Entra ID P1 à un groupe via le group-based licensing. Un utilisateur du groupe affiche une erreur de licence. Quelle est la cause la plus probable ?"},
options:[
 {en:"The user has no usage location configured", fr:"L'utilisateur n'a pas de « usage location » configurée"},
 {en:"The user is a guest account", fr:"L'utilisateur est un compte guest"},
 {en:"Group-based licensing requires an E5 license", fr:"Le group-based licensing nécessite une licence E5"},
 {en:"The group is a Microsoft 365 group", fr:"Le groupe est un groupe Microsoft 365"}],
correct:[0],
explanation:{en:"A is correct: license assignment requires a usage location on the user (some services are restricted by country). Missing usage location is the classic cause of group licensing errors.\nB is wrong: guests can be licensed too (though unusual, it does not automatically cause an error).\nC is wrong: group-based licensing requires Entra ID P1 or above — which is exactly what is being assigned; no E5 needed.\nD is wrong: both security groups and Microsoft 365 groups support group-based licensing.",
fr:"A est correct : l'attribution de licence exige une « usage location » sur l'utilisateur (certains services sont restreints par pays). Son absence est la cause classique des erreurs de licence par groupe.\nB est faux : les guests peuvent aussi être licenciés (inhabituel, mais pas une erreur automatique).\nC est faux : le group-based licensing nécessite Entra ID P1 ou supérieur — c'est justement ce qui est assigné ; pas besoin d'E5.\nD est faux : les groupes de sécurité ET les groupes Microsoft 365 supportent le licensing par groupe."}
},
{
id:"d1-004", domain:1, topic:"Entra roles",
q:{en:"A user with the Global Administrator role cannot see or manage Azure subscriptions in the tenant. They need to manage access to ALL Azure subscriptions. What should they do?",
   fr:"Un utilisateur avec le rôle Global Administrator ne peut pas voir ni gérer les abonnements Azure du tenant. Il doit gérer l'accès à TOUS les abonnements Azure. Que doit-il faire ?"},
options:[
 {en:"Ask for the Owner role on each subscription", fr:"Demander le rôle Owner sur chaque abonnement"},
 {en:"Enable \"Access management for Azure resources\" in their Entra ID properties", fr:"Activer « Access management for Azure resources » dans ses propriétés Entra ID"},
 {en:"Assign themselves the Azure AD Contributor role", fr:"S'assigner le rôle Azure AD Contributor"},
 {en:"Nothing — Global Administrator already includes Azure RBAC Owner", fr:"Rien — Global Administrator inclut déjà Owner en Azure RBAC"}],
correct:[1],
explanation:{en:"B is correct: Entra roles and Azure RBAC are separate systems. A Global Admin can elevate access via the \"Access management for Azure resources\" toggle, which grants User Access Administrator at the root management group scope — allowing them to manage access on all subscriptions.\nA is wrong: possible but not scalable and requires someone else to grant it on every subscription.\nC is wrong: there is no \"Azure AD Contributor\" role for this purpose.\nD is wrong: Global Administrator does NOT automatically get Azure RBAC permissions — that separation is by design.",
fr:"B est correct : les rôles Entra et Azure RBAC sont des systèmes séparés. Un Global Admin peut élever son accès via le bouton « Access management for Azure resources », qui donne User Access Administrator au scope du root management group — permettant de gérer l'accès sur tous les abonnements.\nA est faux : possible mais pas scalable, et il faut que quelqu'un d'autre l'accorde sur chaque abonnement.\nC est faux : il n'existe pas de rôle « Azure AD Contributor » pour ça.\nD est faux : Global Administrator n'obtient PAS automatiquement de permissions Azure RBAC — cette séparation est voulue."}
},
{
id:"d1-005", domain:1, topic:"B2B collaboration",
q:{en:"You invite partner@fabrikam.com as a guest. Fabrikam does not use Microsoft Entra ID or Microsoft accounts. How will the guest authenticate by default?",
   fr:"Tu invites partner@fabrikam.com comme guest. Fabrikam n'utilise ni Microsoft Entra ID ni comptes Microsoft. Comment le guest va-t-il s'authentifier par défaut ?"},
options:[
 {en:"With an email one-time passcode (OTP)", fr:"Avec un code à usage unique envoyé par email (OTP)"},
 {en:"He cannot be invited", fr:"Il ne peut pas être invité"},
 {en:"With a mandatory new Microsoft account", fr:"Avec un nouveau compte Microsoft obligatoire"},
 {en:"With SAML direct federation configured automatically", fr:"Avec une fédération directe SAML configurée automatiquement"}],
correct:[0],
explanation:{en:"A is correct: when the invited user has no Entra tenant, no Microsoft account, and no configured federation, the email one-time passcode feature (enabled by default) sends a code to their email at each sign-in.\nB is wrong: B2B supports any email address.\nC is wrong: creating a Microsoft account is a fallback path, not mandatory since OTP became the default.\nD is wrong: SAML/WS-Fed direct federation must be explicitly configured by an admin — it is never automatic.",
fr:"A est correct : quand l'invité n'a ni tenant Entra, ni compte Microsoft, ni fédération configurée, la fonctionnalité email one-time passcode (activée par défaut) lui envoie un code par email à chaque connexion.\nB est faux : le B2B accepte n'importe quelle adresse email.\nC est faux : créer un compte Microsoft est une option de repli, pas obligatoire depuis que l'OTP est le défaut.\nD est faux : la fédération directe SAML/WS-Fed doit être configurée explicitement par un admin — jamais automatique."}
},
{
id:"d1-006", domain:1, topic:"Cross-tenant access",
q:{en:"Users from partner tenant Fabrikam complain they must perform MFA twice: once in their tenant and once when accessing your apps as guests. They already satisfy MFA at Fabrikam. How do you remove the double MFA while keeping MFA enforcement?",
   fr:"Les utilisateurs du tenant partenaire Fabrikam se plaignent de devoir faire le MFA deux fois : dans leur tenant puis en accédant à tes apps comme guests. Ils font déjà le MFA chez Fabrikam. Comment supprimer le double MFA tout en gardant l'exigence MFA ?"},
options:[
 {en:"Exclude guests from your Conditional Access MFA policy", fr:"Exclure les guests de ta politique MFA Conditional Access"},
 {en:"In cross-tenant access settings, configure inbound trust to accept MFA claims from Fabrikam", fr:"Dans les cross-tenant access settings, configurer le trust entrant pour accepter les claims MFA de Fabrikam"},
 {en:"Ask Fabrikam to disable their MFA policy", fr:"Demander à Fabrikam de désactiver sa politique MFA"},
 {en:"Convert the guests to member users", fr:"Convertir les guests en utilisateurs members"}],
correct:[1],
explanation:{en:"B is correct: cross-tenant access settings > inbound trust settings let you trust MFA (and compliant/hybrid-joined device claims) performed in the partner's home tenant, so your CA policy is satisfied without a second MFA prompt.\nA is wrong: excluding guests removes MFA protection entirely.\nC is wrong: that weakens the partner's security and doesn't solve your policy requirement.\nD is wrong: user type doesn't change MFA evaluation and converting external users to members is not appropriate here.",
fr:"B est correct : les cross-tenant access settings > trust entrant permettent de faire confiance au MFA (et aux claims d'appareil conforme/hybrid-joined) effectué dans le tenant d'origine du partenaire — ta politique CA est satisfaite sans second MFA.\nA est faux : exclure les guests supprime totalement la protection MFA.\nC est faux : ça affaiblit la sécurité du partenaire et ne résout pas ton exigence.\nD est faux : le type d'utilisateur ne change pas l'évaluation MFA, et convertir des externes en members n'est pas approprié ici."}
},
{
id:"d1-007", domain:1, topic:"Hybrid identity",
q:{en:"Your company wants cloud authentication with these requirements: passwords must NEVER be stored in the cloud in any form, and password validation must occur against on-premises domain controllers. Which method should you choose?",
   fr:"Ton entreprise veut une authentification cloud avec ces exigences : les mots de passe ne doivent JAMAIS être stockés dans le cloud sous aucune forme, et la validation doit se faire sur les contrôleurs de domaine on-prem. Quelle méthode choisir ?"},
options:[
 {en:"Password Hash Synchronization (PHS)", fr:"Password Hash Synchronization (PHS)"},
 {en:"Pass-through Authentication (PTA)", fr:"Pass-through Authentication (PTA)"},
 {en:"Seamless SSO alone", fr:"Seamless SSO seul"},
 {en:"Email one-time passcode", fr:"Email one-time passcode"}],
correct:[1],
explanation:{en:"B is correct: PTA validates the password directly against on-prem DCs via lightweight agents; no password data (not even hashes) is stored in the cloud.\nA is wrong: PHS stores a hash of the password hash in Entra ID — that violates the \"never in the cloud in any form\" requirement.\nC is wrong: Seamless SSO is a convenience feature added on top of PHS or PTA; it is not an authentication method by itself.\nD is wrong: email OTP is for B2B guests, not employee authentication.",
fr:"B est correct : PTA valide le mot de passe directement sur les DC on-prem via des agents légers ; aucune donnée de mot de passe (même pas un hash) n'est stockée dans le cloud.\nA est faux : PHS stocke un hash du hash du mot de passe dans Entra ID — ça viole l'exigence « jamais dans le cloud sous aucune forme ».\nC est faux : Seamless SSO est un confort ajouté par-dessus PHS ou PTA ; ce n'est pas une méthode d'authentification en soi.\nD est faux : l'email OTP sert aux guests B2B, pas à l'authentification des employés."}
},
{
id:"d1-008", domain:1, topic:"Hybrid identity",
q:{en:"You deploy Pass-through Authentication. You must ensure authentication remains available if one server fails. What should you do?",
   fr:"Tu déploies Pass-through Authentication. Tu dois garantir que l'authentification reste disponible si un serveur tombe. Que fais-tu ?"},
options:[
 {en:"Install additional PTA agents on multiple servers", fr:"Installer des agents PTA supplémentaires sur plusieurs serveurs"},
 {en:"Deploy a second Entra Connect server in active mode", fr:"Déployer un second serveur Entra Connect en mode actif"},
 {en:"Enable Password Hash Sync as the primary method", fr:"Activer Password Hash Sync comme méthode principale"},
 {en:"Configure AD FS with a WAP farm", fr:"Configurer AD FS avec une ferme WAP"}],
correct:[0],
explanation:{en:"A is correct: PTA high availability is achieved by installing multiple authentication agents (Microsoft recommends at least 3) on different servers.\nB is wrong: you can only have ONE active Entra Connect Sync server; a second one must be in staging mode, and it handles sync, not PTA HA (though extra agents can be standalone).\nC is wrong: enabling PHS as primary changes the authentication method instead of making PTA highly available (PHS can be a backup/failover strategy but doesn't answer the requirement).\nD is wrong: AD FS is a different, more complex architecture — not needed for PTA HA.",
fr:"A est correct : la haute disponibilité de PTA s'obtient en installant plusieurs authentication agents (Microsoft recommande au moins 3) sur des serveurs différents.\nB est faux : on ne peut avoir qu'UN seul serveur Entra Connect Sync actif ; un second doit être en staging, et il gère la sync, pas la HA de PTA.\nC est faux : activer PHS en principal change la méthode d'authentification au lieu de rendre PTA hautement disponible.\nD est faux : AD FS est une architecture différente et plus complexe — inutile pour la HA de PTA."}
},
{
id:"d1-009", domain:1, topic:"Entra Cloud Sync",
q:{en:"Which scenario REQUIRES Microsoft Entra Cloud Sync instead of Entra Connect Sync?",
   fr:"Quel scénario NÉCESSITE Microsoft Entra Cloud Sync plutôt qu'Entra Connect Sync ?"},
options:[
 {en:"Synchronizing device objects to Entra ID", fr:"Synchroniser des objets appareils vers Entra ID"},
 {en:"Synchronizing users from a disconnected AD forest that has no line of sight to the main forest", fr:"Synchroniser les utilisateurs d'une forêt AD déconnectée sans visibilité réseau vers la forêt principale"},
 {en:"Using Pass-through Authentication", fr:"Utiliser Pass-through Authentication"},
 {en:"Exchange hybrid writeback", fr:"Le writeback hybride Exchange"}],
correct:[1],
explanation:{en:"B is correct: Cloud Sync uses lightweight agents configured from the cloud, so it supports multi-forest scenarios where forests are disconnected (e.g. after a merger/acquisition). Connect Sync needs connectivity to all forests from one server.\nA is wrong: device object sync is supported by Connect Sync, NOT by Cloud Sync.\nC is wrong: PTA is a Connect Sync feature; Cloud Sync supports PHS only.\nD is wrong: Exchange hybrid writeback requires Connect Sync.",
fr:"B est correct : Cloud Sync utilise des agents légers configurés depuis le cloud, donc il supporte les scénarios multi-forêts déconnectées (ex : après une fusion/acquisition). Connect Sync exige une connectivité vers toutes les forêts depuis un serveur.\nA est faux : la sync des objets appareils est supportée par Connect Sync, PAS par Cloud Sync.\nC est faux : PTA est une fonctionnalité de Connect Sync ; Cloud Sync ne supporte que PHS.\nD est faux : le writeback hybride Exchange nécessite Connect Sync."}
},
{
id:"d1-010", domain:1, topic:"Guest access restrictions",
q:{en:"You must prevent guest users from enumerating other users, groups, and directory objects. Guests should only see their own profile. Which setting do you configure?",
   fr:"Tu dois empêcher les guests d'énumérer les autres utilisateurs, groupes et objets d'annuaire. Les guests ne doivent voir que leur propre profil. Quel paramètre configures-tu ?"},
options:[
 {en:"Guest user access restrictions = \"Guest user access is restricted to their own directory objects (most restrictive)\"", fr:"Guest user access restrictions = « L'accès des guests est restreint à leurs propres objets d'annuaire (le plus restrictif) »"},
 {en:"Guest invite settings = \"No one in the organization can invite guest users\"", fr:"Guest invite settings = « Personne dans l'organisation ne peut inviter de guests »"},
 {en:"Cross-tenant access settings inbound = Block", fr:"Cross-tenant access settings entrant = Bloquer"},
 {en:"Set all guests' UserType to Member", fr:"Passer le UserType de tous les guests à Member"}],
correct:[0],
explanation:{en:"A is correct: in External collaboration settings, the most restrictive guest access level limits guests to their own directory objects only.\nB is wrong: that controls WHO can send invitations, not what existing guests can see.\nC is wrong: blocking inbound cross-tenant access prevents collaboration entirely.\nD is wrong: making them Members would INCREASE their directory visibility.",
fr:"A est correct : dans External collaboration settings, le niveau d'accès guest le plus restrictif limite les guests à leurs propres objets d'annuaire.\nB est faux : ça contrôle QUI peut envoyer des invitations, pas ce que les guests existants peuvent voir.\nC est faux : bloquer l'accès cross-tenant entrant empêche toute collaboration.\nD est faux : les passer en Members AUGMENTERAIT leur visibilité sur l'annuaire."}
},
{
id:"d1-011", domain:1, topic:"Role-assignable groups",
q:{en:"You create a group and plan to assign the User Administrator role to it. The option \"Microsoft Entra roles can be assigned to the group\" is missing. Which TWO statements explain valid requirements? (Select all that apply)",
   fr:"Tu crées un groupe pour lui assigner le rôle User Administrator. L'option « Microsoft Entra roles can be assigned to the group » est absente. Quelles DEUX affirmations correspondent aux prérequis valides ? (Sélectionne toutes les bonnes réponses)"},
options:[
 {en:"The setting can only be enabled when the group is created", fr:"Ce paramètre ne peut être activé qu'à la création du groupe"},
 {en:"The group must use assigned (not dynamic) membership and be a security or M365 group with hidden membership", fr:"Le groupe doit avoir une appartenance assignée (pas dynamique)"},
 {en:"Any Microsoft 365 group with dynamic membership works", fr:"N'importe quel groupe Microsoft 365 à appartenance dynamique convient"},
 {en:"The setting can be toggled at any time by a Group Administrator", fr:"Le paramètre peut être activé à tout moment par un Group Administrator"}],
correct:[0,1],
explanation:{en:"A and B are correct: isAssignableToRole can ONLY be set at group creation (never after), and the group must have assigned membership (dynamic membership is not allowed for role-assignable groups). Creating them requires at least Privileged Role Administrator.\nC is wrong: dynamic membership is explicitly not supported for role-assignable groups.\nD is wrong: it cannot be toggled after creation, by anyone.",
fr:"A et B sont corrects : isAssignableToRole ne peut être défini QU'À la création du groupe (jamais après), et le groupe doit avoir une appartenance assignée (l'appartenance dynamique est interdite pour les groupes role-assignable). Leur création exige au moins Privileged Role Administrator.\nC est faux : l'appartenance dynamique n'est explicitement pas supportée pour les groupes role-assignable.\nD est faux : impossible à modifier après création, par qui que ce soit."}
},
{
id:"d1-012", domain:1, topic:"Custom domains",
q:{en:"You add the custom domain contoso.com to your tenant. The domain shows as \"Unverified\". What must you do to verify it?",
   fr:"Tu ajoutes le domaine personnalisé contoso.com à ton tenant. Le domaine apparaît « Unverified ». Que dois-tu faire pour le vérifier ?"},
options:[
 {en:"Add the TXT (or MX) record provided by Microsoft to the domain's DNS zone", fr:"Ajouter l'enregistrement TXT (ou MX) fourni par Microsoft dans la zone DNS du domaine"},
 {en:"Create a CNAME record pointing to login.microsoftonline.com", fr:"Créer un enregistrement CNAME pointant vers login.microsoftonline.com"},
 {en:"Transfer the domain registration to Microsoft", fr:"Transférer l'enregistrement du domaine chez Microsoft"},
 {en:"Wait 72 hours for automatic verification", fr:"Attendre 72 heures pour la vérification automatique"}],
correct:[0],
explanation:{en:"A is correct: domain verification proves ownership by adding a specific TXT (or alternatively MX) record to the public DNS zone, then clicking Verify.\nB is wrong: CNAME records are not used for tenant domain verification.\nC is wrong: you keep your registrar; Microsoft only needs DNS proof of ownership.\nD is wrong: verification never happens automatically without the DNS record.",
fr:"A est correct : la vérification de domaine prouve la propriété en ajoutant un enregistrement TXT (ou MX) spécifique dans la zone DNS publique, puis en cliquant Verify.\nB est faux : les CNAME ne servent pas à la vérification de domaine du tenant.\nC est faux : tu gardes ton registrar ; Microsoft a juste besoin d'une preuve DNS de propriété.\nD est faux : la vérification n'est jamais automatique sans l'enregistrement DNS."}
},
{
id:"d1-013", domain:1, topic:"Bulk operations",
q:{en:"You must create 500 user accounts in Microsoft Entra ID as quickly as possible from an HR export. Which two methods are supported natively? (Select all that apply)",
   fr:"Tu dois créer 500 comptes utilisateurs dans Microsoft Entra ID le plus vite possible depuis un export RH. Quelles sont les deux méthodes supportées nativement ? (Sélectionne toutes les bonnes réponses)"},
options:[
 {en:"Bulk create via CSV upload in the Microsoft Entra admin center", fr:"Création en masse via upload CSV dans le centre d'administration Microsoft Entra"},
 {en:"PowerShell with Microsoft Graph (e.g. New-MgUser in a loop/script)", fr:"PowerShell avec Microsoft Graph (ex : New-MgUser dans un script)"},
 {en:"Drag-and-drop the CSV into the Users blade", fr:"Glisser-déposer le CSV dans la lame Users"},
 {en:"Emailing the CSV to Microsoft support", fr:"Envoyer le CSV par email au support Microsoft"}],
correct:[0,1],
explanation:{en:"A and B are correct: the admin center supports bulk create/delete/invite via a CSV template, and Microsoft Graph PowerShell (New-MgUser) automates account creation at scale.\nC and D are wrong: neither drag-and-drop import nor emailing support are real provisioning mechanisms.",
fr:"A et B sont corrects : le centre d'administration supporte la création/suppression/invitation en masse via un template CSV, et Microsoft Graph PowerShell (New-MgUser) automatise la création à grande échelle.\nC et D sont faux : ni le glisser-déposer ni l'email au support ne sont de vrais mécanismes de provisioning."}
},
{
id:"d1-014", domain:1, topic:"Device identity",
q:{en:"Company laptops are joined to on-premises Active Directory. You want them to also appear in Entra ID so Conditional Access can require domain-joined devices. What should you configure?",
   fr:"Les laptops de l'entreprise sont joints à l'Active Directory on-prem. Tu veux qu'ils apparaissent aussi dans Entra ID pour que Conditional Access puisse exiger des appareils joints au domaine. Que configures-tu ?"},
options:[
 {en:"Microsoft Entra hybrid join", fr:"Microsoft Entra hybrid join"},
 {en:"Microsoft Entra registration", fr:"Microsoft Entra registration"},
 {en:"Microsoft Entra join", fr:"Microsoft Entra join"},
 {en:"Workplace Join", fr:"Workplace Join"}],
correct:[0],
explanation:{en:"A is correct: hybrid join is for devices joined to on-prem AD that you ALSO register in Entra ID — enabling the \"hybrid Azure AD joined device\" Conditional Access control.\nB is wrong: Entra registration is for personal/BYOD devices, not domain-joined corporate machines.\nC is wrong: Entra join is cloud-only join (no on-prem AD), used for cloud-first devices.\nD is wrong: Workplace Join is the legacy name of device registration.",
fr:"A est correct : le hybrid join concerne les appareils joints à l'AD on-prem que tu enregistres AUSSI dans Entra ID — activant le contrôle Conditional Access « hybrid Azure AD joined device ».\nB est faux : l'Entra registration est pour les appareils personnels/BYOD, pas les machines d'entreprise jointes au domaine.\nC est faux : l'Entra join est un join 100% cloud (sans AD on-prem), pour les appareils cloud-first.\nD est faux : Workplace Join est l'ancien nom de la registration."}
},
{
id:"d1-015", domain:1, topic:"External identity providers",
q:{en:"You collaborate with a partner whose identity provider is a SAML 2.0 IdP (not Entra ID). You want their users to sign in to your apps as guests with their EXISTING corporate credentials. What do you configure?",
   fr:"Tu collabores avec un partenaire dont le fournisseur d'identité est un IdP SAML 2.0 (pas Entra ID). Tu veux que ses utilisateurs se connectent à tes apps comme guests avec leurs identifiants d'entreprise EXISTANTS. Que configures-tu ?"},
options:[
 {en:"SAML/WS-Fed identity provider federation (direct federation)", fr:"Fédération de fournisseur d'identité SAML/WS-Fed (fédération directe)"},
 {en:"Google federation", fr:"Fédération Google"},
 {en:"Email one-time passcode", fr:"Email one-time passcode"},
 {en:"Cross-tenant synchronization", fr:"Cross-tenant synchronization"}],
correct:[0],
explanation:{en:"A is correct: SAML/WS-Fed IdP federation lets B2B guests from a domain authenticate against their own SAML 2.0 or WS-Fed identity provider.\nB is wrong: Google federation only applies to Gmail/Google accounts.\nC is wrong: OTP works but does not use their existing corporate credentials — they'd type a code each time.\nD is wrong: cross-tenant sync only works between Microsoft Entra tenants.",
fr:"A est correct : la fédération d'IdP SAML/WS-Fed permet aux guests B2B d'un domaine de s'authentifier via leur propre fournisseur d'identité SAML 2.0 ou WS-Fed.\nB est faux : la fédération Google ne concerne que les comptes Gmail/Google.\nC est faux : l'OTP fonctionnerait mais n'utilise pas leurs identifiants d'entreprise existants — ils taperaient un code à chaque fois.\nD est faux : la cross-tenant sync ne fonctionne qu'entre tenants Microsoft Entra."}
},
{
id:"d1-016", domain:1, topic:"Cross-tenant synchronization",
q:{en:"Your company owns two Entra tenants after an acquisition. You must automatically create and update users from Tenant A into Tenant B as B2B members. What do you use?",
   fr:"Ton entreprise possède deux tenants Entra après une acquisition. Tu dois créer et mettre à jour automatiquement les utilisateurs du Tenant A dans le Tenant B comme members B2B. Qu'utilises-tu ?"},
options:[
 {en:"Cross-tenant synchronization", fr:"Cross-tenant synchronization"},
 {en:"Entra Connect Sync between both tenants", fr:"Entra Connect Sync entre les deux tenants"},
 {en:"B2B direct connect", fr:"B2B direct connect"},
 {en:"Manual CSV bulk invite every month", fr:"Invitation CSV manuelle en masse chaque mois"}],
correct:[0],
explanation:{en:"A is correct: cross-tenant synchronization automatically provisions, updates, and deprovisions B2B users across tenants in the same organization. Configured in the SOURCE tenant; the TARGET tenant must allow inbound sync in cross-tenant access settings.\nB is wrong: Entra Connect Sync syncs from on-prem AD to ONE tenant — it cannot sync tenant-to-tenant.\nC is wrong: B2B direct connect creates no user objects at all (used for Teams shared channels).\nD is wrong: manual CSV is not automatic and doesn't handle updates/removals.",
fr:"A est correct : la cross-tenant synchronization provisionne, met à jour et déprovisionne automatiquement les utilisateurs B2B entre tenants d'une même organisation. Configurée dans le tenant SOURCE ; le tenant CIBLE doit autoriser la sync entrante dans les cross-tenant access settings.\nB est faux : Entra Connect Sync synchronise depuis l'AD on-prem vers UN tenant — pas de tenant à tenant.\nC est faux : B2B direct connect ne crée aucun objet utilisateur (utilisé pour les canaux partagés Teams).\nD est faux : le CSV manuel n'est pas automatique et ne gère pas mises à jour/suppressions."}
},
{
id:"d1-017", domain:1, topic:"Entra Connect Health",
q:{en:"You must monitor the health of your AD FS servers and receive alerts when synchronization errors occur in Entra Connect. What do you deploy, and what license is required?",
   fr:"Tu dois surveiller la santé de tes serveurs AD FS et recevoir des alertes en cas d'erreurs de synchronisation dans Entra Connect. Que déploies-tu, et quelle licence est requise ?"},
options:[
 {en:"Entra Connect Health agents; Entra ID P1", fr:"Les agents Entra Connect Health ; Entra ID P1"},
 {en:"Entra Connect Health agents; free tier is enough", fr:"Les agents Entra Connect Health ; le niveau gratuit suffit"},
 {en:"Azure Monitor agents; Entra ID P2", fr:"Les agents Azure Monitor ; Entra ID P2"},
 {en:"Defender for Identity sensors; Entra ID P1", fr:"Les capteurs Defender for Identity ; Entra ID P1"}],
correct:[0],
explanation:{en:"A is correct: Entra Connect Health uses agents installed on AD FS, Entra Connect (Sync), and AD DS servers, and requires Entra ID P1 licenses.\nB is wrong: Connect Health is a Premium (P1) feature.\nC is wrong: Azure Monitor doesn't provide the specialized identity sync/ADFS health dashboards; P2 isn't the requirement.\nD is wrong: Defender for Identity detects attacks against AD, it does not monitor sync health.",
fr:"A est correct : Entra Connect Health utilise des agents installés sur les serveurs AD FS, Entra Connect (Sync) et AD DS, et nécessite des licences Entra ID P1.\nB est faux : Connect Health est une fonctionnalité Premium (P1).\nC est faux : Azure Monitor ne fournit pas les tableaux de bord spécialisés santé sync/ADFS ; P2 n'est pas l'exigence.\nD est faux : Defender for Identity détecte les attaques contre l'AD, il ne surveille pas la santé de la sync."}
},
{
id:"d1-018", domain:1, topic:"AD FS migration",
q:{en:"You plan to migrate authentication from AD FS to Entra ID with minimal disruption, testing cloud authentication with a pilot group of users while the domain remains federated. Which feature do you use?",
   fr:"Tu prévois de migrer l'authentification d'AD FS vers Entra ID avec un minimum d'interruption, en testant l'authentification cloud sur un groupe pilote pendant que le domaine reste fédéré. Quelle fonctionnalité utilises-tu ?"},
options:[
 {en:"Staged rollout with Password Hash Sync", fr:"Staged rollout avec Password Hash Sync"},
 {en:"Convert the whole domain to managed immediately", fr:"Convertir tout le domaine en managed immédiatement"},
 {en:"Seamless SSO", fr:"Seamless SSO"},
 {en:"B2B invitations for pilot users", fr:"Invitations B2B pour les utilisateurs pilotes"}],
correct:[0],
explanation:{en:"A is correct: staged rollout lets selected groups authenticate with cloud methods (PHS or PTA) while the domain stays federated with AD FS — perfect for a pilot before full cutover.\nB is wrong: converting the domain affects ALL users at once — the opposite of minimal disruption.\nC is wrong: Seamless SSO is for domain-joined device convenience, not a migration mechanism.\nD is wrong: B2B is for external users, not migrating your own employees.",
fr:"A est correct : le staged rollout permet à des groupes choisis de s'authentifier en cloud (PHS ou PTA) pendant que le domaine reste fédéré AD FS — parfait pour un pilote avant la bascule complète.\nB est faux : convertir le domaine affecte TOUS les utilisateurs d'un coup — l'opposé d'une interruption minimale.\nC est faux : Seamless SSO est un confort pour appareils joints au domaine, pas un mécanisme de migration.\nD est faux : le B2B est pour les utilisateurs externes, pas pour migrer tes propres employés."}
},
{
id:"d1-019", domain:1, topic:"Custom security attributes",
q:{en:"A Global Administrator tries to assign custom security attributes to users but gets an access denied error. Why?",
   fr:"Un Global Administrator essaie d'assigner des custom security attributes à des utilisateurs mais reçoit une erreur d'accès refusé. Pourquoi ?"},
options:[
 {en:"Global Administrator does not have custom security attribute permissions by default; the Attribute Assignment Administrator role is required", fr:"Le Global Administrator n'a pas les permissions sur les custom security attributes par défaut ; le rôle Attribute Assignment Administrator est requis"},
 {en:"Custom security attributes require an E5 license for the admin", fr:"Les custom security attributes exigent une licence E5 pour l'admin"},
 {en:"Attributes can only be assigned via PowerShell", fr:"Les attributs ne peuvent être assignés que via PowerShell"},
 {en:"The attributes must first be approved by Microsoft", fr:"Les attributs doivent d'abord être approuvés par Microsoft"}],
correct:[0],
explanation:{en:"A is correct: by design, even Global Admins have NO default access to custom security attributes (they may contain sensitive data). You need Attribute Definition Administrator to define them and Attribute Assignment Administrator to assign them (a GA can assign these roles to themselves).\nB is wrong: it's a role issue, not a license issue.\nC is wrong: the admin center, PowerShell and Graph all work once you have the role.\nD is wrong: no Microsoft approval process exists for attributes.",
fr:"A est correct : par conception, même les Global Admins n'ont AUCUN accès par défaut aux custom security attributes (ils peuvent contenir des données sensibles). Il faut Attribute Definition Administrator pour les définir et Attribute Assignment Administrator pour les assigner (un GA peut s'attribuer ces rôles).\nB est faux : c'est un problème de rôle, pas de licence.\nC est faux : le centre d'admin, PowerShell et Graph fonctionnent tous une fois le rôle obtenu.\nD est faux : aucun processus d'approbation Microsoft n'existe pour les attributs."}
},
{
id:"d1-020", domain:1, topic:"Restricted management AU",
q:{en:"You must protect a set of VIP executive accounts so that ONLY explicitly designated admins can modify them — even tenant-level User Administrators and Global Administrators must be blocked from direct modification. What do you use?",
   fr:"Tu dois protéger un ensemble de comptes VIP de direction pour que SEULS des admins explicitement désignés puissent les modifier — même les User Administrators et Global Administrators au niveau tenant doivent être bloqués. Qu'utilises-tu ?"},
options:[
 {en:"A restricted management administrative unit", fr:"Une restricted management administrative unit"},
 {en:"A standard administrative unit", fr:"Une administrative unit standard"},
 {en:"A role-assignable security group", fr:"Un groupe de sécurité role-assignable"},
 {en:"Conditional Access with protected actions", fr:"Conditional Access avec protected actions"}],
correct:[0],
explanation:{en:"A is correct: a restricted management AU blocks tenant-level role holders (including Global Admins) from modifying its members; only admins explicitly assigned roles scoped to the AU can manage them.\nB is wrong: a standard AU ADDS scoped admins but tenant-level admins can still manage the users.\nC is wrong: role-assignable groups protect GROUP membership management, not arbitrary user objects.\nD is wrong: protected actions guard specific admin permissions (like modifying CA policies), not per-user modification rights.",
fr:"A est correct : une restricted management AU empêche les détenteurs de rôles au niveau tenant (y compris Global Admins) de modifier ses membres ; seuls les admins explicitement scopés sur l'AU peuvent les gérer.\nB est faux : une AU standard AJOUTE des admins scopés mais les admins tenant peuvent toujours gérer les utilisateurs.\nC est faux : les groupes role-assignable protègent la gestion de l'appartenance au GROUPE, pas des objets utilisateurs quelconques.\nD est faux : les protected actions protègent des permissions admin précises (comme modifier les politiques CA), pas les droits de modification par utilisateur."}
},
{
id:"d1-021", domain:1, topic:"Group settings",
q:{en:"Users keep creating Microsoft 365 groups freely, causing sprawl. You must restrict M365 group creation to members of a specific security group named GroupCreators. What is required?",
   fr:"Les utilisateurs créent librement des groupes Microsoft 365, ce qui crée de la prolifération. Tu dois restreindre la création de groupes M365 aux membres d'un groupe de sécurité nommé GroupCreators. Que faut-il ?"},
options:[
 {en:"Configure the directory setting EnableGroupCreation=false with GroupCreationAllowedGroupId via PowerShell/Graph", fr:"Configurer le paramètre d'annuaire EnableGroupCreation=false avec GroupCreationAllowedGroupId via PowerShell/Graph"},
 {en:"Delete the \"All Users\" group", fr:"Supprimer le groupe « All Users »"},
 {en:"Set group expiration policies", fr:"Configurer des politiques d'expiration de groupes"},
 {en:"Turn off self-service group management in the portal — this blocks M365 group creation too", fr:"Désactiver le self-service group management dans le portail — ça bloque aussi la création de groupes M365"}],
correct:[0],
explanation:{en:"A is correct: restricting M365 group creation is done through the Group.Unified directory settings template (EnableGroupCreation=false + GroupCreationAllowedGroupId=<GroupCreators id>) via Graph/PowerShell. Note: members of that group need Entra ID P1 or the restriction applies broadly.\nB is wrong: \"All Users\" is a dynamic group concept, unrelated.\nC is wrong: expiration policies clean up unused groups; they don't prevent creation.\nD is wrong: the portal's self-service setting affects security group creation in My Groups, not M365 group creation across workloads.",
fr:"A est correct : restreindre la création de groupes M365 se fait via le template de paramètres d'annuaire Group.Unified (EnableGroupCreation=false + GroupCreationAllowedGroupId=<id de GroupCreators>) via Graph/PowerShell.\nB est faux : « All Users » est un concept de groupe dynamique, sans rapport.\nC est faux : les politiques d'expiration nettoient les groupes inutilisés ; elles n'empêchent pas la création.\nD est faux : le paramètre self-service du portail concerne la création de groupes de sécurité dans My Groups, pas la création de groupes M365 dans les workloads."}
},
{
id:"d1-022", domain:1, topic:"SSPR writeback",
q:{en:"Hybrid users synced from on-premises AD complain that self-service password reset fails with an error saying their password cannot be reset. Cloud-only users can reset fine. What is the most likely cause?",
   fr:"Les utilisateurs hybrides synchronisés depuis l'AD on-prem se plaignent que la réinitialisation de mot de passe en libre-service échoue. Les utilisateurs cloud-only y arrivent. Quelle est la cause la plus probable ?"},
options:[
 {en:"Password writeback is not enabled in Entra Connect", fr:"Le password writeback n'est pas activé dans Entra Connect"},
 {en:"SSPR requires P2 for hybrid users", fr:"SSPR nécessite P2 pour les utilisateurs hybrides"},
 {en:"The users have not registered for MFA", fr:"Les utilisateurs n'ont pas enregistré le MFA"},
 {en:"Seamless SSO is disabled", fr:"Seamless SSO est désactivé"}],
correct:[0],
explanation:{en:"A is correct: for synced (hybrid) users, SSPR must write the new password back to on-prem AD — that requires the password writeback feature in Entra Connect (and Entra ID P1). If it's off, cloud-only users work but hybrid users fail.\nB is wrong: SSPR with writeback needs P1, not P2.\nC is wrong: missing registration produces a different experience (they'd be prompted to register), and it would affect cloud users equally.\nD is wrong: Seamless SSO has nothing to do with password writeback.",
fr:"A est correct : pour les utilisateurs synchronisés (hybrides), SSPR doit réécrire le nouveau mot de passe dans l'AD on-prem — ça nécessite la fonctionnalité password writeback dans Entra Connect (et Entra ID P1). Si elle est désactivée, les cloud-only fonctionnent mais les hybrides échouent.\nB est faux : SSPR avec writeback nécessite P1, pas P2.\nC est faux : une inscription manquante produit une autre expérience (invitation à s'enregistrer) et toucherait aussi les utilisateurs cloud.\nD est faux : Seamless SSO n'a aucun rapport avec le writeback."}
},
{
id:"d1-023", domain:1, topic:"User lifecycle",
q:{en:"An employee leaves the company. According to Microsoft's recommended practice, what should you do FIRST to immediately prevent all access, before eventually deleting the account?",
   fr:"Un employé quitte l'entreprise. Selon la pratique recommandée par Microsoft, que fais-tu EN PREMIER pour empêcher immédiatement tout accès, avant de supprimer le compte plus tard ?"},
options:[
 {en:"Block sign-in (disable the account) and revoke all sessions/refresh tokens", fr:"Bloquer la connexion (désactiver le compte) et révoquer toutes les sessions/refresh tokens"},
 {en:"Delete the user account immediately", fr:"Supprimer immédiatement le compte utilisateur"},
 {en:"Remove all licenses", fr:"Retirer toutes les licences"},
 {en:"Convert the mailbox to a shared mailbox", fr:"Convertir la boîte mail en boîte partagée"}],
correct:[0],
explanation:{en:"A is correct: disabling sign-in plus revoking sessions (Revoke-MgUserSignInSession / \"Revoke sessions\") kills existing refresh tokens so open sessions die quickly. The account is kept temporarily for data handover.\nB is wrong: immediate deletion loses data and group/app context; deletion comes later (soft delete keeps it 30 days).\nC is wrong: removing licenses cuts services but doesn't kill an authenticated session or directory access.\nD is wrong: mailbox conversion is a later data-retention step, not an access-prevention step.",
fr:"A est correct : désactiver la connexion + révoquer les sessions (Revoke-MgUserSignInSession / « Revoke sessions ») tue les refresh tokens existants, donc les sessions ouvertes meurent vite. Le compte est gardé temporairement pour la passation.\nB est faux : la suppression immédiate perd les données et le contexte groupes/apps ; elle vient plus tard (soft delete de 30 jours).\nC est faux : retirer les licences coupe les services mais ne tue ni session authentifiée ni accès annuaire.\nD est faux : la conversion de boîte mail est une étape ultérieure de rétention de données, pas de blocage d'accès."}
},
{
id:"d1-024", domain:1, topic:"Deleted users",
q:{en:"A user account was deleted by mistake 10 days ago. What can you do?",
   fr:"Un compte utilisateur a été supprimé par erreur il y a 10 jours. Que peux-tu faire ?"},
options:[
 {en:"Restore it from the Deleted users list — soft-deleted users are recoverable for 30 days with all properties", fr:"Le restaurer depuis la liste Deleted users — les utilisateurs soft-deleted sont récupérables 30 jours avec toutes leurs propriétés"},
 {en:"Nothing, deletion is permanent after 7 days", fr:"Rien, la suppression est définitive après 7 jours"},
 {en:"Recreate the user with the same UPN to restore access", fr:"Recréer l'utilisateur avec le même UPN pour restaurer les accès"},
 {en:"Open a Microsoft support ticket to restore from backup", fr:"Ouvrir un ticket Microsoft pour restaurer depuis une sauvegarde"}],
correct:[0],
explanation:{en:"A is correct: deleted users go into a soft-deleted state for 30 days and can be fully restored (ID, group memberships, licenses, etc.) from Users > Deleted users.\nB is wrong: the window is 30 days, not 7.\nC is wrong: recreating with the same UPN creates a NEW object with a new objectId — permissions and memberships are lost.\nD is wrong: no support restore is needed within the 30-day window (and none exists after permanent deletion).",
fr:"A est correct : les utilisateurs supprimés passent en état soft-deleted pendant 30 jours et peuvent être entièrement restaurés (ID, appartenances aux groupes, licences, etc.) depuis Users > Deleted users.\nB est faux : la fenêtre est de 30 jours, pas 7.\nC est faux : recréer avec le même UPN crée un NOUVEL objet avec un nouvel objectId — permissions et appartenances perdues.\nD est faux : aucune restauration par le support n'est nécessaire dans la fenêtre de 30 jours (et aucune n'existe après suppression définitive)."}
},
{
id:"d1-025", domain:1, topic:"Company branding",
q:{en:"You must display your company logo and a custom background on the Microsoft Entra sign-in page for your tenant. Which license is the minimum requirement to configure Company Branding?",
   fr:"Tu dois afficher le logo de l'entreprise et un fond personnalisé sur la page de connexion Microsoft Entra de ton tenant. Quelle licence minimale faut-il pour configurer le Company Branding ?"},
options:[
 {en:"Microsoft Entra ID Free — basic default branding customization is included", fr:"Microsoft Entra ID Free — la personnalisation de base est incluse"},
 {en:"Entra ID P1 or P2 (or M365 license) for custom branding", fr:"Entra ID P1 ou P2 (ou licence M365) pour le branding personnalisé"},
 {en:"Entra ID Governance", fr:"Entra ID Governance"},
 {en:"Workload Identities Premium", fr:"Workload Identities Premium"}],
correct:[1],
explanation:{en:"B is correct: customizing company branding (logo, background, sign-in text, per-language branding) requires Entra ID P1/P2 or a Microsoft 365 license.\nA is wrong: the Free tier only shows the default Microsoft experience with very limited options.\nC is wrong: Governance covers entitlement/lifecycle features, not branding.\nD is wrong: Workload Identities Premium covers service principal protection.",
fr:"B est correct : personnaliser le company branding (logo, fond, texte de connexion, branding par langue) nécessite Entra ID P1/P2 ou une licence Microsoft 365.\nA est faux : le niveau Free n'offre que l'expérience Microsoft par défaut avec des options très limitées.\nC est faux : Governance couvre l'entitlement/le cycle de vie, pas le branding.\nD est faux : Workload Identities Premium couvre la protection des service principals."}
},
{
id:"d1-026", domain:1, topic:"B2B invitations",
q:{en:"You must invite 300 external consultants as guests in one operation. Which approach is the most efficient?",
   fr:"Tu dois inviter 300 consultants externes comme guests en une seule opération. Quelle approche est la plus efficace ?"},
options:[
 {en:"Bulk invite via CSV in the Entra admin center (Users > Bulk operations > Bulk invite)", fr:"Invitation en masse via CSV dans le centre d'admin Entra (Users > Bulk operations > Bulk invite)"},
 {en:"Send 300 individual invitations from the portal", fr:"Envoyer 300 invitations individuelles depuis le portail"},
 {en:"Create 300 member accounts with temporary passwords", fr:"Créer 300 comptes members avec mots de passe temporaires"},
 {en:"Enable self-service sign-up on the tenant", fr:"Activer le self-service sign-up sur le tenant"}],
correct:[0],
explanation:{en:"A is correct: the admin center provides a bulk invite operation using a CSV template (email + redirect URL); PowerShell New-MgInvitation in a script is the equivalent automation.\nB is wrong: technically works but is wildly inefficient.\nC is wrong: creating member accounts for externals breaks governance (they should be guests) and adds password management burden.\nD is wrong: self-service sign-up applies to specific apps via user flows, not a controlled invitation of a specific list.",
fr:"A est correct : le centre d'admin fournit une opération d'invitation en masse via un template CSV (email + URL de redirection) ; PowerShell New-MgInvitation en script est l'équivalent automatisé.\nB est faux : ça marche mais c'est totalement inefficace.\nC est faux : créer des comptes members pour des externes casse la gouvernance (ils doivent être guests) et ajoute la gestion des mots de passe.\nD est faux : le self-service sign-up s'applique à des apps précises via des user flows, pas à une invitation contrôlée d'une liste."}
},
{
id:"d1-027", domain:1, topic:"Entra Connect filtering",
q:{en:"You use Entra Connect Sync and must ensure that only users in the OU \"Corp/Employees\" are synchronized to Entra ID. What should you configure?",
   fr:"Tu utilises Entra Connect Sync et tu dois t'assurer que seuls les utilisateurs de l'OU « Corp/Employees » sont synchronisés vers Entra ID. Que configures-tu ?"},
options:[
 {en:"Domain and OU filtering in the Entra Connect wizard", fr:"Le filtrage par domaine et OU dans l'assistant Entra Connect"},
 {en:"A dynamic group in Entra ID", fr:"Un groupe dynamique dans Entra ID"},
 {en:"An administrative unit", fr:"Une administrative unit"},
 {en:"Attribute-based filtering in the Entra admin center", fr:"Un filtrage par attributs dans le centre d'admin Entra"}],
correct:[0],
explanation:{en:"A is correct: Entra Connect supports domain/OU-based filtering configured in the wizard (or attribute-based filtering via sync rules) to control WHICH on-prem objects get synced.\nB is wrong: dynamic groups organize users already synced; they don't prevent syncing.\nC is wrong: AUs scope admin permissions in the cloud, not synchronization.\nD is wrong: sync filtering is configured on the Connect server, not in the cloud admin center.",
fr:"A est correct : Entra Connect supporte le filtrage par domaine/OU configuré dans l'assistant (ou par attributs via les règles de sync) pour contrôler QUELS objets on-prem sont synchronisés.\nB est faux : les groupes dynamiques organisent des utilisateurs déjà synchronisés ; ils n'empêchent pas la sync.\nC est faux : les AUs scopent des permissions admin dans le cloud, pas la synchronisation.\nD est faux : le filtrage de sync se configure sur le serveur Connect, pas dans le centre d'admin cloud."}
},
{
id:"d1-028", domain:1, topic:"Guest lifecycle",
q:{en:"Which PowerShell command invites an external user to your tenant using Microsoft Graph PowerShell?",
   fr:"Quelle commande PowerShell invite un utilisateur externe dans ton tenant avec Microsoft Graph PowerShell ?"},
options:[
 {en:"New-MgInvitation", fr:"New-MgInvitation"},
 {en:"New-MgUser -UserType Guest", fr:"New-MgUser -UserType Guest"},
 {en:"Add-MgExternalUser", fr:"Add-MgExternalUser"},
 {en:"Invoke-MgGuestInvite", fr:"Invoke-MgGuestInvite"}],
correct:[0],
explanation:{en:"A is correct: New-MgInvitation (Graph invitations API) sends the B2B invitation with -InvitedUserEmailAddress and -InviteRedirectUrl.\nB is wrong: New-MgUser creates a local user object; it does not create a proper B2B invitation/redemption flow.\nC and D are wrong: those cmdlets don't exist.",
fr:"A est correct : New-MgInvitation (API invitations de Graph) envoie l'invitation B2B avec -InvitedUserEmailAddress et -InviteRedirectUrl.\nB est faux : New-MgUser crée un objet utilisateur local ; ça ne crée pas le vrai parcours d'invitation/acceptation B2B.\nC et D sont faux : ces cmdlets n'existent pas."}
},
{
id:"d1-029", domain:1, topic:"Dynamic groups",
q:{en:"You need a dynamic security group containing all Windows devices. Which rule is valid?",
   fr:"Tu as besoin d'un groupe de sécurité dynamique contenant tous les appareils Windows. Quelle règle est valide ?"},
options:[
 {en:"device.deviceOSType -eq \"Windows\"", fr:"device.deviceOSType -eq \"Windows\""},
 {en:"user.deviceOS -eq \"Windows\"", fr:"user.deviceOS -eq \"Windows\""},
 {en:"device.deviceOSType -eq \"Windows\" -or user.department -eq \"IT\"", fr:"device.deviceOSType -eq \"Windows\" -or user.department -eq \"IT\""},
 {en:"deviceOSType : Windows", fr:"deviceOSType : Windows"}],
correct:[0],
explanation:{en:"A is correct: device rules use the device. prefix, e.g. device.deviceOSType -eq \"Windows\".\nB is wrong: there is no user.deviceOS property, and a device group needs device properties.\nC is wrong: a dynamic group is EITHER user-based OR device-based — you cannot mix user and device rules in one group.\nD is wrong: invalid syntax.",
fr:"A est correct : les règles d'appareils utilisent le préfixe device., ex : device.deviceOSType -eq \"Windows\".\nB est faux : la propriété user.deviceOS n'existe pas, et un groupe d'appareils utilise des propriétés device.\nC est faux : un groupe dynamique est SOIT utilisateur SOIT appareil — on ne peut pas mélanger les deux types de règles dans un même groupe.\nD est faux : syntaxe invalide."}
},
{
id:"d1-030", domain:1, topic:"UPN & sign-in",
q:{en:"After syncing users from on-prem AD, some users have UPNs ending in @contoso.onmicrosoft.com instead of @contoso.com, and cannot sign in with their email-style username. What is the most likely cause?",
   fr:"Après la synchronisation depuis l'AD on-prem, certains utilisateurs ont des UPN finissant en @contoso.onmicrosoft.com au lieu de @contoso.com, et ne peuvent pas se connecter avec leur identifiant de type email. Quelle est la cause la plus probable ?"},
options:[
 {en:"Their on-prem UPN suffix uses a domain that is not verified in the tenant, so Entra ID substituted the default domain", fr:"Le suffixe UPN on-prem utilise un domaine non vérifié dans le tenant, donc Entra ID a substitué le domaine par défaut"},
 {en:"Entra Connect is broken", fr:"Entra Connect est cassé"},
 {en:"The users must register for MFA first", fr:"Les utilisateurs doivent d'abord enregistrer le MFA"},
 {en:"The tenant has reached its custom domain limit", fr:"Le tenant a atteint sa limite de domaines personnalisés"}],
correct:[0],
explanation:{en:"A is correct: when a synced user's UPN suffix (e.g. contoso.local or an unverified domain) doesn't match a verified custom domain, Entra ID replaces it with the default @tenant.onmicrosoft.com. Fix: verify contoso.com in the tenant and/or add matching UPN suffixes in AD.\nB is wrong: the sync worked — this is the documented substitution behavior, not a failure.\nC is wrong: MFA registration is unrelated to UPN suffixes.\nD is wrong: there is no meaningful custom-domain limit issue here.",
fr:"A est correct : quand le suffixe UPN d'un utilisateur synchronisé (ex : contoso.local ou un domaine non vérifié) ne correspond à aucun domaine personnalisé vérifié, Entra ID le remplace par le domaine par défaut @tenant.onmicrosoft.com. Solution : vérifier contoso.com dans le tenant et/ou ajouter les suffixes UPN correspondants dans l'AD.\nB est faux : la sync a fonctionné — c'est le comportement documenté de substitution, pas une panne.\nC est faux : l'enregistrement MFA n'a rien à voir avec les suffixes UPN.\nD est faux : aucune limite de domaines n'entre en jeu ici."}
}
];
