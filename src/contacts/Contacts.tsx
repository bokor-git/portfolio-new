import React from 'react';
import style from "./Contacts.module.scss"
import styleContainer from "../common/styles/Container.module.css"
import {Line} from "../common/components/Line";
import {Formik} from "formik";


const Contacts = () => {
    return <div className={style.contactsBlock}>
        <div className={`${styleContainer.container} ${style.contactsContainer}`}>
            <h2 className={style.title}>Contacts</h2>
            <Line/>
            <div className={style.inputBlock}>
                <Formik
                    initialValues={{name: '', email: '', text: ""}}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                    validate={values => {
                        let errors: { name?: string, email?: string, text?: string } = {};
                        if (!values.name) {
                            errors.name = 'Name is Required';
                        } else if (!values.email) {
                            errors.email = 'Invalid email address';
                        } else if (!values.text) {
                            errors.text = 'Text is Required';
                        }
                        return errors;
                    }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                      }) => (
                        <form className={style.formBlock}  onSubmit={handleSubmit}>
                            <input placeholder={"Name"}
                                   className={style.formInput}
                                   type="text"
                                   name="name"
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.name}/>
                            {errors.name && touched.name && errors.name}
                            <input
                                placeholder={"Email"}
                                className={style.formInput}
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}
                            <textarea name="text"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.text} placeholder={"Enter your massage..."}
                                      className={style.formMessage}/>
                            {errors.text && touched.text && errors.text}
                            <button type="submit" disabled={false} className={style.sendButton}>Send</button>
                        </form>

                    )}
                </Formik>
            </div>
        </div>
    </div>


}

export default Contacts