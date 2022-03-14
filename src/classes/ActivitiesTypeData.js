export class ActivitiesTypeData {
    constructor(activitiesData) {
        this.data = activitiesData.data;
        this.kind = activitiesData.kind;
        this.userId = activitiesData.userId;
        this.formattedData = this.formatActivitiesData(
            activitiesData.data,
            activitiesData.kind
        );
    }

    /**
     * Format the datas to be displayed in the chart
     * @returns 
     */
    formatActivitiesData() {
        const activitiesKinds = this.kind;
        const activitiesDatas = this.data;
        const formattedDatas = activitiesDatas.map((a) => {
            return {
                value: a.value,
                kind: this.getActivitiesTypeNames(activitiesKinds[a.kind]),
            };
        });
      //  console.log(activitiesDatas);
        return formattedDatas;
    }

    /**
     * Translate a value to another
     * @param {string} variable a value
     * @returns {string} the translation to be displayed on screen of the entered value
     */
    getActivitiesTypeNames(variable) {
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
    }
}
