import { DaylyActivityData } from "./DaylyActivityData";

export class DaylyActivityDatas {
    constructor(daylyActivityDatas) {
        this.maxWeight = Math.max(...daylyActivityDatas.map((d) => d.kilogram));
        this.minWeigth = Math.min(...daylyActivityDatas.map((d) => d.kilogram));
        this.diffWeigth = this.maxWeight - this.minWeigth;
        this.maxCalories = Math.max(
            ...daylyActivityDatas.map((d) => d.calories)
        );
        this.daylyActivityData = daylyActivityDatas.map((d) => {
            return new DaylyActivityData(
                d,
                this.maxCalories,
                this.minWeigth,
                this.diffWeigth
            );
        });
    }
}
