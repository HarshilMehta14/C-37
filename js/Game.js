class Game{
    constructor(){

    }
    //getting info from database
    getState(){
        var gamestateref = database.ref("GameState");
        gamestateref.on("value",function(data){
            myGameState = data.val();

        })
    }

    //updating the database
    update(state){
        database.ref('/').update({
            GameState:state
        })
    }

    start(){
        if(myGameState === 0){
            player = new Player();
            player.getCount();

            form = new Form();
            form.display();
        }
    }

    play(){
        form.hide_Elements();
        textSize(30);
        text("Game Start", 130,250);
        
        Player.getPlayerInfo();
        
        if(allPlayers !== undefined){
            var displayPosition = 130;

            for(var i in allPlayers){
                if(i === "Player"+player.index){
                    fill("red");
                }else{
                    fill(0);
                }

                displayPosition = displayPosition + 20;
                textSize(20);
                text(allPlayers[i].Name + ":" + allPlayers[i].Distance, 120, displayPosition);

            }
        }

        if(keyIsDown(UP_ARROW)&& player.index !== null){
            player.distance = player.distance + 50;
            player.update();
            
        }
    }
}