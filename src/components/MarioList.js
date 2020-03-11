import React, { useEffect } from "react";
import MarioCard from "./MarioCard"
import { connect } from "react-redux";

import { fetchMarios } from "../actions";

const MarioList = props => {

    useEffect(() => {
        props.fetchMarios()
    }, [])

    return (
        <div>
            <h1 className="title">Mario List</h1>
            <div className = "card-container">
                {props.mario.map(mar => (
                    <MarioCard mar={mar}/>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        mario: state.mario,
        isFetching: state.isFetching,
        errors: state.errors
    }
}

export default connect(
    mapStateToProps, 
    { fetchMarios }
)(MarioList);