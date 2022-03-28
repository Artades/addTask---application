import React from 'react';
import {View, Text, Pressable, StyleSheet} from "react-native";


const Settings = () => {
    return (

           <View style={styles.settings}>
               <Pressable style={styles.settingsItem}>
                   <Text style={styles.itemText}>
                       Info
                   </Text>
               </Pressable>
               <Pressable style={styles.settingsItem}>
                   <Text style={styles.itemText}>
                      Creators
                   </Text>
               </Pressable>
               <Pressable style={styles.settingsItem}>
                   <Text style={styles.itemText}>
                       Theme
                   </Text>
               </Pressable>
               <Pressable style={styles.settingsItem}>
                   <Text style={styles.itemText}>
                      Other
                   </Text>
               </Pressable>
               <Pressable style={styles.settingsItem}>
                   <Text style={styles.itemText}>
                      Terms
                   </Text>
               </Pressable>
           </View>

    );
};
const styles = StyleSheet.create({
settings:{

    width: '100%',
    marginHorizontal: 10,
    backgroundColor: '#f9f9fd'
},
    settingsItem:{
    width: '100%',
    backgroundColor: '#fff',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
        marginVertical: 5,
    },
    itemText:{
    fontSize: 20,
    },
})
export default Settings;