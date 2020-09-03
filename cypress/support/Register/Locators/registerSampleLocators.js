export class RegisterSampleLocators {
    // Locators
    static checkBoxName = '.checks';
    static cssLocatorOfBox = 'div:nth-of-type(6) > .col-md-3.col-sm-3.col-xs-3.control-label'; // sis netinkamas.
    static inputFields = '.col-md-4.col-xs-4.col-sm-4';

    // Flexible locators
    static checkBox = (number) => `[id="checkbox${number}"]`;
}
