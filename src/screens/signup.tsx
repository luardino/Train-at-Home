import React from 'react';
import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';
import BackGroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';
import { Input } from '@components/input';
import { Button } from '@components/button';
import { useNavigation } from '@react-navigation/native';

export function SignUp() {
    const navigation = useNavigation();
    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <VStack flex={1} px={10} pb={16}>
                <Image
                    source={BackGroundImg}
                    defaultSource={BackGroundImg}
                    alt="People Training"
                    resizeMode="contain"
                    position="absolute"
                />

                <Center my={24}>
                    <LogoSvg />
                    <Text color="gray.100" fontSize="sm">
                        Train your mind and body
                    </Text>
                </Center>

                <Center>
                    <Heading
                        color="gray.100"
                        fontSize="xl"
                        mb={6}
                        fontFamily="heading"
                    >
                        Create your account
                    </Heading>
                    <Input placeholder="Name" />
                    <Input
                        placeholder="E-mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <Input placeholder="Password" secureTextEntry />
                    <Button title="Create and access" />
                </Center>
                <Button
                    title="Back to login"
                    variant="outline"
                    mt={24}
                    onPress={handleGoBack}
                />
            </VStack>
        </ScrollView>
    );
}
