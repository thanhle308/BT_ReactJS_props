import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let {shoes} = this.props;
        return (
            <div className="card" style={{ width: '18rem' }}>
                <img src={shoes.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{shoes.name}</h5>
                    <p className="card-text">{shoes.shortDescription}</p>
                    <button onClick={() => {
                        this.props.viewDetail(shoes)
                    }} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        View Detail
                    </button>

                </div>
            </div>

        )
    }
}
