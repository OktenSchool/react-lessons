import './App.css';
import {A} from "./component/A.tsx";
import {B} from "./component/B.tsx";
import {MyContext} from "./context/MyContextProvider.tsx";
import {useState} from "react";

function App() {

    const [themeColor, setThemeColor] = useState<string>('light');

    return (
        <div>
            <MyContext.Provider value={{
                theme: themeColor,
                changeTheme: (themeValue: string) => {
                    setThemeColor(themeValue);
                }
            }}>

                <A/>
                <B/>
            </MyContext.Provider>

        </div>
    );
}

export default App
