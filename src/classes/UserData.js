import { KeyData } from "./KeyData";
import { TodayScoreData } from "./TodayScoreData";

/** Class for the user datas  */
export class UserData {
    /**
     *Format UserData
     * @param {{id : number, todayScore:number, userInfos:{age: number, firstName: string, lastName: string}, keyData : {calorieCount: number, carbohydrateCount: number, lipidCount: number, proteinCount: number}}} param0
     */
    constructor({ id, keyData, todayScore, userInfos }) {
        console.log(id, keyData, todayScore, userInfos);
        this.id = id;
        this.keyData = this.formatKeyDatas(keyData);
        this.todayScore = this.formatTodayScore(todayScore);
        this.age = userInfos.age;
        this.firstName = userInfos.firstName;
        this.lastName = userInfos.lastName;
    }

    /**
     * Format score object
     * @param {number} score
     * @returns {TodayScoreData} number
     */
    formatTodayScore(score) {
        return new TodayScoreData(score);
    }

    /**
     * Format the key datas adding the units to the amounts
     * @param {{calorieCount : number, proteinCount : number, lipidCount : number, carboHydrateCount : number }} keyData
     * @returns {KeyData}
     */
    formatKeyDatas(keyData) {
        return new KeyData(keyData);
    }
}
