
import "../../Css/CoreValue.css"
import Images from "../../Util/Images";


const CoreValueDetail = () => {


    return (
        <>
            <div className="common-redirect-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p className="common-redirect-banner-title">Core Value</p>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb bg-transparent p-0 mb-0 d-flex justify-content-center">
                                    <li className="breadcrumb-item"><a href="/" className="text-white">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Our Core Values</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <section className="core-value-detail">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="common-heading d-flex align-items-center justify-content-center">
                                <span className="bar one"></span>Core Value Details<span className="bar two"></span>
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="core-value-detail-single-box">
                                <p className="core-value-detail-heading">
                                <img src={Images.responsibilty} className="img-fluid " alt="" />Responsibility
                                </p>
                                <p className="common-para-second">
                                    <strong>Being accountable, committed, and accepting ownership for one's decisions, actions and behavior.</strong>
                                </p>
                                <p className="common-para-second">We believe it to be the most important core value of our organization </p>
                            </div>
                            <div className="core-value-detail-single-box">
                                <p className="core-value-detail-heading">
                                <img src={Images.trust} className="img-fluid " alt=""/>Trust:</p>
                                <p className="common-para-second">
                                    <strong>Mutual understanding of expectations based on consistent leadership, professionalism, integrity, respect, and appropriate  confidentiality. </strong>
                                </p>
                                <p className="common-para-second">We believe it to be one of the most important value of our organization
                                </p>
                            </div>
                            <div className="core-value-detail-single-box">
                                <p className="core-value-detail-heading">
                                    <img src={Images.customer} className="img-fluid " alt=""/>
                                Customer centric
                                </p>

                                <p className="common-para-second">We believe in being customer-centric focus in everything that we do.
                                </p>
                            </div>
                            <div className="core-value-detail-single-box">
                                <p className="core-value-detail-heading"><img src={Images.ethics} className="img-fluid " alt=""/>Ethics</p>
                                <p className="common-para-second">
                                    <strong>We try to strictly follow the five principles of ethics</strong>
                                </p>
                                <p className="common-para-second">Autonomy, Justice, Beneficence, Nonmaleficence  and Fidelity
                                </p>
                            </div>
                            <div className="core-value-detail-single-box">
                                <p className="core-value-detail-heading"><img src={Images.goals} className="img-fluid " alt=""/>Goals</p>

                                <p className="common-para-second">
                                These are specific targets intended to execute our Vision.  It is something that we aim for and check off once we have accomplished it. </p>
                            </div>
                            <div className="core-value-detail-single-box">
                                <p className="core-value-detail-heading"><img src={Images.innovation} className="img-fluid " alt=""/>Innovation</p>
                                <p className="common-para-second">
                                    <strong>Successfully implementing a new idea.</strong>
                                </p>
                                <p className="common-para-second">
                                Innovation in health field may have different angles. It may be as simple as observing disease patterns, analyzing medical data from a different angle, evolving new treatment (drug/dosage/timing) protocols for conventional illnesses and developing new strategies and equipment for their treatments, leading to new approaches in solving diseases, disorders and illnesses. Best practices involve clinical trials to implement such innovative protocols.
Our center is authorized to carry out such clinical trials. 

                                </p>
                            </div>
                            <div className="core-value-detail-single-box">
                                <p className="core-value-detail-heading"><img src={Images.coaching} className="img-fluid " alt=""/>Coaching</p>
                               
                                <p className="common-para-second">
                                Represents the attributes and skills of<strong>commitment, communication, concentration, 
                                control and confidence,</strong> with a goal to create organization’s 'psychologically-informed environment', 
                                ultimately leading to minimizing adverse events and improving patient care. 
                                </p>
                            </div>
                            <div className="core-value-detail-single-box">
                                <p className="core-value-detail-heading"><img src={Images.positiveAttitude} className="img-fluid " alt=""/>Positive attitude</p>
                               
                                <p className="common-para-second">
                                Positive attitude in health care really counts, both for care seekers (patients) and care providers (Doctors, Nurses, attendants etc)
                                </p>
                                <p className="common-para-second my-2">
                                A positive   attitude of the   care provider has a big impact on patient’s physical and mental health, who are already depressed, anxious and agitated. It makes them feel they are being cared for with compassion. 
                                </p>
                                <p className="common-para-second">
                                Besides, a positive attitude of health care professionals can also impact their actual job performance, in dealing with stressors of the job, crafting creative solutions to problems, and managing interpersonal relationships with co-workers;  there by leading to a positive impact on overall performance and growth of the institution. 
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


        </>
    )
}

export default CoreValueDetail