import {
  Badge,
  chakra,
  Code,
  Heading,
  List,
  ListItem,
  OrderedList,
  Tag,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'
import { Link } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

export default function Homepage() {
  const {currentUser}=useAuth();

  return (
    <>
    <Layout>
      
      <Heading textAlign='center'>
        Firebase Authentication
        <chakra.span
          fontWeight='black'
          fontStyle='italic'
          fontSize='9xl'
          textAlign='center'
          mx={2}
        >
          v9
        </chakra.span>
        <Badge
          fontWeight='black'
          fontSize='4xl'
          mx={2}
          px={2}
          colorScheme='green'
        >
          NEW API
        </Badge>
      </Heading>
  
    </Layout>
   
    </>
  )
}
