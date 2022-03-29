import API from "./API";
import { UserData } from "../classes/UserData";
import { ActivitiesTypeData } from "../classes/ActivitiesTypeData";
import { SessionData } from "../classes/SessionData";
import { DaylyActivityDatas } from "../classes/DaylyActivitiesDatas";
import mockedData from "../mock/mockedData.json";

const getMock = true;

/**
 * Execute the Api request to get user datas
 * @param {number} id the user id
 * @returns {Promise<UserData>} the user general datas
 */
export const getUserData = (id) => {
    return new Promise((resolve, reject) => {
        if (getMock) {
            const formattedUser = formatUserData(mockedData.USER_MAIN_DATA);
            if (!formattedUser) reject({ message: "error formatted user" });
            resolve(formattedUser);
        }

        API.get(`/user/${id}`)
            .then((res) => {
                const formattedUser = formatUserData(res.data.data);
                resolve(formattedUser);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

/**
 * Format the datas from back end
 * @param {any} data the mocked data or database (USER_MAIN_DATA)
 * @returns {UserData}
 */
const formatUserData = (data) => {
    return new UserData(data);
};

/**
 * Get the dayly activities datas and format them
 * @param {number} id user id
 * @returns {Promise<DaylyActivityDatas>}
 */
export const getDaylyActivities = (id) => {
    return new Promise((resolve, reject) => {
        if (getMock) {
            const daylyDatas = formatActivityData(
                mockedData.USER_ACTIVITY.sessions
            );
            if (!daylyDatas) reject({ message: "error activity datas" });
            resolve(daylyDatas);
        }

        API.get(`/user/${id}/activity`)
            .then((res) => {
                const daylyDatas = formatActivityData(res.data.data.sessions);
                resolve(daylyDatas);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
/**
 * Format the datas from back end
 * @param {any} data the mocked data or database (USER_ACTIVITY.sessions)
 * @returns {DaylyActivityDatas}
 */
const formatActivityData = (data) => {
    return new DaylyActivityDatas(data);
};

/**
 * Get the data to fill the activities type chart (the radar one)
 * @param {number} id userId
 * @returns {Promise<ActivitiesTypeData>}
 */
export const getActivitiesType = (id) => {
    return new Promise((resolve, reject) => {
        if (getMock) {
            const formatedData = formatActivityTypeData(
                mockedData.USER_PERFORMANCE
            );
            if (!formatedData) reject({ message: "error activity type datas" });
            resolve(formatedData);
        }

        API.get(`/user/${id}/performance`)
            .then((res) => {
                const formatedData = formatActivityTypeData(res.data.data);
                resolve(formatedData);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
/**
 * Format the datas from back end
 * @param {any} data the mocked data or database (USER_PERFORMANCE)
 * @returns {ActivitiesTypeData}
 */
const formatActivityTypeData = (data) => {
    const activitiesTypeData = new ActivitiesTypeData(data);
    const formatedActivitiesTypeData =
        activitiesTypeData.formatActivitiesData();
    return formatedActivitiesTypeData;
};

/**
 * Get and format datas for average sessions graph
 * @param {number} id userId
 * @returns {SessionData[]}
 */
export const getAverageSessions = (id) => {
    return new Promise((resolve, reject) => {
        if (getMock) {
            const dataSet = formatAverageSessionData(
                mockedData.USER_AVERAGE_SESSIONS
            );
            if (!dataSet) reject({ message: "error activity type datas" });
            resolve(dataSet);
        }

        API.get(`/user/${id}/average-sessions`)
            .then((res) => {
                const dataSet = formatAverageSessionData(res.data.data);
                resolve(dataSet);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
/**
 * Format the datas from back end
 * @param {any} data the mocked data or database (USER_AVERAGE_SESSIONS)
 * @returns {SessionData[]}
 */
const formatAverageSessionData = (data) => {
    const dataSet = data.sessions.map((s) => {
        return new SessionData(s);
    });
    return dataSet;
};
