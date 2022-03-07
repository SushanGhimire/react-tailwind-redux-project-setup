const EMAIL_VALIDITY = "Invalid email address";
const EMPTY_FIRST_NAME = "First name is required.";
const EMPTY_LAST_NAME = "last name is required";
const PASSWORD_LENGTH = "Password must be 8 character long.";
const DEFAULT_WAGE_VALIDITY = "Default Wage must be a number.";
const DEFAULT_OVERTIME_WAGE_VALIDITY = "Overtime Rate must be a number.";
const DEFAULT_DOUBLETIME_WAGE_VALIDITY = "Doubletime Rate must be a number.";
const EMPTY_DEFAULT_PAY_SCHEDULE = "Default Pay Schedule is required.";
const EMPTY_WORKING_STATE = "Working State is required.";
const EMPTY_START_DATE = "Start Date is required.";
const EMPTY_BUSINESS_NAME = "Business name is required.";
const EMPTY_BUSINESS_ADDRESS = "Business address is required.";
const EMPTY_BUSINESS_EIN = "Business EIN/TAX ID is required.";
const EMPTY_BUSINESS_CITY = "City is required.";
const EMPTY_BUSINESS_STATE = "State/Province is required.";
const BUSINESS_ZIP_VALIDITY = "Zip code must be a number.";
const BUSINESS_PHONE_VALIDITY = "Invalid phone number.";
const BANK_ACCOUNT_NUMBER_VALIDITY =
  "Bank account number must be greater than 9 digit.";
const BANK_ROUTING_NUMBER_VALIDITY = "Bank routing number must  9 digit.";
const AMOUNT_VALIDITY = "Amount must be a number.";
const TOKEN_VALIDITY = "Select the token.";
const EMPTY_DOB = "Select the birth date";
const PHONE_VALIDITY = BUSINESS_PHONE_VALIDITY;
const EMPTY_ADDRESS = "Address is required.";
const EMPTY_CITY = "City is required";
const EMPTY_STATE = "State is required";
const ZIP_VALIDITY = BUSINESS_ZIP_VALIDITY;
const SSN_VALIDITY = "Invalid SSN number.";
const EMPTY_EMPLOYEE_ID = "Select a employee.";
const EMPTY_WALLET_ADDRESS = "No wallet address found.";
const EMPTY_TOKEN = "Select a token";
const EMPTY_REPORTING_PERIOD = "Select the reporting period.";
const EMPTY_CHECK_DATE = "Select the checkdate.";
const CONFIRM_PASSWORD_VALIDITY = "Password donot match.";
const SIC_VALIDATION = "Invalid SIC Code.";
const FEDERAL_EIN_VALIDATION = "Invalid Federal EIN.";
const COMNPANY_DESCRIPTION = "Company Description Required.";
const ESTABLISH_DATE = "Establish Date Is Required.";
const EMPLOYER_TYPE = "Employer Type Is Required.";
const ENTITY_TYPE = "Entity Type Is Required.";
const GROUP_NAME = "Group Name Is Required.";
const errorHandler = (property, value) => {
  if (property === "email") {
    if (
      !value.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi
      )
    ) {
      return EMAIL_VALIDITY;
    } else {
      return "";
    }
  } else if (property === "check_date") {
    if (value === "") {
      return EMPTY_CHECK_DATE;
    } else {
      return "";
    }
  } else if (property === "reportingPeriodID") {
    if (value === "") {
      return EMPTY_REPORTING_PERIOD;
    } else {
      return "";
    }
  } else if (property === "employeeID") {
    if (value === "") {
      return EMPTY_EMPLOYEE_ID;
    } else {
      return "";
    }
  } else if (property === "wallet_address") {
    if (value === "") {
      return EMPTY_WALLET_ADDRESS;
    } else {
      return "";
    }
  } else if (property === "token") {
    if (value === "") {
      return EMPTY_TOKEN;
    } else {
      return "";
    }
  } else if (property === "ssn") {
    if (value === "") {
      return SSN_VALIDITY;
    } else {
      return "";
    }
  } else if (property === "zip") {
    if (value === "" || isNaN(value) || value.toString().charAt(0) === "-") {
      return ZIP_VALIDITY;
    } else {
      return "";
    }
  } else if (property === "state") {
    if (value === "") {
      return EMPTY_STATE;
    } else {
      return "";
    }
  } else if (property === "city") {
    if (value === "") {
      return EMPTY_CITY;
    } else {
      return "";
    }
  } else if (property === "address") {
    if (value === "") {
      return EMPTY_ADDRESS;
    } else {
      return "";
    }
  } else if (property === "phone_number") {
    if (value === "") {
      return PHONE_VALIDITY;
    } else {
      return "";
    }
  } else if (property === "dob") {
    if (value === "") {
      return EMPTY_DOB;
    } else {
      return "";
    }
  } else if (property === "first_name") {
    if (value === "") {
      return EMPTY_FIRST_NAME;
    } else {
      return "";
    }
  } else if (property === "last_name") {
    if (value === "") {
      return EMPTY_LAST_NAME;
    } else {
      return "";
    }
  } else if (property === "password") {
    if (value === "" || value.length < 8) {
      return PASSWORD_LENGTH;
    } else {
      return "";
    }
  } else if (property === "current_password") {
    if (value === "" || value.length < 8) {
      return PASSWORD_LENGTH;
    } else {
      return "";
    }
  } else if (property === "new_password") {
    if (value === "" || value.length < 8) {
      return PASSWORD_LENGTH;
    } else {
      return "";
    }
  } else if (property === "amount") {
    if (value === "" || isNaN(value) || value.toString().charAt(0) === "-") {
      return AMOUNT_VALIDITY;
    } else {
      return "";
    }
  } else if (property === "token") {
    if (value === "") {
      return TOKEN_VALIDITY;
    } else {
      return "";
    }
  } else if (property === "default_wage") {
    if (value === "" || isNaN(value) || value.toString().charAt(0) === "-") {
      return DEFAULT_WAGE_VALIDITY;
    } else {
      return "";
    }
  } else if (property === "default_ot_wage") {
    if (value === "" || isNaN(value) || value.toString().charAt(0) === "-") {
      return DEFAULT_OVERTIME_WAGE_VALIDITY;
    } else {
      return "";
    }
  } else if (property === "default_dt_wage") {
    if (value === "" || isNaN(value) || value.toString().charAt(0) === "-") {
      return DEFAULT_DOUBLETIME_WAGE_VALIDITY;
    } else {
      return "";
    }
  } else if (property === "default_pay_schedule") {
    if (value === "") {
      return EMPTY_DEFAULT_PAY_SCHEDULE;
    } else {
      return "";
    }
  } else if (property === "working_state") {
    if (value === "") {
      return EMPTY_WORKING_STATE;
    } else {
      return "";
    }
  } else if (property === "start_date") {
    if (value === "") {
      return EMPTY_START_DATE;
    } else {
      return "";
    }
  } else if (property === "business_name") {
    if (value === "") {
      return EMPTY_BUSINESS_NAME;
    } else {
      return "";
    }
  } else if (property === "business_address") {
    if (value === "") {
      return EMPTY_BUSINESS_ADDRESS;
    } else {
      return "";
    }
  } else if (property === "business_ein") {
    if (value === "") {
      return EMPTY_BUSINESS_EIN;
    } else {
      return "";
    }
  } else if (property === "business_city") {
    if (value === "") {
      return EMPTY_BUSINESS_CITY;
    } else {
      return "";
    }
  } else if (property === "business_state") {
    if (value === "") {
      return EMPTY_BUSINESS_STATE;
    } else {
      return "";
    }
  } else if (property === "business_phone") {
    if (value === "" || isNaN(value) || value.charAt("0") === "-") {
      return BUSINESS_PHONE_VALIDITY;
    } else {
      return "";
    }
  } else if (property === "business_zip") {
    if (value === "" || isNaN(value) || value.charAt("0") === "-") {
      return BUSINESS_ZIP_VALIDITY;
    } else {
      return "";
    }
  } else if (property === "account_number") {
    if (
      value === "" ||
      isNaN(value) ||
      value.charAt("0") === "-" ||
      value.length < 9
    ) {
      return BANK_ACCOUNT_NUMBER_VALIDITY;
    } else {
      return "";
    }
  } else if (property === "routing_number") {
    if (
      value === "" ||
      isNaN(value) ||
      value.charAt("0") === "-" ||
      value.length < 9 ||
      value.length > 9
    ) {
      return BANK_ROUTING_NUMBER_VALIDITY;
    } else {
      return "";
    }
  } else if (property === "sic") {
    if (
      value === "" ||
      isNaN(value) ||
      value.charAt("0") === "-" ||
      value.length !== 4
    ) {
      return SIC_VALIDATION;
    } else {
      return "";
    }
  } else if (property === "ein") {
    if (
      value === "" ||
      isNaN(value) ||
      value.charAt("0") === "-" ||
      value.length !== 9
    ) {
      return FEDERAL_EIN_VALIDATION;
    } else {
      return "";
    }
  } else if (property === "description") {
    if (value === "") {
      return COMNPANY_DESCRIPTION;
    } else {
      return "";
    }
  } else if (property === "establish_date") {
    if (value === "") {
      return ESTABLISH_DATE;
    } else {
      return "";
    }
  } else if (property === "employer_type") {
    if (value === "") {
      return EMPLOYER_TYPE;
    } else {
      return "";
    }
  } else if (property === "entity_type") {
    if (value === "") {
      return ENTITY_TYPE;
    } else {
      return "";
    }
  } else if (property === "group_name") {
    if (value === "") {
      return GROUP_NAME;
    } else {
      return "";
    }
  } else {
    return "";
  }
};

export const passwordErrorHandler = (password, confirm_password) => {
  if (password !== confirm_password) {
    return CONFIRM_PASSWORD_VALIDITY;
  } else {
    return "";
  }
};

export default errorHandler;
