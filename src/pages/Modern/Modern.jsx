import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Wrap from '../../components/Wrap/Wrap';
import Footer from '../../components/Footer/Footer';

// فرضًا أنك تخزن البيانات في مصفوفة مثل JSON أو جلبتها من API.
const items = [
  { id: 1, src: "./src/assets/Home1.jpg", title: "Modern Design 1", price: "3000",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  { id: 2, src: "./src/assets/Home1.jpg", title: "Modern Design 2", price: "3500",  },
  // تكمل باقي الصور
];

const Modern = () => {
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
          <Link to={`/item/${item.id}`} key={item.id}>
            <Wrap
              src={item.src}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination flex justify-center gap-2 mt-4">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          السابق
        </button>
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
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          التالي
        </button>
      </div>

      <Footer />
    </>
  );
};

export default Modern;
