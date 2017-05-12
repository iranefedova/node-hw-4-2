    'use strict';

    angular
        .module('myApp')
        .controller('AccountCtrl', function(AccountStore) {
          var vm = this;

          vm.addAccount = function(user) {
              AccountStore.addItem(user);
              console.log(user);
          };
        });
