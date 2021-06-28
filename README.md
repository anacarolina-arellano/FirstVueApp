### **PG20 T3 JavaScript Frameworks - AA3: Running Client App**
Submitted by: Ana Carolina Arellano
Date: 24/06/2021
Version: 2
----------
#### **Description of what the project does**
This is the final version of the Warehouse app that I developed during the term. It contains the UI, navigation, local storage and the four main roles of the project: the customer, the inventory manager, the shipping picker and sales. This app consumes data from a document that mimics how  an API works and gives the possibility to the user of adding more products to the warehouse through the inventory manager, which are then displayed in the customer roles. 

In order to achieve the goals of the app, I made use of Vuex's State, Actions, Mutations and Getters. I also created a local file that stored the information about the products in order to simulate the retrieval of data from an api. Finally, order to be able to retrieve information directly from the user and show it in another page (such as in invenntory manager and customer), I made use of local storage.

#### **Download/Install**
---------
 - Browse to demo link
 - [Download Zip](https://github.com/anacarolina-arellano/FirstVueApp)
 - Clone the 'master' branch of repository into your machine
 - From the terminal go to the location where the repo was cloned
 - From the 'FirstVueApp' folder run the command 'npm install' to install the dependencies



#### **How to use**
--------
- In the terminal go to the project
- Run the command 'vue ui' to run the project
- In your browser go to: http://localhost:8000
- Go to tasks -> serve -> click on 'run task'
- Click on 'Open App'

* In order to add a new product to the warehouse you need to write the name of the image with its extension. Some available images are: shoes.jpeg, swimwear.jpeg and shirt.png

* The shopping cart is now working, you have to click on the  yellow rectangle that sais the name and then you can click the "my cart" button, were it will be displayed.

## Caveats
The interaction between the roles of customer and inventory manager is complete and it works to illustrate the use of data within the project, nonetheless, I couldn't finish the roles of sales and shipping picker, which should send data to the store and consume from it to.
The payment of the products is considered to be managed by a third party, for this reason, when the checkout button is clicked, the cart is emptied.

## Built With
* **Vue.js 2.0** - The web framework used.
* **Vuetify** - The library used for Vue's components.
* **CSS Grid** - Used for this application's main styling structure.
* **CSS Flexbox** - Used as a sub structure and supports this application's styling.

## Authors
* **Clinton Jay Ramonida** - *Integrated Vue.js 2.0, (Expanded from HTML5AppTemplate).*
* **Scott Henshaw** - *Initial work (HTML5AppTemplate).*
* **Ana Carolina Arellano** - *Warehouse implementation*

## License
This project is licensed under the MIT License - see the LICENSE.md file for details

