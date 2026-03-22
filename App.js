import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

export default function App() {
  const [screen, setScreen] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Auth guard (like dashboard useEffect)
  useEffect(() => {
    if (!isLoggedIn && screen === "dashboard") {
      setScreen("login");
    }
  }, [screen]);

  // LOGIN SCREEN
  if (screen === "login") {
    return (
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24 }}>Login</Text>

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
        />

        <Button
          title="Login"
          onPress={() => {
            if (!email || !password) {
              Alert.alert("Error", "Enter email & password");
              return;
            }
            setIsLoggedIn(true);
            setScreen("dashboard"); // acts like router.replace
          }}
        />
      </View>
    );
  }

  // DASHBOARD
  if (screen === "dashboard") {
    return (
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24 }}>Dashboard</Text>
        <Text>Welcome!</Text>
        <Text>Email: {email}</Text>

        <Button
          title="Go to Profile"
          onPress={() => setScreen("profile")} // like router.push
        />

        <Button
          title="Logout"
          onPress={() => {
            setIsLoggedIn(false);
            setScreen("login"); // like router.replace
          }}
        />
      </View>
    );
  }

  // PROFILE
  if (screen === "profile") {
    return (
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24 }}>Profile</Text>
        <Text>Email: {email}</Text>
        <Text>Status: Active</Text>

        <Button
          title="Back"
          onPress={() => setScreen("dashboard")} // like router.back
        />
      </View>
    );
  }
}
    