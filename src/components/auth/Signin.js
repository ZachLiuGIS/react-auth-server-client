import React, { Component } from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import TextInput from "./../controls/TextInput";
import PasswordInput from "./../controls/PasswordInput";
import { connect } from "react-redux";

import * as actions from "../../actions";

class Signin extends Component {
    static propTypes = {
        handleSubmit: PropTypes.func,
        signinUser: PropTypes.func
    };

    handleFormSubmit({ email, password }) {
        console.log(email, password);
        this.props.signinUser({ email, password});
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <div className="row justify-content-center">
                <form
                    className="col col-sm-4 card mt-5 p-2"
                    onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
                >
                    <fieldset className="form-group">
                        <label>Email:</label>
                        <Field name="email" component={TextInput}/>
                    </fieldset>


                    <fieldset className="form-group">
                        <label>Password:</label>
                        <Field name="password" component={PasswordInput}/>
                    </fieldset>

                    <fieldset className="form-group">
                    <button action="submit" className="btn btn-primary">Sign In</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default connect(null, actions)(reduxForm({
    form: "signin"
})(Signin));
