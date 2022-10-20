class ProdutoPage {

    addProdutoCarrinho(){
        cy.get('[class="product-block grid"]').eq(6).click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(1)
        cy.get('.single_add_to_cart_button').click()
    }

    addProdutoCarrinho2(){
        cy.get('[class="product-block grid"]').eq(8).click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('.input-text').clear().type(1)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.get('#billing_first_name').clear().type('Jaqueline')
        cy.get('#billing_last_name').clear().type('Petrili')
        cy.get('#billing_company').clear().type('Fundimazza')
        cy.get('#select2-billing_country-container').click().type('Brasil {enter}')
        cy.get('#billing_address_1').click({force : true}).clear().type('Vereador Jacob Tomazella')
        cy.get('#billing_address_2').clear().type('Apartamento 1344- bloco13- Condominio Villagio Corte')
        cy.get('#billing_city').clear().type('Cordeiropólis')
        cy.get('#select2-billing_state-container').click().type('São Paulo {enter}')
        cy.get('#billing_postcode').click({force : true}).clear().type('13492000')
        cy.get('#billing_phone').type('34561193')
        cy.get('#billing_email').type('Jaqueline@teste.com.br')
        cy.get('#terms').click()
        cy.get('#place_order').click()

    }
   
}

export default new ProdutoPage()