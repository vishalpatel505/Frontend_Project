const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
  ];


/** Here we */

let price = 0 ;

let seatNumber = 0

let selectedSeats = [] ;

let seatArr = [] ;

let totalPrice = 0;

const seats = document.querySelectorAll("#seatCont .seat");

const selectedSeatHolder = document.getElementById('numberOfSeat') ;

const dropdown = document.querySelector('#selectMovie')
const movieNama = document.getElementById("movieName");
const moviePrice = document.getElementById("moviePrice");

const seatSelectedUpdates = document.querySelector('.noSelected');

const noOFSeatsUpdates = document.querySelector('#numberOfSeat')

const totalPriceOfSeat = document.querySelector('#totalPrice')

const continueBtn = document.getElementById('proceedBtn');

const cancelBtn = document.getElementById('cancelBtn');

moviesList.forEach((movie, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = movie.movieName;
    dropdown.appendChild(option);
});
  


  function updateSelectedValue(){
    const selectedIndex = dropdown.value;

    const selectedMovie = moviesList[selectedIndex];

    movieNama.textContent = selectedMovie.movieName;
    moviePrice.textContent = `$ ${selectedMovie.price}`;  
    price = selectedMovie.price;
  
  }


 dropdown.addEventListener('change',updateSelectedValue);

updateSelectedValue()


seats.forEach((seat)=>{
  
  seat.setAttribute('number', ++seatNumber)

  if(!seat.classList.contains('occupied')){

      seat.addEventListener('click',()=>{
        if(seat.classList.contains('selected')){        
          seat.classList.remove('selected');
          selectedSeats = selectedSeats.filter((value)=>{
            return value !== seat ; // here it will filter only seat which is deselected
          })

           seatArr = seatArr.filter((value)=>{
            return value !== seat.getAttribute('number') ; // here it will filter only seat which is deselected
          })

          if(selectedSeats.length <= 0){
            totalPrice = selectedSeats.length * price ;
            totalPriceOfSeat.textContent = `$ ${totalPrice}`
            noOFSeatsUpdates.textContent = selectedSeats.length ;
            seatSelectedUpdates.textContent = 'No seat Selected'
            return;
          }
        
        }
        else{
          seat.classList.add('selected');
          selectedSeats.push(seat) ;
          seatArr.push(seat.getAttribute('number'));
         
        }

        totalPrice = selectedSeats.length * price ;
        totalPriceOfSeat.textContent = `$ ${totalPrice}`
        noOFSeatsUpdates.textContent = selectedSeats.length ;
        renderSeat(seatArr);
      })
  }
})

function renderSeat(arr){
  seatSelectedUpdates.textContent = '' ;
  arr.forEach((value)=>{
    seatSelectedUpdates.textContent += value + ' '
  })
}

continueBtn.addEventListener('click',()=>{
  if(selectedSeats.length === 0 ){
      alert('Oops no seat Selected')
  }
  else{

    alert('Yayy ! Your Seat have been booked')
    selectedSeats.forEach((seat)=>{
      seat.classList.remove('selected');
      seat.classList.add('occupied')

    })
      totalPrice = 0;
      totalPriceOfSeat.textContent = `$ ${totalPrice}`
      selectedSeats = [];
      seatArr=[];
      seatSelectedUpdates.textContent = `No seat Selected`
      noOFSeatsUpdates.textContent = selectedSeats.length ;
      

  }
})


cancelBtn.addEventListener('click',()=>{

  selectedSeats.forEach((seat)=>{
    seat.classList.remove('selected');  
  })
  
  totalPrice = 0;
  totalPriceOfSeat.textContent = `$ ${totalPrice}`
  selectedSeats = [];
  seatSelectedUpdates.textContent = `No seat Selected`
  noOFSeatsUpdates.textContent = selectedSeats.length ;
      
})



// //Create you project here from scratch

// const moviesList = [
//     { movieName: "Flash", price: 7 },
//     { movieName: "Spiderman", price: 5 },
//     { movieName: "Batman", price: 4 },
//   ];

// // Use moviesList array for displaing the Name in the dropdown menu
// //Add eventLister to each unoccupied seat
// //Add eventLsiter to continue Button
// //Add eventListerner to Cancel Button
// const movieSelect = document.getElementById("selectMovie");
// const movieNameElement = document.getElementById("movieName");
// const moviePriceElement = document.getElementById("moviePrice");
// const selectedSeatsHolder = document.getElementById("selectedSeatsHolder");
// const totalPriceElement = document.getElementById("totalPrice");
// const continueBtn = document.getElementById("continueBtn");
// const cancelBtn = document.getElementById("cancelBtn");
// const seats = document.querySelectorAll("#seatCont .seat:not(.occupied)");

// // Movie data
// // const movieList = [
// //   { name: "Flash", price: 7 },
// //   { name: "Superman", price: 8 },
// //   { name: "Batman", price: 9 },
// // ];

// // Function to update movie details
// function updateMovieDetails() {
//   const selectedIndex = movieSelect.selectedIndex;
//   const selectedMovie = movieList[selectedIndex];

//   movieNameElement.textContent = selectedMovie.name;
//   moviePriceElement.textContent = selectedMovie.price;
//   updateTotalPrice();
// }

// // Function to update total price
// function updateTotalPrice() {
//   const selectedSeats = document.querySelectorAll(".seat.selected");
//   const moviePrice = parseFloat(moviePriceElement.textContent);
//   const totalPrice = selectedSeats.length * moviePrice;
//   totalPriceElement.textContent = totalPrice;
// }

// // Function to update selected seats
// function updateSelectedSeats() {
//   const selectedSeats = document.querySelectorAll(".seat.selected");
//   selectedSeatsHolder.innerHTML = "";

//   selectedSeats.forEach((seat) => {
//     const seatNumber = seat.getAttribute("data-seat-number");
//     const listItem = document.createElement("li");
//     listItem.textContent = `Seat ${seatNumber}`;
//     selectedSeatsHolder.appendChild(listItem);
//   });

//   updateTotalPrice();
// }

// // Event listener for movie selection
// movieSelect.addEventListener("change", updateMovieDetails);

// // Event listeners for seat selection
// seats.forEach((seat) => {
//   seat.addEventListener("click", () => {
//     seat.classList.toggle("selected");
//     updateSelectedSeats();
//   });
// });

// // Event listener for continue button
// continueBtn.addEventListener("click", () => {
//   const selectedSeats = document.querySelectorAll(".seat.selected");
//   if (selectedSeats.length === 0) {
//     alert("Oops! No seat selected.");
//   } else {
//     alert("Yayy! Your seats have been booked.");
//     selectedSeats.forEach((seat) => {
//       seat.classList.remove("selected");
//       seat.classList.add("occupied");
//     });
//     updateTotalPrice();
//     selectedSeatsHolder.innerHTML = "No seat selected";
//   }
// });

// // Event listener for cancel button
// cancelBtn.addEventListener("click", () => {
//   const selectedSeats = document.querySelectorAll(".seat.selected");
//   selectedSeats.forEach((seat) => {
//     seat.classList.remove("selected");
//   });
//   updateTotalPrice();
//   selectedSeatsHolder.innerHTML = "No seat selected";
// });

// // Initialize movie details and update default selection
// updateMovieDetails();
