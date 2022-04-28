const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../server");

chai.use(chaiHttp);
chai.should();

describe("Users", () => {
  describe("GET /", () => {
    it("should get all user", (done) => {
      chai
        .request(server)
        .get("/api/v1/user")
        .end((_err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
    it("should get a single user", (done) => {
      const id = 1;
      chai
        .request(server)
        .get(`/api/v1/user/${id}`)
        .end((_err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });

    it("should not get a single user", (done) => {
      const id = 10;
      chai
        .request(server)
        .get(`/api/v1/user/${id}`)
        .end((_err, res) => {
          console.log({ papa: res.status });
          res.should.have.status(404);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});
