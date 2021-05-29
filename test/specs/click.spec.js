import clickPage from '../pages/click.page';

describe('Click page Suite', function() {
  //Код который выполняется после каждого теста в этом файле
  afterEach(function() {
    utilities.takeScreenshot('click page');
  });

  it('should change button colour after click', function() {
    //Шаги:
    browser.url('http://uitestingplayground.com/click');//открываем страницу click - http://uitestingplayground.com/click
    ($('#badButton')).waitForExist();//Ожидаем появления кнопки
    ($('#badButton')).click();//Кликаем по кнопке
    browser.pause(1000);// Ждем секунду, что  бы цвет изменился
    const buttonColour = ($('#badButton')).getCSSProperty('background-color').value;

    //Проверки:
    expect(buttonColour).toEqual('rgba(33,136,56,1)'); // Проверяем, что код цвета из переменной соответствует тому который мы ожидаем
  });

  //тест по паттерну ООП
  it('should change button colour after click', function() {
    //Шаги:
    clickPage.open(); //открываем страницу click - http://uitestingplayground.com/click
    clickPage.pressClickButton(); //Кликаем по кнопке
    browser.pause(1000)// Ждем секунду, что  бы цвет изменился
    const buttonColour = clickPage.getButtonColour('background-color');//В переменную buttonColour записываем цвет кнопки

    //Проверки:
    expect(buttonColour).toEqual('rgba(33,136,56,1)'); // Проверяем, что код цвета из переменной соответствует тому который мы ожидаем
  });
});
