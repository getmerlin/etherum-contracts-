const merlinTokens = artifacts.require("./merlinTokens.sol");
module.exports = function (deployer) {
    deployer.deploy(merlinTokens);
};