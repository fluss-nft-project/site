var INFURA_PID = "64858dab3e1a4914b08ca666cac50a6e";
var ALCHEMY_PID = "bReFMaVfNuVIfqMn0F7wN70WlUQSEO8O";
var CONTRACT_ADDR = "0x0f5835DE26edc0898d6FD58233dfB07182e9A160";
var NETWORK = "mainnet";
var REFRESH_FREQ = 5000;
var NUM_CONFIRMATION = 3;
var CONTRACT_ABI = [
        {
                    "inputs": [
                                    {
                                                        "internalType": "address",
                                                        "name": "miladyMakerContract_",
                                                        "type": "address"
                                                    }
                                ],
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
        {
                    "inputs": [],
                    "name": "ApprovalCallerNotOwnerNorApproved",
                    "type": "error"
                },
        {
                    "inputs": [],
                    "name": "ApprovalQueryForNonexistentToken",
                    "type": "error"
                },
        {
                    "inputs": [],
                    "name": "ApprovalToCurrentOwner",
                    "type": "error"
                },
        {
                    "inputs": [],
                    "name": "ApproveToCaller",
                    "type": "error"
                },
        {
                    "inputs": [],
                    "name": "BalanceQueryForZeroAddress",
                    "type": "error"
                },
        {
                    "inputs": [],
                    "name": "MintToZeroAddress",
                    "type": "error"
                },
        {
                    "inputs": [],
                    "name": "MintZeroQuantity",
                    "type": "error"
                },
        {
                    "inputs": [],
                    "name": "OwnerQueryForNonexistentToken",
                    "type": "error"
                },
        {
                    "inputs": [],
                    "name": "TransferCallerNotOwnerNorApproved",
                    "type": "error"
                },
        {
                    "inputs": [],
                    "name": "TransferFromIncorrectOwner",
                    "type": "error"
                },
        {
                    "inputs": [],
                    "name": "TransferToNonERC721ReceiverImplementer",
                    "type": "error"
                },
        {
                    "inputs": [],
                    "name": "TransferToZeroAddress",
                    "type": "error"
                },
        {
                    "anonymous": false,
                    "inputs": [
                                    {
                                                        "indexed": true,
                                                        "internalType": "address",
                                                        "name": "owner",
                                                        "type": "address"
                                                    },
                                    {
                                                        "indexed": true,
                                                        "internalType": "address",
                                                        "name": "approved",
                                                        "type": "address"
                                                    },
                                    {
                                                        "indexed": true,
                                                        "internalType": "uint256",
                                                        "name": "tokenId",
                                                        "type": "uint256"
                                                    }
                                ],
                    "name": "Approval",
                    "type": "event"
                },
        {
                    "anonymous": false,
                    "inputs": [
                                    {
                                                        "indexed": true,
                                                        "internalType": "address",
                                                        "name": "owner",
                                                        "type": "address"
                                                    },
                                    {
                                                        "indexed": true,
                                                        "internalType": "address",
                                                        "name": "operator",
                                                        "type": "address"
                                                    },
                                    {
                                                        "indexed": false,
                                                        "internalType": "bool",
                                                        "name": "approved",
                                                        "type": "bool"
                                                    }
                                ],
                    "name": "ApprovalForAll",
                    "type": "event"
                },
        {
                    "anonymous": false,
                    "inputs": [
                                    {
                                                        "indexed": true,
                                                        "internalType": "address",
                                                        "name": "previousOwner",
                                                        "type": "address"
                                                    },
                                    {
                                                        "indexed": true,
                                                        "internalType": "address",
                                                        "name": "newOwner",
                                                        "type": "address"
                                                    }
                                ],
                    "name": "OwnershipTransferred",
                    "type": "event"
                },
        {
                    "anonymous": false,
                    "inputs": [
                                    {
                                                        "indexed": true,
                                                        "internalType": "address",
                                                        "name": "from",
                                                        "type": "address"
                                                    },
                                    {
                                                        "indexed": true,
                                                        "internalType": "address",
                                                        "name": "to",
                                                        "type": "address"
                                                    },
                                    {
                                                        "indexed": true,
                                                        "internalType": "uint256",
                                                        "name": "tokenId",
                                                        "type": "uint256"
                                                    }
                                ],
                    "name": "Transfer",
                    "type": "event"
                },
        {
                    "inputs": [
                                    {
                                                        "internalType": "uint256",
                                                        "name": "numTokens",
                                                        "type": "uint256"
                                                    },
                                    {
                                                        "internalType": "address",
                                                        "name": "addr",
                                                        "type": "address"
                                                    },
                                    {
                                                        "internalType": "bool",
                                                        "name": "ownsMilady",
                                                        "type": "bool"
                                                    }
                                ],
                    "name": "_computePrice",
                    "outputs": [
                                    {
                                                        "internalType": "uint256",
                                                        "name": "",
                                                        "type": "uint256"
                                                    }
                                ],
                    "stateMutability": "view",
                    "type": "function"
                },
        {
                    "inputs": [
                                    {
                                                        "internalType": "uint256",
                                                        "name": "numTokens",
                                                        "type": "uint256"
                                                    }
                                ],
                    "name": "adminMint",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
        {
                    "inputs": [
                                    {
                                                        "internalType": "address",
                                                        "name": "to",
                                                        "type": "address"
                                                    },
                                    {
                                                        "internalType": "uint256",
                                                        "name": "tokenId",
                                                        "type": "uint256"
                                                    }
                                ],
                    "name": "approve",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
        {
                    "inputs": [
                                    {
                                                        "internalType": "address",
                                                        "name": "owner",
                                                        "type": "address"
                                                    }
                                ],
                    "name": "balanceOf",
                    "outputs": [
                                    {
                                                        "internalType": "uint256",
                                                        "name": "",
                                                        "type": "uint256"
                                                    }
                                ],
                    "stateMutability": "view",
                    "type": "function"
                },
        {
                    "inputs": [
                                    {
                                                        "internalType": "uint256",
                                                        "name": "numTokens",
                                                        "type": "uint256"
                                                    }
                                ],
                    "name": "computePrice",
                    "outputs": [
                                    {
                                                        "internalType": "uint256",
                                                        "name": "",
                                                        "type": "uint256"
                                                    }
                                ],
                    "stateMutability": "view",
                    "type": "function"
                },
        {
                    "inputs": [
                                    {
                                                        "internalType": "uint256",
                                                        "name": "tokenId",
                                                        "type": "uint256"
                                                    }
                                ],
                    "name": "getApproved",
                    "outputs": [
                                    {
                                                        "internalType": "address",
                                                        "name": "",
                                                        "type": "address"
                                                    }
                                ],
                    "stateMutability": "view",
                    "type": "function"
                },
        {
                    "inputs": [
                                    {
                                                        "internalType": "address",
                                                        "name": "owner",
                                                        "type": "address"
                                                    },
                                    {
                                                        "internalType": "address",
                                                        "name": "operator",
                                                        "type": "address"
                                                    }
                                ],
                    "name": "isApprovedForAll",
                    "outputs": [
                                    {
                                                        "internalType": "bool",
                                                        "name": "",
                                                        "type": "bool"
                                                    }
                                ],
                    "stateMutability": "view",
                    "type": "function"
                },
        {
                    "inputs": [
                                    {
                                                        "internalType": "uint256",
                                                        "name": "numTokens",
                                                        "type": "uint256"
                                                    }
                                ],
                    "name": "mint",
                    "outputs": [],
                    "stateMutability": "payable",
                    "type": "function"
                },
        {
                    "inputs": [],
                    "name": "name",
                    "outputs": [
                                    {
                                                        "internalType": "string",
                                                        "name": "",
                                                        "type": "string"
                                                    }
                                ],
                    "stateMutability": "view",
                    "type": "function"
                },
        {
                    "inputs": [],
                    "name": "owner",
                    "outputs": [
                                    {
                                                        "internalType": "address",
                                                        "name": "",
                                                        "type": "address"
                                                    }
                                ],
                    "stateMutability": "view",
                    "type": "function"
                },
        {
                    "inputs": [
                                    {
                                                        "internalType": "uint256",
                                                        "name": "tokenId",
                                                        "type": "uint256"
                                                    }
                                ],
                    "name": "ownerOf",
                    "outputs": [
                                    {
                                                        "internalType": "address",
                                                        "name": "",
                                                        "type": "address"
                                                    }
                                ],
                    "stateMutability": "view",
                    "type": "function"
                },
        {
                    "inputs": [],
                    "name": "renounceOwnership",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
        {
                    "inputs": [
                                    {
                                                        "internalType": "address",
                                                        "name": "from",
                                                        "type": "address"
                                                    },
                                    {
                                                        "internalType": "address",
                                                        "name": "to",
                                                        "type": "address"
                                                    },
                                    {
                                                        "internalType": "uint256",
                                                        "name": "tokenId",
                                                        "type": "uint256"
                                                    }
                                ],
                    "name": "safeTransferFrom",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
        {
                    "inputs": [
                                    {
                                                        "internalType": "address",
                                                        "name": "from",
                                                        "type": "address"
                                                    },
                                    {
                                                        "internalType": "address",
                                                        "name": "to",
                                                        "type": "address"
                                                    },
                                    {
                                                        "internalType": "uint256",
                                                        "name": "tokenId",
                                                        "type": "uint256"
                                                    },
                                    {
                                                        "internalType": "bytes",
                                                        "name": "_data",
                                                        "type": "bytes"
                                                    }
                                ],
                    "name": "safeTransferFrom",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
        {
                    "inputs": [
                                    {
                                                        "internalType": "address",
                                                        "name": "operator",
                                                        "type": "address"
                                                    },
                                    {
                                                        "internalType": "bool",
                                                        "name": "approved",
                                                        "type": "bool"
                                                    }
                                ],
                    "name": "setApprovalForAll",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
        {
                    "inputs": [
                                    {
                                                        "internalType": "bool",
                                                        "name": "v",
                                                        "type": "bool"
                                                    }
                                ],
                    "name": "setHaltMint",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
        {
                    "inputs": [
                                    {
                                                        "internalType": "bool",
                                                        "name": "v",
                                                        "type": "bool"
                                                    }
                                ],
                    "name": "setIsReveal",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
        {
                    "inputs": [
                                    {
                                                        "internalType": "string",
                                                        "name": "v",
                                                        "type": "string"
                                                    }
                                ],
                    "name": "setURI",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
        {
                    "inputs": [
                                    {
                                                        "internalType": "bytes4",
                                                        "name": "interfaceId",
                                                        "type": "bytes4"
                                                    }
                                ],
                    "name": "supportsInterface",
                    "outputs": [
                                    {
                                                        "internalType": "bool",
                                                        "name": "",
                                                        "type": "bool"
                                                    }
                                ],
                    "stateMutability": "view",
                    "type": "function"
                },
        {
                    "inputs": [],
                    "name": "symbol",
                    "outputs": [
                                    {
                                                        "internalType": "string",
                                                        "name": "",
                                                        "type": "string"
                                                    }
                                ],
                    "stateMutability": "view",
                    "type": "function"
                },
        {
                    "inputs": [
                                    {
                                                        "internalType": "uint256",
                                                        "name": "tokenId",
                                                        "type": "uint256"
                                                    }
                                ],
                    "name": "tokenURI",
                    "outputs": [
                                    {
                                                        "internalType": "string",
                                                        "name": "",
                                                        "type": "string"
                                                    }
                                ],
                    "stateMutability": "view",
                    "type": "function"
                },
        {
                    "inputs": [],
                    "name": "totalSupply",
                    "outputs": [
                                    {
                                                        "internalType": "uint256",
                                                        "name": "",
                                                        "type": "uint256"
                                                    }
                                ],
                    "stateMutability": "view",
                    "type": "function"
                },
        {
                    "inputs": [
                                    {
                                                        "internalType": "address",
                                                        "name": "from",
                                                        "type": "address"
                                                    },
                                    {
                                                        "internalType": "address",
                                                        "name": "to",
                                                        "type": "address"
                                                    },
                                    {
                                                        "internalType": "uint256",
                                                        "name": "tokenId",
                                                        "type": "uint256"
                                                    }
                                ],
                    "name": "transferFrom",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
        {
                    "inputs": [
                                    {
                                                        "internalType": "address",
                                                        "name": "newOwner",
                                                        "type": "address"
                                                    }
                                ],
                    "name": "transferOwnership",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
        {
                    "inputs": [],
                    "name": "withdraw",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                }
]
