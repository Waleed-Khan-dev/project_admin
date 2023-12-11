import { StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'

const IconButton = ({ icon, size, color, onPress }) => {
    return (
        <Pressable style={({ pressed }) => [
            styles.button, pressed && styles.pressed
        ]}
            onPress={onPress}
        >
            <Image source={require('../../images/plus.png')} style={styles.icon}/>
            {/* <Ionicons name={icon} size={size} color={color} /> */}
        </Pressable>
    )
}

export default IconButton

const styles = StyleSheet.create({
    button: {
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pressed: {
        opacity: 0.7,
    },
    icon: {
        width: 24,
        height: 24,
      },
})