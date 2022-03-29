/** Class for a key data (an element) */
export class KeyData {
  constructor( keyDataObject ) {
    this.calorieCountWithUnits = this.addCaloriesUnits(
      keyDataObject.calorieCount
    );
    this.carbohydrateCountWithUnits = this.addGramUnits(
      keyDataObject.carbohydrateCount
    );
    this.lipidCountWithUnits = this.addGramUnits(keyDataObject.lipidCount);
    this.proteinCountWithUnits = this.addGramUnits(keyDataObject.proteinCount);
  }

  /**
   * Add gram unit to an amount
   * @param {number} count the variable amount
   * @returns {string} the amount + the "g"
   */
  addGramUnits(count) {
    return count + "g";
  }

  /**
   * Add calories unit to an amount
   * @param {number} calorieCount the amount of calories
   * @returns {string} the calorie amount  + Kcal
   */
  addCaloriesUnits(calorieCount) {
    return calorieCount + "Kcal";
  }
}
