import React from 'react';

export const OBatCuDau = () => {
  // Example data structure for the categories
  const categories = [
    {
      name: "Toàn bộ nhà",
      imageUrl: "https://a0.muscache.com/im/pictures/airflow/Hosting-31437113/original/8f9ccebe-74fc-4747-9ff1-412b50a94f59.jpg?im_w=720&im_format=avif", 
      description: "Your own place with all the private space you need"
    },
    {
      name: "Chỗ ở độc đáo",
      imageUrl: "https://forbes.vn/wp-content/uploads/2022/06/Airbnb.jpg", 
      description: "Distinctive places with unique style"
    },
    {
      name: "Trang trại và thiên nhiên",
      imageUrl: "https://a0.muscache.com/im/pictures/c8a6d988-84ea-497e-a771-2959892fa549.jpg?im_w=720&im_format=avif", 
      description: "Stay among nature and wide-open spaces"
    },
    {
      name: "Cho phép mang theo thú cưng",
      imageUrl: "https://blog.hichee.com/wp-content/uploads/2024/01/pet-friendly-Airbnb.png", 
      description: "Don't leave your pets behind, they're welcome"
    }
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg text-black">
      <h2 className="text-xl font-semibold mb-4">Ở bất cứ đâu</h2>
      <div className="grid grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="text-center">
            <img src={category.imageUrl} alt={category.name} className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">{category.name}</h3>
            <p className="text-sm text-gray-600">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
