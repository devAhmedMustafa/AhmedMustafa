import logo from '../images/MyLogo.png'
import "../styles/icons.css"


export function Header(){
    return(
        <div className='flex flex-row items-center justify-between border-b border-gray-700 w-full'>
            <Logo />
            <Links/>
        </div>
    )
}

export function Logo(){
    return (
        <img src={logo} className='w-16' alt="Logo"/>
    )
}

export function Links(){
    const facebook = "https://www.facebook.com/ahmed1.mustafa6";
    const instagram = "https://www.instagram.com/ahmedmustafa.dev/";
    const linkedIn = "https://www.linkedin.com/in/ahmed-mustafa-67a224250/";
    const codepen = "https://codepen.io/devAhmedMustafa"
    return (
        <div className="social-links flex flex-row gap-2">
            <a href={facebook} title="Facebook" target="_blank"><i className="fa-brands fa-facebook"></i></a>
            <a href={instagram} title="Instagram" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a href={linkedIn} title="LinkedIn+" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            <a href={codepen} title="CodePen" target="_blank"><i className="fa-brands fa-codepen"></i></a>
        </div>
    )
}