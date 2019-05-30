import React from 'react'

import ReactDOM from 'react-dom'

class product extends React.Component {

  render() {

    return (

      <div>

        <FilterableProductTable products={PRODUCTS} />,

      </div>

    )

  }

}


class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'blue'}}>
        {product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.population}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const rows = [];
    let lastCategory = null;
    
    this.props.products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Show City you are looking
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}


const PRODUCTS = [
  {category: 'Southen', population: 10000, stocked: true, name: 'Sydney'},
  {category: 'Southen', population: 200000, stocked: true, name: 'Lima '},
  {category: 'Northen', population: 2500000, stocked: false, name: 'Vancouver'},
  {category: 'Northen', population: 40000, stocked: true, name: 'Calgary'},
  {category: 'Northen', population: 2000, stocked: false, name: 'Sakaton'},
  {category: 'Northen', population: 6000000, stocked: true, name: 'Toronto'}
];
 

export default product;