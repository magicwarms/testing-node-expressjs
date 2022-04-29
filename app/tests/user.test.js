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
          // res.should.have.status(200);
          // there should be a 200 status code
          res.status.should.equal(200);
          res.body.should.be.a("object");
          done();
        });
    });

    it("should not get a single user", (done) => {
      const id = 10222;
      chai
        .request(server)
        .get(`/api/v1/user/${id}`)
        .end((err, res) => {
          // there should be a 404 status code
          res.status.should.equal(404);
          // the response should be JSON
          res.type.should.equal("application/json");
          // the JSON response body should have a
          // key-value pair of {"success": true}
          res.body.success.should.eql(true);
          // the JSON response body should have a
          done();
        });
    });
  });
});
