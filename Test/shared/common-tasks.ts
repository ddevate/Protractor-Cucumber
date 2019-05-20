import { element, by, browser } from 'protractor';


export enum IdentificationType {
    Id,
    Name,
    Css,
    Xpath,
    LinkText,
    PartialLinkText,
    ClassName,
    ButtonText,
    Model
}

export class CommonTasks {
    // Add Wait
static wait(number: any) {
    return browser.sleep(number);
    }
    // Identify Web Elements
    elementLocator(obj: any) {
        switch (obj.type) {
            case IdentificationType[IdentificationType.Xpath]:
                return element(by.xpath(obj.value));
            default:
                return element(by.xpath(obj.value));
        } } }
