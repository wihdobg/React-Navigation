import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthProvider from "./AuthProvider";
import Routes from "./Routes";

const Provider = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default Provider;

const styles = StyleSheet.create({});
