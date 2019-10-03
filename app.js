


// const name = () => {
//   //fr (let i = 0, i<3;, i++){
 

  
  // return chooseName;
// } const name();

// const img = $("<image/>");
			const img = $("<img/>");



function nameTamo() {
 		let chooseName = prompt("Welcome to your new world! Please enter your Tomagotchi's name!");
 		$("#nameMetric").append(chooseName);
	} nameTamo();


class Tomo {
	constructor(name, age, hunger, sleepiness, boredom) {
		this.name = "George"
		this.age = 0
		this.hunger = 0
		this.sleepiness = 0
		this.boredom = 0
	}



	 startGame() {
	 	//nameTamo();		//because it's inside a class, you have to reference any properties or references by 'this.'
		this.updateHunger();
		this.updateSleepiness();
		this.updateBoredom();
		this.updateAge();
		//this.morphToma();
	} 


	morphToma() {
	const img = $("<img/>");
	if (this.age > 2) {
		console.log('hi');
		img.attr('src', 'https://i.imgur.com/kIlhQrU.jpg');
		} if (this.age > 5) {
			img.attr('src', 'https://img.rankedboost.com/wp-content/plugins/ice/riot/poksimages/poks7new/76_Alolan%20Golem.png');
		}
	}


	updateAge() {
		console.log(this.age);
		const tomoScope = this			//because icnreasehuger is different scope than update hunger, we need tomoscope to pull 'this.hunger value'

		const ageCounter = setInterval(increaseAge, 1200);
		function increaseAge() {
			//const ageMetric = $("#ageMetric");
			//ageMetric.html(`Age: ${newAge++}`);
			//console.log(this.hunger);
			tomoScope.age++;	//directly affecting constructor
			$("#ageMetric").html(`Age: ${tomoScope.age}`);
			
			// const img = $("<img/>");
			if (tomoScope.age > 5) {
				console.log('hi');
				$('img').attr('src', 'https://i.imgur.com/OV0K9h3.png')
				$('img').css("height", "400px");
			} 
							// if (this.age > 5 ) {
							// img.attr('src', 'https://img.rankedboost.com/wp-content/plugins/ice/riot/poksimages/poks7new/76_Alolan%20Golem.png');
							// }
				
		}		
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

		const hungerCounter = setInterval(increaseHunger, 900);
		function increaseHunger() {
			//const ageMetric = $("#ageMetric");
			//ageMetric.html(`Age: ${newAge++}`);
			//console.log(this.hunger);
			tomoScope.hunger++;	//directly affecting constructor
			$("#hungerMetric").html(`Hunger: ${tomoScope.hunger}`);
				if (tomoScope.hunger === 10) {
					$('img').css("transform", "rotate(90deg");
					alert(`You have let ${tomoScope.name} starve to death! Press OK to start again!`);
					location.reload();
				}
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

		const sleepinessCounter = setInterval(increaseSleepiness, 1390);
		function increaseSleepiness() {
			//const ageMetric = $("#ageMetric");
			//ageMetric.html(`Age: ${newAge++}`);
			//console.log(this.hunger);
			tomoScope.sleepiness++;	//directly affecting constructor
			$("#sleepinessMetric").html(`Sleepiness: ${tomoScope.sleepiness}`);
				if (tomoScope.sleepiness === 11) {
					$('img').css("transform", "rotate(90deg");
					alert(`You have let ${tomoScope.name} die of exhaustion! Press OK to start again!`);
					location.reload();
				}
		}
	
	}


	updateBoredom(){
		//const hungerCounter = setInterval(increaseHunger, 1000);
		console.log("updateBoredom called");
		$('#Play').on('click', () => {
			console.log('play with pet');
			this.boredom--;  //directly affecting constructor
			$("#boredomMetric").html(`Boredom: ${this.boredom}`);
		});

		console.log(this.boredom);
		const tomoScope = this			//because icnreasehuger is different scope than update hunger, we need tomoscope to pull 'this.hunger value'

		const boredomCounter = setInterval(increaseBoredom, 800);
		function increaseBoredom() {
			//const ageMetric = $("#ageMetric");
			//ageMetric.html(`Age: ${newAge++}`);
			//console.log(this.hunger);
			tomoScope.boredom++;	//directly affecting constructor
			$("#boredomMetric").html(`Boredom: ${tomoScope.boredom}`);
				if (tomoScope.boredom === 11) {
					$('img').css("transform", "rotate(90deg");
					alert(`You have let ${tomoScope.name} die of boredom! Press OK to start again!`);
					location.reload();
				}
		}
	
	}

}
const newTomo = new Tomo();		//instantiating the class


//Click to start game
	$('#Start').on('click', () => {
  		console.log('button works')
 	 	newTomo.startGame();		//pulls the method from the class by using newTomo which instantiated it
	});									//stargame fucntion comes after because if its before it hasnt been created



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
