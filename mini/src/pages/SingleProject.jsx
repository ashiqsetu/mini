import React, { useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import PageTitle from '../components/common/PageTitle';
import Project from '../components/portfolios/Project';

function SinglePortfolio() {

    const { id } = useParams();
    const { state } = useLocation();
    const { totalPortfolios } = state || {};

    return (
        <>
            {/* Page title */}
            <PageTitle title={`Mini | Single Project`}/>

            {/* Breadcrumb area start */}
            <Breadcrumbs page="Single Project" title="Mini's Single Project" />
            {/* Breadcrumb area end */}

            {/* Page content area start */}
            <section className="content">
                {/* Single Project section start */}
                <Project id={id} state={state} totalPortfolios={totalPortfolios}/>
                {/* Single Project section end */}
            </section>
            {/* Page content area end */}

        </>
    )
}

export default SinglePortfolio