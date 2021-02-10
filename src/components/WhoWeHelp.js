import Decoration from '../assets/icons/Decoration.svg';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {getOrganization, getFundation, getCharitable, getOrgs} from '../API/Fetch';

const WhoWeHelp = () => {

    let [fundList, setFundList] = useState([]);
    let [orgList, setOrgList] = useState([]);
    let [charList, setCharList] = useState([]);
    let [orgType, setOrgType] = useState(orgList);
    // for pagination
    let [currentPage, setCurrentpage] = useState(1);
    let orgsPerpage = 3;

const setClicked = (buttonId) => {
        document.getElementById(buttonId).click()
      }
//pagination
 const setPageNumbers = (orgType, orgsPerpage) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(orgType.length / orgsPerpage); i++) {
        pageNumbers.push(i);  
    }
    return pageNumbers;
}
// prep for pagination
 const preparedForPagination = (list, currentPage, numberPerPage) => {
    const indexOfLastOrg = currentPage * numberPerPage;
    const indexOfFirstOrg = indexOfLastOrg - numberPerPage;
    const currentOrgs = list.slice(indexOfFirstOrg, indexOfLastOrg);
    return currentOrgs
}; 
// showor hide pagination
 const showHidePagination = (targetId, displayStyle) => {    
    const paginationList = document.getElementById(targetId);
    paginationList.style.display = displayStyle;
}
//set current page state in pagination
 const paginate = (pageNumber, setCurrentpage) => {
    setCurrentpage(pageNumber); 
};
//handle of changing organization type in who we help section
 const handleChangeOrg = (orgList, setOrgType, setCurrentpage) => {
setOrgType(orgList);
setCurrentpage(1);
}
    useEffect(() => {
        //fetch objects withfrom db.json 
        getOrgs(`localCharities`, setCharList);
        getOrgs(`foundations`, setFundList);      
        getOrgs(`organizations`, setOrgList);      
    },[])
    useEffect(() => {
        setClicked('startingDisplay')
    },[orgList]);
//pagination
const pageNumbers = setPageNumbers(orgType, orgsPerpage);
    return (        
        <div className="who_we_help-container" id="whoWeHelp">
            <div className="who-we-help-top">
                <div className="who-we-help-title">
                <p>Komu pomagamy?</p>
                </div>
                <img src={Decoration} alt="decor" className="who-we-help-top__decoration" />
                <div className="who-we-help-top__options">
                    <button className="btn who-we-help--button" onClick={() => handleChangeOrg(fundList, setOrgType, setCurrentpage)}>Fundations</button>
                    <button id="startingDisplay" className="btn who-we-help--button" onClick={() => handleChangeOrg(orgList, setOrgType, setCurrentpage)}>Organizacjom pozarządowym</button>
                    <button className="btn who-we-help--button" onClick={() => handleChangeOrg(charList, setOrgType, setCurrentpage)}>Lokalnym zbiórkom</button>
                </div> 
                <p className="who-we-help-top__text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, 
                    z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                </p>
            </div>
            <div className="who-we-help__list">                {                   
                        preparedForPagination(orgType, currentPage, orgsPerpage).map((el, index) => {                        
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
            <div className="who-we-help__list--paginate"> {
                    pageNumbers.map((number) => {
                        setTimeout(() => {
                            if (orgType === charList) {                              
                                showHidePagination("pagination", "none")
                            }
                            else {
                                showHidePagination("pagination", "inline")
                            }
                        }, 0);                    
                        return ( 
                        <li id="pagination" className="who-we-help__list--paginate-list" key={number}>
                            <Link to="/whoWeHelp">
                                <a onClick={() => paginate(number, setCurrentpage)} href="!#">{number}</a>
                            </Link>
                        </li> 
                           )             
                    })
                }</div>           
        </div>        
    )    
}
export default WhoWeHelp;
