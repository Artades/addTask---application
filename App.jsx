import {ScrollView, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React, {useMemo, useState} from "react";
import Header from "./screenA/components/Header";
import Posts from "./screenA/components/Posts";
import Form from "./screenA/components/Form";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Chart from "./screenA/components/Chart";



const addFonts = () => Font.loadAsync({
    'ns-bold': require('./assets/fonts/NotoSans-Bold.ttf'),
    'ns-regular': require('./assets/fonts/NotoSans-Regular.ttf')
})
export default function App() {
    ///////////////////////
    let [font, setFont] = useState(false);
    let [posts, setPosts] = React.useState([
        {
            id: 1,
            text: 'Prepare for IELTS',
            isChecked: false,
        },
    ]);
    let [text, setText] = React.useState("");
    let [searchText, setSearchText] = React.useState("");
    let [isEnabled, setIsEnabled] = useState(false);
    const searchPosts = useMemo(() => {
        return posts.filter((e)=> e.text.toLowerCase().includes(searchText.toLowerCase()))
    },[searchText, posts])

    const completeTask = (item) => {
        let newPosts = searchPosts.map(i => {
            if(i.id === item.id){
                return {...i,isChecked: true}
            }
            return i
        })
        setPosts(newPosts)
    };
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const addText = (value) => setText(value);
    const addSearch = (value) => setSearchText(value);
    const removePost = (post) => {
        return setPosts(searchPosts.filter(i => i.id !== post.id))
    };
    const addPost = (e) => {
        if (!text) {
            alert('Fill in the input field')
            return
        }
        const newPost = {
            id: Date.now(),
            text,
            isChecked: false,
            type: ''
        }
        setPosts([...posts, newPost]);
        setText('')
        setModalVisible(false)
    };
    const [modalVisible, setModalVisible] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false);
    ///////////////////////
    if (font) {
        return (
            <ScrollView style={[{backgroundColor:'#f9f9fd'},styles.app]} >
                <Header isEnabled={isEnabled} toggleSwitch={toggleSwitch} searchText={searchText} setSearchText={setSearchText} addSearch={addSearch} setModalVisible={setModalVisible} searchVisible={searchVisible} setSearchVisible={setSearchVisible}/>
                <View style={[styles.container, {backgroundColor:'#f9f9fd',}]}>
                    <Text style={styles.helloText}>What's up, Artyom</Text>
                    <Chart posts={searchPosts}  />
                    <Posts posts={searchPosts} text={text} setText={setText} setPosts={setPosts} removePost={removePost} addFonts={addFonts} font={font} setFont={setFont} completeTask={completeTask}/>
                    <Form addPost={addPost} addText={addText} text={text} setText={setText} setPosts={setPosts} addFonts={addFonts} font={font} setFont={setFont} setModalVisible={setModalVisible} modalVisible={modalVisible} />

                </View>

            </ScrollView>
        );
    }else{
        return(
          <AppLoading
          startAsync={addFonts}
          onFinish={() => setFont(true)}
          onError={console.warn}
          />
        )
    }
}
const styles = StyleSheet.create({
app:{
    height: "auto"
},
    container: {
        backgroundColor: '#fff',
        marginHorizontal: 16,

    },
helloText: {
  fontSize: 24,
  fontFamily: 'ns-bold',
    marginVertical: 20,
},


});