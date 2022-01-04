import {Flex} from '@chakra-ui/react'
import Edulogo from './Edulogo'
import Login from '../login/Login'
import Blogin from '../login/Blogin'


export default function Container00(){
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
                    <Edulogo/>
                    <Blogin/>
                </Flex>
            </Flex>
            <Flex
            justify='center'
            align='center'
            color='#ffffff'>
                <Login/>
            </Flex>

        </Flex>
    )
}