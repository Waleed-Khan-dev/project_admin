import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Admin Login</Text>
            <TextInput style={styles.inputStyle} placeholder='Enter Email Id' />
            <TextInput style={styles.inputStyle} placeholder='Enter Password' />
            <TouchableOpacity style={styles.loginbtn}>
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: "800",
        color: "black",
        marginTop: 100,
        alignSelf: 'center',
    },
    inputStyle: {
        paddingLeft: 20,
        height:50,
        alignSelf:'center',
        marginTop: 30,
        borderWidth: 0.5,
        borderRadius: 10,
        width: '90%'
    },
    loginbtn:{
        backgroundColor: 'deepskyblue',
        height:50,
        alignSelf:'center',
        marginTop: 50,
        borderRadius: 10,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText:{
        fontSize: 16,
        fontWeight: '600',
        color: 'black'
    }
})