import React, { Fragment } from "react";
import {ChannelList, useChatContext} from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";


import HospitalIcon from "../assets/hospital.png";
import LogoutIcon from "../assets/logout.png";


const SideBar = () => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={HospitalIcon} alt="hospital" width="30" />

            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner">
                <img src={LogoutIcon} alt="logout" width="30" />

            </div>
        </div>
    </div>

)

const ChannelListContainer = () => {
  return (
    <Fragment>
        <SideBar />
    </Fragment>
  )
}

export default ChannelListContainer;