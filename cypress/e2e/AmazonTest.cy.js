/// <reference types="cypress" />

describe("iterating the search bar", ()=>{
    it('test01',()=>{
        cy.visit("https://www.amazon.in/");
        cy.get("input[id='twotabsearchtextbox']").click().type("Iphone");
        cy.get("[class='s-suggestion-container']").should('have.length', 10) 
        .each(function($el,index,$listOfElements){
            if($el.text()=="iphone 14 plus"){
                cy.get("[class='s-suggestion-container']").contains($el.text()).click({multiple:true});
            }
        })

    })
}) 