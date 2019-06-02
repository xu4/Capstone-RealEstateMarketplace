// Test if a new solution can be added for contract - SolnSquareVerifier

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier


var SolnSquareVerifier= artifacts.require('SolnSquareVerifier');
var Verifier= artifacts.require('Verifier');
var Proof2 = require('../../zokrates/code/square/proof2.json');
var Proof3 = require('../../zokrates/code/square/proof3.json');

contract('Test SolnSquareVerifier', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('solution', function () {
      before(async function () {
      	let verifierContract = await Verifier.new();
    
          this.contract = await SolnSquareVerifier.new(verifierContract.address, "ERC712MintableComplete", "ERCMC");
      })

      it('can add solution and mint', async function () {
        let solutionUsed = false;
        let totalSupply = 0;
        let owner = 0;
   
      	
      	try{
      		result = await this.contract.mintNewNFT(account_one, Proof2.proof["a"], Proof2.proof["b"], Proof2.proof["c"], Proof2.inputs);
    	    solutionUsed = await this.contract.solutionUsed(Proof2.proof["a"], Proof2.proof["b"], Proof2.proof["c"], Proof2.inputs);
	      	totalSupply = await this.contract.totalSupply();
	      	owner = await this.contract.ownerOf(1);

		    assert.equal(solutionUsed, true, "Solution has not been used.");
	    	assert.equal(totalSupply, 1, "Total supply has not been incremented.");
	    	assert.equal(owner, account_one, "Owner has not been set to account one.");

	      	result = await this.contract.mintNewNFT(account_two, Proof3.proof["a"], Proof3.proof["b"], Proof3.proof["c"], Proof3.inputs);
    	    solutionUsed = await this.contract.solutionUsed(Proof3.proof["a"], Proof3.proof["b"], Proof3.proof["c"], Proof3.inputs);
	      	totalSupply = await this.contract.totalSupply();
	      	owner = await this.contract.ownerOf(2);

 		    assert.equal(solutionUsed, true, "Solution has not been used.");
	    	assert.equal(totalSupply, 2, "Total supply has not been incremented.");
	    	assert.equal(owner, account_two, "Owner has not been set to account one.");

       }catch(e){
                console.log(e);
        }
        
 
 	  })

    });
});

