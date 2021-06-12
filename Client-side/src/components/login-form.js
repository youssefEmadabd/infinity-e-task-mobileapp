import * as React from "react"
import * as yup from 'yup'
import { Formik } from 'formik'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Alert,
} from 'react-native'
import { Button } from 'react-native-paper'

const loginValidationSchema = yup.object().shape({
    username: yup
        .string().min(3, ({ min }) => `Username must be at least ${min} characters`)
        .required('username is Required'),
    password: yup
        .string()
        .min(6, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
})
const styles = StyleSheet.create({

    loginContainer: {
        width: '80%',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        elevation: 10,
        backgroundColor: '#e6e6e6'
    },
    textInput: {
        height: 40,
        width: '100%',
        margin: 10,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
    },
})

export default function LoginForm(props) {
    function hasNumber(myString) {
        return /\d/.test(myString);
    }
    function hasLetters(myString) {
        return /[a-zA-Z]/.test(myString)
    }
    return (
        <View style={styles.loginContainer}>
            <Text>Welcome to Infinity-e, Please login</Text>
            <Formik
                validationSchema={loginValidationSchema}
                initialValues={{ username: '', password: '' }}
                onSubmit={values => {
                    console.log(hasLetters(values.password) && hasNumber(values.password))
                    if (hasLetters(values.password) && hasNumber(values.password)) {
                        console.log("here!!")
                        console.log(values)
                        props.navigation.navigate('Profile')

                    }
                    else {
                        Alert.alert(
                            "Password not acceptable",
                            "Password must contain letters and numbers",
                            [
                                { text: "OK", onPress: () => console.log("OK Pressed") }
                            ]
                        );
                    }
                }}
            >
                {({ handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    isValid, }) => (
                    <>
                        <TextInput
                            name="username"
                            placeholder="username"
                            style={styles.textInput}
                            onChangeText={handleChange('username')}
                            onBlur={handleBlur('username')}
                            value={values.username}
                            keyboardType="default"
                        />
                        {errors.username &&
                            <Text style={{ fontSize: 10, color: 'red' }}>{errors.username}</Text>
                        }
                        <TextInput
                            name="password"
                            placeholder="Password"
                            style={styles.textInput}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry
                        />
                        {errors.password &&
                            <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
                        }
                        <Button onPress={handleSubmit} mode="contained" title="Submit">Login</Button>
                    </>
                )}
            </Formik>
        </View>
    )
}