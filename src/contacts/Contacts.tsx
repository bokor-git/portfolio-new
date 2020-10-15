import React from 'react';
import style from "./Contacts.module.scss"
import styleContainer from "../common/styles/Container.module.css"
import {LineWhite} from "../common/components/LineWhite";
import {Formik} from "formik";
// @ts-ignore
import Fade from "react-reveal/Fade";
// @ts-ignore
import Pulse from 'react-reveal/Pulse';
// @ts-ignore
import Zoom from 'react-reveal/Zoom';
import contact from  "../common/icons/contact.svg"

const Contacts = () => {
    return <div className={style.contactsBlock}>
        {console.log(  "Contacts render")}
        <img src={contact} alt=""/>
        <div className={`${styleContainer.container} ${style.contactsContainer}`}>
            <Fade delay={500} duration={1000} distance={"30%"} left>
                <h2 className={style.title}>CONTACT</h2>
            </Fade>
            <Fade delay={1000} duration={1000} distance={"70%"} right>
                <LineWhite/>
            </Fade>
            <Fade delay={1000} duration={900} distance={"100%"} right>
                <div className={style.question}>Have a question or want to work together?</div>
            </Fade>
            <Zoom delay={1000} duration={500}>
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
                            <form className={style.formBlock} onSubmit={handleSubmit}>
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
                                <button type="submit" disabled={false} className={style.sendButton}>Send
                                </button>
                            </form>

                        )}
                    </Formik>
                </div>
            </Zoom>

        </div>

    </div>


}

export default Contacts