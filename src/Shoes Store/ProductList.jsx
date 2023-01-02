import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

    renderProduct = () => {
        return this.props.ListShoes.map((shoes) => {
            return <div className="col-4" key={shoes.id}>
                <ProductItem  shoes={shoes} viewDetail={this.props.viewDetail}/>
            </div>
        })
    }
    render() {
        return (
            <div className="row">
                {this.renderProduct()}
            </div>
        )
    }
}
