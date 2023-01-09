import i18next from "i18next";
import { useForm } from "react-hook-form";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useEffect, useState } from "react";
const defaultSrc = "https://res.cloudinary.com/olanetsoft/image/upload/v1648679302/uploadedFiles/family.jpg";

function Step3(props) {


    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    },[])

    const [image, setImage] = useState(defaultSrc);
    const [cropData, setCropData] = useState("");
    const [cropper, setCropper] = useState(null);
    const { register, handleSubmit } = useForm();
    const [cropped, setCropped] = useState(false)

    function getWebsiteDet(Website) {
        const WebsiteOrgenize = {
            "DomainName": Website.DomainName,
            "Logo": image,
            "BackroundImage": Website.BackgroundImage,
            "DepartmentsImages": "fixing",
            "Sections": [
                {
                    "id": "navBar",
                    "headline": Website.NavbarHeadline,
                    "body": Website.NavbarBody,
                    "btnText": Website.NavbarBtnText,
                },
                {
                    "id": "header",
                    "headline": Website.HeaderHeadline,
                    "body": Website.HeaderBody,
                    "btnText": Website.HeaderBtnText,
                    "img": Website.HeaderImg
                },
                {
                    "id": "gallery",
                    "headline": Website.GalleryHeadline,
                    "body": Website.GalleryBody,
                    "btnText": Website.GalleryBtnText,
                    "img": Website.GalleryImg

                },
                {
                    "id": "faq",
                    "headline": Website.FaqHeadline,
                    "body": Website.FaqBody,
                    "btnText": Website.FaqBtnText,
                    "img": Website.FaqImg
                },
                {
                    "id": "departments",
                    "headline": Website.DepartmentsHeadline,
                    "body": Website.DepartmentsBody,
                    "btnText": Website.DepartmentsBtnText,
                    "img": Website.DepartmentsImg
                },
                {
                    "id": "utility",
                    "headline": Website.UtilityHeadline,
                    "body": Website.UtilityBody,
                    "btnText": Website.UtilityBtnText,
                    "img": Website.UtilityImg
                },
                {
                    "id": "contactUs",
                    "headline": Website.ContactUsHeadline,
                    "body": Website.ContactUsBody,
                    "btnText": Website.ContactUsBtnText,
                    "img": Website.ContactUsImg
                },
                {
                    "id": "contactInfo",
                    "headline": Website.ContactInfoHeadline,
                    "body": Website.ContactInfoBody,
                    "btnText": Website.ContactInfoBtnText,
                    "img": Website.ContactInfoImg

                },
                {
                    "id": "overview",
                    "headline": Website.OverviewHeadline,
                    "body": Website.OverviewBody,
                    "btnText": Website.OverviewBtnText,
                    "img": Website.OverviewImg

                },
                {
                    "id": "roadmap",
                    "headline": Website.RoadmapHeadline,
                    "body": Website.RoadmapBody,
                    "btnText": Website.RoadmapBtnText,
                    "img": Website.RoadmapImg

                },
                {
                    "id": "whitepaper",
                    "headline": Website.WhitePaperHeadline,
                    "body": Website.WhitePaperBody,
                    "btnText": Website.WhitePaperBtnText,
                    "img": Website.WhitePaperImg

                },
            ]
        }
        console.log(WebsiteOrgenize)

    }

    const getCropData = () => {
        setCropped(!cropped)
        if (typeof cropper !== "undefined") {
            setCropData(cropper.getCroppedCanvas().toDataURL());
        }
    };

    const onChangeLogo = (e) => {
        setCropped(!cropped)
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(files[0]);
    };

    function handleFiles(e) {
        console.log(e.target.files)
    }

    return (
        <div className="formStyle WebsiteDetailsStep3">
            <div className="StepHeaderDivWebsite">
                <h2>{i18next.t('Website Details')}</h2>
            </div>
            <div className="FormInputs">
                <div className="FormPart1">
                    <form onSubmit={handleSubmit(getWebsiteDet)} action="">
                        <div className="DomainNameDiv">
                            <label htmlFor="DomainName">{i18next.t('Domain Name')}</label>
                            <input name="DomainName" type="text" {...register('DomainName')} />
                        </div>
                        <div className="WebsiteImagesUploadDiv">
                            {/* <div> */}
                                <div className="WebsiteImagesUploadDivLabel">

                                    <h5 htmlFor="Logo">{i18next.t('Logo')}</h5>
                                    <input className="custom-file-input" onChange={onChangeLogo} name="Logo" type="file" />
                                </div>
                                {cropped === false ?
                                    <>
                                        <Cropper
                                            width={300}
                                            height={400}
                                            className="cropper"
                                            zoomTo={0.5}
                                            initialAspectRatio={1}
                                            src={image}
                                            viewMode={1}
                                            minCropBoxHeight={10}
                                            minCropBoxWidth={10}
                                            background={false}
                                            responsive={true}
                                            autoCropArea={1}
                                            checkOrientation={false}
                                            onInitialized={(instance) => {
                                                setCropper(instance);
                                            }}
                                            guides={true}
                                        />
                                        <button type="button" onClick={getCropData}>{i18next.t('Crop')}</button>
                                    </>
                                    :
                                    <div >
                                        {cropData ? (
                                            <div className="CroppedImageDisplay">
                                                < img style={{ maxHeight: "300px", maxWidth: '100%' }} src={cropData} alt="cropped" />
                                            </div>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                }
                            {/* </div> */}
                        </div>
                        <div className="WebsiteImagesUploadDiv">
                            {/* <div> */}

                                <div className="WebsiteImagesUploadDivLabel">

                                    <h5 htmlFor="BackgroundImage">{i18next.t('Background Image')}</h5>
                                    <input name="BackgroundImage" type="file" {...register('BackgroundImage')} />
                                </div>
                                {/* {cropped === false ?
                                    <>
                                        <Cropper
                                            className="cropper"
                                            zoomTo={0.5}
                                            initialAspectRatio={1}
                                            src={image}
                                            viewMode={1}
                                            minCropBoxHeight={10}
                                            minCropBoxWidth={10}
                                            background={false}
                                            responsive={true}
                                            autoCropArea={1}
                                            checkOrientation={false}
                                            onInitialized={(instance) => {
                                                setCropper(instance);
                                            }}
                                            guides={true}
                                        />
                                        <button type="button" onClick={getCropData}>{i18next.t('Crop')}</button>
                                    </>
                                    :
                                    <div >
                                        {cropData ? (
                                            <div className="CroppedImageDisplay">
                                                < img style={{ maxHeight: "300px", maxWidth: '100%' }} src={cropData} alt="cropped" />
                                            </div>
                                        ) : (
                                            <></>
                                        )}
                                    </div> */}
                                {/* } */}
                            {/* </div> */}
                        </div>
                        <h2>{i18next.t('Sections')}:</h2>
                        <div className="WebsiteDetailsStep3Sections">
                            <div className="WebsiteSection">

                                <span>{i18next.t('Navbar Section')}</span>
                                <div className="NavbarSection">
                                    <input placeholder={i18next.t('Navbar Header Text')} type="text" name="NavbarHeadline" {...register('NavbarHeadline')} />
                                    <input placeholder={i18next.t('Navbar Body')} type="text" name="NavbarBody" {...register('NavbarBody')} />
                                    <input placeholder={i18next.t('Navbar Button Text')} type="text" name="NavbarBtnText" {...register('NavbarBtnText')} />
                                </div>
                            </div>
                            <div className="WebsiteSection">

                                <span>{i18next.t('Header Section')}</span>
                                <div className="NavbarSection">
                                    <input placeholder={i18next.t('Header Text')} type="text" name="HeaderHeadline" {...register('HeaderHeadline')} />
                                    <input placeholder={i18next.t('Header Body')} type="text" name="HeaderBody" {...register('HeaderBody')} />
                                    <input placeholder={i18next.t('Header Button Text')} type="text" name="HeaderBtnText" {...register('HeaderBtnText')} />
                                    <input type="file" name="HeaderImg" {...register('HeaderImg')} />
                                </div>
                            </div>
                            <div className="WebsiteSection">

                                <span>{i18next.t('Gallery Section')}</span>
                                <div className="NavbarSection">
                                    <input placeholder={i18next.t('Gallery Text')} type="text" name="GalleryHeadline" {...register('GalleryHeadline')} />
                                    <input placeholder={i18next.t('Gallery Body')} type="text" name="GalleryBody" {...register('GalleryBody')} />
                                    <input placeholder={i18next.t('Gallery Button Text')} type="text" name="GalleryBtnText" {...register('GalleryBtnText')} />
                                    <input onChange={(e) => handleFiles(e)} multiple type="file" name="GalleryImg" {...register('GalleryImg')} />
                                </div>
                            </div>
                            <div className="WebsiteSection">
                                <span>{i18next.t('Faq Section')}</span>
                                <div className="NavbarSection">
                                    <input placeholder={i18next.t('Faq Text')} type="text" name="FaqHeadline" {...register('FaqHeadline')} />
                                    <input placeholder={i18next.t('Faq Body')} type="text" name="FaqBody" {...register('FaqBody')} />
                                    <input placeholder={i18next.t('Faq Button Text')} type="text" name="FaqBtnText" {...register('FaqBtnText')} />
                                    <input type="file" name="FaqImg" {...register('FaqImg')} />
                                </div>
                            </div>
                            <div className="WebsiteSection">
                                <span>{i18next.t('Departments Section')}</span>
                                <div className="NavbarSection">
                                    <input placeholder={i18next.t('Departments Text')} type="text" name="DepartmentsHeadline" {...register('DepartmentsHeadline')} />
                                    <input placeholder={i18next.t('Departments Body')} type="text" name="DepartmentsBody" {...register('DepartmentsBody')} />
                                    <input placeholder={i18next.t('Departments Button Text')} type="text" name="DepartmentsBtnText" {...register('DepartmentsBtnText')} />
                                    <input type="file" name="DepartmentsImg" {...register('DepartmentsImg')} />
                                </div>
                            </div>
                            <div className="WebsiteSection">
                                <span>{i18next.t('Utility Section')}</span>
                                <div className="NavbarSection">
                                    <input placeholder={i18next.t('Utility Text')} type="text" name="UtilityHeadline" {...register('UtilityHeadline')} />
                                    <input placeholder={i18next.t('Utility Body')} type="text" name="UtilityBody" {...register('UtilityBody')} />
                                    <input placeholder={i18next.t('Utility Button Text')} type="text" name="UtilityBtnText" {...register('UtilityBtnText')} />
                                    <input type="file" name="UtilityImg" {...register('UtilityImg')} />
                                </div>
                            </div>
                            <div className="WebsiteSection">
                                <span>{i18next.t('Contact Us Section')}</span>
                                <div className="NavbarSection">
                                    <input placeholder={i18next.t('Contact Us Text')} type="text" name="ContactUsHeadline" {...register('ContactUsHeadline')} />
                                    <input placeholder={i18next.t('Contact Us Body')} type="text" name="ContactUsBody" {...register('ContactUsBody')} />
                                    <input placeholder={i18next.t('Contact Us Button Text')} type="text" name="ContactUsBtnText" {...register('ContactUsBtnText')} />
                                    <input type="file" name="ContactUsImg" {...register('ContactUsImg')} />
                                </div>
                            </div>
                            <div className="WebsiteSection">
                                <span>{i18next.t('Contact Info Section')}</span>
                                <div className="NavbarSection">
                                    <input placeholder={i18next.t('Contact Info Text')} type="text" name="ContactInfoHeadline" {...register('ContactInfoHeadline')} />
                                    <input placeholder={i18next.t('Contact Info Body')} type="text" name="ContactInfoBody" {...register('ContactInfoBody')} />
                                    <input placeholder={i18next.t('Contant Info Button Text')} type="text" name="ContactInfoBtnText" {...register('ContactInfoBtnText')} />
                                    <input type="file" name="ContactInfoImg" {...register('ContactInfoImg')} />
                                </div>
                            </div>
                            <div className="WebsiteSection">
                                <span>{i18next.t('Overview Section')}</span>
                                <div className="NavbarSection">
                                    <input placeholder={i18next.t('Overview Text')} type="text" name="OverviewHeadline" {...register('OverviewHeadline')} />
                                    <input placeholder={i18next.t('Overview Body')} type="text" name="OverviewBody" {...register('OverviewBody')} />
                                    <input placeholder={i18next.t('Overview Button Text')} type="text" name="OverviewBtnText" {...register('OverviewBtnText')} />
                                    <input type="file" name="OverviewImg" {...register('OverviewImg')} />
                                </div>
                            </div>
                            <div className="WebsiteSection">
                                <span>{i18next.t('Roadmap Section')}</span>
                                <div className="NavbarSection">
                                    <input placeholder={i18next.t('Roadmap Text')} type="text" name="RoadmapHeadline" {...register('RoadmapHeadline')} />
                                    <input placeholder={i18next.t('Roadmap Body')} type="text" name="RoadmapBody" {...register('RoadmapBody')} />
                                    <input placeholder={i18next.t('Roadmap Button Text')} type="text" name="RoadmapBtnText" {...register('RoadmapBtnText')} />
                                    <input type="file" name="RoadmapImg" {...register('RoadmapImg')} />
                                </div>
                            </div>
                            <div className="WebsiteSection">
                                <span>{i18next.t('Whitepaper Section')}</span>
                                <div className="NavbarSection">
                                    <input placeholder={i18next.t('Whitepaper Text')} type="text" name="WhitePaperHeadline" {...register('WhitePaperHeadline')} />
                                    <input placeholder={i18next.t('Whitepaper Body')} type="text" name="WhitePaperBody" {...register('WhitePaperBody')} />
                                    <input placeholder={i18next.t('Whitepaper Button Text')} type="text" name="WhitePaperBtnText" {...register('WhitePaperBtnText')} />
                                    <input type="file" name="WhitePaperImg" {...register('WhitePaperImg')} />
                                </div>
                            </div>
                        </div>
                        <div className='PersonalDetailsBtn'>
                            {/* <button onClick={handleNext}>Next</button> */}
                            <button type="button" onClick={() => props.handlePrev()}>{i18next.t('Return')}</button>
                            <button type="submit">{i18next.t("Submit")}</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};


export default Step3;