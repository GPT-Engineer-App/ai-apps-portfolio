import React from "react";
import { Box, Heading, Text, Stack, Flex, Image, Link, Card, CardHeader, CardBody, CardFooter, Button, Container } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const projects = [
  {
    title: "AI Image Generator",
    description: "An app that generates unique images based on user prompts using deep learning.",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhaSUyMGdlbmVyYXRlZCUyMGFic3RyYWN0JTIwYXJ0fGVufDB8fHx8MTcxMTU2MDU1N3ww&ixlib=rb-4.0.3&q=80&w=1080",
    link: "#",
  },
  {
    title: "AI Chatbot",
    description: "An intelligent chatbot powered by natural language processing.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaGF0Ym90JTIwYXZhdGFyfGVufDB8fHx8MTcxMTU2MDU1OHww&ixlib=rb-4.0.3&q=80&w=1080",
    link: "#",
  },
  {
    title: "AI Voice Assistant",
    description: "A voice-controlled AI assistant that can perform various tasks.",
    image: "https://images.unsplash.com/photo-1613632826230-09e39f7306b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2b2ljZSUyMGFzc2lzdGFudHxlbnwwfHx8fDE3MTE1NjA1NTh8MA&ixlib=rb-4.0.3&q=80&w=1080",
    link: "#",
  },
];

const Index = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      <Container maxW="container.lg" py={8}>
        <Flex direction={["column", "row"]} align="center" justify="center">
          <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMTU2MDU1OHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Developer" w={["100%", "50%"]} mb={[8, 0]} mr={[0, 8]} borderRadius="full" />
          <Box>
            <Heading as="h1" size="2xl" mb={4}>
              John Doe
            </Heading>
            <Text fontSize="xl" mb={8}>
              Software Developer specializing in AI applications
            </Text>
            <Stack direction="row" spacing={4}>
              <Link href="#" isExternal>
                <FaGithub size={24} />
              </Link>
              <Link href="#" isExternal>
                <FaLinkedin size={24} />
              </Link>
              <Link href="mailto:john@example.com">
                <FaEnvelope size={24} />
              </Link>
            </Stack>
          </Box>
        </Flex>

        <Heading as="h2" size="xl" my={16} textAlign="center">
          Projects
        </Heading>

        <Flex direction={["column", "row"]} justify="space-between">
          {projects.map((project, index) => (
            <Card key={index} mb={[8, 0]} mr={[0, 8]} w={["100%", "30%"]}>
              <CardHeader>
                <Heading size="md">{project.title}</Heading>
              </CardHeader>
              <CardBody>
                <Image src={project.image} alt={project.title} mb={4} />
                <Text>{project.description}</Text>
              </CardBody>
              <CardFooter>
                <Button as={Link} href={project.link} colorScheme="blue">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Index;
