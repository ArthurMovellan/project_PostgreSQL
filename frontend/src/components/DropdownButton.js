import Dropdown from 'react-bootstrap/Dropdown';

const DropDownButton = (props) => {
    return (
        <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {props.title}
                </Dropdown.Toggle>
        
                <Dropdown.Menu>
                    {props.dispData.map(disp => {
                        return <Dropdown.Item href="#/action-3">{disp}</Dropdown.Item>
                    })}
                </Dropdown.Menu>
            </Dropdown>
    )
}

export default DropDownButton
