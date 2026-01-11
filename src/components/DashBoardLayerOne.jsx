import React from 'react'
import SalesStatisticOne from './child/SalesStatisticOne';
import TotalSubscriberOne from './child/TotalSubscriberOne';
import UsersOverviewOne from './child/UsersOverviewOne';
import LatestRegisteredOne from './child/LatestRegisteredOne';
import TopPerformerOne from './child/TopPerformerOne';
import TopCountries from './child/TopCountries';
import GeneratedContent from './child/GeneratedContent';
import UnitCountOne from './child/UnitCountOne';
import AIFeaturesShowcase from './child/AIFeaturesShowcase';

const DashBoardLayerOne = () => {

    return (
        <>
            {/* UnitCountOne */}
            <UnitCountOne />

            {/* AI Features Showcase */}
            <section className="row gy-4 mt-1">
                <AIFeaturesShowcase />
            </section>

            <section className="row gy-4 mt-1">

                {/* SalesStatisticOne */}
                <SalesStatisticOne />

                {/* TotalSubscriberOne */}
                <TotalSubscriberOne />

                {/* UsersOverviewOne */}
                <UsersOverviewOne />

                {/* LatestRegisteredOne */}
                <LatestRegisteredOne />

                {/* TopPerformerOne */}
                <TopPerformerOne />

                {/* TopCountries */}
                <TopCountries />

                {/* GeneratedContent */}
                <GeneratedContent />

            </section>
        </>


    )
}

export default DashBoardLayerOne