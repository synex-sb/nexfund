# NexFund

Premium white-and-sky-blue responsive starter website for GitHub Pages with Firebase Authentication and Firestore.

**Demo only:** not a bank, lender, or financial service. It does not issue funds or collect NID images, payment PINs, card details, or banking credentials.

## Quick start
1. Follow [`SETUP.md`](SETUP.md).
2. Add your Firebase web configuration to `firebase-config.js`.
3. Enable Email/Password in Firebase Authentication.
4. Publish `firestore.rules` in Firestore.
5. Deploy the repository root with GitHub Pages.

## Included
- Responsive landing page and illustrative offers
- Email/password sign-up and sign-in
- Customer dashboard and demo application history
- Firestore rules for customer data and admin role checks
- Setup notes for safely assigning an admin role

The first version does not yet include a visual admin CRUD page. The Firestore rules permit authorized admins to manage offers and applications, and can support that next development step.
