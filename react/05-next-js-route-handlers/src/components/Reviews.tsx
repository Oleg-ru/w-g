async function Reviews() {
    await new Promise(resolve => setTimeout(resolve, 3000))
    return (
        <div>Отзывы</div>
    );
}

export default Reviews;