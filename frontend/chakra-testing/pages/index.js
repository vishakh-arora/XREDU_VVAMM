import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import { ChakraProvider, Flex, Text, Button, Heading, Input } from "@chakra-ui/react"


export default function Home() {
  return (
    <ChakraProvider>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Heading>Welcome to the Fitness App. Get Ready to Get Fit!</Heading>
      </Flex>
    </ChakraProvider>
  )
}
