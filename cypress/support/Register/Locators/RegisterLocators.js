export class RegisterLocators {

    // Personal Info fields
    static fullName = '#basicBootstrapForm > div:nth-child(1) > label';
    static firstName = '[placeholder="First Name"]';
    static lastName = '[placeholder="Last Name"]';
    static addressField = 'div.col-md-8.col-xs-8.col-sm-8 textarea';
    static emailAddress = 'input[type=email]';
    static emailTooltip = '.col-sm-4 col-xs-4 tooltptext';
    static phone = 'input[type=tel]';
    static gender = 'input[type=radio]';
    static male = 'input[value=Male]';
    static female = 'input[value=FeMale]';


    // Hobbies checkbox
    static hobbies = '#basicBootstrapForm > div:nth-child(6) > label';
    static checkbox = 'input[type=checkbox]';
    static checkboxCricket = '#checkbox1';
    static checkboxMovies = '#checkbox2';
    static checkboxHockey = '#checkbox3';

    // Languages 
    static languages = '#basicBootstrapForm > div:nth-child(7) > label';
    static languageMenu = '#msdd';
    static languageSelector = '.ui-corner-all';

    // Skills
    static skills = '#basicBootstrapForm > div:nth-child(8) > label';
    static skillsDropdown = '#Skills';

    // Country
    static country = '#basicBootstrapForm > div:nth-child(9) > label';
    static countryDropdown = '#countries';
    static selectCountry = '#basicBootstrapForm > div:nth-child(10) > label';
    static selectCountryArrow = '.select2-selection__arrow';
    static selectCountrySearch = '.select2-search__field';

    // Date of Birth
    static year = '#yearbox';
    static month = '#monthbox';
    static day = '#daybox';
    
    // Password
    static password ='#basicBootstrapForm > div:nth-child(12) > label';
    static confirmPass = '#basicBootstrapForm > div:nth-child(13) > label';
    static firstPasword = '#firstpassword';
    static secondPassword = '#secondpassword';

}