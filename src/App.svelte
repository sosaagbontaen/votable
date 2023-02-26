<script>
	let newStudentName = "";
	let newStudentHouse = "";
	let newStudentConcentration = "";
	let students = [
		{ name: 'Sam', house: 'Quincy', concentration: 'Computer Science', id: 1},
		{ name: 'Joseph', house: 'Eliot', concentration: 'History', id: 2},
		{name: 'Evin', house: 'Mather', concentration: 'Econ', id: 3},
		{ name: 'Andreas', house: 'Dunster', concentration: 'Computer Science', id: 4}
	]
	

	const addStudent = (studentID) =>{
		let newStudent =
			{name: newStudentName,
			house: newStudentHouse,
			concentration: newStudentConcentration,
			id: studentID};
		if(newStudentName == "" || newStudentHouse == "" || newStudentConcentration == "")
		{
			alert("Please fill all fields");
		}
		else{
			students.push(newStudent);
			students = students;	
		}
		
	}
	const deleteStudent = (id) =>{
		students = students.filter((student) => student.id != id)
	}
</script>

<main>
	{#if students.length != 1}
		<h4>{students.length} students</h4>
	{:else}
		<h4>{students.length} student</h4>
	{/if}

	
	<input type="text" placeholder = "Name" bind:value={newStudentName}>
	<input type="text" placeholder = "House" bind:value={newStudentHouse}>
	<input type="text" placeholder = "Concentration" bind:value={newStudentConcentration}>
	<button on:click={addStudent(students.length+1)}>Add Student</button>

	{#each students as student (student.id)}
		<div>
			<h4>{student.name}</h4>
			<p>{student.house} House | {student.concentration}</p>
			<button on:click={()=> deleteStudent(student.id)}>Delete</button>
		</div>
		{:else}
		<p>There are no people to show...</p>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>