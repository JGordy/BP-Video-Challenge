export const CategoryContainer = ({ videoCategory }) => {
    const { title, description } = videoCategory;

    return (
        <>
            <h1>{title}</h1>
            <hr />
            <p>{description}</p>
        </>
    )
};
