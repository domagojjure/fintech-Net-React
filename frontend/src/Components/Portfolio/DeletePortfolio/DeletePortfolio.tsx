import React, { SyntheticEvent } from 'react'

interface Props {
    onPortfolioDelete: (e: SyntheticEvent) => void;
    portfolioValue: string;
}

const DeletePortfolio = ({ onPortfolioDelete, portfolioValue }: Props) => {
    return (
        <div>
            <form onSubmit={onPortfolioDelete} className="flex  justify-center">
                <input hidden={true} value={portfolioValue} />
                <button className=" mt-4 block w-24 px-2 py-1 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500">
                    X
                </button>
            </form>
        </div>
    );
}

export default DeletePortfolio