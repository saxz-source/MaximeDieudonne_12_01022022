/** Class for a session data (an element) */
export class SessionData {
    constructor({ day, sessionLength }) {
        this.day = day;
        this.sessionLength = sessionLength;
        this.sessionLengthUnit = "min";
    }
}
