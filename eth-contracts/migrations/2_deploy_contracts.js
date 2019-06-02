var Verifier = artifacts.require("./Verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
var ERC721MintableComplete = artifacts.require("./ERC721MintableComplete.sol");

module.exports = function(deployer) {
  deployer.deploy(ERC721MintableComplete,  "Real Estate Market", "REM");
  deployer.deploy(Verifier)
  .then(() => {
    return deployer.deploy(SolnSquareVerifier,Verifier.address,"Real Estate Market", "REM" );
  });
};
