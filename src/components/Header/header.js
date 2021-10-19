import classNames from './header.module.scss';



function TopBar(){
    return(
        <div className={classNames.navbar}>
        <div className={`${classNames.container} ${classNames.flex_direction}`}>
            <div className={classNames.logo}>
                <a href="#">TRAINING STUDIO</a>
            </div>
            <nav>
                <ul>
                    {menuItems.map((menuItem) => {
                        return <li>{menuItem.label}</li>
                    })}
                </ul>
            </nav>
        </div>
       
        </div>
        
    );

    
}
export default TopBar;



const menuItems = [{label:"Home"},{label:"About"},{label:"Service"},{label:"Gallery"},{label:"Contact"}];