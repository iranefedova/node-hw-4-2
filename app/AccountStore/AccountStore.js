'use strict';

angular
    .module('myApp')
    .factory('AccountStore', function() {

        const state = {
            accountInfo: {}
        };

        return {
            getItems()  {
                return state.accountInfo;
            },
            addItem(item) {
                state.accountInfo = {
                    name: item.name,
                    email: item.email,
                    phone: item.phone
                };
            }
        };

    })
