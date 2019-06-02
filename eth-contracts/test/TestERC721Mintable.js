var ERC721MintableComplete = artifacts.require('ERC721MintableComplete');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    let tokenId = 0;

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new("Real Estate Market", "REM", {from: account_one});
            tokenId = 0;
            // TODO: mint multiple tokens
            try{
                await this.contract.mint(account_one, ++tokenId, {from: account_one});
                await this.contract.mint(account_two, ++tokenId, {from: account_one});
                await this.contract.mint(account_two, ++tokenId, {from: account_one});
            }catch(e){
                console.log(e);
            }
        })

        it('should return total supply', async function () { 
            let totalSupply = 0;
            try{
                totalSupply = await this.contract.totalSupply();
             }catch(e){
                console.log(e);
            }

            assert.equal(totalSupply, tokenId, "Total supply is not correct.");
        })

        it('should get token balance', async function () { 
            let tokenBalance = 0;
            try{
                tokenBalance = await this.contract.balanceOf(account_two);
             }catch(e){
                console.log(e);
            }
            
            assert.equal(tokenBalance, 2, "TokenBalance is not correct.");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            
            let tokenURI = "";

            try{
                tokenURI = await this.contract.tokenURI(tokenId);
             }catch(e){
                console.log(e);
            }
            
            assert.equal(tokenURI, 'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/'+tokenId, "TokenURI is not correct.");
     
        })

        it('should transfer token from one owner to another', async function () { 

            let tokenOwner =0;

            try{
                await this.contract.transferFrom(account_two, account_one, 3, {from: account_two});
                tokenOwner = await this.contract.ownerOf(3);
                
             }catch(e){
                console.log(e);
            }
            
            assert.equal(tokenOwner, account_one, "Token fails to transfer .");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new("Real Estate Market", "REM",{from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            
            let result = 0;

            try{
                await this.contract.mint(account_two, 4 , {from: account_two});                
             }catch(e){
                console.log(e);
                result = false;
            }
            
            assert.equal(result, false, "Minting does not require contract owner");
        })

        it('should return contract owner', async function () { 

            let contractOwner = 0;

            try{
                contractOwner = await this.contract.Owner();                
             }catch(e){
                console.log(e);
            }
            
            assert.equal(contractOwner, account_one, "Contract owner is not correct.");

        })

    });
})