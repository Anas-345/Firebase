# Firebase Setup Guide

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a new project"
3. Enter your project name and follow the setup wizard
4. Enable Google Analytics (optional)

## Step 2: Get Firebase Credentials

1. In Firebase Console, go to **Project Settings** (gear icon)
2. Scroll down to **Your apps** section
3. Click on the web app icon (or create one if doesn't exist)
4. Copy the firebaseConfig object

## Step 3: Set Up Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` and replace the placeholder values with your Firebase credentials:
   ```env
   VITE_FIREBASE_API_KEY=YOUR_API_KEY
   VITE_FIREBASE_AUTH_DOMAIN=YOUR_PROJECT_ID.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
   VITE_FIREBASE_STORAGE_BUCKET=YOUR_PROJECT_ID.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
   VITE_FIREBASE_APP_ID=YOUR_APP_ID
   ```

## Step 4: Enable Authentication Method

1. In Firebase Console, go to **Authentication**
2. Click **Get started**
3. Under **Sign-in method**, enable **Email/Password**

## Step 5: Install Dependencies

```bash
npm install
```

This will install Firebase and all other dependencies.

## Step 6: Run Your App

```bash
npm run dev
```

Visit `http://localhost:5173` (or the port shown in terminal)

## Files Created/Modified

- **src/firebase.js** - Firebase initialization and configuration
- **.env.example** - Template for environment variables
- **src/pages/Auth/Login.jsx** - Login page with Firebase authentication

## Login Component Features

- Email/Password authentication
- Error handling with user-friendly messages
- Loading state during authentication
- Redirect to home page on successful login
- Link to register page
- Input validation
- Responsive design with Tailwind CSS

## Next Steps

1. Create the Register page for sign-up
2. Add password reset functionality
3. Protect routes with authentication checks
4. Add user profile page
5. Implement logout functionality
