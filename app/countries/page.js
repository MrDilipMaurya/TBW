"use client"
import React, { useEffect, useState } from 'react';
import supabase from '../../supabase';

export default function Index() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data, error } = await supabase.from('countries').select();

            if (error) {
                console.error('Error fetching data:', error);
            } else {
                setCountries(data);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <h1>Country List</h1>
            <ul>
                {countries.map((country) => (
                    <li key={country.id}>{country.name}</li>
                ))}
            </ul>
        </div>
    );
}
