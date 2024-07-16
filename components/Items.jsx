'use client';
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Image from 'next/image';
import { GET_ITEMS } from '@/graphql/queries/GetItems';
import Spinner from '@/components/Spinner';
import Pagination from '@/components/Pagination';
import ItemCard from '@/components/ItemCard';
import errorImage from '@/assets/images/error.png';

const Items = () => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(15);
    const [items, setItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [inputWord, setInputWord] = useState('');
    const [keywords, setKeywords] = useState('');

    const { loading, error, data, refetch } = useQuery(GET_ITEMS, {
        variables: {
          keywords: keywords,
          page,
          pageSize
        },
    });

    useEffect(() => {
      refetch();
      if (data && data.items) {
        const items = data?.items?.items;
        const total = data?.items?.total;
        setItems(items);
        setTotalItems(total);
      }
    },[data, page, pageSize, refetch]);

    const handlePageChange = (newPage) => {
      setPage(newPage);
    };

    const handleSubmitSearch = (e) => {
      e.preventDefault();
      setKeywords(inputWord);
    };

  if (loading) return <Spinner/>;
  if (error) return (
    <div className="flex flex-col flex-grow items-center justify-center py-5">
        <Image src={errorImage} className="h-20 w-auto" alt="Error .."/>
        <b className='text-2xl text-red-500 py-3'>Error</b>
        <p className='text-black text-center'>{error.message}</p>
    </div>
  );
  return (
    <section className='px-4 py-2'>
      <div className='container-xl lg:container m-auto px-4 py-3'>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-4'>
            <div className='mb-4 md:mb-0'>
                <p className='pb-3'>Listing : {totalItems} items</p>
            </div>
            <div>
                <form className="max-w-md mx-auto py-2" onSubmit={handleSubmitSearch} action='#'>   
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full px-4 py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Name, Description ..." value={inputWord} onChange={(e) => setInputWord(e.target.value)} />
                    </div>
                </form>
            </div>
        </div>
        {items.length === 0 ? (
          <div className='md:py-5 text-center'>
            <p className='text-2xl font-bold'>Item not found!</p>
          </div>
        ) : (
          <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {items.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}
        {items.length > 0 && (
          <Pagination
            page={page}
            pageSize={pageSize}
            totalItems={totalItems}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </section>
  );
};
export default Items;
