import chaiHttp from "chai-http";
import { expect, use } from "chai";

const chai = use(chaiHttp);

import server from "../../server.js";

describe("Test /files EPs", () => {
  it("should return a 200 status code and an array when calling /files/list", (done) => {
    chai
      .request(server)
      .get("/files/list")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        done();
      });
  });

  it("should return a 200 status code and an array of objects when calling /files/data", (done) => {
    chai
      .request(server)
      .get("/files/list")
      .query({ fileName: "test2.csv" })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        done();
      });
  });
});
