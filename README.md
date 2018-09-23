# eos-hackathon-will

## EOS Hackathon - Account Legal Will Project with account delegation.

### Contract installation instructions

0. Get into Docker shell if running Docker:

docker exec -it eosio_notechain_container /bin/bash

1. Copy willchain.cpp under contracts/willchain/ into EOS environment.

2. Compile smart contract:

eosiocpp -o /opt/eosio/bin/contracts/willchain/willchain.wast /opt/eosio/bin/contracts/willchain/willchain.cpp  

eosiocpp -g /opt/eosio/bin/contracts/willchain/willchain.abi /opt/eosio/bin/contracts/willchain/willchain.cpp 

3. Create smart contract owner account:

cleos create account eosio willchain <PUB-KEY> <PUB-KEY>

4. Install smart contract:

cleos set contract willchain /opt/eosio/bin/contracts/willchain --permission willchain

5. Import useraaaaaaa key:

cleos wallet import --private-key 5K7mtrinTFrVTduSxizUc5hjXJEtTjVTsqSHeBHes1Viep86FP5

6. Import willchain private key into wallet:

cleos wallet import --private-key <PRIVATE-KEY>

7. Create first entry in smart contract:

cleos push action willchain update '{"_user":"useraaaaaaaa","_trustee":"useraaaaaaab","_will":"Create will test"}' -p useraaaaaaaa

8. Check data in contract is populated:

cleos get table willchain willchain willstruct





