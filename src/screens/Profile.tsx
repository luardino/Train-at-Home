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
import { TouchableOpacity } from 'react-native';
import { Input } from '@components/input';
import { Button } from '@components/button';

const PHOTO_SIZE = 33;

export function Profile() {
    const [photoIsLoading, setPhotoIsLoading] = useState(false);
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
                            source={{ uri: 'https://github.com/luardino.png' }}
                            alt="Profile picture"
                            size={PHOTO_SIZE}
                        />
                    )}
                    <TouchableOpacity>
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
                    <Heading color={'gray.200'} fontSize={'md'} mb={2} mt={12}>
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
