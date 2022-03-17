import { expect } from 'chai';
import axios from 'axios';
const apiUrl = process.env.SERVER === undefined ? 'https://www.google.com' : process.env.SERVER
let status, data

const user = {
    userId: 'randomizedLessThan36',
    email: 'randomized@example.com',
    password: 'randomLessThan200!',
    code: 'existingUnredeemedCode',
    platform: 'iOS',
    timezone: 'pacific',
}

const message = {
    userId: user.userId, // assumably, an already created user 
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Less than 10,000 Chars',
}

const expStatus = {
    newUser: +process.env.USER,
    newMessage: +process.env.MESSAGE,
}





describe(`Create-New-User-${apiUrl}/user/new`, () => {
    before((done) => {
        axios.put(`${apiUrl}/user/new`, user)
            .then(function (response) {
                // handle success
                status = response.status;
                data = response.data;
                // console.log(response);
            })
            .catch(function (error) {
                // handle error
                status = error.response.status;
                data = error.response.data;
                console.log(`ERROR!: ${status}`);
            })
            .then(function () {
                // always executed
                done();
            });
    })

    it('Should-Get-Response=201', (done) => {
        console.log("Test:", apiUrl, status);
        expect(status).to.be.equal(expStatus.newUser)
        done();
    })

})

describe(`Send-Message-To-System-${apiUrl}/message/new`, () => {
    before((done) => {
        axios.post(`${apiUrl}/message/new`, message)
            .then(function (response) {
                // handle success
                status = response.status;
                data = response.data;
                // console.log(response);
            })
            .catch(function (error) {
                // handle error
                status = error.response.status;
                data = error.response.data;
                console.log(`ERROR!: ${status}`);
            })
            .then(function () {
                // always executed
                done();
            });
    })

    it('Should-Get-Response=200', (done) => {
        console.log("Test:", apiUrl, status);
        expect(status).to.be.equal(expStatus.newMessage)
        done();
    })

})