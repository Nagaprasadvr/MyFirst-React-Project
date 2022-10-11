export const Tokens = [
  {
    id: 1,
    img: "./assets/6001527.png",
    name: "Solana",
    consensus: "Consensus : PoS + PoH",
    background: "teal",
    description: `When Solana was born it seemed very different from the current blockchain.Later it came up with a new concept of consensus called
          proof to history to maintain a universal verifiable clock which had
          the potential to speed up transactions 100x faster than the
          traditional blockchain , Solana has the least gas fee or transaction
          fee as it used proof of stake consensus and also the Architecture and
          design of on-chain programs to be stateless and separate data-buffers
          called accounts to hold data. This type of model made it more scalable
          and Solana is currently one of the fastest blockchian.`,
    link: "https://solana.com",
  },

  {
    id: 2,
    img: "./assets/ethereum.png",
    name: "Ethereum",
    consensus: "Consensus : PoW -> PoS",
    background: "cadetblue",
    description: `Ethereum was initially inspired from Bitcoin and it came up with new
          prtocols on Building applications using the ethereum ecosystem . It
          introduced EVM - Ethereum Virtual Machine where we can write
          instructions in Solidity language to interact with the Blockchain for
          storing, retreiving , validating data on chain .After its rise ,a new
          idea called NFT was introduced which involved storing digital assets
          on Blockchain and owning them.`,
    link: "https://ethereum.org/en/",
  },
  {
    id: 3,
    img: "./assets/bitcoin.png",
    name: "Bitcoin",
    consensus: "Consensus : PoW",
    background: "skyblue",
    description: `Bitcoin is the first ever Bockchain that came into existence , it
          showed how a digital ledger can be used to store transactions of
          crypto currency which are transfered through cryptographically secure
          methods.A beautiful concept of digital signatures added more security
          and proof of work consensus algorithm made bitcoin most decentralized
          among others.`,
    link: "https://bitcoin.org/en/",
  },
  {
    id: 4,
    img: "./assets/filecoin.png",
    name: "Filecoin",
    consensus: "Consensus : PoST",
    background: "lightgreen",
    description: `Filecoin is a peer-to-peer network that stores files, 
    with built-in economic incentives to ensure files are stored reliably over time.
    In Filecoin, users pay to store their files on storage providers. 
    Storage providers are computers responsible for storing files and
    proving they have stored the files correctly over time.
    Anyone who wants to store their files or get paid for storing other users files can join Filecoin.
    Available storage, and the price of that storage, 
    is not controlled by any single company.
    Instead, Filecoin facilitates open markets for storing and retrieving files that anyone can participate in
    Filecoin includes a blockchain and native cryptocurrency (FIL). 
    Storage providers earn units of FIL for storing files. Filecoin's blockchain records transactions to send and receive FIL, 
    along with proofs from storage providers that they are storing their files correctly.`,
    link: "https://filecoin.io/",
  },
];
