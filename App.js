import { Text,SafeAreaView,View,StyleSheet,TextInput,Image,ScrollView,FlatList} from 'react-native'
import React ,{useState}from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const stack=createStackNavigator();
import LoginScreen from './screens/LoginScreen'
import WelcomeScreen from './screens/WelcomeScreen'
console.log('stack',stack);

/* const Data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
]; */

const App=()=>{
  /* const [text, settext] = useState(); */
    return (
  /*      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>App Books {text}</Text>
        <TextInput
        style={styles.input}
        placeholder="Entrer "
        value={text}
        onChangeText={(value)=>settext(value)}
      />
      <Image source={require('./assets/favicon.png')}/>
      </View>
      </ScrollView>  */
/*       <FlatList
        data={Data}
        renderItem={(item)=><Text>{item.item.title}</Text>}
        keyExtractor={item => item.id.toString()}
             <View style={styles.container}>
      </View>
      /> */
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name="Welcome" component={WelcomeScreen}/>
          <stack.Screen name="Login" component={LoginScreen}/>
        </stack.Navigator>
      </NavigationContainer>
    )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 24,
    backgroundColor: "#eaeaea"
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
export default App