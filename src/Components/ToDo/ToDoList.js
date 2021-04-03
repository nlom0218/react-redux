import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteToDo_LOCAL } from '../../localStorage';

import "./Css/toDoList.css"

const mapStateToProps = (state) => {
    return {
        toDos: state.toDos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteToDo: (id) => dispatch({ type: "DEL_TODO", id }),
        detailToDo: (id) => dispatch({ type: "DETAIL_TODO", id })
    }
}



const ToDoList = ({ toDos, deleteToDo, detailToDo }) => {
    return (
        <div>
            <ul className="toDoList">
                {toDos.map((toDo) => {
                    return (
                        <Link to={`/${toDo.id}`} key={toDo.id} className="toDoList_item">
                            <li>
                                <span>{toDo.toDo}</span>
                                <input
                                    type="button"
                                    value="삭제"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        deleteToDo(toDo.id)
                                        deleteToDo_LOCAL(toDo.id)
                                    }}>
                                </input>
                            </li>
                        </Link>

                    )
                })}
            </ul>
        </div>

    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)