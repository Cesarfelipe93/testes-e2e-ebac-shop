/// <reference types="cypress" />
import { faker } from '@faker-js/faker'
context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        
        let nomeFaker = faker.name.firstName()
        let lastnameFaker = faker.name.lastName()
        let empresaFaker = faker.company.name()
        let emailFaker = faker.internet.email()
        
        //Produtos
        cy.contains('Ingrid Running Jacket').click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 1)
        cy.get('.logo-in-theme > .logo > a > .logo-img').click()
        cy.contains('Augusta Pullover Jacket').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 2)
        cy.get('.logo-in-theme > .logo > a > .logo-img').click()
        cy.contains('Josie Yoga Jacket').click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.input-text').clear().type(1)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 3)
        cy.get('.logo-in-theme > .logo > a > .logo-img').click()
        cy.contains('Eos V-Neck Hoodie').click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(1)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 4)
        cy.get('.logo-in-theme > .logo > a > .logo-img').click()
        cy.get('.dropdown-toggle > .text-skin').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        //Endereco- Checkout
        cy.get('#billing_first_name').clear().type(nomeFaker)
        cy.get('#billing_last_name').clear().type(lastnameFaker)
        cy.get('#billing_company').clear().type(empresaFaker)
        cy.get('#select2-billing_country-container').click().type('Brasil {enter}')
        cy.get('#billing_address_1').click({force : true}).clear().type('Rodovia Constante Peruchi')
        cy.get('#billing_address_2').click().clear().type('Apartamento das Flores')
        cy.get('#billing_city').type('Cordeiropolis')
        cy.get('#select2-billing_state-container').click().type('São Paulo {enter}')
        cy.get('#billing_postcode').click({force : true}).clear().type('13492000')
        cy.get('#billing_phone').type('34561193')
        cy.get('#billing_email').type(emailFaker)
        cy.get('#terms').click()
        cy.get('#place_order').click()
    });


})