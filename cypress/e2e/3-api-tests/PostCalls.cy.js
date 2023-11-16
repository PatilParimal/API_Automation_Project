describe("POST Calls", ()=>{
    it("Approach1- Hard coded json object", ()=>{
        const requestBody={
            tourist_name: "Mikey",
            tourist_email: "jognfgg@gmail.com",
            tourist_location: "Pariss"
        }

        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body:requestBody
        })
        .then((response)=>{
            expect(response.status).to.eq(201);
            expect(response.body.tourist_name).to.eq("Mikey");
            expect(response.body.tourist_email).to.eq("jognfgg@gmail.com");
            expect(response.body.tourist_location).to.eq("Pariss");
        })
    })

    it("Approach2- Dynamically Generated json object", ()=>{
        const requestBody={
            tourist_name: Math.random().toString(5).substring(2),
            tourist_email: Math.random().toString(5).substring(2) + "@gmail.com",
            tourist_location: Math.random().toString(5).substring(1)
        }

        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body:requestBody
        })
        .then((response)=>{
            expect(response.status).to.eq(201);
            expect(response.body.tourist_name).to.eq(requestBody.tourist_name);
            expect(response.body.tourist_email).to.eq(requestBody.tourist_email);
            expect(response.body.tourist_location).to.eq(requestBody.tourist_location);
        })
    })

    it.only("Approach3- using fixture forr json object", ()=>{
        cy.fixture('tourist').then((data)=>{
            const requestBody = data;
            cy.request({
                method: 'POST',
                url: 'http://restapi.adequateshop.com/api/Tourist',
                body:requestBody
            })
            .then((response)=>{
                expect(response.status).to.eq(201);
                expect(response.body.tourist_name).to.eq(requestBody.tourist_name);
                expect(response.body.tourist_email).to.eq(requestBody.tourist_email);
                expect(response.body.tourist_location).to.eq(requestBody.tourist_location);

                expect(response.body).has.property('tourist_email', requestBody.tourist_email);
                expect(response.body).to.have.property('tourist_email', requestBody.tourist_email);
            })
        })
    })
})