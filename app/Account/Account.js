    'use strict';

    angular
        .module('myApp')
        .component('accountComponent', {
            templateUrl: 'Account/Account.html',
            controller: function(AccountStore) {
              var vm = this;

              vm.addAccount = function(user) {
                  AccountStore.addItem(user);
              };

              vm.getItems = function() {
                  AccountStore.getItems();
              };
            }
        })
