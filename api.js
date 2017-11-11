//submit array of ingredients into an API request


$("#findRecipe").on("click", function(event) {

  event.preventDefault();

  $.get('/api/recipes')
    .done(function(ingredients) {
      var ingredientsList = ingredients.map(stock => stock.item_name).join(',');
      var queryURL = "http://www.recipepuppy.com/api/?i=" + ingredientsList;
    
      $.ajax({
       
        url:queryURL,
        method: 'GET'
      })

      .done(function(response) {

        var response = JSON.parse(response);
        
        console.log(response)

        var newInfo = $('<div class="new-info col-xs-12">' 
          + "Title: " + response.results.title 
          + "<br>" 
          + response.results.thumbnail
          + "Ingredients: " + response.results.ingredients
          + "<br>"  
          + "Recipe Link: <a href=" + response.results.href + ">" + response.results.href + "</a>" 
          + "</div>"
          );
  
        $('#recipes').append(newInfo);
      };

      
      });
    })
