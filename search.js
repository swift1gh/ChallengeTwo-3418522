class SearchSuggestionSystem {
  constructor(products) {
    this.products = products.sort();
  }

  getSuggestions(searchWord) {
    const result = [];
    let prefix = "";

    for (let ch of searchWord) {
      prefix += ch;
      const suggestions = [];

      for (let product of this.products) {
        if (product.startsWith(prefix)) {
          suggestions.push(product);
          if (suggestions.length === 3) break;
        }
      }

      result.push(suggestions);
    }

    return result;
  }
}
