angular
    .module('myApp')
    .component('accountComponent', {
        templateUrl: 'AccountComponent/AccountComponent.html',
        controller: function(AccountStore) {
          this.Items = AccountStore.getItems();
        }
    })
