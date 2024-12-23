import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState } from "react";

type User = null | {
  name: string;
};

export const AuthContext = createContext<{
  user: User;
  login: () => void;
  logout: () => void;
}>({
  user: null,
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<User>(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        login: async () => {
          const fakeUser = { name: "Mohamed Salh" };
          setUser(fakeUser);
          AsyncStorage.setItem("user", JSON.stringify(user));
        },
        logout: async () => {
          setUser(null);
          AsyncStorage.removeItem("user");
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
