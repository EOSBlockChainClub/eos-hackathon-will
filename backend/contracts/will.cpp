#include "will.hpp"

using namespace eosio;
using std::string;

class will : public contract
{
  using contract::contract;
  
  public:
  explicit blog(account_name self) : contract(self) {}

  //TODO: define actions

}
