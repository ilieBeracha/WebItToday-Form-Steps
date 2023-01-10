import { useForm } from 'react-hook-form';
import i18next from 'i18next';
import { useEffect } from 'react';

function Step1(props) {
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])


    function getPersonal(Det) {
        console.log(Det)
        props.handleNext()
    }

    return (
        <div className='formStyle PersonalDetailsStep1'>
            <div className='StepHeaderDiv'>
                <h2>{i18next.t("Personal Details")}</h2>
            </div>
            <form action="" onSubmit={handleSubmit(getPersonal)}>
                {/* <div className='FormInputs'> */}
                <div className='FormPart1'>
                    <div className='UsernameAvailbale'>
                        <label  htmlFor="Username">{i18next.t("Username")}</label>
                        <input id='usernameLabel' type="text" {...register('Username')} />
                    </div>
                    <label htmlFor="FirstName">{i18next.t('First Name')}</label>
                    <input name='FirstName' type="text" {...register('FirstName')} />
                    <label htmlFor="LastName">{i18next.t('Last Name')}</label>
                    <input name='LastName' type="text" {...register('LastName')} />
                    <label htmlFor="Phone">{i18next.t('Phone')}</label>
                    <input name='Phone' type="tel" {...register('Phone')} />
                    <label htmlFor="Email">{i18next.t('Email')}</label>
                    <input name='Email' type="email" {...register('Email')} />
                    {/* </div> */}
                    {/* <div className='FormPart2'> */}
                    <label htmlFor="Address">{i18next.t('Address')}</label>
                    <input name='Address' type="text" {...register('Address')} />
                    <label htmlFor="City">{i18next.t('City')}</label>
                    <input name='City' type="text" {...register('City')} />
                    <label htmlFor="Zipcode">{i18next.t('Zipcode')}</label>
                    <input name='Zipcode' type="number" {...register('Zipcode')} />
                    <label htmlFor="Country">{i18next.t('Country')}</label>
                    <input name='Country' type="text" {...register('Country')} />
                </div>
                {/* </div> */}
                <div className='PersonalDetailsBtn'>
                    <button type='submit'>{i18next.t('Next')}</button>
                </div>
            </form>
        </div>
    );
}

export default Step1;