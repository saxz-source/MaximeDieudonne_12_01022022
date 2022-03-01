export class DaylyActivityData {
    constructor({ day, kilogram, calories }) {
        this.day = this.formatDay(day);
        this.kilogram = kilogram;
        this.calories = calories;
        this.kilogramUnit = "kg";
        this.caloriesUnit = "Kcal";
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
