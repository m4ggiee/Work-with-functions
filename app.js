showProducts();

const productNumber = getNumericValue(`Enter product number wich you wanna buy:`, products.length);

const productAmount = getNumericValue(`Enter products amount:`);

const selectProduct = getProduct(productNumber);

calculateAndShowPrice(selectProduct, productAmount);



