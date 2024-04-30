import { Box, Heading, SimpleGrid, Text, Image } from '@chakra-ui/react';
import { FaHouseDamage } from 'react-icons/fa';

const listings = [
  { id: 1, title: 'Vintage 1920s House', location: 'Springfield', image: '/images/house1.jpg' },
  { id: 2, title: 'Old Town Flat', location: 'Centerville', image: '/images/flat1.jpg' }
];

const Listings = () => {
  return (
    <Box>
      <Heading as="h2" size="lg">Available Properties</Heading>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10}>
        {listings.map(listing => (
          <Box key={listing.id} p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">{listing.title} <FaHouseDamage /></Heading>
            <Text mt={4}>{listing.location}</Text>
            <Image src={listing.image} alt={listing.title} boxSize="100%" mt={4} />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Listings;