import { categoryColors } from '../contants/colors';

export const quoteCategories = {
  love: 'Love',
  traveling: 'Traveling',
  motivational: 'Motivational',
  religion: 'Religion'
}

export const colorForCategory = (category) => {
  return categoryColors[category]
}

export const filterByCategory = (quotes, category) => {
  return quotes.filter(quote => quote.category == category)
}
