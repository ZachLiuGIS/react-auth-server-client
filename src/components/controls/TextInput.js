import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TextInput extends Component {
    static propTypes = {
        input: PropTypes.object
    };

    render() {
        const { input: { value, onChange } } = this.props;

        return (
            <input className="form-control" type="text" value={value} onChange={onChange} />
        )
    }
}