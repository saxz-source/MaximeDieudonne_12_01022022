import React, { useEffect, useState } from "react";
import ProfileDataTemplate from "./ProfileDataTemplate";
import ProfileWelcomeMessage from "./ProfileWelcomeMessage/ProfileWelcomeMessage";
import "./profileBody.css";
import { getUserData } from "../../API/APICalls";
import KeyDatasZone from "./KeyDatas/KeyDatasZone";
import { UserData } from "../../classes/UserData";
import PropTypes from "prop-types";
import ErrorMessage from "../Errors/ErrorMessage";
import Loader from "../Loader/Loader";

/** @returns the section that corresponds to the profil page*/
const ProfileBody = ({ userId = 18 }) => {
    /** The general user datas @type {UserData} */
    const [userData, setUserData] = useState(null);
    /** The load status @type {{loading: boolean, hasError: boolean, success: boolean}} */
    const [loadStatus, setLoadStatus] = useState({
        loading: true,
        hasError: false,
        success: false,
    });

    // Fetch and set user data from the ID
    useEffect(() => {
        getUserData(userId)
            .then((res) => {
                setUserData(res);
                setLoadStatus({
                    hasError: false,
                    loading: false,
                    success: true,
                });
            })
            .catch((e) => {
                setLoadStatus({
                    hasError: true,
                    loading: false,
                    success: false,
                });
            });
    }, [userId]);

    if (loadStatus.loading) {
        return <Loader />;
    }

    if (loadStatus.hasError) {
        return <ErrorMessage />;
    }

    return (
        loadStatus.success && (
            <section className="profileBody">
                <ProfileWelcomeMessage
                    userName={userData.firstName}
                    userId={userId}
                />
                <section className="indicatorZone">
                    <ProfileDataTemplate
                        todayScore={userData.todayScore.score}
                        userId={userId}
                    />
                    <KeyDatasZone keyData={userData.keyData} />
                </section>
            </section>
        )
    );
};

ProfileBody.propTypes = {
    /**
     * The id of the connected user @type {number}
     */
    userId: PropTypes.number,
};

export default ProfileBody;
