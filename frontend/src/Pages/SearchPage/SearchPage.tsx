import React, { SyntheticEvent, useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import Search from '../../Components/Search/Search';
import ListPortfolio from '../../Components/Portfolio/ListPortfolio/ListPortfolio';
import CardList from '../../Components/CardList/CardList';
import { searchCompanies } from '../../api';
import { CompanySearch } from '../../company';
import { portfolioAddAPI, portfolioDeleteAPI, portfolioGetAPI } from '../../Services/PortfolioService';
import { PortfolioGet } from '../../Models/Portfolio';
import { toast } from "react-toastify";

interface Props { }

const SearchPage = (props: Props) => {
    const [search, setSearch] = useState<string>("");
    const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[] | null>([])
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([])
    const [serverError, setServerError] = useState<string>("");

    useEffect(() => {
        getPortfolio();
    }, []);

  
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        console.log(e);
    };

    const getPortfolio = () => {
    portfolioGetAPI()
      .then((res) => {
        if (res?.data) {
          setPortfolioValues(res?.data);
        }
      })
      .catch((e) => {
        setPortfolioValues(null);
      });
  };



    const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    portfolioAddAPI(e.target[0].value)
      .then((res) => {
        if (res?.status === 204) {
          toast.success("Stock added to portfolio!");
          getPortfolio();
        }
      })
      .catch((e) => {
        toast.warning("Could not add stock to portfolio!");
      });
    };

    const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    portfolioDeleteAPI(e.target[0].value).then((res) => {
      if (res?.status == 200) {
        toast.success("Stock deleted from portfolio!");
        getPortfolio();
      }
    });
  };

    const onSearchSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const result = await searchCompanies(search);
        if (typeof result === "string") {
            setServerError(result);
            console.log(serverError);
        } else if (Array.isArray(result.data)) {
            setSearchResult(result.data);
        }
        console.log(searchResult)

    };

    return (
        <div className='App'>
            <Search
                onSearchSubmit={onSearchSubmit}
                search={search}
                handleSearchChange={handleSearchChange} />
            <ListPortfolio
                portfolioValues={portfolioValues!}
                onPortfolioDelete={onPortfolioDelete} />
            <CardList
                searchResults={searchResult}
                onPortfolioCreate={onPortfolioCreate}
            />
            {serverError && <div>Unable to connect to API</div>}
        </div>
    )
}

export default SearchPage