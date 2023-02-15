import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../components/Home';
import Destcontent from '../components/destcomps/destcontent';
import Dest from '../components/Dest';
import Liv from "../components/Liv";
const screens = {
  Home: {
    screen: Home,
  },
  Destinataire: {
    screen: Dest,
  },
  Livreur: {
    screen: Liv,
  },
};

const HomeStack = createStackNavigator(screens, {
  headerMode: "none",
  navigationOptions: {
    headerVisible: false,
  },
});

export default createAppContainer(HomeStack);