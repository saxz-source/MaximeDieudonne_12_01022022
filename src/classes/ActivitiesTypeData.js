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
     * @returns {{value : number , kind: number}[]} the array of formatted activities
     */
    formatActivitiesData() {
        const activitiesKinds = this.kind;
        const activitiesDatas = this.data;
        const formattedDatas = activitiesDatas.map((a) => {
            return {
                position: this.reorderTheData(activitiesKinds[a.kind]),
                value: a.value,
                kind: this.getActivitiesTypeNames(activitiesKinds[a.kind]),
            };
        });

        // sort the items by their position
        this.sortFormattedDatas(formattedDatas);

        return formattedDatas;
    }

    /**
     * Sort the array of formatted datas by the position of the items
     * @param {{position: number, value: number, kind: string }} formattedDatas
     * @returns {{{position: number, value: number, kind: string }} }
     */
    sortFormattedDatas(formattedDatas) {
        return formattedDatas.sort((a, b) => {
            return a.position - b.position;
        });
    }

    /**
     * Give a number for the position of the item in the array, to sort this one
     * @param {string} variable
     * @returns {number}
     */
    reorderTheData(variable) {
        switch (variable) {
            case "cardio":
                return 6;
            case "intensity":
                return 1;
            case "speed":
                return 2;
            case "energy":
                return 5;
            case "strength":
                return 3;
            case "endurance":
                return 4;
            default:
                return variable;
        }
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
                return "Energie";
            case "strength":
                return "Force";
            case "endurance":
                return "Endurance";
            default:
                return variable;
        }
    }
}
