import React from "react";
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";
import BackgroundImg from "@assets/background.png";

import LogoSvg from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import * as Yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "@hooks/useAuth";

type SignInDataProps = {
  email: string;
  password: string;
};

const signUpSchema = Yup.object({
  email: Yup.string().email("Email invalido.").required("Informe o email."),
  password: Yup.string()
    .required("Informe a senha.")
    .min(6, "A senha deve ter pelo menos 6 dígitos."),
});

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const { signIn } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  function handleSignIn({ email, password }: SignInDataProps) {
    signIn(email, password);
  }

  function handleNewAccount() {
    navigation.navigate("signUp");
  }
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10}>
        <Image
          source={BackgroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
          defaultSource={BackgroundImg}
        />

        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Acesse suas conta
          </Heading>

          <Controller
            control={control}
            name="email"
            rules={{ required: "Informe o email" }}
            render={({ field: { onChange } }) => (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            rules={{ required: "Informe a senha" }}
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Senha"
                secureTextEntry
                onChangeText={onChange}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Button title="Acessar" onPress={handleSubmit(handleSignIn)} />
        </Center>

        <Center my={24}>
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
            Ainda não tem acesso?
          </Text>
          <Button
            title="Criar conta"
            variant="outline"
            onPress={handleNewAccount}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}
