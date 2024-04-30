import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Flex direction="column" align="center" justify="center" h="100vh">
      <Box textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>Renovation Finder</Heading>
        <Text fontSize="xl" mb={8}>Discover the potential in old properties.</Text>
        <Button as={Link} to="/search" colorScheme="teal" size="lg">Start Your Search</Button>
      </Box>
    </Flex>
  );
};

export default Index;