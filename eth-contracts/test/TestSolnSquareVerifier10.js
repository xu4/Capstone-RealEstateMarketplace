// Test if a new solution can be added for contract - SolnSquareVerifier

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier


var SolnSquareVerifier= artifacts.require('SolnSquareVerifier');
var Verifier= artifacts.require('Verifier');
var Proof2 = require('../../zokrates/code/square/proof2.json');
var Proof3 = require('../../zokrates/code/square/proof3.json');
var Proof4 = require('../../zokrates/code/square/proof4.json');
var Proof5 = require('../../zokrates/code/square/proof5.json');
var Proof6 = require('../../zokrates/code/square/proof6.json');
var Proof7 = require('../../zokrates/code/square/proof7.json');
var Proof8 = require('../../zokrates/code/square/proof8.json');
var Proof9 = require('../../zokrates/code/square/proof9.json');
var Proof10 = require('../../zokrates/code/square/proof10.json');
var Proof11 = require('../../zokrates/code/square/proof11.json');

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
        let hash =0;
        let tokenId =0;
      	
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

      		result = await this.contract.mintNewNFT(account_one, Proof4.proof["a"], Proof4.proof["b"], Proof4.proof["c"], Proof4.inputs);
    	    solutionUsed = await this.contract.solutionUsed(Proof4.proof["a"], Proof4.proof["b"], Proof4.proof["c"], Proof4.inputs);
	      	totalSupply = await this.contract.totalSupply();
	      	owner = await this.contract.ownerOf(1);

		    assert.equal(solutionUsed, true, "Solution has not been used.");
	    	assert.equal(totalSupply, 3, "Total supply has not been incremented.");
	    	assert.equal(owner, account_one, "Owner has not been set to account one.");

	      	result = await this.contract.mintNewNFT(account_two, Proof5.proof["a"], Proof5.proof["b"], Proof5.proof["c"], Proof5.inputs);
    	    solutionUsed = await this.contract.solutionUsed(Proof5.proof["a"], Proof5.proof["b"], Proof5.proof["c"], Proof5.inputs);
	      	totalSupply = await this.contract.totalSupply();
	      	owner = await this.contract.ownerOf(2);

 		    assert.equal(solutionUsed, true, "Solution has not been used.");
	    	assert.equal(totalSupply, 4, "Total supply has not been incremented.");
	    	assert.equal(owner, account_two, "Owner has not been set to account one.");

      		result = await this.contract.mintNewNFT(account_one, Proof6.proof["a"], Proof6.proof["b"], Proof6.proof["c"], Proof6.inputs);
    	    solutionUsed = await this.contract.solutionUsed(Proof6.proof["a"], Proof6.proof["b"], Proof6.proof["c"], Proof6.inputs);
	      	totalSupply = await this.contract.totalSupply();
	      	owner = await this.contract.ownerOf(1);

		    assert.equal(solutionUsed, true, "Solution has not been used.");
	    	assert.equal(totalSupply, 5, "Total supply has not been incremented.");
	    	assert.equal(owner, account_one, "Owner has not been set to account one.");

	      	result = await this.contract.mintNewNFT(account_two, Proof7.proof["a"], Proof7.proof["b"], Proof7.proof["c"], Proof7.inputs);
    	    solutionUsed = await this.contract.solutionUsed(Proof7.proof["a"], Proof7.proof["b"], Proof7.proof["c"], Proof7.inputs);
	      	totalSupply = await this.contract.totalSupply();
	      	owner = await this.contract.ownerOf(2);

 		    assert.equal(solutionUsed, true, "Solution has not been used.");
	    	assert.equal(totalSupply, 6, "Total supply has not been incremented.");
	    	assert.equal(owner, account_two, "Owner has not been set to account one.");


     		result = await this.contract.mintNewNFT(account_one, Proof8.proof["a"], Proof8.proof["b"], Proof8.proof["c"], Proof8.inputs);
    	    solutionUsed = await this.contract.solutionUsed(Proof8.proof["a"], Proof8.proof["b"], Proof8.proof["c"], Proof8.inputs);
	      	totalSupply = await this.contract.totalSupply();
	      	owner = await this.contract.ownerOf(1);

		    assert.equal(solutionUsed, true, "Solution has not been used.");
	    	assert.equal(totalSupply, 7, "Total supply has not been incremented.");
	    	assert.equal(owner, account_one, "Owner has not been set to account one.");

	      	result = await this.contract.mintNewNFT(account_two, Proof9.proof["a"], Proof9.proof["b"], Proof9.proof["c"], Proof9.inputs);
    	    solutionUsed = await this.contract.solutionUsed(Proof9.proof["a"], Proof9.proof["b"], Proof9.proof["c"], Proof9.inputs);
	      	totalSupply = await this.contract.totalSupply();
	      	owner = await this.contract.ownerOf(2);

 		    assert.equal(solutionUsed, true, "Solution has not been used.");
	    	assert.equal(totalSupply, 8, "Total supply has not been incremented.");
	    	assert.equal(owner, account_two, "Owner has not been set to account one.");

    		result = await this.contract.mintNewNFT(account_one, Proof10.proof["a"], Proof10.proof["b"], Proof10.proof["c"], Proof10.inputs);
    	    solutionUsed = await this.contract.solutionUsed(Proof10.proof["a"], Proof10.proof["b"], Proof10.proof["c"], Proof10.inputs);
	      	totalSupply = await this.contract.totalSupply();
	      	owner = await this.contract.ownerOf(1);

		    assert.equal(solutionUsed, true, "Solution has not been used.");
	    	assert.equal(totalSupply, 9, "Total supply has not been incremented.");
	    	assert.equal(owner, account_one, "Owner has not been set to account one.");

	      	result = await this.contract.mintNewNFT(account_two, Proof11.proof["a"], Proof11.proof["b"], Proof11.proof["c"], Proof11.inputs);
    	    solutionUsed = await this.contract.solutionUsed(Proof11.proof["a"], Proof11.proof["b"], Proof11.proof["c"], Proof11.inputs);
	      	totalSupply = await this.contract.totalSupply();
	      	owner = await this.contract.ownerOf(2);

 		    assert.equal(solutionUsed, true, "Solution has not been used.");
	    	assert.equal(totalSupply, 10, "Total supply has not been incremented.");
	    	assert.equal(owner, account_two, "Owner has not been set to account one.");


       }catch(e){
                console.log(e);
        }
        
 
 	  })

    });
});

