import { useState } from "react";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import AutoComplete from "./AutoComplete";

function InputMain({ setQuery }) {
    const [cityList, setCityList] = useState([]);

    const [city, setCity] = useState("");

    const addAutoComplete = () => {
        if (!cityList.includes(city)) {
            setCityList([
                ...cityList,
                city
            ])
        }
    }

    const handleSearchClick = () => {
        if (city !== '') {
            setQuery({ q: city })
            addAutoComplete();
        }
    }

    const showAutoComplete = () => {
        console.log(111)
    }

    const selectAutoCompleteHandler = (cityAutocomplete) => {
        setCity(cityAutocomplete)
        setQuery({ q: cityAutocomplete })
    }

    return (
        <div>
            <Box
                value={city}
                onChange={(e) => setCity(e.currentTarget.value)}
                onFocus={showAutoComplete}
                sx={{
                    width: 800,
                    maxWidth: '100%',
                    backgroundColor: "#f1f5f9",
                    borderRadius: '15px',
                    "& fieldset": { border: 'none' }
                }}
            >
                <TextField fullWidth
                    label="Search for cities"
                    id="fullWidth"

                />
            </Box>
            <div>
                <AutoComplete autoCompleteList={cityList} selectHandler={selectAutoCompleteHandler} />
            </div>
        </div>
    );
}

export default InputMain;
