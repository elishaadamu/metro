import React from "react";
import Heading from "../common/Heading";

function Test() {
    return (
        <div className="py-8 px-4 rounded-xl md:bg-[#1e2a3a] mt-[6rem]">
            <h1>Modeling</h1>
            <p>
                For future traffic and land use projections, the NFRMPO uses two
                separate but related models: the 2010 Base Year Land Use
                Allocation Model (LUAM) and the 2015 Base Year Regional Travel
                Demand Model (RTDM). Both models forecast out to 2050 and can
                provide information for the following years: 2015, 2020, 2025,
                2030, 2035, 2040, 2045, and 2050.
            </p>

            <p>
                The models were created using local input to estimate future
                growth in population, employment, travel patterns, and traffic
                volumes. Local agencies provided current land uses, future land
                uses, development data, traffic counts, and transportation
                projects. The models were reviewed by local agencies for each
                model’s base year and the 2050 forecast year to ensure
                reasonableness.
            </p>

            <p>
                The 2010 LUAM is built on the UrbanSim platform. The LUAM
                forecasts the location and timing of development and the
                resulting employment and household growth at the zonal level.
                The output information is then incorporated into the 2019 RTDM.
            </p>

            <ul>
                <p>
                    The 2019 RTDM uses the four-step model to estimate travel
                    patterns:
                </p>
                <li>
                    Trip generation predicts the number of trips expected to
                    originate or be destined for each traffic analysis zone;
                </li>
                <li>
                    Trip distribution estimates the number of trips to be taken
                    between each origin and destination;
                </li>
                <li>
                    Mode choice estimates how people will travel, such as by
                    bicycle, transit, or by auto; and
                </li>
                <li>
                    Route assignment details the route traffic will take between
                    zones.
                </li>
            </ul>

            <img
                src="https://images.unsplash.com/photo-1737991878092-d3be52a76735?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="img"
                className="h-[20rem] md:h-[30rem]"
            />

            <h2>Model Documentation</h2>
            <a href="/">2010 NFRMPO Land Use Allocation Model Documentation</a>
            <a href="/">2010 NFRMPO Land Use Allocation Model Documentation</a>
            <a href="/">2010 NFRMPO Land Use Allocation Model Documentation</a>
            <a href="/">2010 NFRMPO Land Use Allocation Model Documentation</a>

            <h2>Requesting Data</h2>

            <p>
                {" "}
                Model outputs may be used in a variety of ways. Traffic volumes
                from the 2019 RTDM are often used in traffic studies. As CDOT
                expands I-25, consultants working with the agency have requested
                the NFRMPO provide traffic volumes for different scenarios on
                I-25. The 2010 LUAM has been used by local municipalities to
                plan for future growth.
            </p>
            <p>
                {" "}
                To request data from the 2019 Regional Travel Demand Model
                (RTDM) and/or 2010 Land Use Allocation Model (LUAM), download
                the data request form and submit the completed form to
                staff@nfrmpo.org.
            </p>
        </div>
    );
}

export default Test;
