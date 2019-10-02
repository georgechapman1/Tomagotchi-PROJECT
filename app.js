


// const name = () => {
//   //fr (let i = 0, i<3;, i++){
 

  
  // return chooseName;
// } const name();

	// $('#Play').on('click', () => {
 //  		console.log('button works')
 // 	 	startGame();
	// };
function nameTamo() {
 		let chooseName = prompt("Welcome to your new world! Please enter your Tomagotchi's name!");
 		$("#nameMetric").append(chooseName);
	} nameTamo();


class Tomo {
	constructor(name, age, hunger, sleepiness, boredom) {
		this.name = "George"
		this.age = 1
		this.hunger = 2
		this.sleepiness = 3
		this.boredom = 4
	}


	 startGame() {
	 	//nameTamo();					//because it's inside a class, you have to reference any properties or references by 'this.'
		this.updateHunger();
		this.updateSleepiness();
		this.updateBoredom();
	} 





	updateHunger(){
		//const hungerCounter = setInterval(increaseHunger, 1000);
		$('#Feed').on('click', () => {
		console.log('fed pet');
		this.hunger--;  //directly affecting constructor
		$("#hungerMetric").html(`Hunger: ${this.hunger}`);

		});

		console.log(this.hunger);
		const tomoScope = this			//because icnreasehuger is different scope than update hunger, we need tomoscope to pull 'this.hunger value'

		const hungerCounter = setInterval(increaseHunger, 1000);
		function increaseHunger() {
			//const ageMetric = $("#ageMetric");
			//ageMetric.html(`Age: ${newAge++}`);
			//console.log(this.hunger);
			tomoScope.hunger++;	//directly affecting constructor
			$("#hungerMetric").html(`Hunger: ${tomoScope.hunger}`);
		}
	
	}

	updateSleepiness(){
		//const hungerCounter = setInterval(increaseHunger, 1000);
		$('#Lights').on('click', () => {
		console.log('sleep pet');
		this.sleepiness--;  //directly affecting constructor
		$("#sleepinessMetric").html(`Sleepiness: ${this.sleepiness}`);

		});

		console.log(this.sleepiness);
		const tomoScope = this			//because icnreasehuger is different scope than update hunger, we need tomoscope to pull 'this.hunger value'

		const sleepinessCounter = setInterval(increaseSleepiness, 1000);
		function increaseSleepiness() {
			//const ageMetric = $("#ageMetric");
			//ageMetric.html(`Age: ${newAge++}`);
			//console.log(this.hunger);
			tomoScope.sleepiness++;	//directly affecting constructor
			$("#sleepinessMetric").html(`Sleepiness: ${tomoScope.sleepiness}`);
		}
	
	}


	updateBoredom(){
		//const hungerCounter = setInterval(increaseHunger, 1000);
		$('#Play').on('click', () => {
		console.log('play with pet');
		this.boredom--;  //directly affecting constructor
		$("#boredomMetric").html(`Boredom: ${this.boredom}`);

		});

		console.log(this.boredom);
		const tomoScope = this			//because icnreasehuger is different scope than update hunger, we need tomoscope to pull 'this.hunger value'

		const boredomCounter = setInterval(increaseBoredom, 1000);
		function increaseBoredom() {
			//const ageMetric = $("#ageMetric");
			//ageMetric.html(`Age: ${newAge++}`);
			//console.log(this.hunger);
			tomoScope.boredom++;	//directly affecting constructor
			$("#boredomMetric").html(`boredom: ${tomoScope.boredom}`);
		}
	
	}







}
const newTomo = new Tomo();





// 		//function to increase Hunger
// 		//if feed is clicked, hunger goes down by 1 interval
// 		var hungerCounter = setInterval(increaseHunger, 1000);

// 		function increaseHunger() {
// 			const hungerMetric = $("#hungerMetric");
// 			this.hunger--;
// 			hungerMetric.text(`Hunger: ${this.hunger}`);

// 				$('.Feed').on('click', () => {
// 				console.log('fed pet');
// 				this.hunger--;
// 				});

// 		}


// 		//function to increase sleepiness
// 		var sleepinessCounter = setInterval(increaseSleepiness, 2000);

// 		function increaseSleepiness() {
// 		const sleepinessMetric = $("#sleepinessMetric");
// 		this.sleepiness--;
// 		sleepinessMetric.text(`Sleepiness: ${this.sleepiness}`);
// 		}
// 		//function to increase boredom
// 		var boredomCounter = setInterval(increaseBoredom, 3000);

// 		function increaseBoredom() {
// 		const boredomMetric = $("#boredomMetric");
// 		this.boredom--;
// 		boredomMetric.text(`Boredom: ${this.boredom}`);		
// 		}

		
		

	
//  	}

// }
	


    // create a setInterval that countdowns down to zero
    // and updates the DOM for each second representing the
    // time,

    // when reach zero we want to clear the interval
    // and increase the round number!
