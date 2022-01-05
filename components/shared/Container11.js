import {Flex, Link} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import Edulogo from './Edulogo'
import Msg from '../register/Msg'
import Register from '../register/Register'


export default function Container11(){
    return(
        <Flex
            height="100vh"
            background="#191919"
            userSelect="none"
        >
            <Flex>
                <Flex
                justify="center"
                align="flex-start"
                flexDirection="column"
                height="50vh"
                margin="100px"
                fontWeight="bold"
                width="100%"
                >
                    <Register/>
                </Flex>
            </Flex>
            <Flex
            margin='-60px'
            justifyContent='center'
            align='center'
            color='#ffffff'
            flexDirection='column'
            fontFamily='Ubuntu Condensed'
            >
                <Edulogo/>
                <Msg/>
                <Flex>
                    <Link 
                    color='#00ff00'
                    href='/login'
                    ><ArrowBackIcon/> voltar para o login</Link>
                </Flex>
            </Flex>
        </Flex>
    )
}