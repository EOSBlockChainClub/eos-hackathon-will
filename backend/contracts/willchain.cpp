#include <eosiolib/eosio.hpp>
#include <eosiolib/print.hpp>
using namespace eosio;


class willchain : public eosio::contract {
  private:
    bool isnewwill( account_name user ) {
        willtable willobj(_self, _self);
        // get object by secordary key
        auto wills = willobj.get_index<N(getwillbyuser)>();
        auto will = wills.find(user);
        return will == wills.end();
    }
    /// @abi table
    struct willstruct {
        uint64_t      prim_key;
        account_name  user;      // Creator of the will
        account_name  trustee;   // Trustee on the will
        std::string   will;      // Will contract
        uint64_t      created;   // When created
        uint64_t      updated;

        // primary key
        auto primary_key() const { return prim_key; }
        // secondary key: user
        account_name get_will_by_user() const { return user; }
    };

    typedef eosio::multi_index< N(willstruct), willstruct,
            indexed_by< N(getwillbyuser), const_mem_fun<willstruct, account_name, &willstruct::get_will_by_user> >> willtable;
  
  public:
    using contract::contract;

    /// @abi action
    void update( account_name _user, account_name _trustee, std::string& _will ) {
        // to sign the action with the given account
        require_auth( _user );

        willtable obj(_self, _self);

        // create new will or update existing user will:
        if (isnewwill(_user)) {
            // new will object
            obj.emplace( _self, [&]( auto& address ) {
                address.prim_key  = obj.available_primary_key();
                address.user      = _user;
                address.trustee   = _trustee;
                address.will      = _will;
                address.created   = now();
                address.updated   = now();
            });
        } else {
            auto wills = obj.get_index<N(getwillbyuser)>();
            auto &will = wills.get(_user);
            // update will object
            obj.modify( will, _self, [&]( auto& address ) {
                address.user      = _user;
                address.trustee   = _trustee;
                address.will      = _will;
                address.updated   = now();
            });
        }
    }


};

EOSIO_ABI( willchain, (update) );
