let clickCount = 0;
let seatCount = 0;
const seats = document.querySelectorAll('.seat');



for (let i = 0; i < seats.length; i++) {
    const seat = seats[i];
    seat.addEventListener('click', function(e) {
        if (!seat.disabled) {
            if (clickCount < 4) {
                setColor(seat);


                seatBookedAndLeft('seat-booked');
                seatBookedAndLeft('seat-left');

                const seatDetails = document.getElementById('seat-name-price');
                const div = document.createElement('div');
                const pName = document.createElement('p');
                const pClass = document.createElement('p');
                const pPrice = document.createElement('p');

                const grandTotal = document.getElementById('grand-total');
                const totalPriceBox = document.getElementById('total-price-box');
                let price = parseInt(totalPriceBox.innerText);

                let ticketPrice = 550;
                price += ticketPrice;
                totalPriceBox.innerText = price;
                grandTotal.innerText = price;

                pName.innerText = seat.innerText;
                pClass.innerText = "Economy";
                pPrice.innerText = ticketPrice;


                div.appendChild(pName);
                div.appendChild(pClass);
                div.appendChild(pPrice);

                seatDetails.appendChild(div);


            }
            seat.disabled = true;
        }
    })
}

function setColor(seat) {
    seat.classList.remove('bg-[#F7F8F8]');
    seat.classList.add('bg-[#1DD100]');
    clickCount++;
}

function seatBookedAndLeft(seat) {
    if (seat === 'seat-booked') {
        const seatBooked = document.getElementById('seat-booked');
        let seatBookedCount = parseInt(seatBooked.innerText);
        seatBookedCount += 1;
        seatBooked.innerText = seatBookedCount;
    } else if (seat === 'seat-left') {
        const seatLeft = document.getElementById('seat-left');
        let seatLeftCount = parseInt(seatLeft.innerText);
        seatLeftCount -= 1;
        seatLeft.innerText = seatLeftCount;
    }
}

const applyButton = document.getElementById("apply-button");
applyButton.addEventListener('click', function() {
    const totalPriceBox = document.getElementById('total-price-box');
    const grandTotal = document.getElementById('grand-total');

    let totalPrice = parseInt(totalPriceBox.innerText);
    console.log(totalPrice);

    const couponCode = document.getElementById('coupon-code');
    const couponCodeValue = couponCode.value;


    if (couponCodeValue === 'NEW15' && clickCount > 0) {
        grandTotal.innerText = (totalPrice - totalPrice * 0.15).toFixed(2);
        document.getElementById('input-box').classList.add('hidden');
    } else if (couponCodeValue === 'Couple 20' && clickCount > 0) {
        grandTotal.innerText = (totalPrice - totalPrice * 0.20).toFixed(2);
        document.getElementById('input-box').classList.add('hidden');
    } else {
        alert("Invalid Coupon Code");
    }

})

const nextButton = document.getElementById('next');
nextButton.addEventListener('click', function() {
    if (clickCount > 0) {
        const modal = document.getElementById('my_modal_1');
        modal.showModal();
    } else {
        alert("Please select your seat first");
    }
})