import chai from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);

export const { expect } = chai;
export { default as request } from "supertest";
