import { PermissionsAndroid } from 'react-native';

const mediaPer = async () => {
    const granteds = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
            title: 'PitNik',
            message:
                'App requires to write external storage ' +
                'so you can make awesome documents.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
        },
    );
    if (granteds === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
    } else {
        return false;
    }
}


export const openGalleryApi = async () => {
    const bool = await mediaPer();
    if (!bool) {
        return false;
    }

    try {
        const res = await DocumentPicker.pickMultiple({
            type: [DocumentPicker.types.images],
        });

        const listOfUri = [];
        res.forEach((obj) => {
            listOfUri.push({ uri: obj.fileCopyUri, id: id++ });
        });
        return listOfUri;
    } catch (e) {
        // error
    }
};