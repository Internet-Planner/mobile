import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const Timeline = () => {
  const data = [
    { id: '1', text: 'Événement 1' },
    { id: '2', text: 'Événement 2' },
    { id: '3', text: 'Événement 3' },
    // Ajoutez d'autres événements ici
  ];

  return (
    <View style={styles.container}>
      <View style={styles.bar} />
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bar: {
    width: 2, // Largeur de la barre au milieu
    backgroundColor: 'black', // Couleur de la barre
    flex: 1, // Pour occuper tout l'espace disponible
  },
  card: {
    backgroundColor: 'lightgray', // Couleur de la carte
    padding: 10,
    margin: 5,
    borderRadius: 5,
    width: 150, // Largeur de chaque carte
  },
});

export default Timeline;





/* import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const timelineData = [
  {
    id: "1",
    title: "Événement 1",
    date: "2023-10-01",
    description: "Description de l'événement 1",
  },
  {
    id: "2",
    title: "Événement 2",
    date: "2023-10-10",
    description: "Description de l'événement 2",
  },
  {
    id: "3",
    title: "Événement 3",
    date: "2023-10-20",
    description: "Description de l'événement 3",
  },
  // Ajoutez plus d'événements ici
];

const TimelineCard = ({ title, date, description }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardDate}>{date}</Text>
    <Text style={styles.cardDescription}>{description}</Text>
  </View>
);

const Timeline = () => {
  return (
    <FlatList
      data={timelineData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TimelineCard {...item} />}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 16,
    margin: 10,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardDate: {
    fontSize: 14,
    color: "gray",
  },
  cardDescription: {
    fontSize: 16,
  },
});

export default Timeline; */

/* import { View, Text, FlatList, StyleSheet } from "react-native";

const timelineData = [
  {
    id: "1",
    title: "évenement 1",
    date: "2023-10-15",
    description: "Description",
  },
];

const TimelineCard = ({ title, date, description }) => {
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardDate}>{date}</Text>
    <Text style={styles.cardDescription}>{description}</Text>
  </View>;
};

const Timeline = () => {
  return (
    <FlatList
      data={timelineData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TimelineCard {...item} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 16,
    margin: 10,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardDate: {
    fontSize: 14,
    color: "gray",
  },
  cardDescription: {
    fontSize: 16,
  },
});

export default Timeline;
 */
