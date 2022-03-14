import React, { useEffect, useState } from "react";
import ProfileDataTemplate from "./ProfileDataTemplate";
import ProfileWelcomeMessage from "./ProfileWelcomeMessage/ProfileWelcomeMessage";
import "./profileBody.css";
import { getName } from "../../API/APICalls";
import KeyDatasZone from "./KeyDatas/KeyDatasZone";
import { UserData } from "../../classes/UserData";
import PropTypes from "prop-types";

const ProfileBody = ({ userId = 12 }) => {
  const [userData, setUserData] = useState(null);

  // Fetch and set user data from the ID
  useEffect(() => {
    getName(12).then((res) => {
      const formattedUser = new UserData(res.data.data);
      setUserData(formattedUser);
    });
  }, [userId]);

  return (
    userData && (
      <main className="profileBody">
        <ProfileWelcomeMessage userName={userData.firstName} userId={userId} />
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

ProfileBody.propTypes = {
  /**
   * The id of the connected user @type {number}
   */
  userId: PropTypes.number.isRequired,
};

export default ProfileBody;
