import { Stack } from "expo-router";
import UserProvider from './UserContext';

export default function RootLayout() {
  return (
    <UserProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#25292e',
          },
          headerShadowVisible: false,
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Sign Up' }} />
        <Stack.Screen name="info" options={{ title: 'info' }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </UserProvider>
  );
}
