import {Flex} from '@chakra-ui/react'
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
            justify='center'
            align='center'
            color='#ffffff'
            flexDirection='column'
            fontFamily='Ubuntu Condensed'
            >
                <Edulogo/>
                <Msg/>
            </Flex>

        </Flex>
    )
}