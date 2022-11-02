const formateDate = (date) => {
    const fonattedDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        yeah: "numeric"
    })
    return fonattedDate
}

export default formateDate