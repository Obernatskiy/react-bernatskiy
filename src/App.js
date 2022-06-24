import './App.css';

import Character from "./component/character";

function App() {
    return (
        <div>
            <Character
                name={'bart'}
                desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, odit!"}
                picture={"https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png"}/>

            <Character
            name={"Homer"}
            desc={"Lorem ipsum dolor sit amet."}
            picture={"https://www.onthisday.com/images/people/homer-simpson-medium.jpg"}/>
        </div>
    );
}

export default App;
