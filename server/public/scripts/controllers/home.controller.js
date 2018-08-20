realEstateApp.controller('HomeController', function($http){
    let vm = this;

    vm.submitNewListing = function(listing){
        dataToSend = listing;

        $http({
            method: 'POST',
            url: '/listings',
            data: dataToSend
        }).then(function(response){
            vm.newListing = {
                cost: '',
                sqft: '',
                type: '',
                city: '',
                image_path: ''
            }
        }).catch(function(error){
            alert('there was an error sending the data');
        })
    }

})