import { useState } from 'react';

// Administrative card design - defined outside to prevent re-creation on each render
const AdministrativeCard = ({ dept }) => (
    <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">👨‍💼</span>
        </div>
        <h3 className="font-bold mb-2">{dept.name}</h3>
        <p className="text-sm mb-2">{dept.person}</p>
        <p className="text-sm text-green-600 font-medium mb-1">{dept.phone}</p>
        <p className="text-sm text-blue-600">{dept.email}</p>
    </div>
);

// Form input design - defined outside to prevent re-creation on each render
const FormInput = ({ label, type, name, value, required, placeholder, options, onChange }) => (
    <div>
        <label className="block text-[0.92rem] font-semibold mb-2">
            {label} <span className='text-red-600'>{required && '*'}</span>
        </label>
        {type === 'select' ? (
            <select
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            >
                <option value="">{placeholder}</option>
                {options?.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        ) : type === 'textarea' ? (
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                placeholder={placeholder}
            />
        ) : (
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                placeholder={placeholder}
            />
        )}
    </div>
);

// Static data - defined outside component
const departments = [
    {
        name: "প্রধান শিক্ষক",
        person: "মোঃ হাসান আলী মোল্লা",
        phone: "০১৭১৪-৬৭৪৩২৭",
        email: "mhskhoksa1999@gmail.com",
    },
    {
        name: "সহকারী প্রধান শিক্ষক",
        person: "মোঃ রেজাউল করিম",
        phone: "০১৭২৭-২১৬১৭২",
        email: "mhskhoksa1999@gmail.com",
    },
    {
        name: "সহকারী শিক্ষক (কম্পিউটার)",
        person: "মোছা মেরিনা আক্তার",
        phone: "০১৭১০-২৪১৮২৮",
        email: "mhskhoksa1999@gmail.com",
    },
    {
        name: "অফিস সহায়ক",
        person: "মোঃ সাইফুল ইসলাম",
        phone: "০১৯২৮-২৪৩৩৭১",
        email: "mhskhoksa1999@gmail.com",
    },
    {
        name: "নিরাপত্তাকর্মী",
        person: "মোঃ নূর আলম",
        phone: "০১৯১৭-৫৮২১৬৫",
        email: "mhskhoksa1999@gmail.com",
    },
];

const schoolInfo = {
    name: 'মোড়াগাছা মাধ্যমিক বিদ্যালয়',
    address: 'মোড়াগাছা, খোকসা, কুষ্টিয়া-৭০২০',
    officehours: 'রবিবার-বৃহস্পতিবার: সকাল ৯টা - বিকাল ৪টা',
    phone: '০১৩০৯-১১৭৬৩৯',
    email: 'mhskhoksa1999@gmail.com',
    website: 'www.moragachass.edu.bd'
};

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    return (
      <div className="max-w-11/12 w-full mx-auto pb-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">যোগাযোগ</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
          {departments.map((dept, index) => (
            <AdministrativeCard key={index} dept={dept} />
          ))}
        </div>

        {/* Map and Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="bg-white border border-[#013223] rounded-xl shadow-md p-6 space-y-4">
            <h3 className="text-2xl font-semibold text-[#013223] mb-4">
              {schoolInfo.name}
            </h3>

            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-semibold text-[#013223]">📍 ঠিকানা:</span>{" "}
                {schoolInfo.address}
              </p>
              <p>
                <span className="font-semibold text-[#013223]">
                  ⏰ অফিস সময়:
                </span>{" "}
                {schoolInfo.officehours}
              </p>
              <p>
                <span className="font-semibold text-[#013223]">📞 ফোন:</span>{" "}
                {schoolInfo.phone}
              </p>
              <p>
                <span className="font-semibold text-[#013223]">✉ ইমেইল:</span>{" "}
                {schoolInfo.email}
              </p>
              <p>
                <span className="font-semibold text-[#013223]">
                  🌐 ওয়েবসাইট:
                </span>{" "}
                {schoolInfo.website}
              </p>
            </div>

            {/* Google Map */}
            <div className="w-full h-75 rounded-lg overflow-hidden border border-gray-300 shadow-lg">
              <iframe
                title="school-location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.8893535354223!2d89.26056157589865!3d23.822533286002148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe8d74a29549f3%3A0xf746297bf3ed0122!2z4Kau4KeL4Kec4Ka-4KaX4Ka-4Kab4Ka-IOCmruCmvuCmp-CnjeCmr-CmruCmv-CmlSDgpqzgpr_gpqbgp43gpq_gpr7gprLgp58!5e0!3m2!1sen!2sbd!4v1768226999040!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-md p-6 border">
            <h2 className="text-2xl font-bold mb-6">আমাদেরকে মেসেজ পাঠান</h2>

            <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput
                  label="নাম"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required={true}
                  placeholder="আপনার নাম লিখুন"
                />
                <FormInput
                  label="ইমেইল ঠিকানা"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required={true}
                  placeholder="আপনার ইমেইল ঠিকানা লিখুন"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput
                  label="ফোন নম্বর"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required={false}
                  placeholder="আপনার ফোন নম্বর লিখুন"
                />
                <FormInput
                  label="বিষয়"
                  type="select"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required={true}
                  placeholder="বিষয় নির্বাচন করুন"
                  options={[
                    { value: "admission", label: "ভর্তি সংক্রান্ত" },
                    { value: "academic", label: "শিক্ষা সংক্রান্ত তথ্য" },
                    { value: "feedback", label: "প্রতিক্রিয়া" },
                    { value: "complaint", label: "অভিযোগ" },
                    { value: "other", label: "অন্যান্য" },
                  ]}
                />
              </div>

              <FormInput
                label="মেসেজ"
                type="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required={true}
                placeholder="আপনার মেসেজ এখানে লিখুন..."
              />

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                বার্তা পাঠান
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Contact;
