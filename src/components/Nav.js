import React, { useState, useEffect } from 'react';
import Login from './Login';

export default function Nav({ handleLogin }) { 
    const [query, setQuery] = useState({ search: "" });
    const [scrolled, setScrolled] = useState(false);
    const [searchbar, setSearchbar] = useState(false);
    const [login, setLogin] = useState(false);

    function handleChange(event) {
        setQuery(prevQuery => ({
            ...prevQuery,
            [event.target.name]: event.target.value
        }));
    }

    function handleScroll() {
        setScrolled(window.scrollY > 80);
    }

    function toggleSearchbar() {
        setSearchbar(prevSearchbar => !prevSearchbar);
    }

    function handleLogin() {
        setLogin(prevLogin => !prevLogin);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className="header">
                <div className='header-1'>
                    <a href='#' className='logo'><i className='fas fa-book'></i>Bookly</a>

                    <form className={searchbar ? "search-form active" : "search-form"}>
                        <div className='input'>
                            <input
                                type="search"
                                placeholder='Search'
                                onChange={handleChange}
                                name="search-box"
                                value={query.search}
                            />
                            <div id='search-btn' className='fas fa-search'></div>
                        </div>
                    </form>

                    <div className='icons'>
                        <div onClick={toggleSearchbar} id='search-btn' className="fas fa-search"></div>
                        <a href='#' className='fas fa-heart'></a>
                        <a href='#' className='fas fa-shopping-cart'></a>
                        <div onClick={handleLogin} id='log-in-btn' className='fas fa-user'></div>
                    </div>
                </div>

                <div className={scrolled ? "header-2 active" : 'header-2'}>
                    <nav className='navbar'>
                        <a href='#home'>Home</a>
                        <a href='#featured'>Featured</a>
                        <a href='#arrivals'>Arrivals</a>
                        <a href='#reviews'>Reviews</a>
                        <a href='#contact'>Contact</a>
                    </nav>
                </div>
            </header>

            {login && <Login handleLogin={handleLogin} />}
        </>
    );
}
