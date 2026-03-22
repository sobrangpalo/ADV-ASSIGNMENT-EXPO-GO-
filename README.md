# Expo Snack Authentication Demo

This is a simple authentication flow demo built with **React Native** using **Expo Snack**.  
It demonstrates **state management** and **navigation control** using `useState`, `useEffect`, and simulated navigation.

---

## Screens

1. **Login**
   - Enter email and password
   - Validates that fields are not empty
   - Press **Login** → goes to Dashboard

2. **Dashboard**
   - Shows welcome message and email
   - Buttons:
     - **Go to Profile** → navigates to Profile
     - **Logout** → logs out and goes back to Login

3. **Profile**
   - Shows email and account status
   - **Back** button → returns to Dashboard

---

## State Management

- `email` → stores user email input
- `password` → stores password input
- `isLoggedIn` → tracks login state
- `screen` → simulates navigation between screens

**useState** is used to manage all of these states.

---

## Navigation Simulation

- `setScreen("dashboard")` → simulates `router.replace("/dashboard")`
- `setScreen("profile")` → simulates `router.push("/profile")`
- `setScreen("dashboard")` from Profile → simulates `router.back()`
- `setScreen("login")` after logout → simulates `router.replace("/login")`

---

## Auth Guard

`useEffect` checks if the user tries to access the Dashboard without logging in:

```javascript
useEffect(() => {
  if (!isLoggedIn && screen === "dashboard") {
    setScreen("login");
  }
}, [screen]);