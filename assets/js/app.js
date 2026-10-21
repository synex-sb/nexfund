
import { firebaseConfig, isFirebaseConfigured } from "./firebase.js";
let auth = null, db = null, firebaseReady = false;
if (isFirebaseConfigured) {
  try {
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js");
    const { getAuth } = await import("https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js");
    const { getFirestore } = await import("https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js");
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app); db = getFirestore(app); firebaseReady = true;
  } catch (e) { console.error("Firebase initialization failed", e); }
}
const $ = s => document.querySelector(s);
const page = document.body.dataset.page || "";
function setStatus(message, type="") { const el=$("#status"); if(el){el.className="status "+type;el.textContent=message;} }
function safe(s){return String(s||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
async function setupAuth(){
  const form=$("#authForm"); if(!form)return;
  form.addEventListener("submit",async e=>{
    e.preventDefault();
    if(!firebaseReady){setStatus("Firebase সেটআপ করা হয়নি। README-এর নির্দেশনা অনুসরণ করে firebase.js কনফিগার করুন।","error");return;}
    try{
      const {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile}=await import("https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js");
      const email=$("#email").value.trim(), password=$("#password").value;
      if(page==="register"){
        const cred=await createUserWithEmailAndPassword(auth,email,password);
        await updateProfile(cred.user,{displayName:$("#fullName").value.trim()});
        location.href="/customer/dashboard.html";
      }else{
        await signInWithEmailAndPassword(auth,email,password);
        location.href=location.pathname.includes("private-admin")?"/private-admin/dashboard.html":"/customer/dashboard.html";
      }
    }catch(err){setStatus(({ "auth/email-already-in-use":"এই ইমেইলে অ্যাকাউন্ট আছে।","auth/invalid-credential":"ইমেইল বা পাসওয়ার্ড ঠিক নয়।","auth/weak-password":"আরও শক্তিশালী পাসওয়ার্ড দিন।","auth/invalid-email":"সঠিক ইমেইল দিন."})[err.code]||"লগইন সম্পন্ন হয়নি। সেটিংস ও তথ্য যাচাই করুন।","error");}
  });
}
async function setupApply(){
 const form=$("#applyForm"); if(!form)return;
 form.addEventListener("submit",e=>{
   e.preventDefault();
   setStatus("এটি এখনো ডেমো। নিরাপদ backend, বর্তমান শর্তে সম্মতি এবং আইনগত অনুমোদন কনফিগার না হওয়ায় আবেদন সংরক্ষণ করা হয়নি।","error");
 });
}
async function setupDashboard(){
 if(!$("#accountInfo"))return;
 if(!firebaseReady){$("#accountInfo").textContent="Firebase এখনো কনফিগার করা হয়নি।";return;}
 const {onAuthStateChanged,signOut}=await import("https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js");
 onAuthStateChanged(auth,user=>{
   if(!user){location.href="/customer/login.html";return;}
   $("#accountInfo").textContent=`লগইন করা হয়েছে: ${user.email||""}`;
 });
 const logout=$("#logout");if(logout)logout.onclick=async()=>{await signOut(auth);location.href="/";};
}
setupAuth();setupApply();setupDashboard();
