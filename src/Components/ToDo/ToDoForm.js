import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToDo_LOCAL } from '../../localStorage';

const mapDispatchToProps = (dispacth) => {
    return {
        addToDo: (toDo, id) => dispacth({ type: "ADD_TODO", id, toDo })
    }

}

const ToDoForm = ({ addToDo }) => {
    const [toDo, setToDo] = useState("")
    return (
        <div>
            <form>
                <input
                    type="text"
                    name="toDo"
                    autocomplete="off"
                    placeholder="할 일을 적으세요✍️"
                    value={toDo}
                    onChange={(e) => {
                        setToDo(e.target.value)
                    }} />
                <input
                    type="submit"
                    value="등록"
                    onClick={(e) => {
                        e.preventDefault()
                        const id = Date.now()
                        setToDo("")
                        addToDo(toDo, id)
                        addToDo_LOCAL(toDo, id)
                    }} />
            </form>
        </div>
    );
}

export default connect(null, mapDispatchToProps)(ToDoForm);