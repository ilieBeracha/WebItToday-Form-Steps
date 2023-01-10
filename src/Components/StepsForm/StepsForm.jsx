import React, { useState, useEffect } from 'react';
import './StepsForm.css';
import StepProgressBar from '../ProgressBar/StepProgressBar';
import i18next from 'i18next';
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';
import Step3 from './Step3/Step3';

i18next.init({
    lng: 'en',
    resources: {
        en: {
            translation: {
                'Personal Details': 'Personal Details',
                'Username': 'Choose Username',
                'First Name': 'First Name',
                'Last Name': 'Last Name',
                'Phone': 'Phone',
                'Email': 'Email',
                'Address': 'Address',
                'City': 'City',
                'Zipcode': 'Zipcode',
                'Country': 'Country',
                'Business Details': "Business Details",
                "Business Name": "Business Name",
                "Business Discription": "Business Discription",
                "Business Phone": "Business Phone",
                "Business Email": "Business Email",
                "Website": "Website",
                "Occupation": "Occupation",
                "Opening Hours": "Opening Hours",
                "Sunday": "Sunday",
                "Monday": "Monday",
                "tuesday": "tuesday",
                "Wednesday": "Wednesday",
                "Thursday": "Thursday",
                "Friday": "Friday",
                "Saturday": "Saturday",
                "From": "From",
                "To": "To",
                "Next": "Next",
                "Return": "Return",
                "Submit": "Submit",
                "Website Details": "Website Details",
                "Domain Name": "Domain Name",
                "Logo": "Logo",
                "Background Image": "Background Image",
                "Navbar Section": "Navbar Section",
                "Navbar Header Text": "Navbar Header Text",
                "Navbar Body": "Navbar Body",
                "Navbar Button Text": "Navbar Button Text",
                "Header Section": "Header Section",
                "Header Text": "Header Text",
                "Header Body": "Header Body",
                "Header Button Text": "Header Button Text",
                "Gallery Section": "Gallery Section",
                "Gallery Text": "Gallery Text",
                "Gallery Body": "Gallery Body",
                "Gallery Button Text": "Gallery Button Text",
                "Faq Section": "Faq Section",
                "Faq Text": "Faq Text",
                "Faq Body": "Faq Body",
                "Faq Button Text": "Faq Button Text",
                "Departments Section": "Departments Section",
                "Departments Text": "Departments Text",
                "Departments Body": "Departments Body",
                "Departments Button Text": "Departments Button Text",
                "Utility Section": "Utility Section",
                "Utility Text": "Utility Text",
                "Utility Body": "Utility Body",
                "Utility Button Text": "Utility Button Text",
                "Contact Us Section": "Contact Us Section",
                "Contact Us Text": "Contant Us Text",
                "Contact Us Body": "Contant Us Body",
                "Contact Us Button Text": "Contant Us Button Text",
                "Contact Info Section": "Contant Info Section",
                "Contact Info Text": "Contant Info Text",
                "Contact Info Body": "Contant Info Body",
                "Contant Info Button Text": "Contant Info Button Text",
                "Overview Section": "Overview Section",
                "Overview Text": "Overview Text",
                "Overview Body": "Overview Body",
                "Overview Button Text": "Overview Button Text",
                "Roadmap Section": "Roadmap Section",
                "Roadmap Text": "Roadmap Text",
                "Roadmap Body": "Roadmap Body",
                "Roadmap Button Text": "Roadmap Button Text",
                "Whitepaper Section": "Whitepaper Section",
                "Whitepaper Text": "Whitepaper Text",
                "Whitepaper Body": "Whitepaper Body",
                "Whitepaper Button Text": "Whitepaper Button Text",
                "Crop": "Crop",
                "Sections": "Sections"

            }
        },
        he: {
            translation: {
                'Personal Details': 'פרטים אישיים',
                'Username': "שם משתמש",
                'First Name': "שם פרטי",
                'Last Name': "שם משפחה",
                'Phone': "פלאפון",
                'Email': "אימייל",
                'Address': "כתובת",
                'City': "עיר",
                'Zipcode': "מיקוד",
                'Country': "ארץ",
                "Business Details": "פרטי העסק",
                "Business Name": "שם העסק",
                "Business Discription": 'תיאור העסק',
                "Business Phone": "פלאפון של העסק",
                "Business Email": "אימייל של העסק",
                "Website": "אתר העסק",
                "Occupation": "תעסוקה",
                "Opening Hours": "שעות פתיחה",
                "Sunday": "יום ראשון",
                "Monday": "יום שני",
                "Tuesday": "יום שלישי",
                "Wednesday": "יום רביעי",
                "Thursday": "יום חמישי",
                "Friday": "יום שישי",
                "Saturday": "יום שבת",
                "From": "מ",
                "To": "ל",
                "Next": "הבא",
                "Return": "חזור",
                "Submit": "הגש",
                "Website Details": "פרטי האתר",
                "Domain Name": "דומיין",
                "Logo": "לוגו",
                "Background Image": "תמונת רקע",
                "Navbar Section": "סרגל ניווט",
                "Navbar Header Text": "סרגל ניווט כותרת",
                "Navbar Body": "סרגל ניווט גוף",
                "Navbar Button Text": "סרגל ניווט כפתור טקסט",
                "Header Section": "כותרת",
                "Header Text": "כותרת טקסט",
                "Header Body": "כותרת גוף",
                "Header Button Text": "כותרת כפתור טקסט",
                "Gallery Section": "גלריה",
                "Gallery Text": "גלריה טקסט",
                "Gallery Body": "גלריה גוף",
                "Gallery Button Text": "גךריה כפתור טקסט",
                "Faq Section": "תשובות ושאלות",
                "Faq Text": "תשובות ושאלות טקסט",
                "Faq Body": "תשובות ושאלות גוף",
                "Faq Button Text": "תשובות ושאלות כפתור טקסט",
                "Departments Section": "מחלקה",
                "Departments Text": "מחלקה טקסט",
                "Departments Body": "מחלקה גוף",
                "Departments Button Text": "מחלקה כפתור טקסט",
                "Utility Section": "שירות",
                "Utility Text": "שירות טקסט",
                "Utility Body": "שירות גוף",
                "Utility Button Text": "שירות כפתור טקסט",
                "Contact Us Section": "צור קשר",
                "Contact Us Text": "צור קשר טקסט",
                "Contact Us Body": "צור קשר גוף",
                "Contact Us Button Text": "צור קשר כפתור טקסט",
                "Contact Info Section": "פרטי התקשרות",
                "Contact Info Text": "פרטי התקשרות טקסט",
                "Contact Info Body": "פרטי התקשרות גוף",
                "Contant Info Button Text": "פרטי התקשרות כפתור טקסט",
                "Overview Section": "סקירה כללית",
                "Overview Text": "סקירה כללית טקסט",
                "Overview Body": "סקירה כללית גוף",
                "Overview Button Text": "סקירה כללית כפתור טקסט",
                "Roadmap Section": "מפת דרכים",
                "Roadmap Text": "מפת דרכים טקסט",
                "Roadmap Body": "מפת דרכים גוף",
                "Roadmap Button Text": "מפת דרכים כפתור טקסט",
                "Whitepaper Section": "נייר לבן",
                "Whitepaper Text": "נייר לבן טקסט",
                "Whitepaper Body": "נייר לבן גוף",
                "Whitepaper Button Text": "נייר לבן כפתור טקסט",
                "Crop": "גזור",
                "Sections": "גוף האתר"
            }
        }
    }
});




function StepForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [language, setLanguage] = useState(i18next.language);
    const [heDirection, setHeDirection] = useState(false)

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };

    useEffect(() => {
        i18next.changeLanguage(language);
        window.localStorage.getItem('lan');
    }, [language]);

    const handleLanguageChange = (event) => {
        setHeDirection(!heDirection)
        const newLanguage = event.target.value;
        window.localStorage.setItem('lan', newLanguage)
        setLanguage(newLanguage)
        i18next.changeLanguage(newLanguage);
    };




    function renderStep() {
        switch (currentStep) {
            case 1:
                return <Step1 handleNext={handleNext} />;
            case 2:
                return <Step2 handlePrev={handlePrev} handleNext={handleNext} />;
            case 3:
                return <Step3 handlePrev={handlePrev} />;
            default:
                return null;
        }
    }

    return (
        <>
            {heDirection === false ?

                <div className='StepForm'>
                    <div className='ProgressBarDiv'>
                        <StepProgressBar currentStep={currentStep} />
                    </div>

                    {renderStep()}
                    <div className='changeLanDiv'>
                        <select defaultValue={language} onChange={(e) => handleLanguageChange(e)}>
                            <option value="en">English</option>
                            <option value="he">Hebrew</option>
                        </select>
                    </div>
                </div>


                : <div className='StepForm StepFormRtl'>
                    <div className='ProgressBarDiv'>
                        <StepProgressBar currentStep={currentStep} />
                    </div>
                    {renderStep()}

                    <div className='changeLanDiv'>
                        <select defaultValue={language} onChange={(e) => handleLanguageChange(e)}>
                            <option value="en">English</option>
                            <option value="he">Hebrew</option>
                        </select>
                    </div>
                </div>}
        </>
    );
}

export default StepForm;