import './App.css';
import {ShowCounts} from "./components/index";
import {Count1Tools} from "./components/index";
import {Count2Tools} from "./components/Count2Tools";

function App() {
    return (
        <div>
            <ShowCounts/>
            <hr/>
            <Count1Tools/>
            <Count2Tools/>
        </div>
    );
}

export default App;
