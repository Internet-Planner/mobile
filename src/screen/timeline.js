import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import {CalendarUtils } from "react-native-calendars";
import { Card } from "react-native-paper";

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
    time: "17:10",
  },
];

const Timeline = () => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.Fond}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 25,
        }}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: "white" }} />
        <ScrollView horizontal>
          {Data.map((item, key) => (
            <Card key={key} style={key == 0 ? [styles.mycard, { marginLeft: 15 }] : styles.mycard}>
              <Image
                source={item.image}
                style={{ width: 170, height: 100, alignSelf: "center" }}
              />
              <Text style={styles.title}>{item.title}</Text>
            </Card>
          ))}
        </ScrollView>
        <View style={{ flex: 1, height: 1, backgroundColor: "white" }} />
      </View>
      {/*{Data.map((item) => (
          <Text key={item.id}>{item.title}</Text>
        ))}

        {Data.map((item, index) => (
          <Image
            key={index}
            source={item.image}
            style={{ width: 170, height: 100 }}
          />
        ))} */}
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
});

export default Timeline;
