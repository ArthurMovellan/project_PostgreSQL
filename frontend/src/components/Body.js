import DropDownButton from './DropdownButton';
import CustomTable from './CustomTable';
import RetrieveClients from '../services/RetrieveClients';
import RetrieveItems from '../services/RetrieveItems';
import { useEffect, useState } from 'react';

const Body = () => {

    const [clients, setClients] = useState(null);
    const [items, setItems] = useState(null);

    useEffect(() => {
        if(clients == null){
            RetrieveClients.getClients().then((results) => setClients(results));
        }
        console.log(clients);
    }, [clients])

    // useEffect(() => {
    //     if(items == null){
    //         RetrieveItems.getItems().then((results) => setItems(results));
    //     }
    //     console.log(items);
    // }, [items])

    return (
        <>
            <DropDownButton title={"Clients"} dispData={["Salut","Bonjour","Hello"]}></DropDownButton>
            <CustomTable titles={["#","Nom","Quantité"]} dataTable={[["1","Mark","Otto"],["2","Jacob","Thonton"],["3","Larry","The bird"]]}></CustomTable>
        </>
    )
}

export default Body