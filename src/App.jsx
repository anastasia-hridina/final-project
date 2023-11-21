import { Outlet } from "react-router-dom";
import WeatherStart from "./layout/WeatherStart";


function App() {

    return (
        <>
            <main>
                <Outlet />
            </main>
        </ >
    );
}

export default App;
