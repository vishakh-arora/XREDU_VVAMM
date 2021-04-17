import { Flex, Input, Heading, Text, Center, Slide, RadioGroup, Radio, Stack, Button } from '@chakra-ui/react';
import React, { Component } from 'react';
import { useHistory } from "react-router-dom";


class PersonalInformationForm extends React.Component {
    render() {
        if (this.props.currentStep !== 2) { // Prop: The current step
            return null
        }

        return (
            // <Center bg="tomato" width="100%" height="100%">

            //     <Slide direction="right" in={this.props.currentStep === 2}>

            <Flex width="50vw" direction="column" background="gray.100" p={12} rounded={6} border="1px" alignItems="center" justifyContent="center">

                <Heading size="lg" mb={6}>Personal Details</Heading>

                <Flex width="100%" direction="column" mb={5}>
                    <Text fontWeight="bold" size="lg">Age:</Text>
                    <Input name="age" placeholder="23" borderColor="gray.400" variant="filled" mb={3} value={this.props.age} onChange={this.props.handleChange} />
                </Flex>

                <Flex width="100%" direction="column" mb={5}>
                    <Text fontWeight="bold" size="lg">Height (in):</Text>
                    <Input name="height" placeholder="72" borderColor="gray.400" variant="filled" mb={3} value={this.props.height} onChange={this.props.handleChange} />
                </Flex>

                <Flex width="100%" direction="column" mb={5}>
                    <Text fontWeight="bold" size="lg">Weight (lb):</Text>
                    <Input name="weight" placeholder="150" borderColor="gray.400" variant="filled" mb={3} value={this.props.weight} onChange={this.props.handleChange} />
                </Flex>

                <Flex width="100%" direction="column" mb={5}>
                    <Text fontWeight="bold" size="lg">Gender</Text>
                    <RadioGroup name="gender" onChange={(val) => {this.props.handleChange({target: {name: 'gender', value: val}})}} value={this.props.gender}>
                        <Stack>
                            <Radio border="2px" borderColor="gray.500" value="male">Male</Radio>
                            <Radio border="2px" borderColor="gray.500" value="female">female</Radio>
                            <Radio border="2px" borderColor="gray.500" value="other">Other</Radio>
                        </Stack>
                    </RadioGroup>
                    {/* <Input name="weight" placeholder="150" borderColor="gray.400" variant="filled" mb={6} value={this.props.weight} onChange={this.props.handleChange} /> */}
                </Flex>

                <Button type="submit" width="100%" colorScheme="blue" isLoading={this.props.working}>Submit</Button>
            </Flex>
            //     </Slide>
            // </Center>
        )
    }
}

module.exports = PersonalInformationForm;