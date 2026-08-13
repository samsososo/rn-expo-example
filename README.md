# rn-expo-example

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

This project uses [Expo Router](https://docs.expo.dev/router/introduction) with a feature-first architecture. Route files in `src/app` stay thin; application code lives in `src/features` and reusable foundations live in `src/shared`.

## Architecture

```text
src/
  app/                      # Expo Router routes and app composition only
  features/
    getting-started/        # Home capability: screen, components, public API
    explore/                # Explore capability: screen, components, public API
    profile/                # Profile API, query, types, and public API
  shared/
    navigation/             # Cross-feature navigation shell
    theme/                  # Theme tokens and hooks
    ui/                     # Reusable UI primitives
```

Each feature exposes its supported surface through an `index.ts`. Code outside a feature should import that public API instead of reaching into the feature's internal folders.

Dependency direction is `app → features → shared`. Feature-specific code stays with its feature until it is genuinely reused.

## API demo

The Explore feature loads a profile with Axios and caches the server state with TanStack Query. The response is rendered directly with `JSON.stringify`. Zustand is installed for future client state, so API data is not duplicated in a client store.

The development default is `http://localhost:8082/api/mobile/v1`. To override it, copy `.env.example` to `.env.local` and change `EXPO_PUBLIC_API_BASE_URL`.

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

### Other setup steps

- To set up ESLint for linting, run `npx expo lint`, or follow our guide on ["Using ESLint and Prettier"](https://docs.expo.dev/guides/using-eslint/)
- If you'd like to set up unit testing, follow our guide on ["Unit Testing with Jest"](https://docs.expo.dev/develop/unit-testing/)
- Learn more about the TypeScript setup in this template in our guide on ["Using TypeScript"](https://docs.expo.dev/guides/typescript/)

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
