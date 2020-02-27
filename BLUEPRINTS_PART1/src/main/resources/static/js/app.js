var App = (function () {
  var author_select;		
  var blueprints = [];
  blueprints["fernando"] = [
        {
            name: "blue1",
            num_points: 10
        },
        {
            name: "blue2",
            num_points: 11
        }
    ]
	var getauthorselect = function () {
	  console.log(App.author_select);
	};
	var selectauthor = function () {	
	  App.author_select=$("#author").val();
	};
  
  var findblueprintsbyauthor = function () {
	  var tempo = apimock.getBlueprintsByAuthor(App.author_select,(err,res)=>console.log(res));
	  	
  };
  return{
	  selectauthor: selectauthor,
	  findblueprintsbyauthor: findblueprintsbyauthor,
	  getauthorselect: getauthorselect
  };  
  		
  
})();