import * as React from "react"
import * as yup from 'yup'
import { Formik } from 'formik'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
} from 'react-native'
import { Button } from 'react-native-paper'

const loginValidationSchema = yup.object().shape({
    username: yup
        .string().min(3, ({ min }) => `Username must be at least ${min} characters`)
        .required('username is Required'),
    password: yup
        .string()
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
    email: yup
        .string()
        .required('email is required'),
    phone: yup
        .string()
        .required('Phone number is required'),
    firstname: yup
        .string()
        .required('First name is required'),
    lastname: yup
        .string()
        .required('Last name is required'),
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

export default function RegisterForm(props) {
    return(
    <View style={styles.loginContainer}>
        <Text>Fill your info.</Text>
        <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ username: '', password: '',email:'', phone:'',firstname:'', lastname:'' }}
            onSubmit={values => {console.log(values)
                props.navigation.navigate('Profile')
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
                        placeholder="Username"
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
                        name="email"
                        placeholder="email"
                        style={styles.textInput}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        keyboardType="email-address"
                    />
                    {errors.email &&
                        <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
                    }
                    <TextInput
                        name="phone"
                        placeholder="phone"
                        style={styles.textInput}
                        onChangeText={handleChange('phone')}
                        onBlur={handleBlur('phone')}
                        value={values.phone}
                        keyboardType="phone-pad"
                    />
                    {errors.phone &&
                        <Text style={{ fontSize: 10, color: 'red' }}>{errors.phone}</Text>
                    }
                    <TextInput
                        name="firstname"
                        placeholder="First Name"
                        style={styles.textInput}
                        onChangeText={handleChange('firstname')}
                        onBlur={handleBlur('firstname')}
                        value={values.firstname}
                        keyboardType="default"
                    />
                    {errors.firstname &&
                        <Text style={{ fontSize: 10, color: 'red' }}>{errors.firstname}</Text>
                    }
                    <TextInput
                        name="lastname"
                        placeholder="Last name"
                        style={styles.textInput}
                        onChangeText={handleChange('lastname')}
                        onBlur={handleBlur('lastname')}
                        value={values.lastname}
                        keyboardType="default"
                    />
                    {errors.lastname &&
                        <Text style={{ fontSize: 10, color: 'red' }}>{errors.lastname}</Text>
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
                    <Button onPress={handleSubmit} title="Submit" Text="Register"/>
                </>
            )}
        </Formik>
    </View>
    )
}