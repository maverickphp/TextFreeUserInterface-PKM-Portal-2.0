import ReactAudioPlayer from "react-audio-player";
import cci from "./audios/cci.mp3";
import gpv from "./audios/gpv.mp3";
import cr from "./audios/cr.mp3";
import ddl from "./audios/ddl.mp3";
import dlr from "./audios/dlr.mp3";
import eol from "./audios/eol.mp3";
import er from "./audios/er.mp3";
import idl from "./audios/idl.mp3";
import tr from "./audios/tr.mp3";
import lr from "./audios/lr.mp3";
import vv from "./audios/vv.mp3";
import ldl from "./audios/ldl.mp3";
import wvr from "./audios/wvr.mp3";
import cof from "./audios/cof.mp3";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import ServicesSlider from "../UI/ServicesSlider";
import testimg from "../UI/SliderImages/bg1.jpg";

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
      defaultActiveKey="#id=a"
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
              <ReactAudioPlayer className="mt-4" src={cci} controls />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=b">
            <h2>جنرل پولیس کی تصدیق</h2>
              {/* <ServicesSlider img1={testimg} img2={testimg} img3={testimg} /> */}
              <ReactAudioPlayer className="mt-4" src={gpv} controls />
            </Tab.Pane>
            <Tab.Pane {...props.changeProgress(70)} eventKey="#id=c">
              <h2>لرنر ڈرائیونگ لائسنس کا تعارف</h2>
            {/* <ServicesSlider img1={testimg} img2={testimg} img3={testimg} /> */}
              <ReactAudioPlayer className="mt-4" src={ldl} controls />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=d">
              <h2>ڈرائیونگ لائسنس کی تجدید</h2>
              {/* <ServicesSlider img1={testimg} img2={testimg} img3={testimg} /> */}
              <ReactAudioPlayer className="mt-4" src={dlr} controls />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=e">
              <h2>بین الاقوامی ڈرائیونگ لائسنس کا تعارف</h2>
                  {/* <ServicesSlider img1={testimg} img2={testimg} img3={testimg} /> */}
              <ReactAudioPlayer className="mt-4" src={idl} controls />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=f">
              <h2>ڈپلیکیٹ ڈرائیونگ لائسنس کا تعارف</h2>
            {/* <ServicesSlider img1={testimg} img2={testimg} img3={testimg} /> */}
              <ReactAudioPlayer className="mt-4" src={ddl} controls />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=g">
              <h2>لائسنس کی توثیق</h2>
               {/* <ServicesSlider img1={testimg} img2={testimg} img3={testimg} /> */}
              <ReactAudioPlayer className="mt-4" src={eol} controls />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=h">
              <h2>ملازمین کی رجسٹریشن</h2>
                {/* <ServicesSlider img1={testimg} img2={testimg} img3={testimg} /> */}
              <ReactAudioPlayer className="mt-4" src={er} controls />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=i">
              <h2>کرایہ داروں کی رجسٹریشن</h2>
                 {/* <ServicesSlider img1={testimg} img2={testimg} img3={testimg} /> */}
              <ReactAudioPlayer className="mt-4" src={tr} controls />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=j">
              <h2>گاڑی کی تصدیق</h2>
         {/* <ServicesSlider img1={testimg} img2={testimg} img3={testimg} /> */}
              <ReactAudioPlayer className="mt-4" src={vv} controls />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=k">
              <h2>نقصان کی رپورٹ</h2>
             {/* <ServicesSlider img1={testimg} img2={testimg} img3={testimg} /> */}
              <ReactAudioPlayer className="mt-4" src={lr} controls />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=l">
              <h2>کرائم رپورٹ  کا تعارف</h2>
                  {/* <ServicesSlider img1={testimg} img2={testimg} img3={testimg} /> */}
              <ReactAudioPlayer className="mt-4" src={cr} controls />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=m">
              <h2>خواتین پر تشدد کی رپورٹ
</h2>
                {/* <ServicesSlider img1={testimg} img2={testimg} img3={testimg} /> */}
              <ReactAudioPlayer className="mt-4" src={wvr} controls />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=n">
              <h2>ایف آئی آر کی کاپی</h2>
              {/* <ServicesSlider img1={testimg} img2={testimg} img3={testimg} /> */}
              <ReactAudioPlayer
                className="mt-4"
                src={cof}
                controls
                {...props.changeProgress(100)}
              />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
