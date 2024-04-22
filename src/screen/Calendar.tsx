import groupBy from "lodash/groupBy";
import filter from "lodash/filter";
import find from "lodash/find";

import React, { Component } from "react";
import { Alert } from "react-native";
import {
  ExpandableCalendar,
  TimelineEventProps,
  TimelineList,
  CalendarProvider,
  TimelineProps,
  CalendarUtils,
} from "react-native-calendars";

import { getDate } from "../mocks/timelineEvents";
import datadb from "../../datadb.json";

const INITIAL_TIME = { hour: 9, minutes: 0 };
// const EVENTS: TimelineEventProps[] = timelineEvents;

export default class TimelineCalendarScreen extends Component {
  state = {
    currentDate: getDate(),
    // events: EVENTS,
    // eventsByDate: groupBy(EVENTS, (e) =>
    //   CalendarUtils.getCalendarDateString(e.start)
    // ) as {
    //   [key: string]: TimelineEventProps[];
    // },
    eventsByDate: groupBy(datadb, (e) => e.created_at),
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

  createNewEvent: TimelineProps["onBackgroundLongPress"] = (
    timeString,
    timeObject
  ) => {
    const { eventsByDate } = this.state;
    const hourString = `${(timeObject.hour + 1).toString().padStart(2, "0")}`;
    const minutesString = `${timeObject.minutes.toString().padStart(2, "0")}`;

    const newEvent = {
      id: "draft",
      start: `${timeString}`,
      end: `${timeObject.date} ${hourString}:${minutesString}:00`,
      title: "New Event",
      color: "white",
    };

    if (timeObject.date) {
      if (eventsByDate[timeObject.date]) {
        eventsByDate[timeObject.date] = [
          ...eventsByDate[timeObject.date],
          newEvent,
        ];
        this.setState({ eventsByDate });
      } else {
        eventsByDate[timeObject.date] = [newEvent];
        this.setState({ eventsByDate: { ...eventsByDate } });
      }
    }
  };

  approveNewEvent: TimelineProps["onBackgroundLongPressOut"] = (
    _timeString,
    timeObject
  ) => {
    const { eventsByDate } = this.state;

    Alert.prompt("New Event", "Enter event title", [
      {
        text: "Cancel",
        onPress: () => {
          if (timeObject.date) {
            eventsByDate[timeObject.date] = filter(
              eventsByDate[timeObject.date],
              (e) => e.id !== "draft"
            );

            this.setState({
              eventsByDate,
            });
          }
        },
      },
      {
        text: "Create",
        onPress: (eventTitle) => {
          if (timeObject.date) {
            const draftEvent = find(eventsByDate[timeObject.date], {
              id: "draft",
            });
            if (draftEvent) {
              draftEvent.id = undefined;
              draftEvent.title = eventTitle ?? "New Event";
              draftEvent.color = "lightgreen";
              eventsByDate[timeObject.date] = [
                ...eventsByDate[timeObject.date],
              ];

              this.setState({
                eventsByDate,
              });
            }
          }
        },
      },
    ]);
  };

  private timelineProps: Partial<TimelineProps> = {
    format24h: true,
    onBackgroundLongPress: this.createNewEvent,
    onBackgroundLongPressOut: this.approveNewEvent,
    unavailableHours: [
      { start: 0, end: 6 },
      { start: 22, end: 24 },
    ],
    overlapEventsSpacing: 8,
    rightEdgeSpacing: 24,
  };

  render() {
    const { currentDate } = this.state;
      console.log('currentdate', currentDate)
    const ThemeCalendar = {
      calendarBackground: "#3f0d6b",   // couleur pour le fond du calendrier
      selectedDayBackgroundColor: "#48008e", // couleur quand on sélectionne le jour que l'on veux
      selectedDayTextColor: "#FFFFFF", //  couleur de text pour le jour sélectionner
      todayTextColor: "#a62ae7", //  couleur pour le text du jour
      dayTextColor: "#FFFFFF", //  couleur pour le text des autres jours
      textSectionTitleColor: "#FFFFFF", //  couleur pour le text des jour de la semaine
      selectedDotColor: "#FFFFFF", //   color for selected events
      textDisabledColor: '#839192', // couleur pour les jours des autres mois que celui qu'on à sélectionner 
      monthTextColor: "#FFFFFF",  // couleur pour les Mois
      arrowColor: "#FFFFFF"       // couleur pour les fléches 
      
    };
 // Filtrer les événements de datadb pour ne récupérer que ceux de la date actuelle
  const eventsByDate = datadb.filter(event => {
  const eventDate = event.created_at.split(' ')[0];
  console.log('eventdate', eventDate)
  // const eventDate = CalendarUtils.getCalendarDateString(new Date(event.created_at));
  return eventDate === currentDate;
});

// Grouper les événements filtrés par date
const groupedEventsByDate = groupBy(eventsByDate, event => {
  const created = event.created_at.split(' ')[0];
  console.log('created', created)
  console.log('event', event)
   return CalendarUtils.getCalendarDateString(new Date(created));
  //return event
});
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
        />
        <TimelineList
          events={groupedEventsByDate}
          timelineProps={this.timelineProps}
          showNowIndicator
          scrollToFirst
          initialTime={INITIAL_TIME}
        />
      </CalendarProvider>
      
    );
  }
}