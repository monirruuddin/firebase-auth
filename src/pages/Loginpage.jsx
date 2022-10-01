import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  useToast,
  Text,
  Box,
  Flex,
} from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Card } from '../components/Card'
import DividerWithText from '../components/DividerWithText'
import { Layout } from '../components/Layout'
import { useAuth } from '../Context/AuthContext'

export default function Loginpage() {
  
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [isSubmitting,setSubmitting]= useState(false);

  const toast = useToast()
  const {login,signInWithGoogle} =useAuth()
  const history = useHistory()
  const location = useLocation();

  return (
    <Layout>
      <Heading textAlign='center' my={12}>
        Login
      </Heading>
      <Card maxW='md' mx='auto' mt={4}>
        <chakra.form
          onSubmit={async e => {
            e.preventDefault()
            // your login logic here
            if(!email || !password){
              toast({
                description:"Fullfill the all date",
                isClosable:true,
                status:"error",
                duration: 5000
              })
            }else{
              setEmail("")
              setPassword("")
              
            }
            setSubmitting(true);
            login(email,password)
            
            .then((res)=>{
              console.log(res)
              toast({
                description:"Successfully Login",
                isClosable:true,
                status:"success",
                duration: 2000
              })
              return history.push( location.state?.from || "/profile")
            }
              
            )
            .catch((error)=>
              toast({
                description:error.message,
                isClosable:true,
                status:"error",
                duration: 5000
              })
            ).finally(()=> setSubmitting(false))

         
          }}
        >
          <Stack spacing='6'>
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input value={email} onChange={e=>setEmail(e.target.value)} name='email' type='email' autoComplete='email' required />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>Password</FormLabel>
              <Input
                value={password} 
                onChange={e=>setPassword(e.target.value)}
                name='password'
                type='password'
                autoComplete='password'
                required
              />
            </FormControl>
            {/* <PasswordField /> */}
            <Button isLoading={isSubmitting} type='submit' colorScheme='primary' size='lg' fontSize='md'>
              Sign in
            </Button>
          </Stack>
        </chakra.form>
        <HStack justifyContent='space-between' my={4}>
          <Button variant='link'>
            <Link to='/forgot-password'>Forgot password?</Link>
          </Button>
          <Button variant='link' onClick={() => history.push('/register')}>
            Register
          </Button>
        </HStack>
        <DividerWithText my={6}>OR</DividerWithText>
        <Button
          variant='outline'
          isFullWidth
          colorScheme='red'
          leftIcon={<FaGoogle />}
          onClick={() => signInWithGoogle()
            .then((res)=>console.log(res))
            .catch(er=>console.log(er))
          }
        >
          Sign in with Google
        </Button>
      </Card>
    </Layout>
  )
}
