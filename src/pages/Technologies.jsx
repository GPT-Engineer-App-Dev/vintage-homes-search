import { Box, Heading, Text, List, ListItem } from '@chakra-ui/react';

const Technologies = () => {
  return (
    <Box p={5}>
      <Heading as="h2" size="lg">Integrating New Technologies</Heading>
      <Text mt={4}>Learn how to integrate sustainable technologies in your renovation projects.</Text>
      <List spacing={3} mt={4}>
        <ListItem>Solar Panels - Harness the power of the sun.</ListItem>
        <ListItem>Heat Pumps - Efficient heating solutions.</ListItem>
        <ListItem>Eco-friendly Insulation - Reduce energy consumption.</ListItem>
      </List>
    </Box>
  );
};

export default Technologies;