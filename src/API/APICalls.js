import API from "./API";

export const getName = (id) => {
    return API.get(`/user/${id}`);
};

export const getDaylyActivities = (id) => {
    return API.get(`/user/${id}/activity`);
};

export const getActivitiesType = (id) => {
    return API.get(`/user/${id}/performance`);
};

export const getAverageSessions = (id) => {
    return API.get(`/user/${id}/average-sessions`);
};
