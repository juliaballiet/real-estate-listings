realEstateApp.controller('RentController', function($http){
    let vm = this;
    vm.forRentArray = [];
    console.log('rc')

    function getForRentListings(){
        console.log('getForRentListings');

        $http({
            method: 'GET',
            url: '/listings/rent'
        }).then(function(response){
            console.log('back from server with: ', response.data);
            vm.forRentArray = response.data;
        }).catch(function(error){
            console.log('error: ', error);
            alert('there was an error getting the for rent listings')
        })
    }

    vm.deleteListing = function(id){
        console.log('delete: ', id);

        $http({
            method: 'DELETE',
            url: '/listings/' + id
        }).then(function(response){
            console.log('back from server with: ', response.data);
            getForRentListings();
        }).catch(function(error){
            console.log('error: ', error);
            alert('there was an error deleting the for rent listing');
        })
    }

    getForRentListings();
})