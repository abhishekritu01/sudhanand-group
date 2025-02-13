import React from 'react';

const footerNavigation = {
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
  contact: [
    { name: 'Email: info@company.com', href: 'mailto:info@company.com' },
    { name: 'Phone: +1 234 567 890', href: 'tel:+1234567890' },
  ],
};

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center border-b border-gray-700 pb-6">
          <img
            alt="Company logo"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
            className="h-9"
          />
          <div className="text-sm text-gray-400">
            <ul className="space-y-2">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-white">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center text-sm text-gray-400">
          <div>
            <p>&copy; 2025 Company Name. All rights reserved.</p>
          </div>
          <div className="space-x-4">
            {footerNavigation.contact.map((item) => (
              <a key={item.name} href={item.href} className="hover:text-white">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
