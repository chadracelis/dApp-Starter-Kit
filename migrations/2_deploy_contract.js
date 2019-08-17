const contract = artifacts.require("SampleContract");

module.exports = function(deployer) {
  deployer.deploy(contract);
};
