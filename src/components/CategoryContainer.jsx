export const CategoryContainer = ({ videoCategory }) => {
    const { title, description } = videoCategory;

    return (
        <div className="category-details">
            <h1>{title}</h1>
            <hr />
            <p>{description}</p>
        </div>
    )
};
