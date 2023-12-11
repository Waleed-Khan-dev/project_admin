import {ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import {Colors} from '../../constant/colors';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const PlaceFoam = () => {
  const openCamera = async () => {
    const result = await launchCamera({mediaType: 'photo'});
    console.log(result);
  };

  const openGallery = async () => {
    const result = await launchImageLibrary({mediaType: 'photo'});
    console.log(result);
  };

  const [enteredTitle, setEnteredTitle] = useState('');

  const changeTitleHandler = enteredTitle => {
    setEnteredTitle(enteredTitle);
  };

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              width: 200,
              height: 50,
              borderWidth: 0.5,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor : 'blue'
            }}
            onPress={() => {
              openCamera();
            }}>
            <Text style={{color : 'white'}}>Open Camera</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              width: 200,
              height: 50,
              borderWidth: 0.5,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor : 'blue'
            }}
            onPress={() => {
              openGallery();
            }}>
            <Text style={{color : 'white'}}>Open Gallery</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default PlaceFoam;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
