import React from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';


// List of countries with flags and codes
const countryOptions = [
    { value: '+91', label: '🇮🇳 +91' },
    { value: '+52', label: '🇲🇽 +52' },
    { value: '+1', label: '🇺🇸 +1' },
    { value: '+44', label: '🇬🇧 +44' },
    { value: '+81', label: '🇯🇵 +81' },
    // Add more countries as needed
];



function ContactForm() {
    // Initialize the form methods using React Hook Form
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Function to handle form submission
    const onSubmit = (data) => {
        console.log(data); // You can replace this with your desired submission logic
    };

    return (
        <div className="w-full h-fit  bg-[#F7F3E8] pt-[100px] ">
            {/* <div className="min-w-[1440px] h-[856px] py-[135px] px-[225px] gap-[7.5px]"> */}
            <div className="min-w-[1440px] pt-[135px]  px-[225px] gap-[7.5px] flex flex-col items-center justify-center ">
                <div className="w-[990px] h-[115px] gap-y-[30px] ">
                    <h3 className="w-[990px] h-[46px] font-ESDokument text-[42px] leading-[45.78px] tracking-8 text-center uppercase">
                        Book your Private Meeting
                    </h3>
                    <h3 className="w-[990px] h-[39px] font-ESDokument text-[36px] leading-[39.24px] tracking-5 text-center uppercase">
                        Prices starting from AED 43,000,000
                    </h3>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="w-[814px] h-[463.5px] pt-[30px] gap-y-[33px] ">
                    <div className="w-full h-[78px] gap-x-[30px] flex flex-row items-center my-5 ">
                        <input
                            {...register('firstName', { required: true })}
                            className="w-[392px] h-[40px] px-[12px] py-[5.25px] gap-[7.5px] border-b-[0.75px] border-[#434E1B] pl-3 bg-transparent outline-none text-[#3C4617] font-Spezia"
                            type="text"
                            placeholder="*First Name"
                        />
                        {errors.firstName && <span className="text-red-500">First Name is required</span>}
                        <input
                            {...register('lastName', { required: true })}
                            className="w-[392px] h-[40px] px-[12px] py-[5.25px] gap-[7.5px] border-b-[0.75px] border-[#434E1B] pl-3 bg-transparent outline-none text-[#3C4617] font-Spezia"
                            type="text"
                            placeholder="*Last Name"
                        />
                        {errors.lastName && <span className="text-red-500">Last Name is required</span>}
                    </div>

                    <div className="w-full h-[40.5px] gap-x-[30px] flex flex-row items-center my-5">
                        <input
                            {...register('email', { required: true })}
                            className="w-[814px] h-[40.5px] px-[12px] py-[5.25px] gap-[7.5px] border-b-[0.75px] border-[#434E1B] pl-3 bg-transparent outline-none text-[#3C4617] font-Spezia"
                            type="text"
                            placeholder="*Email"
                        />
                        {errors.email && <span className="text-red-500">Email is required</span>}
                    </div>

                    <div className="w-full h-[40.5px] gap-x-[30px] flex flex-row items-center my-5">
                        {/* <select
                                {...register('countryCode')}
                                className="w-[97.5px] h-[40px] px-[12px] py-[5.25px] gap-[7.5px] border-b-[0.75px] border-[#434E1B] pl-3 bg-transparent outline-none text-[#3C4617] font-Spezia"
                            >
                                <option value="+91">+91</option>
                                <option value="+52">+52</option>
                            </select> */}

                        <Select
                            options={countryOptions}
                            className="w-[97.5px] h-[40px] px-[12px] py-[5.25px] gap-[7.5px] border-b-[0.75px] border-[#434E1B] pl-3 bg-transparent outline-none text-[#3C4617] font-Spezia"
                            onChange={(selectedOption) => setValue('countryCode', selectedOption.value)}
                            placeholder="+91"
                        />

                        <input
                            {...register('phoneNumber', { required: true })}
                            className="w-[686.5px] h-[40.5px] px-[12px] py-[5.25px] gap-[7.5px] border-b-[0.75px] border-[#434E1B] pl-3 bg-transparent outline-none text-[#3C4617] font-Spezia"
                            type="number"
                            placeholder="Your Phone Number"
                        />
                        {errors.phoneNumber && <span className="text-red-500">Phone Number is required</span>}
                    </div>

                    <div className="w-full h-[40.5px] gap-x-[30px] flex flex-row items-center my-5">
                        <select
                            {...register('contactMethod')}
                            className="w-full h-[40.5px] px-[12px] py-[5.25px] gap-[7.5px] border-b-[0.75px] border-[#434E1B] pl-3 bg-transparent outline-none text-[#3C4617] font-Spezia"
                        >
                            <option value="">Preferred Language</option>
                            <option value="email">Email</option>
                            <option value="phone">Phone</option>
                        </select>

                        <select
                            {...register('contactMethod')}
                            className="w-full h-[40.5px] px-[12px] py-[5.25px] gap-[7.5px] border-b-[0.75px] border-[#434E1B] pl-3 bg-transparent outline-none text-[#3C4617] font-Spezia"
                        >
                            <option value="">Nationality</option>
                            <option value="email">Email</option>
                            <option value="phone">Phone</option>
                        </select>
                    </div>


                    <div className="w-full h-[40.5px] gap-x-[30px] flex flex-row items-center my-5">
                        <select
                            {...register('contactMethod')}
                            className="w-full h-[40.5px] px-[12px] py-[5.25px] gap-[7.5px] border-b-[0.75px] border-[#434E1B] pl-3 bg-transparent outline-none text-[#3C4617] font-Spezia"
                        >
                            <option value="">Preferred Method of Contact</option>
                            <option value="email">Email</option>
                            <option value="phone">Phone</option>
                        </select>
                    </div>

                    <div className="w-full h-[40.5px] gap-x-[30px] flex flex-row items-center justify-center my-5">
                        <button
                            type="submit"
                            className="w-[283px] h-[34.5px] gap-[7.5px] px-[12px] py-[5.25px] border-b-[0.75px] border-[#434E1B] bg-[#AB8456] text-[#F7F3E8] uppercase font-Spezia"
                        >
                            Register Interest
                        </button>
                    </div>
                </form>
            </div>
            {/* </div> */}
        </div>
    );
}

export default ContactForm;
