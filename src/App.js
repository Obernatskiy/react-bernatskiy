import './App.css';
import Characters from "./components/Characters";

function App() {
    return (
        <div>
            <Characters
                id={1}
                name={"Rick Sanchez"}
                status={"Alive"}
                species={"Human"}
                gender={"Male"}
                image={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}
            />

            <Characters
                id={2}
                name={"Morty Smith"}
                status={"Alive"}
                species={"Human"}
                gender={"Male"}
                image={"https://rickandmortyapi.com/api/character/avatar/2.jpeg"}
            />
            <Characters
                id={3}
                name={"Summer Smith"}
                status={"Alive"}
                species={"Human"}
                gender={"Female"}
                image={"https://rickandmortyapi.com/api/character/avatar/3.jpeg"}
            />
            <Characters
                id={4}
                name={"Beth Smith"}
                status={"Alive"}
                species={"Human"}
                gender={"Female"}
                image={"https://rickandmortyapi.com/api/character/avatar/4.jpeg"}
            />
            <Characters
                id={5}
                name={"Jerry Smith"}
                status={"Alive"}
                species={"Human"}
                gender={"Male"}
                image={"https://rickandmortyapi.com/api/character/avatar/5.jpeg"}
            />
            <Characters
                id={6}
                name={"badango Cluster Princess"}
                status={"Alive"}
                species={"Human"}
                gender={"Female"}
                image={"https://rickandmortyapi.com/api/character/avatar/6.jpeg"}
            />

        </div>
    );
}

export default App;
