import logo from './icons_assets/Logo .svg'
function Header(){
    return(
        <header className='overflow'>
            <meta name="description" content="Little lemon is a fine dinning restaurant with delivery options"/>
            <meta name="og:title" content="Little Lemon"/>
            <meta name="og:description" content="Little lemon is a fine dinning restaurant with delivery options"/>
            <meta name="og:image" content={logo}/>
        </header>
       
    )
}

export default Header;