var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
var o = ["th","st","nd","rd"]

function display_colors()
{
    for(i=1; i<color.length;i++)
    {
        if(i<=3)
        {
            console.log(i+""+o[i]+" choice is "+color[i]);
        }
        else
        {
                console.log(i+""+o[0]+" choice is" +color[i])
        }
    }
}

display_colors()