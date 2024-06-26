import React from 'react';
import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';
import BackGroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';
import { Input } from '@components/input';
import { Button } from '@components/button';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type formDataProps = {
    name: string;
    email: string;
    Password: string;
    Confirm_Password: string;
};

const signUpSchema = yup.object({
    name: yup.string().required('Enter your name.'),
    email: yup.string().required('Enter your e-mail.').email('Invalid e-mail.'),
    Password: yup.string().required('Enter your password.').min(6, 'The password must have at least 6 digits.'),
    Confirm_Password: yup.string().required('Confirm the password.').oneOf([yup.ref('Password')], 'Different password confirmation.' ),
});

export function SignUp() {
    const navigation = useNavigation();
    function handleGoBack() {
        navigation.goBack();
    }

    function handleSignUp({
        name,
        email,
        Password,
        Confirm_Password,
    }: formDataProps) {
        console.log({ name, email, Password, Confirm_Password });
    }

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<formDataProps>({resolver: yupResolver(signUpSchema)})

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
                    <Controller
                        control={control}
                        name="name"
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="Name"
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.name?.message}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="E-mail"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.email?.message}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="Password"
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="Password"
                                secureTextEntry
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.Password?.message}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="Confirm_Password"
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="Confirm the password"
                                secureTextEntry
                                onChangeText={onChange}
                                value={value}
                                onSubmitEditing={handleSubmit(handleSignUp)}
                                returnKeyType="send"
                                errorMessage={errors.Confirm_Password?.message}
                            />
                        )}
                    />

                    <Button
                        title="Create and access"
                        onPress={handleSubmit(handleSignUp)}
                    />
                </Center>
                <Button
                    title="Back to login"
                    variant="outline"
                    mt={12}
                    onPress={handleGoBack}
                />
            </VStack>
        </ScrollView>
    );
}
