/* eslint-disable react/prop-types */
const CategoryCard = (props) => {
    // eslint-disable-next-line react/prop-types
    const { category } = props 
    return (
        <div style={{ 
            backgroundImage: "url('"+category.image+"')",
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end'
         }}>
            <button className="p-3 bg-white text-black m-5">{category.name}</button>
        </div>
  )
}

export default CategoryCard