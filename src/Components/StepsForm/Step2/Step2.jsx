import { useForm } from "react-hook-form";
import i18next from 'i18next';
import { useEffect } from "react";

function Step2(props) {
    const { register, handleSubmit } = useForm();

    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    },[])
    function getBusiness(business) {

        const BusinessJson = {
            "BusinessName": business.BusinessName,
            "BusinessDiscription": business.BusinessDiscription,
            "BusinessPhone": business.BusinessPhone,
            "BusinessEmail": business.BusinessEmail,
            "Website": business.Website,
            "Occupation": business.Occupation,
            "OpeneingHours": [
                { "Day": "sunday", "From": business.SundayFrom, "To": business.SundayTo },
                { "Day": "monday", "From": business.MondayFrom, "To": business.MondayTo },
                { "Day": "sunday", "From": business.TuesdayFrom, "To": business.TuesdayTo },
                { "Day": "monday", "From": business.WednesdayFrom, "To": business.WednesdayTo },
                { "Day": "sunday", "From": business.ThursdayFrom, "To": business.ThursdayTo },
                { "Day": "monday", "From": business.FridayFrom, "To": business.FridayTo },
                { "Day": "monday", "From": business.SaturdayFrom, "To": business.SaturdayTo },
            ]

        }
        console.log(BusinessJson)
        props.handleNext()
    }


    return (
        <div className='formStyle BusinessDetailsStep2'>
            <div className='StepHeaderDiv'>
                <h2>{i18next.t('Business Details')}</h2>
            </div>
            <form onSubmit={handleSubmit(getBusiness)}>
                {/* <div className='FormInputs'> */}
                    <div className='FormPart1'>
                        <label htmlFor="BusinessName">{i18next.t('Business Name')}</label>
                        <input name='BusinessName' type="text" {...register('BusinessName')} />
                        <label htmlFor="BusinessDiscription">{i18next.t('Business Discription')}</label>
                        <input name='BusinessDiscription' type="text" {...register('BusinessDiscription')} />
                        <label htmlFor="BusinessPhone">{i18next.t('Business Phone')}</label>
                        <input name='BusinessPhone' type="tel" {...register('BusinessPhone')} />
                        <label htmlFor="BusinessEmail">{i18next.t('Business Email')}</label>
                        <input name='BusinessEmail' type="email" {...register('BusinessEmail')} />
                        <label htmlFor="Website">{i18next.t('Website')}</label>
                        <input name='Website' type="text" {...register('Website')} />
                        <label htmlFor="Occupation">{i18next.t('Occupation')}</label>
                        <input name='Occupation' type="text" {...register('Occupation')} />
                        <p id='openingHoursP'>{i18next.t('Opening Hours')}</p>
                    </div>
                    <div className='OpeningHoursInputs'>
                        <div className='openingHourRow'>
                            <div className='OpeningHoursDayDiv'>
                                <label htmlFor="Sunday">{i18next.t('Sunday')}</label>
                            </div>
                            <label htmlFor='SundayFrom'>{i18next.t('From')}</label>
                            <input type="time" id="SundayFrom" name="SundayFrom" {...register('SundayFrom')} />
                            <label htmlFor='SundayTo'>{i18next.t('To')}</label>
                            <input type="time" id="SundayTo" name="SundayTo" {...register('SundayTo')} />
                        </div>
                        <div className='openingHourRow'>
                            <div className='OpeningHoursDayDiv'>
                                <label htmlFor="Monday">{i18next.t('Monday')}</label>
                            </div>
                            <label htmlFor='MondayFrom'>{i18next.t('From')}</label>
                            <input type="time" id="MondayFrom" name="MondayFrom" {...register('MondayFrom')} />
                            <label htmlFor='MondayTo'>{i18next.t('To')}</label>
                            <input type="time" id="MondayTo" name="MondayTo" {...register('MondayTo')} />
                        </div>
                        <div className='openingHourRow'>
                            <div className='OpeningHoursDayDiv'>
                                <label htmlFor="Tuesday">{i18next.t('Tuesday')}</label>
                            </div>
                            <label>{i18next.t('From')}</label>
                            <input type="time" name='TuesdayFrom' {...register('TuesdayFrom')} />
                            <label>{i18next.t('To')}</label>
                            <input type="time" name='TuesdayTo' {...register('TuesdayTo')} />
                        </div>
                        <div className='openingHourRow'>
                            <div className='OpeningHoursDayDiv'>
                                <label htmlFor="Wednesday">{i18next.t('Wednesday')}</label>
                            </div>
                            <label>{i18next.t('From')}</label>
                            <input type="time" name='WednesdayFrom' {...register('WednesdayFrom')} />
                            <label>{i18next.t('To')}</label>
                            <input type="time" name='WednesdayTo' {...register('WednesdayTo')} />
                        </div>
                        <div className='openingHourRow'>
                            <div className='OpeningHoursDayDiv'>
                                <label htmlFor="Thursday">{i18next.t('Thursday')}</label>
                            </div>
                            <label>{i18next.t('From')}</label>
                            <input type="time" name='ThursdayFrom' {...register('ThursdayFrom')} />
                            <label>{i18next.t('To')}</label>
                            <input type="time" name='ThursdayTo' {...register('ThursdayTo')} />
                        </div>
                        <div className='openingHourRow'>
                            <div className='OpeningHoursDayDiv'>
                                <label htmlFor="Friday">{i18next.t('Friday')}</label>
                            </div>
                            <label>{i18next.t('From')}</label>
                            <input type="time" name='FridayFrom' {...register('FridayFrom')} />
                            <label>{i18next.t('To')}</label>
                            <input type="time" name='FridayTo' {...register('FridayTo')} />
                        </div>
                        <div className='openingHourRow'>
                            <div className='OpeningHoursDayDiv'>
                                <label htmlFor="Saturday">{i18next.t('Saturday')}</label>
                            </div>
                            <label>{i18next.t('From')}</label>
                            <input type="time" name='SaturdayFrom' {...register('SaturdayFrom')} />
                            <label>{i18next.t('To')}</label>
                            <input type="time" name='SaturdayTo' {...register('SaturdayTo')} />
                        </div>
                    </div>
                {/* </div> */}
                <div className='PersonalDetailsBtn'>
                    <button onClick={() => props.handlePrev()}>{i18next.t('Return')}</button>
                    <button type="Submit">{i18next.t('Next')}</button>
                </div>
            </form>
        </div>
    );
};

export default Step2;