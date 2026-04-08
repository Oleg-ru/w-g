'use client'

import React from 'react';
import NavSearch from "@/components/NavSearch";
import NavLinks from "@/components/NavLinks";
import {useState} from 'react';

function Navbar() {
    const [search, setSearch] = useState("");
    console.log('Навигационное меню')
    return (
        <nav>
            <NavLinks />
            <NavSearch />
        </nav>
    );
}

export default Navbar;