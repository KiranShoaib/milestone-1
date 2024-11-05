const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement
const skills = document.getElementById('skills') as HTMLElement

toggleButton.addEventListener('click', ()=> {
    if(skills.style.display === 'none') {
        skills.style.display = 'block'
    } else{
        skills.style.display = 'none'
    }
});



// <section id="languages">
// <h3>Languages</h3>
// <ul>
//     <li>English - Fluent</li>
//     <li>Urdu - Native</li>    
// </ul>
// </section>


// #languages ul {
//     list-style-type: square;
//     padding: 10%;
//     margin: 10px 0;
// }

// #languages ul li {
//     margin: 5px 0;
// }