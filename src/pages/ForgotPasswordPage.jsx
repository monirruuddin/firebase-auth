import {
  Button,
  Center,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Card } from '../components/Card'
import DividerWithText from '../components/DividerWithText'
import { Layout } from '../components/Layout'
import { useAuth } from '../Context/AuthContext'

export default function ForgotPasswordPage() {
  const history = useHistory()
  const {forgotPassword} =useAuth();
  const [email,setEmail]= useState("")
  const toast = useToast()

  return (
    <Layout>
      <Heading textAlign='center' my={12}>
        Forgot password
      </Heading>
      <Card maxW='md' mx='auto' mt={4}>
        <chakra.form
          onSubmit={async e => {
            e.preventDefault()
            // your forgot password logic here
            forgotPassword(email)
            .then((res)=>{
              return toast({
                description:"Check the Mail",
                isClosable:true,
                status:"success",
                duration: 2000
              })
            }).catch((er)=>{
              return toast({
                description:er.message,
                isClosable:true,
                status:"error",
                duration: 2000
              }) 
            })
          }}
        >
          <Stack spacing='6'>
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input value={email} onChange={(e=>setEmail(e.target.value))} name='email' type='email' autoComplete='email' required />
            </FormControl>
            <Button type='submit' colorScheme='primary' size='lg' fontSize='md'>
              Submit
            </Button>
          </Stack>
        </chakra.form>
        <DividerWithText my={6}>OR</DividerWithText>
        <Center>
          <Button variant='link' onClick={() => history.push('/login')}>
            Login
          </Button>
        </Center>
      </Card>
    </Layout>
  )
}
