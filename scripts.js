// // scripts.js

// const STATUS_MAP = {
//     shelf: {
//         color: 'green',
//         canReserve: true,
//         canCheckout: true,
//         canCheckIn: false,
//     },
//     reserved: {
//         color: 'blue',
//         canReserve: false,
//         canCheckout: true,
//         canCheckIn: false,
//     },
//     overdue: {
//         color: 'red',
//         canReserve: false,
//         canCheckout: false,
//         canCheckIn: true,
//     },
//     checkedOut: {
//         color: 'orange',
//         canReserve: false,
//         canCheckout: false,
//         canCheckIn: true,
//     }
// }

// // Edit below line 

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// checkin.0.color = none
// status.0.style.color = STATUS_MAP.status.color
// reserve.0 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// checkin.1.color = none
// status.1.style.color = STATUS_MAP.status.color
// reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// checkin.2.color = none
// status.2.style.color = STATUS_MAP.status.color
// reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'
/********************************************************************************************/

// solution 

// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

let book = document.querySelectorAll('.status')
let book_reserve = document.querySelectorAll('.reserve')
let book_checkout = document.querySelectorAll('.checkout')
let book_checkin = document.querySelectorAll('.checkin')

book[0].style.color = STATUS_MAP.overdue.color;

book[1].style.color = STATUS_MAP.reserved.color;

book[2].style.color = STATUS_MAP.shelf.color;

let button_reserve = document.querySelectorAll('.reserve')
let button_checkout = document.querySelectorAll('.checkout')
let button_checkin = document.querySelectorAll('.checkin')

for (let i = 0;i<3;i++){
    if (book[i].firstChild.nodeValue == 'reserved'){
        button_checkin[i].style.color = ''
        button_reserve[i].disabled = !STATUS_MAP.reserved.canReserve
        button_checkout[i].disabled = !STATUS_MAP.reserved.canCheckout
        button_checkin[i].disabled = !STATUS_MAP.reserved.canCheckIn
    } else if (book[i].firstChild.nodeValue == 'overdue') {
        button_checkin[i].style.color = ''
        button_reserve[i].disabled = !STATUS_MAP.overdue.canReserve
        button_checkout[i].disabled = !STATUS_MAP.overdue.canCheckout
        button_checkin[i].disabled = !STATUS_MAP.overdue.canCheckIn
    } else if (book[i].firstChild.nodeValue == 'shelf') {
        button_checkin[i].style.color = ''
        button_reserve[i].disabled = !STATUS_MAP.shelf.canReserve
        button_checkout[i].disabled = !STATUS_MAP.shelf.canCheckout
        button_checkin[i].disabled = !STATUS_MAP.shelf.canCheckIn
    }
}