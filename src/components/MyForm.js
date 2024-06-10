'use client';
import React from "react";
import  { useForm }  from "react-hook-form";

const MyForm = () => {
    const { register, handleSubmit , formState: { errors }} = useForm();
    const onSubmit = data => console.log(data);
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="example">Example</label>
          <input id="example" {...register("example", { required: true })} />
          {errors.example && <span>This field is required</span>}
        </div>
        <input type="submit" />
      </form>
    );
  };
  
  export default MyForm;