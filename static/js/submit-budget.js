"use strict";

function updateBudget(evt) {
    evt.preventDefault();

    var budget = $('#budget-form').serialize();

    $.post('/add-budget', budget, replaceBudget);
    console.log("Finished sending AJAX");
}

$('#budget-submit').click(updateBudget);

/***

$element = '<form action="/remove-budget/' + id + '" method="POST">';
$element += '<li>';
$element += String(results.budget) + '<br>';




$('#budget-div').append($element);






    <form action="/remove-budget/{{ budget.id }}" method="POST">

    <li>

        {{ budget.budget }}<br>
        {{ budget.category }}<br>
    </li>
        <input type="Submit" value="Remove">
    </form>

***/