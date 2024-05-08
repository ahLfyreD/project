import image from '../../assets/background.svg';

import Header from '../../components/header/Header';



import './LandingPage.css';
import ViewLanding from './landing_page_components/view_landing/ViewLanding';
import ViewImage from './landing_page_components/view_image/ViewImage';
import ViewCourse from './landing_page_components/view_course/ViewCourse';
import ViewFounder from './landing_page_components/view_founder/ViewFounder';
import ViewNews from './landing_page_components/view_news/ViewNews';
import ViewSub from './landing_page_components/view_sub/ViewSub';
import Footer from '../../components/footer/Footer';

const LandingPage = () => {
    

    return (
        <div className='landing_page_container'>
            <div className='landing_page_content'>
                <div className="landing_body">
                    <ViewLanding />
                    <ViewImage />
                    <ViewCourse />
                    <ViewNews />
                    <ViewFounder />
                    <ViewSub />
                </div>
            </div>
        </div>
    )
}

export default LandingPage