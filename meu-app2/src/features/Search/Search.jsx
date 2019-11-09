import React from 'react';

import './Search.scss';

const Search = props => {
    return (
        <section className="search">
            <form>
                <input type="search" className="-inputsearch" placeholder="Buscar Musica" onChange={props.handleSearch} />
            </form>
        </section>
    )
}

export default Search;