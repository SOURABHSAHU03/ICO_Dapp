// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ERC20 {
    function transfer(address recipient , uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
    function allowance(address owner , address spender) external view returns (uint256);
    function approve(address spender , uint256 amount) external returns (bool);
    function transferFrom(address sender , address recipient , uint256 amount) external returns (bool);
    function totalSupply() external view returns (uint256);
    function name() external view returns (string memory);
    function symbol() external view returns (string memory);
 }

contract TokenICO {
    address public owner;
    ERC20 public token;
    address public tokenAddress; // changed from uint256 to address
    uint256 public tokenSalePrice;
    uint256 public soldTokens;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    constructor(){
        owner = msg.sender;
    }

    function updateToken(address _tokenAddress) public onlyOwner{
        tokenAddress = _tokenAddress;
        token = ERC20(tokenAddress); // removed shadowing local variable
    }

    function updateTokenSalePrice(uint256 _tokenSalePrice) public onlyOwner {
        tokenSalePrice = _tokenSalePrice;
    }

    function multiply(uint256 x , uint256 y) internal pure returns(uint256 z){
        require(y == 0 || (z = x * y) / y == x, "Multiplication overflow");
        return z;
    }

    function buyToken(uint256 _tokenAmount) public payable{
        require(msg.value >= multiply(_tokenAmount, tokenSalePrice), "Insufficient Ether sent"  );
        ERC20 token = ERC20(tokenAddress);
        require(token.balanceOf(address(this)) >= _tokenAmount * 1e18, "Not enough tokens available for sale");
        require(token.transfer(msg.sender, _tokenAmount * 1e18), "Token transfer failed");
        payable(owner).transfer(msg.value);
        soldTokens += _tokenAmount;
    }

    function getTokenDetails() public view returns (string memory name , string memory symbol , uint256 supply , uint256 tokenPrice , address tokenAddr){
        ERC20 token = ERC20(tokenAddress);
        name = token.name();
        symbol = token.symbol();
        supply = token.totalSupply();
        tokenPrice = tokenSalePrice;
        tokenAddr = address(token);
        return (name, symbol, supply, tokenPrice, tokenAddr);
    }

    function trasferToOwner(uint256 _amount) external onlyOwner {
        require(address(this).balance >= _amount, "Insufficient Ether in contract");
        (bool success, ) = owner.call{value: _amount}("");
        require(success, "Transfer failed");
    }

    function tranferEther(address payable _receiver, uint256 _amount) external onlyOwner {
        require(address(this).balance >= _amount, "Insufficient Ether in contract");
        (bool success, ) = _receiver.call{value: _amount}("");
        require(success, "Transfer failed");
    }

    function withdrawAllTokens() public onlyOwner {
        ERC20 token = ERC20(tokenAddress);
        uint256 balance = token.balanceOf(address(this));
        require(balance > 0, "No tokens to withdraw");
        require(token.transfer(owner, balance), "Token transfer failed");
    }
}
