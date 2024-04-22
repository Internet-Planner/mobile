import React, { useState } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { CalendarUtils } from "react-native-calendars";
import { Card } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const today = new Date();
export const getDate = (offset = 0) =>
  CalendarUtils.getCalendarDateString(
    new Date().setDate(today.getDate() + offset)
  );

const image = require("../../assets/Mockup.png");

const Data = [
  { id: "1", title: "Titre de la Vidéo de Squeezi", time: "10:00" },
  {
    id: "2",
    start: `${getDate()} 01:15:00`,
    end: `${getDate()} 02:30:00`,
    image: require("../../assets/miniature_seb.jpeg"),
    title: "Que sont-ils devenus ?",
    text: "Mais que sont devenue nos chanteur de notre enfance aujourd'huis ",
    time: "12:30",
  },
  { id: "3", title: "Événement 3", time: "15:45" },
  { id: "4", title: "je casse le quatrième mur", time: "16:55" },

  {
    id: "5",
    start: `${getDate()} 00:15:00`,
    end: `${getDate()} 01:00:00`,
    image: require("../../assets/miniature.jpg"),
    title: "comment faire une miniature",
    text: "pour faire un bonne miniature il faut....",
    time: "17:10",
  },
];

const Timeline = () => {
  const [selectedCardId, setSelectedCardId] = useState(null);

  const changeText = (id) => {
    setSelectedCardId(id);
  };

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.Fond}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <ScrollView horizontal>
          {Data.map((item, key) => (
            <Card
              key={key}
              style={
                key == 0 ? [styles.mycard, { marginLeft: 15 }] : styles.mycard
              }
            >
              <TouchableOpacity key={key} onPress={() => changeText(item.id)}>
                
                <Image
                  source={item.image}
                  style={{ width: 170, height: 100, alignSelf: "center"}}
                />
                <Text style={styles.title}>{item.title}</Text>
              </TouchableOpacity>
            </Card>
          ))}
        </ScrollView>
      </View>

      {/*affiche le text de la card selectionnée grace a son id si il correspond a un élement il affiche le text sinon il affiche rien*/}
      {selectedCardId && (
        <View style={{ margin: 30 , marginTop: 370}}>
          <LinearGradient
            colors={[
              "rgba(0, 0, 0, 0) 0%",
              "rgba(72, 0, 142, 1) 100%",
            ]}
            start={{ x: 1, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={{
              width: 340,
              height: 120,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.text}>{Data.find((item) => item.id === selectedCardId)?.text}</Text>
          </LinearGradient>
        </View>
      )}
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
  mycard: {
    marginTop: 10,
    marginLeft: 50,
    width: 190,
    height: 130,
  },
  title: {
    textAlign: "center",
  },
  text:{
    color: "#fceeff",
    margin: 1.5,
  }
});

export default Timeline;
