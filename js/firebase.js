import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  onSnapshot,
  query,
  orderBy 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD5bcOBMTA2TXbfKL9wgEtGNM6gCdlsEGk",
  authDomain: "joussour-eedb1.firebaseapp.com",
  projectId: "joussour-eedb1",
  storageBucket: "joussour-eedb1.firebasestorage.app",
  messagingSenderId: "708768231158",
  appId: "1:708768231158:web:bdc93edec08feda72706d7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Sauvegarder un message
export async function saveMessage(text, from, thread) {
  await addDoc(collection(db, 'messages'), {
    text, from, thread,
    timestamp: new Date()
  });
}

// Sauvegarder une absence
export async function saveAbsence(eleve, date, motif, statut) {
  await addDoc(collection(db, 'absences'), {
    eleve, date, motif, statut,
    notifie: false,
    timestamp: new Date()
  });
}

// Sauvegarder une note
export async function saveNote(eleve, matiere, evaluation, note, trimestre) {
  await addDoc(collection(db, 'notes'), {
    eleve, matiere, evaluation, note, trimestre,
    timestamp: new Date()
  });
}

console.log("✅ Firebase initialisé !");