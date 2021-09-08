import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Tab1 from './tabs/tab1'
import Tab2 from './tabs/tab2'
import Tab3 from './tabs/tab3'

const FirstRoute = () => (
  <Tab1/>
);

const SecondRoute = () => (
  <Tab2/>
);

const ThirdRoute = () => (
  
    <Tab3/>

);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'General' },
    { key: 'second', title: 'Business' },
    { key: 'third', title: 'Technology' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      style={{backgroundColor: 'blue.500'}}
    />
  );
}