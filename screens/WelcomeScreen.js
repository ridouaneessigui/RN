import { View, StyleSheet, Text,TouchableOpacity,Button} from "react-native";
import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import MybuttonPrice from './MybuttonPrice'
const WelcomeScreen =(props)=> {
    const goTo= () => {
        props.navigation.push("Login",{
            name:"Toto",
            age:42
        })
    }
      
   return(
    <View style={styles.container}>
        <Text>Welcome Screen</Text>
        <TouchableOpacity onPress={goTo}>
            <View style={styles.boutton}>
                <Text>Aller à Home</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}
export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        ImageBackgroundColor: "lightgrey"
      },
})