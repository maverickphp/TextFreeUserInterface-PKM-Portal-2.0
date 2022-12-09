import ReactAudioPlayer from "react-audio-player";
import cci from "./audios/serviceaudios/cci.mp3";
import gpv from "./audios/serviceaudios/gpv.mp3";
import cr from "./audios/serviceaudios/cr.mp3";
import ddl from "./audios/serviceaudios/ddl.mp3";
import dlr from "./audios/serviceaudios/dlr.mp3";
import eol from "./audios/serviceaudios/eol.mp3";
import er from "./audios/serviceaudios/er.mp3";
import idl from "./audios/serviceaudios/idl.mp3";
import tr from "./audios/serviceaudios/tr.mp3";
import lr from "./audios/serviceaudios/lr.mp3";
import vv from "./audios/serviceaudios/vv.mp3";
import ldl from "./audios/serviceaudios/ldl.mp3";
import wvr from "./audios/serviceaudios/wvr.mp3";
import cof from "./audios/serviceaudios/cof.mp3";
import { Link } from "react-router-dom";

import step1 from "../UI/ServicesImages/step1.png";

import ccstep3 from "../UI/ServicesImages/ccstep3.png";
import gpvstep3 from "../UI/ServicesImages/gpvstep3.png";
import ldlstep3 from "../UI/ServicesImages/ldlstep3.png";
import dlrstep3 from "../UI/ServicesImages/dlrstep3.png";
import idlstep3 from "../UI/ServicesImages/idlstep3.png";
import ddlstep3 from "../UI/ServicesImages/ddlstep3.png";
import vvstep3 from "../UI/ServicesImages/vvstep3.png";
import freestep3 from "../UI/ServicesImages/freestep3.png";

import courierstep4 from "../UI/ServicesImages/courierstep4.png";
import handstep4 from "../UI/ServicesImages/handstep4.png";

import ccstep1 from "./audios/stepsaudios/ccstep1.mp3";
import cofstep1 from "./audios/stepsaudios/cofstep1.mp3";
import crstep1 from "./audios/stepsaudios/crstep1.mp3";
import ddlstep1 from "./audios/stepsaudios/ddlstep1.mp3";
import dlrstep1 from "./audios/stepsaudios/dlrstep1.mp3";
import eolstep1 from "./audios/stepsaudios/eolstep1.mp3";
import erstep1 from "./audios/stepsaudios/erstep1.mp3";
import gpvstep1 from "./audios/stepsaudios/gpvstep1.mp3";
import idlstep1 from "./audios/stepsaudios/idlstep1.mp3";
import ldlstep1 from "./audios/stepsaudios/ldlstep1.mp3";
import lrstep1 from "./audios/stepsaudios/lrstep1.mp3";
import trstep1 from "./audios/stepsaudios/trstep1.mp3";
import vvstep1 from "./audios/stepsaudios/vvstep1.mp3";
import wvrstep1 from "./audios/stepsaudios/wvrstep1.mp3";

import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
// import ServicesSlider from "../UI/ServicesSlider";
// import testimg from "../UI/SliderImages/bg1.jpg";

export default function Services(props) {
  document.title = "PKM Punjab - Our Services";
  const myStyle = {
    padding: "70px 0px",
    justifyContent: "center",
    margin: "auto",
  };

  return (
    <Tab.Container
      {...props.changeProgress(20)}
      id="list-group-tabs"
      defaultActiveKey={window.location.hash}
    >
      <Row>
        <Col sm={3}>
          <ListGroup className="services-list">
            <ListGroup.Item action href="#id=a">
              Character Certificate
            </ListGroup.Item>
            <ListGroup.Item action href="#id=b">
              General Police Verification
            </ListGroup.Item>
            <ListGroup.Item action href="#id=c">
              Learner Driving License
            </ListGroup.Item>
            <ListGroup.Item action href="#id=d">
              Driving License Renewal
            </ListGroup.Item>
            <ListGroup.Item {...props.changeProgress(50)} action href="#id=e">
              International Driving License
            </ListGroup.Item>
            <ListGroup.Item action href="#id=f">
              Duplicate Driving License
            </ListGroup.Item>
            <ListGroup.Item action href="#id=g">
              Endorsement of a License
            </ListGroup.Item>
            <ListGroup.Item action href="#id=h">
              Employee Registration
            </ListGroup.Item>
            <ListGroup.Item action href="#id=i">
              Tenants Registration
            </ListGroup.Item>
            <ListGroup.Item action href="#id=j">
              Vehicle Verification
            </ListGroup.Item>
            <ListGroup.Item action href="#id=k">
              Loss Report
            </ListGroup.Item>
            <ListGroup.Item action href="#id=l">
              Crime Reports
            </ListGroup.Item>
            <ListGroup.Item action href="#id=m">
              Women Violence Report
            </ListGroup.Item>
            <ListGroup.Item action href="#id=n">
              Copy of FIR
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={9}>
          <Tab.Content className="col-11" style={myStyle}>
            <Tab.Pane eventKey="#id=a">
              <h2>کریکٹر سرٹیفکیٹ کا تعارف</h2>
              <ReactAudioPlayer
                style={{ width: "30%" }}
                className="mt-4"
                src={cci}
                controls
              />
              <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
                <div className="col-5">
                  <h2 className="text-start">Step 1:</h2>
                  <img className="img-fluid" src={step1} alt="stepsimage" />
                  <Link
                    to="/centers"
                    type="button"
                    className="btn btn-primary"
                    style={{ marginTop: "-45px", marginRight: "20px" }}
                  >
                    قریب ترین مرکز
                  </Link>

                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={ccstep1}
                    controls
                  />
                </div>
                <div className="col-5" style={{ marginLeft: "20px" }}>
                  <h2 className="text-start">Step 2:</h2>
                  <img
                    className="img-fluid"
                    src="https://wallpapercave.com/wp/wp4470754.jpg"
                    alt="stepsimage"
                  />
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  />
                </div>
              </div>
              <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
                <div className="col-5">
                  <h2 className="text-start">Step 3:</h2>
                  <img className="img-fluid" src={ccstep3} alt="stepsimage" />
                  {/* <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  /> */}
                </div>
                <div className="col-5" style={{ marginLeft: "20px" }}>
                  <h2 className="text-start">Step 4:</h2>
                  <img
                    className="img-fluid"
                    src={courierstep4}
                    alt="stepsimage"
                  />
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  />
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="#id=b">
              <h2>جنرل پولیس کی تصدیق</h2>
              {/* <ServicesSlider img1={testimg} img2={testimg} img3={testimg} /> */}
              <ReactAudioPlayer
                style={{ width: "30%" }}
                className="mt-3"
                src={gpv}
                controls
              />
              <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
                <div className="col-5">
                  <h2 className="text-start">Step 1:</h2>
                  <img className="img-fluid" src={step1} alt="stepsimage" />
                  <Link
                    to="/centers"
                    type="button"
                    className="btn btn-primary"
                    style={{ marginTop: "-45px", marginRight: "20px" }}
                  >
                    قریب ترین مرکز
                  </Link>
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={gpvstep1}
                    controls
                  />
                </div>
                <div className="col-5" style={{ marginLeft: "20px" }}>
                  <h2 className="text-start">Step 2:</h2>
                  <img
                    className="img-fluid"
                    src="https://wallpapercave.com/wp/wp4470754.jpg"
                    alt="stepsimage"
                  />
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  />
                </div>
              </div>
              <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
                <div className="col-5">
                  <h2 className="text-start">Step 3:</h2>
                  <img className="img-fluid" src={gpvstep3} alt="stepsimage" />
                  {/* <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  /> */}
                </div>
                <div className="col-5" style={{ marginLeft: "20px" }}>
                  <h2 className="text-start">Step 4:</h2>
                  <img
                    className="img-fluid"
                    src={courierstep4}
                    alt="stepsimage"
                  />
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  />
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane {...props.changeProgress(70)} eventKey="#id=c">
              <h2>لرنر ڈرائیونگ لائسنس کا تعارف</h2>
              {/* <ServicesSlider img1={testimg} img2={testimg} img3={testimg} /> */}
              <ReactAudioPlayer
                style={{ width: "30%" }}
                className="mt-3"
                src={ldl}
                controls
              />
              <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
                <div className="col-5">
                  <h2 className="text-start">Step 1:</h2>
                  <img className="img-fluid" src={step1} alt="stepsimage" />
                  <Link
                    to="/centers"
                    type="button"
                    className="btn btn-primary"
                    style={{ marginTop: "-45px", marginRight: "20px" }}
                  >
                    قریب ترین مرکز
                  </Link>
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={ldlstep1}
                    controls
                  />
                </div>
                <div className="col-5" style={{ marginLeft: "20px" }}>
                  <h2 className="text-start">Step 2:</h2>
                  <img
                    className="img-fluid"
                    src="https://wallpapercave.com/wp/wp4470754.jpg"
                    alt="stepsimage"
                  />
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  />
                </div>
              </div>
              <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
                <div className="col-5">
                  <h2 className="text-start">Step 3:</h2>
                  <img className="img-fluid" src={ldlstep3} alt="stepsimage" />
                  {/* <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  /> */}
                </div>
                <div className="col-5" style={{ marginLeft: "20px" }}>
                  <h2 className="text-start">Step 4:</h2>
                  <img
                    className="img-fluid"
                    src={handstep4}
                    alt="stepsimage"
                  />
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  />
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="#id=d">
              <h2>ڈرائیونگ لائسنس کی تجدید</h2>
              {/* <ServicesSlider img1={testimg} img2={testimg} img3={testimg} /> */}
              <ReactAudioPlayer
                style={{ width: "30%" }}
                className="mt-3"
                src={dlr}
                controls
              />
              <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
                <div className="col-5">
                  <h2 className="text-start">Step 1:</h2>
                  <img className="img-fluid" src={step1} alt="stepsimage" />
                  <Link
                    to="/centers"
                    type="button"
                    className="btn btn-primary"
                    style={{ marginTop: "-45px", marginRight: "20px" }}
                  >
                    قریب ترین مرکز
                  </Link>
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={dlrstep1}
                    controls
                  />
                </div>
                <div className="col-5" style={{ marginLeft: "20px" }}>
                  <h2 className="text-start">Step 2:</h2>
                  <img
                    className="img-fluid"
                    src="https://wallpapercave.com/wp/wp4470754.jpg"
                    alt="stepsimage"
                  />
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  />
                </div>
              </div>
              <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
                <div className="col-5">
                  <h2 className="text-start">Step 3:</h2>
                  <img className="img-fluid" src={dlrstep3} alt="stepsimage" />
                  {/* <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  /> */}
                </div>
                <div className="col-5" style={{ marginLeft: "20px" }}>
                  <h2 className="text-start">Step 4:</h2>
                  <img
                    className="img-fluid"
                    src={courierstep4}
                    alt="stepsimage"
                  />
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  />
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="#id=e">
              <h2>بین الاقوامی ڈرائیونگ لائسنس کا تعارف</h2>
              {/* <ServicesSlider img1={testimg} img2={testimg} img3={testimg} /> */}
              <ReactAudioPlayer
                style={{ width: "30%" }}
                className="mt-3"
                src={idl}
                controls
              />
              <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
                <div className="col-5">
                  <h2 className="text-start">Step 1:</h2>
                  <img className="img-fluid" src={step1} alt="stepsimage" />
                  <Link
                    to="/centers"
                    type="button"
                    className="btn btn-primary"
                    style={{ marginTop: "-45px", marginRight: "20px" }}
                  >
                    قریب ترین مرکز
                  </Link>
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={idlstep1}
                    controls
                  />
                </div>
                <div className="col-5" style={{ marginLeft: "20px" }}>
                  <h2 className="text-start">Step 2:</h2>
                  <img
                    className="img-fluid"
                    src="https://wallpapercave.com/wp/wp4470754.jpg"
                    alt="stepsimage"
                  />
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  />
                </div>
              </div>
              <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
                <div className="col-5">
                  <h2 className="text-start">Step 3:</h2>
                  <img className="img-fluid" src={idlstep3} alt="stepsimage" />
                  {/* <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  /> */}
                </div>
                <div className="col-5" style={{ marginLeft: "20px" }}>
                  <h2 className="text-start">Step 4:</h2>
                  <img
                    className="img-fluid"
                    src={courierstep4}
                    alt="stepsimage"
                  />
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  />
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="#id=f">
              <h2>ڈپلیکیٹ ڈرائیونگ لائسنس کا تعارف</h2>
              {/* <ServicesSlider img1={testimg} img2={testimg} img3={testimg} /> */}
              <ReactAudioPlayer
                style={{ width: "30%" }}
                className="mt-3"
                src={ddl}
                controls
              />
              <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
                <div className="col-5">
                  <h2 className="text-start">Step 1:</h2>
                  <img className="img-fluid" src={step1} alt="stepsimage" />
                  <Link
                    to="/centers"
                    type="button"
                    className="btn btn-primary"
                    style={{ marginTop: "-45px", marginRight: "20px" }}
                  >
                    قریب ترین مرکز
                  </Link>
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={ddlstep1}
                    controls
                  />
                </div>
                <div className="col-5" style={{ marginLeft: "20px" }}>
                  <h2 className="text-start">Step 2:</h2>
                  <img
                    className="img-fluid"
                    src="https://wallpapercave.com/wp/wp4470754.jpg"
                    alt="stepsimage"
                  />
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  />
                </div>
              </div>
              <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
                <div className="col-5">
                  <h2 className="text-start">Step 3:</h2>
                  <img className="img-fluid" src={ddlstep3} alt="stepsimage" />
                  {/* <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  /> */}
                </div>
                <div className="col-5" style={{ marginLeft: "20px" }}>
                  <h2 className="text-start">Step 4:</h2>
                  <img
                    className="img-fluid"
                    src={courierstep4}
                    alt="stepsimage"
                  />
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  />
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="#id=g">
              <h2>لائسنس کی توثیق</h2>
              {/* <ServicesSlider img1={testimg} img2={testimg} img3={testimg} /> */}
              <ReactAudioPlayer
                style={{ width: "30%" }}
                className="mt-3"
                src={eol}
                controls
              />
              <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
                <div className="col-5">
                  <h2 className="text-start">Step 1:</h2>
                  <img className="img-fluid" src={step1} alt="stepsimage" />
                  <Link
                    to="/centers"
                    type="button"
                    className="btn btn-primary"
                    style={{ marginTop: "-45px", marginRight: "20px" }}
                  >
                    قریب ترین مرکز
                  </Link>
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={eolstep1}
                    controls
                  />
                </div>
                <div className="col-5" style={{ marginLeft: "20px" }}>
                  <h2 className="text-start">Step 2:</h2>
                  <img
                    className="img-fluid"
                    src="https://wallpapercave.com/wp/wp4470754.jpg"
                    alt="stepsimage"
                  />
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  />
                </div>
              </div>
              <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
                <div className="col-5">
                  <h2 className="text-start">Step 3:</h2>
                  <img className="img-fluid" src={freestep3} alt="stepsimage" />
                  {/* <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  /> */}
                </div>
                <div className="col-5" style={{ marginLeft: "20px" }}>
                  <h2 className="text-start">Step 4:</h2>
                  <img
                    className="img-fluid"
                    src={courierstep4}
                    alt="stepsimage"
                  />
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  />
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="#id=h">
              <h2>ملازمین کی رجسٹریشن</h2>
              {/* <ServicesSlider img1={testimg} img2={testimg} img3={testimg} /> */}
              <ReactAudioPlayer
                style={{ width: "30%" }}
                className="mt-3"
                src={er}
                controls
              />
              <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
                <div className="col-5">
                  <h2 className="text-start">Step 1:</h2>
                  <img className="img-fluid" src={step1} alt="stepsimage" />
                  <Link
                    to="/centers"
                    type="button"
                    className="btn btn-primary"
                    style={{ marginTop: "-45px", marginRight: "20px" }}
                  >
                    قریب ترین مرکز
                  </Link>
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={erstep1}
                    controls
                  />
                </div>
                <div className="col-5" style={{ marginLeft: "20px" }}>
                  <h2 className="text-start">Step 2:</h2>
                  <img
                    className="img-fluid"
                    src="https://wallpapercave.com/wp/wp4470754.jpg"
                    alt="stepsimage"
                  />
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  />
                </div>
              </div>
              <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
                <div className="col-5">
                  <h2 className="text-start">Step 3:</h2>
                  <img className="img-fluid" src={freestep3} alt="stepsimage" />
                  {/* <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  /> */}
                </div>
                <div className="col-5" style={{ marginLeft: "20px" }}>
                  <h2 className="text-start">Step 4:</h2>
                  <img
                    className="img-fluid"
                    src={handstep4}
                    alt="stepsimage"
                  />
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  />
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="#id=i">
              <h2>کرایہ داروں کی رجسٹریشن</h2>
              {/* <ServicesSlider img1={testimg} img2={testimg} img3={testimg} /> */}
              <ReactAudioPlayer
                style={{ width: "30%" }}
                className="mt-3"
                src={tr}
                controls
              />
              <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
                <div className="col-5">
                  <h2 className="text-start">Step 1:</h2>
                  <img className="img-fluid" src={step1} alt="stepsimage" />
                  <Link
                    to="/centers"
                    type="button"
                    className="btn btn-primary"
                    style={{ marginTop: "-45px", marginRight: "20px" }}
                  >
                    قریب ترین مرکز
                  </Link>
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={trstep1}
                    controls
                  />
                </div>
                <div className="col-5" style={{ marginLeft: "20px" }}>
                  <h2 className="text-start">Step 2:</h2>
                  <img
                    className="img-fluid"
                    src="https://wallpapercave.com/wp/wp4470754.jpg"
                    alt="stepsimage"
                  />
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  />
                </div>
              </div>
              <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
                <div className="col-5">
                  <h2 className="text-start">Step 3:</h2>
                  <img className="img-fluid" src={freestep3} alt="stepsimage" />
                  {/* <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  /> */}
                </div>
                <div className="col-5" style={{ marginLeft: "20px" }}>
                  <h2 className="text-start">Step 4:</h2>
                  <img
                    className="img-fluid"
                    src={handstep4}
                    alt="stepsimage"
                  />
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  />
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="#id=j">
              <h2>گاڑی کی تصدیق</h2>
              {/* <ServicesSlider img1={testimg} img2={testimg} img3={testimg} /> */}
              <ReactAudioPlayer
                style={{ width: "30%" }}
                className="mt-3"
                src={vv}
                controls
              />
              <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
                <div className="col-5">
                  <h2 className="text-start">Step 1:</h2>
                  <img className="img-fluid" src={step1} alt="stepsimage" />
                  <Link
                    to="/centers"
                    type="button"
                    className="btn btn-primary"
                    style={{ marginTop: "-45px", marginRight: "20px" }}
                  >
                    قریب ترین مرکز
                  </Link>
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={vvstep1}
                    controls
                  />
                </div>
                <div className="col-5" style={{ marginLeft: "20px" }}>
                  <h2 className="text-start">Step 2:</h2>
                  <img
                    className="img-fluid"
                    src="https://wallpapercave.com/wp/wp4470754.jpg"
                    alt="stepsimage"
                  />
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  />
                </div>
              </div>
              <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
                <div className="col-5">
                  <h2 className="text-start">Step 3:</h2>
                  <img className="img-fluid" src={vvstep3} alt="stepsimage" />
                  {/* <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  /> */}
                </div>
                <div className="col-5" style={{ marginLeft: "20px" }}>
                  <h2 className="text-start">Step 4:</h2>
                  <img
                    className="img-fluid"
                    src={handstep4}
                    alt="stepsimage"
                  />
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  />
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="#id=k">
              <h2>نقصان کی رپورٹ</h2>
              {/* <ServicesSlider img1={testimg} img2={testimg} img3={testimg} /> */}
              <ReactAudioPlayer
                style={{ width: "30%" }}
                className="mt-3"
                src={lr}
                controls
              />
              <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
                <div className="col-5">
                  <h2 className="text-start">Step 1:</h2>
                  <img className="img-fluid" src={step1} alt="stepsimage" />
                  <Link
                    to="/centers"
                    type="button"
                    className="btn btn-primary"
                    style={{ marginTop: "-45px", marginRight: "20px" }}
                  >
                    قریب ترین مرکز
                  </Link>
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={lrstep1}
                    controls
                  />
                </div>
                <div className="col-5" style={{ marginLeft: "20px" }}>
                  <h2 className="text-start">Step 2:</h2>
                  <img
                    className="img-fluid"
                    src="https://wallpapercave.com/wp/wp4470754.jpg"
                    alt="stepsimage"
                  />
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  />
                </div>
              </div>
              <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
                <div className="col-5">
                  <h2 className="text-start">Step 3:</h2>
                  <img className="img-fluid" src={freestep3} alt="stepsimage" />
                  {/* <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  /> */}
                </div>
                <div className="col-5" style={{ marginLeft: "20px" }}>
                  <h2 className="text-start">Step 4:</h2>
                  <img
                    className="img-fluid"
                    src={handstep4}
                    alt="stepsimage"
                  />
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  />
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="#id=l">
              <h2>کرائم رپورٹ کا تعارف</h2>
              {/* <ServicesSlider img1={testimg} img2={testimg} img3={testimg} /> */}
              <ReactAudioPlayer
                style={{ width: "30%" }}
                className="mt-3"
                src={cr}
                controls
              />
              <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
                <div className="col-5">
                  <h2 className="text-start">Step 1:</h2>
                  <img className="img-fluid" src={step1} alt="stepsimage" />
                  <Link
                    to="/centers"
                    type="button"
                    className="btn btn-primary"
                    style={{ marginTop: "-45px", marginRight: "20px" }}
                  >
                    قریب ترین مرکز
                  </Link>
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={crstep1}
                    controls
                  />
                </div>
                <div className="col-5" style={{ marginLeft: "20px" }}>
                  <h2 className="text-start">Step 2:</h2>
                  <img
                    className="img-fluid"
                    src="https://wallpapercave.com/wp/wp4470754.jpg"
                    alt="stepsimage"
                  />
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  />
                </div>
              </div>
              <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
                <div className="col-5">
                  <h2 className="text-start">Step 3:</h2>
                  <img className="img-fluid" src={freestep3} alt="stepsimage" />
                  {/* <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  /> */}
                </div>
                <div className="col-5" style={{ marginLeft: "20px" }}>
                  <h2 className="text-start">Step 4:</h2>
                  <img
                    className="img-fluid"
                    src={handstep4}
                    alt="stepsimage"
                  />
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  />
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="#id=m">
              <h2>خواتین پر تشدد کی رپورٹ</h2>
              {/* <ServicesSlider img1={testimg} img2={testimg} img3={testimg} /> */}
              <ReactAudioPlayer
                style={{ width: "30%" }}
                className="mt-3"
                src={wvr}
                controls
              />
              <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
                <div className="col-5">
                  <h2 className="text-start">Step 1:</h2>
                  <img className="img-fluid" src={step1} alt="stepsimage" />
                  <Link
                    to="/centers"
                    type="button"
                    className="btn btn-primary"
                    style={{ marginTop: "-45px", marginRight: "20px" }}
                  >
                    قریب ترین مرکز
                  </Link>
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={wvrstep1}
                    controls
                  />
                </div>
                <div className="col-5" style={{ marginLeft: "20px" }}>
                  <h2 className="text-start">Step 2:</h2>
                  <img
                    className="img-fluid"
                    src="https://wallpapercave.com/wp/wp4470754.jpg"
                    alt="stepsimage"
                  />
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  />
                </div>
              </div>
              <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
                <div className="col-5">
                  <h2 className="text-start">Step 3:</h2>
                  <img className="img-fluid" src={freestep3} alt="stepsimage" />
                  {/* <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  /> */}
                </div>
                <div className="col-5" style={{ marginLeft: "20px" }}>
                  <h2 className="text-start">Step 4:</h2>
                  <img
                    className="img-fluid"
                    src={handstep4}
                    alt="stepsimage"
                  />
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  />
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="#id=n">
              <h2>ایف آئی آر کی کاپی</h2>
              {/* <ServicesSlider img1={testimg} img2={testimg} img3={testimg} /> */}
              <ReactAudioPlayer
                style={{ width: "30%" }}
                className="mt-3"
                src={cof}
                controls
              />
              <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
                <div className="col-5">
                  <h2 className="text-start">Step 1:</h2>
                  <img className="img-fluid" src={step1} alt="stepsimage" />
                  <Link
                    to="/centers"
                    type="button"
                    className="btn btn-primary"
                    style={{ marginTop: "-45px", marginRight: "20px" }}
                  >
                    قریب ترین مرکز
                  </Link>
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cofstep1}
                    controls
                  />
                </div>
                <div className="col-5" style={{ marginLeft: "20px" }}>
                  <h2 className="text-start">Step 2:</h2>
                  <img
                    className="img-fluid"
                    src="https://wallpapercave.com/wp/wp4470754.jpg"
                    alt="stepsimage"
                  />
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  />
                </div>
              </div>
              <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
                <div className="col-5">
                  <h2 className="text-start">Step 3:</h2>
                  <img className="img-fluid" src={freestep3} alt="stepsimage" />
                  {/* <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  /> */}
                </div>
                <div className="col-5" style={{ marginLeft: "20px" }}>
                  <h2 className="text-start">Step 4:</h2>
                  <img
                    {...props.changeProgress(100)}
                    className="img-fluid"
                    src={handstep4}
                    alt="stepsimage"
                  />
                  <ReactAudioPlayer
                    style={{ width: "60%" }}
                    className="mt-3"
                    src={cci}
                    controls
                  />
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
