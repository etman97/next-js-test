"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { usePathname } from "next/navigation";

export default function ContactForm() {
  const [success, setSuccess] = useState("");
  const pathname = usePathname();
  const isEnglish = pathname.includes("/en");

  // ✅ النصوص حسب اللغة
  const t = {
    title: isEnglish ? "Contact Us" : "تواصل معنا",
    firstName: isEnglish ? "First Name" : "الاسم الأول",
    lastName: isEnglish ? "Last Name" : "اسم العائلة",
    phone: isEnglish ? "Phone Number" : "رقم الهاتف",
    email: isEnglish ? "Email" : "البريد الإلكتروني",
    selectService: isEnglish ? "Select a Service" : "اختر الخدمة المطلوبة",
    service1: isEnglish
      ? "Heavy Equipment Service"
      : "خدمة المعدات الثقيلة",
    service2: isEnglish
      ? "Maintenance and Support"
      : "خدمة الصيانة والدعم",
    service3: isEnglish
      ? "Technical Consultation"
      : "خدمة الاستشارات الفنية",
    service4: isEnglish
      ? "Long-Term Rental"
      : "خدمة التأجير طويل الأمد",
    service5: isEnglish
      ? "After-Sales Services"
      : "خدمات ما بعد البيع",
    message: isEnglish ? "Write your message here..." : "اكتب رسالتك هنا...",
    send: isEnglish ? "Send Message" : "إرسال الرسالة",
    sending: isEnglish ? "Sending..." : "جاري الإرسال...",
    success: isEnglish
      ? "Message sent successfully"
      : "تم إرسال الرسالة بنجاح",
    error: isEnglish
      ? "An error occurred while sending the message"
      : "حدث خطأ أثناء إرسال الرسالة",
  };

  const ContactSchema = Yup.object().shape({
    firstname: Yup.string().required(
      isEnglish ? "First name is required" : "الاسم الأول مطلوب"
    ),
    lastname: Yup.string().required(
      isEnglish ? "Last name is required" : "اسم العائلة مطلوب"
    ),
    email: Yup.string()
      .email(isEnglish ? "Invalid email address" : "البريد الإلكتروني غير صالح")
      .required(isEnglish ? "Email is required" : "البريد الإلكتروني مطلوب"),
    phone: Yup.string().required(
      isEnglish ? "Phone number is required" : "رقم الهاتف مطلوب"
    ),
    option: Yup.string().required(
      isEnglish ? "Please select a service" : "الرجاء اختيار أحد الخيارات"
    ),
    message: Yup.string().required(
      isEnglish ? "Message is required" : "الرسالة مطلوبة"
    ),
  });

  return (
    <div className="w-full shadow-lg rounded-lg p-4 bg-gray-100/50">
      <h2
        className={`text-lg font-semibold mb-3 ${
          isEnglish ? "text-left" : "text-right"
        }`}
      >
        {t.title}
      </h2>

      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          option: "",
          message: "",
        }}
        validationSchema={ContactSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            const formData = new FormData();
            Object.entries(values).forEach(([key, value]) => {
              if (value) formData.append(key, value);
            });

            await axios.post("/api/contact", formData, {
              headers: { "Content-Type": "multipart/form-data" },
            });

            setSuccess(t.success);
            resetForm();
          } catch (error) {
            console.error(error);
            setSuccess(t.error);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form
            className={`flex flex-col gap-3 ${
              isEnglish ? "text-left" : "text-right"
            }`}
          >
            <div className="flex gap-3">
              <div className="flex-1">
                <Field
                  name="firstname"
                  placeholder={t.firstName}
                  className="w-full border bg-white border-gray-300 p-2 rounded text-sm focus:outline-none focus:border-[#a87a44]"
                />
                <ErrorMessage
                  name="firstname"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="flex-1">
                <Field
                  name="lastname"
                  placeholder={t.lastName}
                  className="w-full border bg-white border-gray-300 p-2 rounded text-sm focus:outline-none focus:border-[#a87a44]"
                />
                <ErrorMessage
                  name="lastname"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-1">
                <Field
                  name="phone"
                  placeholder={t.phone}
                  className="w-full border bg-white border-gray-300 p-2 rounded text-sm focus:outline-none focus:border-[#a87a44]"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="flex-1">
                <Field
                  name="email"
                  type="email"
                  placeholder={t.email}
                  className="w-full border bg-white border-gray-300 p-2 rounded text-sm focus:outline-none focus:border-[#a87a44]"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
            </div>

            <div>
              <Field
                as="select"
                name="option"
                className="w-full border bg-white border-gray-300 p-2 rounded text-sm focus:outline-none focus:border-[#a87a44]"
              >
                <option value="">{t.selectService}</option>
                <option value="service1">{t.service1}</option>
                <option value="service2">{t.service2}</option>
                <option value="service3">{t.service3}</option>
                <option value="service4">{t.service4}</option>
                <option value="service5">{t.service5}</option>
              </Field>
              <ErrorMessage
                name="option"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div>
              <Field
                as="textarea"
                name="message"
                placeholder={t.message}
                className="w-full border bg-white border-gray-300 p-2 rounded text-sm focus:outline-none focus:border-[#a87a44] h-20 resize-none"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#a87a44] text-white py-2 rounded hover:bg-amber-700 transition duration-300 font-medium text-sm"
            >
              {isSubmitting ? t.sending : t.send}
            </button>

            {success && (
              <p
                className={`text-center mt-1 text-xs ${
                  success.includes("نجاح") || success.includes("success")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {success}
              </p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
