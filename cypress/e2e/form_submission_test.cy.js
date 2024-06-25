///<reference types ="Cypress" />


describe('template spec', () => {
  it('passes', () => {

    cy.visit('https://docs.google.com/forms/d/e/1FAIpQLScPfEbpaoUu3WVwSDM9wIFX5uo1XQ1xpuHNtP7cF_rkR-o8Zg/viewform');

    const Name = cy.get("input[type='text'] ");
    Name.should('be.visible').type("Sakthivignesh.C");
    
    // select the 18 or above value
   const Age =  cy.get( "label[for='i12'] span[class='aDTYNe snByac OvPDhc OIC90c']" );
    Age.click();

    // Click the drop down
    const dropDown = cy.get("div[role='presentation'] .MocG8c.HZ3kWc.mhLiyf.LMgvRb.KKjvXb.DEh1R");
    dropDown.click();

    //Select the value Yes from the drop dowm
    const  dropDownValue = cy.get("div[class ='OA0qNb ncFHed QXL7Te']>div:nth-child(3)>div+span");
    dropDownValue.click();

    // Click the submit button
     const submitBtn =  cy.get("div[role='button'][class ='uArJ5e UQuaGc Y5sE8d VkkpIf QvWxOd']");
     submitBtn.click();

     // Confirmation message in the webpage
   const ActualText =  cy.get("div[role='heading']+div");
   ActualText .then(($actualtext) => {

    const verifyText = $actualtext.text();

    // verify the text in the webpage after submitted the form
    expect(verifyText).to.eq('Your response has been recorded.'); 

    // verify the URL contains the text formResponse
    cy.url().should('include' , 'formResponse'); 


   });
  })

  })
