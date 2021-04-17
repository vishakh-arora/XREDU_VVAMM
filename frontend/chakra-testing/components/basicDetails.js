import { Flex, Input, Heading, Text} from '@chakra-ui/react';
import React, { Component } from 'react';

class BasicDetailsForm extends React.Component {
    render() {
        if (this.props.currentStep !== 1) { // Prop: The current step
            return null
        }

        return (
            <Flex width="50vw" direction="column" background="gray.100" p={12} rounded={6} border="1px" alignItems="center" justifyContent="center">
                <Heading size="lg" mb={6}>Login Information</Heading>
                {/* <Text mb={1}>Email:</Text> */}
                <Flex width="100%" direction="column" mb={5}>
                    <Text fontWeight="bold" size="lg">Email:</Text>
                    <Input name="email" type="email" placeholder="user@example.com" borderColor="gray.400" variant="filled" mb={3} value={this.props.age} onChange={this.props.handleChange} />
                </Flex>
                
                <Flex width="100%" direction="column" mb={5}>
                    <Text fontWeight="bold" size="lg">Password:</Text>
                    <Input name="password" type="password" placeholder="**********" borderColor="gray.400" variant="filled" mb={3} value={this.props.age} onChange={this.props.handleChange} />
                </Flex>
            </Flex>
        )
    }
}

module.exports = BasicDetailsForm;