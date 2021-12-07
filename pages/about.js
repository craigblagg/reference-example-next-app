import React from 'react';
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  VStack
} from '@chakra-ui/react';
  
export default function About() {
  return (
    <Box position="relative" pb={10} pt={0} pl={0} pr={0}>
      <Image
        height="600px"
        objectFit="cover"
        width="100%"
        src="https://images.unsplash.com/photo-1590514845347-76125d976864?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      />
      <Flex alignItems="center" justifyContent="center" py={4}>
        <Box maxWidth="60%">
          <VStack>
            <Text fontSize="2xl">Lorem ipsum dolor sit amet</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et metus quis eros venenatis pulvinar at eget mi. Nullam augue ante, ornare ac eros ut, lacinia dapibus libero. Vestibulum at elit fermentum, lacinia augue sed, hendrerit velit. Donec vitae nisi purus. Maecenas facilisis felis ut odio tincidunt, et ullamcorper libero ultricies. Sed vulputate sapien sit amet tortor malesuada auctor. Nam viverra nunc maximus massa vestibulum, vitae vestibulum eros euismod. </Text>
            <Button aria-label="foo" color="black" variant="solid">Sign Up</Button>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}