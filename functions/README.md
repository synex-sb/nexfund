# NexFund — Finance, Made Clear

এই project আপনার নির্দিষ্ট folder structure অনুযায়ী সাজানো হয়েছে। এটি একটি **starter project**, production-ready lending platform নয়।

## Folder map
- `index.html` — public homepage
- `customer/` — customer home, login, apply, dashboard
- `private-admin/` — admin entry, login, dashboard UI
- `assets/css/style.css` — shared design
- `assets/js/firebase.js` — Firebase web config
- `assets/js/app.js` — shared frontend behavior
- `functions/` — trusted Cloud Functions
- `firestore.rules`, `storage.rules` — database/file security rules

## Setup
1. Firebase Console-এ project তৈরি করুন: https://console.firebase.google.com/
2. Project Settings > Your apps থেকে Web App তৈরি করে config নিন।
3. `assets/js/firebase.js`-এ `YOUR_*` placeholder বদলান।
4. Firebase Authentication > Sign-in method থেকে Email/Password enable করুন।
5. Firestore Database তৈরি করুন। Storage rules default-deny; upload এখনো চালু নয়।
6. Node.js 20+ এবং Firebase CLI ইনস্টল করা terminal-এ:

   ```bash
   npm install -g firebase-tools
   firebase login
   firebase use --add
   cd functions && npm install && cd ..
   firebase emulators:start
   ```

7. পরীক্ষা ও security review-এর পর deploy:

   ```bash
   firebase deploy
   ```

## গুরুত্বপূর্ণ সীমাবদ্ধতা
- Login form Firebase config থাকলে Authentication ব্যবহার করে; admin role authorization এখনও UI-তে সম্পূর্ণভাবে wired নয়—real admin access দেওয়ার আগে server-side authorization/custom claims যোগ ও পরীক্ষা করতে হবে।
- Apply form বর্তমানে ইচ্ছাকৃতভাবে আবেদন save করে না। Cloud Function রয়েছে, কিন্তু current terms acceptance UI, duplicate prevention, full eligibility and production workflow আরও সম্পূর্ণ করতে হবে।
- NID/video upload, ৳160 deposit, payment gateway, WhatsApp automation, actual disbursement, repayment processing, PDF/CSV reports এবং offer management UI এখনও সম্পূর্ণ নয়।
- `private-admin/` নামে ফোল্ডার রাখলেই সেটি private হয় না। প্রতিটি database/function/file operation-এ server-side role check লাগবে।
- Real loan, fee/deposit collection বা identity document সংগ্রহের আগে বাংলাদেশের যোগ্য আইনজীবীর পরামর্শ, প্রযোজ্য লাইসেন্স/নিয়ম, privacy/retention policy, complaint/refund process ও security review আবশ্যক।
- Firebase service-account key কখনো frontend, `assets/`, বা GitHub-এ রাখবেন না।
- Real customer data নয়; আগে fictional test data ও Firebase Emulator দিয়ে পরীক্ষা করুন।
