import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    const { match: { params: { id } } } = ownProps
    return {
        toDo: state.toDos.filter((item) => item.id === parseInt(id))[0]
    }
}

const ToDoDetail = ({ toDo }) => {
    return (
        <div>{toDo.toDo}</div>
    );
}

export default connect(mapStateToProps)(ToDoDetail)