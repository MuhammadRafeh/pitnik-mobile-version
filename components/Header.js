import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Entypo';
import Modal from "react-native-modal";

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={setShowModal.bind(null, true)}>
                    <View style={styles.iconContainer}>
                        <Icon name={'add'} size={30} color={'pink'} />
                    </View>
                </TouchableOpacity>
            </View>

            <View>
                <Modal isVisible={showModal} useNativeDriver={true} onBackButtonPress={setShowModal.bind(null, false)}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <View style={{ borderRadius: 10, backgroundColor: 'white', padding: 20, height: 300 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={{ color: 'black' }}>
                                        Create New Post
                                    </Text>
                                </View>

                                <View style={{ top: -8 }}>
                                    <TouchableOpacity onPress={setShowModal.bind(null, false)}>
                                        <View style={{ width: 20, height: 20, borderRadius: 20, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: 'pink' }}>
                                            <Icons name={'cross'} size={15} color={'pink'} />
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'blue',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
