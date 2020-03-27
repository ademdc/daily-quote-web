export const quoteCategories = {
  love: 'Love',
  traveling: 'Traveling',
  motivational: 'Motivational',
  religion: 'Religion'
}

export const filterByCategory = (quotes, category) => {
  return quotes.filter(quote => quote.category == category)
}
