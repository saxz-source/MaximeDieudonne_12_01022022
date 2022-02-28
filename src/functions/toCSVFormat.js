export const convertActivitiesToCSV = (activitiesData) => {
    const headers = getHeaders(activitiesData);

    activitiesData.columns = headers
    return activitiesData

    const CSVBOdy = makeCSVBody(activitiesData);
  CSVBOdy.columns = headers
  console.log(CSVBOdy)
};

/**
 * Get the CSV Headers from a type {}[]
 * @param {{}[]} data
 * @returns {string} ex : day kilogram calories < {day:string, kilogram : number, calories:number}[]
 */
export const getHeaders = (data) => {
    return data
        .map((data) => {
            return Object.keys(data);
        })[0]
       // .join(" ");
};

/**
 *
 * @param {*} data
 * @returns 
 */
const makeCSVBody = (data) => {
    return data.map((data) => {
        return Object.values(data);
    });
};
