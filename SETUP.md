[SETUP.md](https://github.com/user-attachments/files/33769331/SETUP.md)# NexFund — GitHub Pages + Firebase starter

A beginner-friendly **demo/prototype**, not a real lender or loan-processing service. This project stores only basic account information and demo application records. It does **not** collect NID images, payment PINs, card details, or bank credentials.

## Files
- `index.html` — page structure and modals
- `styles.css` — responsive white/sky-blue UI
- `app.js` — Firebase Auth + Firestore logic
- `firebase-config.js` — your Firebase web configuration
- `firestore.rules` — database access rules

## 1. Create a GitHub repository
1. Sign in to GitHub and create a repository named `nexfund` (public is fine for GitHub Pages).
2. Upload all files in this folder to the repository root.
3. Do not upload Firebase service-account keys or private credentials. The web config in `firebase-config.js` is not a service-account secret, but access must be controlled with Security Rules and Firebase App Check where appropriate.

## 2. Create Firebase project
1. Open [Firebase Console](https://console.firebase.google.com/) and create a project.
2. Add a **Web app** to the project and copy its Firebase config.
3. Replace the placeholder values in `firebase-config.js` with the exact config from Firebase Console.
4. In **Authentication → Sign-in method**, enable **Email/Password**.
5. In **Firestore Database**, create a database. Start in production mode if offered.
6. Open Firestore **Rules**, paste the contents of `firestore.rules`, and publish.
7. In Firebase Authentication settings, add your GitHub Pages domain to **Authorized domains** (for example `YOUR-USERNAME.github.io`). Use the exact hostname that serves your site.

## 3. Turn on GitHub Pages
1. Open repository **Settings → Pages**.
2. Under Build and deployment, choose **Deploy from a branch**.
3. Select `main` and `/ (root)`, then Save.
4. Wait for deployment and open the URL GitHub provides.

The site uses JavaScript ES modules, so run it through GitHub Pages or a local web server; opening `index.html` as a `file://` URL may block modules.

## 4. Create an admin account safely
1. Sign up through your deployed site with the email you want to use for administration.
2. In Firebase Console → Firestore, open `users`.
3. Find the document whose ID exactly matches that account's Firebase Authentication UID.
4. Change `role` from `customer` to `admin`.
5. Refresh the site. The admin role is read from Firestore, and Firestore rules enforce access on the server.

**Never add an admin email or password in client-side JavaScript.** Admin privileges are enforced by Firestore Rules, not just hidden buttons in the UI.

### Admin offer management
The admin workspace supports publishing and deleting custom demo offers and changing demo application statuses. These actions are enforced by Firestore Rules. The three landing-page sample cards remain illustrative examples; custom offers are currently managed in the admin area.

## What works in this starter
- Email/password sign-up and sign-in
- Customer profile document
- Submit and list demo applications
- User-only reads for customer applications
- Admin role can read/manage applications and offers through Firestore rules
- Responsive mobile layout and demo disclosures

## Important limits
- No real loan approval, lending, payments, identity verification, or money movement.
- No NID/document upload or storage.
- Demo amounts and statuses are illustrative only.
- GitHub Pages is static hosting; Firebase provides the backend.
- Review applicable Bangladesh laws, licensing/authorization, consumer-protection duties, privacy/security requirements, and professional advice before any real financial product.
- Firestore rules are a starting point. Test them in Firebase Emulator/Rules Playground before production. Add App Check, abuse protection, monitoring, and a privacy notice before any real user launch.

