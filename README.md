<h1>DApp Starter Kit for Ethereum</h2> 
<p></p>
<h2>
  Packed with React, Redux, Bootstrap, Truffle and Web3, dApp Starter Kit allows you to instantly start building your user-interface with   your smart   contracts. All the hassle of configurating Web3, account and even smart contracts are already preloaded for you on the       front end via Redux, making it easy to dive straight to the code of your contracts into your UI. This kit is also bundled with Redux   Dev Tools, Lodash and Reselect helping you manage your smart contract data and scale your application.
</h2>
<p></p>
<h3> Getting Started </h3>

Make sure you have the following dependencies downloaded to ensure everything works properly without any issues

Global dependencies - </br>
•	Node @9.10.0 </br>
•	Python @2.7.7 </br>
•	Node-gyp @3.6.2 </br>
•	Truffle ^5.0.5 </br>

Tools - </br>
•	Ganache </br>
•	Metamask Extension for Google Chrome </br>
•	Redux devtools extension </br>

Learning Resources - </br>
•	Web3 - https://web3js.readthedocs.io/en/v1.2.0/web3-eth.html </br>
• Solidity - https://solidity.readthedocs.io/en/v0.5.11/ </br>
•	Truffle - https://www.trufflesuite.com/docs/truffle/overview </br>
• React - https://reactjs.org/docs/getting-started.html </br>
• Redux - https://devdocs.io/redux/ </br>
• Reselect - https://github.com/reduxjs/reselect </br>
•	Lodash - https://lodash.com/docs/ </br>•	Web3 - https://web3js.readthedocs.io/en/v1.2.0/web3-eth.html </br>
•	Bootstrap - https://getbootstrap.com/docs/4.3/getting-started/introduction/ </br>
<p></p>
1. Start by cloning this repo </br>
2. Inside the new folder, npm install to install all req'd dependencies </br>
3. Open up Ganache and click 'Quick Start' </br>
4. Under src/contracts folder, replace 'SampleContract' with your own Smart Contract. </br>
5. Modify your migrations under migrations/2_deploy_contract relevant to your new smart contract </br>
5. With your folder as the directory, go to your terminal and type, 'truffle compile' to compile your contracts </br>
6. Then migrate your contracts to deploy to your local blockchain aka ganache - 'truffle migrate'. </br>
7. Go to src/store/interactions file and repace 'SampleContract' with your contract name which is imported @ line 21 and used at line 41 </br>
7. Go to your metamask extension and create a new network configured to your Ganache network. In that network, import a new account w/ one of the private keys inside your Ganache. </br>
8. 'npm start' to load up the new Dapp Starter Kit on your local browser. (make sure you're on your ganache network in your metamask extension) </br>
9. Upon start, you should see your metamask account loaded on your navbar as well as your web3, account and contract loaded in the Redux Dev Tools Extension via Redux. </br>

<p>
 Stay tuned as I will continue to add features to this dapp starter kit such as fetching and displaying methods with the 'Sample Contract' into the user interface. </br>
</p>

<p></p>
<p>
<img src="./screenshots/screenshot1.png">
<p>
<img src="./screenshots/screenshot2.png">
