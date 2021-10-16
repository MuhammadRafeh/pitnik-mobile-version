import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Entypo';
import Modal from "react-native-modal";

import Autocomplete from 'react-native-autocomplete-input';
import CustomIcon from './CustomIcon';

const Header = props => {
    const [showModal, setShowModal] = useState(false);
    const [text, setText] = useState('');
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
                        <View style={{ borderRadius: 10, backgroundColor: 'white', padding: 20, height: 280, justifyContent: 'center' }}>


                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                                <View>
                                    <Text style={{ color: 'black', fontSize: 18 }}>
                                        Create New Post
                                    </Text>
                                </View>

                                <View style={{ top: -15 }}>
                                    <TouchableOpacity onPress={setShowModal.bind(null, false)}>
                                        <View style={{ width: 20, height: 20, borderRadius: 20, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: 'pink' }}>
                                            <Icons name={'cross'} size={15} color={'pink'} />
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </View>

                            <TextInput
                                value={text}
                                onChangeText={(text) => setText(text)}
                                multiline={true}
                                placeholder='write something'
                                style={{ height: 40, color: 'black', backgroundColor: '#D3D3D3', borderRadius: 10, marginTop: 10, height: 100, justifyContent: 'flex-start' }}
                            />

                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 10 }}>
                                <CustomIcon name={'musical-notes-outline'} />
                                <TouchableOpacity>

                                    <CustomIcon name={'md-image-outline'} />
                                </TouchableOpacity>
                                <CustomIcon name={'ios-videocam-outline'} />
                                <TouchableOpacity>
                                    <CustomIcon name={'md-happy-sharp'} />
                                </TouchableOpacity>

                            </View>

                            <TouchableOpacity>
                                <View style={{ backgroundColor: '#FF8C00', borderRadius: 20, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontWeight: 'bold', color: 'white' }}>
                                        Publish
                                    </Text>
                                </View>
                            </TouchableOpacity>



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
