import { NavLink } from 'react-router-dom';


export const HomeButton = () => {
    return (
        <div className="button">
        <NavLink to="/" className="home-link">Return to main page</NavLink>
    </div>
    );
}