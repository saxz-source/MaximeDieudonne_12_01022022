import { DaylyActivityData } from "./DaylyActivityData";

export class DaylyActivityDatas {
    constructor(daylyActivityDatas) {
        console.log(daylyActivityDatas)
        this.maxWeight = Math.max(...daylyActivityDatas.map((d) => d.kilogram));
        this.minWeigth = Math.min(...daylyActivityDatas.map((d) => d.kilogram));
        this.averageWeight = this.getAverageWeigth(
            daylyActivityDatas.map((d) => d.kilogram)
        );
        this.coeffDividingCalories = this.computeDatasForGraph(
            this.averageWeight,
            daylyActivityDatas.map((d) => d.calories)
        );
        this.daylyActivityData = daylyActivityDatas.map((d) => {
            return new DaylyActivityData(d, this.coeffDividingCalories);
        });
    }

    getAverageWeigth(kilogramsArray) {
        return kilogramsArray.reduce((a, b) => a + b) / kilogramsArray.length;
    }

    computeDatasForGraph(averageWeight, caloriesArray) {
        const caloriesAverage =
            caloriesArray.reduce((a, b) => a + b) / caloriesArray.length;
            console.log(caloriesAverage)
        return caloriesAverage / averageWeight;
    }
}
