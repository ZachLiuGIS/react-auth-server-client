import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PasswordInput extends Component {
    static propTypes = {
        input: PropTypes.object
    };

    render() {
        const { input: { value, onChange } } = this.props;

        return (
            <input className="form-control" type="password" value={value} onChange={onChange} />
        )
    }
}