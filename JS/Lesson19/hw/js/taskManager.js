"use strict";

class NewTask
{
    constructor (id, task, completed)
    {
        this.id = id;
        this.task = task;
        this.completed = completed;
    }

    storeTask(arr)
    {
        let { id, task, completed } = this;
        arr.push( {id: id, task: task, completed: completed} );
    }
}

export default NewTask;