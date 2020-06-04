var namePerson = document.getElementById('namePerson'),
	lastName = document.getElementById('lastName'),
	age = document.getElementById('age')
	writePerson = document.getElementById('writePerson'),
	idEmployee = document.getElementById('idEmployee'),
	roleEmployee = document.getElementById('roleEmployee'),
	people = document.getElementsByName('people');


function changeVisibility(){
	if(people[0].checked){
		idEmployee.style.display = 'none';
		roleEmployee.style.display = 'none';	
	}else{
		idEmployee.style.display = 'block';
		roleEmployee.style.display = 'block';
	}
	
}


function person(name, lastName, age){
	this.name = name;
	this.lastName = lastName;
	this.age = age;

	this.getResumen = () => {
		return `Your name is ${this.name} ${this.lastName}, you're ${this.age}. `;
	}
}

class employee extends person{
	constructor(name, lastName, age, id, role){
		super(name, lastName, age);
		this.id = id;
		this.role = role;


		this.getResumen = () => {
			return `Your name is ${this.name} ${this.lastName}, you're ${this.age}. Your ID is ${this.id} and your roles is ${this.role}`;
		}
	}
}

function newPerson(){
	if(people[0].checked){
		
		var buildPerson = new person(namePerson.value, lastName.value, age.value);
		writePerson.value = buildPerson.getResumen();
	}else{
		var buildEmployee = new employee(namePerson.value, lastName.value, age.value, idEmployee.value, roleEmployee.value);
		writePerson.value = buildEmployee.getResumen();		
	}
	
}
