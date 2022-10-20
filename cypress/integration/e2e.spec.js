/// <reference types="cypress" />
import { faker } from '@faker-js/faker'
import addProduto from '../support/page_objects/produto-funcionliada.page'
context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/produtos/page/2/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        let nomeFaker = faker.name.firstName()
        let lastnameFaker = faker.name.lastName()
        let empresaFaker = faker.company.name()
        let emailFaker = faker.internet.email()


       //Produtos 
        cy.get('[class="product-block grid"]').first().click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.input-text').clear()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 1)
        cy.get('.woocommerce-message').should('contain', 'Atomic Endurance Running Tee (Crew-Neck)”')
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/page/2/')

        cy.get('[class="product-block grid"]').contains('Augusta Pullover Jacket').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 2)
        cy.get('.woocommerce-message').should('contain', '“Augusta Pullover Jacket”')
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/page/2/')

        cy.get('[class="product-block grid"]').contains('Autumn Pullie').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 3)
        cy.get('.woocommerce-message').should('contain', '“Autumn Pullie”')
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/page/2/')

        cy.get('[class="product-block grid"]').contains('Beaumont Summit Kit').click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Orange').click()
        cy.get('.input-text').clear()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 4)
        cy.get('.woocommerce-message').should('contain', '“Beaumont Summit Kit”')

        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        //Checkout-Endereço 
        cy.get('#billing_first_name').clear().type(nomeFaker)
        cy.get('#billing_last_name').clear().type(lastnameFaker)
        cy.get('#billing_company').clear().type(empresaFaker)
        cy.get('#select2-billing_country-container').click().type('Brasil {enter}')
        cy.get('#billing_address_1').click({force : true}).clear().type('Vereador Jacob Tomazella')
        cy.get('#billing_address_2').clear().type('Apartamento 1344- bloco13- Condominio Villagio Corte')
        cy.get('#billing_city').clear().type('Cordeiropólis')
        cy.get('#select2-billing_state-container').click().type('São Paulo {enter}')
        cy.get('#billing_postcode').click({force : true}).clear().type('13492000')
        cy.get('#billing_phone').type('34561193')
        cy.get('#billing_email').type(emailFaker)
        cy.get('#terms').click()
        cy.get('#place_order').click()
        
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')

    });
    //Utilizando comandos customizados
    it('Deve adicionar o produto da lista de nº6 no carrinho-Usando page object', () => {
        addProduto.addProdutoCarrinho()
        cy.get('.woocommerce-message').should('contain', 'Bruno Compete Hoodie')
    });

    it('Deve adicionar o produto da lista de nº8 no carrinho e editar endereço-Usando page object', () => {
        addProduto.addProdutoCarrinho2()
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido')
    });

})