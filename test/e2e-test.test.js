const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = require("chai");
// import chai from "chai";
// import chaiHttp from "chai-http";
// import expect from "chai"
//import app from "../index.js";

chai.use(chaiHttp);

const url = "http://localhost:3000";

describe("Inserte el nombre y el precio", () => {
  it("Esperamos un name y un price", (done) => {
    chai
      .request(url)
      .post("/api/v1/products")
      .send({ name: "compu", price: 200 })
      .end((err, res) => {
        console.log(res.body);
        expect(res).to.have.status(200);
        done();
      });
  });
});

// describe("Suite de pruebas e2e para el curos", () => {
//   it("esperamos un hola mundo", (done) => {
//     chai
//       .request(app)
//       .get("/")
//       .end((err, res) => {
//         console.log("A");
//         chai.assert.equal(res.text, "hola mundo");
//         done();
//       });
//     console.log("B");
//   });
// });
