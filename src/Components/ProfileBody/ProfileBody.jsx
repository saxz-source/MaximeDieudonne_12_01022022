import React, { useEffect, useState } from "react";
import ProfileDataTemplate from "./ProfileDataTemplate";
import ProfileWelcomeMessage from "./ProfileWelcomeMessage/ProfileWelcomeMessage";
import "./profileBody.css";
import { getName } from "../../API/APICalls";
import KeyDatasZone from "./KeyDatas/KeyDatasZone";

const ProfileBody = ({ userId = 12 }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        getName(12).then((res) => {
            setUserData(res.data.data);
        });
    }, [userId]);

    return (
        userData && (
            <main className="profileBody">
                <ProfileWelcomeMessage
                    userName={userData.userInfos.firstName}
                    userId={userId}
                />
                <section className="indicatorZone">
                    <ProfileDataTemplate
                        todayScore={userData.todayScore}
                        userId={userId}
                    />
                    <KeyDatasZone keyData={userData.keyData} />
                </section>
            </main>
        )
    );
};

export default ProfileBody;
