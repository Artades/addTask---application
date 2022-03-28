import React, {useRef} from 'react';
import { StyleSheet, Text, View} from "react-native";
import {Animated} from "react-native";



const Chart = ({posts, searchText}) => {
    const newArr =   posts.filter(post => post.isChecked === true)
 let percentOfCompletedTasks =  Math.round((newArr.length / posts.length) * 100 )


    return (
        <View style={{display: searchText !==  '' ? 'none' : 'flex'}}>
            <Text style={styles.chartText}>Analytics</Text>
            <View style={styles.chartWrapper}>
                <View style={styles.chart}>
                    <Animated.View  style={[styles.line, {width: posts.length === 0 && 1 ? '1%'  : `${percentOfCompletedTasks}%`}]}>
                    </Animated.View>
                </View>
                <View style={styles.chartPercent} >
                    <Text style={styles.chartPercentText}>{ posts.length === 0 ? '0' : `${percentOfCompletedTasks}`}%</Text>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    chartWrapper: {
        width: "100%",
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    chartText: {
        fontSize: 18,
        fontWeight: "400",
        marginVertical: 12,
        fontFamily: 'ns-regular'
    },
    chart: {
        width: "80%",
        height: 50,
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fdfdfd',
        elevation: 5,
    },
    line: {

        height: "25%",
backgroundColor: '#52d995',
        borderRadius: 20,
    },
    chartPercent: {
        height: "100%",
        width: "18%",
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#fdfdfd',
        elevation: 5,
    },
    chartPercentText: {
        fontSize: 20
    }

})
export default Chart;