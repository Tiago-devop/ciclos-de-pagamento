const express = require("express");

module.exports = function (server) {
  // define URL base for all our routes
  const router = express.Router();
  server.use("/api", router);
  // routes of the payment cycle
  const BillingCycle = require("../api/billingCycle/billingCycleService");
  BillingCycle.register(router, "/billingCycles");
};
