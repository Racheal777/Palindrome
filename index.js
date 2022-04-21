
const search = document.getElementById('search')
const word = document.getElementById('word')
const btn = document.getElementById('btn')
const toggle = document.getElementById('icon')


//toggling betwwen dark and light mode
//grab the whole html content
//if the html has a dark feature coming from styling, remove that class
//otherwise add the class dark to it
toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.value = "Dark mode"
    }else{
        html.classList.add('dark')
        e.target.value = "Light mode"
    }
})
function Check() {

    //grabbing the value of the input
    let val = search.value
    
    console.log(val)

    const lower = val.toLowerCase()
    console.log(lower)
//spliting the value which is a string
    const splited = lower.split('')
    console.log(splited)

   
    
    //reverse the splited string which is now array
    const reversed = splited.reverse()
    console.log(reversed)

    //join the string in the array after reversing
    const joined = reversed.join('')
    console.log(joined)

     //change it to lower case
    
    
    search.value = ''

    console.log(search)

    if(joined === lower){
        word.innerHTML = `yieeeyy!! 🎊 🎉🎊 🎉 ${val} is a palindrom.  Well done 😍 🥰`
    }else{
        word.innerHTML = `sorry 😔 😔 😔 ${val} is not a palindrome, Try again 😊😊😊`
    }

    
}

btn.addEventListener('click', Check)