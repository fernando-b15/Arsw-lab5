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
	var selectauthor = function (author) {
	  App.author_select=author;
	};
  
  var findblueprintsbyauthor = function () {
	  console.log(blueprints[App.author_select]);
  };
  return{
	  selectauthor: selectauthor,
	  getauthorselect: getauthorselect
  };  
  		
  
})();