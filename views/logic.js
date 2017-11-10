$('#kitchenView').on('click', function(){
	event.preventDefault();
	console.log('yo');
	$('recipe').append( '<ul> {{#each stock}} {{#if this.spice}} <li> {{this.item_name}} </li> {{/if}} {{/each}}</ul>'
});