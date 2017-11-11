// //submit array of ingredients into an API request
// console.log("app.js started");

// $("#findRecipe").on("click", function(event) 
// {
//   console.log("clicked");
//   event.preventDefault();

//   $.get('/api/recipes')
//     .done(function(ingredients) {
//       var ingredientsList = ingredients.map(stock => stock.item_name).join(',');
//       var queryURL = "http://www.recipepuppy.com/api/?q=" + ingredientsList;

//       console.log("------------------------------------");
//       console.log("URL: " + queryURL);
//       console.log("------------------------------------");

//       console.log(ingredientsList);
//       console.log("------------------------------------");
    
//       $.ajax({
//         url:queryURL,
//         method: 'GET'
//       })

//       .done(function(response) {
//         var response = JSON.parse(response);
        
//         console.log(response)
//       })

//       });

// });

console.log("__________________end on 25");

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
          
         console.log(__________response)
  
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
        });
  
       
       });
      });