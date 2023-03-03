<script>
    import {createEventDispatcher} from 'svelte';
    import Button from "../shared/Button.svelte"

    let dispatch = createEventDispatcher();
    let fields = {question: '', answerA: '', answerB: ''};
    let errors = {question: '', answerA: '', answerB: ''};
    let valid = false;

    const submitHandler = () =>{
    valid = true;

    //validate qeustion
        if (fields.question.trim().length < 5){
            valid = false;
            errors.question = 'Qusetion must be at least 5 characters long';
        } else{
            errors.question = '';
        }
    //validate answer A
    if (fields.answerA.trim().length < 1){
            valid = false;
            errors.answerA = 'Answer A cannot be empty';
        } else{
            errors.answerA = '';
        }
    //validate answer B
    if (fields.answerB.trim().length < 1){
            valid = false;
            errors.answerB = 'Answer B cannot be empty';
        } else{
            errors.answerB = '';
        }

    if (valid){
        //Note : This is not a good way to get a randomized ID, this is just a placeholder for now
        let poll = {...fields, votesA: 0, votesB: 0, id: Math.random()};
        dispatch('add', poll);
        //console.table('valid',fields);
    }
}
</script>


<!--Prevent the default action of refreshing the page after submitting-->
<form on:submit|preventDefault={submitHandler}>
    <div class="form-field">
        <label for="question">Poll Question</label>
        <input type="text" id="question" bind:value={fields.question}>
        <div class="error">{errors.question}</div>
    </div>
    <div class="form-field">
        <label for="answer-a">Answer A:</label>
        <input type="text" id="answer-a" bind:value={fields.answerA}>
        <div class="error">{errors.answerA}</div>
    </div>
    <div class="form-field">
        <label for="answer-b">Answer B:</label>
        <input type="text" id="answer-b" bind:value={fields.answerB}>
        <div class="error">{errors.answerB}</div>
    </div>
    <Button>Add Poll</Button>
</form>

<style>
    form{
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }
    .form-field{
        margin: 18px auto;
    }
    input{
        width: 100%;
        border-radius:6px;
    }
    label{
        margin: 10px auto;
        text-align: left;
    }
    .error{
        font-weight: bold;
        font-size: 12px;
        color: red;
    }
</style>