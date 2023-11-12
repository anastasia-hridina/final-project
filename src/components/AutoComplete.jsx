function AutoComplete({ autoCompleteList, selectHandler }) {
    return (
        <ul>
            {autoCompleteList.map(
                (autoCompleteItem) => {
                    return <li onClick={() => { selectHandler(autoCompleteItem) }}>{autoCompleteItem}</li>
                }
            )}
        </ul>
    );
}

export default AutoComplete;
