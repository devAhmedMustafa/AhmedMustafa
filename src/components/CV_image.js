import cv_img from '../images/IMG_20230707_003436.jpg'

export function CV_image(){
    return (
        <div className='rounded flex justify-center'>

            <img className='w-80 rounded-full shadow-2xl hover:shadow-sm transition-all ease-linear duration-300 border-2 border-indigo-400 p-2 bg-[#edededb3]' src={cv_img} alt="Me" />

        </div>
    )
}