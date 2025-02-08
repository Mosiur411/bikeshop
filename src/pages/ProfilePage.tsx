import { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { useGetOrderQuery } from "@/feature/order/orderSlice";
import { useGetProfileQuery } from "@/feature/user/userSlice";

interface UserData {
  name: string;
  email: string;
}

interface Order {
  id: string;
  date: string;
  status: string;
  total: number;
  items: Array<{
    id: string;
    title: string;
    quantity: number;
    price: number;
  }>;
}



export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [userData, setUserData] = useState<UserData | null>(null);
  const { data } = useGetOrderQuery()
  const { data:profile } = useGetProfileQuery()
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUserData(JSON.parse(user));
    }
  }, []);

  console.log('profile', profile)


  return (
    <div className="min-h-screen bg-gray-200 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Account</h1>

        <Tab.Group selectedIndex={activeTab} onChange={setActiveTab}>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 mb-8">
            <Tab
              className={({ selected }) =>
                `w-full rounded-lg py-2.5 text-sm font-medium leading-5
                ${selected
                  ? 'bg-white shadow text-blue-700'
                  : 'text-blue-500 hover:bg-white/[0.12] hover:text-blue-600'
                }`
              }
            >
              Profile
            </Tab>
            <Tab
              className={({ selected }) =>
                `w-full rounded-lg py-2.5 text-sm font-medium leading-5
                ${selected
                  ? 'bg-white shadow text-blue-700'
                  : 'text-blue-500 hover:bg-white/[0.12] hover:text-blue-600'
                }`
              }
            >
              Orders
            </Tab>
          </Tab.List>

          <Tab.Panels>
            <Tab.Panel>
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4">Profile Information</h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Name</label>
                    <p className="mt-1 text-gray-900">{profile?.data?.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Email</label>
                    <p className="mt-1 text-gray-900">{profile?.data?.email}</p>
                  </div>
                </div>
              </div>
            </Tab.Panel>

            <Tab.Panel>
              <div className="space-y-4">
                {data?.data.map((order) => (
                  <div key={order._id} className="bg-white rounded-lg shadow p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="font-semibold">Order #{order._id}</h3>

                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium
                        bg-green-100 text-green-800`}
                      >
                        Delivered
                      </span>
                    </div>

                    <div className="border-t pt-4">
                      {order.products.map((item) => (
                        <div key={item._id} className="flex justify-between py-2">
                          <div>
                            <p className="font-medium">{item?.product?.title}</p>
                            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                          </div>
                          <p className="font-medium">${item.price}</p>
                        </div>
                      ))}

                      <div className="border-t mt-4 pt-4 flex justify-between">
                        <p className="font-semibold">Total Quantity</p>
                        <p className="font-semibold">{order.totalItems}</p>
                      </div>
                      <div className="border-t mt-4 pt-4 flex justify-between">
                        <p className="font-semibold">Total Prices</p>
                        <p className="font-semibold">${order.totalPrice}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}