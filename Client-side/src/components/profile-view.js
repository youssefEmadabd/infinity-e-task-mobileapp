import * as React from 'react';
import { Avatar,Title  } from 'react-native-paper';

export default function ProfileView() {
    return(
    <>
    <Avatar.Image size={24} source={require('../assests/images/avatar.png')} />
    <Title>Welcom back Ahmed!</Title>

    </>
    )
}