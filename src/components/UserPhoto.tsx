import { Image, IImageProps } from "native-base";

type Props = {
  size: number;
} & IImageProps;

export function UserPhoto({ size, ...props }: Props) {
  return (
    <Image
      w={size}
      h={size}
      rounded="full"
      borderWidth={2}
      borderColor="gray.400"
      {...props}
    />
  );
}
