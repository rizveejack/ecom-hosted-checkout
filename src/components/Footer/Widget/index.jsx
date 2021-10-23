import Deperment from './Deperment'
import Information from './Information'
import MobileApp from './MobileApp'
import SingleWidget from './SingleWidget'

const Widget = () => {
    return (
        <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
                <SingleWidget />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
                <MobileApp />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
                <Information />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
                <Deperment />
            </div>
        </div>
    )
}

export default Widget
