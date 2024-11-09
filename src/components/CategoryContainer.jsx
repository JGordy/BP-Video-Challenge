const CategoryContainer = ({ title, description }) => {

    return (
        <div className="category-details">
            <h1>{title}</h1>
            <hr />
            <p>{description}</p>
        </div>
    )
};

export default CategoryContainer;
