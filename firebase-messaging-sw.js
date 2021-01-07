
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyB3W4MeMRWytCcPlIKiArI6DQrbN3hc9F8",
    authDomain: "pickup-53fd9.firebaseapp.com",
    projectId: "pickup-53fd9",
    storageBucket: "pickup-53fd9.appspot.com",
    messagingSenderId: "659451866399",
    appId: "1:659451866399:web:be8bdcbbcd3d76971b942a",
    measurementId: "G-KL4WYM0XJ0"
});
// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();


// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START on_background_message]
messaging.onBackgroundMessage(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: 'firebase-logo.png',
        sound: '/audio1.mp3'
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
   
});

// [END on_background_message]