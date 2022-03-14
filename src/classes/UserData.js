import { KeyData } from "./KeyData";
import { todayScoreData } from "./TodayScoreData";

export class UserData {
  constructor({ id, keyData, todayScore, userInfos }) {
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
   * @returns {todayScoreData} number
   */
  formatTodayScore(score) {
    return new todayScoreData(score);
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
