import { useState } from 'react';
import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import {
    Center,
    Heading,
    ScrollView,
    Skeleton,
    Text,
    VStack,
} from 'native-base';
import { Alert, TouchableOpacity } from 'react-native';
import { Input } from '@components/input';
import { Button } from '@components/button';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

const PHOTO_SIZE = 33;

export function Profile() {
    const [photoIsLoading, setPhotoIsLoading] = useState(false);
    const [userPhoto, setUserPhoto] = useState(
        'https://github.com/luardino.png'
    );

    async function handleUserPhotoSelect() {
        setPhotoIsLoading(true);
        try {
            const photoSelected = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
                aspect: [4, 4],
                allowsEditing: true,
            });
            
            if (!photoSelected.canceled) {
                const photoInfo = await FileSystem.getInfoAsync(
                    photoSelected.assets[0].uri
                );

                /*if (photoInfo.size && photoInfo.size / 1024 / 1024 > 5) {
                    Alert.alert(
                        'This photo is very large. Choose another photo up to 5 MB'
                    );
                }
                */

                setUserPhoto(photoSelected.assets[0].uri);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setPhotoIsLoading(false);
        }
    }

    return (
        <VStack flex={1}>
            <ScreenHeader title="Profile" />
            <ScrollView contentContainerStyle={{ paddingBottom: 56 }}>
                <Center mt={6} px={10}>
                    {photoIsLoading ? (
                        <Skeleton
                            height={PHOTO_SIZE}
                            width={PHOTO_SIZE}
                            rounded={'full'}
                            startColor={'gray.500'}
                            endColor={'gray.400'}
                        />
                    ) : (
                        <UserPhoto
                            source={{ uri: userPhoto }}
                            alt="Profile picture"
                            size={PHOTO_SIZE}
                        />
                    )}
                    <TouchableOpacity onPress={handleUserPhotoSelect}>
                        <Text
                            color={'green.500'}
                            fontWeight={'bold'}
                            fontSize={'md'}
                            mt={2}
                            mb={8}
                        >
                            Change photo
                        </Text>
                    </TouchableOpacity>
                    <Input bg={'gray.600'} placeholder="Name" />
                    <Input
                        bg={'gray.600'}
                        placeholder="luardino@icloud.com"
                        isDisabled
                    />
                </Center>
                <VStack px={10} mt={12} mb={9}>
                    <Heading color={'gray.200'} fontSize={'md'} mb={2} mt={12} fontFamily='heading'>
                        Change Password
                    </Heading>
                    <Input
                        bg={'gray.600'}
                        placeholder="Old password"
                        secureTextEntry
                    />
                    <Input
                        bg={'gray.600'}
                        placeholder="New password"
                        secureTextEntry
                    />
                    <Input
                        bg={'gray.600'}
                        placeholder="Confirm new Password"
                        secureTextEntry
                    />
                    <Button title="Update" mt={4} />
                </VStack>
            </ScrollView>
        </VStack>
    );
}
