import {Flex, FormControl, FormLabel, Input, Button, Box} from '@chakra-ui/react'

export default function Login(){
    return(
        <Box
        bg='#2d312a'
        borderRadius='20px'
        margin='30px'
        justifyContent='center'>
            <Flex
            margin='10px'
            color='#2d312a'
            flexDirection='column'>
                <FormControl
                width='100%'
                justifyContent='center'
                color='#ffffff'>
                    <FormLabel htmlFor='email'>E-mail</FormLabel>
                    <Input id='email' type='email'/>
                    <FormLabel htmlFor='password'>Senha</FormLabel>
                    <Input id='password' type='password'/>
                    
                </FormControl>
                <Button
                type='submit'
                color='#000000'
                margin='30px'
                colorScheme='#00ff00'
                bgColor='#00ff00'>
                    Entrar
                </Button>
            </Flex>
        </Box>
    )
}