import API from "./API";
import { UserData } from "../classes/UserData";
import { ActivitiesTypeData } from "../classes/ActivitiesTypeData";
import { SessionData } from "../classes/SessionData";
import { DaylyActivityDatas } from "../classes/DaylyActivitiesDatas";

/**
 * Execute the Api request to get user datas
 * @param {number} id the user id
 * @returns {UserData} the user general datas
 */
export const getUserData = (id) => {
    return new Promise((resolve, reject) => {
        API.get(`/user/${id}`)
            .then((res) => {
                const formattedUser = new UserData(res.data.data);
                resolve(formattedUser);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

/**
 * Get the dayly activities datas and format them
 * @param {number} id user id
 * @returns {DaylyActivityDatas}
 */
export const getDaylyActivities = (id) => {
    return new Promise((resolve, reject) => {
        API.get(`/user/${id}/activity`)
            .then((res) => {
                const daylyDatas = new DaylyActivityDatas(
                    res.data.data.sessions
                );
                resolve(daylyDatas);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

/**
 * Get the data to fill the activities type chart (the radar one)
 * @param {number} id userId
 * @returns {ActivitiesTypeData}
 */
export const getActivitiesType = (id) => {
    return new Promise((resolve, reject) => {
        API.get(`/user/${id}/performance`)
            .then((res) => {
                const activitiesTypeData = new ActivitiesTypeData(
                    res.data.data
                );
                const formatedActivitiesTypeData =
                    activitiesTypeData.formatActivitiesData();
                resolve(formatedActivitiesTypeData);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

/**
 * Get and format datas for average sessions graph
 * @param {number} id userId
 * @returns {SessionData[]}
 */
export const getAverageSessions = (id) => {
    return new Promise((resolve, reject) => {
        API.get(`/user/${id}/average-sessions`)
            .then((res) => {
                const dataSet = res.data.data.sessions.map((s) => {
                    return new SessionData(s);
                });
                resolve(dataSet);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
