"use strict";
/* SC-300 Theory — bilingual EN/FR. Loaded by index.html */
window.SC300_THEORY = [

/* ================= DOMAIN 1 ================= */
{
  domain: 1,
  sections: [
  {
    title: {en:"Microsoft Entra tenant, roles and administrative units", fr:"Tenant Microsoft Entra, rôles et administrative units"},
    html: {
    en: `
<p>A <strong>tenant</strong> is your organization's dedicated instance of Microsoft Entra ID. Everything (users, groups, apps, devices) lives inside it.</p>
<h4>Entra roles (RBAC for identity)</h4>
<ul>
<li><strong>Global Administrator</strong> — full control. Keep 2–4 max, protect with MFA + PIM.</li>
<li><strong>User Administrator</strong> — create/manage users and groups, reset passwords of non-admins.</li>
<li><strong>Helpdesk Administrator</strong> — reset passwords of non-admins, invalidate refresh tokens.</li>
<li><strong>Privileged Role Administrator</strong> — manage role assignments and PIM.</li>
<li><strong>Custom roles</strong> — pick granular permissions (requires Entra ID P1). Assignable at tenant, administrative unit, or app registration scope.</li>
</ul>
<div class="tip">⚠️ Entra roles ≠ Azure RBAC roles. Global Admin does NOT automatically manage Azure subscriptions — they must enable the <em>"Access management for Azure resources"</em> toggle to get User Access Administrator at root scope.</div>
<h4>Administrative Units (AU)</h4>
<ul>
<li>Container to scope admin permissions to a subset of <strong>users, groups, or devices</strong> (e.g. one AU per country/department).</li>
<li>Example: a "France Helpdesk Administrator" scoped to the France AU can only reset passwords of users in that AU.</li>
<li><strong>Restricted management AUs</strong>: only admins explicitly scoped to that AU can manage its members (even Global Admins can't modify them directly).</li>
<li>AUs support <strong>dynamic membership rules</strong> for users and devices (P1 required).</li>
</ul>`,
    fr: `
<p>Un <strong>tenant</strong> est l'instance dédiée de Microsoft Entra ID de ton organisation. Tout (utilisateurs, groupes, apps, appareils) vit dedans.</p>
<h4>Rôles Entra (RBAC pour l'identité)</h4>
<ul>
<li><strong>Global Administrator</strong> — contrôle total. Garde 2–4 max, protégés par MFA + PIM.</li>
<li><strong>User Administrator</strong> — crée/gère utilisateurs et groupes, réinitialise les mots de passe des non-admins.</li>
<li><strong>Helpdesk Administrator</strong> — réinitialise les mots de passe des non-admins, invalide les refresh tokens.</li>
<li><strong>Privileged Role Administrator</strong> — gère les attributions de rôles et PIM.</li>
<li><strong>Custom roles</strong> — permissions granulaires au choix (nécessite Entra ID P1). Attribuables au niveau tenant, administrative unit ou app registration.</li>
</ul>
<div class="tip">⚠️ Rôles Entra ≠ rôles Azure RBAC. Un Global Admin ne gère PAS automatiquement les abonnements Azure — il doit activer le bouton <em>« Access management for Azure resources »</em> pour obtenir User Access Administrator au scope racine.</div>
<h4>Administrative Units (AU)</h4>
<ul>
<li>Conteneur pour limiter les permissions admin à un sous-ensemble d'<strong>utilisateurs, groupes ou appareils</strong> (ex : une AU par pays/département).</li>
<li>Exemple : un « Helpdesk Administrator France » scopé sur l'AU France ne peut réinitialiser que les mots de passe des utilisateurs de cette AU.</li>
<li><strong>Restricted management AUs</strong> : seuls les admins explicitement scopés sur l'AU peuvent gérer ses membres (même les Global Admins ne peuvent pas les modifier directement).</li>
<li>Les AUs supportent les <strong>règles d'appartenance dynamiques</strong> pour utilisateurs et appareils (P1 requis).</li>
</ul>`
    }
  },
  {
    title: {en:"Users, groups and licenses", fr:"Utilisateurs, groupes et licences"},
    html: {
    en: `
<h4>User types</h4>
<ul>
<li><strong>Member</strong> — internal user of the tenant.</li>
<li><strong>Guest</strong> — external identity invited via B2B collaboration (UPN contains <code>#EXT#</code>).</li>
</ul>
<h4>Group types</h4>
<table>
<tr><th>Type</th><th>Use</th><th>Notes</th></tr>
<tr><td><strong>Security</strong></td><td>Access to resources, apps, licenses, roles</td><td>Members: users, devices, service principals, other groups</td></tr>
<tr><td><strong>Microsoft 365</strong></td><td>Collaboration (mailbox, Teams, SharePoint)</td><td>Members: users only. Can be visible to external senders</td></tr>
</table>
<h4>Membership types</h4>
<ul>
<li><strong>Assigned</strong> — manual.</li>
<li><strong>Dynamic user</strong> — rule-based, e.g. <code>user.department -eq "Sales"</code>. Requires <strong>Entra ID P1</strong>.</li>
<li><strong>Dynamic device</strong> — e.g. <code>device.deviceOSType -eq "Windows"</code>. Only in <strong>security</strong> groups.</li>
</ul>
<div class="tip">💡 A group can be <strong>role-assignable</strong> (<code>isAssignableToRole = true</code>): set at creation only, must be a security group with assigned membership, max 500 per tenant, requires P1. Only Privileged Role Admins / Global Admins can manage them.</div>
<h4>Licenses</h4>
<ul>
<li><strong>Group-based licensing</strong>: assign a license to a group → all members inherit. Users missing a usage location may go into error state.</li>
<li>Free vs <strong>P1</strong> (Conditional Access, dynamic groups, SSPR writeback, group licensing) vs <strong>P2</strong> (ID Protection, PIM, access reviews, entitlement management).</li>
</ul>
<h4>Custom security attributes</h4>
<p>Key-value attributes (e.g. <code>project = Falcon</code>) defined in attribute sets, assignable to users and service principals; usable in ABAC conditions for Azure Storage. Managed by the <strong>Attribute Definition/Assignment Administrator</strong> roles — Global Admin does NOT have these permissions by default.</p>`,
    fr: `
<h4>Types d'utilisateurs</h4>
<ul>
<li><strong>Member</strong> — utilisateur interne du tenant.</li>
<li><strong>Guest</strong> — identité externe invitée via B2B collaboration (l'UPN contient <code>#EXT#</code>).</li>
</ul>
<h4>Types de groupes</h4>
<table>
<tr><th>Type</th><th>Usage</th><th>Notes</th></tr>
<tr><td><strong>Security</strong></td><td>Accès aux ressources, apps, licences, rôles</td><td>Membres : utilisateurs, appareils, service principals, autres groupes</td></tr>
<tr><td><strong>Microsoft 365</strong></td><td>Collaboration (boîte mail, Teams, SharePoint)</td><td>Membres : utilisateurs uniquement</td></tr>
</table>
<h4>Types d'appartenance</h4>
<ul>
<li><strong>Assigned</strong> — manuel.</li>
<li><strong>Dynamic user</strong> — basé sur une règle, ex : <code>user.department -eq "Sales"</code>. Nécessite <strong>Entra ID P1</strong>.</li>
<li><strong>Dynamic device</strong> — ex : <code>device.deviceOSType -eq "Windows"</code>. Uniquement dans les groupes de <strong>sécurité</strong>.</li>
</ul>
<div class="tip">💡 Un groupe peut être <strong>role-assignable</strong> (<code>isAssignableToRole = true</code>) : défini à la création uniquement, doit être un groupe de sécurité à appartenance assignée, max 500 par tenant, P1 requis. Seuls les Privileged Role Admins / Global Admins peuvent les gérer.</div>
<h4>Licences</h4>
<ul>
<li><strong>Group-based licensing</strong> : attribue une licence à un groupe → tous les membres en héritent. Un utilisateur sans « usage location » peut passer en état d'erreur.</li>
<li>Free vs <strong>P1</strong> (Conditional Access, groupes dynamiques, SSPR writeback, licences par groupe) vs <strong>P2</strong> (ID Protection, PIM, access reviews, entitlement management).</li>
</ul>
<h4>Custom security attributes</h4>
<p>Attributs clé-valeur (ex : <code>project = Falcon</code>) définis dans des attribute sets, attribuables aux utilisateurs et service principals ; utilisables dans des conditions ABAC pour Azure Storage. Gérés par les rôles <strong>Attribute Definition/Assignment Administrator</strong> — le Global Admin n'a PAS ces permissions par défaut.</p>`
    }
  },
  {
    title: {en:"External identities (B2B) and cross-tenant access", fr:"Identités externes (B2B) et accès cross-tenant"},
    html: {
    en: `
<h4>B2B collaboration</h4>
<ul>
<li>Invite external users by email → they redeem the invitation and become <strong>guests</strong> in your tenant.</li>
<li>Bulk invite: CSV upload in the admin center, PowerShell (<code>New-MgInvitation</code>), or the Graph invitation API.</li>
<li>Guests can authenticate with: another Entra tenant, Microsoft account, <strong>email one-time passcode (OTP)</strong>, Google, Facebook, or SAML/WS-Fed direct federation.</li>
</ul>
<h4>External collaboration settings</h4>
<ul>
<li>Who can invite guests: everyone / members + specific admins / only specific roles / no one.</li>
<li><strong>Guest user access restrictions</strong>: same as members / limited (default — can't enumerate directory) / <strong>most restrictive</strong> (own profile only).</li>
<li>Allow/deny lists of domains for invitations.</li>
</ul>
<h4>Cross-tenant access settings (per external tenant)</h4>
<ul>
<li><strong>Inbound</strong>: which external users/groups/apps can access you. <strong>Outbound</strong>: where your users can go.</li>
<li><strong>Trust settings</strong>: accept MFA, compliant device, and hybrid-joined device claims from the partner tenant (avoids double MFA).</li>
<li><strong>B2B direct connect</strong> — no guest object; used by Teams shared channels.</li>
<li><strong>Cross-tenant synchronization</strong> — automatically provisions users between tenants of the same organization (source tenant pushes; target tenant must allow inbound sync).</li>
</ul>`,
    fr: `
<h4>B2B collaboration</h4>
<ul>
<li>Invite des utilisateurs externes par email → ils acceptent l'invitation et deviennent <strong>guests</strong> dans ton tenant.</li>
<li>Invitation en masse : upload CSV dans le centre d'admin, PowerShell (<code>New-MgInvitation</code>), ou l'API Graph d'invitation.</li>
<li>Les guests peuvent s'authentifier avec : un autre tenant Entra, un compte Microsoft, un <strong>code à usage unique par email (OTP)</strong>, Google, Facebook, ou fédération directe SAML/WS-Fed.</li>
</ul>
<h4>External collaboration settings</h4>
<ul>
<li>Qui peut inviter des guests : tout le monde / membres + certains admins / seulement certains rôles / personne.</li>
<li><strong>Guest user access restrictions</strong> : comme les membres / limité (défaut — ne peut pas énumérer l'annuaire) / <strong>le plus restrictif</strong> (son propre profil uniquement).</li>
<li>Listes d'autorisation/blocage de domaines pour les invitations.</li>
</ul>
<h4>Cross-tenant access settings (par tenant externe)</h4>
<ul>
<li><strong>Inbound</strong> : quels utilisateurs/groupes/apps externes peuvent accéder chez toi. <strong>Outbound</strong> : où tes utilisateurs peuvent aller.</li>
<li><strong>Trust settings</strong> : accepter les claims MFA, appareil conforme et hybrid-joined du tenant partenaire (évite le double MFA).</li>
<li><strong>B2B direct connect</strong> — pas d'objet guest ; utilisé par les canaux partagés Teams.</li>
<li><strong>Cross-tenant synchronization</strong> — provisionne automatiquement les utilisateurs entre tenants d'une même organisation (le tenant source pousse ; le tenant cible doit autoriser la sync entrante).</li>
</ul>`
    }
  },
  {
    title: {en:"Hybrid identity (Entra Connect Sync & Cloud Sync)", fr:"Identité hybride (Entra Connect Sync & Cloud Sync)"},
    html: {
    en: `
<h4>Two sync tools</h4>
<table>
<tr><th></th><th>Entra Connect Sync</th><th>Entra Cloud Sync</th></tr>
<tr><td>Runs</td><td>Heavy app on a server</td><td>Lightweight agent, config in cloud</td></tr>
<tr><td>Multi-forest disconnected</td><td>No (needs connectivity)</td><td><strong>Yes</strong></td></tr>
<tr><td>High availability</td><td>Staging server (manual failover)</td><td><strong>Multiple agents (automatic)</strong></td></tr>
<tr><td>Device objects, Exchange hybrid writeback</td><td><strong>Yes</strong></td><td>No</td></tr>
<tr><td>Password hash sync / passthrough</td><td>PHS + PTA</td><td>PHS only</td></tr>
<tr><td>Group writeback to AD</td><td>No (deprecated)</td><td><strong>Yes</strong> (cloud security groups)</td></tr>
</table>
<h4>Authentication methods for hybrid</h4>
<ul>
<li><strong>Password Hash Sync (PHS)</strong> — hash of the hash synced to cloud. Simplest, works if AD is down, enables leaked-credential detection. Recommended.</li>
<li><strong>Pass-through Authentication (PTA)</strong> — password validated against on-prem DCs by lightweight agents (install 3+ for HA). No password data in cloud, but auth fails if agents/AD are down.</li>
<li><strong>Federation (AD FS)</strong> — on-prem STS handles auth. Complex; Microsoft recommends migrating to PHS/PTA + staged rollout.</li>
<li><strong>Seamless SSO</strong> — automatic sign-in on domain-joined machines (Kerberos, uses the AZUREADSSO computer account; roll its key every 30 days). Works with PHS and PTA.</li>
</ul>
<div class="tip">💡 <strong>Staged rollout</strong> lets you test PHS/PTA cloud auth for selected groups while the domain stays federated. <strong>Entra Connect Health</strong> monitors AD FS, Connect Sync and AD DS (needs P1 and an agent per server).</div>`,
    fr: `
<h4>Deux outils de synchronisation</h4>
<table>
<tr><th></th><th>Entra Connect Sync</th><th>Entra Cloud Sync</th></tr>
<tr><td>Fonctionne</td><td>Grosse app sur un serveur</td><td>Agent léger, config dans le cloud</td></tr>
<tr><td>Multi-forêts déconnectées</td><td>Non (connectivité requise)</td><td><strong>Oui</strong></td></tr>
<tr><td>Haute disponibilité</td><td>Serveur de staging (bascule manuelle)</td><td><strong>Plusieurs agents (automatique)</strong></td></tr>
<tr><td>Objets appareils, writeback Exchange hybride</td><td><strong>Oui</strong></td><td>Non</td></tr>
<tr><td>PHS / PTA</td><td>PHS + PTA</td><td>PHS uniquement</td></tr>
<tr><td>Group writeback vers AD</td><td>Non (déprécié)</td><td><strong>Oui</strong> (groupes de sécurité cloud)</td></tr>
</table>
<h4>Méthodes d'authentification hybride</h4>
<ul>
<li><strong>Password Hash Sync (PHS)</strong> — hash du hash synchronisé dans le cloud. Le plus simple, marche même si l'AD est en panne, permet la détection de credentials fuités. Recommandé.</li>
<li><strong>Pass-through Authentication (PTA)</strong> — mot de passe validé par les DC on-prem via des agents légers (installes-en 3+ pour la HA). Aucune donnée de mot de passe dans le cloud, mais l'auth échoue si agents/AD sont en panne.</li>
<li><strong>Fédération (AD FS)</strong> — un STS on-prem gère l'auth. Complexe ; Microsoft recommande de migrer vers PHS/PTA avec staged rollout.</li>
<li><strong>Seamless SSO</strong> — connexion automatique sur machines jointes au domaine (Kerberos, via le compte ordinateur AZUREADSSO ; renouvelle sa clé tous les 30 jours). Fonctionne avec PHS et PTA.</li>
</ul>
<div class="tip">💡 Le <strong>staged rollout</strong> permet de tester l'auth cloud PHS/PTA pour des groupes choisis pendant que le domaine reste fédéré. <strong>Entra Connect Health</strong> surveille AD FS, Connect Sync et AD DS (P1 requis + un agent par serveur).</div>`
    }
  }
]},

/* ================= DOMAIN 2 ================= */
{
  domain: 2,
  sections: [
  {
    title: {en:"Authentication methods & MFA", fr:"Méthodes d'authentification & MFA"},
    html: {
    en: `
<h4>Methods ranked by strength</h4>
<ul>
<li><strong>Phishing-resistant</strong>: passkeys (FIDO2), Windows Hello for Business, certificate-based authentication (CBA).</li>
<li><strong>Strong</strong>: Microsoft Authenticator (push with number matching), OATH TOTP tokens, SMS/voice (weakest — avoid).</li>
<li><strong>Temporary Access Pass (TAP)</strong> — time-limited passcode used to onboard passwordless methods or recover access. Great for registering a FIDO2 key without a password.</li>
</ul>
<h4>Key configuration points</h4>
<ul>
<li>Manage everything in the <strong>Authentication methods policy</strong> (per-user legacy MFA is being retired — migrate).</li>
<li><strong>Registration campaign</strong> nudges users to register Authenticator at sign-in.</li>
<li><strong>Authentication strengths</strong> in Conditional Access require specific method combos (e.g. "Phishing-resistant MFA" for admins).</li>
<li><strong>Security defaults</strong>: free baseline (MFA for all, block legacy auth). Disable it when you use Conditional Access.</li>
<li>System-preferred MFA prompts the strongest registered method.</li>
</ul>
<h4>SSPR (self-service password reset)</h4>
<ul>
<li>Enable for None / Selected group / All. Configure number of methods required (1 or 2) and allowed methods.</li>
<li><strong>Password writeback</strong> (via Entra Connect, P1) pushes cloud resets back to on-prem AD; required for hybrid users to use SSPR.</li>
<li>Combined registration: users register MFA + SSPR info in one flow.</li>
</ul>
<h4>Password protection</h4>
<ul>
<li>Global banned password list (Microsoft-managed) + <strong>custom banned list</strong> (P1).</li>
<li>Extendable to on-prem AD with agents: DC agent on each DC + proxy service. <strong>Audit mode</strong> first, then Enforced.</li>
</ul>
<div class="tip">💡 To kick out a compromised user: disable account + <strong>revoke sessions</strong> (revokes refresh tokens) + reset password. Access tokens live up to ~1h unless Continuous Access Evaluation applies instantly.</div>`,
    fr: `
<h4>Méthodes classées par robustesse</h4>
<ul>
<li><strong>Résistantes au phishing</strong> : passkeys (FIDO2), Windows Hello for Business, authentification par certificat (CBA).</li>
<li><strong>Fortes</strong> : Microsoft Authenticator (push avec number matching), tokens OATH TOTP, SMS/voix (les plus faibles — à éviter).</li>
<li><strong>Temporary Access Pass (TAP)</strong> — code temporaire pour onboarder des méthodes passwordless ou récupérer l'accès. Idéal pour enregistrer une clé FIDO2 sans mot de passe.</li>
</ul>
<h4>Points de configuration clés</h4>
<ul>
<li>Tout se gère dans la <strong>Authentication methods policy</strong> (l'ancien MFA par utilisateur est en cours de retrait — migre).</li>
<li>La <strong>registration campaign</strong> pousse les utilisateurs à enregistrer Authenticator à la connexion.</li>
<li>Les <strong>authentication strengths</strong> dans Conditional Access exigent des combinaisons précises (ex : « Phishing-resistant MFA » pour les admins).</li>
<li><strong>Security defaults</strong> : base gratuite (MFA pour tous, blocage legacy auth). À désactiver quand tu utilises Conditional Access.</li>
<li>System-preferred MFA propose la méthode la plus forte enregistrée.</li>
</ul>
<h4>SSPR (réinitialisation de mot de passe en libre-service)</h4>
<ul>
<li>Activable pour Personne / Groupe sélectionné / Tous. Configure le nombre de méthodes requises (1 ou 2) et les méthodes autorisées.</li>
<li>Le <strong>password writeback</strong> (via Entra Connect, P1) renvoie les réinitialisations cloud vers l'AD on-prem ; requis pour que les utilisateurs hybrides utilisent SSPR.</li>
<li>Combined registration : l'utilisateur enregistre MFA + SSPR en un seul parcours.</li>
</ul>
<h4>Password protection</h4>
<ul>
<li>Liste globale de mots de passe bannis (gérée par Microsoft) + <strong>liste personnalisée</strong> (P1).</li>
<li>Extensible à l'AD on-prem avec des agents : agent DC sur chaque contrôleur + service proxy. Mode <strong>Audit</strong> d'abord, puis Enforced.</li>
</ul>
<div class="tip">💡 Pour éjecter un utilisateur compromis : désactiver le compte + <strong>révoquer les sessions</strong> (révoque les refresh tokens) + réinitialiser le mot de passe. Les access tokens vivent ~1h sauf si Continuous Access Evaluation agit instantanément.</div>`
    }
  },
  {
    title: {en:"Conditional Access", fr:"Conditional Access"},
    html: {
    en: `
<p>Conditional Access (CA) = <strong>IF</strong> (assignments/conditions) <strong>THEN</strong> (grant or session controls). Requires <strong>P1</strong>. Policies are evaluated after first-factor authentication.</p>
<h4>Assignments</h4>
<ul>
<li><strong>Users</strong>: include/exclude users, groups, roles, guests. <em>Always exclude break-glass accounts.</em></li>
<li><strong>Target resources</strong>: apps, user actions (register security info / join devices), or <strong>authentication context</strong> (tag sensitive actions, e.g. PIM activation or SharePoint sites).</li>
<li><strong>Conditions</strong>: sign-in/user risk, device platform, locations (named locations, countries, GPS), client apps (block <em>legacy authentication</em> here), device filters.</li>
</ul>
<h4>Grant controls</h4>
<ul>
<li>Block / Grant with: MFA, authentication strength, compliant device (Intune), hybrid-joined device, approved client app, app protection policy, password change, terms of use.</li>
<li>Multiple controls: "Require all" or "Require one".</li>
</ul>
<h4>Session controls</h4>
<ul>
<li><strong>Sign-in frequency</strong> (force reauthentication every N hours/days), <strong>persistent browser session</strong> (on/off).</li>
<li><strong>Conditional Access App Control</strong> → routes sessions through Defender for Cloud Apps (block download, etc.).</li>
<li><strong>App-enforced restrictions</strong> (SharePoint/Exchange limited web experience on unmanaged devices).</li>
<li><strong>Continuous Access Evaluation (CAE)</strong> — near-real-time token revocation on critical events (user disabled, password change, location change).</li>
</ul>
<h4>Deployment best practices</h4>
<ul>
<li>Start in <strong>Report-only</strong> mode; analyze with the <strong>What If</strong> tool and sign-in logs.</li>
<li>Use Microsoft's <strong>policy templates</strong>; watch out for policies requiring compliant devices before Intune is ready (lockout!).</li>
<li><strong>Protected actions</strong>: require an authentication context to perform sensitive admin actions like modifying CA policies themselves.</li>
</ul>`,
    fr: `
<p>Conditional Access (CA) = <strong>SI</strong> (assignments/conditions) <strong>ALORS</strong> (contrôles grant ou session). Nécessite <strong>P1</strong>. Les politiques sont évaluées après l'authentification du premier facteur.</p>
<h4>Assignments</h4>
<ul>
<li><strong>Users</strong> : inclure/exclure utilisateurs, groupes, rôles, guests. <em>Toujours exclure les comptes break-glass.</em></li>
<li><strong>Target resources</strong> : apps, actions utilisateur (enregistrer les infos de sécurité / joindre des appareils), ou <strong>authentication context</strong> (marquer les actions sensibles, ex : activation PIM ou sites SharePoint).</li>
<li><strong>Conditions</strong> : risque de connexion/utilisateur, plateforme d'appareil, emplacements (named locations, pays, GPS), client apps (bloquer la <em>legacy authentication</em> ici), filtres d'appareils.</li>
</ul>
<h4>Contrôles Grant</h4>
<ul>
<li>Bloquer / Autoriser avec : MFA, authentication strength, appareil conforme (Intune), appareil hybrid-joined, application cliente approuvée, app protection policy, changement de mot de passe, terms of use.</li>
<li>Plusieurs contrôles : « Require all » ou « Require one ».</li>
</ul>
<h4>Contrôles Session</h4>
<ul>
<li><strong>Sign-in frequency</strong> (forcer la réauthentification toutes les N heures/jours), <strong>persistent browser session</strong> (on/off).</li>
<li><strong>Conditional Access App Control</strong> → fait passer les sessions par Defender for Cloud Apps (bloquer les téléchargements, etc.).</li>
<li><strong>App-enforced restrictions</strong> (expérience web limitée SharePoint/Exchange sur appareils non gérés).</li>
<li><strong>Continuous Access Evaluation (CAE)</strong> — révocation quasi temps réel des tokens sur événements critiques (compte désactivé, changement de mot de passe, changement de localisation).</li>
</ul>
<h4>Bonnes pratiques de déploiement</h4>
<ul>
<li>Commence en mode <strong>Report-only</strong> ; analyse avec l'outil <strong>What If</strong> et les sign-in logs.</li>
<li>Utilise les <strong>templates de politiques</strong> Microsoft ; attention aux politiques exigeant un appareil conforme avant qu'Intune soit prêt (risque de lockout !).</li>
<li><strong>Protected actions</strong> : exiger un authentication context pour les actions admin sensibles comme modifier les politiques CA elles-mêmes.</li>
</ul>`
    }
  },
  {
    title: {en:"Microsoft Entra ID Protection", fr:"Microsoft Entra ID Protection"},
    html: {
    en: `
<p>ID Protection (requires <strong>P2</strong>) detects, investigates and remediates identity risks.</p>
<h4>Two risk types</h4>
<ul>
<li><strong>Sign-in risk</strong> — is THIS sign-in suspicious? Detections: anonymous IP (Tor), atypical travel, unfamiliar sign-in properties, token anomaly, password spray.</li>
<li><strong>User risk</strong> — is the ACCOUNT compromised? Detections: leaked credentials (found in dumps), threat-intelligence-confirmed compromise.</li>
</ul>
<h4>Recommended policies (implement via Conditional Access)</h4>
<ul>
<li>Sign-in risk <strong>Medium and above</strong> → require MFA (or block High).</li>
<li>User risk <strong>High</strong> → require secure <strong>password change</strong> (with MFA). Self-remediation closes the risk automatically.</li>
<li>MFA registration policy → ensure everyone can self-remediate.</li>
</ul>
<h4>Investigation & remediation</h4>
<ul>
<li>Reports: <strong>Risky users</strong>, <strong>Risky sign-ins</strong>, <strong>Risk detections</strong>, <strong>Risky workload identities</strong> (service principals — block via CA for workload identities, requires Workload Identities Premium).</li>
<li>Admin actions: confirm compromised / dismiss risk / confirm safe; reset password; block.</li>
<li>Export to SIEM (Microsoft Sentinel) via diagnostic settings or Graph API.</li>
</ul>
<h4>Global Secure Access (SSE)</h4>
<ul>
<li><strong>Private Access</strong> — ZTNA replacement for VPN: reach on-prem apps via connectors + Quick Access; per-app CA with MFA.</li>
<li><strong>Internet Access</strong> — Secure Web Gateway: web content filtering by category/FQDN through security profiles linked to CA.</li>
<li><strong>Internet Access for Microsoft 365</strong> — dedicated tunnel to M365; enables <strong>compliant network check</strong> in CA (blocks token theft replay from outside your network).</li>
<li>Requires the <strong>GSA client</strong> on devices (or branch connectivity via IPsec).</li>
</ul>`,
    fr: `
<p>ID Protection (nécessite <strong>P2</strong>) détecte, investigue et corrige les risques d'identité.</p>
<h4>Deux types de risque</h4>
<ul>
<li><strong>Sign-in risk</strong> — CETTE connexion est-elle suspecte ? Détections : IP anonyme (Tor), voyage atypique, propriétés de connexion inhabituelles, anomalie de token, password spray.</li>
<li><strong>User risk</strong> — le COMPTE est-il compromis ? Détections : credentials fuités (trouvés dans des dumps), compromission confirmée par la threat intelligence.</li>
</ul>
<h4>Politiques recommandées (à implémenter via Conditional Access)</h4>
<ul>
<li>Sign-in risk <strong>Medium et plus</strong> → exiger MFA (ou bloquer High).</li>
<li>User risk <strong>High</strong> → exiger un <strong>changement de mot de passe</strong> sécurisé (avec MFA). L'auto-remédiation ferme le risque automatiquement.</li>
<li>Politique d'enregistrement MFA → garantir que chacun peut s'auto-remédier.</li>
</ul>
<h4>Investigation & remédiation</h4>
<ul>
<li>Rapports : <strong>Risky users</strong>, <strong>Risky sign-ins</strong>, <strong>Risk detections</strong>, <strong>Risky workload identities</strong> (service principals — à bloquer via CA pour workload identities, nécessite Workload Identities Premium).</li>
<li>Actions admin : confirmer compromis / rejeter le risque / confirmer sûr ; réinitialiser le mot de passe ; bloquer.</li>
<li>Export vers SIEM (Microsoft Sentinel) via diagnostic settings ou l'API Graph.</li>
</ul>
<h4>Global Secure Access (SSE)</h4>
<ul>
<li><strong>Private Access</strong> — remplaçant ZTNA du VPN : accès aux apps on-prem via connecteurs + Quick Access ; CA par app avec MFA.</li>
<li><strong>Internet Access</strong> — Secure Web Gateway : filtrage web par catégorie/FQDN via des security profiles liés au CA.</li>
<li><strong>Internet Access for Microsoft 365</strong> — tunnel dédié vers M365 ; active le <strong>compliant network check</strong> dans CA (bloque le rejeu de tokens volés depuis l'extérieur de ton réseau).</li>
<li>Nécessite le <strong>client GSA</strong> sur les appareils (ou connectivité de site via IPsec).</li>
</ul>`
    }
  }
]},

/* ================= DOMAIN 3 ================= */
{
  domain: 3,
  sections: [
  {
    title: {en:"Identities for apps & Azure workloads", fr:"Identités pour les apps & workloads Azure"},
    html: {
    en: `
<h4>Choosing the right identity</h4>
<table>
<tr><th>Identity</th><th>Use when</th><th>Secret management</th></tr>
<tr><td><strong>System-assigned managed identity</strong></td><td>One Azure resource needs to call other Azure/Entra-protected services; lifecycle tied to the resource</td><td>None — Azure manages it</td></tr>
<tr><td><strong>User-assigned managed identity</strong></td><td>Several resources share one identity; survives resource deletion</td><td>None</td></tr>
<tr><td><strong>Service principal</strong> (app registration)</td><td>App runs outside Azure, CI/CD, multi-tenant apps</td><td>You manage secrets/certs (prefer certs or federated credentials)</td></tr>
<tr><td><strong>Workload identity federation</strong></td><td>GitHub Actions / external OIDC workloads → no stored secrets</td><td>None (OIDC trust)</td></tr>
</table>
<div class="tip">💡 Exam rule of thumb: "runs in Azure + no credentials to manage" → <strong>managed identity</strong>. "Shared by many VMs" → <strong>user-assigned</strong>. After assigning a managed identity, grant it an <strong>Azure RBAC role</strong> on the target resource.</div>
<h4>App registration vs Enterprise application</h4>
<ul>
<li><strong>App registration</strong> = the blueprint (application object) in YOUR tenant: redirect URIs, secrets/certificates, API permissions, app roles, token config.</li>
<li><strong>Enterprise application</strong> = the service principal = the instance of an app in a tenant: SSO config, user/group assignment, provisioning, consent record.</li>
<li>A multi-tenant app: 1 app registration (home tenant) + 1 service principal per customer tenant.</li>
</ul>
<h4>API permissions & consent</h4>
<ul>
<li><strong>Delegated permissions</strong> — app acts as the signed-in user (user must have the rights too).</li>
<li><strong>Application permissions</strong> — app acts alone (daemon); always requires <strong>admin consent</strong>.</li>
<li>User consent settings: allow all / allow only verified-publisher low-impact / disable. Use the <strong>admin consent workflow</strong> so users can request approval instead of being blocked.</li>
</ul>`,
    fr: `
<h4>Choisir la bonne identité</h4>
<table>
<tr><th>Identité</th><th>Quand l'utiliser</th><th>Gestion des secrets</th></tr>
<tr><td><strong>Managed identity system-assigned</strong></td><td>Une ressource Azure doit appeler d'autres services protégés Azure/Entra ; cycle de vie lié à la ressource</td><td>Aucune — Azure gère</td></tr>
<tr><td><strong>Managed identity user-assigned</strong></td><td>Plusieurs ressources partagent une identité ; survit à la suppression de la ressource</td><td>Aucune</td></tr>
<tr><td><strong>Service principal</strong> (app registration)</td><td>App hors d'Azure, CI/CD, apps multi-tenant</td><td>Tu gères secrets/certificats (préfère certs ou federated credentials)</td></tr>
<tr><td><strong>Workload identity federation</strong></td><td>GitHub Actions / workloads OIDC externes → aucun secret stocké</td><td>Aucune (confiance OIDC)</td></tr>
</table>
<div class="tip">💡 Règle d'examen : « tourne dans Azure + zéro credential à gérer » → <strong>managed identity</strong>. « Partagée par plusieurs VMs » → <strong>user-assigned</strong>. Après avoir assigné une managed identity, donne-lui un <strong>rôle Azure RBAC</strong> sur la ressource cible.</div>
<h4>App registration vs Enterprise application</h4>
<ul>
<li><strong>App registration</strong> = le plan (application object) dans TON tenant : redirect URIs, secrets/certificats, permissions API, app roles, config des tokens.</li>
<li><strong>Enterprise application</strong> = le service principal = l'instance d'une app dans un tenant : config SSO, assignation d'utilisateurs/groupes, provisioning, trace du consentement.</li>
<li>Une app multi-tenant : 1 app registration (tenant d'origine) + 1 service principal par tenant client.</li>
</ul>
<h4>Permissions API & consentement</h4>
<ul>
<li><strong>Delegated permissions</strong> — l'app agit au nom de l'utilisateur connecté (qui doit aussi avoir les droits).</li>
<li><strong>Application permissions</strong> — l'app agit seule (daemon) ; exige toujours un <strong>admin consent</strong>.</li>
<li>Paramètres de consentement utilisateur : tout autoriser / seulement éditeurs vérifiés à faible impact / désactiver. Utilise l'<strong>admin consent workflow</strong> pour que les utilisateurs demandent une approbation au lieu d'être bloqués.</li>
</ul>`
    }
  },
  {
    title: {en:"Enterprise apps: SSO, provisioning, App Proxy", fr:"Enterprise apps : SSO, provisioning, App Proxy"},
    html: {
    en: `
<h4>SaaS app integration (gallery apps)</h4>
<ul>
<li>SSO options: <strong>SAML</strong> (classic SaaS), <strong>OpenID Connect/OAuth</strong> (modern), password-based (vault), linked.</li>
<li>SAML config: Identifier (Entity ID), Reply URL (ACS), claims/attributes, signing certificate (watch expiry!).</li>
<li><strong>Automatic user provisioning</strong> via <strong>SCIM</strong>: create/update/disable users in the SaaS app. Scoping filters choose who gets provisioned; provisioning logs for troubleshooting.</li>
</ul>
<h4>Application Proxy (publish on-prem web apps)</h4>
<ul>
<li>Install <strong>private network connectors</strong> (outbound-only 443 — no inbound firewall holes, no DMZ). Group them in connector groups.</li>
<li>External URL → pre-authentication: <strong>Microsoft Entra ID</strong> (recommended, enables CA + MFA) or Passthrough.</li>
<li>SSO to the backend: <strong>Kerberos Constrained Delegation (KCD)</strong> for Integrated Windows Auth apps, header-based, or forms-based.</li>
</ul>
<h4>Managing access</h4>
<ul>
<li>Set <strong>"User assignment required?" = Yes</strong> so only assigned users/groups can sign in.</li>
<li><strong>App roles</strong> defined in the registration are assigned to users/groups on the enterprise app and appear in tokens as the <code>roles</code> claim.</li>
<li>Roles to delegate app management: <strong>Application Administrator</strong> (all apps + App Proxy), <strong>Cloud Application Administrator</strong> (no App Proxy), <strong>Application Developer</strong> (create registrations only).</li>
</ul>
<h4>Defender for Cloud Apps (MDCA)</h4>
<ul>
<li><strong>Cloud Discovery</strong> — analyze firewall/proxy logs (or Defender for Endpoint integration) to find shadow IT; sanction/unsanction apps.</li>
<li><strong>App connectors</strong> — API-level visibility and governance of sanctioned apps (M365, Salesforce…).</li>
<li><strong>Conditional Access App Control</strong> — session policies: block download/copy/print on unmanaged devices, monitor sessions; access policies block risky clients.</li>
<li><strong>OAuth app policies</strong> — detect over-privileged/malicious consented apps and revoke them.</li>
</ul>`,
    fr: `
<h4>Intégration d'apps SaaS (galerie)</h4>
<ul>
<li>Options SSO : <strong>SAML</strong> (SaaS classique), <strong>OpenID Connect/OAuth</strong> (moderne), password-based (coffre), linked.</li>
<li>Config SAML : Identifier (Entity ID), Reply URL (ACS), claims/attributs, certificat de signature (surveille l'expiration !).</li>
<li><strong>Provisioning automatique</strong> via <strong>SCIM</strong> : créer/mettre à jour/désactiver les utilisateurs dans l'app SaaS. Les scoping filters choisissent qui est provisionné ; provisioning logs pour le dépannage.</li>
</ul>
<h4>Application Proxy (publier des apps web on-prem)</h4>
<ul>
<li>Installe des <strong>private network connectors</strong> (sortant uniquement en 443 — aucun trou de pare-feu entrant, pas de DMZ). Regroupe-les en connector groups.</li>
<li>URL externe → pré-authentification : <strong>Microsoft Entra ID</strong> (recommandé, active CA + MFA) ou Passthrough.</li>
<li>SSO vers le backend : <strong>Kerberos Constrained Delegation (KCD)</strong> pour les apps Windows intégrées, header-based, ou forms-based.</li>
</ul>
<h4>Gérer l'accès</h4>
<ul>
<li>Mets <strong>« User assignment required? » = Yes</strong> pour que seuls les utilisateurs/groupes assignés puissent se connecter.</li>
<li>Les <strong>app roles</strong> définis dans la registration sont assignés aux utilisateurs/groupes sur l'enterprise app et apparaissent dans les tokens via le claim <code>roles</code>.</li>
<li>Rôles pour déléguer la gestion des apps : <strong>Application Administrator</strong> (toutes les apps + App Proxy), <strong>Cloud Application Administrator</strong> (sans App Proxy), <strong>Application Developer</strong> (créer des registrations seulement).</li>
</ul>
<h4>Defender for Cloud Apps (MDCA)</h4>
<ul>
<li><strong>Cloud Discovery</strong> — analyse les logs pare-feu/proxy (ou l'intégration Defender for Endpoint) pour trouver le shadow IT ; sanctionner/désanctionner des apps.</li>
<li><strong>App connectors</strong> — visibilité et gouvernance au niveau API des apps approuvées (M365, Salesforce…).</li>
<li><strong>Conditional Access App Control</strong> — session policies : bloquer téléchargement/copie/impression sur appareils non gérés, surveiller les sessions ; access policies pour bloquer les clients risqués.</li>
<li><strong>Politiques OAuth apps</strong> — détecter les apps consenties sur-privilégiées/malveillantes et les révoquer.</li>
</ul>`
    }
  }
]},

/* ================= DOMAIN 4 ================= */
{
  domain: 4,
  sections: [
  {
    title: {en:"Entitlement management & access reviews", fr:"Entitlement management & access reviews"},
    html: {
    en: `
<p>Both are part of <strong>Microsoft Entra ID Governance</strong> (P2 / Governance license).</p>
<h4>Entitlement management</h4>
<ul>
<li><strong>Catalog</strong> — container of resources (groups, apps, SharePoint sites) + access packages. Delegate with the <strong>catalog owner</strong> role.</li>
<li><strong>Access package</strong> — bundle of resource roles users can request. Policies define:
  <ul><li>who can request (internal users / <strong>connected organizations</strong> / any external user),</li>
  <li>approval flow (1 or 2 stages, alternate approvers),</li>
  <li><strong>lifecycle</strong>: expiration (date/days), periodic access reviews, extension rules.</li></ul></li>
<li><strong>Connected organizations</strong> — partner tenants/domains whose users can request packages; guests are created automatically and can be removed automatically when access expires (manage external user lifecycle).</li>
<li><strong>Terms of use (ToU)</strong> — PDF users must accept; attach to access packages or Conditional Access.</li>
</ul>
<h4>Access reviews</h4>
<ul>
<li>Review membership of groups/teams, app assignments, access packages, and privileged roles (PIM).</li>
<li>Reviewers: resource owners, selected reviewers, managers, or <strong>self-review</strong>. Multi-stage reviews possible.</li>
<li>Recurrence: one-time / weekly / monthly / quarterly / annually.</li>
<li>Auto-apply results: remove denied users automatically. Configure what happens if reviewer doesn't respond (no change / remove / approve / take recommendations).</li>
<li>Recommendations use sign-in inactivity (e.g. 30 days) to suggest deny — decisions still applied per settings.</li>
<li>Guest-specific reviews help clean up stale external users.</li>
</ul>`,
    fr: `
<p>Les deux font partie de <strong>Microsoft Entra ID Governance</strong> (licence P2 / Governance).</p>
<h4>Entitlement management</h4>
<ul>
<li><strong>Catalog</strong> — conteneur de ressources (groupes, apps, sites SharePoint) + access packages. Délègue avec le rôle <strong>catalog owner</strong>.</li>
<li><strong>Access package</strong> — lot de rôles de ressources que les utilisateurs peuvent demander. Les policies définissent :
  <ul><li>qui peut demander (utilisateurs internes / <strong>connected organizations</strong> / tout utilisateur externe),</li>
  <li>le circuit d'approbation (1 ou 2 étapes, approbateurs de secours),</li>
  <li>le <strong>cycle de vie</strong> : expiration (date/jours), access reviews périodiques, règles d'extension.</li></ul></li>
<li><strong>Connected organizations</strong> — tenants/domaines partenaires dont les utilisateurs peuvent demander des packages ; les guests sont créés automatiquement et peuvent être supprimés automatiquement à l'expiration (gestion du cycle de vie des utilisateurs externes).</li>
<li><strong>Terms of use (ToU)</strong> — PDF que les utilisateurs doivent accepter ; attaché aux access packages ou au Conditional Access.</li>
</ul>
<h4>Access reviews</h4>
<ul>
<li>Réviser l'appartenance aux groupes/teams, les assignations d'apps, les access packages et les rôles privilégiés (PIM).</li>
<li>Reviewers : propriétaires de ressources, reviewers choisis, managers, ou <strong>auto-révision</strong>. Reviews multi-étapes possibles.</li>
<li>Récurrence : unique / hebdo / mensuelle / trimestrielle / annuelle.</li>
<li>Application automatique des résultats : retirer automatiquement les utilisateurs refusés. Configure le comportement si le reviewer ne répond pas (aucun changement / retirer / approuver / suivre les recommandations).</li>
<li>Les recommandations utilisent l'inactivité de connexion (ex : 30 jours) pour suggérer un refus.</li>
<li>Les reviews spécifiques aux guests aident à nettoyer les comptes externes obsolètes.</li>
</ul>`
    }
  },
  {
    title: {en:"Privileged Identity Management (PIM)", fr:"Privileged Identity Management (PIM)"},
    html: {
    en: `
<p>PIM (requires <strong>P2</strong>) provides just-in-time (JIT) privileged access for <strong>Entra roles</strong>, <strong>Azure resource roles</strong>, and <strong>PIM for Groups</strong>.</p>
<h4>Assignment types</h4>
<ul>
<li><strong>Eligible</strong> — user must <strong>activate</strong> the role when needed (JIT). Preferred.</li>
<li><strong>Active</strong> — role permanently on (use sparingly).</li>
<li>Both can be permanent or time-bound (start/end dates).</li>
</ul>
<h4>Role settings (per role)</h4>
<ul>
<li>On activation: require MFA or <strong>authentication context</strong> (ties to a CA policy), require justification, ticket number, <strong>approval</strong> (choose approvers).</li>
<li>Max activation duration (default 8h), notifications.</li>
</ul>
<h4>PIM for Groups</h4>
<ul>
<li>Users become eligible for <strong>membership/ownership of a group</strong>; everything the group grants (roles, apps, licenses) becomes JIT. Great for third-party apps or bundling several roles in one activation.</li>
</ul>
<h4>Break-glass (emergency access) accounts</h4>
<ul>
<li>2 cloud-only accounts, Global Administrator, <strong>excluded from ALL Conditional Access policies</strong>, phishing-resistant credentials stored securely (e.g. FIDO2 keys in safes).</li>
<li>Monitor their sign-ins with alerts (Log Analytics + alert rule). Not synced from AD, not federated.</li>
</ul>
<h4>Monitoring identity</h4>
<ul>
<li><strong>Sign-in logs</strong> (interactive + non-interactive + service principal + managed identity), <strong>Audit logs</strong> (directory changes), <strong>Provisioning logs</strong>.</li>
<li>Default retention: 30 days (P1/P2), 7 days Free. To keep longer → <strong>diagnostic settings</strong> export to <strong>Log Analytics</strong> (KQL: tables <code>SigninLogs</code>, <code>AuditLogs</code>), a <strong>storage account</strong> (cheap archive), or <strong>Event Hubs</strong> (stream to external SIEM).</li>
<li><strong>Workbooks</strong> — ready dashboards (sign-in analysis, CA insights); require Log Analytics.</li>
<li><strong>Identity Secure Score</strong> — posture recommendations and improvement actions.</li>
</ul>`,
    fr: `
<p>PIM (nécessite <strong>P2</strong>) fournit un accès privilégié just-in-time (JIT) pour les <strong>rôles Entra</strong>, les <strong>rôles de ressources Azure</strong> et <strong>PIM for Groups</strong>.</p>
<h4>Types d'assignation</h4>
<ul>
<li><strong>Eligible</strong> — l'utilisateur doit <strong>activer</strong> le rôle quand il en a besoin (JIT). À privilégier.</li>
<li><strong>Active</strong> — rôle actif en permanence (à limiter).</li>
<li>Les deux peuvent être permanents ou bornés dans le temps (dates de début/fin).</li>
</ul>
<h4>Paramètres de rôle (par rôle)</h4>
<ul>
<li>À l'activation : exiger MFA ou <strong>authentication context</strong> (lié à une politique CA), justification, numéro de ticket, <strong>approbation</strong> (choisir les approbateurs).</li>
<li>Durée max d'activation (8h par défaut), notifications.</li>
</ul>
<h4>PIM for Groups</h4>
<ul>
<li>Les utilisateurs deviennent éligibles à l'<strong>appartenance/propriété d'un groupe</strong> ; tout ce que le groupe accorde (rôles, apps, licences) devient JIT. Idéal pour les apps tierces ou regrouper plusieurs rôles en une activation.</li>
</ul>
<h4>Comptes break-glass (accès d'urgence)</h4>
<ul>
<li>2 comptes cloud-only, Global Administrator, <strong>exclus de TOUTES les politiques Conditional Access</strong>, credentials résistants au phishing stockés en sécurité (ex : clés FIDO2 dans des coffres).</li>
<li>Surveille leurs connexions avec des alertes (Log Analytics + règle d'alerte). Jamais synchronisés depuis l'AD, jamais fédérés.</li>
</ul>
<h4>Surveillance de l'identité</h4>
<ul>
<li><strong>Sign-in logs</strong> (interactifs + non-interactifs + service principals + managed identities), <strong>Audit logs</strong> (changements d'annuaire), <strong>Provisioning logs</strong>.</li>
<li>Rétention par défaut : 30 jours (P1/P2), 7 jours en Free. Pour garder plus longtemps → <strong>diagnostic settings</strong> vers <strong>Log Analytics</strong> (KQL : tables <code>SigninLogs</code>, <code>AuditLogs</code>), un <strong>storage account</strong> (archive pas chère) ou <strong>Event Hubs</strong> (stream vers un SIEM externe).</li>
<li><strong>Workbooks</strong> — tableaux de bord prêts (analyse des connexions, CA insights) ; nécessitent Log Analytics.</li>
<li><strong>Identity Secure Score</strong> — recommandations de posture et actions d'amélioration.</li>
</ul>`
    }
  }
]}
];
