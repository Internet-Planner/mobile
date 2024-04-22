/* import groupBy from "lodash/groupBy";
import React, { Component, useState } from "react";
import {
  ExpandableCalendar,
  TimelineEventProps,
  CalendarProvider,
  CalendarUtils,
} from "react-native-calendars";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { timelineEvents, getDate } from "../mocks/timelineEvents";
import { Card } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const EVENTS: TimelineEventProps[] = timelineEvents;


export default class Timelinebis extends Component {

  state = {
    currentDate: getDate(),
    events: EVENTS,
    eventsByDate: groupBy(EVENTS, (e) =>
      CalendarUtils.getCalendarDateString(e.start)
    ) as {
      [key: string]: TimelineEventProps[];
    },
  };

  marked = {
    [`${getDate(-1)}`]: { marked: true },
    [`${getDate()}`]: { marked: true },
    [`${getDate(1)}`]: { marked: true },
    [`${getDate(2)}`]: { marked: true },
    [`${getDate(4)}`]: { marked: true },
  };

  onDateChanged = (date: string, source: string) => {
    console.log("TimelineCalendarScreen onDateChanged: ", date, source);
    this.setState({ currentDate: date });
  };

  onMonthChange = (month: any, updateSource: any) => {
    console.log("TimelineCalendarScreen onMonthChange: ", month, updateSource);
  };

  render() {
    const { currentDate, eventsByDate } = this.state; */

/* const ThemeCalendar = {
      calendarBackground: "#3f0d6b", // couleur pour le fond du calendrier
      selectedDayBackgroundColor: "#48008e", // couleur quand on sélectionne le jour que l'on veux
      selectedDayTextColor: "#FFFFFF", //  couleur de text pour le jour sélectionner
      todayTextColor: "#a62ae7", //  couleur pour le text du jour
      dayTextColor: "#FFFFFF", //  couleur pour le text des autres jours
      textSectionTitleColor: "#FFFFFF", //  couleur pour le text des jour de la semaine
      selectedDotColor: "#FFFFFF", //   color pour la selection des events
      textDisabledColor: "#839192", // couleur pour les jours des autres mois que celui qu'on à sélectionner
      monthTextColor: "#FFFFFF", // couleur pour les Mois
      arrowColor: "#FFFFFF", // couleur pour les fléches
    }; */

/* const image = require("../../assets/Mockup.png");

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
    return (
      <CalendarProvider
        date={currentDate}
        onDateChanged={this.onDateChanged}
        onMonthChange={this.onMonthChange}
        showTodayButton
        disabledOpacity={0.6}
      >
        <ExpandableCalendar
          firstDay={1}
          markedDates={this.marked}
          theme={ThemeCalendar}
        /> */
{
  /*         <TimelineList
          events={eventsByDate}
          scrollToFirst
          initialTime={INITIAL_TIME}
        /> */
}
{
  /* <>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.Fond}
          >
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
                      key == 0
                        ? [styles.mycard, { marginLeft: 15 }]
                        : styles.mycard
                    }
                  >
                    <TouchableOpacity
                      key={key}
                      onPress={() => changeText(item.id)}
                    >
                      <Image
                        source={item.image}
                        style={{ width: 170, height: 100, alignSelf: "center" }}
                      />
                      <Text style={styles.title}>{item.title}</Text>
                    </TouchableOpacity>
                  </Card>
                ))}
              </ScrollView>
            </View> */
}

{
  /*affiche le text de la card selectionnée grace a son id si il correspond a un élement il affiche le text sinon il affiche rien*/
}
/* {selectedCardId && (
              <View style={{ margin: 30, marginTop: 370 }}>
                <LinearGradient
                  colors={["rgba(0, 0, 0, 0) 0%", "rgba(72, 0, 142, 1) 100%"]}
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
                  <Text style={styles.text}>
                    {Data.find((item) => item.id === selectedCardId)?.text}
                  </Text>
                </LinearGradient>
              </View>
            )}
          </ImageBackground>
        </>
      </CalendarProvider>
    );
  }
}

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
  text: {
    color: "#fceeff",
    margin: 1.5,
  },
});
 */

import React, { Component } from "react";
import { Platform } from 'react-native';
import groupBy from "lodash/groupBy";
import filter from "lodash/filter";
import {
  ExpandableCalendar,
  TimelineEventProps,
  TimelineList,
  CalendarProvider,
  TimelineProps,
  CalendarUtils,
} from "react-native-calendars";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import {getDate } from "../mocks/timelineEvents";
import { Card } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import datadb from "../../datadb.json";

const INITIAL_TIME = { hour: 9, minutes: 0 };
/* const EVENTS: TimelineEventProps[] = timelineEvents;
 */const baseURL = Platform.OS === 'android' ? 'file:///android_asset/' : '';

export default class Timelinebis extends Component {
  state = {
    currentDate: getDate(),
/*     events: EVENTS,
    eventsByDate: groupBy(EVENTS, (e) =>
      CalendarUtils.getCalendarDateString(e.start)
    ) as {
      [key: string]: TimelineEventProps[];
    }, */
    eventsByDate: groupBy(datadb, (e) => e.created_at),
    selectedCardId: null,
  };

  marked = {
    [`${getDate(-1)}`]: { marked: true },
    [`${getDate()}`]: { marked: true },
    [`${getDate(1)}`]: { marked: true },
    [`${getDate(2)}`]: { marked: true },
    [`${getDate(4)}`]: { marked: true },
  };

  changeText = (id) => {
    this.setState({ selectedCardId: id });
  };

  onDateChanged = (date: string, source: string) => {
    console.log("TimelineCalendarScreen onDateChanged: ", date, source);
    this.setState({ currentDate: date });
  };

/*   filterEventsByDate = (date: string) => {
    const filteredEvents = this.state.events.filter(
      (event) => CalendarUtils.getCalendarDateString(event.start) === date
    );
    this.setState({
      eventsByDate: groupBy(filteredEvents, (e) =>
        CalendarUtils.getCalendarDateString(e.start)
      ),
    });
  } */

  onMonthChange = (month: any, updateSource: any) => {
    console.log("TimelineCalendarScreen onMonthChange: ", month, updateSource);
  };

  private timelineProps: Partial<TimelineProps> = {
    format24h: true,
    unavailableHours: [
      { start: 0, end: 6 },
      { start: 22, end: 24 },
    ],
    overlapEventsSpacing: 8,
    rightEdgeSpacing: 24,
  };

  render() {
    const { currentDate, selectedCardId , eventsByDate } = this.state;

    const ThemeCalendar = {
      calendarBackground: "#3f0d6b",
      selectedDayBackgroundColor: "#48008e",
      selectedDayTextColor: "#FFFFFF",
      todayTextColor: "#a62ae7",
      dayTextColor: "#FFFFFF",
      textSectionTitleColor: "#FFFFFF",
      selectedDotColor: "#FFFFFF",
      textDisabledColor: "#839192",
      monthTextColor: "#FFFFFF",
      arrowColor: "#FFFFFF",
    };

    const image = require("../../assets/Mockup.png");

    const Data = datadb;
/*       { id: "1", title: "Titre de la Vidéo de Squeezi", time: "10:00" },
      {
        id: "2",
        start: `2024-03-21 01:15:00`,
        end: `2024-03-21 02:30:00`,
        image: require("../../assets/miniature_seb.jpeg"),
        title: "Que sont-ils devenus ?",
        text: "Mais que sont devenue nos chanteur de notre enfance aujourd'hui ",
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
      }, */
/*       this.filterEventsByDate(this.state.currentDate);
 */    return (
      <CalendarProvider
        date={currentDate}
        onDateChanged={this.onDateChanged}
        onMonthChange={this.onMonthChange}
        showTodayButton
        disabledOpacity={0.6}
      >
        <ExpandableCalendar
          firstDay={1}
          markedDates={this.marked}
          theme={ThemeCalendar}
        />
        
{/*     <TimelineList
          events={eventsByDate}
          timelineProps={this.timelineProps}
          initialTime={INITIAL_TIME}
        /> */}
        
        <ImageBackground   source={image} resizeMode="cover" style={styles.Fond}>
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
                    key == 0
                      ? [styles.mycard, { marginLeft: 15 }]
                      : styles.mycard
                  }
                >
                  <TouchableOpacity
                    key={key}
                    onPress={() => this.changeText(item.link)}
                  >
                    <Image
                     source={{uri: `${baseURL}${item.thumbnail}`}}
                      style={{ width: 170, height: 100, alignSelf: "center" }}
                    />
                    <Text style={styles.title}>{item.description}</Text>
                  </TouchableOpacity>
                </Card>
              ))}
            </ScrollView>
          </View>

          {selectedCardId && (
            <View style={{ margin: 5, bottom: -100}}>
              <LinearGradient
                colors={["rgba(0, 0, 0, 0) 0%", "rgba(72, 0, 142, 1) 100%"]}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 1 }}
                style={{
                  width: "100%",
                  padding: 5,
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ScrollView style={styles.scrollView}>
                  <Text style={styles.text}>
                    {Data.find((item) => item.link === selectedCardId)?.description}
                  </Text>
                </ScrollView>
              </LinearGradient>
            </View>
          )}
        </ImageBackground>
      </CalendarProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  Fond: {
    width: "100%",
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
  text: {
    color: "#fceeff",
    margin: 1.5,
  },
  scrollView: {
    maxHeight: 150,
    overflowY: "scroll",
  },
});