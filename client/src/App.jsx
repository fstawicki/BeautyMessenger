import React from "react";
import {StreamChat} from 'stream-chat';
import {ChannelList, Chat} from 'stream-chat-react';
import Cookie from 'universal-cookie';

import './App.css';

import {ChannelListContainer, ChannelContainer, Auth} from './components';

const apiKEY = '3hqhdwy38xpk';

const client = StreamChat.getInstance(apiKEY);

const authToken = false;

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