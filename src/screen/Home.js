import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useCallback, useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";

const image = require("../../assets/Mockup.png");
const cercle = require("../../assets/cercle.png");

const Home = () => {
  const {login} = useContext(AuthContext);
  const navigation = useNavigation();

  const Google = () => {
    const url = 'https://www.google.com';
    Linking.openURL(url);
  }

  const Twitch = () => {
    const url = 'https://www.twitch.com';
    Linking.openURL(url);
  }

  const Youtube = () =>{
    const url ='https://www.youtube.com';
    Linking.openURL(url);
  }

  return (
    <View>
      <ImageBackground source={image} resizeMode="cover" style={styles.Fond}>
        <ImageBackground
          source={cercle}
          resizeMode="cover"
          style={styles.cercle}
        />
        <View style={styles.container}>
          <Image
            source={require("../../assets/Logo-Planner.png")}
            style={styles.logo}
          />
          <View>
            <Text style={[styles.text, styles.title]}>
              Log in to your account
            </Text>
          </View>
          <View style={styles.formulaire}>
            <Text style={styles.text}>Email</Text>
            <TextInput style={styles.textinput}></TextInput>

            <View style={{flexDirection: "row"}}>
              <Text style={styles.text}>Password </Text>
              <Text>Forgot you password</Text>
            </View>

            <TextInput style={styles.textinput}></TextInput>

            <View style={styles.Viewbutton}>
              <TouchableOpacity onPress={() => {login()}}>
                <LinearGradient
                  colors={[
                    "rgba(0, 0, 0, 1) 0%",
                    "rgba(0, 0, 0, 0.5971638655462185) 100%",
                    "transparent",
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{
                    width: 350,
                    height: 60,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      width: 250,
                      height: 50,
                      borderRadius: 5,
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 5,
                    }}
                  >
                    <Text style={styles.text}>Login</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", marginTop: 25 }}>
              <Text style={styles.text}>Not a member ? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text>Sign up now</Text>
              </TouchableOpacity>
            </View>
            {/* cette View sert à faire une ligne avec une text au millieu (ps elle fait deux ligne*/}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 25,
              }}
            >
              <View style={{ flex: 1, height: 1, backgroundColor: "white" }} />
              <View>
                <Text style={{ width: 50, textAlign: "center" }}>OR</Text>
              </View>
              <View style={{ flex: 1, height: 1, backgroundColor: "white" }} />
            </View>
            {/* fin de la view qui sert a faire une ligne  */}
          </View>
          {/* fin de la View Formulaire */}

          <View style={styles.Réseau}>
            {/* Button pour Google */}
            <TouchableOpacity style={styles.buttonRéseau} onPress={Google}>
              <View>
                <Image
                  source={require("../../assets/logo-google.png")}
                  style={styles.logoR}
                />
              </View>
            </TouchableOpacity>


            {/* Button pour Twitch */}
            <TouchableOpacity style={styles.buttonRéseau} onPress={Twitch}>
              <View>
                <Image
                  source={require("../../assets/logo-twitch.png")}
                  style={styles.logoR}
                />
              </View>
            </TouchableOpacity>

            {/* Button pour Youtube */}
            <TouchableOpacity style={styles.buttonRéseau} onPress={Youtube} >
              <View>
                <Image
                  source={require("../../assets/logo-yt.png")}
                  style={styles.logoR}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* fin de la View Container */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  Fond: {
    width: "100%",
    height: "100%",
  },
  cercle: {
    /* Pour le cercle qui se situe entre le formulaire et le fond */
    width: "100%",
    height: "140%",
    justifyContent: "center",
    position: "absolute",
    bottom: "-55%",
  },
  logo: {
    /* Pour le logo de Internet Planner */
    width: "60%",
    height: 90,
    resizeMode: "contain",
    marginTop: 50,
  },
  logoR: {
    height: 30,
    resizeMode: "contain",
  },
  formulaire: {
    flex: 1,
    justifyContent: "center",
    position: "absolute",
    marginTop: 360,
  },
  title: {
    marginTop: 130,
    fontSize: 23,
  },
  text: {
    /* Pour tout les écritures qui doivent être en blanc*/
    color: "#fceeff",
  },
  textinput: {
    fontSize: 25,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    width: 350,
    borderColor: "#fceeff",
  },
  Viewbutton: {
    alignItems: "center",
    marginTop: "10%",
    width: 350,
  },
  Réseau: {
    justifyContent: "space-between",
    marginTop: "100%",
    width: 350,
    flexDirection: "row",
  },
  buttonRéseau: {
    height: 50,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default Home;