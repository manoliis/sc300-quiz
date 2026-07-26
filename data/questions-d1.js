"use strict";
/* Domain 1 — Implement and manage user identities (20-25%) */
window.SC300_QUESTIONS_D1 = [
{
id:"d1-001", domain:1, topic:"Administrative units",
q:{en:"Contoso has offices in France and Germany. You must allow the France helpdesk team to reset passwords ONLY for users in the France office, following the principle of least privilege. What should you do?",
   fr:"Contoso a des bureaux en France et en Allemagne. Tu dois permettre au helpdesk France de réinitialiser les mots de passe UNIQUEMENT des utilisateurs du bureau France, en respectant le principe du moindre privilège. Que fais-tu ?"},
options:[
 {en:"Create an administrative unit containing France users and assign Helpdesk Administrator scoped to that AU", fr:"Créer une administrative unit contenant les utilisateurs France et assigner Helpdesk Administrator scopé sur cette AU"},
 {en:"Assign the Helpdesk Administrator role at tenant scope", fr:"Assigner le rôle Helpdesk Administrator au niveau du tenant"},
 {en:"Create a security group for France users and assign the Password Administrator role to the group", fr:"Créer un groupe de sécurité pour les utilisateurs France et assigner le rôle Password Administrator au groupe"},
 {en:"Assign the User Administrator role at tenant scope", fr:"Assigner le rôle User Administrator au niveau du tenant"}],
correct:[0],
explanation:{en:"A is correct: an administrative unit (AU) restricts the scope of a role assignment to only the users inside it — the France helpdesk can then reset passwords only for France users.\nB is wrong: tenant-scope Helpdesk Administrator could reset passwords for ALL users, violating least privilege.\nC is wrong: assigning a role to a group still grants it at tenant scope — the group defines WHO gets the role, not WHICH users it applies to.\nD is wrong: User Administrator at tenant scope is even broader (manages all users and groups).",
fr:"A est correct : une administrative unit (AU) restreint la portée d'une attribution de rôle aux seuls utilisateurs qu'elle contient — le helpdesk France ne peut réinitialiser que les mots de passe des utilisateurs France.\nB est faux : Helpdesk Administrator au niveau tenant permettrait de réinitialiser TOUS les utilisateurs, violation du moindre privilège.\nC est faux : assigner un rôle à un groupe le donne quand même au niveau tenant — le groupe définit QUI reçoit le rôle, pas sur QUELS utilisateurs il s'applique.\nD est faux : User Administrator au niveau tenant est encore plus large (gère tous les utilisateurs et groupes)."}
},
{
id:"d1-002", domain:1, topic:"Dynamic groups",
q:{en:"You need a group whose membership automatically includes all users whose department attribute is \"Sales\". Which membership rule should you use?",
   fr:"Tu as besoin d'un groupe dont l'appartenance inclut automatiquement tous les utilisateurs dont l'attribut department est « Sales ». Quelle règle d'appartenance utiliser ?"},
options:[
 {en:"department -contains \"Sales\"", fr:"department -contains \"Sales\""},
 {en:"user.department -eq \"Sales\"", fr:"user.department -eq \"Sales\""},
 {en:"user.department == \"Sales\"", fr:"user.department == \"Sales\""},
 {en:"user.department = \"Sales\"", fr:"user.department = \"Sales\""}],
correct:[1],
explanation:{en:"A is wrong: the property must be prefixed with the object type (user. or device.), and -contains checks substring collections, not exact equality.\nB is correct: dynamic membership rules use the syntax property operator value, e.g. user.department -eq \"Sales\". Operators are PowerShell-style: -eq, -ne, -contains, -startsWith, etc.\nC and D are wrong: = and == are not valid operators in dynamic membership rules.",
fr:"A est faux : la propriété doit être préfixée par le type d'objet (user. ou device.), et -contains teste une sous-chaîne, pas l'égalité exacte.\nB est correct : les règles d'appartenance dynamique utilisent la syntaxe propriété opérateur valeur, ex : user.department -eq \"Sales\". Les opérateurs sont de style PowerShell : -eq, -ne, -contains, -startsWith, etc.\nC et D sont faux : = et == ne sont pas des opérateurs valides."}
},
{
id:"d1-003", domain:1, topic:"Licensing",
q:{en:"You assign an Entra ID P1 license to a group using group-based licensing. One user in the group shows a licensing error. What is the most likely cause?",
   fr:"Tu assignes une licence Entra ID P1 à un groupe via le group-based licensing. Un utilisateur du groupe affiche une erreur de licence. Quelle est la cause la plus probable ?"},
options:[
 {en:"The group is a Microsoft 365 group", fr:"Le groupe est un groupe Microsoft 365"},
 {en:"The user is a guest account", fr:"L'utilisateur est un compte guest"},
 {en:"The user has no usage location configured", fr:"L'utilisateur n'a pas de « usage location » configurée"},
 {en:"Group-based licensing requires an E5 license", fr:"Le group-based licensing nécessite une licence E5"}],
correct:[2],
explanation:{en:"A is wrong: both security groups and Microsoft 365 groups support group-based licensing.\nB is wrong: guests can be licensed too (though unusual, it does not automatically cause an error).\nC is correct: license assignment requires a usage location on the user (some services are restricted by country). Missing usage location is the classic cause of group licensing errors.\nD is wrong: group-based licensing requires Entra ID P1 or above — which is exactly what is being assigned; no E5 needed.",
fr:"A est faux : les groupes de sécurité ET les groupes Microsoft 365 supportent le licensing par groupe.\nB est faux : les guests peuvent aussi être licenciés (inhabituel, mais pas une erreur automatique).\nC est correct : l'attribution de licence exige une « usage location » sur l'utilisateur (certains services sont restreints par pays). Son absence est la cause classique des erreurs de licence par groupe.\nD est faux : le group-based licensing nécessite Entra ID P1 ou supérieur — c'est justement ce qui est assigné ; pas besoin d'E5."}
},
{
id:"d1-004", domain:1, topic:"Entra roles",
q:{en:"A user with the Global Administrator role cannot see or manage Azure subscriptions in the tenant. They need to manage access to ALL Azure subscriptions. What should they do?",
   fr:"Un utilisateur avec le rôle Global Administrator ne peut pas voir ni gérer les abonnements Azure du tenant. Il doit gérer l'accès à TOUS les abonnements Azure. Que doit-il faire ?"},
options:[
 {en:"Ask for the Owner role on each subscription", fr:"Demander le rôle Owner sur chaque abonnement"},
 {en:"Assign themselves the Azure AD Contributor role", fr:"S'assigner le rôle Azure AD Contributor"},
 {en:"Nothing — Global Administrator already includes Azure RBAC Owner", fr:"Rien — Global Administrator inclut déjà Owner en Azure RBAC"},
 {en:"Enable \"Access management for Azure resources\" in their Entra ID properties", fr:"Activer « Access management for Azure resources » dans ses propriétés Entra ID"}],
correct:[3],
explanation:{en:"A is wrong: possible but not scalable and requires someone else to grant it on every subscription.\nB is wrong: there is no \"Azure AD Contributor\" role for this purpose.\nC is wrong: Global Administrator does NOT automatically get Azure RBAC permissions — that separation is by design.\nD is correct: Entra roles and Azure RBAC are separate systems. A Global Admin can elevate access via the \"Access management for Azure resources\" toggle, which grants User Access Administrator at the root management group scope — allowing them to manage access on all subscriptions.",
fr:"A est faux : possible mais pas scalable, et il faut que quelqu'un d'autre l'accorde sur chaque abonnement.\nB est faux : il n'existe pas de rôle « Azure AD Contributor » pour ça.\nC est faux : Global Administrator n'obtient PAS automatiquement de permissions Azure RBAC — cette séparation est voulue.\nD est correct : les rôles Entra et Azure RBAC sont des systèmes séparés. Un Global Admin peut élever son accès via le bouton « Access management for Azure resources », qui donne User Access Administrator au scope du root management group — permettant de gérer l'accès sur tous les abonnements."}
},
{
id:"d1-005", domain:1, topic:"B2B collaboration",
q:{en:"You invite partner@fabrikam.com as a guest. Fabrikam does not use Microsoft Entra ID or Microsoft accounts. How will the guest authenticate by default?",
   fr:"Tu invites partner@fabrikam.com comme guest. Fabrikam n'utilise ni Microsoft Entra ID ni comptes Microsoft. Comment le guest va-t-il s'authentifier par défaut ?"},
options:[
 {en:"With an email one-time passcode (OTP)", fr:"Avec un code à usage unique envoyé par email (OTP)"},
 {en:"With a mandatory new Microsoft account", fr:"Avec un nouveau compte Microsoft obligatoire"},
 {en:"With SAML direct federation configured automatically", fr:"Avec une fédération directe SAML configurée automatiquement"},
 {en:"He cannot be invited", fr:"Il ne peut pas être invité"}],
correct:[0],
explanation:{en:"A is correct: when the invited user has no Entra tenant, no Microsoft account, and no configured federation, the email one-time passcode feature (enabled by default) sends a code to their email at each sign-in.\nB is wrong: creating a Microsoft account is a fallback path, not mandatory since OTP became the default.\nC is wrong: SAML/WS-Fed direct federation must be explicitly configured by an admin — it is never automatic.\nD is wrong: B2B supports any email address.",
fr:"A est correct : quand l'invité n'a ni tenant Entra, ni compte Microsoft, ni fédération configurée, la fonctionnalité email one-time passcode (activée par défaut) lui envoie un code par email à chaque connexion.\nB est faux : créer un compte Microsoft est une option de repli, pas obligatoire depuis que l'OTP est le défaut.\nC est faux : la fédération directe SAML/WS-Fed doit être configurée explicitement par un admin — jamais automatique.\nD est faux : le B2B accepte n'importe quelle adresse email."}
},
{
id:"d1-006", domain:1, topic:"Cross-tenant access",
q:{en:"Users from partner tenant Fabrikam complain they must perform MFA twice: once in their tenant and once when accessing your apps as guests. They already satisfy MFA at Fabrikam. How do you remove the double MFA while keeping MFA enforcement?",
   fr:"Les utilisateurs du tenant partenaire Fabrikam se plaignent de devoir faire le MFA deux fois : dans leur tenant puis en accédant à tes apps comme guests. Ils font déjà le MFA chez Fabrikam. Comment supprimer le double MFA tout en gardant l'exigence MFA ?"},
options:[
 {en:"Convert the guests to member users", fr:"Convertir les guests en utilisateurs members"},
 {en:"In cross-tenant access settings, configure inbound trust to accept MFA claims from Fabrikam", fr:"Dans les cross-tenant access settings, configurer le trust entrant pour accepter les claims MFA de Fabrikam"},
 {en:"Exclude guests from your Conditional Access MFA policy", fr:"Exclure les guests de ta politique MFA Conditional Access"},
 {en:"Ask Fabrikam to disable their MFA policy", fr:"Demander à Fabrikam de désactiver sa politique MFA"}],
correct:[1],
explanation:{en:"A is wrong: user type doesn't change MFA evaluation and converting external users to members is not appropriate here.\nB is correct: cross-tenant access settings > inbound trust settings let you trust MFA (and compliant/hybrid-joined device claims) performed in the partner's home tenant, so your CA policy is satisfied without a second MFA prompt.\nC is wrong: excluding guests removes MFA protection entirely.\nD is wrong: that weakens the partner's security and doesn't solve your policy requirement.",
fr:"A est faux : le type d'utilisateur ne change pas l'évaluation MFA, et convertir des externes en members n'est pas approprié ici.\nB est correct : les cross-tenant access settings > trust entrant permettent de faire confiance au MFA (et aux claims d'appareil conforme/hybrid-joined) effectué dans le tenant d'origine du partenaire — ta politique CA est satisfaite sans second MFA.\nC est faux : exclure les guests supprime totalement la protection MFA.\nD est faux : ça affaiblit la sécurité du partenaire et ne résout pas ton exigence."}
},
{
id:"d1-007", domain:1, topic:"Hybrid identity",
q:{en:"Your company wants cloud authentication with these requirements: passwords must NEVER be stored in the cloud in any form, and password validation must occur against on-premises domain controllers. Which method should you choose?",
   fr:"Ton entreprise veut une authentification cloud avec ces exigences : les mots de passe ne doivent JAMAIS être stockés dans le cloud sous aucune forme, et la validation doit se faire sur les contrôleurs de domaine on-prem. Quelle méthode choisir ?"},
options:[
 {en:"Password Hash Synchronization (PHS)", fr:"Password Hash Synchronization (PHS)"},
 {en:"Seamless SSO alone", fr:"Seamless SSO seul"},
 {en:"Pass-through Authentication (PTA)", fr:"Pass-through Authentication (PTA)"},
 {en:"Email one-time passcode", fr:"Email one-time passcode"}],
correct:[2],
explanation:{en:"A is wrong: PHS stores a hash of the password hash in Entra ID — that violates the \"never in the cloud in any form\" requirement.\nB is wrong: Seamless SSO is a convenience feature added on top of PHS or PTA; it is not an authentication method by itself.\nC is correct: PTA validates the password directly against on-prem DCs via lightweight agents; no password data (not even hashes) is stored in the cloud.\nD is wrong: email OTP is for B2B guests, not employee authentication.",
fr:"A est faux : PHS stocke un hash du hash du mot de passe dans Entra ID — ça viole l'exigence « jamais dans le cloud sous aucune forme ».\nB est faux : Seamless SSO est un confort ajouté par-dessus PHS ou PTA ; ce n'est pas une méthode d'authentification en soi.\nC est correct : PTA valide le mot de passe directement sur les DC on-prem via des agents légers ; aucune donnée de mot de passe (même pas un hash) n'est stockée dans le cloud.\nD est faux : l'email OTP sert aux guests B2B, pas à l'authentification des employés."}
},
{
id:"d1-008", domain:1, topic:"Hybrid identity",
q:{en:"You deploy Pass-through Authentication. You must ensure authentication remains available if one server fails. What should you do?",
   fr:"Tu déploies Pass-through Authentication. Tu dois garantir que l'authentification reste disponible si un serveur tombe. Que fais-tu ?"},
options:[
 {en:"Enable Password Hash Sync as the primary method", fr:"Activer Password Hash Sync comme méthode principale"},
 {en:"Configure AD FS with a WAP farm", fr:"Configurer AD FS avec une ferme WAP"},
 {en:"Deploy a second Entra Connect server in active mode", fr:"Déployer un second serveur Entra Connect en mode actif"},
 {en:"Install additional PTA agents on multiple servers", fr:"Installer des agents PTA supplémentaires sur plusieurs serveurs"}],
correct:[3],
explanation:{en:"A is wrong: enabling PHS as primary changes the authentication method instead of making PTA highly available (PHS can be a backup/failover strategy but doesn't answer the requirement).\nB is wrong: AD FS is a different, more complex architecture — not needed for PTA HA.\nC is wrong: you can only have ONE active Entra Connect Sync server; a second one must be in staging mode, and it handles sync, not PTA HA (though extra agents can be standalone).\nD is correct: PTA high availability is achieved by installing multiple authentication agents (Microsoft recommends at least 3) on different servers.",
fr:"A est faux : activer PHS en principal change la méthode d'authentification au lieu de rendre PTA hautement disponible.\nB est faux : AD FS est une architecture différente et plus complexe — inutile pour la HA de PTA.\nC est faux : on ne peut avoir qu'UN seul serveur Entra Connect Sync actif ; un second doit être en staging, et il gère la sync, pas la HA de PTA.\nD est correct : la haute disponibilité de PTA s'obtient en installant plusieurs authentication agents (Microsoft recommande au moins 3) sur des serveurs différents."}
},
{
id:"d1-009", domain:1, topic:"Entra Cloud Sync",
q:{en:"Which scenario REQUIRES Microsoft Entra Cloud Sync instead of Entra Connect Sync?",
   fr:"Quel scénario NÉCESSITE Microsoft Entra Cloud Sync plutôt qu'Entra Connect Sync ?"},
options:[
 {en:"Synchronizing users from a disconnected AD forest that has no line of sight to the main forest", fr:"Synchroniser les utilisateurs d'une forêt AD déconnectée sans visibilité réseau vers la forêt principale"},
 {en:"Exchange hybrid writeback", fr:"Le writeback hybride Exchange"},
 {en:"Synchronizing device objects to Entra ID", fr:"Synchroniser des objets appareils vers Entra ID"},
 {en:"Using Pass-through Authentication", fr:"Utiliser Pass-through Authentication"}],
correct:[0],
explanation:{en:"A is correct: Cloud Sync uses lightweight agents configured from the cloud, so it supports multi-forest scenarios where forests are disconnected (e.g. after a merger/acquisition). Connect Sync needs connectivity to all forests from one server.\nB is wrong: Exchange hybrid writeback requires Connect Sync.\nC is wrong: device object sync is supported by Connect Sync, NOT by Cloud Sync.\nD is wrong: PTA is a Connect Sync feature; Cloud Sync supports PHS only.",
fr:"A est correct : Cloud Sync utilise des agents légers configurés depuis le cloud, donc il supporte les scénarios multi-forêts déconnectées (ex : après une fusion/acquisition). Connect Sync exige une connectivité vers toutes les forêts depuis un serveur.\nB est faux : le writeback hybride Exchange nécessite Connect Sync.\nC est faux : la sync des objets appareils est supportée par Connect Sync, PAS par Cloud Sync.\nD est faux : PTA est une fonctionnalité de Connect Sync ; Cloud Sync ne supporte que PHS."}
},
{
id:"d1-010", domain:1, topic:"Guest access restrictions",
q:{en:"You must prevent guest users from enumerating other users, groups, and directory objects. Guests should only see their own profile. Which setting do you configure?",
   fr:"Tu dois empêcher les guests d'énumérer les autres utilisateurs, groupes et objets d'annuaire. Les guests ne doivent voir que leur propre profil. Quel paramètre configures-tu ?"},
options:[
 {en:"Guest invite settings = \"No one in the organization can invite guest users\"", fr:"Guest invite settings = « Personne dans l'organisation ne peut inviter de guests »"},
 {en:"Guest user access restrictions = \"Guest user access is restricted to their own directory objects (most restrictive)\"", fr:"Guest user access restrictions = « L'accès des guests est restreint à leurs propres objets d'annuaire (le plus restrictif) »"},
 {en:"Cross-tenant access settings inbound = Block", fr:"Cross-tenant access settings entrant = Bloquer"},
 {en:"Set all guests' UserType to Member", fr:"Passer le UserType de tous les guests à Member"}],
correct:[1],
explanation:{en:"A is wrong: that controls WHO can send invitations, not what existing guests can see.\nB is correct: in External collaboration settings, the most restrictive guest access level limits guests to their own directory objects only.\nC is wrong: blocking inbound cross-tenant access prevents collaboration entirely.\nD is wrong: making them Members would INCREASE their directory visibility.",
fr:"A est faux : ça contrôle QUI peut envoyer des invitations, pas ce que les guests existants peuvent voir.\nB est correct : dans External collaboration settings, le niveau d'accès guest le plus restrictif limite les guests à leurs propres objets d'annuaire.\nC est faux : bloquer l'accès cross-tenant entrant empêche toute collaboration.\nD est faux : les passer en Members AUGMENTERAIT leur visibilité sur l'annuaire."}
},
{
id:"d1-011", domain:1, topic:"Role-assignable groups",
q:{en:"You create a group and plan to assign the User Administrator role to it. The option \"Microsoft Entra roles can be assigned to the group\" is missing. Which TWO statements explain valid requirements? (Select all that apply)",
   fr:"Tu crées un groupe pour lui assigner le rôle User Administrator. L'option « Microsoft Entra roles can be assigned to the group » est absente. Quelles DEUX affirmations correspondent aux prérequis valides ? (Sélectionne toutes les bonnes réponses)"},
options:[
 {en:"Any Microsoft 365 group with dynamic membership works", fr:"N'importe quel groupe Microsoft 365 à appartenance dynamique convient"},
 {en:"The setting can be toggled at any time by a Group Administrator", fr:"Le paramètre peut être activé à tout moment par un Group Administrator"},
 {en:"The setting can only be enabled when the group is created", fr:"Ce paramètre ne peut être activé qu'à la création du groupe"},
 {en:"The group must use assigned (not dynamic) membership and be a security or M365 group with hidden membership", fr:"Le groupe doit avoir une appartenance assignée (pas dynamique)"}],
correct:[2,3],
explanation:{en:"A is wrong: dynamic membership is explicitly not supported for role-assignable groups.\nB is wrong: it cannot be toggled after creation, by anyone.\nC and D are correct: isAssignableToRole can ONLY be set at group creation (never after), and the group must have assigned membership (dynamic membership is not allowed for role-assignable groups). Creating them requires at least Privileged Role Administrator.",
fr:"A est faux : l'appartenance dynamique n'est explicitement pas supportée pour les groupes role-assignable.\nB est faux : impossible à modifier après création, par qui que ce soit.\nC et D sont corrects : isAssignableToRole ne peut être défini QU'À la création du groupe (jamais après), et le groupe doit avoir une appartenance assignée (l'appartenance dynamique est interdite pour les groupes role-assignable). Leur création exige au moins Privileged Role Administrator."}
},
{
id:"d1-012", domain:1, topic:"Custom domains",
q:{en:"You add the custom domain contoso.com to your tenant. The domain shows as \"Unverified\". What must you do to verify it?",
   fr:"Tu ajoutes le domaine personnalisé contoso.com à ton tenant. Le domaine apparaît « Unverified ». Que dois-tu faire pour le vérifier ?"},
options:[
 {en:"Wait 72 hours for automatic verification", fr:"Attendre 72 heures pour la vérification automatique"},
 {en:"Create a CNAME record pointing to login.microsoftonline.com", fr:"Créer un enregistrement CNAME pointant vers login.microsoftonline.com"},
 {en:"Transfer the domain registration to Microsoft", fr:"Transférer l'enregistrement du domaine chez Microsoft"},
 {en:"Add the TXT (or MX) record provided by Microsoft to the domain's DNS zone", fr:"Ajouter l'enregistrement TXT (ou MX) fourni par Microsoft dans la zone DNS du domaine"}],
correct:[3],
explanation:{en:"A is wrong: verification never happens automatically without the DNS record.\nB is wrong: CNAME records are not used for tenant domain verification.\nC is wrong: you keep your registrar; Microsoft only needs DNS proof of ownership.\nD is correct: domain verification proves ownership by adding a specific TXT (or alternatively MX) record to the public DNS zone, then clicking Verify.",
fr:"A est faux : la vérification n'est jamais automatique sans l'enregistrement DNS.\nB est faux : les CNAME ne servent pas à la vérification de domaine du tenant.\nC est faux : tu gardes ton registrar ; Microsoft a juste besoin d'une preuve DNS de propriété.\nD est correct : la vérification de domaine prouve la propriété en ajoutant un enregistrement TXT (ou MX) spécifique dans la zone DNS publique, puis en cliquant Verify."}
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
 {en:"Microsoft Entra join", fr:"Microsoft Entra join"},
 {en:"Microsoft Entra hybrid join", fr:"Microsoft Entra hybrid join"},
 {en:"Workplace Join", fr:"Workplace Join"},
 {en:"Microsoft Entra registration", fr:"Microsoft Entra registration"}],
correct:[1],
explanation:{en:"A is wrong: Entra join is cloud-only join (no on-prem AD), used for cloud-first devices.\nB is correct: hybrid join is for devices joined to on-prem AD that you ALSO register in Entra ID — enabling the \"hybrid Azure AD joined device\" Conditional Access control.\nC is wrong: Workplace Join is the legacy name of device registration.\nD is wrong: Entra registration is for personal/BYOD devices, not domain-joined corporate machines.",
fr:"A est faux : l'Entra join est un join 100% cloud (sans AD on-prem), pour les appareils cloud-first.\nB est correct : le hybrid join concerne les appareils joints à l'AD on-prem que tu enregistres AUSSI dans Entra ID — activant le contrôle Conditional Access « hybrid Azure AD joined device ».\nC est faux : Workplace Join est l'ancien nom de la registration.\nD est faux : l'Entra registration est pour les appareils personnels/BYOD, pas les machines d'entreprise jointes au domaine."}
},
{
id:"d1-015", domain:1, topic:"External identity providers",
q:{en:"You collaborate with a partner whose identity provider is a SAML 2.0 IdP (not Entra ID). You want their users to sign in to your apps as guests with their EXISTING corporate credentials. What do you configure?",
   fr:"Tu collabores avec un partenaire dont le fournisseur d'identité est un IdP SAML 2.0 (pas Entra ID). Tu veux que ses utilisateurs se connectent à tes apps comme guests avec leurs identifiants d'entreprise EXISTANTS. Que configures-tu ?"},
options:[
 {en:"Cross-tenant synchronization", fr:"Cross-tenant synchronization"},
 {en:"Google federation", fr:"Fédération Google"},
 {en:"SAML/WS-Fed identity provider federation (direct federation)", fr:"Fédération de fournisseur d'identité SAML/WS-Fed (fédération directe)"},
 {en:"Email one-time passcode", fr:"Email one-time passcode"}],
correct:[2],
explanation:{en:"A is wrong: cross-tenant sync only works between Microsoft Entra tenants.\nB is wrong: Google federation only applies to Gmail/Google accounts.\nC is correct: SAML/WS-Fed IdP federation lets B2B guests from a domain authenticate against their own SAML 2.0 or WS-Fed identity provider.\nD is wrong: OTP works but does not use their existing corporate credentials — they'd type a code each time.",
fr:"A est faux : la cross-tenant sync ne fonctionne qu'entre tenants Microsoft Entra.\nB est faux : la fédération Google ne concerne que les comptes Gmail/Google.\nC est correct : la fédération d'IdP SAML/WS-Fed permet aux guests B2B d'un domaine de s'authentifier via leur propre fournisseur d'identité SAML 2.0 ou WS-Fed.\nD est faux : l'OTP fonctionnerait mais n'utilise pas leurs identifiants d'entreprise existants — ils taperaient un code à chaque fois."}
},
{
id:"d1-016", domain:1, topic:"Cross-tenant synchronization",
q:{en:"Your company owns two Entra tenants after an acquisition. You must automatically create and update users from Tenant A into Tenant B as B2B members. What do you use?",
   fr:"Ton entreprise possède deux tenants Entra après une acquisition. Tu dois créer et mettre à jour automatiquement les utilisateurs du Tenant A dans le Tenant B comme members B2B. Qu'utilises-tu ?"},
options:[
 {en:"Entra Connect Sync between both tenants", fr:"Entra Connect Sync entre les deux tenants"},
 {en:"B2B direct connect", fr:"B2B direct connect"},
 {en:"Manual CSV bulk invite every month", fr:"Invitation CSV manuelle en masse chaque mois"},
 {en:"Cross-tenant synchronization", fr:"Cross-tenant synchronization"}],
correct:[3],
explanation:{en:"A is wrong: Entra Connect Sync syncs from on-prem AD to ONE tenant — it cannot sync tenant-to-tenant.\nB is wrong: B2B direct connect creates no user objects at all (used for Teams shared channels).\nC is wrong: manual CSV is not automatic and doesn't handle updates/removals.\nD is correct: cross-tenant synchronization automatically provisions, updates, and deprovisions B2B users across tenants in the same organization. Configured in the SOURCE tenant; the TARGET tenant must allow inbound sync in cross-tenant access settings.",
fr:"A est faux : Entra Connect Sync synchronise depuis l'AD on-prem vers UN tenant — pas de tenant à tenant.\nB est faux : B2B direct connect ne crée aucun objet utilisateur (utilisé pour les canaux partagés Teams).\nC est faux : le CSV manuel n'est pas automatique et ne gère pas mises à jour/suppressions.\nD est correct : la cross-tenant synchronization provisionne, met à jour et déprovisionne automatiquement les utilisateurs B2B entre tenants d'une même organisation. Configurée dans le tenant SOURCE ; le tenant CIBLE doit autoriser la sync entrante dans les cross-tenant access settings."}
},
{
id:"d1-017", domain:1, topic:"Entra Connect Health",
q:{en:"You must monitor the health of your AD FS servers and receive alerts when synchronization errors occur in Entra Connect. What do you deploy, and what license is required?",
   fr:"Tu dois surveiller la santé de tes serveurs AD FS et recevoir des alertes en cas d'erreurs de synchronisation dans Entra Connect. Que déploies-tu, et quelle licence est requise ?"},
options:[
 {en:"Entra Connect Health agents; Entra ID P1", fr:"Les agents Entra Connect Health ; Entra ID P1"},
 {en:"Azure Monitor agents; Entra ID P2", fr:"Les agents Azure Monitor ; Entra ID P2"},
 {en:"Defender for Identity sensors; Entra ID P1", fr:"Les capteurs Defender for Identity ; Entra ID P1"},
 {en:"Entra Connect Health agents; free tier is enough", fr:"Les agents Entra Connect Health ; le niveau gratuit suffit"}],
correct:[0],
explanation:{en:"A is correct: Entra Connect Health uses agents installed on AD FS, Entra Connect (Sync), and AD DS servers, and requires Entra ID P1 licenses.\nB is wrong: Azure Monitor doesn't provide the specialized identity sync/ADFS health dashboards; P2 isn't the requirement.\nC is wrong: Defender for Identity detects attacks against AD, it does not monitor sync health.\nD is wrong: Connect Health is a Premium (P1) feature.",
fr:"A est correct : Entra Connect Health utilise des agents installés sur les serveurs AD FS, Entra Connect (Sync) et AD DS, et nécessite des licences Entra ID P1.\nB est faux : Azure Monitor ne fournit pas les tableaux de bord spécialisés santé sync/ADFS ; P2 n'est pas l'exigence.\nC est faux : Defender for Identity détecte les attaques contre l'AD, il ne surveille pas la santé de la sync.\nD est faux : Connect Health est une fonctionnalité Premium (P1)."}
},
{
id:"d1-018", domain:1, topic:"AD FS migration",
q:{en:"You plan to migrate authentication from AD FS to Entra ID with minimal disruption, testing cloud authentication with a pilot group of users while the domain remains federated. Which feature do you use?",
   fr:"Tu prévois de migrer l'authentification d'AD FS vers Entra ID avec un minimum d'interruption, en testant l'authentification cloud sur un groupe pilote pendant que le domaine reste fédéré. Quelle fonctionnalité utilises-tu ?"},
options:[
 {en:"B2B invitations for pilot users", fr:"Invitations B2B pour les utilisateurs pilotes"},
 {en:"Staged rollout with Password Hash Sync", fr:"Staged rollout avec Password Hash Sync"},
 {en:"Convert the whole domain to managed immediately", fr:"Convertir tout le domaine en managed immédiatement"},
 {en:"Seamless SSO", fr:"Seamless SSO"}],
correct:[1],
explanation:{en:"A is wrong: B2B is for external users, not migrating your own employees.\nB is correct: staged rollout lets selected groups authenticate with cloud methods (PHS or PTA) while the domain stays federated with AD FS — perfect for a pilot before full cutover.\nC is wrong: converting the domain affects ALL users at once — the opposite of minimal disruption.\nD is wrong: Seamless SSO is for domain-joined device convenience, not a migration mechanism.",
fr:"A est faux : le B2B est pour les utilisateurs externes, pas pour migrer tes propres employés.\nB est correct : le staged rollout permet à des groupes choisis de s'authentifier en cloud (PHS ou PTA) pendant que le domaine reste fédéré AD FS — parfait pour un pilote avant la bascule complète.\nC est faux : convertir le domaine affecte TOUS les utilisateurs d'un coup — l'opposé d'une interruption minimale.\nD est faux : Seamless SSO est un confort pour appareils joints au domaine, pas un mécanisme de migration."}
},
{
id:"d1-019", domain:1, topic:"Custom security attributes",
q:{en:"A Global Administrator tries to assign custom security attributes to users but gets an access denied error. Why?",
   fr:"Un Global Administrator essaie d'assigner des custom security attributes à des utilisateurs mais reçoit une erreur d'accès refusé. Pourquoi ?"},
options:[
 {en:"Custom security attributes require an E5 license for the admin", fr:"Les custom security attributes exigent une licence E5 pour l'admin"},
 {en:"Attributes can only be assigned via PowerShell", fr:"Les attributs ne peuvent être assignés que via PowerShell"},
 {en:"Global Administrator does not have custom security attribute permissions by default; the Attribute Assignment Administrator role is required", fr:"Le Global Administrator n'a pas les permissions sur les custom security attributes par défaut ; le rôle Attribute Assignment Administrator est requis"},
 {en:"The attributes must first be approved by Microsoft", fr:"Les attributs doivent d'abord être approuvés par Microsoft"}],
correct:[2],
explanation:{en:"A is wrong: it's a role issue, not a license issue.\nB is wrong: the admin center, PowerShell and Graph all work once you have the role.\nC is correct: by design, even Global Admins have NO default access to custom security attributes (they may contain sensitive data). You need Attribute Definition Administrator to define them and Attribute Assignment Administrator to assign them (a GA can assign these roles to themselves).\nD is wrong: no Microsoft approval process exists for attributes.",
fr:"A est faux : c'est un problème de rôle, pas de licence.\nB est faux : le centre d'admin, PowerShell et Graph fonctionnent tous une fois le rôle obtenu.\nC est correct : par conception, même les Global Admins n'ont AUCUN accès par défaut aux custom security attributes (ils peuvent contenir des données sensibles). Il faut Attribute Definition Administrator pour les définir et Attribute Assignment Administrator pour les assigner (un GA peut s'attribuer ces rôles).\nD est faux : aucun processus d'approbation Microsoft n'existe pour les attributs."}
},
{
id:"d1-020", domain:1, topic:"Restricted management AU",
q:{en:"You must protect a set of VIP executive accounts so that ONLY explicitly designated admins can modify them — even tenant-level User Administrators and Global Administrators must be blocked from direct modification. What do you use?",
   fr:"Tu dois protéger un ensemble de comptes VIP de direction pour que SEULS des admins explicitement désignés puissent les modifier — même les User Administrators et Global Administrators au niveau tenant doivent être bloqués. Qu'utilises-tu ?"},
options:[
 {en:"A role-assignable security group", fr:"Un groupe de sécurité role-assignable"},
 {en:"Conditional Access with protected actions", fr:"Conditional Access avec protected actions"},
 {en:"A standard administrative unit", fr:"Une administrative unit standard"},
 {en:"A restricted management administrative unit", fr:"Une restricted management administrative unit"}],
correct:[3],
explanation:{en:"A is wrong: role-assignable groups protect GROUP membership management, not arbitrary user objects.\nB is wrong: protected actions guard specific admin permissions (like modifying CA policies), not per-user modification rights.\nC is wrong: a standard AU ADDS scoped admins but tenant-level admins can still manage the users.\nD is correct: a restricted management AU blocks tenant-level role holders (including Global Admins) from modifying its members; only admins explicitly assigned roles scoped to the AU can manage them.",
fr:"A est faux : les groupes role-assignable protègent la gestion de l'appartenance au GROUPE, pas des objets utilisateurs quelconques.\nB est faux : les protected actions protègent des permissions admin précises (comme modifier les politiques CA), pas les droits de modification par utilisateur.\nC est faux : une AU standard AJOUTE des admins scopés mais les admins tenant peuvent toujours gérer les utilisateurs.\nD est correct : une restricted management AU empêche les détenteurs de rôles au niveau tenant (y compris Global Admins) de modifier ses membres ; seuls les admins explicitement scopés sur l'AU peuvent les gérer."}
},
{
id:"d1-021", domain:1, topic:"Group settings",
q:{en:"Users keep creating Microsoft 365 groups freely, causing sprawl. You must restrict M365 group creation to members of a specific security group named GroupCreators. What is required?",
   fr:"Les utilisateurs créent librement des groupes Microsoft 365, ce qui crée de la prolifération. Tu dois restreindre la création de groupes M365 aux membres d'un groupe de sécurité nommé GroupCreators. Que faut-il ?"},
options:[
 {en:"Configure the directory setting EnableGroupCreation=false with GroupCreationAllowedGroupId via PowerShell/Graph", fr:"Configurer le paramètre d'annuaire EnableGroupCreation=false avec GroupCreationAllowedGroupId via PowerShell/Graph"},
 {en:"Turn off self-service group management in the portal — this blocks M365 group creation too", fr:"Désactiver le self-service group management dans le portail — ça bloque aussi la création de groupes M365"},
 {en:"Delete the \"All Users\" group", fr:"Supprimer le groupe « All Users »"},
 {en:"Set group expiration policies", fr:"Configurer des politiques d'expiration de groupes"}],
correct:[0],
explanation:{en:"A is correct: restricting M365 group creation is done through the Group.Unified directory settings template (EnableGroupCreation=false + GroupCreationAllowedGroupId=<GroupCreators id>) via Graph/PowerShell. Note: members of that group need Entra ID P1 or the restriction applies broadly.\nB is wrong: the portal's self-service setting affects security group creation in My Groups, not M365 group creation across workloads.\nC is wrong: \"All Users\" is a dynamic group concept, unrelated.\nD is wrong: expiration policies clean up unused groups; they don't prevent creation.",
fr:"A est correct : restreindre la création de groupes M365 se fait via le template de paramètres d'annuaire Group.Unified (EnableGroupCreation=false + GroupCreationAllowedGroupId=<id de GroupCreators>) via Graph/PowerShell.\nB est faux : le paramètre self-service du portail concerne la création de groupes de sécurité dans My Groups, pas la création de groupes M365 dans les workloads.\nC est faux : « All Users » est un concept de groupe dynamique, sans rapport.\nD est faux : les politiques d'expiration nettoient les groupes inutilisés ; elles n'empêchent pas la création."}
},
{
id:"d1-022", domain:1, topic:"SSPR writeback",
q:{en:"Hybrid users synced from on-premises AD complain that self-service password reset fails with an error saying their password cannot be reset. Cloud-only users can reset fine. What is the most likely cause?",
   fr:"Les utilisateurs hybrides synchronisés depuis l'AD on-prem se plaignent que la réinitialisation de mot de passe en libre-service échoue. Les utilisateurs cloud-only y arrivent. Quelle est la cause la plus probable ?"},
options:[
 {en:"SSPR requires P2 for hybrid users", fr:"SSPR nécessite P2 pour les utilisateurs hybrides"},
 {en:"Password writeback is not enabled in Entra Connect", fr:"Le password writeback n'est pas activé dans Entra Connect"},
 {en:"The users have not registered for MFA", fr:"Les utilisateurs n'ont pas enregistré le MFA"},
 {en:"Seamless SSO is disabled", fr:"Seamless SSO est désactivé"}],
correct:[1],
explanation:{en:"A is wrong: SSPR with writeback needs P1, not P2.\nB is correct: for synced (hybrid) users, SSPR must write the new password back to on-prem AD — that requires the password writeback feature in Entra Connect (and Entra ID P1). If it's off, cloud-only users work but hybrid users fail.\nC is wrong: missing registration produces a different experience (they'd be prompted to register), and it would affect cloud users equally.\nD is wrong: Seamless SSO has nothing to do with password writeback.",
fr:"A est faux : SSPR avec writeback nécessite P1, pas P2.\nB est correct : pour les utilisateurs synchronisés (hybrides), SSPR doit réécrire le nouveau mot de passe dans l'AD on-prem — ça nécessite la fonctionnalité password writeback dans Entra Connect (et Entra ID P1). Si elle est désactivée, les cloud-only fonctionnent mais les hybrides échouent.\nC est faux : une inscription manquante produit une autre expérience (invitation à s'enregistrer) et toucherait aussi les utilisateurs cloud.\nD est faux : Seamless SSO n'a aucun rapport avec le writeback."}
},
{
id:"d1-023", domain:1, topic:"User lifecycle",
q:{en:"An employee leaves the company. According to Microsoft's recommended practice, what should you do FIRST to immediately prevent all access, before eventually deleting the account?",
   fr:"Un employé quitte l'entreprise. Selon la pratique recommandée par Microsoft, que fais-tu EN PREMIER pour empêcher immédiatement tout accès, avant de supprimer le compte plus tard ?"},
options:[
 {en:"Remove all licenses", fr:"Retirer toutes les licences"},
 {en:"Convert the mailbox to a shared mailbox", fr:"Convertir la boîte mail en boîte partagée"},
 {en:"Block sign-in (disable the account) and revoke all sessions/refresh tokens", fr:"Bloquer la connexion (désactiver le compte) et révoquer toutes les sessions/refresh tokens"},
 {en:"Delete the user account immediately", fr:"Supprimer immédiatement le compte utilisateur"}],
correct:[2],
explanation:{en:"A is wrong: removing licenses cuts services but doesn't kill an authenticated session or directory access.\nB is wrong: mailbox conversion is a later data-retention step, not an access-prevention step.\nC is correct: disabling sign-in plus revoking sessions (Revoke-MgUserSignInSession / \"Revoke sessions\") kills existing refresh tokens so open sessions die quickly. The account is kept temporarily for data handover.\nD is wrong: immediate deletion loses data and group/app context; deletion comes later (soft delete keeps it 30 days).",
fr:"A est faux : retirer les licences coupe les services mais ne tue ni session authentifiée ni accès annuaire.\nB est faux : la conversion de boîte mail est une étape ultérieure de rétention de données, pas de blocage d'accès.\nC est correct : désactiver la connexion + révoquer les sessions (Revoke-MgUserSignInSession / « Revoke sessions ») tue les refresh tokens existants, donc les sessions ouvertes meurent vite. Le compte est gardé temporairement pour la passation.\nD est faux : la suppression immédiate perd les données et le contexte groupes/apps ; elle vient plus tard (soft delete de 30 jours)."}
},
{
id:"d1-024", domain:1, topic:"Deleted users",
q:{en:"A user account was deleted by mistake 10 days ago. What can you do?",
   fr:"Un compte utilisateur a été supprimé par erreur il y a 10 jours. Que peux-tu faire ?"},
options:[
 {en:"Open a Microsoft support ticket to restore from backup", fr:"Ouvrir un ticket Microsoft pour restaurer depuis une sauvegarde"},
 {en:"Nothing, deletion is permanent after 7 days", fr:"Rien, la suppression est définitive après 7 jours"},
 {en:"Recreate the user with the same UPN to restore access", fr:"Recréer l'utilisateur avec le même UPN pour restaurer les accès"},
 {en:"Restore it from the Deleted users list — soft-deleted users are recoverable for 30 days with all properties", fr:"Le restaurer depuis la liste Deleted users — les utilisateurs soft-deleted sont récupérables 30 jours avec toutes leurs propriétés"}],
correct:[3],
explanation:{en:"A is wrong: no support restore is needed within the 30-day window (and none exists after permanent deletion).\nB is wrong: the window is 30 days, not 7.\nC is wrong: recreating with the same UPN creates a NEW object with a new objectId — permissions and memberships are lost.\nD is correct: deleted users go into a soft-deleted state for 30 days and can be fully restored (ID, group memberships, licenses, etc.) from Users > Deleted users.",
fr:"A est faux : aucune restauration par le support n'est nécessaire dans la fenêtre de 30 jours (et aucune n'existe après suppression définitive).\nB est faux : la fenêtre est de 30 jours, pas 7.\nC est faux : recréer avec le même UPN crée un NOUVEL objet avec un nouvel objectId — permissions et appartenances perdues.\nD est correct : les utilisateurs supprimés passent en état soft-deleted pendant 30 jours et peuvent être entièrement restaurés (ID, appartenances aux groupes, licences, etc.) depuis Users > Deleted users."}
},
{
id:"d1-025", domain:1, topic:"Company branding",
q:{en:"You must display your company logo and a custom background on the Microsoft Entra sign-in page for your tenant. Which license is the minimum requirement to configure Company Branding?",
   fr:"Tu dois afficher le logo de l'entreprise et un fond personnalisé sur la page de connexion Microsoft Entra de ton tenant. Quelle licence minimale faut-il pour configurer le Company Branding ?"},
options:[
 {en:"Entra ID P1 or P2 (or M365 license) for custom branding", fr:"Entra ID P1 ou P2 (ou licence M365) pour le branding personnalisé"},
 {en:"Microsoft Entra ID Free — basic default branding customization is included", fr:"Microsoft Entra ID Free — la personnalisation de base est incluse"},
 {en:"Entra ID Governance", fr:"Entra ID Governance"},
 {en:"Workload Identities Premium", fr:"Workload Identities Premium"}],
correct:[0],
explanation:{en:"A is correct: customizing company branding (logo, background, sign-in text, per-language branding) requires Entra ID P1/P2 or a Microsoft 365 license.\nB is wrong: the Free tier only shows the default Microsoft experience with very limited options.\nC is wrong: Governance covers entitlement/lifecycle features, not branding.\nD is wrong: Workload Identities Premium covers service principal protection.",
fr:"A est correct : personnaliser le company branding (logo, fond, texte de connexion, branding par langue) nécessite Entra ID P1/P2 ou une licence Microsoft 365.\nB est faux : le niveau Free n'offre que l'expérience Microsoft par défaut avec des options très limitées.\nC est faux : Governance couvre l'entitlement/le cycle de vie, pas le branding.\nD est faux : Workload Identities Premium couvre la protection des service principals."}
},
{
id:"d1-026", domain:1, topic:"B2B invitations",
q:{en:"You must invite 300 external consultants as guests in one operation. Which approach is the most efficient?",
   fr:"Tu dois inviter 300 consultants externes comme guests en une seule opération. Quelle approche est la plus efficace ?"},
options:[
 {en:"Create 300 member accounts with temporary passwords", fr:"Créer 300 comptes members avec mots de passe temporaires"},
 {en:"Bulk invite via CSV in the Entra admin center (Users > Bulk operations > Bulk invite)", fr:"Invitation en masse via CSV dans le centre d'admin Entra (Users > Bulk operations > Bulk invite)"},
 {en:"Enable self-service sign-up on the tenant", fr:"Activer le self-service sign-up sur le tenant"},
 {en:"Send 300 individual invitations from the portal", fr:"Envoyer 300 invitations individuelles depuis le portail"}],
correct:[1],
explanation:{en:"A is wrong: creating member accounts for externals breaks governance (they should be guests) and adds password management burden.\nB is correct: the admin center provides a bulk invite operation using a CSV template (email + redirect URL); PowerShell New-MgInvitation in a script is the equivalent automation.\nC is wrong: self-service sign-up applies to specific apps via user flows, not a controlled invitation of a specific list.\nD is wrong: technically works but is wildly inefficient.",
fr:"A est faux : créer des comptes members pour des externes casse la gouvernance (ils doivent être guests) et ajoute la gestion des mots de passe.\nB est correct : le centre d'admin fournit une opération d'invitation en masse via un template CSV (email + URL de redirection) ; PowerShell New-MgInvitation en script est l'équivalent automatisé.\nC est faux : le self-service sign-up s'applique à des apps précises via des user flows, pas à une invitation contrôlée d'une liste.\nD est faux : ça marche mais c'est totalement inefficace."}
},
{
id:"d1-027", domain:1, topic:"Entra Connect filtering",
q:{en:"You use Entra Connect Sync and must ensure that only users in the OU \"Corp/Employees\" are synchronized to Entra ID. What should you configure?",
   fr:"Tu utilises Entra Connect Sync et tu dois t'assurer que seuls les utilisateurs de l'OU « Corp/Employees » sont synchronisés vers Entra ID. Que configures-tu ?"},
options:[
 {en:"Attribute-based filtering in the Entra admin center", fr:"Un filtrage par attributs dans le centre d'admin Entra"},
 {en:"A dynamic group in Entra ID", fr:"Un groupe dynamique dans Entra ID"},
 {en:"Domain and OU filtering in the Entra Connect wizard", fr:"Le filtrage par domaine et OU dans l'assistant Entra Connect"},
 {en:"An administrative unit", fr:"Une administrative unit"}],
correct:[2],
explanation:{en:"A is wrong: sync filtering is configured on the Connect server, not in the cloud admin center.\nB is wrong: dynamic groups organize users already synced; they don't prevent syncing.\nC is correct: Entra Connect supports domain/OU-based filtering configured in the wizard (or attribute-based filtering via sync rules) to control WHICH on-prem objects get synced.\nD is wrong: AUs scope admin permissions in the cloud, not synchronization.",
fr:"A est faux : le filtrage de sync se configure sur le serveur Connect, pas dans le centre d'admin cloud.\nB est faux : les groupes dynamiques organisent des utilisateurs déjà synchronisés ; ils n'empêchent pas la sync.\nC est correct : Entra Connect supporte le filtrage par domaine/OU configuré dans l'assistant (ou par attributs via les règles de sync) pour contrôler QUELS objets on-prem sont synchronisés.\nD est faux : les AUs scopent des permissions admin dans le cloud, pas la synchronisation."}
},
{
id:"d1-028", domain:1, topic:"Guest lifecycle",
q:{en:"Which PowerShell command invites an external user to your tenant using Microsoft Graph PowerShell?",
   fr:"Quelle commande PowerShell invite un utilisateur externe dans ton tenant avec Microsoft Graph PowerShell ?"},
options:[
 {en:"New-MgUser -UserType Guest", fr:"New-MgUser -UserType Guest"},
 {en:"Add-MgExternalUser", fr:"Add-MgExternalUser"},
 {en:"Invoke-MgGuestInvite", fr:"Invoke-MgGuestInvite"},
 {en:"New-MgInvitation", fr:"New-MgInvitation"}],
correct:[3],
explanation:{en:"A is wrong: New-MgUser creates a local user object; it does not create a proper B2B invitation/redemption flow.\nB and C are wrong: those cmdlets don't exist.\nD is correct: New-MgInvitation (Graph invitations API) sends the B2B invitation with -InvitedUserEmailAddress and -InviteRedirectUrl.",
fr:"A est faux : New-MgUser crée un objet utilisateur local ; ça ne crée pas le vrai parcours d'invitation/acceptation B2B.\nB et C sont faux : ces cmdlets n'existent pas.\nD est correct : New-MgInvitation (API invitations de Graph) envoie l'invitation B2B avec -InvitedUserEmailAddress et -InviteRedirectUrl."}
},
{
id:"d1-029", domain:1, topic:"Dynamic groups",
q:{en:"You need a dynamic security group containing all Windows devices. Which rule is valid?",
   fr:"Tu as besoin d'un groupe de sécurité dynamique contenant tous les appareils Windows. Quelle règle est valide ?"},
options:[
 {en:"device.deviceOSType -eq \"Windows\"", fr:"device.deviceOSType -eq \"Windows\""},
 {en:"device.deviceOSType -eq \"Windows\" -or user.department -eq \"IT\"", fr:"device.deviceOSType -eq \"Windows\" -or user.department -eq \"IT\""},
 {en:"deviceOSType : Windows", fr:"deviceOSType : Windows"},
 {en:"user.deviceOS -eq \"Windows\"", fr:"user.deviceOS -eq \"Windows\""}],
correct:[0],
explanation:{en:"A is correct: device rules use the device. prefix, e.g. device.deviceOSType -eq \"Windows\".\nB is wrong: a dynamic group is EITHER user-based OR device-based — you cannot mix user and device rules in one group.\nC is wrong: invalid syntax.\nD is wrong: there is no user.deviceOS property, and a device group needs device properties.",
fr:"A est correct : les règles d'appareils utilisent le préfixe device., ex : device.deviceOSType -eq \"Windows\".\nB est faux : un groupe dynamique est SOIT utilisateur SOIT appareil — on ne peut pas mélanger les deux types de règles dans un même groupe.\nC est faux : syntaxe invalide.\nD est faux : la propriété user.deviceOS n'existe pas, et un groupe d'appareils utilise des propriétés device."}
},
{
id:"d1-030", domain:1, topic:"UPN & sign-in",
q:{en:"After syncing users from on-prem AD, some users have UPNs ending in @contoso.onmicrosoft.com instead of @contoso.com, and cannot sign in with their email-style username. What is the most likely cause?",
   fr:"Après la synchronisation depuis l'AD on-prem, certains utilisateurs ont des UPN finissant en @contoso.onmicrosoft.com au lieu de @contoso.com, et ne peuvent pas se connecter avec leur identifiant de type email. Quelle est la cause la plus probable ?"},
options:[
 {en:"The tenant has reached its custom domain limit", fr:"Le tenant a atteint sa limite de domaines personnalisés"},
 {en:"Their on-prem UPN suffix uses a domain that is not verified in the tenant, so Entra ID substituted the default domain", fr:"Le suffixe UPN on-prem utilise un domaine non vérifié dans le tenant, donc Entra ID a substitué le domaine par défaut"},
 {en:"Entra Connect is broken", fr:"Entra Connect est cassé"},
 {en:"The users must register for MFA first", fr:"Les utilisateurs doivent d'abord enregistrer le MFA"}],
correct:[1],
explanation:{en:"A is wrong: there is no meaningful custom-domain limit issue here.\nB is correct: when a synced user's UPN suffix (e.g. contoso.local or an unverified domain) doesn't match a verified custom domain, Entra ID replaces it with the default @tenant.onmicrosoft.com. Fix: verify contoso.com in the tenant and/or add matching UPN suffixes in AD.\nC is wrong: the sync worked — this is the documented substitution behavior, not a failure.\nD is wrong: MFA registration is unrelated to UPN suffixes.",
fr:"A est faux : aucune limite de domaines n'entre en jeu ici.\nB est correct : quand le suffixe UPN d'un utilisateur synchronisé (ex : contoso.local ou un domaine non vérifié) ne correspond à aucun domaine personnalisé vérifié, Entra ID le remplace par le domaine par défaut @tenant.onmicrosoft.com. Solution : vérifier contoso.com dans le tenant et/ou ajouter les suffixes UPN correspondants dans l'AD.\nC est faux : la sync a fonctionné — c'est le comportement documenté de substitution, pas une panne.\nD est faux : l'enregistrement MFA n'a rien à voir avec les suffixes UPN."}
},
{
id:"d1-031", domain:1, topic:"Group-based licensing errors",
q:{en:"You assign Microsoft 365 E5 licenses to a group of 200 users. 12 users show a licensing error and receive no license. The tenant has 500 free licenses available. What is the most likely cause?",
   fr:"Tu assignes des licences Microsoft 365 E5 à un groupe de 200 utilisateurs. 12 utilisateurs affichent une erreur de licence et ne reçoivent rien. Le tenant a 500 licences disponibles. Quelle est la cause la plus probable ?"},
options:[
 {en:"The group is a dynamic group, which cannot be used for licensing", fr:"Le groupe est dynamique, ce qui est incompatible avec l'attribution de licences"},
 {en:"The tenant has run out of licenses", fr:"Le tenant n'a plus de licences"},
 {en:"Those 12 users have no usage location set, or their usage location is a country where a service in the SKU is not available", fr:"Ces 12 utilisateurs n'ont pas d'usage location définie, ou leur usage location est un pays où un service du SKU n'est pas disponible"},
 {en:"Group-based licensing requires each user to also have a direct license", fr:"Le licensing par groupe exige que chaque utilisateur ait aussi une licence directe"}],
correct:[2],
explanation:{en:"A is wrong: dynamic groups are fully supported for group-based licensing.\nB is wrong: 500 licenses are free, and a shortage would affect far more than 12 users.\nC is correct: usage location is mandatory for licensing, and some service plans are unavailable in certain countries — both produce a per-user licensing error while the rest of the group succeeds.\nD is wrong: group-based licensing works on its own; a direct license is not required.",
fr:"A est faux : les groupes dynamiques sont parfaitement supportés pour le licensing par groupe.\nB est faux : 500 licences sont libres, et une pénurie toucherait bien plus que 12 utilisateurs.\nC est correct : l'usage location est obligatoire pour l'attribution de licences, et certains service plans ne sont pas disponibles dans certains pays — les deux cas produisent une erreur de licence par utilisateur alors que le reste du groupe fonctionne.\nD est faux : le licensing par groupe fonctionne seul, aucune licence directe n'est requise."}
},
{
id:"d1-032", domain:1, topic:"Entra Connect staging mode",
q:{en:"You must upgrade the Entra Connect server to a new machine with zero risk of duplicate exports to Entra ID, then cut over. What should you do?",
   fr:"Tu dois migrer le serveur Entra Connect vers une nouvelle machine sans aucun risque d'exports en double vers Entra ID, puis basculer. Que fais-tu ?"},
options:[
 {en:"Run both servers in active mode and let Entra ID deduplicate", fr:"Faire tourner les deux serveurs en mode actif et laisser Entra ID dédupliquer"},
 {en:"Export the configuration to Entra Cloud Sync first", fr:"Exporter d'abord la configuration vers Entra Cloud Sync"},
 {en:"Install the new server normally and uninstall the old one afterwards", fr:"Installer le nouveau serveur normalement puis désinstaller l'ancien"},
 {en:"Install the new server in staging mode, verify its pending exports, then disable staging on the new server and enable it on the old one", fr:"Installer le nouveau serveur en staging mode, vérifier ses exports en attente, puis désactiver le staging sur le nouveau et l'activer sur l'ancien"}],
correct:[3],
explanation:{en:"A is wrong: Entra ID does not deduplicate competing sync engines — you get export conflicts.\nB is wrong: Cloud Sync is a different agent, not a migration staging area for Connect.\nC is wrong: two active servers writing the same objects is exactly the situation staging mode exists to prevent.\nD is correct: a staging-mode server imports and synchronizes (so you can inspect what it WOULD export) but never writes to Entra ID. Swapping staging flags makes the cutover atomic and reversible.",
fr:"A est faux : Entra ID ne déduplique pas deux moteurs de sync concurrents — tu obtiens des conflits d'export.\nB est faux : Cloud Sync est un autre agent, pas une zone de transit pour migrer Connect.\nC est faux : deux serveurs actifs écrivant les mêmes objets, c'est précisément ce que le staging mode évite.\nD est correct : un serveur en staging mode importe et synchronise (tu peux donc inspecter ce qu'il EXPORTERAIT) mais n'écrit jamais dans Entra ID. Inverser les drapeaux de staging rend la bascule atomique et réversible."}
},
{
id:"d1-033", domain:1, topic:"Authentication method choice",
q:{en:"Security requires that on-premises Active Directory password policies, account lockout and disabled accounts take effect immediately at cloud sign-in, without deploying AD FS. Which sign-in method should you configure?",
   fr:"La sécurité exige que les stratégies de mot de passe AD on-prem, le verrouillage de compte et les comptes désactivés s'appliquent immédiatement à la connexion cloud, sans déployer AD FS. Quelle méthode de connexion configurer ?"},
options:[
 {en:"Pass-through authentication (PTA)", fr:"Pass-through authentication (PTA)"},
 {en:"Certificate-based authentication", fr:"Certificate-based authentication"},
 {en:"Password hash synchronization (PHS) only", fr:"Password hash synchronization (PHS) seule"},
 {en:"Federation with AD FS", fr:"Fédération avec AD FS"}],
correct:[0],
explanation:{en:"A is correct: PTA validates the password against on-prem AD in real time, so on-prem password policy, lockout and account state apply immediately — and it needs only a lightweight agent, no AD FS farm.\nB is wrong: CBA authenticates with certificates and does not evaluate AD password policy at all.\nC is wrong: with PHS the hash is validated in the cloud, so on-prem expiry/lockout are not honoured in real time (a separate setting only forwards expiry).\nD is wrong: AD FS would work but is explicitly excluded and far heavier.",
fr:"A est correct : PTA valide le mot de passe auprès de l'AD on-prem en temps réel, donc la stratégie de mot de passe, le verrouillage et l'état du compte s'appliquent immédiatement — et il ne faut qu'un agent léger, pas de ferme AD FS.\nB est faux : CBA authentifie par certificat et n'évalue pas du tout la stratégie de mot de passe AD.\nC est faux : avec PHS le hash est validé dans le cloud, l'expiration et le verrouillage on-prem ne sont pas honorés en temps réel (un réglage séparé ne transmet que l'expiration).\nD est faux : AD FS fonctionnerait mais est explicitement exclu et bien plus lourd."}
},
{
id:"d1-034", domain:1, topic:"Seamless SSO",
q:{en:"You enabled Seamless SSO (Desktop SSO) but domain-joined Windows clients on the corporate network are still prompted for a password. What must you verify FIRST?",
   fr:"Tu as activé Seamless SSO (Desktop SSO) mais les clients Windows joints au domaine sur le réseau d'entreprise sont toujours invités à saisir leur mot de passe. Que dois-tu vérifier EN PREMIER ?"},
options:[
 {en:"That every user has registered for MFA", fr:"Que chaque utilisateur a enregistré le MFA"},
 {en:"That the URL https://autologon.microsoftazuread-sso.com is in the browser's Intranet zone, pushed by Group Policy", fr:"Que l'URL https://autologon.microsoftazuread-sso.com est dans la zone Intranet du navigateur, poussée par stratégie de groupe"},
 {en:"That the users have Entra ID P2 licenses", fr:"Que les utilisateurs ont des licences Entra ID P2"},
 {en:"That the devices are Entra hybrid joined", fr:"Que les appareils sont Entra hybrid joined"}],
correct:[1],
explanation:{en:"A is wrong: MFA registration is independent of Kerberos-based SSO.\nB is correct: Seamless SSO relies on Kerberos against the AZUREADSSOACC computer object, and the browser only sends the Kerberos ticket if the autologon URL sits in the Intranet (or Trusted Sites) zone — this GPO step is the classic omission.\nC is wrong: Seamless SSO needs no premium license.\nD is wrong: Seamless SSO targets domain-joined devices; hybrid join is a different (and also valid) SSO path, not a prerequisite here.",
fr:"A est faux : l'enregistrement MFA est indépendant du SSO Kerberos.\nB est correct : Seamless SSO repose sur Kerberos contre l'objet ordinateur AZUREADSSOACC, et le navigateur n'envoie le ticket Kerberos que si l'URL autologon est dans la zone Intranet (ou Sites de confiance) — cet oubli de GPO est le classique.\nC est faux : Seamless SSO ne nécessite aucune licence premium.\nD est faux : Seamless SSO cible les appareils joints au domaine ; le hybrid join est une autre voie de SSO (valable aussi), pas un prérequis ici."}
},
{
id:"d1-035", domain:1, topic:"Source anchor & hard match",
q:{en:"A synced user was accidentally deleted from on-prem AD and recreated. Entra Connect now creates a DUPLICATE cloud account instead of reusing the existing one. Which attribute governs this behaviour?",
   fr:"Un utilisateur synchronisé a été supprimé par erreur de l'AD on-prem puis recréé. Entra Connect crée maintenant un compte cloud EN DOUBLE au lieu de réutiliser l'existant. Quel attribut gouverne ce comportement ?"},
options:[
 {en:"The department attribute", fr:"L'attribut department"},
 {en:"The user's password hash", fr:"Le hash du mot de passe de l'utilisateur"},
 {en:"The sourceAnchor / immutableId — the new AD object has a different one, so Entra ID sees a different identity", fr:"Le sourceAnchor / immutableId — le nouvel objet AD en a un différent, donc Entra ID voit une identité différente"},
 {en:"The displayName", fr:"Le displayName"}],
correct:[2],
explanation:{en:"A is wrong: department has no identity-linking role.\nB is wrong: the hash is credential material, not an identity anchor.\nC is correct: the sourceAnchor (objectGUID, or better ms-DS-ConsistencyGuid) becomes the cloud immutableId and is the permanent link between the AD object and the cloud object. Recreating the AD account changes it, so a new cloud object is created. The fix is a hard match — set the cloud immutableId to the new value.\nD is wrong: displayName is only used in soft match, and only for cloud-only objects being matched by SMTP/UPN.",
fr:"A est faux : department ne joue aucun rôle de liaison d'identité.\nB est faux : le hash est un élément d'authentification, pas une ancre d'identité.\nC est correct : le sourceAnchor (objectGUID, ou mieux ms-DS-ConsistencyGuid) devient l'immutableId cloud et constitue le lien permanent entre l'objet AD et l'objet cloud. Recréer le compte AD le change, donc un nouvel objet cloud est créé. La solution est un hard match — définir l'immutableId cloud sur la nouvelle valeur.\nD est faux : le displayName ne sert qu'au soft match, et seulement pour des objets cloud-only appariés par SMTP/UPN."}
},
{
id:"d1-036", domain:1, topic:"Sync scheduler",
q:{en:"You changed an on-premises user's job title and need it in Entra ID now, without waiting for the default 30-minute cycle. Which command should you run on the Entra Connect server?",
   fr:"Tu as changé le titre d'un utilisateur on-prem et tu le veux dans Entra ID maintenant, sans attendre le cycle de 30 minutes par défaut. Quelle commande lancer sur le serveur Entra Connect ?"},
options:[
 {en:"Invoke-ADSyncCSObjectPasswordHashSync", fr:"Invoke-ADSyncCSObjectPasswordHashSync"},
 {en:"Start-ADSyncSyncCycle -PolicyType Initial", fr:"Start-ADSyncSyncCycle -PolicyType Initial"},
 {en:"Set-ADSyncScheduler -SyncCycleEnabled $false", fr:"Set-ADSyncScheduler -SyncCycleEnabled $false"},
 {en:"Start-ADSyncSyncCycle -PolicyType Delta", fr:"Start-ADSyncSyncCycle -PolicyType Delta"}],
correct:[3],
explanation:{en:"A is wrong: that is not how you force an attribute sync (and password hash sync is a separate channel).\nB is wrong: Initial (full) sync re-imports everything; it works but is heavy and unnecessary, and is reserved for after rule changes.\nC is wrong: that DISABLES the scheduler.\nD is correct: a Delta cycle processes only changes since the last run — the fast, normal way to push a single attribute change.",
fr:"A est faux : ce n'est pas ainsi qu'on force une sync d'attribut (et la sync de hash est un canal séparé).\nB est faux : la sync Initial (complète) réimporte tout ; ça marche mais c'est lourd et inutile, réservé aux changements de règles.\nC est faux : ça DÉSACTIVE le planificateur.\nD est correct : un cycle Delta ne traite que les changements depuis la dernière exécution — la méthode rapide et normale pour pousser un changement d'attribut."}
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
 {en:"An Entra ID Protection policy", fr:"Une stratégie Entra ID Protection"},
 {en:"A group naming policy (prefix/suffix + blocked words), which requires Entra ID P1 for group members", fr:"Une stratégie de nommage de groupes (préfixe/suffixe + mots bloqués), qui nécessite Entra ID P1 pour les membres des groupes"},
 {en:"A dynamic membership rule on displayName", fr:"Une règle d'appartenance dynamique sur displayName"},
 {en:"A group naming policy, which is free for all tenants", fr:"Une stratégie de nommage de groupes, gratuite pour tous les tenants"}],
correct:[1],
explanation:{en:"A is wrong: ID Protection is about risk, not naming.\nB is correct: the naming policy supports prefixes/suffixes (fixed strings or attributes such as [Department]) plus a custom blocked-words list, and it requires Entra ID P1 licences for group members.\nC is wrong: a dynamic rule chooses members, it cannot enforce a name.\nD is wrong: it is a premium feature, not free.",
fr:"A est faux : ID Protection concerne le risque, pas le nommage.\nB est correct : la stratégie de nommage supporte préfixes/suffixes (chaînes fixes ou attributs comme [Department]) plus une liste de mots bloqués personnalisée, et elle nécessite des licences Entra ID P1 pour les membres des groupes.\nC est faux : une règle dynamique choisit les membres, elle ne peut pas imposer un nom.\nD est faux : c'est une fonctionnalité premium, pas gratuite."}
},
{
id:"d1-039", domain:1, topic:"M365 group expiration",
q:{en:"Your tenant has hundreds of abandoned Microsoft 365 groups. You enable a group expiration policy with a 180-day lifetime. What happens to a group whose members are actively using its Teams channel and SharePoint site?",
   fr:"Ton tenant compte des centaines de groupes Microsoft 365 abandonnés. Tu actives une stratégie d'expiration avec une durée de vie de 180 jours. Qu'arrive-t-il à un groupe dont les membres utilisent activement son canal Teams et son site SharePoint ?"},
options:[
 {en:"Nothing — expiration policies apply only to dynamic groups", fr:"Rien — les stratégies d'expiration ne s'appliquent qu'aux groupes dynamiques"},
 {en:"It is deleted after 180 days unless the owner clicks the renewal email", fr:"Il est supprimé après 180 jours sauf si le propriétaire clique sur l'email de renouvellement"},
 {en:"It is renewed automatically — activity in Teams, Outlook, SharePoint or Forms counts as renewal", fr:"Il est renouvelé automatiquement — l'activité dans Teams, Outlook, SharePoint ou Forms vaut renouvellement"},
 {en:"It is converted to a security group", fr:"Il est converti en groupe de sécurité"}],
correct:[2],
explanation:{en:"A is wrong: expiration applies to Microsoft 365 groups regardless of assigned or dynamic membership (and needs Entra ID P1).\nB is wrong: that is the behaviour only for inactive groups.\nC is correct: auto-renewal is based on activity signals across Microsoft 365 workloads, so active groups never expire and owners are only emailed for genuinely idle ones. Deleted groups stay restorable for 30 days.\nD is wrong: expiration never converts group types.",
fr:"A est faux : l'expiration s'applique aux groupes Microsoft 365 qu'ils soient à appartenance assignée ou dynamique (et nécessite Entra ID P1).\nB est faux : c'est le comportement uniquement pour les groupes inactifs.\nC est correct : le renouvellement automatique s'appuie sur les signaux d'activité des charges Microsoft 365, donc les groupes actifs n'expirent jamais et les propriétaires ne reçoivent d'email que pour les groupes réellement inactifs. Les groupes supprimés restent restaurables 30 jours.\nD est faux : l'expiration ne convertit jamais un type de groupe."}
},
{
id:"d1-040", domain:1, topic:"Restore deleted groups",
q:{en:"An administrator deleted a security group and a Microsoft 365 group by mistake 3 days ago. Which can you restore from the Entra portal?",
   fr:"Un administrateur a supprimé par erreur un groupe de sécurité et un groupe Microsoft 365 il y a 3 jours. Lequel peux-tu restaurer depuis le portail Entra ?"},
options:[
 {en:"Both, within 30 days", fr:"Les deux, dans les 30 jours"},
 {en:"Neither — group deletion is always permanent", fr:"Aucun — la suppression d'un groupe est toujours définitive"},
 {en:"Only the security group, because it has no attached workloads", fr:"Seulement le groupe de sécurité, car il n'a pas de charges de travail attachées"},
 {en:"Only the Microsoft 365 group — it is soft-deleted for 30 days; the security group is permanently gone", fr:"Seulement le groupe Microsoft 365 — il est en suppression réversible 30 jours ; le groupe de sécurité est définitivement perdu"}],
correct:[3],
explanation:{en:"A is wrong: security groups have no recycle bin.\nB is wrong: Microsoft 365 groups are recoverable.\nC is wrong: it is the opposite.\nD is correct: soft delete with a 30-day restore window applies to Microsoft 365 groups only. Deleting a security group (or a distribution group) is immediate and permanent — you must recreate it and its memberships.",
fr:"A est faux : les groupes de sécurité n'ont pas de corbeille.\nB est faux : les groupes Microsoft 365 sont récupérables.\nC est faux : c'est l'inverse.\nD est correct : la suppression réversible avec fenêtre de restauration de 30 jours ne concerne que les groupes Microsoft 365. Supprimer un groupe de sécurité (ou de distribution) est immédiat et définitif — il faut le recréer avec ses appartenances."}
},
{
id:"d1-041", domain:1, topic:"UserType conversion",
q:{en:"A long-term contractor invited as a B2B guest is hired as an employee. Their account must keep the same object and access history but gain the default permissions of an internal user. What do you do?",
   fr:"Un prestataire de longue durée invité comme guest B2B est embauché comme salarié. Son compte doit garder le même objet et son historique d'accès mais obtenir les permissions par défaut d'un utilisateur interne. Que fais-tu ?"},
options:[
 {en:"Change the user's UserType property from Guest to Member", fr:"Changer la propriété UserType de l'utilisateur de Guest à Member"},
 {en:"Add the guest to the Global Reader role", fr:"Ajouter le guest au rôle Global Reader"},
 {en:"Change the guest's UPN to an internal domain", fr:"Changer l'UPN du guest vers un domaine interne"},
 {en:"Delete the guest and create a new member account", fr:"Supprimer le guest et créer un nouveau compte membre"}],
correct:[0],
explanation:{en:"A is correct: UserType drives default directory permissions. Flipping Guest to Member keeps the same object, group memberships and audit history while granting member-level default access. Note the sign-in identity (external account) does not change.\nB is wrong: Global Reader is an admin role, unrelated to default user permissions.\nC is wrong: changing the UPN of an external identity does not convert its UserType and can break sign-in.\nD is wrong: that destroys history and access, and is only needed if you also want a new mailbox/identity.",
fr:"A est correct : UserType détermine les permissions par défaut dans l'annuaire. Passer de Guest à Member garde le même objet, les appartenances aux groupes et l'historique d'audit tout en accordant l'accès par défaut d'un membre. Note que l'identité de connexion (compte externe) ne change pas.\nB est faux : Global Reader est un rôle d'admin, sans lien avec les permissions par défaut.\nC est faux : changer l'UPN d'une identité externe ne convertit pas son UserType et peut casser la connexion.\nD est faux : cela détruit l'historique et les accès, et n'est nécessaire que si tu veux aussi une nouvelle identité/boîte."}
},
{
id:"d1-042", domain:1, topic:"B2B direct connect",
q:{en:"Fabrikam employees must participate in a Teams shared channel hosted by Contoso, without any guest account appearing in the Contoso directory. Which capability enables this?",
   fr:"Des employés de Fabrikam doivent participer à un canal partagé Teams hébergé par Contoso, sans qu'aucun compte guest n'apparaisse dans l'annuaire Contoso. Quelle capacité permet cela ?"},
options:[
 {en:"A self-service sign-up user flow", fr:"Un user flow d'inscription self-service"},
 {en:"B2B direct connect, configured in cross-tenant access settings on both tenants", fr:"B2B direct connect, configuré dans les cross-tenant access settings des deux tenants"},
 {en:"B2B collaboration with email one-time passcode", fr:"B2B collaboration avec code secret à usage unique par email"},
 {en:"Cross-tenant synchronization", fr:"Cross-tenant synchronization"}],
correct:[1],
explanation:{en:"A is wrong: self-service sign-up creates local external accounts.\nB is correct: B2B direct connect creates a mutual trust between tenants for Teams shared channels — external users authenticate in their home tenant and no guest object is provisioned in the resource tenant. Both tenants must allow it in inbound/outbound settings.\nC is wrong: B2B collaboration always creates a guest user object.\nD is wrong: cross-tenant sync creates real B2B member/guest objects in the target tenant.",
fr:"A est faux : l'inscription self-service crée des comptes externes locaux.\nB est correct : B2B direct connect crée une confiance mutuelle entre tenants pour les canaux partagés Teams — les utilisateurs externes s'authentifient dans leur tenant d'origine et aucun objet guest n'est provisionné dans le tenant de ressources. Les deux tenants doivent l'autoriser dans leurs paramètres entrants/sortants.\nC est faux : B2B collaboration crée toujours un objet utilisateur guest.\nD est faux : la cross-tenant sync crée de véritables objets B2B (membres/guests) dans le tenant cible."}
},
{
id:"d1-043", domain:1, topic:"Guest sign-in methods",
q:{en:"You invite guests from a partner that has no Entra ID tenant and no Microsoft accounts. What happens when they redeem the invitation, with default tenant settings?",
   fr:"Tu invites des guests d'un partenaire qui n'a ni tenant Entra ID ni comptes Microsoft. Que se passe-t-il quand ils acceptent l'invitation, avec les réglages par défaut du tenant ?"},
options:[
 {en:"The invitation fails until you configure a SAML/WS-Fed identity provider", fr:"L'invitation échoue jusqu'à ce que tu configures un fournisseur d'identité SAML/WS-Fed"},
 {en:"A Microsoft account is created automatically for them", fr:"Un compte Microsoft est créé automatiquement pour eux"},
 {en:"They authenticate with email one-time passcode, which is enabled by default for such guests", fr:"Ils s'authentifient avec un code secret à usage unique par email, activé par défaut pour ces guests"},
 {en:"They must be licensed with Entra ID P1 in your tenant", fr:"Ils doivent avoir une licence Entra ID P1 dans ton tenant"}],
correct:[2],
explanation:{en:"A is wrong: direct federation is an option for large partners, not a requirement.\nB is wrong: no MSA is silently created; that redemption path was replaced by email OTP.\nC is correct: email one-time passcode is the default fallback authentication for guests with no Entra tenant, no Microsoft account and no federated IdP — they receive a short-lived code by email at each sign-in.\nD is wrong: guests are covered by the External ID / MAU model, not by tenant P1 licences per guest.",
fr:"A est faux : la fédération directe est une option pour les gros partenaires, pas une obligation.\nB est faux : aucun compte Microsoft n'est créé silencieusement ; ce parcours a été remplacé par l'email OTP.\nC est correct : le code secret à usage unique par email est l'authentification de secours par défaut pour les guests sans tenant Entra, sans compte Microsoft et sans IdP fédéré — ils reçoivent un code éphémère par email à chaque connexion.\nD est faux : les guests relèvent du modèle External ID / MAU, pas d'une licence P1 par guest dans ton tenant."}
},
{
id:"d1-044", domain:1, topic:"Guest Inviter role",
q:{en:"Project managers must be able to invite external partners as guests, but must not be able to create, delete or modify internal users. Which role do you assign?",
   fr:"Les chefs de projet doivent pouvoir inviter des partenaires externes comme guests, mais ne doivent pas pouvoir créer, supprimer ou modifier des utilisateurs internes. Quel rôle assignes-tu ?"},
options:[
 {en:"Global Reader", fr:"Global Reader"},
 {en:"Directory Writers", fr:"Directory Writers"},
 {en:"User Administrator", fr:"User Administrator"},
 {en:"Guest Inviter", fr:"Guest Inviter"}],
correct:[3],
explanation:{en:"A is wrong: Global Reader is read-only and cannot invite.\nB is wrong: Directory Writers grants broad write access to directory objects.\nC is wrong: User Administrator can manage all users, far beyond what is needed.\nD is correct: Guest Inviter grants exactly one capability — inviting B2B guests — and nothing else. That is least privilege for this requirement.",
fr:"A est faux : Global Reader est en lecture seule et ne peut pas inviter.\nB est faux : Directory Writers accorde de larges droits d'écriture sur les objets de l'annuaire.\nC est faux : User Administrator gère tous les utilisateurs, bien au-delà du nécessaire.\nD est correct : Guest Inviter n'accorde qu'une seule capacité — inviter des guests B2B — et rien d'autre. C'est le moindre privilège pour ce besoin."}
},
{
id:"d1-045", domain:1, topic:"Cross-tenant MFA trust",
q:{en:"Contoso requires MFA for all users. Fabrikam guests already do MFA in their own tenant but are being asked to re-register MFA in Contoso, which they refuse. What should Contoso configure?",
   fr:"Contoso exige le MFA pour tous. Les guests de Fabrikam font déjà du MFA dans leur propre tenant mais on leur demande de réenregistrer le MFA chez Contoso, ce qu'ils refusent. Que doit configurer Contoso ?"},
options:[
 {en:"In cross-tenant access settings, enable inbound trust to accept MFA claims from Fabrikam", fr:"Dans les cross-tenant access settings, activer la confiance entrante pour accepter les revendications MFA de Fabrikam"},
 {en:"Convert the guests to members", fr:"Convertir les guests en membres"},
 {en:"Exclude all guests from the MFA Conditional Access policy", fr:"Exclure tous les guests de la stratégie d'accès conditionnel MFA"},
 {en:"Ask Fabrikam to enable Security defaults", fr:"Demander à Fabrikam d'activer les Security defaults"}],
correct:[0],
explanation:{en:"A is correct: inbound trust settings let the resource tenant accept the MFA (and compliant/hybrid-joined device) claims already satisfied in the guest's home tenant, so the CA policy is met without re-registration.\nB is wrong: UserType has no effect on where MFA is performed.\nC is wrong: that removes the security control entirely.\nD is wrong: Security defaults in the partner tenant do not make Contoso trust their claims.",
fr:"A est correct : les paramètres de confiance entrante permettent au tenant de ressources d'accepter les revendications MFA (et appareil conforme / hybrid joined) déjà satisfaites dans le tenant d'origine du guest, donc la stratégie CA est respectée sans réenregistrement.\nB est faux : le UserType n'a aucun effet sur le lieu où le MFA est réalisé.\nC est faux : cela supprime purement et simplement le contrôle de sécurité.\nD est faux : les Security defaults chez le partenaire ne font pas que Contoso fasse confiance à ses revendications."}
},
{
id:"d1-046", domain:1, topic:"Multi-tenant organization",
q:{en:"After a merger, employees of the acquired tenant must appear as internal members in the parent tenant's address list, provisioned automatically and kept up to date. Which feature do you use?",
   fr:"Après une fusion, les employés du tenant acquis doivent apparaître comme membres internes dans la liste d'adresses du tenant parent, provisionnés automatiquement et tenus à jour. Quelle fonctionnalité utilises-tu ?"},
options:[
 {en:"Bulk CSV guest invitations repeated monthly", fr:"Des invitations de guests en masse par CSV répétées chaque mois"},
 {en:"Cross-tenant synchronization, configured in the source tenant and pushing users into the target tenant", fr:"Cross-tenant synchronization, configurée dans le tenant source et poussant les utilisateurs vers le tenant cible"},
 {en:"Entra Connect installed in both tenants", fr:"Entra Connect installé dans les deux tenants"},
 {en:"B2B direct connect", fr:"B2B direct connect"}],
correct:[1],
explanation:{en:"A is wrong: manual CSV waves are not automatic and create stale guests.\nB is correct: cross-tenant synchronization (part of multi-tenant organization) automatically provisions, updates and deprovisions B2B users in the target tenant, and can create them with UserType Member so they behave like internal users. It is configured in the source tenant and requires Entra ID P1.\nC is wrong: Entra Connect syncs on-prem AD to a tenant, not tenant to tenant.\nD is wrong: B2B direct connect creates no objects at all, so nothing appears in the address list.",
fr:"A est faux : des vagues CSV manuelles ne sont pas automatiques et créent des guests obsolètes.\nB est correct : la cross-tenant synchronization (partie de la multi-tenant organization) provisionne, met à jour et déprovisionne automatiquement des utilisateurs B2B dans le tenant cible, et peut les créer avec UserType Member pour qu'ils se comportent comme des internes. Elle se configure dans le tenant source et nécessite Entra ID P1.\nC est faux : Entra Connect synchronise un AD on-prem vers un tenant, pas un tenant vers un autre.\nD est faux : B2B direct connect ne crée aucun objet, donc rien n'apparaît dans la liste d'adresses."}
},
{
id:"d1-047", domain:1, topic:"Dynamic administrative units",
q:{en:"You want an administrative unit whose members are always the users in the Paris office, without an admin maintaining the list. What do you configure?",
   fr:"Tu veux une administrative unit dont les membres sont toujours les utilisateurs du bureau de Paris, sans qu'un admin entretienne la liste. Que configures-tu ?"},
options:[
 {en:"A scheduled PowerShell script that re-adds members daily", fr:"Un script PowerShell planifié qui réajoute les membres chaque jour"},
 {en:"An access package with an auto-assignment policy", fr:"Un access package avec une stratégie d'auto-assignation"},
 {en:"An administrative unit with dynamic membership, using a rule such as user.city -eq \"Paris\"", fr:"Une administrative unit à appartenance dynamique, avec une règle comme user.city -eq « Paris »"},
 {en:"A dynamic security group, then nest it inside the administrative unit", fr:"Un groupe de sécurité dynamique, puis l'imbriquer dans l'administrative unit"}],
correct:[2],
explanation:{en:"A is wrong: scripting is exactly the manual maintenance the requirement rules out.\nB is wrong: access packages grant access to resources, they do not populate an AU.\nC is correct: administrative units support dynamic membership rules for users and devices, using the same rule syntax as dynamic groups, and require Entra ID P1.\nD is wrong: you add users or devices to an AU, and nesting a group does not make its members AU members for role scoping.",
fr:"A est faux : le script est précisément la maintenance manuelle que l'énoncé exclut.\nB est faux : les access packages donnent accès à des ressources, ils ne peuplent pas une AU.\nC est correct : les administrative units supportent des règles d'appartenance dynamique pour les utilisateurs et les appareils, avec la même syntaxe que les groupes dynamiques, et nécessitent Entra ID P1.\nD est faux : on ajoute des utilisateurs ou des appareils à une AU, et imbriquer un groupe ne fait pas de ses membres des membres de l'AU pour le scoping de rôle."}
},
{
id:"d1-048", domain:1, topic:"Entra roles vs Azure RBAC",
q:{en:"A user holds the Global Administrator Entra role but cannot see any Azure subscription in the Azure portal. Why, and what is the correct fix?",
   fr:"Un utilisateur a le rôle Entra Global Administrator mais ne voit aucun abonnement Azure dans le portail Azure. Pourquoi, et quelle est la bonne correction ?"},
options:[
 {en:"The subscription must be moved to another tenant", fr:"L'abonnement doit être déplacé vers un autre tenant"},
 {en:"Global Administrator must be activated in PIM before it works on subscriptions", fr:"Global Administrator doit être activé dans PIM avant de fonctionner sur les abonnements"},
 {en:"The user needs an Entra ID P2 license to see subscriptions", fr:"L'utilisateur a besoin d'une licence Entra ID P2 pour voir les abonnements"},
 {en:"Entra roles and Azure RBAC are separate systems — grant an Azure RBAC role on the subscription (or temporarily elevate access to get User Access Administrator at root scope)", fr:"Les rôles Entra et Azure RBAC sont deux systèmes distincts — accorder un rôle Azure RBAC sur l'abonnement (ou élever temporairement l'accès pour obtenir User Access Administrator à la racine)"}],
correct:[3],
explanation:{en:"A is wrong: the tenant association is not the problem.\nB is wrong: PIM activation does not bridge the two systems.\nC is wrong: licensing is irrelevant here.\nD is correct: Entra roles govern the directory and Microsoft 365 services; Azure resource access is governed by Azure RBAC on management groups, subscriptions and resources. A Global Admin sees nothing until granted RBAC — the documented shortcut is the \"Access management for Azure resources\" elevation, which assigns User Access Administrator at root scope and should be turned off again afterwards.",
fr:"A est faux : le rattachement au tenant n'est pas le problème.\nB est faux : l'activation PIM ne fait pas le pont entre les deux systèmes.\nC est faux : la licence n'a rien à voir.\nD est correct : les rôles Entra gouvernent l'annuaire et les services Microsoft 365 ; l'accès aux ressources Azure est gouverné par Azure RBAC sur les groupes d'administration, abonnements et ressources. Un Global Admin ne voit rien tant qu'aucun RBAC ne lui est accordé — le raccourci documenté est l'élévation « Gestion des accès pour les ressources Azure », qui attribue User Access Administrator à la racine et doit être désactivée ensuite."}
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
 {en:"AD FS with the SSPR claim rule", fr:"AD FS avec la règle de revendication SSPR"},
 {en:"Entra ID P1 (or higher), password writeback enabled in Entra Connect, and the connector account granted Reset Password / Change Password / Write lockoutTime / Write pwdLastSet on the AD OUs", fr:"Entra ID P1 (ou plus), le password writeback activé dans Entra Connect, et le compte connecteur disposant de Reset Password / Change Password / Write lockoutTime / Write pwdLastSet sur les OU AD"},
 {en:"Entra Cloud Sync only, which cannot do writeback", fr:"Entra Cloud Sync uniquement, qui ne sait pas faire de writeback"},
 {en:"Entra ID Free and password hash synchronization", fr:"Entra ID Free et la synchronisation de hash de mot de passe"}],
correct:[1],
explanation:{en:"A is wrong: AD FS is unrelated to writeback.\nB is correct: writeback is a premium feature, must be switched on as an optional feature in Entra Connect, and only works if the AD connector account holds the password-related permissions on the relevant OUs.\nC is wrong: password writeback is supported by Entra Cloud Sync as well, so the premise is false.\nD is wrong: SSPR writeback is not available in the Free tier, and PHS alone does not write back.",
fr:"A est faux : AD FS n'a rien à voir avec le writeback.\nB est correct : le writeback est une fonctionnalité premium, doit être activé comme fonctionnalité optionnelle dans Entra Connect, et ne fonctionne que si le compte connecteur AD détient les permissions liées aux mots de passe sur les OU concernées.\nC est faux : le password writeback est aussi supporté par Entra Cloud Sync, donc la prémisse est fausse.\nD est faux : le writeback SSPR n'est pas disponible en édition Free, et PHS seul ne réécrit rien."}
},
{
id:"d1-051", domain:1, topic:"Sync scoping",
q:{en:"For a pilot, only the 50 users of one AD security group must sync to Entra ID. Later the whole forest will sync. Which Entra Connect filtering method fits the pilot best?",
   fr:"Pour un pilote, seuls les 50 utilisateurs d'un groupe de sécurité AD doivent se synchroniser vers Entra ID. Plus tard, toute la forêt sera synchronisée. Quelle méthode de filtrage Entra Connect convient le mieux au pilote ?"},
options:[
 {en:"Deleting the other users from AD temporarily", fr:"Supprimer temporairement les autres utilisateurs de l'AD"},
 {en:"Attribute-based filtering on extensionAttribute15", fr:"Le filtrage par attribut sur extensionAttribute15"},
 {en:"Group-based filtering, which is designed for pilot deployments and supports a single group", fr:"Le filtrage par groupe, conçu pour les déploiements pilotes et limité à un seul groupe"},
 {en:"Domain-based filtering", fr:"Le filtrage par domaine"}],
correct:[2],
explanation:{en:"A is wrong: never delete production AD objects to control sync scope.\nB is wrong: attribute filtering works but requires custom sync rules and stamping 50 users; more effort for the same result.\nC is correct: group-based filtering exists specifically for pilots — you point the wizard at one group and only its members (and referenced objects) sync. It is not meant for production scale, which is why you switch to OU or attribute filtering later.\nD is wrong: domain filtering selects whole domains, not 50 users.",
fr:"A est faux : on ne supprime jamais des objets AD de production pour contrôler la portée de la sync.\nB est faux : le filtrage par attribut fonctionne mais impose des règles de sync personnalisées et de marquer 50 utilisateurs ; plus d'effort pour le même résultat.\nC est correct : le filtrage par groupe existe précisément pour les pilotes — tu désignes un groupe dans l'assistant et seuls ses membres (et objets référencés) se synchronisent. Il n'est pas prévu pour la production, d'où le passage ultérieur à un filtrage par OU ou attribut.\nD est faux : le filtrage par domaine sélectionne des domaines entiers, pas 50 utilisateurs."}
},
{
id:"d1-052", domain:1, topic:"Guest sponsors",
q:{en:"Auditors ask who inside Contoso is accountable for each external guest, and want that person to be the default reviewer in access reviews. Which guest property should you populate?",
   fr:"Les auditeurs demandent qui, chez Contoso, est responsable de chaque guest externe, et veulent que cette personne soit le relecteur par défaut des access reviews. Quelle propriété du guest faut-il renseigner ?"},
options:[
 {en:"The Manager property, which access reviews cannot use for guests", fr:"La propriété Manager, que les access reviews ne peuvent pas utiliser pour les guests"},
 {en:"A custom security attribute named Owner", fr:"Un attribut de sécurité personnalisé nommé Owner"},
 {en:"The invitedBy field, which is read-only and not reviewable", fr:"Le champ invitedBy, en lecture seule et non exploitable"},
 {en:"The Sponsors property of the guest user", fr:"La propriété Sponsors de l'utilisateur guest"}],
correct:[3],
explanation:{en:"A is wrong: managers can be reviewers, but sponsors is the purpose-built property for external users.\nB is wrong: custom security attributes are for filtering and CA scoping, not reviewer selection.\nC is wrong: the inviter is recorded but is not a reviewer selection option.\nD is correct: sponsors are the documented accountability model for guests — one or more internal users or groups can be sponsors, and access reviews can target \"Sponsors\" as reviewers with a fallback.",
fr:"A est faux : les managers peuvent être relecteurs, mais sponsors est la propriété prévue pour les utilisateurs externes.\nB est faux : les attributs de sécurité personnalisés servent au filtrage et au scoping CA, pas au choix des relecteurs.\nC est faux : l'invitant est enregistré mais n'est pas une option de sélection de relecteur.\nD est correct : les sponsors sont le modèle de responsabilité documenté pour les guests — un ou plusieurs utilisateurs ou groupes internes peuvent être sponsors, et les access reviews peuvent désigner « Sponsors » comme relecteurs avec un repli."}
},
{
id:"d1-053", domain:1, topic:"Nested groups limitations",
q:{en:"Group \"All-Staff\" contains the groups \"Paris\" and \"Berlin\" as members. You assign licenses to All-Staff and also use it in a dynamic group rule. What is the result?",
   fr:"Le groupe « All-Staff » contient les groupes « Paris » et « Berlin » comme membres. Tu assignes des licences à All-Staff et tu l'utilises aussi dans une règle de groupe dynamique. Quel est le résultat ?"},
options:[
 {en:"Members of the nested groups get no licenses, because group-based licensing ignores nested group members; dynamic rules also cannot enumerate nested membership", fr:"Les membres des groupes imbriqués n'obtiennent aucune licence, car le licensing par groupe ignore les membres imbriqués ; les règles dynamiques ne savent pas non plus énumérer l'appartenance imbriquée"},
 {en:"Licenses are applied but the dynamic rule fails validation", fr:"Les licences s'appliquent mais la règle dynamique échoue à la validation"},
 {en:"Nested groups are not allowed in Entra ID at all", fr:"Les groupes imbriqués ne sont pas autorisés du tout dans Entra ID"},
 {en:"Everyone is licensed transitively", fr:"Tout le monde est licencié de façon transitive"}],
correct:[0],
explanation:{en:"A is correct: group-based licensing applies only to direct user members, and dynamic membership rules cannot express nested group membership (memberOf rules cover direct membership of specified groups, not recursion). Flatten the design instead.\nB is wrong: the licensing side is also affected.\nC is wrong: security groups can be nested; the limitation is in how features consume them.\nD is wrong: transitive licensing is exactly what does NOT happen.",
fr:"A est correct : le licensing par groupe ne s'applique qu'aux utilisateurs membres directs, et les règles d'appartenance dynamique ne savent pas exprimer une appartenance imbriquée (les règles memberOf couvrent l'appartenance directe à des groupes désignés, pas la récursion). Il faut aplatir la conception.\nB est faux : le côté licences est aussi affecté.\nC est faux : les groupes de sécurité peuvent être imbriqués ; la limite est dans la façon dont les fonctionnalités les consomment.\nD est faux : le licensing transitif est précisément ce qui ne se produit PAS."}
},
{
id:"d1-054", domain:1, topic:"Directory extension attributes",
q:{en:"An on-premises HR attribute, employeeCostCenter, must be available in Entra ID so it can be emitted as a claim to a SaaS application. What do you configure in Entra Connect?",
   fr:"Un attribut RH on-prem, employeeCostCenter, doit être disponible dans Entra ID pour être émis comme claim vers une application SaaS. Que configures-tu dans Entra Connect ?"},
options:[
 {en:"An access package with a custom extension", fr:"Un access package avec une extension personnalisée"},
 {en:"The Directory extension attribute sync optional feature, selecting employeeCostCenter", fr:"La fonctionnalité optionnelle Directory extension attribute sync, en sélectionnant employeeCostCenter"},
 {en:"Password hash synchronization", fr:"La synchronisation de hash de mot de passe"},
 {en:"A custom security attribute in Entra ID, populated manually", fr:"Un attribut de sécurité personnalisé dans Entra ID, rempli manuellement"}],
correct:[1],
explanation:{en:"A is wrong: access packages are a governance feature, unrelated to attribute sync.\nB is correct: directory extensions let Entra Connect sync extra AD attributes into the cloud directory, where they can be used in claims mapping and Graph queries.\nC is wrong: PHS synchronizes credentials, not attributes.\nD is wrong: custom security attributes are not synced from AD by Connect and are aimed at ABAC/filtering.",
fr:"A est faux : les access packages sont une fonctionnalité de gouvernance, sans lien avec la sync d'attributs.\nB est correct : les directory extensions permettent à Entra Connect de synchroniser des attributs AD supplémentaires vers l'annuaire cloud, où ils peuvent servir au mapping de claims et aux requêtes Graph.\nC est faux : PHS synchronise des identifiants, pas des attributs.\nD est faux : les attributs de sécurité personnalisés ne sont pas synchronisés depuis l'AD par Connect et visent l'ABAC/le filtrage."}
},
{
id:"d1-055", domain:1, topic:"External collaboration settings",
q:{en:"You must allow collaboration with fabrikam.com only, and block guest invitations to every other domain, tenant-wide. What do you configure?",
   fr:"Tu dois autoriser la collaboration avec fabrikam.com uniquement, et bloquer les invitations de guests vers tous les autres domaines, à l'échelle du tenant. Que configures-tu ?"},
options:[
 {en:"A deny list containing every other domain", fr:"Une liste de refus contenant tous les autres domaines"},
 {en:"A Conditional Access policy targeting guest users", fr:"Une stratégie d'accès conditionnel ciblant les utilisateurs guests"},
 {en:"An allow list in External collaboration settings containing fabrikam.com", fr:"Une liste d'autorisation dans les External collaboration settings contenant fabrikam.com"},
 {en:"Cross-tenant access settings inbound trust for fabrikam.com", fr:"La confiance entrante des cross-tenant access settings pour fabrikam.com"}],
correct:[2],
explanation:{en:"A is wrong: enumerating the entire internet is impossible to maintain.\nB is wrong: CA controls sign-in conditions for existing guests, it does not restrict who can be invited.\nC is correct: collaboration restrictions accept either an allow list or a deny list (never both), and an allow list is the correct, maintainable way to permit exactly one domain — everything else is blocked by default.\nD is wrong: inbound trust governs MFA/device claims, not which domains may be invited.",
fr:"A est faux : énumérer tout l'internet est impossible à maintenir.\nB est faux : l'accès conditionnel contrôle les conditions de connexion des guests existants, il ne restreint pas qui peut être invité.\nC est correct : les restrictions de collaboration acceptent soit une liste d'autorisation soit une liste de refus (jamais les deux), et une liste d'autorisation est la façon correcte et maintenable de n'autoriser qu'un domaine — tout le reste est bloqué par défaut.\nD est faux : la confiance entrante gouverne les revendications MFA/appareil, pas les domaines invitables."}
},
{
id:"d1-056", domain:1, topic:"Tenant types",
q:{en:"Your company builds a consumer-facing mobile app and wants sign-up with Google and email, fully branded, isolated from the employee directory. Which tenant type should you create?",
   fr:"Ton entreprise développe une app mobile grand public et veut une inscription via Google et email, entièrement personnalisée, isolée de l'annuaire des salariés. Quel type de tenant créer ?"},
options:[
 {en:"The existing workforce tenant with B2B guest invitations", fr:"Le workforce tenant existant avec des invitations de guests B2B"},
 {en:"An Azure subscription with its own directory", fr:"Un abonnement Azure avec son propre annuaire"},
 {en:"A second workforce tenant", fr:"Un second workforce tenant"},
 {en:"An external tenant in Microsoft Entra External ID", fr:"Un external tenant dans Microsoft Entra External ID"}],
correct:[3],
explanation:{en:"A is wrong: B2B guests are for business partners you invite, not anonymous consumers signing themselves up.\nB is wrong: a subscription is a billing container; it does not create a customer identity platform.\nC is wrong: a workforce tenant is designed for employees and partners, not consumer self-service at scale.\nD is correct: an external tenant is the CIAM configuration of Entra External ID — built for customer identities, with self-service sign-up user flows, social identity providers and full branding, in a directory separate from employees.",
fr:"A est faux : les guests B2B servent aux partenaires que tu invites, pas à des consommateurs anonymes qui s'inscrivent seuls.\nB est faux : un abonnement est un conteneur de facturation, il ne crée pas de plateforme d'identité client.\nC est faux : un workforce tenant est conçu pour les salariés et partenaires, pas pour du self-service grand public à grande échelle.\nD est correct : un external tenant est la configuration CIAM d'Entra External ID — pensée pour les identités clients, avec user flows d'inscription self-service, fournisseurs d'identité sociaux et personnalisation complète, dans un annuaire séparé des salariés."}
},
{
id:"d1-057", domain:1, topic:"Block sign-in vs delete",
q:{en:"An employee is suspended pending an investigation. They must not be able to sign in, but their mailbox, files and licence assignments must remain untouched for the legal team. What do you do?",
   fr:"Un salarié est suspendu le temps d'une enquête. Il ne doit plus pouvoir se connecter, mais sa boîte mail, ses fichiers et ses licences doivent rester intacts pour le service juridique. Que fais-tu ?"},
options:[
 {en:"Set the account to Block sign-in, and revoke its existing sessions", fr:"Mettre le compte en Bloquer la connexion, et révoquer ses sessions existantes"},
 {en:"Reset the password and tell nobody", fr:"Réinitialiser le mot de passe sans rien dire"},
 {en:"Delete the user account", fr:"Supprimer le compte utilisateur"},
 {en:"Remove all licences from the account", fr:"Retirer toutes les licences du compte"}],
correct:[0],
explanation:{en:"A is correct: blocking sign-in leaves the object, its data and its licences intact while denying authentication — and revoking sessions kills refresh tokens that would otherwise keep working for a while.\nB is wrong: a password reset alone leaves existing sessions and app tokens alive.\nC is wrong: deletion starts a 30-day soft delete and detaches licences and services, exactly what legal does not want.\nD is wrong: removing licences can start data deletion timers on mailboxes and OneDrive.",
fr:"A est correct : bloquer la connexion laisse l'objet, ses données et ses licences intacts tout en refusant l'authentification — et révoquer les sessions tue les refresh tokens qui continueraient sinon à fonctionner un moment.\nB est faux : une simple réinitialisation de mot de passe laisse vivantes les sessions et jetons applicatifs existants.\nC est faux : la suppression lance une suppression réversible de 30 jours et détache licences et services, précisément ce que le juridique ne veut pas.\nD est faux : retirer les licences peut déclencher les compteurs de suppression des données de la boîte et de OneDrive."}
},
{
id:"d1-058", domain:1, topic:"Revoke sessions",
q:{en:"A laptop with an active Microsoft 365 session was stolen. You reset the user's password. What additional action guarantees that the thief's existing sessions stop working?",
   fr:"Un portable avec une session Microsoft 365 active a été volé. Tu réinitialises le mot de passe de l'utilisateur. Quelle action supplémentaire garantit que les sessions existantes du voleur cessent de fonctionner ?"},
options:[
 {en:"Delete the device object only", fr:"Supprimer uniquement l'objet appareil"},
 {en:"Revoke sessions on the user object, which invalidates the refresh tokens", fr:"Révoquer les sessions sur l'objet utilisateur, ce qui invalide les refresh tokens"},
 {en:"Change the user's UPN", fr:"Changer l'UPN de l'utilisateur"},
 {en:"Wait for the access token to expire after one hour", fr:"Attendre l'expiration du jeton d'accès au bout d'une heure"}],
correct:[1],
explanation:{en:"A is wrong: deleting the device stops device-based Conditional Access but does not invalidate the user's tokens.\nB is correct: revoking sessions (revokeSignInSessions) resets the refresh token validity timestamp, so every existing refresh token is refused and the thief must authenticate again with the new password. On apps supporting Continuous Access Evaluation, this propagates within minutes.\nC is wrong: changing the UPN is disruptive and is not a token revocation mechanism.\nD is wrong: access tokens are short-lived but the refresh token would silently mint new ones.",
fr:"A est faux : supprimer l'appareil stoppe l'accès conditionnel basé appareil mais n'invalide pas les jetons de l'utilisateur.\nB est correct : révoquer les sessions (revokeSignInSessions) réinitialise l'horodatage de validité des refresh tokens, donc tous les refresh tokens existants sont refusés et le voleur doit se réauthentifier avec le nouveau mot de passe. Sur les apps compatibles Continuous Access Evaluation, cela se propage en quelques minutes.\nC est faux : changer l'UPN est perturbant et n'est pas un mécanisme de révocation de jetons.\nD est faux : les jetons d'accès sont courts mais le refresh token en génèrerait silencieusement de nouveaux."}
},
{
id:"d1-059", domain:1, topic:"Permanent deletion",
q:{en:"A user account was deleted 45 days ago and HR now needs it back with its original group memberships. What is possible?",
   fr:"Un compte utilisateur a été supprimé il y a 45 jours et les RH le veulent maintenant avec ses appartenances aux groupes d'origine. Qu'est-il possible de faire ?"},
options:[
 {en:"Open a support ticket; Microsoft can restore it for 12 months", fr:"Ouvrir un ticket de support ; Microsoft peut le restaurer pendant 12 mois"},
 {en:"Re-run Entra Connect, which recreates the object identically", fr:"Relancer Entra Connect, qui recrée l'objet à l'identique"},
 {en:"Nothing — after 30 days the object is permanently deleted and cannot be restored; you must create a new account", fr:"Rien — après 30 jours l'objet est définitivement supprimé et irrécupérable ; il faut créer un nouveau compte"},
 {en:"Restore it from the Deleted users blade, which keeps objects for 90 days", fr:"Le restaurer depuis le panneau Utilisateurs supprimés, qui conserve les objets 90 jours"}],
correct:[2],
explanation:{en:"A is wrong: Support cannot recover permanently deleted directory objects.\nB is wrong: that only applies to a synced account still present in on-premises AD, and even then the restored cloud object would be a new object unless the sourceAnchor still matches — the scenario says the account is gone.\nC is correct: soft-deleted users are restorable for 30 days only, after which they are permanently purged and their group memberships and licences cannot be recovered.\nD is wrong: the window is 30 days, not 90.",
fr:"A est faux : le support ne peut pas récupérer des objets d'annuaire définitivement supprimés.\nB est faux : cela ne vaut que pour un compte synchronisé toujours présent dans l'AD on-prem, et même alors l'objet cloud restauré serait un nouvel objet sauf si le sourceAnchor correspond encore — or l'énoncé dit que le compte a disparu.\nC est correct : les utilisateurs en suppression réversible sont restaurables 30 jours seulement, après quoi ils sont purgés définitivement et leurs appartenances aux groupes et licences sont irrécupérables.\nD est faux : la fenêtre est de 30 jours, pas 90."}
},
{
id:"d1-060", domain:1, topic:"Bulk create users",
q:{en:"You must create 300 users from a spreadsheet in the Entra portal. What is the supported approach?",
   fr:"Tu dois créer 300 utilisateurs depuis un tableur dans le portail Entra. Quelle est l'approche supportée ?"},
options:[
 {en:"Import the file into Entra Connect", fr:"Importer le fichier dans Entra Connect"},
 {en:"Paste the spreadsheet directly into the Users blade", fr:"Coller le tableur directement dans le panneau Utilisateurs"},
 {en:"Use a dynamic group with a creation rule", fr:"Utiliser un groupe dynamique avec une règle de création"},
 {en:"Download the bulk create CSV template, fill the required columns (name, user principal name, initial password, block sign in) and upload it", fr:"Télécharger le modèle CSV de création en masse, remplir les colonnes requises (nom, user principal name, mot de passe initial, blocage de connexion) et le téléverser"}],
correct:[3],
explanation:{en:"A is wrong: Entra Connect synchronizes from Active Directory, it does not import CSV files.\nB is wrong: there is no paste-a-spreadsheet feature.\nC is wrong: dynamic groups compute membership of existing users; they never create users.\nD is correct: bulk operations use a Microsoft-provided CSV template whose header rows must be preserved; the portal validates it and reports per-row results you can download.",
fr:"A est faux : Entra Connect synchronise depuis Active Directory, il n'importe pas de fichiers CSV.\nB est faux : il n'existe pas de fonction « coller un tableur ».\nC est faux : les groupes dynamiques calculent l'appartenance d'utilisateurs existants, ils n'en créent jamais.\nD est correct : les opérations en masse utilisent un modèle CSV fourni par Microsoft dont les lignes d'en-tête doivent être conservées ; le portail le valide et fournit un rapport ligne par ligne téléchargeable."}
},
{
id:"d1-061", domain:1, topic:"Licence conflict direct vs group",
q:{en:"A user has an E3 licence assigned directly AND inherits E5 from a group. You remove them from the group but they still hold E3. Why, and what must you do to have licences managed only by groups?",
   fr:"Un utilisateur a une licence E3 assignée directement ET hérite d'une E5 via un groupe. Tu le retires du groupe mais il garde E3. Pourquoi, et que dois-tu faire pour que les licences soient gérées uniquement par groupes ?"},
options:[
 {en:"Direct and inherited assignments are independent — you must explicitly remove the direct assignment from the user", fr:"Les attributions directes et héritées sont indépendantes — il faut retirer explicitement l'attribution directe sur l'utilisateur"},
 {en:"Group removal takes up to 30 days to propagate", fr:"Le retrait du groupe met jusqu'à 30 jours à se propager"},
 {en:"The user must be deleted and recreated", fr:"L'utilisateur doit être supprimé et recréé"},
 {en:"Direct assignments always win and cannot be removed", fr:"Les attributions directes gagnent toujours et ne peuvent pas être retirées"}],
correct:[0],
explanation:{en:"A is correct: the licence blade shows each assignment as Direct or Inherited (from group). Removing group membership only removes the inherited part; the direct assignment survives until you remove it, which is the classic migration cleanup step.\nB is wrong: group licence changes propagate in minutes, not 30 days.\nC is wrong: no recreation is needed.\nD is wrong: direct assignments are removable — that is exactly the fix.",
fr:"A est correct : le panneau des licences affiche chaque attribution comme Directe ou Héritée (d'un groupe). Retirer l'appartenance au groupe ne retire que la part héritée ; l'attribution directe subsiste jusqu'à ce que tu la retires, c'est l'étape de nettoyage classique d'une migration.\nB est faux : les changements de licences par groupe se propagent en minutes, pas en 30 jours.\nC est faux : aucune recréation n'est nécessaire.\nD est faux : les attributions directes sont retirables — c'est justement la solution."}
},
{
id:"d1-062", domain:1, topic:"Service plan control",
q:{en:"All 2,000 staff need Microsoft 365 E5, but Yammer and Sway must be unavailable to everyone. What is the most efficient configuration?",
   fr:"Les 2 000 salariés ont besoin de Microsoft 365 E5, mais Yammer et Sway doivent être indisponibles pour tout le monde. Quelle est la configuration la plus efficace ?"},
options:[
 {en:"Block the Yammer and Sway apps with Conditional Access instead, since service plans cannot be filtered", fr:"Bloquer les apps Yammer et Sway par accès conditionnel, puisque les service plans ne sont pas filtrables"},
 {en:"Assign E5 to a group and disable the Yammer and Sway service plans in the group's licence assignment", fr:"Assigner E5 à un groupe et désactiver les service plans Yammer et Sway dans l'attribution de licence du groupe"},
 {en:"Buy a cheaper SKU that excludes them", fr:"Acheter un SKU moins cher qui les exclut"},
 {en:"Disable the service plans on each of the 2,000 users individually", fr:"Désactiver les service plans sur chacun des 2 000 utilisateurs individuellement"}],
correct:[1],
explanation:{en:"A is wrong: service plans CAN be disabled, and Conditional Access blocking still consumes the plan and is easier to misconfigure.\nB is correct: group-based licensing lets you turn individual service plans off within the assigned SKU, and the choice applies to every current and future member — one place to change.\nC is wrong: you cannot compose SKUs à la carte, and the requirement is E5.\nD is wrong: it produces the same result with 2,000 times the effort and drifts over time.",
fr:"A est faux : les service plans SONT désactivables, et un blocage par accès conditionnel consomme quand même le plan et se configure plus mal.\nB est correct : le licensing par groupe permet de désactiver des service plans individuels au sein du SKU attribué, et le choix s'applique à tous les membres actuels et futurs — un seul endroit à modifier.\nC est faux : on ne compose pas les SKU à la carte, et le besoin est E5.\nD est faux : même résultat pour 2 000 fois plus d'effort, et cela dérive dans le temps."}
},
{
id:"d1-063", domain:1, topic:"Manager attribute",
q:{en:"You want access reviews to send each review to the reviewed user's line manager automatically. Which prerequisite must be in place?",
   fr:"Tu veux que les access reviews envoient automatiquement chaque revue au responsable hiérarchique de l'utilisateur concerné. Quel prérequis doit être en place ?"},
options:[
 {en:"Entra Connect must sync the employeeId attribute", fr:"Entra Connect doit synchroniser l'attribut employeeId"},
 {en:"The users must be in a dynamic group based on department", fr:"Les utilisateurs doivent être dans un groupe dynamique basé sur le département"},
 {en:"The Manager attribute must be populated on the user objects, and you should set a fallback reviewer for users without one", fr:"L'attribut Manager doit être renseigné sur les objets utilisateur, et il faut définir un relecteur de repli pour ceux qui n'en ont pas"},
 {en:"Each manager must hold the User Administrator role", fr:"Chaque manager doit détenir le rôle User Administrator"}],
correct:[2],
explanation:{en:"A is wrong: employeeId is unrelated to reviewer resolution.\nB is wrong: group membership does not determine the reviewer.\nC is correct: manager-based reviews read the Manager property, usually synced from HR or on-premises AD. Users whose Manager is empty produce reviews with no decision maker, which is why the fallback reviewer exists.\nD is wrong: reviewers need no administrative role — that is the point of delegating to business managers.",
fr:"A est faux : employeeId n'a aucun rapport avec la résolution du relecteur.\nB est faux : l'appartenance à un groupe ne détermine pas le relecteur.\nC est correct : les revues par manager lisent la propriété Manager, généralement synchronisée depuis les RH ou l'AD on-prem. Les utilisateurs sans Manager produisent des revues sans décideur, d'où l'existence du relecteur de repli.\nD est faux : les relecteurs n'ont besoin d'aucun rôle d'administration — c'est tout l'intérêt de déléguer aux managers métier."}
},
{
id:"d1-064", domain:1, topic:"Dynamic rules - multivalue",
q:{en:"You must build a dynamic group of users who have a specific service plan assigned. Which rule syntax is valid?",
   fr:"Tu dois construire un groupe dynamique d'utilisateurs auxquels un service plan précis est attribué. Quelle syntaxe de règle est valide ?"},
options:[
 {en:"user.assignedPlans -eq \"guid\"", fr:"user.assignedPlans -eq « guid »"},
 {en:"user.licences -contains \"guid\"", fr:"user.licences -contains « guid »"},
 {en:"user.assignedPlans -all \"guid\"", fr:"user.assignedPlans -all « guid »"},
 {en:"user.assignedPlans -any (assignedPlan.servicePlanId -eq \"guid\" -and assignedPlan.capabilityStatus -eq \"Enabled\")", fr:"user.assignedPlans -any (assignedPlan.servicePlanId -eq « guid » -and assignedPlan.capabilityStatus -eq « Enabled »)"}],
correct:[3],
explanation:{en:"A is wrong: -eq cannot compare a collection to a single string.\nB is wrong: there is no user.licences property in dynamic rules.\nC is wrong: -all requires a sub-expression too, and its semantics are wrong for this goal.\nD is correct: assignedPlans is a multi-value collection, so you use the -any operator with a sub-expression describing one element. -all is also valid syntax but means EVERY element must match, which is not what you want here.",
fr:"A est faux : -eq ne peut pas comparer une collection à une chaîne unique.\nB est faux : la propriété user.licences n'existe pas dans les règles dynamiques.\nC est faux : -all exige aussi une sous-expression, et sa sémantique ne convient pas à cet objectif.\nD est correct : assignedPlans est une collection multi-valeurs, on utilise donc l'opérateur -any avec une sous-expression décrivant un élément. -all est aussi une syntaxe valide mais signifie que CHAQUE élément doit correspondre, ce qui n'est pas le but ici."}
},
{
id:"d1-065", domain:1, topic:"memberOf dynamic rules",
q:{en:"You create a dynamic group with the rule user -memberOf [\"All-Employees\"]. All-Employees itself contains the nested group Paris-Staff. What happens?",
   fr:"Tu crées un groupe dynamique avec la règle user -memberOf [« All-Employees »]. All-Employees contient lui-même le groupe imbriqué Paris-Staff. Que se passe-t-il ?"},
options:[
 {en:"Only direct members of All-Employees are added — memberOf rules are not transitive, so Paris-Staff members are excluded", fr:"Seuls les membres directs de All-Employees sont ajoutés — les règles memberOf ne sont pas transitives, donc les membres de Paris-Staff sont exclus"},
 {en:"The rule fails validation", fr:"La règle échoue à la validation"},
 {en:"Paris-Staff itself becomes a member of the dynamic group", fr:"Paris-Staff lui-même devient membre du groupe dynamique"},
 {en:"All members including nested ones are added", fr:"Tous les membres, y compris imbriqués, sont ajoutés"}],
correct:[0],
explanation:{en:"A is correct: memberOf rules evaluate direct membership only — nesting is not expanded — and they carry other limits such as a maximum number of referenced groups and no mixing with other rule types in the same expression.\nB is wrong: the syntax is valid; the surprise is semantic, not syntactic.\nC is wrong: a dynamic user group contains users, never groups.\nD is wrong: transitive expansion is precisely what memberOf does not do.",
fr:"A est correct : les règles memberOf n'évaluent que l'appartenance directe — l'imbrication n'est pas dépliée — et elles comportent d'autres limites, comme un nombre maximal de groupes référencés et l'impossibilité de les mélanger à d'autres types de règles dans la même expression.\nB est faux : la syntaxe est valide ; la surprise est sémantique, pas syntaxique.\nC est faux : un groupe dynamique d'utilisateurs contient des utilisateurs, jamais des groupes.\nD est faux : l'expansion transitive est précisément ce que memberOf ne fait pas."}
},
{
id:"d1-066", domain:1, topic:"Membership type change",
q:{en:"A security group has 400 manually added members. You change its membership type from Assigned to Dynamic and enter a rule that matches 380 of them. What is the outcome?",
   fr:"Un groupe de sécurité compte 400 membres ajoutés manuellement. Tu changes son type d'appartenance d'Assigné à Dynamique avec une règle qui correspond à 380 d'entre eux. Quel est le résultat ?"},
options:[
 {en:"Both membership types coexist permanently", fr:"Les deux types d'appartenance coexistent définitivement"},
 {en:"All existing manual members are removed and the group is repopulated from the rule alone, so it ends with the 380 matching users", fr:"Tous les membres manuels existants sont retirés et le groupe est repeuplé uniquement par la règle, il finit donc avec les 380 utilisateurs correspondants"},
 {en:"The 400 members stay and the rule only adds new ones", fr:"Les 400 membres restent et la règle n'ajoute que de nouveaux membres"},
 {en:"The change is blocked because the group is not empty", fr:"Le changement est bloqué car le groupe n'est pas vide"}],
correct:[1],
explanation:{en:"A is wrong: a group is either assigned or dynamic, never both.\nB is correct: converting to dynamic discards all existing assigned members — the rule becomes the single source of truth. The 20 users who do not match silently lose access, so audit the delta before converting.\nC is wrong: manual members are not preserved.\nD is wrong: the conversion is allowed, which is what makes it dangerous.",
fr:"A est faux : un groupe est soit assigné soit dynamique, jamais les deux.\nB est correct : la conversion en dynamique élimine tous les membres assignés existants — la règle devient la seule source de vérité. Les 20 utilisateurs qui ne correspondent pas perdent silencieusement l'accès, il faut donc auditer l'écart avant de convertir.\nC est faux : les membres manuels ne sont pas conservés.\nD est faux : la conversion est autorisée, et c'est ce qui la rend dangereuse."}
},
{
id:"d1-067", domain:1, topic:"Group writeback",
q:{en:"Cloud-only Microsoft 365 groups must appear in on-premises Active Directory so that a legacy file server can use them in ACLs. What do you configure?",
   fr:"Des groupes Microsoft 365 cloud-only doivent apparaître dans l'Active Directory on-prem pour qu'un serveur de fichiers historique les utilise dans ses ACL. Que configures-tu ?"},
options:[
 {en:"Password writeback", fr:"Le password writeback"},
 {en:"Device writeback", fr:"Le device writeback"},
 {en:"Group writeback, available in Entra Cloud Sync and as an Entra Connect optional feature", fr:"Le group writeback, disponible dans Entra Cloud Sync et comme fonctionnalité optionnelle d'Entra Connect"},
 {en:"A dynamic group in Entra ID", fr:"Un groupe dynamique dans Entra ID"}],
correct:[2],
explanation:{en:"A is wrong: password writeback pushes password resets, not objects.\nB is wrong: device writeback writes device objects for on-premises conditional access scenarios.\nC is correct: group writeback provisions cloud groups back into AD as distribution or security groups so on-premises resources can consume them. Cloud Sync group writeback is the modern implementation and supports security groups as well.\nD is wrong: a dynamic group only computes cloud membership; the file server still cannot see it.",
fr:"A est faux : le password writeback pousse des réinitialisations de mot de passe, pas des objets.\nB est faux : le device writeback écrit des objets appareil pour des scénarios d'accès conditionnel on-prem.\nC est correct : le group writeback provisionne les groupes cloud dans l'AD comme groupes de distribution ou de sécurité pour que les ressources on-prem les consomment. Le group writeback de Cloud Sync est l'implémentation moderne et supporte aussi les groupes de sécurité.\nD est faux : un groupe dynamique ne calcule qu'une appartenance cloud ; le serveur de fichiers ne le voit toujours pas."}
},
{
id:"d1-068", domain:1, topic:"Cloud Sync vs Connect",
q:{en:"After an acquisition you must synchronize three Active Directory forests that have no trust between them and no network path to a single central server. Which tool fits best?",
   fr:"Après une acquisition, tu dois synchroniser trois forêts Active Directory sans relation d'approbation entre elles et sans chemin réseau vers un serveur central unique. Quel outil convient le mieux ?"},
options:[
 {en:"Entra Connect Health", fr:"Entra Connect Health"},
 {en:"Cross-tenant synchronization", fr:"Cross-tenant synchronization"},
 {en:"Entra Connect, installed once on a server that must reach all three forests", fr:"Entra Connect, installé une fois sur un serveur devant joindre les trois forêts"},
 {en:"Entra Cloud Sync, with a lightweight provisioning agent deployed inside each disconnected forest", fr:"Entra Cloud Sync, avec un agent de provisioning léger déployé dans chaque forêt déconnectée"}],
correct:[3],
explanation:{en:"A is wrong: Connect Health only monitors.\nB is wrong: cross-tenant sync moves users between Entra tenants, not from on-premises AD.\nC is wrong: Entra Connect needs network connectivity from its server to every forest it syncs, which the scenario rules out.\nD is correct: Cloud Sync's agent-per-forest model is designed for disconnected forests and merged environments — no forest trust and no single sync server with line of sight are required, and the configuration lives in the cloud.",
fr:"A est faux : Connect Health ne fait que surveiller.\nB est faux : la cross-tenant sync déplace des utilisateurs entre tenants Entra, pas depuis un AD on-prem.\nC est faux : Entra Connect exige une connectivité réseau depuis son serveur vers chaque forêt synchronisée, ce que l'énoncé exclut.\nD est correct : le modèle un agent par forêt de Cloud Sync est conçu pour les forêts déconnectées et les environnements fusionnés — aucune approbation de forêt ni serveur de sync unique avec visibilité réseau n'est requis, et la configuration vit dans le cloud."}
},
{
id:"d1-069", domain:1, topic:"Cloud Sync high availability",
q:{en:"Your Cloud Sync deployment has a single provisioning agent. Management asks how to remove that single point of failure. What do you do?",
   fr:"Ton déploiement Cloud Sync n'a qu'un seul agent de provisioning. La direction demande comment supprimer ce point unique de défaillance. Que fais-tu ?"},
options:[
 {en:"Install additional provisioning agents on other servers registered to the same configuration, for automatic failover", fr:"Installer des agents de provisioning supplémentaires sur d'autres serveurs, enregistrés sur la même configuration, pour un basculement automatique"},
 {en:"Nothing — Cloud Sync is a cloud service with no on-premises component", fr:"Rien — Cloud Sync est un service cloud sans composant on-prem"},
 {en:"Install a second Entra Connect server in staging mode", fr:"Installer un second serveur Entra Connect en staging mode"},
 {en:"Enable password hash synchronization", fr:"Activer la synchronisation de hash de mot de passe"}],
correct:[0],
explanation:{en:"A is correct: Cloud Sync supports several lightweight agents per configuration, and the service distributes work and fails over automatically — Microsoft recommends more than one agent for resilience.\nB is wrong: Cloud Sync does require an on-premises agent to read Active Directory.\nC is wrong: a staging Connect server is the HA story for Entra Connect, and it is a different, heavier product.\nD is wrong: PHS is an authentication feature, unrelated to agent availability.",
fr:"A est correct : Cloud Sync supporte plusieurs agents légers par configuration, et le service répartit le travail et bascule automatiquement — Microsoft recommande plus d'un agent pour la résilience.\nB est faux : Cloud Sync nécessite bien un agent on-prem pour lire Active Directory.\nC est faux : un serveur Connect en staging est la solution de HA d'Entra Connect, un produit différent et plus lourd.\nD est faux : PHS est une fonctionnalité d'authentification, sans lien avec la disponibilité des agents."}
},
{
id:"d1-070", domain:1, topic:"Duplicate attribute sync errors",
q:{en:"Entra Connect reports export errors of type \"AttributeValueMustBeUnique\" on proxyAddresses for several users. What is the correct remediation?",
   fr:"Entra Connect signale des erreurs d'export de type « AttributeValueMustBeUnique » sur proxyAddresses pour plusieurs utilisateurs. Quelle est la bonne remédiation ?"},
options:[
 {en:"Delete the affected cloud objects and let them be recreated", fr:"Supprimer les objets cloud concernés et les laisser se recréer"},
 {en:"Fix the duplicate values in on-premises AD (IdFix helps find them), then let the next sync cycle export the corrected objects", fr:"Corriger les valeurs en double dans l'AD on-prem (IdFix aide à les trouver), puis laisser le cycle de sync suivant exporter les objets corrigés"},
 {en:"Disable proxyAddresses synchronization permanently", fr:"Désactiver définitivement la synchronisation de proxyAddresses"},
 {en:"Reinstall Entra Connect", fr:"Réinstaller Entra Connect"}],
correct:[1],
explanation:{en:"A is wrong: deleting cloud objects loses data and does nothing about the duplicate in AD, so the error returns.\nB is correct: the error means two source objects claim the same unique value. Entra ID refuses the write until the duplicate is resolved at the source, and IdFix is the Microsoft tool that reports and fixes such directory data problems before or during sync.\nC is wrong: removing the attribute from scope breaks mail routing and hides the data problem.\nD is wrong: this is a data error, not a broken installation.",
fr:"A est faux : supprimer les objets cloud perd des données et ne règle rien dans l'AD, donc l'erreur revient.\nB est correct : l'erreur signifie que deux objets source revendiquent la même valeur unique. Entra ID refuse l'écriture jusqu'à ce que le doublon soit résolu à la source, et IdFix est l'outil Microsoft qui repère et corrige ce genre de problème de données d'annuaire avant ou pendant la sync.\nC est faux : retirer l'attribut de la portée casse le routage de messagerie et masque le problème de données.\nD est faux : c'est une erreur de données, pas une installation cassée."}
},
{
id:"d1-071", domain:1, topic:"Custom domain verification",
q:{en:"You added contoso.fr as a custom domain but it stays Unverified. What is the required step?",
   fr:"Tu as ajouté contoso.fr comme domaine personnalisé mais il reste Non vérifié. Quelle est l'étape requise ?"},
options:[
 {en:"Make it the primary domain first", fr:"En faire d'abord le domaine principal"},
 {en:"Federate it with AD FS", fr:"Le fédérer avec AD FS"},
 {en:"Create the DNS record shown by Entra ID (a TXT or MX record with the given value) at your DNS provider, then click Verify", fr:"Créer chez ton fournisseur DNS l'enregistrement affiché par Entra ID (un enregistrement TXT ou MX avec la valeur fournie), puis cliquer sur Vérifier"},
 {en:"Assign a licence to a user with that domain in their UPN", fr:"Assigner une licence à un utilisateur ayant ce domaine dans son UPN"}],
correct:[2],
explanation:{en:"A is wrong: only a verified domain can become primary.\nB is wrong: federation is configured after verification and is optional.\nC is correct: domain verification proves control of the DNS zone. Entra ID gives you a specific record to publish; verification succeeds once it resolves publicly, which can take a few minutes to propagate.\nD is wrong: you cannot set a UPN to an unverified domain, so this is impossible as well as irrelevant.",
fr:"A est faux : seul un domaine vérifié peut devenir principal.\nB est faux : la fédération se configure après la vérification et reste optionnelle.\nC est correct : la vérification de domaine prouve le contrôle de la zone DNS. Entra ID te donne un enregistrement précis à publier ; la vérification réussit dès qu'il se résout publiquement, ce qui peut prendre quelques minutes de propagation.\nD est faux : on ne peut pas mettre un UPN sur un domaine non vérifié, c'est donc impossible et hors sujet."}
},
{
id:"d1-072", domain:1, topic:"Administrative units for devices",
q:{en:"Regional IT teams must manage only the Windows devices of their own country, including enabling/disabling and BitLocker key access. How do you scope this?",
   fr:"Les équipes IT régionales doivent gérer uniquement les appareils Windows de leur pays, y compris l'activation/désactivation et l'accès aux clés BitLocker. Comment cibler cela ?"},
options:[
 {en:"Use Intune scope tags only, since Entra roles cannot be scoped to devices", fr:"Utiliser uniquement les scope tags Intune, car les rôles Entra ne peuvent pas être limités aux appareils"},
 {en:"Assign Cloud Device Administrator at tenant scope to each regional team", fr:"Assigner Cloud Device Administrator au niveau du tenant à chaque équipe régionale"},
 {en:"Create a dynamic device group and assign the role to the group", fr:"Créer un groupe dynamique d'appareils et assigner le rôle au groupe"},
 {en:"Put each country's devices in an administrative unit and assign device-management roles scoped to that administrative unit", fr:"Placer les appareils de chaque pays dans une administrative unit et assigner les rôles de gestion d'appareils scopés sur cette administrative unit"}],
correct:[3],
explanation:{en:"A is wrong: Entra roles CAN be scoped to devices via administrative units; Intune scope tags are complementary, not a replacement.\nB is wrong: tenant scope lets every regional team manage every device worldwide.\nC is wrong: assigning a role to a group defines WHO holds the role, not WHICH objects it applies to.\nD is correct: administrative units can contain devices, and device-related roles can be assigned with the AU as their scope, so each team only administers its own machines.",
fr:"A est faux : les rôles Entra PEUVENT être limités aux appareils via les administrative units ; les scope tags Intune sont complémentaires, pas un remplacement.\nB est faux : la portée tenant permet à chaque équipe régionale de gérer tous les appareils du monde.\nC est faux : assigner un rôle à un groupe définit QUI détient le rôle, pas SUR QUELS objets il s'applique.\nD est correct : les administrative units peuvent contenir des appareils, et les rôles liés aux appareils peuvent être assignés avec l'AU comme portée, donc chaque équipe n'administre que ses propres machines."}
},
{
id:"d1-073", domain:1, topic:"Attribute set delegation",
q:{en:"A Global Administrator cannot see or create custom security attributes. Why, and what is needed?",
   fr:"Un Global Administrator ne peut ni voir ni créer d'attributs de sécurité personnalisés. Pourquoi, et que faut-il ?"},
options:[
 {en:"Custom security attribute permissions are not included in Global Administrator by design — you must explicitly assign roles such as Attribute Definition Administrator or Attribute Assignment Administrator", fr:"Les permissions sur les attributs de sécurité personnalisés ne sont pas incluses dans Global Administrator par conception — il faut assigner explicitement des rôles comme Attribute Definition Administrator ou Attribute Assignment Administrator"},
 {en:"The tenant needs Entra ID P2", fr:"Le tenant a besoin d'Entra ID P2"},
 {en:"The feature must be enabled in Security defaults", fr:"La fonctionnalité doit être activée dans les Security defaults"},
 {en:"Custom security attributes only exist in external tenants", fr:"Les attributs de sécurité personnalisés n'existent que dans les external tenants"}],
correct:[0],
explanation:{en:"A is correct: custom security attributes deliberately sit outside Global Administrator so that sensitive business data (clearance level, cost centre) is not readable by every global admin. Four purpose-built roles govern definition and assignment, read and write, and they can be scoped to a single attribute set.\nB is wrong: licensing is not the blocker here.\nC is wrong: Security defaults have no such switch.\nD is wrong: custom security attributes are a workforce-tenant feature.",
fr:"A est correct : les attributs de sécurité personnalisés sont délibérément hors de Global Administrator afin que des données métier sensibles (niveau d'habilitation, centre de coûts) ne soient pas lisibles par tous les admins globaux. Quatre rôles dédiés gouvernent la définition et l'attribution, en lecture et en écriture, et peuvent être limités à un seul attribute set.\nB est faux : la licence n'est pas le blocage ici.\nC est faux : les Security defaults n'ont pas ce réglage.\nD est faux : les attributs de sécurité personnalisés sont une fonctionnalité du workforce tenant."}
},
{
id:"d1-074", domain:1, topic:"Custom Entra roles",
q:{en:"A team must be able to update the credentials of ONE specific application registration and nothing else. No built-in role is that narrow. What do you do?",
   fr:"Une équipe doit pouvoir mettre à jour les identifiants d'UN app registration précis et rien d'autre. Aucun rôle intégré n'est aussi restreint. Que fais-tu ?"},
options:[
 {en:"Add the team as owners of every application", fr:"Ajouter l'équipe comme propriétaires de toutes les applications"},
 {en:"Create a custom role containing only the credential-update permission and assign it scoped to that single application", fr:"Créer un rôle personnalisé contenant uniquement la permission de mise à jour des identifiants et l'assigner avec pour portée cette seule application"},
 {en:"Create an administrative unit containing the application", fr:"Créer une administrative unit contenant l'application"},
 {en:"Assign Application Administrator at tenant scope", fr:"Assigner Application Administrator au niveau du tenant"}],
correct:[1],
explanation:{en:"A is wrong: ownership of all applications grants far more than one app's credentials.\nB is correct: custom roles (Entra ID P1) let you pick individual directory permissions and assign them at tenant scope or at single-application scope — the precise answer when no built-in role is narrow enough.\nC is wrong: administrative units scope users, groups and devices, not application registrations.\nD is wrong: Application Administrator manages every application in the tenant.",
fr:"A est faux : la propriété de toutes les applications accorde bien plus que les identifiants d'une seule.\nB est correct : les rôles personnalisés (Entra ID P1) permettent de choisir des permissions d'annuaire individuelles et de les assigner au niveau du tenant ou d'une seule application — la réponse précise quand aucun rôle intégré n'est assez restreint.\nC est faux : les administrative units ciblent utilisateurs, groupes et appareils, pas les app registrations.\nD est faux : Application Administrator gère toutes les applications du tenant."}
},
{
id:"d1-075", domain:1, topic:"Read-only roles",
q:{en:"A SOC analyst must read sign-in logs and audit logs, and nothing else. Which role is the least privileged fit?",
   fr:"Un analyste SOC doit lire les journaux de connexion et d'audit, et rien d'autre. Quel rôle est le plus restreint qui convient ?"},
options:[
 {en:"Security Reader", fr:"Security Reader"},
 {en:"Global Reader", fr:"Global Reader"},
 {en:"Reports Reader", fr:"Reports Reader"},
 {en:"Security Administrator", fr:"Security Administrator"}],
correct:[2],
explanation:{en:"A is wrong: Security Reader reads security features such as ID Protection and Defender settings; it is a reasonable second choice but broader than the stated need for reporting data.\nB is wrong: Global Reader can read essentially the whole directory and Microsoft 365 configuration — much broader.\nC is correct: Reports Reader is scoped to sign-in and audit reporting data, which is exactly the requirement.\nD is wrong: Security Administrator can change security configuration, a write role.",
fr:"A est faux : Security Reader lit les fonctionnalités de sécurité comme ID Protection et les réglages Defender ; c'est un second choix raisonnable mais plus large que le besoin exprimé de données de reporting.\nB est faux : Global Reader peut lire pratiquement tout l'annuaire et la configuration Microsoft 365 — bien plus large.\nC est correct : Reports Reader se limite aux données de reporting de connexion et d'audit, exactement le besoin.\nD est faux : Security Administrator peut modifier la configuration de sécurité, c'est un rôle en écriture."}
},
{
id:"d1-076", domain:1, topic:"Guest directory permissions",
q:{en:"Guests can currently browse your tenant's user list and group memberships. You must restrict them to only the objects they are related to, without breaking their access to shared files. What do you set?",
   fr:"Les guests peuvent actuellement parcourir la liste des utilisateurs et les appartenances aux groupes de ton tenant. Tu dois les limiter aux seuls objets qui les concernent, sans casser leur accès aux fichiers partagés. Que règles-tu ?"},
options:[
 {en:"Delete the guests and re-invite them with a different UserType", fr:"Supprimer les guests et les réinviter avec un UserType différent"},
 {en:"Block the Microsoft Graph API for guests with Conditional Access", fr:"Bloquer l'API Microsoft Graph pour les guests par accès conditionnel"},
 {en:"Remove all guests from Microsoft 365 groups", fr:"Retirer tous les guests des groupes Microsoft 365"},
 {en:"Guest user access restrictions: \"Guest user access is restricted to properties and memberships of their own directory objects\"", fr:"Restrictions d'accès des guests : « L'accès des invités est limité aux propriétés et appartenances de leurs propres objets d'annuaire »"}],
correct:[3],
explanation:{en:"A is wrong: UserType Member would grant MORE directory visibility, not less.\nB is wrong: blocking Graph breaks the apps guests legitimately use.\nC is wrong: that removes their collaboration access, which the requirement forbids.\nD is correct: external collaboration settings offer three guest permission levels — same as members, limited (the default), and the most restrictive option described here — and tightening it does not affect resource access already granted through groups or sharing.",
fr:"A est faux : le UserType Member accorderait PLUS de visibilité sur l'annuaire, pas moins.\nB est faux : bloquer Graph casse les applications que les guests utilisent légitimement.\nC est faux : cela leur retire leur accès de collaboration, ce que le besoin interdit.\nD est correct : les paramètres de collaboration externe offrent trois niveaux de permissions pour les guests — identiques aux membres, limitées (le défaut), et l'option la plus restrictive décrite ici — et durcir ce réglage n'affecte pas l'accès aux ressources déjà accordé via des groupes ou du partage."}
},
{
id:"d1-077", domain:1, topic:"Self-service sign-up attributes",
q:{en:"In a self-service sign-up user flow you must collect the visitor's company name and store it on the created user object. What do you configure?",
   fr:"Dans un user flow d'inscription self-service, tu dois collecter le nom de l'entreprise du visiteur et le stocker sur l'objet utilisateur créé. Que configures-tu ?"},
options:[
 {en:"A user attribute (built-in or custom) added to the user flow's collected attributes", fr:"Un attribut utilisateur (intégré ou personnalisé) ajouté aux attributs collectés par le user flow"},
 {en:"A custom security attribute assigned after sign-up", fr:"Un attribut de sécurité personnalisé assigné après l'inscription"},
 {en:"An access package question", fr:"Une question d'access package"},
 {en:"A dynamic group rule on companyName", fr:"Une règle de groupe dynamique sur companyName"}],
correct:[0],
explanation:{en:"A is correct: user flows let you choose which attributes to collect at sign-up, including custom user attributes you define, and the values are written to the new user object.\nB is wrong: custom security attributes are not collected by user flows and are aimed at governance filtering.\nC is wrong: access package questions are answered when requesting access, not when signing up.\nD is wrong: a dynamic rule consumes an attribute, it does not collect one.",
fr:"A est correct : les user flows permettent de choisir les attributs collectés à l'inscription, y compris des attributs utilisateur personnalisés que tu définis, et les valeurs sont écrites sur le nouvel objet utilisateur.\nB est faux : les attributs de sécurité personnalisés ne sont pas collectés par les user flows et visent le filtrage de gouvernance.\nC est faux : les questions d'access package sont répondues lors d'une demande d'accès, pas à l'inscription.\nD est faux : une règle dynamique consomme un attribut, elle ne le collecte pas."}
},
{
id:"d1-078", domain:1, topic:"Direct federation",
q:{en:"A partner with 5,000 employees uses a non-Microsoft IdP and refuses to have its users receive email one-time passcodes. What do you set up so they use their own credentials?",
   fr:"Un partenaire de 5 000 salariés utilise un IdP non Microsoft et refuse que ses utilisateurs reçoivent des codes à usage unique par email. Que mets-tu en place pour qu'ils utilisent leurs propres identifiants ?"},
options:[
 {en:"Create 5,000 cloud accounts in your tenant", fr:"Créer 5 000 comptes cloud dans ton tenant"},
 {en:"Direct federation (SAML/WS-Fed identity provider) for the partner's domain in External Identities", fr:"Une fédération directe (fournisseur d'identité SAML/WS-Fed) pour le domaine du partenaire dans External Identities"},
 {en:"Cross-tenant access settings inbound trust", fr:"La confiance entrante des cross-tenant access settings"},
 {en:"Google federation", fr:"La fédération Google"}],
correct:[1],
explanation:{en:"A is wrong: creating internal accounts for a partner's staff is an administrative and security anti-pattern.\nB is correct: direct federation adds a SAML or WS-Fed identity provider for a specific domain, so guests from that domain authenticate at their own IdP instead of redeeming with an email passcode.\nC is wrong: cross-tenant access settings apply between Entra ID tenants, and this partner is not on Entra ID.\nD is wrong: Google federation only covers Gmail identities.",
fr:"A est faux : créer des comptes internes pour le personnel d'un partenaire est un anti-modèle administratif et de sécurité.\nB est correct : la fédération directe ajoute un fournisseur d'identité SAML ou WS-Fed pour un domaine précis, donc les guests de ce domaine s'authentifient auprès de leur propre IdP au lieu d'utiliser un code par email.\nC est faux : les cross-tenant access settings s'appliquent entre tenants Entra ID, et ce partenaire n'est pas sur Entra ID.\nD est faux : la fédération Google ne couvre que les identités Gmail."}
},
{
id:"d1-079", domain:1, topic:"Invitation redemption",
q:{en:"A guest says their invitation link no longer works, and their account shows as \"Pending acceptance\". What is the appropriate action?",
   fr:"Un guest signale que son lien d'invitation ne fonctionne plus, et son compte affiche « En attente d'acceptation ». Quelle est l'action appropriée ?"},
options:[
 {en:"Delete the guest and start over, because links cannot be reissued", fr:"Supprimer le guest et recommencer, car les liens ne peuvent pas être réémis"},
 {en:"Ask them to sign in with an email one-time passcode instead of redeeming", fr:"Lui demander de se connecter par code email à usage unique au lieu d'accepter l'invitation"},
 {en:"Resend the invitation, which issues a fresh redemption link", fr:"Renvoyer l'invitation, ce qui émet un nouveau lien d'acceptation"},
 {en:"Assign them a licence to activate the account", fr:"Lui assigner une licence pour activer le compte"}],
correct:[2],
explanation:{en:"A is wrong: deleting the object throws away group memberships and app assignments for nothing.\nB is wrong: the passcode is a sign-in method that comes into play during redemption; it does not replace a valid invitation for a pending account.\nC is correct: invitation links are time-limited, and the portal and Graph both let you resend the invitation to generate a new one for the same guest object, preserving any access already granted to it.\nD is wrong: guests do not need a licence to redeem an invitation.",
fr:"A est faux : supprimer l'objet jette les appartenances aux groupes et assignations d'applications pour rien.\nB est faux : le code par email est une méthode de connexion qui intervient pendant l'acceptation ; il ne remplace pas une invitation valide pour un compte en attente.\nC est correct : les liens d'invitation ont une durée limitée, et le portail comme Graph permettent de renvoyer l'invitation pour en générer un nouveau sur le même objet guest, en conservant les accès déjà accordés.\nD est faux : un guest n'a pas besoin de licence pour accepter une invitation."}
},
{
id:"d1-080", domain:1, topic:"Cross-tenant outbound settings",
q:{en:"Your security team wants to stop YOUR employees from being invited as guests into unapproved external tenants. Which setting controls this?",
   fr:"Ton équipe sécurité veut empêcher TES salariés d'être invités comme guests dans des tenants externes non approuvés. Quel réglage contrôle cela ?"},
options:[
 {en:"External collaboration settings allow list", fr:"La liste d'autorisation des External collaboration settings"},
 {en:"A Conditional Access policy on guest users", fr:"Une stratégie d'accès conditionnel sur les guests"},
 {en:"Inbound access settings", fr:"Les paramètres d'accès entrant"},
 {en:"Outbound access settings in cross-tenant access settings, blocking B2B collaboration except for allowed tenants", fr:"Les paramètres d'accès sortant des cross-tenant access settings, bloquant la collaboration B2B sauf pour les tenants autorisés"}],
correct:[3],
explanation:{en:"A is wrong: the collaboration allow list restricts which domains you may INVITE, not where your users may be invited.\nB is wrong: your Conditional Access policies are evaluated by your tenant for access to your resources, not by the partner tenant.\nC is wrong: inbound settings control which external users may come into YOUR tenant.\nD is correct: outbound settings govern where your own users may go as guests; you can block B2B collaboration by default and allow specific partner tenants, per user group if needed.",
fr:"A est faux : la liste d'autorisation de collaboration restreint les domaines que tu peux INVITER, pas les endroits où tes utilisateurs peuvent être invités.\nB est faux : tes stratégies d'accès conditionnel sont évaluées par ton tenant pour l'accès à tes ressources, pas par le tenant partenaire.\nC est faux : les paramètres entrants contrôlent quels utilisateurs externes peuvent venir dans TON tenant.\nD est correct : les paramètres sortants gouvernent les endroits où tes propres utilisateurs peuvent aller en tant que guests ; tu peux bloquer la collaboration B2B par défaut et autoriser des tenants partenaires précis, par groupe d'utilisateurs si besoin."}
},
{
id:"d1-081", domain:1, topic:"Tenant restrictions",
q:{en:"On corporate devices, employees must be able to sign into your tenant and two approved partner tenants, but not into any personal or unknown tenant — even in a browser. Which capability do you use?",
   fr:"Sur les appareils d'entreprise, les salariés doivent pouvoir se connecter à ton tenant et à deux tenants partenaires approuvés, mais à aucun tenant personnel ou inconnu — même dans un navigateur. Quelle capacité utilises-tu ?"},
options:[
 {en:"Tenant restrictions v2, enforced on the device or through Global Secure Access universal tenant restrictions", fr:"Tenant restrictions v2, appliquées sur l'appareil ou via les universal tenant restrictions de Global Secure Access"},
 {en:"Blocking consumer domains in external collaboration settings", fr:"Bloquer les domaines grand public dans les External collaboration settings"},
 {en:"A Conditional Access policy blocking unknown locations", fr:"Une stratégie d'accès conditionnel bloquant les emplacements inconnus"},
 {en:"Cross-tenant access outbound settings alone", fr:"Les paramètres d'accès sortant cross-tenant seuls"}],
correct:[0],
explanation:{en:"A is correct: tenant restrictions v2 tag outbound authentication traffic with the tenants you allow, so sign-ins to other tenants — including personal accounts — are refused. Enforcing it universally is one of the reasons to deploy Global Secure Access.\nB is wrong: that only limits whom you invite.\nC is wrong: location conditions protect your own resources; they say nothing about other tenants your users visit.\nD is wrong: outbound settings govern B2B collaboration by your identities, but they do not block a user signing into a foreign tenant with a foreign account.",
fr:"A est correct : les tenant restrictions v2 marquent le trafic d'authentification sortant avec les tenants autorisés, donc les connexions vers d'autres tenants — y compris des comptes personnels — sont refusées. Les appliquer universellement est l'une des raisons de déployer Global Secure Access.\nB est faux : cela ne limite que les personnes que tu invites.\nC est faux : les conditions d'emplacement protègent tes propres ressources, elles ne disent rien des autres tenants visités par tes utilisateurs.\nD est faux : les paramètres sortants gouvernent la collaboration B2B de tes identités, mais n'empêchent pas un utilisateur de se connecter à un tenant étranger avec un compte étranger."}
},
{
id:"d1-082", domain:1, topic:"B2B licensing model",
q:{en:"Finance asks how many Entra ID P1 licences to buy for 10,000 guests who will use Conditional Access-protected apps. What do you answer?",
   fr:"La direction financière demande combien de licences Entra ID P1 acheter pour 10 000 guests qui utiliseront des applications protégées par accès conditionnel. Que réponds-tu ?"},
options:[
 {en:"10,000 P1 licences, one per guest", fr:"10 000 licences P1, une par guest"},
 {en:"None per guest — External ID uses monthly active users billing, with a free MAU allowance, so you pay for usage rather than per-guest licences", fr:"Aucune par guest — External ID facture au monthly active users, avec un quota gratuit, donc on paie l'usage plutôt qu'une licence par guest"},
 {en:"2,000 licences, thanks to the historical 1:5 ratio which is still the only model", fr:"2 000 licences, grâce au ratio historique 1:5 qui reste le seul modèle"},
 {en:"Guests never require any premium capability", fr:"Les guests ne nécessitent jamais de capacité premium"}],
correct:[1],
explanation:{en:"A is wrong: buying one licence per guest is the misunderstanding this model removes.\nB is correct: external identities are billed on monthly active users with a free tier, so premium features for guests are covered by MAU billing linked to an Azure subscription rather than by a licence per guest.\nC is wrong: the old 1:5 guest allowance existed historically but MAU billing is the current model.\nD is wrong: guests using CA-protected apps do consume premium features — they are simply billed differently.",
fr:"A est faux : acheter une licence par guest est justement le malentendu que ce modèle supprime.\nB est correct : les identités externes sont facturées au monthly active users avec un palier gratuit, donc les fonctionnalités premium pour les guests sont couvertes par cette facturation MAU rattachée à un abonnement Azure, pas par une licence par guest.\nC est faux : l'ancien quota d'un pour cinq a existé, mais la facturation MAU est le modèle actuel.\nD est faux : des guests utilisant des applications protégées par CA consomment bien des fonctionnalités premium — elles sont simplement facturées autrement."}
},
{
id:"d1-083", domain:1, topic:"Device registration settings",
q:{en:"You must allow only members of the group \"Device-Joiners\" to Entra join Windows devices, and require MFA to do so. Where do you configure both?",
   fr:"Tu dois autoriser uniquement les membres du groupe « Device-Joiners » à joindre des appareils Windows à Entra, et exiger le MFA pour le faire. Où configures-tu les deux ?"},
options:[
 {en:"Both in Intune enrolment restrictions", fr:"Les deux dans les restrictions d'inscription Intune"},
 {en:"In a dynamic device group rule", fr:"Dans une règle de groupe dynamique d'appareils"},
 {en:"Device settings for the join restriction, and a Conditional Access policy on the user action \"Register or join devices\" for the MFA requirement", fr:"Les paramètres d'appareils pour la restriction de jointure, et une stratégie d'accès conditionnel sur l'action utilisateur « Enregistrer ou joindre des appareils » pour l'exigence de MFA"},
 {en:"Both in the device settings blade, where the MFA toggle is the recommended method", fr:"Les deux dans le panneau des paramètres d'appareils, où l'interrupteur MFA est la méthode recommandée"}],
correct:[2],
explanation:{en:"A is wrong: Intune restrictions govern MDM enrolment, a different operation from Entra join.\nB is wrong: dynamic groups classify devices after the fact; they authorize nothing.\nC is correct: the device settings page restricts WHO may join, while the modern way to require MFA for joining is the Conditional Access user action — Microsoft recommends it over the legacy device-settings MFA toggle, which is being retired.\nD is wrong: the legacy toggle exists but is not the recommended mechanism.",
fr:"A est faux : les restrictions Intune gouvernent l'inscription MDM, une opération différente de la jointure Entra.\nB est faux : les groupes dynamiques classent les appareils après coup, ils n'autorisent rien.\nC est correct : la page des paramètres d'appareils restreint QUI peut joindre, tandis que la façon moderne d'exiger le MFA pour la jointure est l'action utilisateur d'accès conditionnel — Microsoft la recommande plutôt que l'ancien interrupteur MFA des paramètres d'appareils, en fin de vie.\nD est faux : l'ancien interrupteur existe mais n'est pas le mécanisme recommandé."}
},
{
id:"d1-084", domain:1, topic:"Device join states",
q:{en:"Which statement correctly distinguishes the three device states in Entra ID?",
   fr:"Quelle affirmation distingue correctement les trois états d'appareil dans Entra ID ?"},
options:[
 {en:"Only Entra joined devices can be targeted by Conditional Access", fr:"Seuls les appareils Entra joined peuvent être ciblés par l'accès conditionnel"},
 {en:"Registered and Entra joined are the same thing", fr:"Registered et Entra joined sont la même chose"},
 {en:"Entra hybrid joined devices do not appear in Entra ID", fr:"Les appareils Entra hybrid joined n'apparaissent pas dans Entra ID"},
 {en:"Registered = personal BYOD with a work account added; Entra joined = corporate device owned by the cloud directory; Entra hybrid joined = corporate device joined to on-premises AD and registered in Entra ID", fr:"Registered = appareil personnel BYOD avec un compte professionnel ajouté ; Entra joined = appareil d'entreprise appartenant à l'annuaire cloud ; Entra hybrid joined = appareil d'entreprise joint à l'AD on-prem et enregistré dans Entra ID"}],
correct:[3],
explanation:{en:"A is wrong: Conditional Access can require compliant or hybrid joined devices, so all managed states are usable.\nB is wrong: registration adds a work account to a personally owned device without the directory owning it; join means the organization owns the device identity.\nC is wrong: hybrid join exists precisely so the device also has an Entra ID object.\nD is correct: those are the three documented states, and they map to BYOD, cloud-first corporate, and on-premises-AD-plus-cloud respectively.",
fr:"A est faux : l'accès conditionnel peut exiger un appareil conforme ou hybrid joined, donc tous les états gérés sont exploitables.\nB est faux : l'enregistrement ajoute un compte professionnel à un appareil personnel sans que l'annuaire le possède ; la jointure signifie que l'organisation possède l'identité de l'appareil.\nC est faux : le hybrid join existe précisément pour que l'appareil ait aussi un objet Entra ID.\nD est correct : ce sont les trois états documentés, correspondant respectivement au BYOD, à l'entreprise cloud-first, et à l'AD on-prem plus cloud."}
},
{
id:"d1-085", domain:1, topic:"Local administrator on Entra joined devices",
q:{en:"Helpdesk staff need local administrator rights on all Entra joined Windows devices. What is the supported way to grant this?",
   fr:"Le helpdesk a besoin des droits d'administrateur local sur tous les appareils Windows Entra joined. Quelle est la façon supportée de l'accorder ?"},
options:[
 {en:"Assign them the Entra Joined Device Local Administrator role (added to the local Administrators group on Entra joined devices)", fr:"Leur assigner le rôle Entra Joined Device Local Administrator (ajouté au groupe Administrateurs local des appareils Entra joined)"},
 {en:"Make them Global Administrators", fr:"En faire des Global Administrators"},
 {en:"Add them manually to the local Administrators group on each device", fr:"Les ajouter manuellement au groupe Administrateurs local de chaque appareil"},
 {en:"Assign the Cloud Device Administrator role, which grants local admin rights", fr:"Assigner le rôle Cloud Device Administrator, qui accorde les droits d'admin local"}],
correct:[0],
explanation:{en:"A is correct: that role exists specifically to be added to the local Administrators group of every Entra joined device, and it can also be managed just-in-time through PIM.\nB is wrong: Global Administrators do get local admin rights, but using that role for helpdesk work is a severe over-grant.\nC is wrong: per-device manual work does not scale and drifts.\nD is wrong: Cloud Device Administrator manages device objects in the directory (enable, disable, delete, read BitLocker keys) but does not grant local administrator rights on the machines.",
fr:"A est correct : ce rôle existe précisément pour être ajouté au groupe Administrateurs local de chaque appareil Entra joined, et il peut aussi être géré en juste-à-temps via PIM.\nB est faux : les Global Administrators obtiennent bien les droits d'admin local, mais utiliser ce rôle pour du travail de helpdesk est un privilège très excessif.\nC est faux : le travail manuel appareil par appareil ne passe pas à l'échelle et dérive.\nD est faux : Cloud Device Administrator gère les objets appareil dans l'annuaire (activer, désactiver, supprimer, lire les clés BitLocker) mais n'accorde pas les droits d'administrateur local sur les machines."}
},
{
id:"d1-086", domain:1, topic:"Stale device cleanup",
q:{en:"Your tenant has 4,000 device objects, many unused for years. What is the recommended cleanup process?",
   fr:"Ton tenant compte 4 000 objets appareil, dont beaucoup inutilisés depuis des années. Quel est le processus de nettoyage recommandé ?"},
options:[
 {en:"Let Entra ID delete stale devices automatically after 90 days", fr:"Laisser Entra ID supprimer automatiquement les appareils obsolètes après 90 jours"},
 {en:"Identify stale devices by their activity timestamp, disable them first, wait for fallout, then delete", fr:"Identifier les appareils obsolètes par leur horodatage d'activité, les désactiver d'abord, attendre les retours, puis supprimer"},
 {en:"Remove the users instead, which cascades to their devices", fr:"Supprimer plutôt les utilisateurs, ce qui se répercute sur leurs appareils"},
 {en:"Delete every device with no activity in the last 30 days immediately", fr:"Supprimer immédiatement tout appareil sans activité depuis 30 jours"}],
correct:[1],
explanation:{en:"A is wrong: there is no automatic device cleanup in Entra ID; you script it or use a workbook.\nB is correct: the documented pattern is disable-then-delete, using the device activity timestamp to pick candidates. Disabling is reversible and surfaces mistakes before deletion, which is not.\nC is wrong: deleting users to clean devices is destructive and unrelated.\nD is wrong: 30 days is aggressive (long leave, seasonal devices) and deleting straight away can break Conditional Access and BitLocker recovery.",
fr:"A est faux : il n'existe pas de nettoyage automatique des appareils dans Entra ID ; on le script ou on utilise un workbook.\nB est correct : le schéma documenté est désactiver puis supprimer, en s'appuyant sur l'horodatage d'activité de l'appareil pour choisir les candidats. La désactivation est réversible et fait remonter les erreurs avant la suppression, qui ne l'est pas.\nC est faux : supprimer des utilisateurs pour nettoyer des appareils est destructeur et hors sujet.\nD est faux : 30 jours est agressif (congé long, appareils saisonniers) et supprimer d'emblée peut casser l'accès conditionnel et la récupération BitLocker."}
},
{
id:"d1-087", domain:1, topic:"employeeType for dynamic rules",
q:{en:"Contractors must automatically receive a restricted access profile. HR sets employeeType to \"Contractor\" in the HR system, which syncs to Entra ID. What is the cleanest implementation?",
   fr:"Les prestataires doivent recevoir automatiquement un profil d'accès restreint. Les RH mettent employeeType à « Contractor » dans leur système, qui se synchronise vers Entra ID. Quelle est l'implémentation la plus propre ?"},
options:[
 {en:"An administrative unit for contractors", fr:"Une administrative unit pour les prestataires"},
 {en:"A manual security group maintained by the helpdesk", fr:"Un groupe de sécurité manuel maintenu par le helpdesk"},
 {en:"A dynamic group with user.employeeType -eq \"Contractor\", used as the target of licences, Conditional Access and access packages", fr:"Un groupe dynamique avec user.employeeType -eq « Contractor », utilisé comme cible des licences, de l'accès conditionnel et des access packages"},
 {en:"A custom security attribute set by an administrator", fr:"Un attribut de sécurité personnalisé posé par un administrateur"}],
correct:[2],
explanation:{en:"A is wrong: an AU delegates administration of objects; it is not a way to grant an access profile.\nB is wrong: manual maintenance drifts the moment HR changes a record.\nC is correct: when the authoritative attribute already exists, an attribute-driven dynamic group makes joiner/mover/leaver automatic and becomes the single hook for licences, CA and entitlement management.\nD is wrong: custom security attributes are not populated by sync and duplicate a value you already have.",
fr:"A est faux : une AU délègue l'administration d'objets, ce n'est pas un moyen d'accorder un profil d'accès.\nB est faux : la maintenance manuelle dérive dès que les RH modifient une fiche.\nC est correct : quand l'attribut de référence existe déjà, un groupe dynamique piloté par attribut rend le joiner/mover/leaver automatique et devient le point d'accroche unique pour les licences, l'accès conditionnel et l'entitlement management.\nD est faux : les attributs de sécurité personnalisés ne sont pas alimentés par la sync et dupliquent une valeur déjà disponible."}
},
{
id:"d1-088", domain:1, topic:"PHS and password expiry",
q:{en:"With password hash synchronization, users report their passwords never expire in the cloud even though on-premises AD enforces a 90-day policy. What explains this and how do you align them?",
   fr:"Avec la synchronisation de hash de mot de passe, les utilisateurs constatent que leur mot de passe n'expire jamais dans le cloud alors que l'AD on-prem impose une politique de 90 jours. Qu'est-ce qui explique cela et comment aligner les deux ?"},
options:[
 {en:"PHS never supports expiry; you must switch to pass-through authentication", fr:"PHS ne supporte jamais l'expiration ; il faut passer à la pass-through authentication"},
 {en:"Set a cloud password policy in the Entra portal", fr:"Définir une politique de mot de passe cloud dans le portail Entra"},
 {en:"Run a full synchronization cycle", fr:"Lancer un cycle de synchronisation complet"},
 {en:"Synced users get a non-expiring cloud password by default; enable EnforceCloudPasswordPolicyForPasswordSyncedUsers so the cloud honours the on-premises expiry", fr:"Les utilisateurs synchronisés reçoivent par défaut un mot de passe cloud sans expiration ; activer EnforceCloudPasswordPolicyForPasswordSyncedUsers pour que le cloud respecte l'expiration on-prem"}],
correct:[3],
explanation:{en:"A is wrong: PTA would also solve it, but it is a whole authentication redesign for a setting that exists.\nB is wrong: there is no configurable cloud expiry policy for synced accounts in the portal.\nC is wrong: a full sync re-imports objects; it does not change expiry semantics.\nD is correct: by default the cloud sets PasswordPolicies to DisablePasswordExpiration for password-hash-synced users, because the on-premises directory is authoritative. The documented switch makes Entra ID evaluate the synced pwdLastSet against the on-premises maximum age.",
fr:"A est faux : PTA réglerait aussi le problème, mais c'est une refonte complète de l'authentification pour un réglage qui existe.\nB est faux : il n'y a pas de politique d'expiration cloud configurable dans le portail pour les comptes synchronisés.\nC est faux : une sync complète réimporte les objets, elle ne change pas la sémantique d'expiration.\nD est correct : par défaut le cloud met PasswordPolicies à DisablePasswordExpiration pour les utilisateurs dont le hash est synchronisé, car l'annuaire on-prem fait référence. L'interrupteur documenté fait qu'Entra ID évalue le pwdLastSet synchronisé par rapport à l'âge maximal on-prem."}
},
{
id:"d1-089", domain:1, topic:"Single object sync troubleshooting",
q:{en:"One on-premises user's attribute change is not reaching Entra ID although other users sync fine. Which tool lets you trace that single object through the sync pipeline?",
   fr:"Le changement d'attribut d'un seul utilisateur on-prem n'atteint pas Entra ID alors que les autres se synchronisent bien. Quel outil permet de suivre cet objet précis dans le pipeline de synchronisation ?"},
options:[
 {en:"The Synchronization Service Manager, searching the object in the AD connector space and inspecting its lineage, preview and connector errors", fr:"Le Synchronization Service Manager, en cherchant l'objet dans le connector space AD et en inspectant son lineage, sa preview et les erreurs de connecteur"},
 {en:"The provisioning logs in the Entra portal", fr:"Les journaux de provisioning du portail Entra"},
 {en:"Entra Connect Health alerts only", fr:"Uniquement les alertes Entra Connect Health"},
 {en:"The Entra ID sign-in logs", fr:"Les journaux de connexion Entra ID"}],
correct:[0],
explanation:{en:"A is correct: Synchronization Service Manager (miisclient) shows the object in each connector space, its metaverse lineage and which sync rule set each attribute, and Preview lets you simulate the flow — the standard way to debug one object.\nB is wrong: the portal's provisioning logs cover application provisioning and Cloud Sync, not Entra Connect's engine.\nC is wrong: Connect Health surfaces health and export errors but does not trace attribute flow for one object.\nD is wrong: sign-in logs show authentication, not synchronization.",
fr:"A est correct : le Synchronization Service Manager (miisclient) montre l'objet dans chaque connector space, son lineage dans le metaverse et quelle règle de sync a posé chaque attribut, et la Preview permet de simuler le flux — la méthode standard pour déboguer un objet.\nB est faux : les journaux de provisioning du portail couvrent le provisioning applicatif et Cloud Sync, pas le moteur d'Entra Connect.\nC est faux : Connect Health remonte la santé et les erreurs d'export mais ne trace pas le flux d'attributs d'un objet.\nD est faux : les journaux de connexion montrent l'authentification, pas la synchronisation."}
},
{
id:"d1-090", domain:1, topic:"Changing the sign-in method",
q:{en:"You must move from AD FS federation to password hash synchronization for the whole verified domain in one operation, during a maintenance window. What do you use?",
   fr:"Tu dois passer de la fédération AD FS à la synchronisation de hash de mot de passe pour tout le domaine vérifié en une seule opération, pendant une fenêtre de maintenance. Qu'utilises-tu ?"},
options:[
 {en:"Adding a second verified domain and moving all UPNs to it", fr:"Ajouter un second domaine vérifié et y déplacer tous les UPN"},
 {en:"The Entra Connect wizard's \"Change user sign-in\" task, which converts the domain from federated to managed and enables PHS", fr:"La tâche « Modifier la connexion utilisateur » de l'assistant Entra Connect, qui convertit le domaine de federated à managed et active PHS"},
 {en:"Staged rollout, which converts the whole domain at once", fr:"Le staged rollout, qui convertit tout le domaine d'un coup"},
 {en:"Deleting the AD FS farm, after which the domain converts itself", fr:"Supprimer la ferme AD FS, après quoi le domaine se convertit tout seul"}],
correct:[1],
explanation:{en:"A is wrong: changing every UPN is disruptive and does not change the authentication method.\nB is correct: the Connect wizard performs the whole cutover — it enables password hash sync, converts the domain authentication type to managed, and requires that hashes be synchronized before users can sign in.\nC is wrong: staged rollout is the gradual, per-group alternative, which the requirement explicitly rejects.\nD is wrong: removing AD FS without converting the domain leaves users unable to authenticate at all.",
fr:"A est faux : changer tous les UPN est perturbant et ne change pas la méthode d'authentification.\nB est correct : l'assistant Connect réalise toute la bascule — il active la synchronisation de hash, convertit le type d'authentification du domaine en managed, et exige que les hash soient synchronisés avant que les utilisateurs puissent se connecter.\nC est faux : le staged rollout est l'alternative progressive par groupe, que l'énoncé rejette explicitement.\nD est faux : retirer AD FS sans convertir le domaine laisse les utilisateurs incapables de s'authentifier."}
},
{
id:"d1-091", domain:1, topic:"Administrative unit limitations",
q:{en:"You try to assign the Global Administrator role scoped to an administrative unit and the option is unavailable. Why?",
   fr:"Tu essaies d'assigner le rôle Global Administrator avec pour portée une administrative unit et l'option est indisponible. Pourquoi ?"},
options:[
 {en:"The administrative unit must contain at least one group", fr:"L'administrative unit doit contenir au moins un groupe"},
 {en:"You need Entra ID P2 for AU scoping", fr:"Il faut Entra ID P2 pour le scoping par AU"},
 {en:"Only roles that support AU scope can be scoped that way — tenant-wide roles such as Global Administrator cannot be limited to an administrative unit", fr:"Seuls les rôles supportant la portée AU peuvent l'être — les rôles à l'échelle du tenant comme Global Administrator ne peuvent pas être limités à une administrative unit"},
 {en:"Administrative units only support device roles", fr:"Les administrative units ne supportent que les rôles d'appareils"}],
correct:[2],
explanation:{en:"A is wrong: AU contents do not determine which roles can be scoped.\nB is wrong: administrative units require Entra ID P1.\nC is correct: AU scoping is supported for a documented subset of roles — typically user, group, device, licence, password and authentication administration. Roles whose power is inherently tenant-wide are excluded, which is also why you should not treat AUs as a security boundary against a global admin.\nD is wrong: AUs support user, group and device roles.",
fr:"A est faux : le contenu d'une AU ne détermine pas quels rôles peuvent être scopés.\nB est faux : les administrative units nécessitent Entra ID P1.\nC est correct : le scoping par AU est supporté pour un sous-ensemble documenté de rôles — typiquement l'administration des utilisateurs, groupes, appareils, licences, mots de passe et méthodes d'authentification. Les rôles dont la portée est intrinsèquement le tenant en sont exclus, raison pour laquelle une AU n'est pas une frontière de sécurité face à un admin global.\nD est faux : les AU supportent les rôles utilisateurs, groupes et appareils."}
},
{
id:"d1-092", domain:1, topic:"Directory synchronization account",
q:{en:"During a security review you find a highly privileged account named Sync_SERVER_xxxxx. What is it and what should you do?",
   fr:"Lors d'une revue de sécurité tu trouves un compte très privilégié nommé Sync_SERVER_xxxxx. Qu'est-ce et que dois-tu faire ?"},
options:[
 {en:"It is an unused break-glass account; convert it to a normal admin", fr:"C'est un compte break-glass inutilisé ; le convertir en admin normal"},
 {en:"It is a guest account created by B2B; block its sign-in", fr:"C'est un compte guest créé par B2B ; bloquer sa connexion"},
 {en:"It is an attacker's backdoor; delete it immediately", fr:"C'est une porte dérobée d'attaquant ; le supprimer immédiatement"},
 {en:"It is the Entra Connect service account holding the Directory Synchronization Accounts role — leave it alone, exclude it from interactive-user policies carefully, and monitor it", fr:"C'est le compte de service d'Entra Connect détenant le rôle Directory Synchronization Accounts — ne pas y toucher, l'exclure prudemment des stratégies visant les utilisateurs interactifs, et le surveiller"}],
correct:[3],
explanation:{en:"A is wrong: it is not a break-glass account and must not be repurposed.\nB is wrong: it is not a guest, and blocking sign-in breaks sync.\nC is wrong: deleting it stops all hybrid sync.\nD is correct: Entra Connect creates this cloud service account with the Directory Synchronization Accounts role, which is intentionally powerful because it writes directory objects. Deleting or blocking it breaks synchronization. Treat it as a tier-0 identity: monitor its sign-ins and never use it interactively.",
fr:"A est faux : ce n'est pas un compte break-glass et il ne doit pas être détourné.\nB est faux : ce n'est pas un guest, et bloquer sa connexion casse la sync.\nC est faux : le supprimer stoppe toute la sync hybride.\nD est correct : Entra Connect crée ce compte de service cloud avec le rôle Directory Synchronization Accounts, volontairement puissant puisqu'il écrit des objets d'annuaire. Le supprimer ou le bloquer casse la synchronisation. Il faut le traiter comme une identité de niveau 0 : surveiller ses connexions et ne jamais l'utiliser interactivement."}
},
{
id:"d1-093", domain:1, topic:"Member to guest conversion",
q:{en:"An internal employee moves to a partner company but must keep limited access to two shared sites, with the reduced directory permissions of an external user. What is the appropriate change?",
   fr:"Un salarié interne rejoint une entreprise partenaire mais doit garder un accès limité à deux sites partagés, avec les permissions d'annuaire réduites d'un utilisateur externe. Quel changement est approprié ?"},
options:[
 {en:"Change their UserType from Member to Guest, so the guest permission restrictions apply, and review their remaining access", fr:"Changer leur UserType de Member à Guest, pour que les restrictions de permissions des guests s'appliquent, et revoir les accès restants"},
 {en:"Block sign-in and share the files anonymously", fr:"Bloquer la connexion et partager les fichiers de façon anonyme"},
 {en:"Leave them as Member and simply remove some groups", fr:"Les laisser Member et simplement retirer quelques groupes"},
 {en:"Delete the account and invite the person as a B2B guest with their new company address", fr:"Supprimer le compte et inviter la personne comme guest B2B avec sa nouvelle adresse d'entreprise"}],
correct:[0],
explanation:{en:"A is correct: UserType is a directory permission switch in both directions, so converting Member to Guest applies your guest access restrictions while keeping the object, its history and its remaining assignments — which you should then review.\nB is wrong: anonymous sharing removes accountability entirely.\nC is wrong: a Member keeps full default directory read access, which the requirement removes.\nD is wrong: this is a legitimate alternative when the person should authenticate with their new employer's identity, but it loses history and is more work than the requirement implies.",
fr:"A est correct : le UserType est un interrupteur de permissions d'annuaire dans les deux sens, donc convertir Member en Guest applique tes restrictions d'accès invité tout en conservant l'objet, son historique et ses assignations restantes — qu'il faut ensuite revoir.\nB est faux : le partage anonyme supprime toute traçabilité.\nC est faux : un Member garde l'accès en lecture par défaut complet à l'annuaire, que le besoin veut retirer.\nD est faux : c'est une alternative légitime si la personne doit s'authentifier avec l'identité de son nouvel employeur, mais on perd l'historique et c'est plus de travail que ne le suppose l'énoncé."}
},
{
id:"d1-094", domain:1, topic:"Group owners",
q:{en:"Project leads must add and remove members of their own security groups without any administrative role. What do you configure?",
   fr:"Des chefs de projet doivent ajouter et retirer les membres de leurs propres groupes de sécurité sans aucun rôle d'administration. Que configures-tu ?"},
options:[
 {en:"Assign them the Groups Administrator role", fr:"Leur assigner le rôle Groups Administrator"},
 {en:"Make each project lead an owner of their group", fr:"Faire de chaque chef de projet un propriétaire de son groupe"},
 {en:"Assign them the User Administrator role", fr:"Leur assigner le rôle User Administrator"},
 {en:"Convert the groups to dynamic membership", fr:"Convertir les groupes en appartenance dynamique"}],
correct:[1],
explanation:{en:"A is wrong: Groups Administrator manages ALL groups in the tenant.\nB is correct: group ownership is the per-object delegation model — owners manage membership of their own group only, with no directory role.\nC is wrong: User Administrator is broader still and includes user management.\nD is wrong: dynamic groups remove human control of membership entirely, which is not what the leads asked for.",
fr:"A est faux : Groups Administrator gère TOUS les groupes du tenant.\nB est correct : la propriété de groupe est le modèle de délégation par objet — les propriétaires gèrent l'appartenance de leur seul groupe, sans aucun rôle d'annuaire.\nC est faux : User Administrator est encore plus large et inclut la gestion des utilisateurs.\nD est faux : les groupes dynamiques suppriment tout contrôle humain de l'appartenance, ce que les chefs de projet ne demandent pas."}
},
{
id:"d1-095", domain:1, topic:"Group type selection",
q:{en:"You need a group that can be used as an email distribution list for on-premises Exchange AND to grant SharePoint permissions, created in on-premises AD and synced. Which type do you use?",
   fr:"Tu as besoin d'un groupe utilisable comme liste de distribution pour l'Exchange on-prem ET pour accorder des permissions SharePoint, créé dans l'AD on-prem et synchronisé. Quel type utilises-tu ?"},
options:[
 {en:"A dynamic security group created in Entra ID", fr:"Un groupe de sécurité dynamique créé dans Entra ID"},
 {en:"A distribution group", fr:"Un groupe de distribution"},
 {en:"A mail-enabled security group", fr:"Un groupe de sécurité à extension messagerie (mail-enabled security group)"},
 {en:"A Microsoft 365 group", fr:"Un groupe Microsoft 365"}],
correct:[2],
explanation:{en:"A is wrong: a cloud dynamic group is not created in AD, and dynamic membership is not editable on-premises.\nB is wrong: a distribution group can receive mail but cannot be used to grant permissions.\nC is correct: a mail-enabled security group carries both an SMTP address and a security identifier, so it can receive mail and be used in access control, and it can be created on-premises and synchronized. Note that its membership must then be managed on-premises.\nD is wrong: Microsoft 365 groups are cloud-born; you cannot create them in on-premises AD and sync them upward.",
fr:"A est faux : un groupe dynamique cloud n'est pas créé dans l'AD, et l'appartenance dynamique n'est pas modifiable on-prem.\nB est faux : un groupe de distribution peut recevoir du courrier mais ne peut pas accorder de permissions.\nC est correct : un groupe de sécurité à extension messagerie porte à la fois une adresse SMTP et un identifiant de sécurité, il peut donc recevoir du courrier et servir au contrôle d'accès, et il peut être créé on-prem puis synchronisé. Note que son appartenance doit dès lors être gérée on-prem.\nD est faux : les groupes Microsoft 365 naissent dans le cloud ; on ne les crée pas dans l'AD on-prem pour les synchroniser vers le haut."}
},
{
id:"d1-096", domain:1, topic:"Dynamic rule operators",
q:{en:"You need a dynamic group of all users whose jobTitle begins with \"Sales\" (Sales Rep, Sales Manager, Salesperson). Which expression is correct?",
   fr:"Tu as besoin d'un groupe dynamique de tous les utilisateurs dont le jobTitle commence par « Sales » (Sales Rep, Sales Manager, Salesperson). Quelle expression est correcte ?"},
options:[
 {en:"user.jobTitle LIKE 'Sales%'", fr:"user.jobTitle LIKE 'Sales%'"},
 {en:"user.jobTitle -eq \"Sales*\"", fr:"user.jobTitle -eq « Sales* »"},
 {en:"user.jobTitle -contains \"Sales\" which anchors to the start of the string", fr:"user.jobTitle -contains « Sales », qui s'ancre au début de la chaîne"},
 {en:"user.jobTitle -startsWith \"Sales\"", fr:"user.jobTitle -startsWith « Sales »"}],
correct:[3],
explanation:{en:"A is wrong: SQL syntax is not valid in membership rules.\nB is wrong: -eq is an exact comparison and does not interpret wildcards.\nC is wrong: -contains matches a substring anywhere, so \"Regional Sales\" would also match — and it is not anchored to the start as the option claims.\nD is correct: -startsWith does exactly this prefix test. For more complex patterns, -match accepts a regular expression.",
fr:"A est faux : la syntaxe SQL n'est pas valide dans les règles d'appartenance.\nB est faux : -eq est une comparaison exacte et n'interprète pas les jokers.\nC est faux : -contains cherche une sous-chaîne n'importe où, donc « Regional Sales » correspondrait aussi — et il n'est pas ancré au début comme l'affirme l'option.\nD est correct : -startsWith fait exactement ce test de préfixe. Pour des motifs plus complexes, -match accepte une expression régulière."}
},
{
id:"d1-097", domain:1, topic:"Authentication contact info",
q:{en:"You pre-populate authentication contact information for SSPR so users can reset without registering first. Which user properties do you fill?",
   fr:"Tu préremplis les informations de contact d'authentification pour le SSPR afin que les utilisateurs puissent réinitialiser sans s'inscrire au préalable. Quelles propriétés utilisateur remplis-tu ?"},
options:[
 {en:"The authentication contact info fields — alternate email (otherMails) and mobile phone — which SSPR can use immediately", fr:"Les champs d'informations de contact d'authentification — email de secours (otherMails) et téléphone mobile — que le SSPR peut utiliser immédiatement"},
 {en:"The user's primary mail attribute only", fr:"Uniquement l'attribut mail principal de l'utilisateur"},
 {en:"The employeeId and department attributes", fr:"Les attributs employeeId et department"},
 {en:"Nothing can be pre-populated; users must always register", fr:"Rien ne peut être prérempli ; les utilisateurs doivent toujours s'inscrire"}],
correct:[0],
explanation:{en:"A is correct: administrators (or sync) can populate the authentication contact fields so that SSPR works before the user has visited the registration page — a common approach for large rollouts, provided the data is trustworthy.\nB is wrong: the primary mailbox address is not usable as a reset channel, since the user may be locked out of it.\nC is wrong: those attributes are not authentication methods.\nD is wrong: pre-population is explicitly supported.",
fr:"A est correct : les administrateurs (ou la sync) peuvent remplir les champs de contact d'authentification pour que le SSPR fonctionne avant que l'utilisateur ait visité la page d'inscription — approche courante pour les grands déploiements, à condition que les données soient fiables.\nB est faux : l'adresse de la boîte principale n'est pas utilisable comme canal de réinitialisation, puisque l'utilisateur peut en être justement verrouillé.\nC est faux : ces attributs ne sont pas des méthodes d'authentification.\nD est faux : le préremplissage est explicitement supporté."}
},
{
id:"d1-098", domain:1, topic:"Bulk restore users",
q:{en:"A script mistakenly deleted 120 users this morning. What is the fastest supported recovery?",
   fr:"Un script a supprimé par erreur 120 utilisateurs ce matin. Quelle est la récupération supportée la plus rapide ?"},
options:[
 {en:"Restore the tenant from a backup", fr:"Restaurer le tenant depuis une sauvegarde"},
 {en:"Use bulk restore from the Deleted users blade (or Graph/PowerShell) since they are within the 30-day soft-delete window", fr:"Utiliser la restauration en masse depuis le panneau Utilisateurs supprimés (ou Graph/PowerShell) puisqu'ils sont dans la fenêtre de suppression réversible de 30 jours"},
 {en:"Ask Microsoft Support to roll back the directory", fr:"Demander au support Microsoft de restaurer l'annuaire"},
 {en:"Recreate them from the bulk create template", fr:"Les recréer depuis le modèle de création en masse"}],
correct:[1],
explanation:{en:"A is wrong: Entra ID has no tenant-level backup/restore for administrators.\nB is correct: soft-deleted users can be restored in bulk within 30 days, and restoring returns the same object with its group memberships, licences and app assignments intact.\nC is wrong: Support does not roll back directories; the soft-delete window is the recovery mechanism.\nD is wrong: recreating produces new objects with new IDs, losing memberships, licences and mailbox links.",
fr:"A est faux : Entra ID n'offre pas de sauvegarde/restauration au niveau tenant pour les administrateurs.\nB est correct : les utilisateurs en suppression réversible peuvent être restaurés en masse dans les 30 jours, et la restauration rend le même objet avec ses appartenances aux groupes, licences et assignations d'applications intactes.\nC est faux : le support ne restaure pas d'annuaires ; la fenêtre de suppression réversible est le mécanisme de récupération.\nD est faux : recréer produit de nouveaux objets avec de nouveaux identifiants, en perdant appartenances, licences et liens de boîte."}
},
{
id:"d1-099", domain:1, topic:"Licensing for identity features",
q:{en:"Your tenant is on Entra ID Free. Which of these requires at least Entra ID P1? (Select TWO)",
   fr:"Ton tenant est en Entra ID Free. Lesquelles de ces fonctionnalités nécessitent au moins Entra ID P1 ? (Choisis DEUX réponses)"},
options:[
 {en:"Creating security groups", fr:"La création de groupes de sécurité"},
 {en:"Inviting B2B guests", fr:"L'invitation de guests B2B"},
 {en:"Dynamic group membership", fr:"L'appartenance dynamique aux groupes"},
 {en:"Group-based licensing", fr:"L'attribution de licences par groupe"}],
correct:[2,3],
explanation:{en:"A is wrong: creating groups is a core, free capability.\nB is wrong: basic B2B invitation and collaboration work without a premium tenant licence; only premium features applied to guests are billed through the external identities model.\nC and D are correct: both dynamic membership and group-based licensing are premium features requiring Entra ID P1 (or a suite that includes it) for the users concerned.",
fr:"A est faux : créer des groupes est une capacité de base, gratuite.\nB est faux : l'invitation et la collaboration B2B de base fonctionnent sans licence premium de tenant ; seules les fonctionnalités premium appliquées aux guests sont facturées via le modèle des identités externes.\nC et D sont corrects : l'appartenance dynamique et l'attribution de licences par groupe sont deux fonctionnalités premium nécessitant Entra ID P1 (ou une suite l'incluant) pour les utilisateurs concernés."}
},
{
id:"d1-100", domain:1, topic:"Default domain",
q:{en:"After adding and verifying contoso.com, you try to delete the original contoso.onmicrosoft.com domain and cannot. Why?",
   fr:"Après avoir ajouté et vérifié contoso.com, tu essaies de supprimer le domaine d'origine contoso.onmicrosoft.com et n'y parviens pas. Pourquoi ?"},
options:[
 {en:"You must first delete all users", fr:"Il faut d'abord supprimer tous les utilisateurs"},
 {en:"The domain can be deleted 30 days after verification of the custom domain", fr:"Le domaine peut être supprimé 30 jours après la vérification du domaine personnalisé"},
 {en:"Only Microsoft Support can delete it", fr:"Seul le support Microsoft peut le supprimer"},
 {en:"The initial onmicrosoft.com domain is permanent and cannot be removed; you can only stop using it by making contoso.com the primary domain", fr:"Le domaine initial onmicrosoft.com est permanent et ne peut pas être supprimé ; on peut seulement cesser de l'utiliser en faisant de contoso.com le domaine principal"}],
correct:[3],
explanation:{en:"A is wrong: removing users does not make the domain deletable, though objects must be moved off a CUSTOM domain before deleting that one.\nB is wrong: there is no such waiting period.\nC is wrong: Support cannot delete it either.\nD is correct: the initial tenant domain is created with the tenant and is never removable — it remains as a fallback for service identities and routing. What you control is which verified domain is primary, and therefore the default suffix for new users.",
fr:"A est faux : supprimer les utilisateurs ne rend pas ce domaine supprimable, même s'il faut bien déplacer les objets hors d'un domaine PERSONNALISÉ avant de supprimer celui-ci.\nB est faux : ce délai n'existe pas.\nC est faux : le support ne peut pas le supprimer non plus.\nD est correct : le domaine initial du tenant est créé avec lui et n'est jamais supprimable — il reste un repli pour les identités de service et le routage. Ce que tu contrôles, c'est quel domaine vérifié est principal, et donc le suffixe par défaut des nouveaux utilisateurs."}
}
];
