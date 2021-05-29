import Page from './page';
import ModalComponent from './components/home_modal.component';

class ClickPage extends Page {
  get clickButton() { return $('#badButton') }

  open() {
    super.open('click');
    return this;
  }

  getButtonColour(cssProperty) {
    this.clickButton.waitForExist({ timeout: 20000 });
    return this.clickButton.getCSSProperty(cssProperty).value;
  }

  pressClickButton() {
    this.clickButton.waitForDisplayed()
    this.clickButton.click()
  }
}

export default new ClickPage();
