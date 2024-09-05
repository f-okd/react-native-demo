# React-Native Demo

Experimenting with react-native + zustand for global state management

## Prerequisites

You need Node, JDK and Android Studio to use an emulator. 
Follow these instructions: [React Native | Setup Environment](https://reactnative.dev/docs/set-up-your-environment)

## How to run

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/f-okd/book-tracker
   ```
2. Navigate to the project directory:

   ```bash
   cd C:\...\book-tracker
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Rename .env.example to .env/.env.local and populate env variables
   - This step can be skipped and you can write the URL and Key directly into your codebase because you should have supabase Row-Level-Security enabled, but it's good secure practice to keep somewhat sensitive data private.

5. Start the app

   ```bash
    npm start
   ```
6. Press 'a' key to open using android emulator, or scan the QR code on the Expo Go app (Android)

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```


## Helpful resources
https://supabase.com/docs/guides/auth/social-login/auth-google?queryGroups=platform&platform=react-native
https://supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native?queryGroups=auth-store&auth-store=async-storage