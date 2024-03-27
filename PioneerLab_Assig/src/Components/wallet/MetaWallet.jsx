import React, { useState } from 'react';
import Web3 from 'web3';
import './wallet.css'

const MetaWallet = () => {
    const [statusMessage, setStatusMessage] = useState('');
  const [walletBalance, setWalletBalance] = useState('0');

  const connectWallet = async () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(window.ethereum);

        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setStatusMessage('Wallet connected successfully!');

        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        const balance = await web3.eth.getBalance(account);
        const formattedBalance = web3.utils.fromWei(balance, 'ether');

        setWalletBalance(formattedBalance);
      } else {
        setStatusMessage('MetaMask extension not detected. Please install MetaMask to connect your wallet.');
      }
    } catch (error) {
      console.error(error);
      setStatusMessage('Failed to connect wallet. Please try again.');
    }
  };

  return (
    <div className='meta-wallet'>
      <h2>MetaMask Wallet Integration</h2>
      <p>Wallet Balance: {walletBalance} ETH</p>
      <button className='connect' onClick={connectWallet}>Connect Wallet</button>
      <p className='message'>{statusMessage}</p>
    </div>
  );
};

export default MetaWallet;
