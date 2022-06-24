import './App.css';

import Character from "./component/character";

function App() {
    return (
        <div>
            <Character
                name={'Bart'}
                desc={"Bartholomew \"Bart\" Jojo Simpson (born April 1[7] or February 23[8]) is the mischievous, rebellious, misunderstood, disruptive and \"potentially dangerous\" oldest child of the Simpson family in The Simpsons. "}
                picture={"https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png"}/>

            <Character
                name={"Homer"}
                desc={"Homer Jay Simpson (born May 12, 1956) is the main protagonist of The Simpsons series (or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson."}
                picture={"https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png"}/>

            <Character
                name={"Marge"}
                desc={"Marjorie Jacqueline \"Marge\" Simpson (née Bouvier[11]) is the homemaker and matriarch of the Simpson family. She is also one of the five main characters in The Simpsons TV series. "}
                picture={"https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png"}/>

            <Character
                name={"Lisa"}
                desc={"Lisa Marie Simpson (born May 9)[9] is the elder daughter and middle child of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons series."}
                picture={"https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png"}/>

            <Character
                name={"Ned"}
                desc={"Nedward Flanders, Jr. more commonly known by the moniker Flanders is the Simpson family's extremely religious next door neighbor."}
                picture={"https://static.wikia.nocookie.net/simpsons/images/8/84/Ned_Flanders.png"}/>


        </div>
    );
}

export default App;
