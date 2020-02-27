var apimock = (function (App) {

    var mockdata = [];

    mockdata["JhonConnor"] = [
        {
            author: "JhonConnor",
            name: "house",
            points: [
                {
                    x: 10,
                    y: 20
                },
                {
                    x: 15,
                    y: 25
                },
                {
                    x: 45,
                    y: 25
                }
            ]
        },
        {
            author: "JhonConnor",
            name: "bike",
            points: [
                {
                    x: 30,
                    y: 35
                },
                {
                    x: 40,
                    y: 45
                }
            ]
        }
    ]

    mockdata['LexLuthor'] = [
        {
            author: 'LexLuthor',
            name: 'kryptonite',
            points: [
                {
                    x: 60,
                    y: 65
                },
                {
                    x: 70,
                    y: 75
                }
            ]
        }
    ]
	mockdata['ClarkKent'] = [
        {
            author: 'ClarkKent',
            name: 'krypton',
            points: [
                {
                    x: 90,
                    y: 95
                },
                {
                    x: 60,
                    y: 35
                }
            ]
        }
    ]

    return {
        App.getBlueprintsByAuthor= function(author, callback) {
            callback(null, mockdata[author]);
        },

        App.getBlueprintsByNameAndAuthor= function(name, author, callback) {
            blueprint = mockdata[author].find(function(blueprint) {
                return blueprint.name == name
            });
            callback(null, blueprint)
        }
    }

})(App || {});