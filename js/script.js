//Model
(function(){
    function appModel(){
        this.valueArr = [];
        //Initialize
        this.init = function(){
            for(var i=0;i<9;i++){
                var item = {};
                item.number = i+1;
                this.valueArr[i] = item;
            }
        }; 
        //shuffle
        this.shuffle = function(){
            var i,j,randomNumber,tempItem,itemList = this.valueArr ;            
            for(i =1, j= itemList.length; j > i; i++){
                randomNumber = Math.floor(Math.random() *j);
                tempItem = itemList[i];
                this.valueArr[i] = itemList[randomNumber];
                this.valueArr[randomNumber] = tempItem;
            }
        }
    }
    window.appModel = new appModel();    
})();

//View
(function(){
    function appView(){
        var $displayContainer = document.getElementById("innerContainer");

        this.init = function(values){
            display(values);
        };
        
        this.sort = function(values){
            display(values);
        };

        this.shuffle = function(values){
            display(values);
        };
        
        var display = function(data){
            var i,
                len,
                templText="";
            $displayContainer.replaceChildren();
            for(i=0,len=data.length;i<len;i++){
                if(i%3===0){
                    templText+= '<div class="row">';
                }
                
                templText+='<div class="column color_'+data[i].number+'" data-column='+(i+1)+'>'+data[i].number+'</div>';
                if(i%3===2){
                    templText+= '</div>';
                }
            }
            $displayContainer.innerHTML = templText;
        };
    }
    window.appView = new appView();
})();

//Controller
(function(model,view){
    function appController(){
        this.init = function(){
           model.init();             
           view.init(model.valueArr);            
        };
        this.sort = function(){
            model.init();
            view.sort(model.valueArr);
        }
        this.shuffle = function(){
            model.shuffle();
            view.shuffle(model.valueArr);
        }
    }
    window.appController = new appController();    
})(appModel,appView);
//Initialize Controller
appController.init();