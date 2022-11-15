let textDiv = document.getElementById("text_div");
let submitButton = document.getElementById("submit_button");

function submitText()
{   
    let textInput = document.getElementById("text_input").value;
    console.log(textInput);

    if (textInput.value === "")
    {
        return console.log("Please type something!");
    }

    const colorsArray = ["blue", "red", "green"];
    const lettersArray = [];
    let j = 0;
    
    for (let i = 0; i < textInput.length; i++) 
    {
        lettersArray.push(`<span style="color:${colorsArray[j]}">${textInput[i]}</span>`);
        textDiv.innerHTML += lettersArray[i];

        console.log(lettersArray[i])
        
        if (j === colorsArray.length - 1)
        {
            j = 0
        } else { j++ }
        
    }

    console.log(lettersArray);
    console.log(colorsArray);

    
    //join les span du tableau
    // Wrong solution because can't colorize
    // textDiv.innerHTML = textInput.value;
}
submitButton.addEventListener("click", submitText);


