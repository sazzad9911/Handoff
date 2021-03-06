import React from 'react';
import {
    View, Modal, Text, ScrollView, Image,
    TouchableOpacity, TextInput, Dimensions, Platform
} from 'react-native';
import Screen from '../assets/Screen.png'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const window = Dimensions.get('window')

const SignUp = (props) => {
    const navigation = props.navigation
    const [modalVisible, setModalVisible] = React.useState(false);
    const [isOTP, setOTP] = React.useState(false);

    return (
        <ScrollView>
            <View style={{
                marginTop: Platform.OS == 'ios' ? 40 : 0,
            }}>
                <View>
                    <Image
                        style={{
                            height: 450,
                            width: window.width,
                        }}
                        source={Screen}
                    />
                </View>
                <View>
                    <TouchableOpacity onPress={() => {
                        setOTP(true);
                        setModalVisible(true)
                    }} style={{
                        height: 60,
                        margin: 20,
                        marginTop: '10%',
                        padding: 10,
                        borderRadius: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        shadowOffset: {
                            height: 2, width: 2,
                        },
                        shadowColor: 'black',
                        shadowOpacity: .3,
                        shadowRadius: 10,
                        elevation: 4,
                        backgroundColor: '#FFFFFF',
                    }}>

                        <FontAwesome name="phone-square" size={30} color="red" />
                        <Text style={{
                            color: 'black',
                            fontSize: 18,
                            marginLeft: 20
                        }}>SignUp with OTP</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setOTP(false);
                        setModalVisible(true)
                    }} style={{
                        height: 60,
                        margin: 20,
                        borderRadius: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        shadowOffset: {
                            height: 2, width: 2,
                        },
                        shadowColor: 'black',
                        shadowOpacity: .3,
                        shadowRadius: 10,
                        elevation: 4,
                        backgroundColor: '#FFFFFF',
                    }}>
                        <MaterialIcons name="email" size={30} color="red" />
                        <Text style={{
                            color: 'black',
                            fontSize: 18,
                            marginLeft: 20
                        }}>SignUp with Email</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        height: 60,
                        margin: 20,
                        padding: 10,
                        borderRadius: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        color: 'rgb(100,100,100)',
                        shadowOffset: {
                            height: 2, width: 2,
                        },
                        shadowColor: 'black',
                        shadowOpacity: .3,
                        shadowRadius: 10,
                        elevation: 4,
                        backgroundColor: '#FFFFFF',
                    }}>

                        <Fontisto name="google" size={30} color="red" />
                        <Text style={{
                            color: 'black',
                            fontSize: 18,
                            marginLeft: 20
                        }}>SignUp with Google</Text>
                    </TouchableOpacity>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            fontSize: 20
                        }}>Already a Member?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                            <Text style={{
                                fontSize: 20,
                                color: 'red',
                            }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <Modal animationType="fade"
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(!modalVisible)}>
                    <View>
                        {
                            isOTP ?
                                (
                                    <SignUpWithOtp navigation={navigation} close={setModalVisible} />
                                ) : (
                                    <SignUpWithEmail navigation={navigation} close={setModalVisible} />
                                )
                        }
                    </View>
                </Modal>

            </View>
        </ScrollView>
    );
};

export default SignUp;
const SignUpWithOtp = (props) => {
    const [next, setNext] = React.useState(false)

    if (next) {
        return (
            <View style={{
                marginTop: 40,
            }}>
                <View style={{
                    marginTop: '15%',
                    marginLeft: '85%'
                }}>
                    <TouchableOpacity onPress={() => {
                        props.close(false)
                    }}>
                        <Fontisto name="close-a" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '20%',
                }}>
                    <Text style={{
                        fontSize: 35,
                    }}>SignUp with OTP</Text>
                    <Text style={{
                        fontSize: 15,
                        marginTop: 20,
                        color:'#A7A7A7'
                    }}>Register your new account</Text>
                </View>

                <View >
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}>

                        <TextInput keyboardType='numeric'
                            style={{
                                height: 60,
                                margin: 12,
                                padding: 10,
                                width: 60,
                                borderRadius: 50,
                                marginTop: 50,
                                backgroundColor: '#F5F5F5',
                                fontSize: 20,

                            }}
                        />


                        <TextInput keyboardType='numeric'
                            style={{
                                height: 60,
                                margin: 12,
                                padding: 10,
                                width: 60,
                                borderRadius: 50,
                                marginTop: 50,
                                backgroundColor: '#F5F5F5',
                                fontSize: 20,
                            }}
                        />


                        <TextInput keyboardType='numeric'
                            style={{
                                height: 60,
                                margin: 12,
                                padding: 10,
                                width: 60,
                                borderRadius: 50,
                                marginTop: 50,
                                backgroundColor: '#F5F5F5',
                                fontSize: 20,
                            }}
                        />


                        <TextInput keyboardType='numeric'
                            style={{
                                height: 60,
                                margin: 12,
                                padding: 10,
                                width: 60,
                                borderRadius: 50,
                                marginTop: 50,
                                backgroundColor: '#F5F5F5',
                                fontSize: 20,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        />
                    </View>


                    <TouchableOpacity >
                        <View style={{
                            height: 60,
                            margin: 25,
                            padding: 10,
                            borderRadius: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            backgroundColor: '#FC444B',
                            width:window.width-50
                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 25,
                            }}>SUBMIT</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    } else {
        return (
            <View style={{
                marginTop: 40,
            }}>
                <View style={{
                    marginTop: '15%',
                    marginLeft: '85%'
                }}>
                    <TouchableOpacity onPress={() => props.close(false)}>
                        <Fontisto name="close-a" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '20%',
                }}>
                    <Text style={{
                        fontSize: 35,
                    }}>SignUp with OTP</Text>
                    <Text style={{
                        fontSize: 15,
                        marginTop: 20,
                        color:'#A7A7A7'
                    }}>Register your new account</Text>
                </View>

                <View >
                    <TextInput keyboardType='numeric'
                        style={{
                            height: 60,
                            margin: 25,
                            padding: 10,
                            borderRadius: 50,
                            marginTop: 50,
                            backgroundColor: '#F5F5F5',
                            fontSize: 20,
                            width:window.width-50
                        }}
                        placeholder="Mobile Number"
                    />

                    <TouchableOpacity onPress={() => {
                        setNext(true)
                    }}>
                        <View style={{
                            height: 60,
                            margin: 25,
                            padding: 10,
                            borderRadius: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            backgroundColor: '#FC444B',
                            width:window.width-50,
                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 25,
                            }}>NEXT</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const SignUpWithEmail = (props) => {
    const navigation = props.navigation
    return (
        <ScrollView>
            <View style={{
                marginTop: 40,
            }}>
                <View style={{
                    marginTop: '15%',
                    marginLeft: '85%'
                }}>
                    <TouchableOpacity onPress={() => {
                        props.close(false)
                    }}>
                        <Fontisto name="close-a" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '20%',
                }}>
                    <Text style={{
                        fontSize: 35,
                    }}>Hello, New Member!</Text>
                    <Text style={{
                        fontSize: 15,
                        marginTop: 20,
                        color:'#A7A7A7'
                    }}>Register your new account</Text>
                </View>

                <View >
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>

                        <TextInput placeholder='Name'
                            style={{
                                height: 60,
                                marginHorizontal: 25,
                                padding: 15,
                                borderRadius: 50,
                                marginTop: 30,
                                backgroundColor: '#F5F5F5',
                                fontSize: 18,
                                width: window.width-50

                            }}
                        />

                        <TextInput placeholder='Email'
                            style={{
                                height: 60,
                                marginHorizontal: 25,
                                padding: 15,
                                borderRadius: 50,
                                marginTop: 10,
                                backgroundColor: '#F5F5F5',
                                fontSize: 18,
                                width: window.width-50

                            }}
                        />


                        <TextInput placeholder='Password'
                            style={{
                                height: 60,
                                marginHorizontal: 25,
                                padding: 15,
                                borderRadius: 50,
                                marginTop: 10,
                                backgroundColor: '#F5F5F5',
                                fontSize: 18,
                                width: window.width-50

                            }}
                        />

                    </View>


                    <TouchableOpacity >
                        <View style={{
                            height: 60,
                            marginHorizontal: 25,
                            padding: 10,
                            borderRadius: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            backgroundColor: '#FC444B',
                            shadowOffset: {
                                height: 2, width: 2,
                            },
                            shadowColor: 'black',
                            shadowOpacity: .3,
                            shadowRadius: 10,
                            elevation: 4,
                            width:window.width-50,
                            marginVertical:10
                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 18,
                            }}>SIGNUP</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{
                        width: window.width - 40, height: 2,
                        backgroundColor: '#0000008e', marginLeft: 20
                    }}></View>
                    <TouchableOpacity >
                        <View style={{
                            height: 60,
                            margin: 20,
                            padding: 10,
                            borderRadius: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            shadowOffset: {
                                height: 2, width: 2,
                            },
                            shadowColor: 'black',
                            shadowOpacity: .3,
                            shadowRadius: 10,
                            elevation: 4,
                            backgroundColor: '#FFFFF3',
                        }}>
                            <AntDesign name="google" size={30} color="black" />
                            <Text style={{
                                color: '#000000',
                                fontSize: 18,
                                marginLeft: 30
                            }}>Continue with Google</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '10%'
                    }}>
                        <Text style={{
                            fontSize: 20
                        }}>Already a Member?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                            <Text style={{
                                fontSize: 20,
                                color: 'red',
                            }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
