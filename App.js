import React from 'react';
import { StyleSheet, Dimensions, StatusBar,Text, View } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import HomeScreen from './Screens/HomeScreen';
import NameTab from './components/NameTab'; 
import AddressTab from './components/AddressTab';
import Colors from './components/Colors'

const initialLayout = { width: Dimensions.get('window').width };

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: '이름' },
    { key: 'second', title: '주소' },
  ]);
 
  const renderScene = SceneMap({
    first: NameTab,
    second: AddressTab,
  });
  const renderLabel = ({ route, focused, color }) => {
    return (
      <View>
        <Text
          style={[focused ? styles.activeTabTextColor : styles.tabTextColor]}
        >
          {route.title}
        </Text>
      </View>
    )
    }
  return (
    <>
    <HomeScreen />
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={props =>
        <TabBar
            {...props}
            style={{ backgroundColor: Colors.bluecolor, height: 55 }}
            indicatorStyle={{ backgroundColor: '#fff', height: 5 }}
            renderLabel={renderLabel}
            />
      }
    />
    <StatusBar barStyle={'light-content'} />
    </>
  );
}
 
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  activeTabTextColor: {
    color: '#fff',
    fontWeight: 'bold'
  },
  tabTextColor: {
    color: '#e8e9e9'
  }
});