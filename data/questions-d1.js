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
},
{
id:"d1-031", domain:1, topic:"Group-based licensing errors",
q:{en:"You assign Microsoft 365 E5 licenses to a group of 200 users. 12 users show a licensing error and receive no license. The tenant has 500 free licenses available. What is the most likely cause?",
   fr:"Tu assignes des licences Microsoft 365 E5 à un groupe de 200 utilisateurs. 12 utilisateurs affichent une erreur de licence et ne reçoivent rien. Le tenant a 500 licences disponibles. Quelle est la cause la plus probable ?"},
options:[
 {en:"Those 12 users have no usage location set, or their usage location is a country where a service in the SKU is not available", fr:"Ces 12 utilisateurs n'ont pas d'usage location définie, ou leur usage location est un pays où un service du SKU n'est pas disponible"},
 {en:"The group is a dynamic group, which cannot be used for licensing", fr:"Le groupe est dynamique, ce qui est incompatible avec l'attribution de licences"},
 {en:"The tenant has run out of licenses", fr:"Le tenant n'a plus de licences"},
 {en:"Group-based licensing requires each user to also have a direct license", fr:"Le licensing par groupe exige que chaque utilisateur ait aussi une licence directe"}],
correct:[0],
explanation:{en:"A is correct: usage location is mandatory for licensing, and some service plans are unavailable in certain countries — both produce a per-user licensing error while the rest of the group succeeds.\nB is wrong: dynamic groups are fully supported for group-based licensing.\nC is wrong: 500 licenses are free, and a shortage would affect far more than 12 users.\nD is wrong: group-based licensing works on its own; a direct license is not required.",
fr:"A est correct : l'usage location est obligatoire pour l'attribution de licences, et certains service plans ne sont pas disponibles dans certains pays — les deux cas produisent une erreur de licence par utilisateur alors que le reste du groupe fonctionne.\nB est faux : les groupes dynamiques sont parfaitement supportés pour le licensing par groupe.\nC est faux : 500 licences sont libres, et une pénurie toucherait bien plus que 12 utilisateurs.\nD est faux : le licensing par groupe fonctionne seul, aucune licence directe n'est requise."}
},
{
id:"d1-032", domain:1, topic:"Entra Connect staging mode",
q:{en:"You must upgrade the Entra Connect server to a new machine with zero risk of duplicate exports to Entra ID, then cut over. What should you do?",
   fr:"Tu dois migrer le serveur Entra Connect vers une nouvelle machine sans aucun risque d'exports en double vers Entra ID, puis basculer. Que fais-tu ?"},
options:[
 {en:"Install the new server in staging mode, verify its pending exports, then disable staging on the new server and enable it on the old one", fr:"Installer le nouveau serveur en staging mode, vérifier ses exports en attente, puis désactiver le staging sur le nouveau et l'activer sur l'ancien"},
 {en:"Install the new server normally and uninstall the old one afterwards", fr:"Installer le nouveau serveur normalement puis désinstaller l'ancien"},
 {en:"Run both servers in active mode and let Entra ID deduplicate", fr:"Faire tourner les deux serveurs en mode actif et laisser Entra ID dédupliquer"},
 {en:"Export the configuration to Entra Cloud Sync first", fr:"Exporter d'abord la configuration vers Entra Cloud Sync"}],
correct:[0],
explanation:{en:"A is correct: a staging-mode server imports and synchronizes (so you can inspect what it WOULD export) but never writes to Entra ID. Swapping staging flags makes the cutover atomic and reversible.\nB is wrong: two active servers writing the same objects is exactly the situation staging mode exists to prevent.\nC is wrong: Entra ID does not deduplicate competing sync engines — you get export conflicts.\nD is wrong: Cloud Sync is a different agent, not a migration staging area for Connect.",
fr:"A est correct : un serveur en staging mode importe et synchronise (tu peux donc inspecter ce qu'il EXPORTERAIT) mais n'écrit jamais dans Entra ID. Inverser les drapeaux de staging rend la bascule atomique et réversible.\nB est faux : deux serveurs actifs écrivant les mêmes objets, c'est précisément ce que le staging mode évite.\nC est faux : Entra ID ne déduplique pas deux moteurs de sync concurrents — tu obtiens des conflits d'export.\nD est faux : Cloud Sync est un autre agent, pas une zone de transit pour migrer Connect."}
},
{
id:"d1-033", domain:1, topic:"Authentication method choice",
q:{en:"Security requires that on-premises Active Directory password policies, account lockout and disabled accounts take effect immediately at cloud sign-in, without deploying AD FS. Which sign-in method should you configure?",
   fr:"La sécurité exige que les stratégies de mot de passe AD on-prem, le verrouillage de compte et les comptes désactivés s'appliquent immédiatement à la connexion cloud, sans déployer AD FS. Quelle méthode de connexion configurer ?"},
options:[
 {en:"Pass-through authentication (PTA)", fr:"Pass-through authentication (PTA)"},
 {en:"Password hash synchronization (PHS) only", fr:"Password hash synchronization (PHS) seule"},
 {en:"Federation with AD FS", fr:"Fédération avec AD FS"},
 {en:"Certificate-based authentication", fr:"Certificate-based authentication"}],
correct:[0],
explanation:{en:"A is correct: PTA validates the password against on-prem AD in real time, so on-prem password policy, lockout and account state apply immediately — and it needs only a lightweight agent, no AD FS farm.\nB is wrong: with PHS the hash is validated in the cloud, so on-prem expiry/lockout are not honoured in real time (a separate setting only forwards expiry).\nC is wrong: AD FS would work but is explicitly excluded and far heavier.\nD is wrong: CBA authenticates with certificates and does not evaluate AD password policy at all.",
fr:"A est correct : PTA valide le mot de passe auprès de l'AD on-prem en temps réel, donc la stratégie de mot de passe, le verrouillage et l'état du compte s'appliquent immédiatement — et il ne faut qu'un agent léger, pas de ferme AD FS.\nB est faux : avec PHS le hash est validé dans le cloud, l'expiration et le verrouillage on-prem ne sont pas honorés en temps réel (un réglage séparé ne transmet que l'expiration).\nC est faux : AD FS fonctionnerait mais est explicitement exclu et bien plus lourd.\nD est faux : CBA authentifie par certificat et n'évalue pas du tout la stratégie de mot de passe AD."}
},
{
id:"d1-034", domain:1, topic:"Seamless SSO",
q:{en:"You enabled Seamless SSO (Desktop SSO) but domain-joined Windows clients on the corporate network are still prompted for a password. What must you verify FIRST?",
   fr:"Tu as activé Seamless SSO (Desktop SSO) mais les clients Windows joints au domaine sur le réseau d'entreprise sont toujours invités à saisir leur mot de passe. Que dois-tu vérifier EN PREMIER ?"},
options:[
 {en:"That the URL https://autologon.microsoftazuread-sso.com is in the browser's Intranet zone, pushed by Group Policy", fr:"Que l'URL https://autologon.microsoftazuread-sso.com est dans la zone Intranet du navigateur, poussée par stratégie de groupe"},
 {en:"That every user has registered for MFA", fr:"Que chaque utilisateur a enregistré le MFA"},
 {en:"That the users have Entra ID P2 licenses", fr:"Que les utilisateurs ont des licences Entra ID P2"},
 {en:"That the devices are Entra hybrid joined", fr:"Que les appareils sont Entra hybrid joined"}],
correct:[0],
explanation:{en:"A is correct: Seamless SSO relies on Kerberos against the AZUREADSSOACC computer object, and the browser only sends the Kerberos ticket if the autologon URL sits in the Intranet (or Trusted Sites) zone — this GPO step is the classic omission.\nB is wrong: MFA registration is independent of Kerberos-based SSO.\nC is wrong: Seamless SSO needs no premium license.\nD is wrong: Seamless SSO targets domain-joined devices; hybrid join is a different (and also valid) SSO path, not a prerequisite here.",
fr:"A est correct : Seamless SSO repose sur Kerberos contre l'objet ordinateur AZUREADSSOACC, et le navigateur n'envoie le ticket Kerberos que si l'URL autologon est dans la zone Intranet (ou Sites de confiance) — cet oubli de GPO est le classique.\nB est faux : l'enregistrement MFA est indépendant du SSO Kerberos.\nC est faux : Seamless SSO ne nécessite aucune licence premium.\nD est faux : Seamless SSO cible les appareils joints au domaine ; le hybrid join est une autre voie de SSO (valable aussi), pas un prérequis ici."}
},
{
id:"d1-035", domain:1, topic:"Source anchor & hard match",
q:{en:"A synced user was accidentally deleted from on-prem AD and recreated. Entra Connect now creates a DUPLICATE cloud account instead of reusing the existing one. Which attribute governs this behaviour?",
   fr:"Un utilisateur synchronisé a été supprimé par erreur de l'AD on-prem puis recréé. Entra Connect crée maintenant un compte cloud EN DOUBLE au lieu de réutiliser l'existant. Quel attribut gouverne ce comportement ?"},
options:[
 {en:"The sourceAnchor / immutableId — the new AD object has a different one, so Entra ID sees a different identity", fr:"Le sourceAnchor / immutableId — le nouvel objet AD en a un différent, donc Entra ID voit une identité différente"},
 {en:"The displayName", fr:"Le displayName"},
 {en:"The department attribute", fr:"L'attribut department"},
 {en:"The user's password hash", fr:"Le hash du mot de passe de l'utilisateur"}],
correct:[0],
explanation:{en:"A is correct: the sourceAnchor (objectGUID, or better ms-DS-ConsistencyGuid) becomes the cloud immutableId and is the permanent link between the AD object and the cloud object. Recreating the AD account changes it, so a new cloud object is created. The fix is a hard match — set the cloud immutableId to the new value.\nB is wrong: displayName is only used in soft match, and only for cloud-only objects being matched by SMTP/UPN.\nC is wrong: department has no identity-linking role.\nD is wrong: the hash is credential material, not an identity anchor.",
fr:"A est correct : le sourceAnchor (objectGUID, ou mieux ms-DS-ConsistencyGuid) devient l'immutableId cloud et constitue le lien permanent entre l'objet AD et l'objet cloud. Recréer le compte AD le change, donc un nouvel objet cloud est créé. La solution est un hard match — définir l'immutableId cloud sur la nouvelle valeur.\nB est faux : le displayName ne sert qu'au soft match, et seulement pour des objets cloud-only appariés par SMTP/UPN.\nC est faux : department ne joue aucun rôle de liaison d'identité.\nD est faux : le hash est un élément d'authentification, pas une ancre d'identité."}
},
{
id:"d1-036", domain:1, topic:"Sync scheduler",
q:{en:"You changed an on-premises user's job title and need it in Entra ID now, without waiting for the default 30-minute cycle. Which command should you run on the Entra Connect server?",
   fr:"Tu as changé le titre d'un utilisateur on-prem et tu le veux dans Entra ID maintenant, sans attendre le cycle de 30 minutes par défaut. Quelle commande lancer sur le serveur Entra Connect ?"},
options:[
 {en:"Start-ADSyncSyncCycle -PolicyType Delta", fr:"Start-ADSyncSyncCycle -PolicyType Delta"},
 {en:"Start-ADSyncSyncCycle -PolicyType Initial", fr:"Start-ADSyncSyncCycle -PolicyType Initial"},
 {en:"Set-ADSyncScheduler -SyncCycleEnabled $false", fr:"Set-ADSyncScheduler -SyncCycleEnabled $false"},
 {en:"Invoke-ADSyncCSObjectPasswordHashSync", fr:"Invoke-ADSyncCSObjectPasswordHashSync"}],
correct:[0],
explanation:{en:"A is correct: a Delta cycle processes only changes since the last run — the fast, normal way to push a single attribute change.\nB is wrong: Initial (full) sync re-imports everything; it works but is heavy and unnecessary, and is reserved for after rule changes.\nC is wrong: that DISABLES the scheduler.\nD is wrong: that is not how you force an attribute sync (and password hash sync is a separate channel).",
fr:"A est correct : un cycle Delta ne traite que les changements depuis la dernière exécution — la méthode rapide et normale pour pousser un changement d'attribut.\nB est faux : la sync Initial (complète) réimporte tout ; ça marche mais c'est lourd et inutile, réservé aux changements de règles.\nC est faux : ça DÉSACTIVE le planificateur.\nD est faux : ce n'est pas ainsi qu'on force une sync d'attribut (et la sync de hash est un canal séparé)."}
},
{
id:"d1-037", domain:1, topic:"Self-service group management",
q:{en:"Users are creating security groups in My Groups, which breaks your naming standards. You must stop non-admins from creating security groups while keeping existing groups intact. Where do you change this?",
   fr:"Les utilisateurs créent des groupes de sécurité dans Mes groupes, ce qui casse tes conventions de nommage. Tu dois empêcher les non-admins de créer des groupes de sécurité tout en gardant les groupes existants. Où fais-tu le changement ?"},
options:[
 {en:"Entra ID > Groups > General settings: set \"Users can create security groups\" to No", fr:"Entra ID > Groupes > Paramètres généraux : mettre « Les utilisateurs peuvent créer des groupes de sécurité » sur Non"},
 {en:"A Conditional Access policy blocking the My Groups app", fr:"Une stratégie d'accès conditionnel bloquant l'application Mes groupes"},
 {en:"Remove the Groups Administrator role from all users", fr:"Retirer le rôle Groups Administrator à tous les utilisateurs"},
 {en:"Delete the My Groups enterprise application", fr:"Supprimer l'application d'entreprise Mes groupes"}],
correct:[0],
explanation:{en:"A is correct: group settings expose separate switches for security groups and Microsoft 365 groups, in the portal and in PowerShell — turning it off stops creation without touching existing groups.\nB is wrong: CA controls access to apps, not this specific capability, and would be a blunt workaround.\nC is wrong: ordinary users create groups because of the default self-service setting, not because they hold Groups Administrator.\nD is wrong: you cannot delete Microsoft first-party service applications, and it would break other self-service features.",
fr:"A est correct : les paramètres de groupes exposent des interrupteurs distincts pour les groupes de sécurité et les groupes Microsoft 365, dans le portail et en PowerShell — le désactiver stoppe la création sans toucher aux groupes existants.\nB est faux : l'accès conditionnel contrôle l'accès aux applications, pas cette capacité précise, et serait un contournement grossier.\nC est faux : les utilisateurs ordinaires créent des groupes à cause du réglage self-service par défaut, pas parce qu'ils ont Groups Administrator.\nD est faux : on ne supprime pas les applications Microsoft de première partie, et cela casserait d'autres fonctions self-service."}
},
{
id:"d1-038", domain:1, topic:"M365 group naming policy",
q:{en:"Management wants every Microsoft 365 group name to start with the department name and wants the words \"CEO\" and \"Payroll\" blocked in group names. Which feature do you configure, and what licence does it need?",
   fr:"La direction veut que chaque nom de groupe Microsoft 365 commence par le nom du département et que les mots « CEO » et « Payroll » soient interdits. Quelle fonctionnalité configures-tu, et quelle licence faut-il ?"},
options:[
 {en:"A group naming policy (prefix/suffix + blocked words), which requires Entra ID P1 for group members", fr:"Une stratégie de nommage de groupes (préfixe/suffixe + mots bloqués), qui nécessite Entra ID P1 pour les membres des groupes"},
 {en:"A group naming policy, which is free for all tenants", fr:"Une stratégie de nommage de groupes, gratuite pour tous les tenants"},
 {en:"An Entra ID Protection policy", fr:"Une stratégie Entra ID Protection"},
 {en:"A dynamic membership rule on displayName", fr:"Une règle d'appartenance dynamique sur displayName"}],
correct:[0],
explanation:{en:"A is correct: the naming policy supports prefixes/suffixes (fixed strings or attributes such as [Department]) plus a custom blocked-words list, and it requires Entra ID P1 licences for group members.\nB is wrong: it is a premium feature, not free.\nC is wrong: ID Protection is about risk, not naming.\nD is wrong: a dynamic rule chooses members, it cannot enforce a name.",
fr:"A est correct : la stratégie de nommage supporte préfixes/suffixes (chaînes fixes ou attributs comme [Department]) plus une liste de mots bloqués personnalisée, et elle nécessite des licences Entra ID P1 pour les membres des groupes.\nB est faux : c'est une fonctionnalité premium, pas gratuite.\nC est faux : ID Protection concerne le risque, pas le nommage.\nD est faux : une règle dynamique choisit les membres, elle ne peut pas imposer un nom."}
},
{
id:"d1-039", domain:1, topic:"M365 group expiration",
q:{en:"Your tenant has hundreds of abandoned Microsoft 365 groups. You enable a group expiration policy with a 180-day lifetime. What happens to a group whose members are actively using its Teams channel and SharePoint site?",
   fr:"Ton tenant compte des centaines de groupes Microsoft 365 abandonnés. Tu actives une stratégie d'expiration avec une durée de vie de 180 jours. Qu'arrive-t-il à un groupe dont les membres utilisent activement son canal Teams et son site SharePoint ?"},
options:[
 {en:"It is renewed automatically — activity in Teams, Outlook, SharePoint or Forms counts as renewal", fr:"Il est renouvelé automatiquement — l'activité dans Teams, Outlook, SharePoint ou Forms vaut renouvellement"},
 {en:"It is deleted after 180 days unless the owner clicks the renewal email", fr:"Il est supprimé après 180 jours sauf si le propriétaire clique sur l'email de renouvellement"},
 {en:"It is converted to a security group", fr:"Il est converti en groupe de sécurité"},
 {en:"Nothing — expiration policies apply only to dynamic groups", fr:"Rien — les stratégies d'expiration ne s'appliquent qu'aux groupes dynamiques"}],
correct:[0],
explanation:{en:"A is correct: auto-renewal is based on activity signals across Microsoft 365 workloads, so active groups never expire and owners are only emailed for genuinely idle ones. Deleted groups stay restorable for 30 days.\nB is wrong: that is the behaviour only for inactive groups.\nC is wrong: expiration never converts group types.\nD is wrong: expiration applies to Microsoft 365 groups regardless of assigned or dynamic membership (and needs Entra ID P1).",
fr:"A est correct : le renouvellement automatique s'appuie sur les signaux d'activité des charges Microsoft 365, donc les groupes actifs n'expirent jamais et les propriétaires ne reçoivent d'email que pour les groupes réellement inactifs. Les groupes supprimés restent restaurables 30 jours.\nB est faux : c'est le comportement uniquement pour les groupes inactifs.\nC est faux : l'expiration ne convertit jamais un type de groupe.\nD est faux : l'expiration s'applique aux groupes Microsoft 365 qu'ils soient à appartenance assignée ou dynamique (et nécessite Entra ID P1)."}
},
{
id:"d1-040", domain:1, topic:"Restore deleted groups",
q:{en:"An administrator deleted a security group and a Microsoft 365 group by mistake 3 days ago. Which can you restore from the Entra portal?",
   fr:"Un administrateur a supprimé par erreur un groupe de sécurité et un groupe Microsoft 365 il y a 3 jours. Lequel peux-tu restaurer depuis le portail Entra ?"},
options:[
 {en:"Only the Microsoft 365 group — it is soft-deleted for 30 days; the security group is permanently gone", fr:"Seulement le groupe Microsoft 365 — il est en suppression réversible 30 jours ; le groupe de sécurité est définitivement perdu"},
 {en:"Both, within 30 days", fr:"Les deux, dans les 30 jours"},
 {en:"Neither — group deletion is always permanent", fr:"Aucun — la suppression d'un groupe est toujours définitive"},
 {en:"Only the security group, because it has no attached workloads", fr:"Seulement le groupe de sécurité, car il n'a pas de charges de travail attachées"}],
correct:[0],
explanation:{en:"A is correct: soft delete with a 30-day restore window applies to Microsoft 365 groups only. Deleting a security group (or a distribution group) is immediate and permanent — you must recreate it and its memberships.\nB is wrong: security groups have no recycle bin.\nC is wrong: Microsoft 365 groups are recoverable.\nD is wrong: it is the opposite.",
fr:"A est correct : la suppression réversible avec fenêtre de restauration de 30 jours ne concerne que les groupes Microsoft 365. Supprimer un groupe de sécurité (ou de distribution) est immédiat et définitif — il faut le recréer avec ses appartenances.\nB est faux : les groupes de sécurité n'ont pas de corbeille.\nC est faux : les groupes Microsoft 365 sont récupérables.\nD est faux : c'est l'inverse."}
},
{
id:"d1-041", domain:1, topic:"UserType conversion",
q:{en:"A long-term contractor invited as a B2B guest is hired as an employee. Their account must keep the same object and access history but gain the default permissions of an internal user. What do you do?",
   fr:"Un prestataire de longue durée invité comme guest B2B est embauché comme salarié. Son compte doit garder le même objet et son historique d'accès mais obtenir les permissions par défaut d'un utilisateur interne. Que fais-tu ?"},
options:[
 {en:"Change the user's UserType property from Guest to Member", fr:"Changer la propriété UserType de l'utilisateur de Guest à Member"},
 {en:"Delete the guest and create a new member account", fr:"Supprimer le guest et créer un nouveau compte membre"},
 {en:"Add the guest to the Global Reader role", fr:"Ajouter le guest au rôle Global Reader"},
 {en:"Change the guest's UPN to an internal domain", fr:"Changer l'UPN du guest vers un domaine interne"}],
correct:[0],
explanation:{en:"A is correct: UserType drives default directory permissions. Flipping Guest to Member keeps the same object, group memberships and audit history while granting member-level default access. Note the sign-in identity (external account) does not change.\nB is wrong: that destroys history and access, and is only needed if you also want a new mailbox/identity.\nC is wrong: Global Reader is an admin role, unrelated to default user permissions.\nD is wrong: changing the UPN of an external identity does not convert its UserType and can break sign-in.",
fr:"A est correct : UserType détermine les permissions par défaut dans l'annuaire. Passer de Guest à Member garde le même objet, les appartenances aux groupes et l'historique d'audit tout en accordant l'accès par défaut d'un membre. Note que l'identité de connexion (compte externe) ne change pas.\nB est faux : cela détruit l'historique et les accès, et n'est nécessaire que si tu veux aussi une nouvelle identité/boîte.\nC est faux : Global Reader est un rôle d'admin, sans lien avec les permissions par défaut.\nD est faux : changer l'UPN d'une identité externe ne convertit pas son UserType et peut casser la connexion."}
},
{
id:"d1-042", domain:1, topic:"B2B direct connect",
q:{en:"Fabrikam employees must participate in a Teams shared channel hosted by Contoso, without any guest account appearing in the Contoso directory. Which capability enables this?",
   fr:"Des employés de Fabrikam doivent participer à un canal partagé Teams hébergé par Contoso, sans qu'aucun compte guest n'apparaisse dans l'annuaire Contoso. Quelle capacité permet cela ?"},
options:[
 {en:"B2B direct connect, configured in cross-tenant access settings on both tenants", fr:"B2B direct connect, configuré dans les cross-tenant access settings des deux tenants"},
 {en:"B2B collaboration with email one-time passcode", fr:"B2B collaboration avec code secret à usage unique par email"},
 {en:"Cross-tenant synchronization", fr:"Cross-tenant synchronization"},
 {en:"A self-service sign-up user flow", fr:"Un user flow d'inscription self-service"}],
correct:[0],
explanation:{en:"A is correct: B2B direct connect creates a mutual trust between tenants for Teams shared channels — external users authenticate in their home tenant and no guest object is provisioned in the resource tenant. Both tenants must allow it in inbound/outbound settings.\nB is wrong: B2B collaboration always creates a guest user object.\nC is wrong: cross-tenant sync creates real B2B member/guest objects in the target tenant.\nD is wrong: self-service sign-up creates local external accounts.",
fr:"A est correct : B2B direct connect crée une confiance mutuelle entre tenants pour les canaux partagés Teams — les utilisateurs externes s'authentifient dans leur tenant d'origine et aucun objet guest n'est provisionné dans le tenant de ressources. Les deux tenants doivent l'autoriser dans leurs paramètres entrants/sortants.\nB est faux : B2B collaboration crée toujours un objet utilisateur guest.\nC est faux : la cross-tenant sync crée de véritables objets B2B (membres/guests) dans le tenant cible.\nD est faux : l'inscription self-service crée des comptes externes locaux."}
},
{
id:"d1-043", domain:1, topic:"Guest sign-in methods",
q:{en:"You invite guests from a partner that has no Entra ID tenant and no Microsoft accounts. What happens when they redeem the invitation, with default tenant settings?",
   fr:"Tu invites des guests d'un partenaire qui n'a ni tenant Entra ID ni comptes Microsoft. Que se passe-t-il quand ils acceptent l'invitation, avec les réglages par défaut du tenant ?"},
options:[
 {en:"They authenticate with email one-time passcode, which is enabled by default for such guests", fr:"Ils s'authentifient avec un code secret à usage unique par email, activé par défaut pour ces guests"},
 {en:"The invitation fails until you configure a SAML/WS-Fed identity provider", fr:"L'invitation échoue jusqu'à ce que tu configures un fournisseur d'identité SAML/WS-Fed"},
 {en:"A Microsoft account is created automatically for them", fr:"Un compte Microsoft est créé automatiquement pour eux"},
 {en:"They must be licensed with Entra ID P1 in your tenant", fr:"Ils doivent avoir une licence Entra ID P1 dans ton tenant"}],
correct:[0],
explanation:{en:"A is correct: email one-time passcode is the default fallback authentication for guests with no Entra tenant, no Microsoft account and no federated IdP — they receive a short-lived code by email at each sign-in.\nB is wrong: direct federation is an option for large partners, not a requirement.\nC is wrong: no MSA is silently created; that redemption path was replaced by email OTP.\nD is wrong: guests are covered by the External ID / MAU model, not by tenant P1 licences per guest.",
fr:"A est correct : le code secret à usage unique par email est l'authentification de secours par défaut pour les guests sans tenant Entra, sans compte Microsoft et sans IdP fédéré — ils reçoivent un code éphémère par email à chaque connexion.\nB est faux : la fédération directe est une option pour les gros partenaires, pas une obligation.\nC est faux : aucun compte Microsoft n'est créé silencieusement ; ce parcours a été remplacé par l'email OTP.\nD est faux : les guests relèvent du modèle External ID / MAU, pas d'une licence P1 par guest dans ton tenant."}
},
{
id:"d1-044", domain:1, topic:"Guest Inviter role",
q:{en:"Project managers must be able to invite external partners as guests, but must not be able to create, delete or modify internal users. Which role do you assign?",
   fr:"Les chefs de projet doivent pouvoir inviter des partenaires externes comme guests, mais ne doivent pas pouvoir créer, supprimer ou modifier des utilisateurs internes. Quel rôle assignes-tu ?"},
options:[
 {en:"Guest Inviter", fr:"Guest Inviter"},
 {en:"User Administrator", fr:"User Administrator"},
 {en:"Global Reader", fr:"Global Reader"},
 {en:"Directory Writers", fr:"Directory Writers"}],
correct:[0],
explanation:{en:"A is correct: Guest Inviter grants exactly one capability — inviting B2B guests — and nothing else. That is least privilege for this requirement.\nB is wrong: User Administrator can manage all users, far beyond what is needed.\nC is wrong: Global Reader is read-only and cannot invite.\nD is wrong: Directory Writers grants broad write access to directory objects.",
fr:"A est correct : Guest Inviter n'accorde qu'une seule capacité — inviter des guests B2B — et rien d'autre. C'est le moindre privilège pour ce besoin.\nB est faux : User Administrator gère tous les utilisateurs, bien au-delà du nécessaire.\nC est faux : Global Reader est en lecture seule et ne peut pas inviter.\nD est faux : Directory Writers accorde de larges droits d'écriture sur les objets de l'annuaire."}
},
{
id:"d1-045", domain:1, topic:"Cross-tenant MFA trust",
q:{en:"Contoso requires MFA for all users. Fabrikam guests already do MFA in their own tenant but are being asked to re-register MFA in Contoso, which they refuse. What should Contoso configure?",
   fr:"Contoso exige le MFA pour tous. Les guests de Fabrikam font déjà du MFA dans leur propre tenant mais on leur demande de réenregistrer le MFA chez Contoso, ce qu'ils refusent. Que doit configurer Contoso ?"},
options:[
 {en:"In cross-tenant access settings, enable inbound trust to accept MFA claims from Fabrikam", fr:"Dans les cross-tenant access settings, activer la confiance entrante pour accepter les revendications MFA de Fabrikam"},
 {en:"Exclude all guests from the MFA Conditional Access policy", fr:"Exclure tous les guests de la stratégie d'accès conditionnel MFA"},
 {en:"Ask Fabrikam to enable Security defaults", fr:"Demander à Fabrikam d'activer les Security defaults"},
 {en:"Convert the guests to members", fr:"Convertir les guests en membres"}],
correct:[0],
explanation:{en:"A is correct: inbound trust settings let the resource tenant accept the MFA (and compliant/hybrid-joined device) claims already satisfied in the guest's home tenant, so the CA policy is met without re-registration.\nB is wrong: that removes the security control entirely.\nC is wrong: Security defaults in the partner tenant do not make Contoso trust their claims.\nD is wrong: UserType has no effect on where MFA is performed.",
fr:"A est correct : les paramètres de confiance entrante permettent au tenant de ressources d'accepter les revendications MFA (et appareil conforme / hybrid joined) déjà satisfaites dans le tenant d'origine du guest, donc la stratégie CA est respectée sans réenregistrement.\nB est faux : cela supprime purement et simplement le contrôle de sécurité.\nC est faux : les Security defaults chez le partenaire ne font pas que Contoso fasse confiance à ses revendications.\nD est faux : le UserType n'a aucun effet sur le lieu où le MFA est réalisé."}
},
{
id:"d1-046", domain:1, topic:"Multi-tenant organization",
q:{en:"After a merger, employees of the acquired tenant must appear as internal members in the parent tenant's address list, provisioned automatically and kept up to date. Which feature do you use?",
   fr:"Après une fusion, les employés du tenant acquis doivent apparaître comme membres internes dans la liste d'adresses du tenant parent, provisionnés automatiquement et tenus à jour. Quelle fonctionnalité utilises-tu ?"},
options:[
 {en:"Cross-tenant synchronization, configured in the source tenant and pushing users into the target tenant", fr:"Cross-tenant synchronization, configurée dans le tenant source et poussant les utilisateurs vers le tenant cible"},
 {en:"Bulk CSV guest invitations repeated monthly", fr:"Des invitations de guests en masse par CSV répétées chaque mois"},
 {en:"Entra Connect installed in both tenants", fr:"Entra Connect installé dans les deux tenants"},
 {en:"B2B direct connect", fr:"B2B direct connect"}],
correct:[0],
explanation:{en:"A is correct: cross-tenant synchronization (part of multi-tenant organization) automatically provisions, updates and deprovisions B2B users in the target tenant, and can create them with UserType Member so they behave like internal users. It is configured in the source tenant and requires Entra ID P1.\nB is wrong: manual CSV waves are not automatic and create stale guests.\nC is wrong: Entra Connect syncs on-prem AD to a tenant, not tenant to tenant.\nD is wrong: B2B direct connect creates no objects at all, so nothing appears in the address list.",
fr:"A est correct : la cross-tenant synchronization (partie de la multi-tenant organization) provisionne, met à jour et déprovisionne automatiquement des utilisateurs B2B dans le tenant cible, et peut les créer avec UserType Member pour qu'ils se comportent comme des internes. Elle se configure dans le tenant source et nécessite Entra ID P1.\nB est faux : des vagues CSV manuelles ne sont pas automatiques et créent des guests obsolètes.\nC est faux : Entra Connect synchronise un AD on-prem vers un tenant, pas un tenant vers un autre.\nD est faux : B2B direct connect ne crée aucun objet, donc rien n'apparaît dans la liste d'adresses."}
},
{
id:"d1-047", domain:1, topic:"Dynamic administrative units",
q:{en:"You want an administrative unit whose members are always the users in the Paris office, without an admin maintaining the list. What do you configure?",
   fr:"Tu veux une administrative unit dont les membres sont toujours les utilisateurs du bureau de Paris, sans qu'un admin entretienne la liste. Que configures-tu ?"},
options:[
 {en:"An administrative unit with dynamic membership, using a rule such as user.city -eq \"Paris\"", fr:"Une administrative unit à appartenance dynamique, avec une règle comme user.city -eq « Paris »"},
 {en:"A dynamic security group, then nest it inside the administrative unit", fr:"Un groupe de sécurité dynamique, puis l'imbriquer dans l'administrative unit"},
 {en:"A scheduled PowerShell script that re-adds members daily", fr:"Un script PowerShell planifié qui réajoute les membres chaque jour"},
 {en:"An access package with an auto-assignment policy", fr:"Un access package avec une stratégie d'auto-assignation"}],
correct:[0],
explanation:{en:"A is correct: administrative units support dynamic membership rules for users and devices, using the same rule syntax as dynamic groups, and require Entra ID P1.\nB is wrong: you add users or devices to an AU, and nesting a group does not make its members AU members for role scoping.\nC is wrong: scripting is exactly the manual maintenance the requirement rules out.\nD is wrong: access packages grant access to resources, they do not populate an AU.",
fr:"A est correct : les administrative units supportent des règles d'appartenance dynamique pour les utilisateurs et les appareils, avec la même syntaxe que les groupes dynamiques, et nécessitent Entra ID P1.\nB est faux : on ajoute des utilisateurs ou des appareils à une AU, et imbriquer un groupe ne fait pas de ses membres des membres de l'AU pour le scoping de rôle.\nC est faux : le script est précisément la maintenance manuelle que l'énoncé exclut.\nD est faux : les access packages donnent accès à des ressources, ils ne peuplent pas une AU."}
},
{
id:"d1-048", domain:1, topic:"Entra roles vs Azure RBAC",
q:{en:"A user holds the Global Administrator Entra role but cannot see any Azure subscription in the Azure portal. Why, and what is the correct fix?",
   fr:"Un utilisateur a le rôle Entra Global Administrator mais ne voit aucun abonnement Azure dans le portail Azure. Pourquoi, et quelle est la bonne correction ?"},
options:[
 {en:"Entra roles and Azure RBAC are separate systems — grant an Azure RBAC role on the subscription (or temporarily elevate access to get User Access Administrator at root scope)", fr:"Les rôles Entra et Azure RBAC sont deux systèmes distincts — accorder un rôle Azure RBAC sur l'abonnement (ou élever temporairement l'accès pour obtenir User Access Administrator à la racine)"},
 {en:"Global Administrator must be activated in PIM before it works on subscriptions", fr:"Global Administrator doit être activé dans PIM avant de fonctionner sur les abonnements"},
 {en:"The user needs an Entra ID P2 license to see subscriptions", fr:"L'utilisateur a besoin d'une licence Entra ID P2 pour voir les abonnements"},
 {en:"The subscription must be moved to another tenant", fr:"L'abonnement doit être déplacé vers un autre tenant"}],
correct:[0],
explanation:{en:"A is correct: Entra roles govern the directory and Microsoft 365 services; Azure resource access is governed by Azure RBAC on management groups, subscriptions and resources. A Global Admin sees nothing until granted RBAC — the documented shortcut is the \"Access management for Azure resources\" elevation, which assigns User Access Administrator at root scope and should be turned off again afterwards.\nB is wrong: PIM activation does not bridge the two systems.\nC is wrong: licensing is irrelevant here.\nD is wrong: the tenant association is not the problem.",
fr:"A est correct : les rôles Entra gouvernent l'annuaire et les services Microsoft 365 ; l'accès aux ressources Azure est gouverné par Azure RBAC sur les groupes d'administration, abonnements et ressources. Un Global Admin ne voit rien tant qu'aucun RBAC ne lui est accordé — le raccourci documenté est l'élévation « Gestion des accès pour les ressources Azure », qui attribue User Access Administrator à la racine et doit être désactivée ensuite.\nB est faux : l'activation PIM ne fait pas le pont entre les deux systèmes.\nC est faux : la licence n'a rien à voir.\nD est faux : le rattachement au tenant n'est pas le problème."}
},
{
id:"d1-049", domain:1, topic:"User settings — app registration",
q:{en:"Security discovers that any employee can register applications in Entra ID, creating unmanaged service principals. You must stop this for non-admins while allowing a delegated team to keep registering apps. What do you do?",
   fr:"La sécurité découvre que n'importe quel employé peut enregistrer des applications dans Entra ID, créant des service principals non gérés. Tu dois l'empêcher pour les non-admins tout en laissant une équipe déléguée continuer. Que fais-tu ?"},
options:[
 {en:"Set \"Users can register applications\" to No, and assign the Application Developer role to the delegated team", fr:"Mettre « Les utilisateurs peuvent enregistrer des applications » sur Non, et assigner le rôle Application Developer à l'équipe déléguée"},
 {en:"Set \"Users can register applications\" to No, and add the team to the Global Administrator role", fr:"Mettre « Les utilisateurs peuvent enregistrer des applications » sur Non, et ajouter l'équipe au rôle Global Administrator"},
 {en:"Block the Entra portal with Conditional Access for non-admins", fr:"Bloquer le portail Entra par accès conditionnel pour les non-admins"},
 {en:"Delete all existing app registrations", fr:"Supprimer tous les app registrations existants"}],
correct:[0],
explanation:{en:"A is correct: the user setting removes the default tenant-wide ability, and Application Developer is the least-privilege role that allows registering applications (the creator becomes owner).\nB is wrong: Global Administrator massively over-grants.\nC is wrong: apps can be registered via Graph/PowerShell, and blocking a portal is not an authorization control.\nD is wrong: deleting existing apps breaks services and does not prevent new registrations.",
fr:"A est correct : le réglage utilisateur retire la capacité par défaut à l'échelle du tenant, et Application Developer est le rôle de moindre privilège qui permet d'enregistrer des applications (le créateur en devient propriétaire).\nB est faux : Global Administrator accorde beaucoup trop.\nC est faux : on peut enregistrer des apps via Graph/PowerShell, et bloquer un portail n'est pas un contrôle d'autorisation.\nD est faux : supprimer les apps existantes casse des services et n'empêche pas de nouveaux enregistrements."}
},
{
id:"d1-050", domain:1, topic:"Password writeback prerequisites",
q:{en:"Hybrid users must be able to reset their password in the cloud and have it written back to on-premises AD. Which combination is required?",
   fr:"Les utilisateurs hybrides doivent pouvoir réinitialiser leur mot de passe dans le cloud et le voir réécrit dans l'AD on-prem. Quelle combinaison est requise ?"},
options:[
 {en:"Entra ID P1 (or higher), password writeback enabled in Entra Connect, and the connector account granted Reset Password / Change Password / Write lockoutTime / Write pwdLastSet on the AD OUs", fr:"Entra ID P1 (ou plus), le password writeback activé dans Entra Connect, et le compte connecteur disposant de Reset Password / Change Password / Write lockoutTime / Write pwdLastSet sur les OU AD"},
 {en:"Entra ID Free and password hash synchronization", fr:"Entra ID Free et la synchronisation de hash de mot de passe"},
 {en:"AD FS with the SSPR claim rule", fr:"AD FS avec la règle de revendication SSPR"},
 {en:"Entra Cloud Sync only, which cannot do writeback", fr:"Entra Cloud Sync uniquement, qui ne sait pas faire de writeback"}],
correct:[0],
explanation:{en:"A is correct: writeback is a premium feature, must be switched on as an optional feature in Entra Connect, and only works if the AD connector account holds the password-related permissions on the relevant OUs.\nB is wrong: SSPR writeback is not available in the Free tier, and PHS alone does not write back.\nC is wrong: AD FS is unrelated to writeback.\nD is wrong: password writeback is supported by Entra Cloud Sync as well, so the premise is false.",
fr:"A est correct : le writeback est une fonctionnalité premium, doit être activé comme fonctionnalité optionnelle dans Entra Connect, et ne fonctionne que si le compte connecteur AD détient les permissions liées aux mots de passe sur les OU concernées.\nB est faux : le writeback SSPR n'est pas disponible en édition Free, et PHS seul ne réécrit rien.\nC est faux : AD FS n'a rien à voir avec le writeback.\nD est faux : le password writeback est aussi supporté par Entra Cloud Sync, donc la prémisse est fausse."}
},
{
id:"d1-051", domain:1, topic:"Sync scoping",
q:{en:"For a pilot, only the 50 users of one AD security group must sync to Entra ID. Later the whole forest will sync. Which Entra Connect filtering method fits the pilot best?",
   fr:"Pour un pilote, seuls les 50 utilisateurs d'un groupe de sécurité AD doivent se synchroniser vers Entra ID. Plus tard, toute la forêt sera synchronisée. Quelle méthode de filtrage Entra Connect convient le mieux au pilote ?"},
options:[
 {en:"Group-based filtering, which is designed for pilot deployments and supports a single group", fr:"Le filtrage par groupe, conçu pour les déploiements pilotes et limité à un seul groupe"},
 {en:"Attribute-based filtering on extensionAttribute15", fr:"Le filtrage par attribut sur extensionAttribute15"},
 {en:"Domain-based filtering", fr:"Le filtrage par domaine"},
 {en:"Deleting the other users from AD temporarily", fr:"Supprimer temporairement les autres utilisateurs de l'AD"}],
correct:[0],
explanation:{en:"A is correct: group-based filtering exists specifically for pilots — you point the wizard at one group and only its members (and referenced objects) sync. It is not meant for production scale, which is why you switch to OU or attribute filtering later.\nB is wrong: attribute filtering works but requires custom sync rules and stamping 50 users; more effort for the same result.\nC is wrong: domain filtering selects whole domains, not 50 users.\nD is wrong: never delete production AD objects to control sync scope.",
fr:"A est correct : le filtrage par groupe existe précisément pour les pilotes — tu désignes un groupe dans l'assistant et seuls ses membres (et objets référencés) se synchronisent. Il n'est pas prévu pour la production, d'où le passage ultérieur à un filtrage par OU ou attribut.\nB est faux : le filtrage par attribut fonctionne mais impose des règles de sync personnalisées et de marquer 50 utilisateurs ; plus d'effort pour le même résultat.\nC est faux : le filtrage par domaine sélectionne des domaines entiers, pas 50 utilisateurs.\nD est faux : on ne supprime jamais des objets AD de production pour contrôler la portée de la sync."}
},
{
id:"d1-052", domain:1, topic:"Guest sponsors",
q:{en:"Auditors ask who inside Contoso is accountable for each external guest, and want that person to be the default reviewer in access reviews. Which guest property should you populate?",
   fr:"Les auditeurs demandent qui, chez Contoso, est responsable de chaque guest externe, et veulent que cette personne soit le relecteur par défaut des access reviews. Quelle propriété du guest faut-il renseigner ?"},
options:[
 {en:"The Sponsors property of the guest user", fr:"La propriété Sponsors de l'utilisateur guest"},
 {en:"The Manager property, which access reviews cannot use for guests", fr:"La propriété Manager, que les access reviews ne peuvent pas utiliser pour les guests"},
 {en:"A custom security attribute named Owner", fr:"Un attribut de sécurité personnalisé nommé Owner"},
 {en:"The invitedBy field, which is read-only and not reviewable", fr:"Le champ invitedBy, en lecture seule et non exploitable"}],
correct:[0],
explanation:{en:"A is correct: sponsors are the documented accountability model for guests — one or more internal users or groups can be sponsors, and access reviews can target \"Sponsors\" as reviewers with a fallback.\nB is wrong: managers can be reviewers, but sponsors is the purpose-built property for external users.\nC is wrong: custom security attributes are for filtering and CA scoping, not reviewer selection.\nD is wrong: the inviter is recorded but is not a reviewer selection option.",
fr:"A est correct : les sponsors sont le modèle de responsabilité documenté pour les guests — un ou plusieurs utilisateurs ou groupes internes peuvent être sponsors, et les access reviews peuvent désigner « Sponsors » comme relecteurs avec un repli.\nB est faux : les managers peuvent être relecteurs, mais sponsors est la propriété prévue pour les utilisateurs externes.\nC est faux : les attributs de sécurité personnalisés servent au filtrage et au scoping CA, pas au choix des relecteurs.\nD est faux : l'invitant est enregistré mais n'est pas une option de sélection de relecteur."}
},
{
id:"d1-053", domain:1, topic:"Nested groups limitations",
q:{en:"Group \"All-Staff\" contains the groups \"Paris\" and \"Berlin\" as members. You assign licenses to All-Staff and also use it in a dynamic group rule. What is the result?",
   fr:"Le groupe « All-Staff » contient les groupes « Paris » et « Berlin » comme membres. Tu assignes des licences à All-Staff et tu l'utilises aussi dans une règle de groupe dynamique. Quel est le résultat ?"},
options:[
 {en:"Members of the nested groups get no licenses, because group-based licensing ignores nested group members; dynamic rules also cannot enumerate nested membership", fr:"Les membres des groupes imbriqués n'obtiennent aucune licence, car le licensing par groupe ignore les membres imbriqués ; les règles dynamiques ne savent pas non plus énumérer l'appartenance imbriquée"},
 {en:"Everyone is licensed transitively", fr:"Tout le monde est licencié de façon transitive"},
 {en:"Licenses are applied but the dynamic rule fails validation", fr:"Les licences s'appliquent mais la règle dynamique échoue à la validation"},
 {en:"Nested groups are not allowed in Entra ID at all", fr:"Les groupes imbriqués ne sont pas autorisés du tout dans Entra ID"}],
correct:[0],
explanation:{en:"A is correct: group-based licensing applies only to direct user members, and dynamic membership rules cannot express nested group membership (memberOf rules cover direct membership of specified groups, not recursion). Flatten the design instead.\nB is wrong: transitive licensing is exactly what does NOT happen.\nC is wrong: the licensing side is also affected.\nD is wrong: security groups can be nested; the limitation is in how features consume them.",
fr:"A est correct : le licensing par groupe ne s'applique qu'aux utilisateurs membres directs, et les règles d'appartenance dynamique ne savent pas exprimer une appartenance imbriquée (les règles memberOf couvrent l'appartenance directe à des groupes désignés, pas la récursion). Il faut aplatir la conception.\nB est faux : le licensing transitif est précisément ce qui ne se produit PAS.\nC est faux : le côté licences est aussi affecté.\nD est faux : les groupes de sécurité peuvent être imbriqués ; la limite est dans la façon dont les fonctionnalités les consomment."}
},
{
id:"d1-054", domain:1, topic:"Directory extension attributes",
q:{en:"An on-premises HR attribute, employeeCostCenter, must be available in Entra ID so it can be emitted as a claim to a SaaS application. What do you configure in Entra Connect?",
   fr:"Un attribut RH on-prem, employeeCostCenter, doit être disponible dans Entra ID pour être émis comme claim vers une application SaaS. Que configures-tu dans Entra Connect ?"},
options:[
 {en:"The Directory extension attribute sync optional feature, selecting employeeCostCenter", fr:"La fonctionnalité optionnelle Directory extension attribute sync, en sélectionnant employeeCostCenter"},
 {en:"Password hash synchronization", fr:"La synchronisation de hash de mot de passe"},
 {en:"A custom security attribute in Entra ID, populated manually", fr:"Un attribut de sécurité personnalisé dans Entra ID, rempli manuellement"},
 {en:"An access package with a custom extension", fr:"Un access package avec une extension personnalisée"}],
correct:[0],
explanation:{en:"A is correct: directory extensions let Entra Connect sync extra AD attributes into the cloud directory, where they can be used in claims mapping and Graph queries.\nB is wrong: PHS synchronizes credentials, not attributes.\nC is wrong: custom security attributes are not synced from AD by Connect and are aimed at ABAC/filtering.\nD is wrong: access packages are a governance feature, unrelated to attribute sync.",
fr:"A est correct : les directory extensions permettent à Entra Connect de synchroniser des attributs AD supplémentaires vers l'annuaire cloud, où ils peuvent servir au mapping de claims et aux requêtes Graph.\nB est faux : PHS synchronise des identifiants, pas des attributs.\nC est faux : les attributs de sécurité personnalisés ne sont pas synchronisés depuis l'AD par Connect et visent l'ABAC/le filtrage.\nD est faux : les access packages sont une fonctionnalité de gouvernance, sans lien avec la sync d'attributs."}
},
{
id:"d1-055", domain:1, topic:"External collaboration settings",
q:{en:"You must allow collaboration with fabrikam.com only, and block guest invitations to every other domain, tenant-wide. What do you configure?",
   fr:"Tu dois autoriser la collaboration avec fabrikam.com uniquement, et bloquer les invitations de guests vers tous les autres domaines, à l'échelle du tenant. Que configures-tu ?"},
options:[
 {en:"An allow list in External collaboration settings containing fabrikam.com", fr:"Une liste d'autorisation dans les External collaboration settings contenant fabrikam.com"},
 {en:"A deny list containing every other domain", fr:"Une liste de refus contenant tous les autres domaines"},
 {en:"A Conditional Access policy targeting guest users", fr:"Une stratégie d'accès conditionnel ciblant les utilisateurs guests"},
 {en:"Cross-tenant access settings inbound trust for fabrikam.com", fr:"La confiance entrante des cross-tenant access settings pour fabrikam.com"}],
correct:[0],
explanation:{en:"A is correct: collaboration restrictions accept either an allow list or a deny list (never both), and an allow list is the correct, maintainable way to permit exactly one domain — everything else is blocked by default.\nB is wrong: enumerating the entire internet is impossible to maintain.\nC is wrong: CA controls sign-in conditions for existing guests, it does not restrict who can be invited.\nD is wrong: inbound trust governs MFA/device claims, not which domains may be invited.",
fr:"A est correct : les restrictions de collaboration acceptent soit une liste d'autorisation soit une liste de refus (jamais les deux), et une liste d'autorisation est la façon correcte et maintenable de n'autoriser qu'un domaine — tout le reste est bloqué par défaut.\nB est faux : énumérer tout l'internet est impossible à maintenir.\nC est faux : l'accès conditionnel contrôle les conditions de connexion des guests existants, il ne restreint pas qui peut être invité.\nD est faux : la confiance entrante gouverne les revendications MFA/appareil, pas les domaines invitables."}
}
];
