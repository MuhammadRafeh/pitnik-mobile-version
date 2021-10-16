import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import propTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Entypo';

const Post = props => { //name //dp // time// postTitle// 
    return (
        <View style={[styles.container, { color: props.isDarkMode ? 'white' : 'black' }]}>

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.section1}>

                    <View style={styles.dpContainer}>
                        <Image source={{ uri: props.dp }} style={{ width: 30, height: 30 }} />
                    </View>
                    <View>
                        <View>
                            <Text>{props.name}</Text>
                        </View>
                        <View>
                            <Text>{props.date}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.section2}>
                    <Icon name={'dots-three-horizontal'} size={18} color={props.isDarkMode ? 'white' : 'black'}/>
                </View>

            </View>

            {/* Mid */}
            <View style={styles.post}>
                <View style={styles.postTitle}>
                    <Text numberOfLines={3} adjustsFontSizeToFit={true}>{props.title}</Text>
                </View>

                <View style={styles.postImage}>
                    <Image source={{ uri: props.dp }} style={{width: '100%', height: '100%'}}/>
                </View>
            </View>

            {/* footer */}
            <View style={styles.footer}>
                <View style={styles.action}>
                    <Text style={styles.actionText}>Like</Text>
                </View>
                <View style={styles.action}>
                    <Text style={styles.actionText}>Comment</Text>
                </View>
                <View style={styles.action}>
                    <Text style={styles.actionText}>Share</Text>
                </View>
            </View>

        </View>
    );
}

export default Post;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 400,
        marginVertical: 20,
        marginHorizontal: 10
        // backgroundColor: 'green'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 0.2
    },
    dpContainer: {
        borderRadius: 30,
        borderWidth: 1,
        marginRight: 10,
        overflow: 'hidden'
    },
    section1: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1
    },
    section2: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 20
    },
    post: {
        flex: 1,
        marginRight: 20,
        marginBottom: 10
    },
    footer: {
        flexDirection: 'row',
        flex: 0.1,
        alignItems: 'center'
    },
    action: {
        flex: 1,
        borderRightWidth: 1
    },
    actionText: {
        textAlign: "center"
    },
    postTitle: {
        flex: 0.15,
        // backgroundColor: 'blue',
        justifyContent: 'center',

    },
    postImage: {
        flex: 1,
        // backgroundColor: 'grey',

    }
});

Post.propTypes = {
    dp: propTypes.any,
    name: propTypes.string,
    date: propTypes.string,
    postTitle: propTypes.string,
    image: propTypes.any,
    isDarkMode: propTypes.bool
}
