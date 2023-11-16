describe("Headers and Cookies", ()=>{
    let authToken = null;

    before("Creating Access Token",()=>{
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/api-clients/',
            headers: {'Content-Type': 'application/json'},
            body:{clientName:'ABC', clientEmail: Math.random().toString(5).substring(2)+'@gmail.com'}
        })
        .then((response)=>{
            authToken = response.body.accessToken;
        })
    })

    before("Creating Nem Order",()=>{
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/orders/',
            headers: {'Content-Type': 'application/json', 'Autorization': 'Bearer' + authToken},
            body:{"bookId":1, "customerName": "xyzabc"}
        })
        .then((response)=>{
            expect(response.status).to.eq(201);
            expect(response.body).has.paramter('Created','true');
            expect(response.body.created).to.eq(true);
        })
    })
})