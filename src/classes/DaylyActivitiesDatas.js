import { DaylyActivityData } from "./DaylyActivityData";

/** Class for all activies datas */
export class DaylyActivityDatas {
    /**
     * Format DaylyActivitiyDatas.
     * @param {{calories : number, day : string, kilogram : number}} daylyActivityDatas
     */
    constructor(daylyActivityDatas) {
        this.maxWeight = Math.max(...daylyActivityDatas.map((d) => d.kilogram));
        this.minWeigth = Math.min(...daylyActivityDatas.map((d) => d.kilogram));
        this.diffWeigth = this.maxWeight - this.minWeigth;
        this.maxCalories = Math.max(
            ...daylyActivityDatas.map((d) => d.calories)
        );
        this.daylyActivityData = daylyActivityDatas
            .map((d) => {
                return new DaylyActivityData(
                    d,
                    this.maxCalories,
                    this.minWeigth,
                    this.diffWeigth
                );
            })
            .sort((a, b) => a.date - b.date);
    }
}
