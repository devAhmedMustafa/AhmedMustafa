import {Skill} from './Skills';

export function List(props){
    const list = props.list
    return (
        <ul className="list-disc px-5 box">
            {
                list.map((e)=> <li className="m-2 text-start">{e}</li>)
            }
        </ul>
    )
}