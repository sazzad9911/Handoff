import React from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions, Button, TouchableOpacity, TextInput } from 'react-native'
import { FontAwesome, AntDesign } from '@expo/vector-icons';
const window = Dimensions.get('window')

const CheckOut = (props) => {
    const params = props.route.params

    return (
        <ScrollView>
            <View style={styles.main}>
                <View>
                    <Text style={styles.text1}>Start your 30-days trial now!</Text>
                    <Text style={styles.text2}>We won't charge you today.Your payment day will be on{" "}
                        <Text style={[styles.text3,{color:params.color}]}>April 5,2022.</Text>
                    </Text>
                </View>
                <View style={styles.box}>
                    <View style={styles.logo1}>
                        <FontAwesome name="rupee" size={24} color="black" /><Text><Text style={styles.rupee}>2999</Text>/2 years</Text>
                    </View>
                    <View style={styles.logo1}>
                        <AntDesign name="checkcircle" size={24} color={params.color} /><Text style={styles.underrupee}>Stays upto 40 nights</Text>
                    </View>
                    <View style={styles.logo1}>
                        <AntDesign name="checkcircle" size={24} color={params.color} /><Text style={styles.underrupee}>Valid on any 5 hotels</Text>
                    </View>
                    <View style={styles.logo1}>
                        <AntDesign name="checkcircle" size={24} color={params.color} /><Text style={styles.underrupee}>Family access upto 3 accounts</Text>
                    </View>
                    <View style={styles.logo1}>
                        <AntDesign name="checkcircle" size={24} color={params.color} /><Text style={styles.underrupee}>10 days prior to reservation</Text>
                    </View>
                    <View style={styles.logo1}>
                        <AntDesign name="checkcircle" size={24} color={params.color} /><Text style={styles.underrupee}>Weekends booking</Text>
                    </View>
                    <View style={styles.logo1}>
                        <AntDesign name="checkcircle" size={24} color={params.color} /><Text style={styles.underrupee}>Peak days booking</Text>
                    </View>
                </View>
                <View style={{ width: window.width }}>
                    <Text style={styles.underboxtext}>Payment Method</Text>
                </View>
                <TouchableOpacity>
                    <View style={[styles.button1,{backgroundColor:params.color}]}>
                        <Text style={styles.button1text}>TRY IT FOR 30 DAYS</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.card}>
                    <Text style={styles.text2}>Card Number</Text>
                    <TextInput style={styles.input} placeholder='0000 0000 0000 0000' />
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}>
                            <Text style={styles.text2}>Expiry Date</Text>
                            <TextInput style={styles.input} placeholder='MM/YY' />
                        </View>
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <Text style={styles.text2}>CVV</Text>
                            <TextInput style={styles.input} placeholder='....' />
                        </View>
                    </View>
                </View>
                <TextInput style={styles.input1} placeholder='Promo Code' />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    main: {
        padding: 5,
        alignItems: "center",
        width: window.width,
    },


    text1: {
        fontSize: 25,
        margin: 10,
        justifyContent: "center",
        alignItems: "center"
    },

    text2: {
        fontSize: 17,
        margin: 10
    },

    text3: {
        color: "red",
    },

    box: {
        marginTop: 25,
        borderRadius: 15,
        justifyContent: "center",
        borderWidth: 1,
        width: window.width - 30,
        padding: 30,
        borderColor: '#808080'
    },

    logo1: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 5
    },

    rupee: {
        fontSize: 35,
    },

    underrupee: {
        fontSize: 17,
        marginLeft: 15
    },

    underboxtext: {
        fontSize: 15,
        fontWeight: "bold",
        margin: 25
    },

    button1: {
        height: 60,
        width: window.width - 30,
        backgroundColor: '#FA454B',
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center"
    },

    button1text: {
        fontSize: 15,
        color: `#ffffff`,
        textAlign: "center"
    },

    card: {
        width: window.width - 30,
        marginTop: 25,
        borderRadius: 10,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        padding: 10,
        borderColor: '#323232b7'
    },
    input: {
        height: 50,
        backgroundColor: 'rgba(255,255,255,1)',
        borderRadius: 30,
        padding: 10,
        fontSize: 18
    },
    input1: {
        height: 50,
        backgroundColor: 'rgba(255,255,255,.2)',
        borderRadius: 10,
        padding: 10,
        fontSize: 18,
        borderWidth:1,
        width:window.width - 30,
        marginVertical:10,
        borderColor:'#323232b7'
    }


});

export default CheckOut;