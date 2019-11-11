/**
function check(a,object)
    {
        for(let i=0;i<a.length;i++)
        {
            if (a[i]===object)
            {
                return true;
            }
        }return false;
    }

**Q2.** 
```
function convertToSecond(time)
    {
        var hours=(time/60);
        var min=((time%3600)/60);
        var sec=time%60;
        var disp="";
        if(hours>0)
        {
             disp += "" + hours + ":" + min;
            console.log()
        }
        disp += "" + min + ":" + sec ;
    disp += "" + sec;
    return disp;

    }

**Q3.** Use the following data to solve the problems below.
```
var  aquarium = {
    filledWithWater: true,
    capacityInGallons: 12,
    numberOfRocks: 5,
    fish: [
            {
                type: 'goldfish' ,
                size: '3.5 inches',
                color: 'golden'
            },
            {
                type: 'puffer',
                size: '4 inches',
                color: 'tan'
            },
            {
                type: 'clown',
                size: '3 inches',
                color: 'orange'
            }
        ]
}
```
1. 

aquarium["capacityInGallons"];
2. 
aquarium["numberOfRocks"]+=2
3. 
console.log(aquarium["fish"][2]);
4. 
aquarium["fish"][1].size;
5. 
aquarium["fish"][0]["size"]='4 inches'

let nemo{type:'cartoon',size:'5 inches',color:'blue'};
aquarium["fish"]appendChild(nemo);

 */
 json = (require('./Data')); 
 json=JSON.parse(json);

let logjson = function()
     {
         for(let i=0;i<json.length;++i)
        {
            for(let key in json[i])
            {
                console.log(json[i][key])
            }
            //console.log()

        }
    }
    logjson();
        let logNames = function() 
            {
                for(let i =0;i<json.length;i++)
                {
                console.log(json[i]["name"])
                }
           
            };logNames();
                let logNameEyes = function() 
            {
                for(let i =0;i<json.length;i++)
                {
                console.log(json[i]["name"]+"has "+json[i]["eye_color"])
                }
            };logNameEyes();
                
            let logByMass = function() 
            {
                for(let i =0;i<json.length;i++)
                {
                    let spotter = json[i]["name"]
                if(spotter.length>75)
                {
                    console.log(spotter)
                }
              
                }

            };logByMass();


            /**bonus
             * function randie(runner)
{
    var number=math.floor(math.random()*runner);
    return number;
}
function isLeap(year)
{
    let boole;
    
        if((this.year%4)&&(this.year%400)==0)
        {
         boole=true;
        }else {boole=false; }
        return boole;
}
             */

    