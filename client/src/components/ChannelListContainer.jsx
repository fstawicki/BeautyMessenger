import React, { Fragment } from "react";
import {ChannelList, useChatContext} from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";


import HospitalIcon from "../assets/hospital.png";
import LogoutIcon from "../assets/logout.png";

const cookies = new Cookies();

const SideBar = ({logout}) => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={HospitalIcon} alt="hospital" width="30" />

            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner" onClick={logout}>
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


const ChannelListContainer = ({isCreating, setIsCreating, setCreateType, setIsEditing}) => {

    const logout = () => {
        cookies.remove('token');
        cookies.remove('userId');
        cookies.remove('userName');
        cookies.remove('fullName');
        cookies.remove('avatarURL');
        cookies.remove('hashedPassword');
        cookies.remove('phoneNumber');

        window.location.reload();
    }


  return (
    <Fragment>
        <SideBar logout={logout} />
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
                        isCreating={isCreating}
                        setIsCreating={setIsCreating}
                        setCreateType={setCreateType}
                        setIsEditing={setIsEditing}
                    />
                )}
                Preview={(previewProps) => (
                    <TeamChannelPreview
                        {...previewProps}
                        type="team"
                    />
                )}
            />
            <ChannelList
                filters={{}}
                channelRenderFilterFn={() => {}}
                List={(listProps) => (
                    <TeamChannelList
                        {...listProps}
                        type="messaging"
                        isCreating={isCreating}
                        setIsCreating={setIsCreating}
                        setCreateType={setCreateType}
                        setIsEditing={setIsEditing}
                    />
                )}
                Preview={(previewProps) => (
                    <TeamChannelPreview
                        {...previewProps}
                        type="messaging"
                    />
                )}
            />
        </div>
    </Fragment>
  )
}

export default ChannelListContainer;