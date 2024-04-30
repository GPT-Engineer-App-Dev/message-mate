import { Box, Flex, Text, Input, Button, VStack, HStack, Avatar, Spacer } from '@chakra-ui/react';
import { FaCircle } from 'react-icons/fa';

const contacts = [
  { id: 1, name: 'John Doe', status: 'online' },
  { id: 2, name: 'Jane Smith', status: 'offline' },
  { id: 3, name: 'Alice Johnson', status: 'online' },
];

const Index = () => {
  return (
    <Flex h="100vh" p="5">
      <VStack w="300px" h="full" borderRight="1px" borderColor="gray.200" spacing="4" p="4">
        <Text fontSize="2xl" fontWeight="bold">Contacts</Text>
        {contacts.map(contact => (
          <HStack key={contact.id} w="full" p="3" spacing="3" _hover={{ bg: 'gray.100' }}>
            <Avatar name={contact.name} />
            <Text flex="1">{contact.name}</Text>
            <FaCircle color={contact.status === 'online' ? 'green' : 'gray'} />
          </HStack>
        ))}
      </VStack>
      <Flex flex="1" direction="column" p="4">
        <VStack flex="1" spacing="4" overflowY="auto">
          <Text fontSize="2xl" fontWeight="bold">Chat</Text>
          <VStack spacing="4" align="start">
            <Text>Message from John Doe</Text>
            <Text>Reply to John Doe</Text>
          </VStack>
        </VStack>
        <HStack>
          <Input placeholder="Type a message..." />
          <Button colorScheme="blue">Send</Button>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Index;