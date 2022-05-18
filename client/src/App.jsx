import React from "react";
import {StreamChat} from 'stream-chat';
import {ChannelList, Chat} from 'stream-chat-react';
import Cookies from "universal-cookie";

import {ChannelListContainer, ChannelContainer, Auth} from './components';

import './App.css';

const cookies = new Cookies();
const apiKEY = '3hqhdwy38xpk';
const authToken = cookies.get("token");

const client = StreamChat.getInstance(apiKEY);

if(authToken){
    client.connectUser({
        token: cookies.get('token'),
        userName: cookies.get('userName'),
        fullName: cookies.get('fullName'),
        userId: cookies.get('userId'),
        phoneNumber: cookies.get('phoneNumber'),
        avatarURL: cookies.get('avatarURL'),
        hashedPassword: cookies.get('hashedPassword'),
    }, authToken)
}


const App = () => {

    if(!authToken){
        return <Auth />
    }

    return (
        <div className="app__wrapper">
            <Chat client={client} theme="team light">
                <ChannelListContainer
                
                />
                <ChannelContainer 
                
                />
            </Chat>
        </div>
    );

}

export default App;