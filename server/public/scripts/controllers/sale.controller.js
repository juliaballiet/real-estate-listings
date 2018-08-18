realEstateApp.controller('SaleController', function($http){
    let vm = this;
    vm.forSaleArray = [];
    console.log('sc')

    function getForSaleListings(){
        console.log('getForSaleListings');

        $http({
            method: 'GET',
            url: '/listings'
        }).then(function(response){
            console.log('back from server with: ', response.data);
            vm.forSaleArray = response.data;
        }).catch(function(error){
            console.log('error: ', error);
            alert('there was an error getting the for sale listings')
        })
    }

    getForSaleListings();
})