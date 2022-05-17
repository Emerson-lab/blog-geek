import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import ImageCard from "./ImageCard";
import { honrizontal_cards } from "../../components-mock.json"

type HorizontalCardProps = {
  card: {
    title: string;
    content: string;
    publishData: string;
  }
}

export default function HorizontalCard({ card }: HorizontalCardProps) {
  const { title, content, publishData } = card;

  return (
    <Flex
      maxW="850px"
      maxH="400px"
      borderRadius="8px"
      bgColor="gray.100"
    >
      {honrizontal_cards.map(imageCard => (
        <ImageCard imageCard={imageCard} />
      ))}
      <VStack
        p="16px"
        spacing="16px"
        align="flex-start"
        maxW="350px"
        minW="200px"
        h={["200px", "300px", "400px"]}
        overflowY="auto"
      >
        <Text
          color="gray.500"
          fontWeight="semibold"
          fontSize="14px"
        >
          {publishData}
        </Text>
        <Heading size="lg">{title}</Heading>
        <Text overflowY="auto">{content}</Text>
      </VStack>
    </Flex>
  )
}