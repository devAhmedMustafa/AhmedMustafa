import tailwind from '../icons/logos/tailwindcss.svg'
import django from '../icons/logos/django.svg'
import express from '../icons/logos/express.svg'

export function SkillsList(props){

    return (
        <div className="bg-white rounded-md p-2 box hover:-translate-y-2 transition box">

            <h1 className="text-xl font-bold underline m-1 text-rose-700 mb-3">{props.title} Skills</h1>

            <ul className="px-5 flex items-center justify-center flex-wrap gap-5">
                { props.skills.map((e)=> <Skill skill={e.name} color={e.color}/>) }

                {
                props.title == "Front End" && <li className="text-2xl"><img src={tailwind} className='w-11'/></li>
                }

                {
                props.title == "Back End" && <li className="text-2xl"><img src={django} className='w-7'/></li>
                }

                {
                props.title == "Back End" && <li className="text-2xl"><img src={express} className='w-15 md:w-14'/></li>
                }
                
            </ul>    

        </div>

    )
}

function Skill(props){
    let skill = props.skill.toUpperCase()
    return (
        <li className='text-center'><i className={`fa-brands fa-${props.skill} text-4xl ${props.color}`}></i></li>
    )
}