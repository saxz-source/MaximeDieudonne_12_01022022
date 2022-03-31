/** Class for a session data (an element) */
export class SessionData {
    /**
     * A session
     * @param {{day : number, sessionLength:number}} param0
     */
    constructor({ day, sessionLength }) {
        this.day = day;
        this.sessionLength = sessionLength;
        this.sessionLengthUnit = "min";
    }
}
