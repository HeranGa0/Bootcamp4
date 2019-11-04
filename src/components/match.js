let policies = {
    stringLiteralMatch = (userLit,programLit) => {
        if(programLit=="N/A") {
            return {}
        }
    };
}
let matchPolicy =
{
    "title": "Alachua County Small Business",
    "certState": "Florida",
    "certCounty": "Alachua County ",
    "certCity": "All Alachua County cities",
    "forProfit": "N/A?",
    "commercialTransactions": true,
    "businessTime": "N/A",
    "netWorth": 1000000,
    "officeState": "Florida",
    "registeredState": true,
    "officeCounty": ["Alachua", "Bradford", "Clay", "Columbia", "Gilchrist", "Levy", "Marion", "Putnam", "Union"],
    "officeCity": ["Alachua", "Bradford", "Clay", "Columbia", "Gilchrist", "Levy", "Marion", "Putnam", "Union"],
    "hqReq": true,
    "ownedByResident": "N/A",
    "ftEmployees": 25,
    "      51Citizens": "N/A",
    "      51permResidents": "N/A",
    "      51Veterans": "N/A",
    "      51Women": "N/A",
    "      51Minorities": "N/A",
    "           51African_American": "N/A",
    "           51Asian_American": "N/A",
    "           51Hispanic_American": "N/A",
    "           51Native_American": "N/A",
    "otherReqs": "Must have a professional license,  if required by the industry.",
    "learnMore": "https://alachuacounty.us/depts/eo/smallbusiness/pages/smallbusinessprogram.aspx",
    "benefits": "Courtesy of alachuacounty.us


}
class User {
    constructor(userInputJsonObj) {
        this.userInputJsonObj = userInputJsonObj;
    }
    programMatching(program) {
        Object.keys(userInputJsonObj).forEach(key) {

        }
    }
    matching() {
        for(let i=0; i < User.programs.length; i++) {
            let program = User.programs[i];

        }
    }
}
User.programs = [];