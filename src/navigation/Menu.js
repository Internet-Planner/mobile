import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "../screen/Home";
import TimelineCalendarScreen from "../screen/Calendar";
import Register from "../screen/Register";
/* import Timeline from "../screen/Timeline"; */
import Timelinebis from "../screen/Timelinebis";


const Tab = createBottomTabNavigator();

const BottomNav = () => {

  return (
    <Tab.Navigator
      screenOptions={({ route } ) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          /* si le nom de la route est Home */
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Calendrier") {
            iconName = focused
              ? /* si la tab est sur le focus */
                "calendar"
              : /* si la tab est pas focus on utilise la outline */
                "calendar-outline";
          }else if (route.name === "Register"){
            iconName = focused
            ? "clipboard"
            : "clipboard-outline";
          }else if(route.name === "Timeline"){
            iconName = focused

            ? 
            ""
            :
            ""
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false}}/>
      <Tab.Screen name="Calendrier" component={TimelineCalendarScreen}/>
      <Tab.Screen name="Timelinebis" component={Timelinebis}/>
      <Tab.Screen name="Register" component={Register} options={{headerShown: false}} />

    </Tab.Navigator>
  );
};

export default BottomNav;