import { FaTag } from 'react-icons/fa';

const ItemCard = ({ item }) => {
  return (
    <div className='rounded-xl shadow-md relative hover:shadow-2xl hover:scale-102 transition-shadow duration-300'>
      <div className='p-4'>
        <div className='md:text-center lg:text-left mb-4'>
          <div className='flex items-center justify-between'>
            <h3 className='text-xl font-bold inline'>
              <FaTag className='inline mr-2' />
              {item.name}
            </h3>
            <span className='bg-blue-300 text-blue-900 text-sm font-semibold mr-2 px-4 py-1 rounded'>
              #{item.id}
            </span>
          </div>
        </div>
        <div className='border border-gray-100 mb-5'></div>
        <div className='flex flex-col lg:flex-row justify-between mb-4'>
          <div className='flex align-middle gap-2 mb-4 lg:mb-0'>
            <div className='flex justify-between w-full mb-4 lg:mb-0'>
                {item.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
