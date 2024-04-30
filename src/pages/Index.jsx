import { Box, Flex, Text, Input, Button, VStack, HStack, Avatar, Spacer, useToast } from '@chakra-ui/react';
import { FaCircle } from 'react-icons/fa';
import { useState } from 'react';

const contacts = [
  { id: 1, name: 'John Doe', status: 'online' },
  { id: 2, name: 'Jane Smith', status: 'offline' },
  { id: 3, name: 'Alice Johnson', status: 'online' },
];

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const toast = useToast();

  const sendMessage = () => {
    if (inputValue.trim() === '') {
      toast({
        title: 'Cannot send empty message.',
        status: 'warning',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setMessages([...messages, { id: messages.length + 1, text: inputValue }]);
    setInputValue('');
  };

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
            {messages.map(message => (
              <Text key={message.id}>{message.text}</Text>
            ))}
          </VStack>
        </VStack>
        <HStack>
          <Input placeholder="Type a message..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <Button colorScheme="blue" onClick={sendMessage}>Send</Button>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Index;