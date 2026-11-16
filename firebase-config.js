rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /complaints/{document=**} {
      allow read, write: if true;
    }
  }
}
