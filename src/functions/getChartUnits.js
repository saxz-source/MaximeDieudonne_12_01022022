/**
 * Convert a measure name into its units
 * @param {string} variable a measure name
 * @returns {string} units
 */
export const getDaylyActivitiesUnit = (variable) => {
    switch (variable) {
        case "kilogram":
            return "kg";
        case "calories":
            return "Kcal";
        default:
            return variable;
    }
};

/**
 * convert a measure name into a the string displayed for users
 * @param {string} variable a measure name
 * @returns {string} the string seen by users
 */
export const getDaylyActivitiesNames = (variable) => {
    switch (variable) {
        case "kilogram":
            return "Poids";
        case "calories":
            return "Calories brûlées";
        default:
            return variable;
    }
};

/**
 * convert an activity name to the string the users see
 * @param {string} variable an activity name
 * @returns {string} the string seen by users
 */
export const getActivitiesTypeNames = (variable) => {
    switch (variable) {
        case "cardio":
            return "Cardio";
        case "intensity":
            return "Intensité";
        case "speed":
            return "Vitesse";
        case "energy":
            return "Energy";
        case "strength":
            return "Force";
        case "endurance":
            return "Endurance";
        default:
            return variable;
    }
};

/**
 * Convert the day number to the day letter
 * @param {number} variable the day number
 * @returns {string} the day Letter corresponding to the day number
 */
export const getAverageSessionsNames = (variable) => {
    switch (variable) {
        case 1:
            return "L";
        case 2:
            return "M";
        case 3:
            return "M";
        case 4:
            return "J";
        case 5:
            return "V";
        case 6:
            return "S";
        case 7:
            return "D";
        default:
            return " ";
    }
};

/**
 * Just return "min"
 * @returns {string} "min"
 */
export const getAverageSessionsUnits = () => {
    return "min";
};
