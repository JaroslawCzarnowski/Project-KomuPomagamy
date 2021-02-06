import Decoration from '../assets/icons/Decoration.svg';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {getOrganization, getFundation, getCharitable} from '../API/Fetch';

const WhoWeHelp = () => {

    let [ListOrga, setListOrg] = useState([]);
    let [ListFund, setListFund] = useState([]);
    let [ListChar, setListChar] = useState([]);
    let [OrgaType, setOrgaType] = useState(ListOrga);

    let [CurentPage, setCurentPage] = useState(1);
    let PrePage = 3;

    useEffect(() => {
        getOrganization(setListOrg);
        getFundation(setListFund);
        getCharitable(setListChar);

    }, []);
    useEffect(() => {
        document.getElementById('StartingDisplay').click();
        //unikamy odwolan do drzewa DOM
    }, [ListFund]);

    const PreperetPagination = (list, CurentPage, PrePage) => {
        const indexLastOrg = CurentPage * PrePage;
        const indexFirstOrg = indexLastOrg - PrePage;
        const CurentOrgs = list.slice(indexFirstOrg, indexLastOrg);
        return CurentOrgs;

    };

    const PageNumbers = [];
    for (let index = 0; index <= Math.ceil(OrgaType.length / PrePage); index++) {
        PageNumbers.push(index+1);
    };

    const Pagination = (PageNumbers) => {
        setCurentPage(PageNumbers);
    };

    const HandleChange = (ListOrga) => {
        setOrgaType(ListOrga);
        setCurentPage(1);
    };

    const Pagination_one = (targetId) => {
        const paginationList = document.getElementById(targetId);
        // paginationList.style.display = "none";
    };

    const Pagination_two = (targetId) => {
        const paginationList = document.getElementById(targetId);
        // paginationList.style.display = "inline";
    };
    console.log(ListOrga, 'dzialaj');
    
    return (
        <div className="who_we_help-container" id="WhoWeHelp">
            <div className="who-we-help-top">
                <p>Komu pomagamy?</p>
                <img src={Decoration} alt="decor" className="who-we-help-top-decoration" />
                <div className="who_we_help_top-options">
                    <button id="StartingDisplay" className="btn_who-we-help-button" onClick={() => HandleChange(ListOrga)}>Fundacjom</button>
                    <button className="btn_who-we-help-button" onClick={() => HandleChange(ListFund)}>Organizacjom pozarządowym</button>
                    <button className="btn_nwho-we-help-button" onClick={() => HandleChange(ListChar)}>Lokalnym zbiórkom</button>
                </div>
                <p className="who-we-help-top-text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji,
                    z którymi współpracujemy.Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                </p>
            </div>
            <div className="who-we-help-list">
            {PreperetPagination(OrgaType, CurentPage, PrePage).map((el, index) => {                        
                                return (                       
                                    <div className="who-we-help__list--container" key={index}>
                                        <div className="who-we-help__list--left">
                                            <p className="who-we-help__list--name">{el.name}</p>
                                            <p className="who-we-help__list--text-left">{el.description}</p> 
                                        </div>  
                                        <div className="who-we-help__list--right"> 
                                            <p className="who-we-help__list--text-right">{el.items}</p>
                                        </div>                                     
                                    </div>  
                                    )                       
                                }) 
                }
            </div>
            <div className="who-we-help__list--paginate"> {PageNumbers.map((number) => {
                setTimeout(() => {
                    if (OrgaType === ListChar) {
                        Pagination_one("pagination");
                    }
                    else {
                        Pagination_two("pagination");
                    }
                }, 0);

                return (
                    <li id="pagination" className="who-we-help__list--paginate-list" key={number}>
                        <Link to="/WhoWeHelp">
                            <a onClick={() => Pagination(number)} href="!#">{number}</a>
                        </Link>
                    </li>
                );
            })
            }
            </div>
        </div>
    );
}

export default WhoWeHelp;
