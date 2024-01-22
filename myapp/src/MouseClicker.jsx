export function MouseClicker({name}){
    function handleButtonClick(event){
       console.log(`Button clicked: ${event.target.name}`)
    }
    return (
        <button name={name} onClick={handleButtonClick}>Click me {name}</button>
    )
}
