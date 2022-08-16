import React, { Component } from 'react'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import './QuantityInput.css'

export default class ScrollableDrop extends Component {
    render() {
        return (
            <DropdownButton
                bsStyle="default"
                bsSize="small"
                style={{ maxHeight: "28px" }}
                title={"Qty"}
                key={1}
                id="dropdown-size-small"
            >
                <MenuItem eventKey="1">Action</MenuItem>
                <MenuItem eventKey="2">Another action</MenuItem>
                <MenuItem eventKey="3" active>
                    Active Item
                </MenuItem>
                <MenuItem eventKey="4">Separated link</MenuItem>
            </DropdownButton>
        )
    }
}