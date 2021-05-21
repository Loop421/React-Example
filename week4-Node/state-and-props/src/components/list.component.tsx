import React from 'react';
import { ListItem } from '../App';

interface ListComponentProps
{
    listItems: ListItem[];
    removeListItem: (id: number )=> void;
}

const ListComponent: React.FC<ListComponentProps> = (props) =>
{
    // const items = [   // this is the component handle the data
    //     'Cook Dinner',
    //     'Push React Demos'
    // ];

    const removeItem = (id: number) =>
    {
        props.removeListItem(id);
    }

    const renderList = () => {
        //TODO: update to use state/props once made functional
        // return items.map((item) => <li className="todo-item">{item}</li>)
        return props.listItems.map((item) => <li
            key={item.id}
            className="todo-item"
            onClick={() => removeItem(item.id)}
        >{item.value}</li>)
    }

        // map -> mapping input value to an output value
        // reduce -> process an collection and reduce to a single value
        // some -> True if one item in array returns true on predicate
        // every -> True if all items in array return true on predicate

    return(
        <section>
            <ul>
                {renderList()}
            </ul>
        </section>
    );
}

export default ListComponent;