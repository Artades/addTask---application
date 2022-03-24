import React from 'react';
import { Modal, StyleSheet, TextInput, View} from "react-native";
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';



const Header = ({setModalVisible, searchVisible,setSearchVisible, searchText ,setSearchText ,addSearch}) => {


    return (
        <View style={styles.header}>

            <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'row'}}>
                    <AntDesign name="search1" size={24} color="black" style={{marginRight: 10}} onPress={() => setSearchVisible(true)}/>
                    {/*/////////////////////////////////////////////////////////*/}
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={searchVisible}
                        onRequestClose={() => {
                            setSearchVisible(!searchVisible);
                        }}
                    >
                        <View style={styles.modal}>
                            <View style={styles.modalWrapper}>
                                <TextInput placeholder={'Search...'} style={{width: '90%'}}  value={searchText} onChangeText={addSearch}/>
                                <EvilIcons name="close" size={24} color="black" onPress={() => setSearchVisible(false)} />
                            </View>
                        </View>
                    </Modal>
                    {/*/////////////////////////////////////////////////////////*/}
                </View>

                <AntDesign onPress={() => setModalVisible(true)} name="pluscircleo" size={24} color="black" />
            </View>
            <Ionicons name="settings-outline" size={24} color="black" />
        </View>
    )
};
const styles = StyleSheet.create({
    logo: {
        width: 60,
        height: 60,

    },
    header: {
        marginTop: 20,
        width: '100%',
        height: 90,
        backgroundColor: '#f9f9fd',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 25,
        paddingHorizontal: 15,

    },
    modal: {
       marginHorizontal: 15,
        marginVertical:  10,

    },

    modalWrapper: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#fdfdfd',
        marginBottom: 15,
        elevation: 5,
        shadowColor: "#52d995",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.9,
        shadowRadius: 4,
        borderWidth: 2,
        borderColor: '#52d995',
        height: 50,
    }
    })
export default Header;