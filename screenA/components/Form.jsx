import React from 'react';
import { Modal, Platform, Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import AppLoading from "expo-app-loading";
import {KeyboardAvoidingView, TextInput} from "react-native";

const Form = ({addPost, addText, text, font, addFonts, setFont, modalVisible, setModalVisible}) => {

    if (font) {
        return (
            <View style={styles.formWrapper}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.modal}>
                        <View style={styles.modalWrapper}>
                            <Text style={styles.modalText}>Create your task</Text>
                            <KeyboardAvoidingView
                                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                                style={styles.form}
                             keyboardVerticalOffset={false}>

                                <TextInput
                                    style={styles.inp}
                                    placeholder={'Create your note'}
                                    value={text}
                                    onChangeText={addText}

                                />
                                <TouchableOpacity style={styles.buttonModal} onPress={addPost}>
                                        <Text style={styles.buttonText2}>
                                            New task
                                        </Text>
                                </TouchableOpacity>

                            </KeyboardAvoidingView>

                        </View>
                    </View>
                </Modal>

            </View>


        )
    } else {
        return (
            <AppLoading
                startAsync={addFonts}
                onFinish={() => setFont(true)}
                onError={console.warn}
            />
        )
    }
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
    form: {
        width: '100%',
        display: 'flex',


    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#47a7f5',
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },


    buttonText2: {
        fontSize: 18,
        fontWeight: '100',
        color: '#ebebf1',
    },

    /////
    modal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    formWrapper: {

    },
    modalWrapper: {
        backgroundColor: "#f9f9fd",
        borderRadius: 5,
        padding: 35,
        alignItems: "center",
        // shadowColor: "#000",
        width: '100%',
        height: "100%",
        
        // shadowOffset: {
        //     width: 0,
        //     height: 2
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 5
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


    modalText: {
        paddingHorizontal: 55,
        paddingVertical: 10,
        marginBottom: 15,
        fontSize: 24,
        borderBottomColor: '#303036',
        borderBottomWidth: 2
    }


});
export default Form;

