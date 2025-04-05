it('URL должен содержать pokemonbattle', function() {
  cy.visit('https://pokemonbattle.ru/');
  cy.url().should('include', 'pokemonbattle.ru');
  cy.get('#k_email').type('USER_LOGIN');
  cy.get('#k_password').type('USER_PASSWORD');
  cy.get('.MuiButton-root').click();
  cy.get('.header_card_trainer').click()
  cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click();
  cy.get('.available > button').first().click();
  cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4111111111111111');
  cy.get(':nth-child(1) > .style_1_base_input').type('0535');
  cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125');
  cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('BorisMois');
  cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
  cy.get('.style_1_base_input').type('56456');
  cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
  cy.get('.payment_status_back_img').click()
});