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

const CompanyHeader = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__text">Beauty Messenger</p>
    </div>
)


const ChannelListContainer = () => {
  return (
    <Fragment>
        <SideBar />
        <div className="channel-list__list__wrapper">
            <CompanyHeader />
            <ChannelSearch />
            <ChannelList
                filters={{}}
                channelRenderFilterFn={() => {}}
                List={(listProps) => (
                    <TeamChannelList
                        {...listProps}
                        type="team"
                    />
                )}
                Preview={(previewProps) => (
                    <TeamChannelPreview
                        {...previewProps}
                        type="team"
                    />
                )}
            />
        </div>
    </Fragment>
  )
}

export default ChannelListContainer;