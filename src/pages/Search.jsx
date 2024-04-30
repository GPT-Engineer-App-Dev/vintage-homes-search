import { Box, Input, Button, Heading, Text, VStack } from '@chakra-ui/react';

const Search = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Box>
        <Heading as="h1" size="xl">Search for Renovation Projects</Heading>
        <Text fontSize="md">Find flats and houses that need a new life.</Text>
      </Box>
      <Box>
        <Input placeholder="Enter location, keywords..." size="lg" />
        <Button colorScheme="blue" mt={2}>Search</Button>
      </Box>
    </VStack>
  );
};

export default Search;