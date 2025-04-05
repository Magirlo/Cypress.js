import * as main_page from "../locators/main_page.json";
import * as recovery_password_page from "../locators/recovery_password_page.json";
import * as result_page from "../locators/result_page.json";
import * as data from "../helpers/default_data.json";

describe('Проверка авторизации', function () {
  beforeEach('Начало теста', function () {
    cy.visit('/');
    cy.get(main_page.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)');
  });

  afterEach('Конец теста', function () {
    cy.get(result_page.close).should('be.visible');
  });

  function checkResult(text) {
    cy.get(result_page.title)
      .should('be.visible')
      .and('contain.text', text);
  }

  it('Верный логин и верный пароль', function () {
    cy.get(main_page.email).type(data.login);
    cy.get(main_page.password).type(data.password);
    cy.get(main_page.login_button).click();
    checkResult('Авторизация прошла успешно');
  });

  it('Восстановление пароля', function () {
    cy.get(main_page.fogot_pass_btn).click();
    cy.get(recovery_password_page.email).type(data.login);
    cy.get(recovery_password_page.send_button).click();
    checkResult('Успешно отправили пароль на e-mail');
  });

    it('Верный логин и неправильный пароль', function () {
         cy.get(main_page.email).type(data.login);
         cy.get(main_page.password).type('Невалидный пароль');
         cy.get(main_page.login_button).click();
         cy.get(result_page.title).contains('Такого логина или пароля нет');
         cy.get(result_page.title).should('be.visible');
     })

    it('Неправильный логин и верный пароль', function () {
         cy.get(main_page.email).type(data.login1);
         cy.get(main_page.password).type(data.password);
         cy.get(main_page.login_button).click();
         cy.get(result_page.title).contains('Такого логина или пароля нет');
         cy.get(result_page.title).should('be.visible');
     })

    it('Логин без @ и верный пароль', function () {
         cy.get(main_page.email).type(data.login2);
         cy.get(main_page.password).type(data.password);
         cy.get(main_page.login_button).click();
         cy.get(result_page.title).contains('Нужно исправить проблему валидации');
         cy.get(result_page.title).should('be.visible');
     })

    it('Проверка регистра в логине и ввод верного пароля', function () {
         cy.get(main_page.email).type('GeRmAN@dolNikoV.ru');
         cy.get(main_page.password).type(data.password);
         cy.get(main_page.login_button).click();
         cy.get(result_page.title).contains('Авторизация прошла успешно');
         cy.get(result_page.title).should('be.visible');
     })
 }) 