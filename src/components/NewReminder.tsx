import React, { useState } from "react";
interface NewReminderProps{
    onAddReminder:(title:string)=>void
}
function NewReminder({onAddReminder}:NewReminderProps) {
    const [title,setTitle]=useState('');
    const submitForm=(e:React.FormEvent)=>{
        e.preventDefault();
        if(!title)return;
        onAddReminder(title);
        setTitle('')      
    }
    return (
        <div>
            <form action="" onSubmit={submitForm}>
                <label htmlFor="title"></label>
                <input value={title} onChange={e=>setTitle(e.target.value)} type="text" className="form-control" placeholder="write your tasks" id="title" />
                <button className="btn btn-primary my-3 ">Add New Reminder</button>
            </form>
        </div>
    );
}

export default NewReminder;