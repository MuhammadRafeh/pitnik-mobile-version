import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions, Keyboard, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Entypo';
import Modal from "react-native-modal";

import { launchImageLibrary } from 'react-native-image-picker';

const { height } = Dimensions.get('window')

import EmojiSelector, { Categories } from "react-native-emoji-selector";
import CustomIcon from './CustomIcon';

const Header = props => {
    const [showModal, setShowModal] = useState(false);
    const [text, setText] = useState('');
    const [isShowEmoji, setIsShowEmoji] = useState(false);
    const [pic, setPic] = useState(null);

    const onCloseModal = () => {
        setShowModal(false);
        setIsShowEmoji(false);
        setText('');
        setPic(null);
    }

    const handleImageGallery = () => {
        console.log('2')
        launchImageLibrary({
            mediaType: 'photo'
        }, (response) => {
            if (response.didCancel) {
            } else if (response.error) {
            } else if (response.customButton) {
            } else {
                setPic(response.assets[0].uri)
            }
        })
    }

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={setShowModal.bind(null, true)}>
                    <View style={styles.iconContainer}>
                        <Icon name={'add'} size={30} color={'#FF8C00'} />
                    </View>
                </TouchableOpacity>
            </View>

            <View>
                <Modal isVisible={showModal} useNativeDriver={true} onBackButtonPress={setShowModal.bind(null, false)}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <View style={{ borderRadius: 10, backgroundColor: 'white', padding: 20, height: pic ? 280 + 120 : 280, justifyContent: 'center' }}>


                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                                <View>
                                    <Text style={{ color: 'black', fontSize: 18 }}>
                                        Create New Post
                                    </Text>
                                </View>

                                <View style={{ top: -18 }}>
                                    <TouchableOpacity onPress={onCloseModal}>
                                        <View style={{ width: 20, height: 20, borderRadius: 20, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: '#FF8C00' }}>
                                            <Icons name={'cross'} size={15} color={'#FF8C00'} />
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </View>

                            <TextInput
                                onFocus={setIsShowEmoji.bind(null, false)}
                                value={text}
                                onChangeText={(text) => setText(text)}
                                multiline={true}
                                placeholder='write something'
                                placeholderTextColor='#4f5752'
                                style={{ height: 40, color: 'black', paddingHorizontal: 10, textAlignVertical: 'top', backgroundColor: '#D3D3D3', borderRadius: 10, marginTop: 10, height: 100, justifyContent: 'flex-start' }}
                            />

                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 10 }}>
                                <CustomIcon name={'musical-notes-outline'} />
                                <TouchableOpacity onPress={handleImageGallery}>

                                    <CustomIcon name={'md-image-outline'} />
                                </TouchableOpacity>
                                <CustomIcon name={'ios-videocam-outline'} />
                                <TouchableOpacity onPress={() => {
                                    setIsShowEmoji(true);
                                    Keyboard.dismiss();
                                }}>
                                    <CustomIcon name={'md-happy-sharp'} />
                                </TouchableOpacity>

                            </View>

                            {
                                pic && (
                                    <View style={{ height: 100, marginBottom: 10, alignItems: 'center', borderWidth: 1 }}>
                                        <Image source={{ uri: pic }} style={{ width: '80%', height: '100%' }} resizeMode="contain" />
                                    </View>
                                )
                            }


                            <TouchableOpacity onPress={() => {
                                props.addPosts({ name: 'rafeh', img: pic, title: text });
                                onCloseModal();
                            }}>
                                <View style={{ backgroundColor: '#FF8C00', borderRadius: 20, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontWeight: 'bold', color: 'white' }}>
                                        Publish
                                    </Text>
                                </View>
                            </TouchableOpacity>



                        </View>

                        {
                            isShowEmoji && (
                                <View style={{ bottom: 0, left: 0, right: 0, height: height / 2.18 }}>
                                    <TouchableOpacity onPress={setIsShowEmoji.bind(null, false)}>
                                        <View style={{ width: 20, height: 20, borderRadius: 20, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: '#FF8C00', alignSelf: 'flex-end', marginBottom: 10 }}>
                                            <Icons name={'cross'} size={15} color={'#FF8C00'} />
                                        </View>
                                    </TouchableOpacity>

                                    <EmojiSelector
                                        category={Categories.symbols}
                                        onEmojiSelected={emoji => {
                                            setText(text + `${emoji}`)
                                        }}

                                    />
                                </View>
                            )
                        }
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
