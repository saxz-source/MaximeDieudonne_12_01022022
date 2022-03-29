/** Class for daylayActivities data (an element) */
export class DaylyActivityData {
    constructor(
        { day, kilogram, calories },
        maxCalories,
        minWeigth,
        diffWeigth
    ) {
        this.day = this.formatDay(day);
        this.kilogram = kilogram;
        this.calories = calories;
        this.kilogramUnit = "kg";
        this.caloriesUnit = "Kcal";
        this.caloriesOnGraph = this.getCaloriesOnGraph(
            calories,
            maxCalories,
            minWeigth,
            diffWeigth
        );
    }

    /**
     * Compute the calorie vlaue displayed on the graph :
     * First we get the result of the calories amount / max calories amount.
     * Second we multiply by the interval in which the amount is displayed (max weight - min weight)
     * Then we add the number to reach this filed, i.e., the min-weight
     * @param {number} calories
     * @param {number} maxCalories
     * @param {number} minWeigth
     * @param {number} diffWeigth
     * @returns {number} return the calorie value that will be displayed on the graph
     */
    getCaloriesOnGraph(calories, maxCalories, minWeigth, diffWeigth) {
        return (calories / maxCalories) * diffWeigth + minWeigth;
    }

    /**
     * Format the day in order to be displayed in the graph
     * @param {string} day the day formatted from API (2020-07-01)
     * @returns {number} a new formatted day, which just the the day number
     */
    formatDay(day) {
        return parseInt(day.split("-")[2]);
    }
}
