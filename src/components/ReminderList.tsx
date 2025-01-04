import Reminder from '../models/Reminder';

interface ReminderListProps {
        items:Reminder[],
        onRemoveReminder:(id:number)=>void
    }
function ReminderList({items,onRemoveReminder}:ReminderListProps ) {
    return (
        <div>
            <ul className='list-group'> 
                {items.map(item=>(
                    <li className='list-group-item d-flex justify-content-between' key={item.id}>
                        {item.title}
                        <button onClick={()=>onRemoveReminder(item.id)} className='btn btn-outline-danger rounded-pill'>DELETE</button>

                    </li>
                ))}
                
            </ul>
        </div>
    );
}

export default ReminderList;