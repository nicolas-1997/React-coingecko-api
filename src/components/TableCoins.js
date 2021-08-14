import React from 'react';

const TableCoins = ({coins}) =>{
    return(
        <table>
            <thead>
                <tr>
                    <td>name</td>
                </tr>
            </thead>
            <tbody>
                {coins.map(coin => (
                    <tr>${coin.name}</tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableCoins;