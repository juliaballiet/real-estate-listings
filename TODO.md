#TO DO

- [X] basic setup
    - [X] spin up server
    - [X] set up html with ng-view
    - [X] nav bar
    - [X] source client.js, angular
    - [X] config routes
    - [X] set up router
    - [X] set up database

- [X] home
    - [X] html view page
        - [X] inputs to add a new listing
            - cost
            - sqft
            - type
            - city
            - image_path
        - [X] choose an image for listing
    - [X] controller
        - [X] post route for new listings
    - [X] server
        - [X] post route for new listings

- [ ] for sale
    - [X] html view page
        - [X] display listings
        - [X] delete buttons for listings
    - [ ] controller
        - [X] get route for sale
        - [ ] delete route
    - server
        - [ ] get route for sale
        - [ ] delete route

- [ ] for rent
    - [ ] html view page
        - [ ] display listings
        - [ ] delete buttons for listings
    - [ ] controller
        - [ ] get route for rent
        - [ ] delete route
    - server
        - [ ] get route for rent
        - [ ] delete route

- [ ] css
    - [ ] display listings as "cards"

###STRETCH GOALS

- [ ] Create a dropdown/select so that the user doesn't need to type sale or rent for every new listing
- [ ] Create a dropdown/select so that the user doesn't need to type the image url for every new listing
- [ ] Display the least expensive property featured prominently at the top of the view
- [ ] Ability to search or filter by various parameters (try doing this using a server side route with a query parameter)
- [ ] Add other images to your application