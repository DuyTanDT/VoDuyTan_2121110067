import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { TextInput as WebTextInput } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
import { myColors } from "../Utils/MyColor";

// Conditionally use TextInput based on the platform
const TextInput = Platform.OS === "web" ? WebTextInput : require("react-native").TextInput;

const Signup = () => {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = userCredentials;
  const navigation = useNavigation();

  const handleSignUp = () => {
    // Perform signup logic here
    console.log("Sign Up Pressed");

    // After successful signup, navigate to the Login screen
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: myColors.secondary }}>
      <StatusBar />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
          <Text style={{ color: myColors.third, fontSize: 35, fontWeight: "500", marginLeft: 40, textAlign: 'center' }}>
            Đăng ký{"\n"}
          </Text>

          <Text style={{ fontSize: 15, fontWeight: "600", color: "grey", marginTop: 10, marginLeft: 40 }}>
            Tài khoản{"\n"}
          </Text>
          <TextInput
            maxLength={10}
            keyboardType="name-phone-pad"
            style={{ borderColor: "#E3E3E3", borderBottomWidth: 1, marginTop: 15, fontSize: 16, marginLeft: 40 }}
            onChangeText={(val) => setUserCredentials({ ...userCredentials, username: val })}
          />

          <Text style={{ fontSize: 15, fontWeight: "600", color: "grey", marginTop: 10, marginLeft: 40 }}>
            Email
          </Text>
          <TextInput
            value={email}
            onChangeText={(val) => setUserCredentials({ ...userCredentials, email: val })}
            keyboardType="email-address"
            style={{ borderColor: "#E3E3E3", borderBottomWidth: 1, marginTop: 15, fontSize: 16, marginLeft: 40 }}
          />

          <Text style={{ fontSize: 15, fontWeight: "600", color: "grey", marginTop: 30, marginLeft: 40 }}>
            Mật khẩu
          </Text>
          <View style={{ borderColor: "#E3E3E3", flexDirection: "row", borderBottomWidth: 2, justifyContent: "space-between", alignItems: "center" }}>
            <TextInput
              value={password}
              onChangeText={(val) => setUserCredentials({ ...userCredentials, password: val })}
              secureTextEntry={true}
              maxLength={10}
              keyboardType="ascii-capable"
              style={{ borderColor: "#E3E3E3", borderBottomWidth: 1, marginTop: 15, fontSize: 16, marginLeft: 40, flex: 1 }}
            />
          </View>

          <TouchableOpacity
            onPress={handleSignUp}
            style={{
              backgroundColor: myColors.primary,
              marginTop: 30,
              height: 60,
              width: 300,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 40,
              marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 19, color: myColors.secondary, fontWeight: "500" }}>Sign Up</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 16 }}>Tạo tài khoản mới?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ fontSize: 15, color: myColors.red, fontWeight: 600 }}>Đăng nhập ngay </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
