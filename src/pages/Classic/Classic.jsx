import React, { useState } from 'react';
import Wrap from '../../components/Wrap/Wrap';
import Footer  from '../../components/Footer/Footer'
const Classic = () => {
  // 1. كل العناصر في مصفوفة واحدة
  const items = Array.from({ length: 300 }, (_, i) => ({
    id: i,
    src: "./src/assets/Home1.jpg",
    title: `Classic Design ${i + 1}`,
    price: "3000",
    decription: "lo",
  }));

  // 2. إعدادات الـ pagination
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className="con grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {currentItems.map((item) => (
          <Wrap
            key={item.id}
            src={item.src}
            title={item.title}
            price={item.price}
            decription={item.decription}
          />
        ))}
      </div>

      {/* 3. أزرار التنقل بين الصفحات */}
      <div className="pagination flex justify-center gap-2 mt-4">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          السابق
        </button>

        {/* عرض الصفحة الحالية + الصفحتين التاليين */}
        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .slice(currentPage - 1, currentPage + 2)
          .map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={currentPage === page ? "active" : ""}
            >
              {page}
            </button>
        ))}

        {/* إضافة ... إذا كانت هناك صفحات بين الأرقام المعروضة والأرقام الأخيرة */}
        {currentPage < totalPages - 3 && (
          <span>...</span>
        )}

        {/* عرض آخر 3 أرقام */}
        {currentPage < totalPages - 2 && (
          Array.from({ length: totalPages }, (_, i) => i + 1)
            .slice(totalPages - 3)
            .map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={currentPage === page ? "active" : ""}
              >
                {page}
              </button>
            ))
        )}

        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          التالي
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Classic;
