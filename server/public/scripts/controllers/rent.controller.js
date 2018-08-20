realEstateApp.controller('RentController', function($http){
    let vm = this;
    vm.forRentArray = [];

    function getForRentListings(){
        // gets all listings from database with a type of rent
        $http({
            method: 'GET',
            url: '/listings/rent'
        }).then(function(response){
            // removes first item from response and assigns it to a variable
            let forRentArray = response.data;
            vm.lowestPrice = forRentArray.shift();
            vm.forRentArray = forRentArray;
        }).catch(function(error){
            alert('there was an error getting the for rent listings')
        })
    } // end getForRentListings

    vm.deleteListing = function(id){
        // deletes a listing from database with the specified id
        $http({
            method: 'DELETE',
            url: '/listings/' + id
        }).then(function(response){
            // update the DOM with the new database results
            getForRentListings();
        }).catch(function(error){
            alert('there was an error deleting the for rent listing');
        })
    } // end deleteListing

    // get listings on page load
    getForRentListings();
})