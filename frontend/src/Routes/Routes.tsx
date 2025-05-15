import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import IncomeStatement from "../Components/IncomeStatement/IncomeStatement";
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile";
import DesignGuide from "../Pages/DesignGuide/DesignGuide";
import BalanceSheet from "../Components/BalanceSheet/BalanceSheet";
import CashflowStatement from "../Components/CashflowStatement/CashflowStatement";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <HomePage /> },
            { path: "search", element: <SearchPage /> },
            {
                path: "company/:ticker",
                element: <CompanyPage />,
                children: [
                    { path: "income-statement", element: <IncomeStatement /> },
                    { path: "company-profile", element: <CompanyProfile /> },
                    { path: "balance-sheet", element: <BalanceSheet /> },
                    { path: "cashflow-statement", element: <CashflowStatement /> },


                ]
            },
            { path: "design-guide", element: <DesignGuide /> }

        ]
    }
])