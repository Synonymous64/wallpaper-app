import { View, Image, ActivityIndicator, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { getItemById, urlFor } from '../sanity';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import moment from 'moment';

const Item = ({ route }) => {
    const id = route?.params?.param;
    // console.log(id);
    const navigation = useNavigation();

    const [isLoading, setIsLoading] = useState(false);
    const [item, setItem] = useState(null);

    useEffect(() => {
        setIsLoading(true);

        getItemById(id).then(data => setItem(data)).catch(err => alert(err));

        setInterval(() => {
            setIsLoading(false);
        }, 2000);
    }, [])

    // console.log(item?.image);

    const handleDownload = async () => {
        let date = moment().format('YYYYMMDDhhmmss')
        let fileUri = FileSystem.documentDirectory + `${date}.jpg`;
        try {
            const res = await FileSystem.downloadAsync(urlFor(item?.image).url(), fileUri)
            saveFile(res.uri)
        } catch (err) {
            console.log("FS Err: ", err)
        }
    }

    const saveFile = async (fileUri) => {
        const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
        if (status === "granted") {
            try {
                const asset = await MediaLibrary.createAssetAsync(fileUri);
                const album = await MediaLibrary.getAlbumAsync('Download');
                if (album == null) {
                    await MediaLibrary.createAlbumAsync('Download', asset, false);
                    alert('Image Saved');
                } else {
                    await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
                    alert('Image Saved');
                }
            } catch (err) {
                console.log("Save err: ", err)
            }
        } else if (status === "denied") {
            alert("please allow permissions to download")
        }
    }

    return (
        <View className="flex-1 items-center justify-center bg-[#04020d] relative">
            {isLoading ? (<ActivityIndicator color="#ff0000" size="large" />) : (
                <>
                    {item && (
                        <>
                            <Image source={{ uri: urlFor(item?.image).url() }} className="w-full h-full object-cover" />
                            <SafeAreaView className="absolute z-10 inset-0 flex items-center justify-start mt-12">
                                <TouchableOpacity className="w-full flex px-4" onPress={() => navigation.navigate("HomeScreen")}>
                                    <Ionicons name="arrow-back-circle" size={32} color="white" />
                                </TouchableOpacity>
                                <View className="w-full h-full relative">
                                    <View className="absolute bottom-12 inset-x-0 px-4">
                                        <BlurView
                                            className="p-4 flex-row items-center justify-between"
                                            intensity={60}
                                            tint="dark"
                                        >
                                            <View className="flex items-start justify-between gap-3">
                                                <Text className="text-2xl text-white font-bold">{item?.title}</Text>
                                                <Text className="text-white font-bold">{item?.description}</Text>
                                            </View>
                                            <TouchableOpacity onPress={handleDownload}>
                                                <AntDesign name="clouddownloado" size={29} color="white" />
                                            </TouchableOpacity>
                                        </BlurView>
                                    </View>
                                </View>
                            </SafeAreaView>
                        </>
                    )}
                </>
            )}
        </View>
    )
}


export default Item;