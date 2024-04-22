import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const image = require("../../assets/Mockup.png");
const cercle = require("../../assets/cercle.png");

const Register = () => {
  const navigation = useNavigation();

  return (
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
            Register to your account
          </Text>
        </View>
        <View style={styles.formulaire}>

          <Text style={styles.text}>Username</Text>
          <TextInput style={styles.textinput}></TextInput>

          <Text style={styles.text}>Email</Text>
          <TextInput style={styles.textinput}></TextInput>

          <Text style={styles.text}>Password</Text>
          <TextInput style={styles.textinput}></TextInput>

          <Text style={styles.text}> Confirm Password</Text>
          <TextInput style={styles.textinput}></TextInput>

          <View style={styles.Viewbutton}>
            <TouchableOpacity onPress={() => navigation.navigate("Calendrier")}>
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
                  <Text style={styles.text}>create you account</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", marginTop: 25 }}>
            <Text style={styles.text}>Vous avez déjà un compte ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text>Se connecter</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* fin de la View Formulaire */}
      </View>
      {/* fin de la View Container */}
    </ImageBackground>
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
    bottom: "-50%",
  },
  logo: {
    /* Pour le logo de Internet Planner */
    width: "60%",
    height: 90,
    resizeMode: "contain",
    marginTop: 35,
  },
  formulaire: {
    flex: 1,
    justifyContent: "center",
    position: "absolute",
    marginTop: 330,
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
});

export default Register;
