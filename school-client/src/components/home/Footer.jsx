// ⚠️🚨 Here are 2 footer designs, you can use whichever you like.


const Footer = () => {
    return (
        <footer className="bg-[#013223] text-white">
            <div className="max-w-7xl mx-auto px-4 py-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* School Basic Info */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold mb-2">Moragacha Secondary School</h3>
                        <p className="text-gray-300 text-sm">
                            EIIN No: 117639<br />
                            Moragacha, Khoksa, Kushtia-7020
                        </p>
                    </div>

                    {/* Useful Links */}
                    <div className="text-center">
                        <h4 className="font-semibold mb-3">Quick Links</h4>
                        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
                            <a href="#" className="hover:text-white">Home</a>
                            <a href="#" className="hover:text-white">About</a>
                            <a href="#" className="hover:text-white">Academics</a>
                            <a href="#" className="hover:text-white">Contact</a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="text-center md:text-right">
                        <h4 className="font-semibold mb-3">Contact Us</h4>
                        <p className="text-gray-300 text-sm">
                            Phone: +880 XXXX-XXXXXX<br />
                            Email: info@moragacha.edu.bd
                        </p>
                    </div>
                </div>

                {/* Bottom Bar or Copyright */}
                <div className="border-t border-gray-700 mt-8 pt-6 text-center">
                    <p className="text-sm">
                        © {new Date().getFullYear()} Moragacha Secondary School. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;






// // 🔴 Another design
// const Footer = () => {
//     return (
//         <footer className="bg-[#013223] text-white py-10 mt-10">
//             <div className="max-w-11/12 w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

//                 {/* School Info */}
//                 <div>
//                     <h2 className="text-xl font-bold">Moragacha Secondary School</h2>
//                     <p className="mt-2 text-gray-200">
//                         EIIN No: <span className="font-semibold">117639</span>
//                     </p>
//                     <p className="mt-1 text-gray-200">
//                         Address: Moragacha, Khoksa, Kushtia-7020
//                     </p>
//                 </div>

//                 {/* Important Links */}
//                 <div>
//                     <h3 className="text-lg font-semibold mb-3">Important Links</h3>
//                     <ul className="space-y-2 text-gray-200">
//                         <li><a href="https://dhakaeducationboard.gov.bd" target="_blank" className="hover:text-gray-400">Education Board Bangladesh</a></li>
//                         <li><a href="https://www.moedu.gov.bd" target="_blank" className="hover:text-gray-400">Ministry of Education</a></li>
//                         <li><a href="https://www.teachers.gov.bd" target="_blank" className="hover:text-gray-400">Teacher Portal</a></li>
//                     </ul>
//                 </div>

//                 {/* Contact Section */}
//                 <div>
//                     <h3 className="text-lg font-semibold mb-3">Contact</h3>
//                     <p className="text-gray-200">📞 +880 1234-567890</p>
//                     <p className="text-gray-200">✉ moragacha.school@gmail.com</p>
//                 </div>
//             </div>

//             {/* Bottom Bar or Copyright */}
//             <div className="text-center text-gray-300 text-sm mt-10 border-t border-gray-600 pt-4">
//                 © {new Date().getFullYear()} Moragacha Secondary School — All Rights Reserved.
//             </div>
//         </footer>
//     );
// };

// export default Footer;
