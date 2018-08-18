realEstateApp.controller('HomeController', function($http){
    let vm = this;

    console.log('hc');

    vm.submitNewListing = function(listing){
        console.log(listing);
        dataToSend = listing;

        $http({
            method: 'POST',
            url: '/listings',
            data: dataToSend
        }).then(function(response){
            console.log('back from server with: ', response.data);
        }).catch(function(error){
            console.log('back from server with: ', error);
        })
    }

})