import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import { ChakraProvider, Flex, Button, Heading, Box } from "@chakra-ui/react"
import BasicDetailsForm from '../components/basicDetails';
import PersonalInformationForm from '../components/personalInformation';
import React from 'react';
// import { useHistory } from "react-router-dom";

// export default function Home() {
//   return (
//     <ChakraProvider>
//       <Flex height="100vh" alignItems="center" justifyContent="center">

//       </Flex>
//     </ChakraProvider>
//   )
// }
let numSteps = 2;

export default class SignUp extends React.Component {
    // numSteps = 2;

    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            email: '',
            password: '',
            age: '',
            height: '',
            weight: '',
            gender: '',
            working: false
        }

        // this.history = useHistory();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this._next = this._next.bind(this)
        this._prev = this._prev.bind(this)
    }

    handleChange(event) {
        console.log('change, received')
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        console.log('handling submit');
        this.setState({
            working: true
        });

        event.preventDefault();

        const { email, password, age, weight } = this.state;
        // alert(`Details provided: \n
        // email: ${email}\n
        // password: ${password}\n
        // age: ${age}\n
        // weight: ${weight}\n`);
        
        window.location.href = "/";
    }

    _next() {
        let currentStep = this.state.currentStep;

        let newStep = currentStep >= numSteps - 1 ? numSteps : currentStep + 1;

        this.setState({
            currentStep: newStep
        });
    }

    _prev() {
        let currentStep = this.state.currentStep;

        let newStep = currentStep <= 1 ? 1 : currentStep - 1;

        this.setState({
            currentStep: newStep
        })
    }

    get previousButton() {
        let currentStep = this.state.currentStep;
        if (currentStep !== 1) {
            return (
                <Button colorScheme="teal" onClick={this._prev}>Previous</Button>
            );
        }

        return null;
    }

    get nextButton() {
        let currentStep = this.state.currentStep;
        if (currentStep < numSteps) {
            return (
                <Button colorScheme="teal" onClick={this._next}>Next</Button>
            );
        }

        return null;
    }

    render() {
        return (
            <ChakraProvider>
                <form onSubmit={this.handleSubmit}>
                    <Flex height="100vh" direction="column" alignItems="center" justifyContent="center" background="gray.200">
                        <Heading size="xl" mb={10}>Sign Up For {"FITNESS APP"}</Heading>
                        <BasicDetailsForm
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            email={this.state.email}
                            password={this.state.password}
                        />

                        <PersonalInformationForm
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            age={this.state.age}
                            weight={this.state.weight}
                            working={this.state.working}
                        />
                        <br></br>

                        <Flex>{this.previousButton}
                            {this.nextButton}</Flex>

                    </Flex>
                </form>
            </ChakraProvider>
        )
    }
}