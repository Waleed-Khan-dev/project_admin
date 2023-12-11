import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PlaceItem = ({ place, onSelect }) => {
    return (
        <Pressable onPress={onSelect}>
            <View>
                <Text>{place.title}</Text>
                <Text>{place.address}</Text>
            </View>
        </Pressable>
    )
}

export default PlaceItem

const styles = StyleSheet.create({})