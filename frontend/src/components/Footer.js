import React from "react";

const Contents = [
    { id: 1, name: 'Phone : +91 956784XXXX, Email:info@myapp.com', value: 'Connect With Us' },
    { id: 2, name: 'Coonet with us to deliver foods at your home', value: 'MENU APP' },
    { id: 3, name: 'First Floor Infopark,infopark EXPY, Kakkand', value: 'Find Us' },
  ]

const Footer = () => {
    return(
          <div className="bg-gray-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <dl className="grid grid-cols-1 gap-x-1 gap-y-10 text-center lg:grid-cols-3">
                {Contents.map((item) => (
                  <div key={item.id} className="mx-auto flex max-w-xs flex-col gap-y-4 border p-5 rounded-md">
                    <dt className="text-base/7 text-white">{item.name}</dt>
                    <dd className="order-first text-xl font-semibold tracking-tight text-blue-500 sm:text-1xl">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        )
      }

export default Footer;