realEstateApp.controller('SaleController', function ($http) {
    let vm = this;
    vm.forSaleArray = [];

    function getForSaleListings() {
        // gets all listings from database with a type of sale
        $http({
            method: 'GET',
            url: '/listings/sale'
        }).then(function (response) {
            // removes first item from response and assigns it to a variable
            let forSaleArray = response.data
            vm.lowestPrice = forSaleArray.shift();
            vm.forSaleArray = response.data;
        }).catch(function (error) {
            alert('there was an error getting the for sale listings')
        })
    } // end getForSaleListings

    vm.deleteListing = function (id) {
        // deletes a listing from database with the specified id
        $http({
            method: 'DELETE',
            url: '/listings/' + id
        }).then(function (response) {
            // update the DOM with the new database results
            getForSaleListings();
        }).catch(function (error) {
            alert('there was an error deleting the for sale listing');
        })
    } // end deleteListing

    // get listings on page load
    getForSaleListings();
})