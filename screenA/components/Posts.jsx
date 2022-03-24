import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import AppLoading from "expo-app-loading";

const Posts = ({posts, removePost, setPosts, addFonts, font, setFont, completeTask}) => {


if(font) {


    return (
        <View style={styles.posts}>
            <View style={styles.postsInfo}>
                <Text style={styles.postsText}>Today's tasks</Text>
                <Text style={styles.postsLength}>
                   | {posts.length} |
                </Text>
            </View>
            {
                posts.map((post, idx) => {
                    return (
                        <TouchableOpacity
                            onPress={() => removePost(post)}
                            style={styles.post}
                            key={idx}>
                            <Text style={[styles.x , {backgroundColor: post.isChecked ? '#307e53' : '#fdfdfd'}]} onPress={() => completeTask(post)}>

                            </Text>
                            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <Text
                                    style={ { fontFamily: 'ns-regular', marginLeft: 10, textDecorationLine: post.isChecked ? 'line-through' : 'none', color: post.isChecked ? '#a2b9bd' : '#0e0e0e'}}>
                                    {post.text}
                                </Text>
                            </View>



                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}else{
    return(
        <AppLoading
            startAsync={addFonts}
            onFinish={() => setFont(true)}
            onError={console.warn}
        />
    )
}
};
const styles = StyleSheet.create({
    posts: {
        marginTop: 10,
        paddingVertical: 10
    },
    postsInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    postsText: {
        fontSize: 18,
        fontWeight: "400",
        marginVertical: 12,
        fontFamily: 'ns-regular'

    },
    postsLength: {
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'ns-regular'
    },
    post: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#fdfdfd',
        marginBottom: 15,
        elevation: 5,

    },
    x: {
        width:20,
        height: 20,
        borderRadius:20,
        borderWidth: 3,
        borderColor: '#52d995',
        fontWeight: "700",
    },

})
export default Posts;