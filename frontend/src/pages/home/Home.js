import React from "react";
import Header from "../../components/Header/Header";
import Dashboard from "./Dashboard"

export default function DashboardFirst() {
    return (
        <>
          <Header />
            <div className="dash-img">
                {/* <Image alt="" id="dekstop1-img" src="https://i.imgur.com/x3TzdPA.jpg" /> */}
                <div className=" bg-overlay">
                    <div className="container d-flex justify-content-center text-center">
                        <h1 className="dash-h1">ENJOY A LUXURY EXPERINCE</h1>
                    </div>
                </div>
            </div>
            <section>
                <Dashboard />
            </section>
        </>
    );
}
