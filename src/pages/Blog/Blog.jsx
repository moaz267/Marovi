import React from 'react';
import { useParams } from 'react-router-dom';

const Blog = () => {
  const { id } = useParams(); // الحصول على الـ id من الرابط

  // يمكنك استرجاع البيانات الخاصة بالصورة باستخدام الـ id
  // مثال على البيانات التي يمكن أن تكون لديك:
  const items = Array.from({ length: 300 }, (_, i) => ({
    id: i,
    src: "./src/assets/Home1.jpg",
    title: `Modern  ${i + 1}`,
    description: "وصف الصورة هنا",
  }));

  const image = items.find(item => item.id === parseInt(id));

  return (
    <div className="blog-container">
      {image ? (
        <div className="image-details">
          <h1>{image.title}</h1>
          <img src={image.src} alt={image.title} />
          <p className=''>{image.description}</p>
        </div>
      ) : (
        <p>الصورة غير موجودة</p>
      )}
    </div>
  );
};

export default Blog;
