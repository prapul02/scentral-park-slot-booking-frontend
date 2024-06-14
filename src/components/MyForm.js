'use client';
import React from "react";
import { useForm,Controller  } from "react-hook-form";
import { useState } from "react";

import "../styles/form.css"

const MyForm = () => {
  const { register,control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  const [referenceFrom , setReferenceType]= useState()

  return (
    <div style={{ position: "absolute", marginTop: "3%", width: "90%" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Please fill this form to place a request for a slot. </h3>
        <div className={"form-fields-cont"}>
          <div>
            <label htmlFor="visitType">Were you the Primary Contact on a Prior Booking? Select from the dropdown below, pls</label>
            <select {...register("visitType", { required: true })}>
              <option value="registeredUser">Yes, I registered as the Primary Contact on a previous Booking</option>
              <option value="nonRegisteredUser">Yes, I have visited your park but with friends (Did not directly make a booking with you before)</option>
              <option value="firstTimeUser">No. I am visiting the park for the first time</option>
            </select>
            {errors.visitType && <span>This field is required</span>}
          </div>

          <div className="reference-cont">
            <div style={{ width: "50%" }}>
              <label htmlFor="reference">Where did you hear about Scentral Park?</label>
              <Controller
                name="reference"
                control={control}
                defaultValue=""
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                  <select
                    style={{ width: "50%" }}
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      setReferenceType(e.target.value)
                    }}
                  >
                    <option value="">Select an option</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Instagram Ad or Post">Instagram Ad or Post</option>
                    <option value="Facebook Ad or Post">Facebook Ad or Post</option>
                    <option value="WhatsApp Group or Forward">WhatsApp Group or Forward</option>
                    <option value="Word of Mouth Reviews from friends">Word of Mouth Reviews from friends</option>
                    <option value="Radio">Radio</option>
                    <option value="Podcast">Podcast</option>
                    <option value="Other">Other</option>
                  </select>
                )}
              />
              {referenceFrom === "Other" && <input {...register("otherReason")} className="other-reason" type="text" />}
              {errors.reference && <span>This field is required</span>}
            </div>
          </div>

          <p style ={{fontWeight:"bolder"}}>{"Primary Requester Details:"}</p>
          <div className="row">
            <div className="form-item">
              <label htmlFor="instagramId">Instagram Handles, pls :</label>
              <p className={"sub-label"}>(Do separate with 'commas' if more than 1)
                To share any dog videos we may have taken</p>
              <input placeholder=""{...register("instagramId")} className="instagram-id" type="text" />
            </div>


            <div className="form-item">
              <label className="form-item-label" htmlFor="address">Complete Address: </label>
              <input {...register("address")} className="address" type="text"/>
            </div>

            <div className="form-item">
              <label className="form-item-label" htmlFor="pincode">PIN Code of Residence</label>
              <input {...register("pincode")} className="pincode" type="text" />
            </div>

            <div className="form-item">
              <label htmlFor="fullName">First Name & Last Name of Requestor </label>
              <p className={"sub-label"}>Your Name with Surname, pls</p>
              <input placeholder=""{...register("fullName")} className="form-input" type="text" />
            </div>


            <div className="form-item">
              <label className="form-item-label" htmlFor="contactNumber">Contact Number / WhatsApp Number</label>
              <p className={"sub-label"}>This is how we will reach out to you, on a WhatsApp Call or a WhatsApp Message
              </p>
              <input {...register("contactNumber")} className="form-input" type="text" />
            </div>
          </div>

          <input className="submit-button" type="submit" />
        </div>

      </form>
    </div>
  );
};

export default MyForm;