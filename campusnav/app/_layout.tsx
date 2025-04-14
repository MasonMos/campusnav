import { Stack } from "expo-router";
import UserProvider from './UserContext';

export default function RootLayout() {
  return (
    <UserProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: 'white',
          },
          headerShadowVisible: false,
          headerTintColor: '#ADD8E6',
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Sign Up' }} />
        <Stack.Screen name="info" options={{ title: 'Info' }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </UserProvider>
  );
}
