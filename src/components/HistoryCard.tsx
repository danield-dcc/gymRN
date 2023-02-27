import { HistoryDTO } from "@dtos/HistoryDTO";
import { Heading, HStack, VStack, Text } from "native-base";

type Props = {
  data: HistoryDTO;
};

export function HistoryCard({ data }: Props) {
  return (
    <HStack
      w="full"
      px={5}
      py={4}
      mb={3}
      bg="gray.600"
      rounded="md"
      alignItems="center"
      justifyContent="space-between"
    >
      <VStack mr={5}>
        <Heading
          color="white"
          fontSize="md"
          textTransform="capitalize"
          flex={1}
          fontFamily={"heading"}
        >
          {data.group}
        </Heading>

        <Text color="white" fontSize="md" numberOfLines={1}>
          {data.name}
        </Text>
      </VStack>

      <Text color="gray.300" fontSize="md">
        {data.hour}
      </Text>
    </HStack>
  );
}
