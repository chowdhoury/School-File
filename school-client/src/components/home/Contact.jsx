import { useState } from 'react';

const Contact = () => {
    // Form related
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

    // Administrative card related
    const departments = [
        {
            name: 'Admission Office',
            person: 'Mr. Abdul Karim',
            phone: '+880 XXXX-XXXXXX',
            email: 'admission@moragacha.edu.bd'
        },
        {
            name: 'Academic Affairs',
            person: 'Mrs. Fatema Begum',
            phone: '+880 XXXX-XXXXXX',
            email: 'academic@moragacha.edu.bd'
        },
        {
            name: 'Student Services',
            person: 'Mr. Rahim Ahmed',
            phone: '+880 XXXX-XXXXXX',
            email: 'students@moragacha.edu.bd'
        },
        {
            name: 'Accounts & Finance',
            person: 'Ms. Sabina Yasmin',
            phone: '+880 XXXX-XXXXXX',
            email: 'accounts@moragacha.edu.bd'
        },
        {
            name: 'Emergency Contact 🚨',
            person: 'Md. Lotif Talukdar',
            phone: '+880 XXXX-XXXXXX',
            email: 'accounts@talukdar.edu.bd'
        }
    ];

    // Instituted Info related
    const schoolInfo = {
        name: 'Moragacha Secondary School',
        address: 'Moragacha, Gazipur, Dhaka, Bangladesh',
        officehours: 'Saturday-Thursday: 9:00 AM - 5:00 PM',
        phone: '+880 1234-567890',
        email: 'moragacha.school@gmail.com',
        website: 'www.moragachasecondary.edu.bd'
    };

    // Administrative card design
    const AdministrativeCard = ({ dept, index }) => (
        <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍💼</span>
            </div>
            <h3 className="font-bold mb-2">{dept.name}</h3>
            <p className="text-sm mb-2">{dept.person}</p>
            <p className="text-sm text-green-600 font-medium mb-1">{dept.phone}</p>
            <p className="text-sm text-blue-600">{dept.email}</p>
        </div>
    );

    // Form design
    const FormInput = ({ label, type, name, value, required, placeholder, options }) => (
        <div>
            <label className="block text-sm font-medium mb-2">
                {label} {required && '*'}
            </label>
            {type === 'select' ? (
                <select
                    name={name}
                    value={value}
                    onChange={handleChange}
                    required={required}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                >
                    <option value="">{placeholder}</option>
                    {options?.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    required={required}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder={placeholder}
                />
            )}
        </div>
    );

    return (
        <div className="max-w-11/12 w-full mx-auto pb-10">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-2xl md:text-3xl font-bold">Contact Us</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
                {departments.map((dept, index) => (
                    <AdministrativeCard key={index} dept={dept} index={index} />
                ))}
            </div>

            {/* Map and Form Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Map Section */}
                <div className="bg-white border border-[#013223] rounded-xl shadow-md p-6 space-y-4">
                    <h3 className="text-2xl font-semibold text-[#013223] mb-4">{schoolInfo.name}</h3>

                    <div className="space-y-2 text-gray-700">
                        <p><span className="font-semibold text-[#013223]">📍 Address:</span> {schoolInfo.address}</p>
                        <p><span className="font-semibold text-[#013223]">⏰ Office Hours:</span> {schoolInfo.officehours}</p>
                        <p><span className="font-semibold text-[#013223]">📞 Phone:</span> {schoolInfo.phone}</p>
                        <p><span className="font-semibold text-[#013223]">✉ Email:</span> {schoolInfo.email}</p>
                        <p><span className="font-semibold text-[#013223]">🌐 Website:</span> {schoolInfo.website}</p>
                    </div>

                    {/* Google Map */}
                    <div className="w-full h-56 rounded-lg overflow-hidden border border-gray-300 shadow-lg">
                        <iframe
                            title="school-location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.00828238102!2d90.41251877594135!3d23.81033247873302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ4JzM3LjIiTiA5MMKwMjQnNTIuOSJF!5e0!3m2!1sen!2sbd!4v1700000000000"
                            width="100%" height="100%" allowFullScreen loading="lazy"
                        ></iframe>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-2xl shadow-md p-6 border">
                    <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

                    <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormInput
                                label="Full Name"
                                type="text"
                                name="name"
                                value={formData.name}
                                required={true}
                                placeholder="Enter your full name"
                            />
                            <FormInput
                                label="Email Address"
                                type="email"
                                name="email"
                                value={formData.email}
                                required={true}
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormInput
                                label="Phone Number"
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                required={false}
                                placeholder="Enter your phone number"
                            />
                            <FormInput
                                label="Subject"
                                type="select"
                                name="subject"
                                value={formData.subject}
                                required={true}
                                placeholder="Select a subject"
                                options={[
                                    { value: 'admission', label: 'Admission Inquiry' },
                                    { value: 'academic', label: 'Academic Information' },
                                    { value: 'feedback', label: 'Feedback' },
                                    { value: 'complaint', label: 'Complaint' },
                                    { value: 'other', label: 'Other' }
                                ]}
                            />
                        </div>

                        <FormInput
                            label="Message"
                            type="textarea"
                            name="message"
                            value={formData.message}
                            required={true}
                            placeholder="Type your message here..."
                        />

                        <button
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
