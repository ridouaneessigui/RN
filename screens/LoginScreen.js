import { Text, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'

const LoginScreen =(props)=> {
    useEffect(()=>{
        console.log("props",props)
    },[]);
    return (
<View style={styles.container}>

<Text>Login Screen</Text>

</View>
    )

}
export default LoginScreen;
const styles = StyleSheet.create({
    container:{

        flex:1,

        borderWidth: 5,

        height:150,

        //marginTop:40,

        //marginLeft:10,

        backgroundColor:"#fffde4",

        flexDirection:"column",

        justifyContent:"center",

        alignItems:"center"

    },
})