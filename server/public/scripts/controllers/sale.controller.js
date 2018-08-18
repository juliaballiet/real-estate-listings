realEstateApp.controller('SaleController', function($http){
    let vm = this;
    vm.forSaleArray = [];
    console.log('sc')

    function getForSaleListings(){
        console.log('getForSaleListings');

        $http({
            method: 'GET',
            url: '/listings/sale'
        }).then(function(response){
            console.log('back from server with: ', response.data);
            vm.forSaleArray = response.data;
        }).catch(function(error){
            console.log('error: ', error);
            alert('there was an error getting the for sale listings')
        })
    }

    vm.deleteListing = function(id){
        console.log('delete: ', id);

        $http({
            method: 'DELETE',
            url: '/listings/' + id
        }).then(function(response){
            console.log('back from server with: ', response.data);
            getForSaleListings();
        }).catch(function(error){
            console.log('error: ', error);
            alert('there was an error deleting the for sale listing');
        })
    }

    getForSaleListings();
})