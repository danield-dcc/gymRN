import { Heading, HStack, Text, VStack, Icon } from "native-base";
import { UserPhoto } from "./UserPhoto";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import defaultUserPhotoImg from "@assets/userPhotoDefault.png";

import { useAuth } from "@hooks/useAuth";
import { api } from "@services/api";

export function HomeHeader() {
  const { user, signOut } = useAuth();

  console.log(user.avatar);

  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        // source={{ uri: "https://github.com/danield-dcc.png" }}
        source={
          user.avatar
            ? { uri: `${api.defaults.baseURL}/avatar/${user.avatar}` }
            : defaultUserPhotoImg
        }
        alt="Imagem do usuário"
        size={16}
        mr={4}
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá
        </Text>
        <Heading color="gray.100" fontSize="md" fontFamily={"heading"}>
          {user.name}
        </Heading>
      </VStack>

      <TouchableOpacity onPress={signOut}>
        {/* utilizando a lib de icons é necessário utilizar o componente Icon */}
        <Icon as={MaterialIcons} name="logout" color="gray.300" />
      </TouchableOpacity>
    </HStack>
  );
}
