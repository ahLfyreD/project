import ViewLanding from './landing_page_components/view_landing/ViewLanding';
import ViewImage from './landing_page_components/view_image/ViewImage';
import ViewCourse from './landing_page_components/view_course/ViewCourse';
import ViewNews from './landing_page_components/view_news/ViewNews';
import Footer from '../../components/footer/Footer';

import './LandingPage.css';

const LandingPage = () => {
    

    return (
        <div className='landing_page_container'>
            <div className='landing_page_content'>
                <div className="landing_body">
                    <ViewLanding />
                    <ViewImage />
                    <ViewCourse />
                    <ViewNews />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage