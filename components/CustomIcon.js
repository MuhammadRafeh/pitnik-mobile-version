import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomIcon = props => {
    return (
        <View style={{ width: 25, height: 25, borderRadius: 25, backgroundColor: '#D3D3D3', justifyContent: 'center', alignItems: 'center', borderColor: 'pink', marginRight: 16 }}>
            <Icon name={props.name} size={15} color={'black'} />
        </View>
    );
}

export default CustomIcon;
