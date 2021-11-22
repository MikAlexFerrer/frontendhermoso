import Header from "../../components/Header/Header";
import Dashboard from "./Dashboard"

export default function DashboardFirst() {
    return (
        <>
          <Header />
            <div className="dash-img">
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
