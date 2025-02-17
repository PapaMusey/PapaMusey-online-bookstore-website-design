import React, {useState, useEffect} from 'react'

export default function Nav() {
    const [query, setQuery] = React.useState({
        search: ""
    })
    const [scrolled, setScrolled] = useState(false);


    function handleChange(event) {
        setQuery(prevQuery => {
            return {
                ...prevQuery,
                [event.target.name]: event.target.value
            }
        })
    }

    useEffect(() => {
      function handleScroll() {
        if (window.scrollY > 80) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
      
    }, []);

    const [searchbar, setSearchbar] = useState(false)
    function handleSearchClick(){
        setSearchbar(prevSearchbar => !prevSearchbar)
    }
    return (
        <header className="header">

            <div className='header-1'>

                <a href='#' className='logo'><i className='fas fa-book'></i>Bookly</a>

                <form /* onSubmit={handleSubmit} */
                    className={searchbar ? "search-form active" : "search-form"}>
                    <div className='input'>
                        <input
                            type="search"
                            placeholder='search'
                            onChange={handleChange}
                            name="search-box"
                            value={query.search}
                        />
                        <div id='search btn' className='fas fa-search'></div>
                    </div>
                </form>

                <div className='icons'>
                    <div 
                    onClick={handleSearchClick}
                    id='search-btn' className= "fas fa-search"></div>
                    <a href='#' className='fas fa-heart'></a>
                    <a href='#' className='fas fa-shopping-cart'></a>
                    <div id='log-in button' className='fas fa-user' ></div>
                    {/* onClickLogin must be here */}
                </div>

            </div>
            <div className={scrolled ? "header-2 active" : 'header-2'}>
                <nav className='navbar'>
                    <a href='#home'>home</a>
                    <a href='#featured'>featured</a>
                    <a href='#arrivals'>arrivals</a>
                    <a href='#reviews'>reviews</a>
                    <a href='#contact'>contact</a>
                </nav>
            </div>

        </header>
    )
}