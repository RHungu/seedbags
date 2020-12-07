/***
 * This function calculates required bag count given a list of client seed orders
 * Author: Raphael Hungu raphael.hungu@gmail.com
 * Last updated: 5th Dec 2020
 */

function getBagCounts(clientOrders, availableBagSizes) {
    let bagsQty =[
        { size: 4, count: 0 },
        { size: 2, count: 0 },
        { size: 1, count: 0 }       
    ]

    //first we sort the availableBagSizes array in descending order.
    availableBagSizes.reverse();

    // Iterate through the orders to get number of bags for each order

    for(i=0; i< clientOrders.length; i++){
        let order = clientOrders[i];

        //Now iterate through the available bag sizes starting with the largest size

        for(j=0;j < availableBagSizes.length;j++){
            let bagSize = availableBagSizes[j];
            bagsQty[j].count = bagsQty[j].count + Math.floor(order/bagSize);
            order = order%bagSize;
        
        }

        //if there is still an amont in 'order' after we have gone through the bags we check if it is 0.5

        if(order > 0){
            if(order == 0.5){
                // add 0.5 to the quantity of 1kg size bags
                bagsQty[2].count = bagsQty[2].count + 0.5 
            }
            else{
                console.log('The order quantity cannot be fulfilled');
                return;
            }
        }

    }

    return bagsQty;
    }

module.exports = getBagCounts;