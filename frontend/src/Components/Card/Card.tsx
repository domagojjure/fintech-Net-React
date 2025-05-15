import React, { JSX, SyntheticEvent } from 'react'
import "./Card.css";
import { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';
import { Link } from 'react-router-dom';

interface Props {
    id: string;
    searchResult: CompanySearch;
    onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({ id, searchResult, onPortfolioCreate }: Props): JSX.Element => {
    return (
        <div
            key={id}
            id={id}
            className='flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row'>
            <Link to={`/company/${searchResult.symbol}/company-profile`} className="font-bold text-center text-veryDarkViolet md:text-left px-5">
                {searchResult.name} - ({searchResult.symbol})
            </Link>
            <p className="text-black px-5">${searchResult.currency}</p>
            <p className="font-bold text-black px-5">{searchResult.exchangeShortName} - {searchResult.stockExchange}</p>
            <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol}></AddPortfolio>
        </div>
    )
}

export default Card