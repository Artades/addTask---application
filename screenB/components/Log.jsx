import React from 'react';
import {
    View,
    StyleSheet,

    KeyboardAvoidingView,
    Platform,
    TextInput,
    TouchableOpacity, Text
} from "react-native";

const Log = ({navigation}) => {
    // const addText = (value) => setText(value);
    // let [text, setText] = React.useState("");
     return (
          <View>


                  <TextInput
                      style={styles.inp}
                      placeholder={'Enter your name'}
                  />

                  <TouchableOpacity style={styles.buttonModal} onPress={() => navigation.navigate('Main')}>
                      <Text style={styles.buttonText2}>
                          Get Started
                      </Text>
                  </TouchableOpacity>


          </View>
    );
 };
const styles = StyleSheet.create({
    inp: {
        width: '100%',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fdfdfd',
        elevation: 7,
        fontFamily: 'ns-regular',
        marginBottom: 15,
        shadowColor: "#0d0d10",
        shadowOffset: {
            width: 2,
            height: 5
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,

    },
    buttonModal: {
        width: '100%',
        height: 55,
        borderRadius: 10,
        backgroundColor: '#47a7f5',
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        shadowColor: '#47a7f5',
        shadowOffset: {
            width: 2,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
    },


})
export default Log;

